Page({
    data:{
        a:[],
        b:[],
        c:[],
        d:[],
        e:[],
        f:[],
       
    },
    onLoad: function(options) {
        wx.cloud.database().collection('ceshi').where({title:options.item}).get().then(res=>{
            this.setData({
                a:res.data[0].title,
                b:res.data[0].daoyan,
                c:res.data[0].picture1,
                d:res.data[0].zhengwen1,
                e:res.data[0].zhengwen2,
                f:res.data[0].picture2,
            })
        })
    }
})
