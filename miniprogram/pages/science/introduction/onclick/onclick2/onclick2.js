Page({
    data: {
    },
    onLoad: function(options) {
        wx.cloud.database().collection('development').skip(0).get().then(res=>{
            this.setData({
                developArr:res.data,
            })
})
}})