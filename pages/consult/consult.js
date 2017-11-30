// pages/consult/consult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
      "href":"/pages/index/index",
      "id": 0,
      "title": "网站首页"
    },
    {
      "href":"/pages/consult/consult",
      "id": 1,
      "title": "集团简介"
    },
    {
      "href": "/pages/consult/consult",
      "id": 2,
      "title": "董事长致辞"
    },
    {
      "href": "/pages/consult/consult",
      "id": 3,
      "title": "企业文化"
    },
    {
      "href": "/pages/consult/consult",
      "id": 4,
      "title": "集团荣誉"
    },
    {
      "href": "/pages/consult/consult",
      "id": 5,
      "title":"锅炉技术"
    },
    {
      "href": "/pages/consult/consult",
        "id": 6,
        "title": "工程案例"
      },
      {
        "href": "/pages/consult/consult",
        "id": 7,
        "title": "联系我们"
      }
    ],
  bool:false,
  id:1,
  showcontent:"集团简介"
  },
  
  consult(event){
    if (event.target.id == 8 || event.target.id == 9 || event.target.id == 10 || event.target.id == 11 || event.target.id == 12){
      
      this.setData({
        arr: [{
          "href": "/pages/index/index",
          "id": 0,
          "title": "网站首页"
        },
        {
          "href": "/pages/consult/consult",
          "id": 8,
          "title": "低氮增容"
        },
        {
          "href": "/pages/consult/consult",
          "id": 9,
          "title": "余热利用"
        },
        {
          "href": "/pages/consult/consult",
          "id": 10,
          "title": "综合提效"
        },
        {
          "href": "/pages/consult/consult",
          "id": 11,
          "title": "脱硝改造"
        },
        {
          "href": "/pages/consult/consult",
          "id": 12,
          "title": "部件改造"
        },
        {
          "href": "/pages/consult/consult",
          "id": 6,
          "title": "工程案例"
        },
        {
          "href": "/pages/consult/consult",
          "id": 7,
          "title": "联系我们"
        }],
        showcontent: event.target.dataset.name,
        id: event.target.id
      })
    } else if (event.target.id == 5){
      this.setData({
        arr: [{
          "href": "/pages/index/index",
          "id": 0,
          "title": "网站首页"
        },
        {
          "href": "/pages/consult/consult",
          "id": 8,
          "title": "低氮增容"
        },
        {
          "href": "/pages/consult/consult",
          "id": 9,
          "title": "余热利用"
        },
        {
          "href": "/pages/consult/consult",
          "id": 10,
          "title": "综合提效"
        },
        {
          "href": "/pages/consult/consult",
          "id": 11,
          "title": "脱硝改造"
        },
        {
          "href": "/pages/consult/consult",
          "id": 12,
          "title": "部件改造"
        },
        {
          "href": "/pages/consult/consult",
          "id": 6,
          "title": "工程案例"
        },
        {
          "href": "/pages/consult/consult",
          "id": 7,
          "title": "联系我们"
        }],
        showcontent:"低氮增容",
        id:8
      })
    }else{
      console.log(event.target)
      console.log(event.target.id)
      console.log(event.target.dataset.name)
      wx.switchTab({
        url: event.target.dataset.url
      })
      this.setData({
        arr: [{
          "href": "/pages/index/index",
          "id": 0,
          "title": "网站首页"
        },
        {
          "href": "/pages/consult/consult",
          "id": 1,
          "title": "集团简介"
        },
        {
          "href": "/pages/consult/consult",
          "id": 2,
          "title": "董事长致辞"
        },
        {
          "href": "/pages/consult/consult",
          "id": 3,
          "title": "企业文化"
        },
        {
          "href": "/pages/consult/consult",
          "id": 4,
          "title": "集团荣誉"
        },
        {
          "href": "/pages/consult/consult",
          "id": 5,
          "title": "锅炉技术"
        },
        {
          "href": "/pages/consult/consult",
          "id": 6,
          "title": "工程案例"
        },
        {
          "href": "/pages/consult/consult",
          "id": 7,
          "title": "联系我们"
        }
        ],
        showcontent: event.target.dataset.name,
        id: event.target.id
      })
    }
   
  },
  tech(event){
    this.setData({
      showcontent: event.target.dataset.name,
      id: event.target.id
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