Page({
  data: {
    // latitude: 23.099994,
    // longitude: 113.324520,
    isScroll: false,
    latitude: 31.847549,
    longitude: 118.471123,
    markers: [{
      id: 1,
      latitude: 31.847549,
      longitude: 118.471123,
      name: '乌江霸王祠'
    }]
  },
  onReady: function(e) {
    setTimeout(() => {
      this.setData({
        isScroll: true
      })
    }, 1000)
    this.mapCtx = wx.createMapContext('myMap')
  },
  // getCenterLocation: function() {
  //   this.mapCtx.getCenterLocation({
  //     success: function(res) {
  //       console.log(res.longitude)
  //       console.log(res.latitude)
  //     }
  //   })
  // },
  moveToLocation: function() {
    this.mapCtx.moveToLocation()
  },
  getPosition() {
    var that = this;
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        console.log(typeof res.latitude)
        const latitude = that.data.latitude
        const longitude = that.data.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 15
        })
      }
    })
  }
  // translateMarker: function() {
  //   this.mapCtx.translateMarker({
  //     markerId: 1,
  //     autoRotate: true,
  //     duration: 1000,
  //     destination: {
  //       latitude: 31.847549,
  //       longitude: 118.471123,
  //     },
  //     animationEnd() {
  //       console.log('animation end')
  //     }
  //   })
  // },
  // includePoints: function() {
  //   this.mapCtx.includePoints({
  //     padding: [10],
  //     points: [{
  //       latitude: 31.847549,
  //       longitude: 118.471123,
  //     }, {
  //         latitude: 31.847549,
  //         longitude: 118.471123,
  //     }]
  //   })
  // }
})