const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
      title: '好看又实用的h5页面构图方法',
      img: 'https://i.loli.net/2019/11/18/Y2CzPAWIZB1kvxU.png',
      url: 'programmingcontent/h5/h5'
    },
    {
      title: 'Python编程的若干个经典小技巧',
      img: 'https://i.loli.net/2019/11/18/wBb1tdvS5sh9qfu.png',
      url: 'articlecontent/3python/3page'
    },
    {
      title: 'Windows系统MySql命令行大全',
      img: 'https://i.loli.net/2019/11/23/t35b8cypsPxvAQR.png',
      url: 'programmingcontent/mysql/mysql'
    },
    {
      title: '微信小程序云开发实现微信用户登录',
      img: 'https://i.loli.net/2019/11/18/rPl58LFUJxXOi4I.png',
      url: 'programmingcontent/h5/h5'
    }
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/homepages/' + e.currentTarget.dataset.url
      })
    },
  }
});