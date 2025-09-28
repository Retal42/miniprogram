// pages/science/introduction/onclick/onclick3/onclick3.js
Page({
    data: {
        lineArr:[]
        },
    onLoad: function(options) {
    wx.cloud.database().collection('time').skip(0).get().then(res=>{
        this.setData({
            lineArr:res.data,
        })
    })
    wx.cloud.database().collection('time').skip(20).get().then(res=>{
        this.setData({
            lineArr1:res.data,
        })
    })
    wx.cloud.database().collection('time').skip(40).get().then(res=>{
        this.setData({
            lineArr2:res.data,
        })
    })
    wx.cloud.database().collection('time').skip(60).get().then(res=>{
        this.setData({
            lineArr3:res.data,
        })
    })
    
  },


    })
/*       onLoad: function(options) {
    wx.cloud.database().collection('time').skip(30).get().then(res=>{
        console.log(res.data)
        this.setData({
            lineArr:res.data,
        })
    })
  },
*/