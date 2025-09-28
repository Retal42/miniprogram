// pages/main/result/result.js
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        gradeSum:0,
        grade:[0,0,0,0,0],
        direct:["地点：","生产间：","药物：","器械1：","器械2："]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var choice=JSON.parse(options.choice)
        var that=this
        if(choice[0]=="长江中下游区"){choice[0]="长江中下流区"}
        wx.cloud.database().collection('value').where({
            id: choice[2]
        }).get().then(res=>{
            for(var i in res.data[0].addr1){
                if(choice[0]==res.data[0].addr1[i]){this.setData({
                    gradeSum:20+that.data.gradeSum,
                    'grade[0]':20
                })}
            }
            if(that.data.grade[0]==0){
                for(var i in res.data[0].addr2){
                    if(choice[0]==res.data[0].addr2[i]){this.setData({
                        gradeSum:10+that.data.gradeSum,
                        'grade[0]':10
                    })}
                }
            }
            //生产间
            for(var i in res.data[0].prod1){
                if(choice[1]==res.data[0].prod1[i]){this.setData({
                    gradeSum:20+that.data.gradeSum,
                    'grade[1]':20
                })}
            }
            if(that.data.grade[1]==0){
                for(var i in res.data[0].prod2){
                    if(choice[1]==res.data[0].prod2[i]){this.setData({
                        gradeSum:13+that.data.gradeSum,
                        'grade[1]':13
                    })}
                }
            }
            if(that.data.grade[1]==0){
                for(var i in res.data[0].prod3){
                    if(choice[1]==res.data[0].prod3[i]){this.setData({
                        gradeSum:6+that.data.gradeSum,
                        'grade[1]':6
                    })}
                }
            }
            //器械
            for(var i in res.data[0].device1){
                if(choice[4]==res.data[0].device1[i]){this.setData({
                    gradeSum:20+that.data.gradeSum,
                    'grade[3]':20
                })}
                if(choice[5]==res.data[0].device1[i]){this.setData({
                    gradeSum:20+that.data.gradeSum,
                    'grade[4]':20
                })}
            }
            if(that.data.grade[3]==0){
                for(var i in res.data[0].device2){
                    if(choice[4]==res.data[0].device2[i]){this.setData({
                        gradeSum:13+that.data.gradeSum,
                        'grade[3]':13
                    })}
                }
            }
            else if(that.data.grade[4]==0){
                for(var i in res.data[0].device2){
                    if(choice[5]==res.data[0].device2[i]){this.setData({
                        gradeSum:13+that.data.gradeSum,
                        'grade[4]':13
                    })}
                }
            }
            if(that.data.grade[3]==0){
                for(var i in res.data[0].device3){
                    if(choice[4]==res.data[0].device3[i]){this.setData({
                        gradeSum:6+that.data.gradeSum,
                        'grade[3]':6
                    })}
                }
            }
            else if(that.data.grade[4]==0){
                for(var i in res.data[0].device3){
                    if(choice[5]==res.data[0].device3[i]){this.setData({
                        gradeSum:6+that.data.gradeSum,
                        'grade[4]':6
                    })}
                }
            }
            //药物
            for(var i in res.data[0].medicine1){
                if(choice[3]==res.data[0].medicine1[i]){this.setData({
                    gradeSum:20+that.data.gradeSum,
                    'grade[2]':20
                })}
            }
            if(that.data.grade[2]==0){
                for(var i in res.data[0].medicine2){
                    if(choice[3]==res.data[0].medicine2[i]){this.setData({
                        gradeSum:13+that.data.gradeSum,
                        'grade[2]':13
                    })}
                }
            }
            if(that.data.grade[2]==0){
                for(var i in res.data[0].medicine3){
                    if(choice[3]==res.data[0].medicine3[i]){this.setData({
                        gradeSum:6+that.data.gradeSum,
                        'grade[2]':6
                    })}
                }
            }
            wx.cloud.database().collection('userInfo').where({
                _openid: app.globalData.user_openid
              }).update({
                data: {
                  count:wx.cloud.database().command.inc(1),
                  gradesum:wx.cloud.database().command.inc(that.data.gradeSum),
                  history:wx.cloud.database().command.unshift(that.data.gradeSum)
                },
              })
        })
    },

    return(){
        wx.switchTab({
          url: '../main',
        })
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