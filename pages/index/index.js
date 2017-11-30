//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://www.hengtao.cn/upload/2017/ZX_20171117142244435_ZX.jpg',
      'http://www.hengtao.cn/upload/2017/ZX_20171115090243446_ZX.jpg',
      'http://www.hengtao.cn/upload/2017/ZX_20171028094715522_ZX.jpg',
      'http://www.hengtao.cn/upload/2017/ZX_20171028094608045_ZX.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    id:1
  },
  aa(event){
    app.globalData.id = event.target.id
    console.log(1)
    wx.switchTab({
      url: event.target.dataset.url
      
    })
    this.setData({

      id: app.globalData.id
    })
   
  },
 
  more(event){
    console.log(1)
    wx.switchTab({
      url: event.target.dataset.url,
    })
    this.setData({
     
      id: event.target.id
    })
  }
  //事件处理函数
 
  
})

