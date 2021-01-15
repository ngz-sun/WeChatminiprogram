const app = getApp();
const db = wx.cloud.database({
  env:"nan-0807"
});
let index = 5;
Component({
  data: {
    index: 5,
    list:[]
  },
  methods:{
    onLoad: function (options) {
      // 创建一个变量来保存页面page示例中的this, 方便后续使用
      db.collection('artile').limit(5).get({
        success: res => {
          this.setData({
            list: res.data
          })
        }
      })
    },
    onReachBottom: function () {
      if (index == 11) {
        index == 11;
        this.setData({
          index: index
        })
      } else {
        index = this.data.index + 3
        this.setData({
          index: index
        })}
      var _this = this;
      db.collection('artile').limit(index).get({
        success: res => {
          this.setData({
            list: res.data
          })
        }
      })
      wx.hideLoading();
    },
    toChild(e) {
      wx.navigateTo({
        url: '/pages/homepages' + e.currentTarget.dataset.url
      })
    },
  }
});