// pages/mine/mine.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        users:"",
        showInfo:true,
        infobtn:"展示信息",
        cnt:null,
        tittle:"",
        userInfo: null,
        showModal: false, // 显示modal弹窗
        showModal2:false,
        intro:"现代乡村模拟器小程序致力于以寓教于乐的方式宣传新时代乡村生产模式，并配置有经农业大学的专业人员审查把关后的科普文档作为辅助，旨在扭转城市人群可能存在的对农业生产等同面朝黄土背朝天的刻板印象，助力乡村振兴。",
        history:[]
    },
    //反馈
    feedback(){
        wx.navigateTo({
          url: 'url',
        })
    },
    //退出登录
    logout(){
        app.globalData.userInfo=null
        this.setData({
            userInfo:null
        })
    },
    /**
     * 授权
     */
    login() {
        wx.getUserProfile({
          desc: '获取用户信息',
          success: res => {
            //console.log(res.userInfo)
            var user = res.userInfo
            //设置全局用户信息
            app.globalData.userInfo = user
            //设置局部用户信息
            this.setData({
              users: user
            })
            //检查之前是否已经授权登录
            wx.cloud.database().collection('userInfo').where({
              _openid: app.globalData.user_openid
            }).get({
              success: res => {
                //原先没有添加，这里添加
                if (!res.data[0]) {
                  //将数据添加到数据库
                  wx.cloud.database().collection('userInfo').add({
                    data: {
                      avatarUrl: user.avatarUrl,
                      nickName: user.nickName,
                      count:0,
                      history:[],
                      gradesum:0               
                    },
                    success: res => {
                      wx.showToast({
                        title: '登录成功',
                        icon: 'none'
                      }),
                      this.setData({
                        userInfo: res.data[0]
                      })
                    }
                  })
                } else {
                  //已经添加过了
                  this.setData({
                    userInfo: res.data[0]
                  }),
                  wx.showToast({
                    title: '登录成功',
                    icon: 'none'
                  })
                }
              }
            })
          }
        })

      },    
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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
    onPullDownRefresh:function(){
        wx.showNavigationBarLoading() 
        wx.showLoading({
            title: '努力刷新中...',
          })
        setTimeout(function()
        {
                wx.hideLoading();
                wx.hideNavigationBarLoading() //完成停止加载
                wx.stopPullDownRefresh() //停止下拉刷新
        },1500);
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

    },
  showus(){
      this.setData({
          showModal:true
      })
  },
  showhistory(){
    wx.cloud.database().collection('userInfo').where({
        _openid: app.globalData.user_openid
      }).get({
        success: res => {
            this.setData({
              'history':res.data[0].history,
            })
        }
    }),
    this.setData({
        showModal2:true
    })
  },
  //转到指导页面
  guide(){
      wx.navigateTo({
        url: "./guidance/guidance",
      })
  },
  //隐藏信息
  hiddenInfo(){
    this.setData({
        showInfo:true
    })
  },
  //展示信息
  showingInfo(){
    wx.cloud.database().collection('userInfo').where({
        _openid: app.globalData.user_openid
      }).get({
        success: res => {
            this.setData({
              cnt:res.data[0].count,
            })
            if(res.data[0].gradesum<60){this.setData({tittle:"农业小白"})}
            else if(res.data[0].gradesum<200){this.setData({tittle:"初出茅庐"})}
            else if(res.data[0].gradesum<1000){this.setData({tittle:"农林学者"})}
            else{this.setData({tittle:"振兴先锋"})}
        }
      })
    this.setData({
        showInfo:false
    })
  }
})