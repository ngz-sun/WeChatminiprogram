const app = getApp();
Page({
  data: {
    ColorList: app.globalData.ColorList,
    color: 'red',
    jindu:  "20%"
  },
  onLoad: function (options) {
    // let that = this;
    // const newjindu = options.jindudata
    // that.setData({
    //   jindu: newjindu
    // })
    // },

    let that = this;
    
     wx.getStorage({
        key: 'jindu',
        success: function (res) {
        that.setData({
        jindu: res.data,
      })
    }
  })
},
  //   setTimeout(function () {
  //     that.setData({
  //       loading: true
  //     })
  //   }, 500)
  // },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
  SetActive(e) {
    this.setData({
      active: e.detail.value
    })
  }
})