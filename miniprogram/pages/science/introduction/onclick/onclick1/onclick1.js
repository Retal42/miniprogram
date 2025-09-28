Page({
    data:{
        Arr:[]
    },
    onLoad: function(options) {
        wx.cloud.database().collection('concept').skip(0).get().then(res=>{
            this.setData({
                Arr:res.data,
            })
        })
    }
})