// pages/weather/weather.js
// const res = {
//   "data": {
//     "resultcode": "200",
//     "reason": "successed!",
//     "result": {
//       "sk": {
//         "temp": "8",
//         "wind_direction": "西风",
//         "wind_strength": "2级",
//         "humidity": "37%",
//         "time": "17:05"
//       },
//       "today": {
//         "temperature": "0℃~8℃",
//         "weather": "多云转晴",
//         "weather_id": {
//           "fa": "01",
//           "fb": "00"
//         },
//         "wind": "西风微风",
//         "week": "星期一",
//         "city": "马鞍山",
//         "date_y": "2019年01月21日",
//         "dressing_index": "较冷",
//         "dressing_advice": "建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。",
//         "uv_index": "最弱",
//         "comfort_index": "",
//         "wash_index": "较适宜",
//         "travel_index": "较不宜",
//         "exercise_index": "较不宜",
//         "drying_index": ""
//       },
//       "future": {
//         "day_20190121": {
//           "temperature": "0℃~8℃",
//           "weather": "多云转晴",
//           "weather_id": {
//             "fa": "01",
//             "fb": "00"
//           },
//           "wind": "西风微风",
//           "week": "星期一",
//           "date": "20190121"
//         },
//         "day_20190122": {
//           "temperature": "1℃~10℃",
//           "weather": "晴",
//           "weather_id": {
//             "fa": "00",
//             "fb": "00"
//           },
//           "wind": "西风3-5级",
//           "week": "星期二",
//           "date": "20190122"
//         },
//         "day_20190123": {
//           "temperature": "3℃~14℃",
//           "weather": "晴",
//           "weather_id": {
//             "fa": "00",
//             "fb": "00"
//           },
//           "wind": "东风3-5级",
//           "week": "星期三",
//           "date": "20190123"
//         },
//         "day_20190124": {
//           "temperature": "2℃~11℃",
//           "weather": "多云",
//           "weather_id": {
//             "fa": "01",
//             "fb": "01"
//           },
//           "wind": "东风3-5级",
//           "week": "星期四",
//           "date": "20190124"
//         },
//         "day_20190125": {
//           "temperature": "0℃~10℃",
//           "weather": "多云",
//           "weather_id": {
//             "fa": "01",
//             "fb": "01"
//           },
//           "wind": "东北风3-5级",
//           "week": "星期五",
//           "date": "20190125"
//         },
//         "day_20190126": {
//           "temperature": "1℃~10℃",
//           "weather": "晴",
//           "weather_id": {
//             "fa": "00",
//             "fb": "00"
//           },
//           "wind": "西风3-5级",
//           "week": "星期六",
//           "date": "20190126"
//         },
//         "day_20190127": {
//           "temperature": "1℃~10℃",
//           "weather": "晴",
//           "weather_id": {
//             "fa": "00",
//             "fb": "00"
//           },
//           "wind": "西风3-5级",
//           "week": "星期日",
//           "date": "20190127"
//         }
//       }
//     },
//     "error_code": 0
//   }
// }
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowDate: '', // 当前时间
    sk: {}, // 当前实时
    today: {}, // 当天天气
    future: {} // 未来天气
    // json: res
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init()
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

  },
  /**
   * 初始化
   */
  init() {
    this.getTime()
    this.getWeather()
  },
  /**
   * 获取天气
   */
  getWeather() {
    const that = this
    wx.request({
      url: 'http://v.juhe.cn/weather/index',
      data: {
        cityname: '马鞍山',
        dtype: 'json',
        format: 1,
        key: "aa39f045f6afe7b1caeafab5c96c1d59"
      },
      success: function(res) {
        console.log(res)
        const sk = res.data.result.sk
        const today = res.data.result.today
        const future = res.data.result.future
        console.log(sk)
        console.log(today)
        console.log(future)
        that.setData({
          sk: sk,
          today: today,
          future: future
        })
      }
    })
  },
  /**
   * 获取当前时间
   */
  getTime() {
    let myDate = new Date()
    let y = myDate.getFullYear()
    let m = myDate.getMonth()
    if(m.length === 1) {
      m = '0' + m
    } else if(m === 0) {
      m = '0' + 1
    } else {
      m += 1
    }
    let d = myDate.getDate()
    let h = myDate.getHours();       //获取当前小时数(0-23)
    let min = myDate.getMinutes();     //获取当前分钟数(0-59)
    console.log(myDate)
    let time = y + '-' + m + '-' + d + ' ' + h + ':' + min + ' '
    this.setData({
      nowDate: time
    })
  }
})