// pages/weather/weather.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isScroll: false,
    nowDate: '', // 当前时间
    sk: {}, // 当前实时
    today: {}, // 当天天气
    future: {}, // 未来天气
    uni: 1 // 天气标识
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.init()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 初始化
   */
  init() {
    this.setData({
      isScroll: false
    })
    this.getTime()
    this.getWeather()
    // this.getUni()
  },
  /**
   * 获取天气
   */
  getWeather() {
    const that = this
    wx.request({
      url: 'https://v.juhe.cn/weather/geo',
      data: {
        lon: '118.47112',
        lat: '31.848953493619145',
        format: 1,
        dtype: 'json',
        key: app.globalData.key
      },
      success: function(res) {
        const sk = res.data.result.sk
        const today = res.data.result.today
        const future = res.data.result.future
        for (let key in future) {
          console.log(future[key])
          future[key].date = future[key].date.substring(4, 6) + '/' + future[key].date.substring(6, 8)
        }
        console.log(sk)
        console.log(today)
        console.log(future)
        let uni = 1
        switch (today.weather_id.fa) {
          case '00':
            uni = 1;
            break;
          case '01':
            uni = 2
            break;
          default:
            uni = 3
            break;
        }
        that.setData({
          sk: sk,
          today: today,
          future: future,
          uni: 1,
          isScroll: true
        })
      }
    })
  },
  /**
   * 得到天气标识
   */
  getUni() {
    wx: wx.request({
      url: 'https://v.juhe.cn/weather/uni',
      data: {
        key: app.globalData.key
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
      }
    })
  },
  /**
   * 获取当前时间
   */
  getTime() {
    let myDate = new Date()
    let y = myDate.getFullYear()
    let m = myDate.getMonth() + 1
    // console.log(String(m).length)
    if (String(m).length === 1) {
      m = '0' + m
    }
    let d = myDate.getDate()
    let h = myDate.getHours(); //获取当前小时数(0-23)
    let min = myDate.getMinutes(); //获取当前分钟数(0-59)
    if (String(min).length === 1) {
      min = '0' + min
    }
    let time = y + '-' + m + '-' + d + ' ' + h + ':' + min + ' '
    this.setData({
      nowDate: time
    })
  }
})