// pages/attractions/attractions.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    within: {
      title: '景区祠内区',
      list: [{
        name: '西侧殿',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-1.jpg',
        detail_id: 1
      },
      {
        name: '东侧殿',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-2.jpg',
        detail_id: 2
      },
      {
        name: '享殿',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-3.jpg',
        detail_id: 3
      },
      {
        name: '西楚霸王衣冠冢',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-4.jpg',
        detail_id: 4
      }
      ]
    },
    outer: {
      title: '景区祠外区',
      list: [
      {
        name: '驻马河',
          image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-5.jpg',
          detail_id: 5
      },
      {
        name: '乌江亭',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-6.jpg',
        detail_id: 6
      },
      {
        name: '抛首石',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-7.jpg',
        detail_id: 7
      },
      {
        name: '三十一响钟亭',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-8.jpg',
        detail_id: 8
      },
      {
        name: '碑廊',
        image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-9.jpg',
        detail_id: 9
      }
      
      ]
    },
    kirmess: {
      title: '庙会',
      list: [
        {
          name: '霸王祠“三月三”庙会',
          image: 'cloud://bawangci-9de84d.6261-bawangci-9de84d/index-list/list-10.jpg',
          detail_id: 10
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  }
})