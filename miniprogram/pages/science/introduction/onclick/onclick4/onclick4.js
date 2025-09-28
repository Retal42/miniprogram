// pages/science/introduction/onclick/onclick4/onclick4.js
Page({

   
    data: {
    },
    onLoad: function(options) {
        wx.cloud.database().collection('people').skip(0).get().then(res=>{
            this.setData({
                peopleArr:res.data,
            })
        })
    }
})