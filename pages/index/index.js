//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    detailId: null,
    motto: '欢迎来到乌江霸王祠景区',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-banner/banner1.jpg',
      'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-banner/banner2.jpg',
      'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-banner/banner3.jpg',
      'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-banner/banner4.jpg',
      'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-banner/banner5.jpg'
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
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-1.jpg'
      },
      {
        name: '东侧殿',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-2.jpg'
      },
      {
        name: '享殿',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-3.jpg'
      },
      {
        name: '西楚霸王衣冠冢',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-4.jpg'
      },
      {
        name: '驻马河',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-5.jpg'
      },
      {
        name: '乌江亭',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-6.jpg'
      },
      {
        name: '抛首石',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-7.jpg'
      },
      {
        name: '三十一响钟亭',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-8.jpg'
      },
      {
        name: '碑廊',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-9.jpg'
      },
      {
        name: '霸王祠“三月三”庙会',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-10.jpg'
      }
    ]
  },
  /**
   * 打电话
   */
  callUp: function() {
    wx.makePhoneCall({
      phoneNumber: '0555-5391207'
    })
  },
  /**
   * 获取信息 授权
   */
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
  toDetail(e) {
    this.setData({
      detailId: e.currentTarget.dataset.idx
    })
    console.log('this.detailId', this.data.detailId)
    app.toView('/pages/detail/detail', {
      detail_id: this.data.detailId
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
  upLoad() {
    wx.chooseImage({
      success: chooseResult => {
        // 将图片上传至云存储空间
        wx.cloud.uploadFile({
          // 指定上传到的云路径
          cloudPath: 'my-photo.png',
          // 指定要上传的文件的小程序临时文件路径
          filePath: chooseResult.tempFilePaths[0],
          // 成功回调
          success: res => {
            console.log('上传成功', res)
          },
        })
      },
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})