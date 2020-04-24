// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province: '',
    city: '未知'
  },

  getLocat (e) {
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        console.log(res)
        console.log(res.latitude)
        console.log(res.longitude)
        const url = 'http://api.map.baidu.com/geocoder/v2/';
        const ak = 'VhueKFIWhIAjSgU07cYpgfu0I2aTuGTe';
        wx.request({
          url,
          data: {
            ak,
            location: `${res.latitude}, ${res.longitude}`,
            output: 'json'
          },
          successs: function (res) {
            console.log(res)
            if (res.data.status == "0") {
              this.setData({
                province: res.data.result.addressComponent.province,
                city: res.data.result.addressComponent.city
              })
            } else {
              this.setData({
                city: '未知位置'
              })
            }
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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