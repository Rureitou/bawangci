// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imgUrls: [
    //   'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-banner/banner1.jpg',
    //   'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-banner/banner2.jpg',
    //   'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-banner/banner3.jpg',
    //   'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-banner/banner4.jpg',
    //   'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-banner/banner5.jpg'
    // ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    name: '',
    title: '',
    content: [],
    info: [],
    imgs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(getCurrentPages())
    const pages = getCurrentPages()
    const curentPage = pages[pages.length - 1]
    console.log(curentPage)
    const params = curentPage.options
    const db = wx.cloud.database();
    db.collection('details').where({ detail_id: Number(params.detail_id)}).get().then(res => {
      console.log(res)
      this.setData({
        name: res.data[0].name,
        content: res.data[0].content,
        imgs: res.data[0].imgs
      })
      if (res.data[0].info) {
        this.setData({
          info: res.data[0].info
        })
      }
      if (res.data[0].title) {
        this.setData({
          title: res.data[0].title
        })
      }
      console.log(this.data.title, 'title')
      console.log(this.data.content, 'content')
      console.log(this.data.info, 'info')
      console.log(this.data.imgs, 'imgs')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
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