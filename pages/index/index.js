//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎来到乌江霸王祠景区',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      './../../static/images/banners/banner1.jpg',
      './../../static/images/banners/banner2.jpg',
      './../../static/images/banners/banner3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    descList: [{
        title: '景区名称',
        content: '乌江霸王祠景区'
      },
      {
        title: '开放时间',
        content: '夏季（早8:00—晚5:30）冬季（早8:00—晚5:00）'
      },
      {
        title: '景区位置',
        content: '安徽省马鞍山市和县乌江镇驻马路100号'
      },
      {
        title: '景区评级',
        content: '国家3A级旅游景区'
      }
    ],
    attractions: [{
        name: '西侧殿',
        image: './../../static/images/index/list-1.png'
      },
      {
        name: '东侧殿',
        image: './../../static/images/index/list-2.png'
      },
      {
        name: '享殿',
        image: './../../static/images/index/list-3.png'
      },
      {
        name: '西楚霸王衣冠冢',
        image: './../../static/images/index/list-4.png'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  callUp: function() {
    wx.makePhoneCall({
      phoneNumber: '0555-5391207'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 页面跳转
   */
  bindToView(url) {
    wx.navigateTo({
      url: url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // wx.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.record']) {
    //       wx.authorize({
    //         scope: 'scope.record',
    //         success(res) {
    //           // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //           console.log(res)
    //           wx.startRecord()
    //         }
    //       })
    //     }
    //   }
    // })
  },
})