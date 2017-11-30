// pages/product/product.js
const app = getApp()
var getid = app.globalData.id
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[{
      "href": "/pages/index/index",
      "id": 0,
      "title": "网站首页"
    },
    {
      "href": "/pages/product/product",
      "id": 1,
      "title": "整体锅炉"
    },
    {
      "href": "/pages/product/product",
      "id": 2,
      "title": "空气预热器"
    },
    {
      "href": "/pages/product/product",
      "id": 3,
      "title": "承压部件"
    },
    {
      "href": "/pages/product/product",
      "id": 4,
      "title": "保温材料"
    },
    {
      "href": "/pages/product/product",
      "id": 5,
      "title": "低温省煤器"
    },
    {
      "href": "/pages/product/product",
      "id": 6,
      "title": "工程案例"
    },
    {
      "href": "/pages/product/product",
      "id": 7,
      "title": "联系我们"
    }
    ],
    imgarr:[ [{
      "img": "http://www.hengtao.cn/upload/2017/ZX_20170803175959983_ZX.jpg",
      "title": "循环流化床锅炉"
    }, {
      "img": "http://www.hengtao.cn/upload/2017/ZX_20170803175959983_ZX.jpg",
      "title": "循环流化床锅炉"
    }, {
      "img": "http://www.hengtao.cn/upload/2017/ZX_20170803175959983_ZX.jpg",
      "title": "循环流化床锅炉"
    }], [{
      "img": "http://www.hengtao.cn/upload/2017/ZX_20171019143742714_ZX.jpg",
      "title": "回转式空气预热器—蓄热元件"
    }, {
      "img": "http://www.hengtao.cn/upload/2017/ZX_20170801220704320_ZX.jpg",
      "title": "搪瓷管空气预热器"
    }, {
      "img": "http://www.hengtao.cn/upload/2017/ZX_20170801224504465_ZX.jpg",
      "title": "普通管空气预热器"
    }],[{
      "img": "http://www.hengtao.cn/upload/2017/ZX_20171019141921159_ZX.jpg",
      "title": "搪瓷节能器"
    }, {
      "img": "http://www.hengtao.cn/upload/2017/ZX_20171019143036231_ZX.jpg",
      "title": "蛇形管"
    }, {
      "img": "http://www.hengtao.cn/upload/2017/ZX_20171019142006887_ZX.jpg",
      "title": "集箱"
    }, {
      "img": "http://www.hengtao.cn/upload/2017/ZX_20171019143443988_ZX.jpg",
      "title": "翅片管式省煤器"
    }, {
      "img": "http://www.hengtao.cn/upload/2017/ZX_20170801224947025_ZX.jpg",
      "title": "膜式水冷壁"
    }],[{
      "img": "http://www.hengtao.cn/upload/2017/ZX_20170803195534471_ZX.jpg",
      "title": "高强耐磨耐火可塑料"
    }, {
      "img": "http://www.hengtao.cn/upload/2017/ZX_20170803195642081_ZX.jpg",
      "title": "高效节能保温浇注料"
    }],[{
      "img": "http://www.hengtao.cn/upload/2017/ZX_20171028154702577_ZX.png",
      "title": "低低温省煤器"
    }, {
      "img": "http://www.hengtao.cn/upload/2017/ZX_20171019084814119_ZX.jpg",
      "title": "低温省煤器"
      }]],
    showcontent:"整体锅炉",
    id:1
  },
  consult(event){
    wx.switchTab({
      url: event.target.dataset.url
    })
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
    console.log(getid)
    this.setData({
      id: getid
    })
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