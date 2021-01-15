// pages/auth/auth.js
const app = getApp();
Page({
  data: {
    cardCur: 0,
    ColorList: app.globalData.ColorList,
    indicatorDots: false,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'cloud://nan-0807.6e61-nan-0807-1300473056/lunbotu/1.jpeg'
    }, {
      id: 1,
      type: 'image',
        url: 'cloud://nan-0807.6e61-nan-0807-1300473056/lunbotu/2.png',
    }, {
      id: 2,
      type: 'image',
        url: 'cloud://nan-0807.6e61-nan-0807-1300473056/lunbotu/erweima.jpeg'
    }, {
      id: 3,
      type: 'image',
        url: 'cloud://nan-0807.6e61-nan-0807-1300473056/lunbotu/np.png'
    }, {
      id: 4,
      type: 'image',
        url: 'cloud://nan-0807.6e61-nan-0807-1300473056/lunbotu/5.png'
    }],
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  onShareAppMessage:function(res) {   //分享小程序
    return {
      title: '非常实用的小程序',
      imageUrl: '' // 图片 URL
    }
  },
  onShow: function (e) {
    this.setData({
      msgList: [
        { title: "Python 3.8 正式发布，新特性全面解读",url:'/pages/homepages/articlecontent/3python/3page'},
        { title: "新手教程：教你如何快速上手小程序", url:"/pages/homepages/articlecontent/xiaochengxu/xiaochengxu"},
        { title: "Java很火，Go潜力股，那么未来五年最具前景的编程语言是什么",url:'/pages/homepages/articlecontent/java/java' }]
    });
  },
  buttonListener: function () {
    var that = this
    wx.navigateTo({
      url: '/pages/homepages/articlecontent/web/web'
    })
  },
  buttonListener0: function () {
    var that = this
    wx.navigateTo({
      url: '/pages/homepages/articlecontent/web/web'
    })
  },
  buttonListener1: function () {
    var that = this
    wx.navigateTo({
      url: '/pages/homepages/articlecontent/web/web'
    })
  },
  buttonListener2: function () {
    var that = this
    wx.navigateTo({
      url: '/pages/homepages/articlecontent/web/web'
    })
  },
})

