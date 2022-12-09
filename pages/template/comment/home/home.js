// pages/template/comment/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    elements: [{
      title: '未知',
      name: 'comment01',
      color: 'purple light',
      url: 'https://image.meiye.art/Fq2GZHKgSIgIdYL3-cGv4PfD5KYv'
    }, {
      title: '未知',
      name: 'comment02',
      color: 'purple light',
      url: 'https://image.meiye.art/pic_amUlz2Lcdh7ad1eVr8ZzD'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 500);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})