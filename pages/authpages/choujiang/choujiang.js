// pages/authpages/choujiang/choujiang.js
var app = getApp()
var hongbao = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    awardsList: {},
    money: 0,
    count: 50,
    animationData: {},
    disabled: "disabled",
    able: "able",
    turning: false,
    scale: 1,
    contentHeight: null,
    isLogin:null,
    userInfo: null,
    hasUserInfo: false,
    isShare: false,
    isHongbao: false,
    isMini: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  }, 

  getLottery: function () {
    var that = this

    if (that.data.count < 5) {   //判断用户钻石数量是否大于等于5
      that.setData({
        isShare: true
      })
      return
    }
    //减少钻石数量：
    that.setData({
      count: that.data.count - 5,
      turning: true
    });
    wx.setStorageSync('count', that.data.count)
    setTimeout(function () {
      that.setData({
        turning: false
      })
    }, 4500)
    var cot = that.data.count
    // var awardIndex = Math.random() * 6 >>> 0;
    // 获取奖品配置
    var awardsConfig = app.awardsConfig,
      runNum = 4,
      awardIndex = 0;
    // if (awardIndex < 2) awardsConfig.chance = false
    // console.log(awardIndex)
    //设置概率：随机从数组中抽取一个数，数组中越大的数出现的次数越少，以此实现概率差异
    var Parr = [150,150,150,150,150,150,150,150, 140,140,140,140, 100, 100,100,100,100,100,100,100,100,100, 60, 60, 60, 30,30,30, 10,10,10,10,10,10,10,10,10,10,10,10,10, 10, 10, 10, 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    var PrandomNum = Math.random() * 78 >>> 0;
    switch (Parr[PrandomNum]) {
      case 2:
        awardIndex = 1
        break
      case 5:
        awardIndex = 0
        break
      case 10:
        awardIndex = 2
        break
      case 30:
        awardIndex = 3
        break
      case 60:
        awardIndex = 4
        break
      case 100:
        awardIndex = 5
        break
      case 150:
        awardIndex = 6
        break
    }
    console.log("奖品序号：" + awardIndex);
    // 旋转抽奖
    app.runDegs = app.runDegs || 0
    console.log('deg', app.runDegs)
    app.runDegs = app.runDegs + (360 - app.runDegs % 360) + (360 * runNum - awardIndex * (360 / 7))
    console.log('deg', app.runDegs)

    var animationRun = wx.createAnimation({
      duration: 4000,
      timingFunction: 'ease'
    })
    that.animationRun = animationRun
    animationRun.rotate(app.runDegs).step()
    that.setData({
      animationData: animationRun.export()
    })

    // 记录奖品
    var winAwards = wx.getStorageSync('winAwards') || { data: [] }
    winAwards.data.push(awardsConfig.awards[awardIndex].name + '1个')
    wx.setStorageSync('winAwards', winAwards)

    // 中奖提示
    setTimeout(function () {
      if (awardIndex == 0) {
        that.setData({
          isHongbao: true
        })
        hongbao = Math.random().toFixed(4)
      } else if (awardIndex == 1) {
        that.setData({
          isHongbao: true
        })
      } else if (awardIndex == 2) {
        wx.showModal({
          title: '恭喜',
          content: '您获得10钻石',
          showCancel: false
        })
        let timer = setInterval(function () {
          that.setData({
            count: that.data.count + 1
          })
          let a = parseInt(that.data.count - cot)
          if (a == 10) {
            clearInterval(timer)
          }
        }, 50)

      } else if (awardIndex == 3) {
        that.setData({
          isShare: true
        })
        return
      } else if (awardIndex == 4) {
        wx.showModal({
          title: '恭喜',
          content: '您获得宝箱',
          showCancel: false
        })
      } else if (awardIndex == 5) {
        wx.showModal({
          title: '恭喜',
          content: '您获得1积分已存入账户',
          showCancel: false
        })
        let m = parseFloat(parseFloat(that.data.money) + 1).toFixed(4)
        that.setData({
          money: m
        })
        wx.setStorageSync('money', that.data.money)

      } else {
        wx.showModal({
          title: '恭喜',
          content: '您获得5积分已存入账户',
          showCancel: false
        })
        let m = parseFloat(parseFloat(that.data.money) + 5).toFixed(4)
        that.setData({
          money: m
        })
        wx.setStorageSync('money', that.data.money)

      }
    }, 4000);
  },
  onReady: function (e) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          contentHeight: res.windowHeight
        });
        if (res.windowWidth < 360) {
          that.setData({
            scale: 0.9
          })
        } else if (res.windowWidth > 500) {
          that.setData({
            scale: 1.4
          })
        }
      },
    })
    // getAwardsConfig
    app.awardsConfig = {
      count: 20,
      awards: [
        { 'index': 0, 'name': '谢谢光临' },
        { 'index': 1, 'name': '继续努力' },
        { 'index': 2, 'name': '10钻' },
        { 'index': 3, 'name': '大量钻石' },
        { 'index': 4, 'name': '宝箱' },
        { 'index': 5, 'name': '1积分' },
        { 'index': 6, 'name': '5积分' }

      ]
    }
    wx.getStorage({
      key: 'count',
      success: function (res) {
        that.setData({
          count: res.data,
        })
      }
    })
    wx.getStorage({
      key: 'money',
      success: function (res) {
        that.setData({
          money: res.data,
        })
      }
    })
    // wx.setStorageSync('awardsConfig', JSON.stringify(awardsConfig))
    // that.setData({
    //   count: app.awardsConfig.count
    // })

    // 绘制转盘
    var awardsConfig = app.awardsConfig.awards,
      len = awardsConfig.length,
      rotateDeg = 360 / len / 2 + 90,
      html = [],
      turnNum = 1 / len;  // 文字旋转 turn 值
    var ctx = wx.createContext();
    for (var i = 0; i < len; i++) {
      // 保存当前状态
      ctx.save();
      // 开始一条新路径
      ctx.beginPath();
      // 位移到圆心，下面需要围绕圆心旋转
      ctx.translate(150, 150);
      // 从(0, 0)坐标开始定义一条新的子路径
      ctx.moveTo(0, 0);
      // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
      ctx.rotate((360 / len * i - rotateDeg) * Math.PI / 180);
      // 绘制圆弧
      ctx.arc(0, 0, 150, 0, 2 * Math.PI / len, false);

      // 颜色间隔
      if (i % 2 == 0) {
        ctx.setFillStyle('rgba(255,184,32,.1)');
      } else {
        ctx.setFillStyle('rgba(255,203,63,.1)');
      }

      // 填充扇形
      ctx.fill();
      // 绘制边框
      ctx.setLineWidth(0.5);
      ctx.setStrokeStyle('rgba(228,55,14,.1)');
      ctx.stroke();

      // 恢复前一个状态
      ctx.restore();

      // 奖项列表
      html.push({ turn: i * turnNum + 'turn', lineTurn: i * turnNum + turnNum / 2 + 'turn', award: awardsConfig[i].name, img: awardsConfig[i].img });
    };

    that.setData({
      awardsList: html
    });

    app.globalData.moneyData = {
      count: that.data.count,
      money: that.data.money
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let _isLogin = wx.getStorageSync('isLogin');
    if (!_isLogin) {
      let _duration = 800;
      wx.showToast({
        title: '您还未登录,请先登录~',
        icon: 'none',
        duration: _duration
      })
      setTimeout(() => {
        wx.navigateTo({
          url: '../login/login',
        })
      }, _duration)
    } else {
      this.setData({
        isLogin: true,
        userInfo: wx.getStorageSync('userInfo')
      })
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {


  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})