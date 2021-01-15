//app.js
const apiConfig = require('./utils/request.js').apiConfig;
const api = require('./utils/api.js');
const util = require('./utils/util.js');
App({
  apiConfig: apiConfig,
  api: api,
  util: util,
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'nan-0807'
      }),
      
      this.globalData = {}
    
      wx.getSystemInfo({
          success: e => {
            this.globalData.StatusBar = e.statusBarHeight;
            let capsule = wx.getMenuButtonBoundingClientRect();
            if (capsule) {
              this.globalData.Custom = capsule;
              this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
            } else {
              this.globalData.CustomBar = e.statusBarHeight + 50;
            }
          }
        })
    }
  },

  globalData: {
    awardsConfig: {},
    runDegs: 0
  },
  prevPage: function () {
    let pages = getCurrentPages(); //当前页面
    return pages[pages.length - 2]; //上一页面
  },
  checkUpdate() {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      if (!res.hasUpdate) {
        console.log('当前已是最新版本')
      } else {
        console.log('您有新版本需要更新')
      }
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
      console.log('意外：新版本下载失败')
    })
  }
})
