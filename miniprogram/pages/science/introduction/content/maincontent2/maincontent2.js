// pages/science/introduction/device/device1/device1.js
Page({
    data: {
        developArr:[],
    },
    onLoad: function(options) {
        wx.cloud.database().collection(options.item).skip(0).get().then(res=>{
            this.setData({
                developArr:res.data,
            })
        })
    }
})