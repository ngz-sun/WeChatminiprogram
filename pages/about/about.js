Page({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    list1:['数据结构+数据库','电影推荐','资源分享'],
    moves: [],
    isCollected: false,
    isCollected1:false,
    isCollected2: false,
    isCollected3: false,
    isCollected4: false,
    isCollected5: false,
    isCollected6: false,
    isCollected7: false,
    isCollected8: false,
    isCollected9: false,
    isCollected10: false,
    detailObj: {}, 
    index:null // 当前热映相关数据
  },
  //   bindchange: function (e) {
  //   const that = this;
  //   that.setData({
  //     currentData: e.detail.current
  //   })
  // },
  // //点击切换，滑块index赋值
  // checkCurrent: function (e) {
  //   const that = this;

  //   if (that.data.currentData === e.target.dataset.current) {
  //     return false;
  //   } else {

  //     that.setData({
  //       currentData: e.target.dataset.current
  //     })
  //   }
  // }
  handleCollection:function() {
    let isCollected = !this.data.isCollected
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected
    })
    //提示用户
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[1] = isCollected;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  handleCollection1: function () {
    let isCollected1 = !this.data.isCollected1
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected1
    })
    //提示用户
    wx.showToast({
      title: isCollected1 ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[2] = isCollected1;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  handleCollection2: function () {
    let isCollected2 = !this.data.isCollected2
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected2
    })
    //提示用户
    wx.showToast({
      title: isCollected2 ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[3] = isCollected2;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  handleCollection3: function () {
    let isCollected3 = !this.data.isCollected3
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected3
    })
    //提示用户
    wx.showToast({
      title: isCollected3 ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[4] = isCollected3;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  handleCollection4: function () {
    let isCollected4 = !this.data.isCollected4
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected4
    })
    //提示用户
    wx.showToast({
      title: isCollected4 ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[5] = isCollected4;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  handleCollection5: function () {
    let isCollected5 = !this.data.isCollected5
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected5
    })
    //提示用户
    wx.showToast({
      title: isCollected5 ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[6] = isCollected5;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  handleCollection6: function () {
    let isCollected6 = !this.data.isCollected6
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected6
    })
    //提示用户
    wx.showToast({
      title: isCollected6 ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[7] = isCollected6;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  handleCollection7: function () {
    let isCollected7 = !this.data.isCollected7
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected7
    })
    //提示用户
    wx.showToast({
      title: isCollected7 ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[8] = isCollected7;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  handleCollection8: function () {
    let isCollected8 = !this.data.isCollected8
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected8
    })
    //提示用户
    wx.showToast({
      title: isCollected8 ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[9] = isCollected8;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  handleCollection9: function () {
    let isCollected9 = !this.data.isCollected9
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected9
    })
    //提示用户
    wx.showToast({
      title: isCollected9 ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[10] = isCollected9;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  handleCollection10: function () {
    let isCollected10 = !this.data.isCollected10
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected10
    })
    //提示用户
    wx.showToast({
      title: isCollected10 ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //首先去看一下缓存的数据
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[11] = isCollected10;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
  },
  onShareAppMessage: function (res) {   //分享小程序
    return {
      title: '资料大全',
      imageUrl: '' // 图片 URL
    }
  },
  onLoad:function() {
    this.moveList();
  },
  onShow: function () {
    let detailStorage = wx.getStorageSync('isCollected')
    //如果没有收藏
    if (!detailStorage) {
      //初始化一个空的对象
      wx.setStorageSync('isCollected', {});
    }
    //如果收藏了
    if (detailStorage[1]) {
      this.setData({
        isCollected: true
      })
    }else{
      this.setData({
        isCollected: false
      })
    }
    if (detailStorage[2]) {
      this.setData({
        isCollected1: true
      })
    } else {
      this.setData({
        isCollected1: false
      })
    }
    if (detailStorage[3]) {
      this.setData({
        isCollected2: true
      })
    } else {
      this.setData({
        isCollected2: false
      })
    }
    if (detailStorage[4]) {
      this.setData({
        isCollected3: true
      })
    } else {
      this.setData({
        isCollected3: false
      })
    }
    if (detailStorage[5]) {
      this.setData({
        isCollected4: true
      })
    } else {
      this.setData({
        isCollected4: false
      })
    }
    if (detailStorage[6]) {
      this.setData({
        isCollected5: true
      })
    } else {
      this.setData({
        isCollected5: false
      })
    }
    if (detailStorage[7]) {
      this.setData({
        isCollected6: true
      })
    } else {
      this.setData({
        isCollected6: false
      })
    }
    if (detailStorage[8]) {
      this.setData({
        isCollected7: true
      })
    } else {
      this.setData({
        isCollected7: false
      })
    }
    if (detailStorage[9]) {
      this.setData({
        isCollected8: true
      })
    } else {
      this.setData({
        isCollected8: false
      })
    }
    if (detailStorage[10]) {
      this.setData({
        isCollected9: true
      })
      }else {
      this.setData({
        isCollected9: false
      })
    }
    if (detailStorage[11]) {
      this.setData({
        isCollected10: true
      })
    } else {
      this.setData({
        isCollected10: false
      })
    }
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
  
  moveList() {
    // wx.showToast({
    //   title: '正在加载',
    //   icon: 'loading',
    //   duration: 5000
    // })
    let thisPage = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        thisPage.setData({
          moves: res.data.subjects,
        })
      },
    })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  buttonfunction:function(){
    wx.cloud.downloadFile({
      fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/图的创建.docx', // 文件 ID
      success:function (res){
        wx.hideLoading()

        wx.showLoading({

          title: '正在打开文件...',

          mask: true,

        })
        if (res.statusCode === 200) {
        // 返回临时文件路径
          var filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success:function(res){
              console.log('打开文档成功')
              wx.hideLoading()

            },
            fail(res) {

              wx.showLoading({

                title: '打开文档失败',

                mask: true,

              });

              console.log(res);

            }
          })
        
      }
      
      },
      fail: (res) => {

        wx.showToast({

          title: "下载失败",

          mask: true,

          icon: 'none'

        })
      }
    })
  },
  buttonfunction1: function () {
    wx.cloud.downloadFile({
      fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/mysqldata/mysql.doc', // 文件 ID
      success: function (res) {
        wx.hideLoading()

        wx.showLoading({

          title: '正在打开文件...',

          mask: true,

        })
        if (res.statusCode === 200) {
          // 返回临时文件路径
          var filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
              wx.hideLoading()

            },
            fail(res) {

              wx.showLoading({

                title: '打开文档失败',

                mask: true,

              });

              console.log(res);

            }
          })

        }

      },
      fail: (res) => {

        wx.showToast({

          title: "下载失败",

          mask: true,

          icon: 'none'

        })
      }
    })
  },
  buttonfunction2: function () {
    wx.cloud.downloadFile({
      fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/mysqldata/python.doc', // 文件 ID
      success: function (res) {
        wx.hideLoading()

        wx.showLoading({

          title: '正在打开文件...',

          mask: true,

        })
        if (res.statusCode === 200) {
          // 返回临时文件路径
          var filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
              wx.hideLoading()

            },
            fail(res) {

              wx.showLoading({

                title: '打开文档失败',

                mask: true,

              });

              console.log(res);

            }
          })

        }

      },
      fail: (res) => {

        wx.showToast({

          title: "下载失败",

          mask: true,

          icon: 'none'

        })
      }
    })
  },
  buttonfunction3: function () {
    wx.cloud.downloadFile({
      fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/mysqldata/wupan.doc', // 文件 ID
      success: function (res) {
        wx.hideLoading()

        wx.showLoading({

          title: '正在打开文件...',

          mask: true,

        })
        if (res.statusCode === 200) {
          // 返回临时文件路径
          var filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
              wx.hideLoading()

            },
            fail(res) {

              wx.showLoading({

                title: '打开文档失败',

                mask: true,

              });

              console.log(res);

            }
          })

        }

      },
      fail: (res) => {

        wx.showToast({

          title: "下载失败",

          mask: true,

          icon: 'none'

        })
      }
    })
  },
  buttonfunction4: function () {
    wx.cloud.downloadFile({
      fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/mysqldata/hafumashu.docx', // 文件 ID
      success: function (res) {
        wx.hideLoading()

        wx.showLoading({

          title: '正在打开文件...',

          mask: true,

        })
        if (res.statusCode === 200) {
          // 返回临时文件路径
          var filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
              wx.hideLoading()

            },
            fail(res) {

              wx.showLoading({

                title: '打开文档失败',

                mask: true,

              });

              console.log(res);

            }
          })

        }

      },
      fail: (res) => {

        wx.showToast({

          title: "下载失败",

          mask: true,

          icon: 'none'

        })
      }
    })
  },
    buttonfunction5: function() {
      wx.cloud.downloadFile({
        fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/mysqldata/danlianbiao.docx', // 文件 ID
        success: function (res) {
          wx.hideLoading()

          wx.showLoading({

            title: '正在打开文件...',

            mask: true,

          })
          if (res.statusCode === 200) {
            // 返回临时文件路径
            var filePath = res.tempFilePath
            wx.openDocument({
              filePath: filePath,
              success: function (res) {
                console.log('打开文档成功')
                wx.hideLoading()

              },
              fail(res) {

                wx.showLoading({

                  title: '打开文档失败',

                  mask: true,

                });

                console.log(res);

              }
            })

          }

        },
        fail: (res) => {

          wx.showToast({

            title: "下载失败",

            mask: true,

            icon: 'none'

          })
        }
      })
  }, 
    buttonfunction6: function() {
      wx.cloud.downloadFile({
        fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/mysqldata/lianzhan.doc', // 文件 ID
        success: function (res) {
          wx.hideLoading()

          wx.showLoading({

            title: '正在打开文件...',

            mask: true,

          })
          if (res.statusCode === 200) {
            // 返回临时文件路径
            var filePath = res.tempFilePath
            wx.openDocument({
              filePath: filePath,
              success: function (res) {
                console.log('打开文档成功')
                wx.hideLoading()

              },
              fail(res) {

                wx.showLoading({

                  title: '打开文档失败',

                  mask: true,

                });

                console.log(res);

              }
            })

          }

        },
        fail: (res) => {

          wx.showToast({

            title: "下载失败",

            mask: true,

            icon: 'none'

          })
        }
      })
    },
  buttonfunction7: function () {
    wx.cloud.downloadFile({
      fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/mysqldata/shunxubiao.doc', // 文件 ID
      success: function (res) {
        wx.hideLoading()

        wx.showLoading({

          title: '正在打开文件...',

          mask: true,

        })
        if (res.statusCode === 200) {
          // 返回临时文件路径
          var filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
              wx.hideLoading()

            },
            fail(res) {

              wx.showLoading({

                title: '打开文档失败',

                mask: true,

              });

              console.log(res);

            }
          })

        }

      },
      fail: (res) => {

        wx.showToast({

          title: "下载失败",

          mask: true,

          icon: 'none'

        })
      }
    })
  },
  buttonfunction8: function () {
    wx.cloud.downloadFile({
      fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/mysqldata/shunxuzhan.doc', // 文件 ID
      success: function (res) {
        wx.hideLoading()

        wx.showLoading({

          title: '正在打开文件...',

          mask: true,

        })
        if (res.statusCode === 200) {
          // 返回临时文件路径
          var filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
              wx.hideLoading()

            },
            fail(res) {

              wx.showLoading({

                title: '打开文档失败',

                mask: true,

              });

              console.log(res);

            }
          })

        }

      },
      fail: (res) => {

        wx.showToast({

          title: "下载失败",

          mask: true,

          icon: 'none'

        })
      }
    })
  },
  buttonfunction9: function () {
    wx.cloud.downloadFile({
      fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/mysqldata/zifuchuan.doc', // 文件 ID
      success: function (res) {
        wx.hideLoading()

        wx.showLoading({

          title: '正在打开文件...',

          mask: true,

        })
        if (res.statusCode === 200) {
          // 返回临时文件路径
          var filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
              wx.hideLoading()

            },
            fail(res) {

              wx.showLoading({

                title: '打开文档失败',

                mask: true,

              });

              console.log(res);

            }
          })

        }

      },
      fail: (res) => {

        wx.showToast({

          title: "下载失败",

          mask: true,

          icon: 'none'

        })
      }
    })
  },
  buttonfunction10: function () {
    wx.cloud.downloadFile({
      fileID: 'cloud://nan-0807.6e61-nan-0807-1300473056/mysqldata/datadaan.doc', // 文件 ID
      success: function (res) {
        wx.hideLoading()

        wx.showLoading({

          title: '正在打开文件...',

          mask: true,

        })
        if (res.statusCode === 200) {
          // 返回临时文件路径
          var filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
              wx.hideLoading()

            },
            fail(res) {

              wx.showLoading({

                title: '打开文档失败',

                mask: true,

              });

              console.log(res);

            }
          })

        }

      },
      fail: (res) => {

        wx.showToast({

          title: "下载失败",

          mask: true,

          icon: 'none'

        })
      }
    })
  },
})