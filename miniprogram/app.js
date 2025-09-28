// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        env:"cloud1-9gd5eqat4a153101",
        traceUser: true,
      });
      wx.cloud.callFunction({
        name: 'get_openId',
        success: res => {
          //获取用户openid
          this.globalData.user_openid = res.result.openid
          //console.log(this.globalData.user_openid)
  
          //在数据库中查找用户是否已经登录过了
          wx.cloud.database().collection('userInfo').where({
            _openid: res.result.openid
          }).get({
            success: result => {
              this.globalData.userInfo = result.data[0]
              //console.log(this.globalData.userInfo)
            }
          })
        }
      })
    }
    //this.globalData = {};
    wx.cloud.getTempFileURL({
        fileList:["cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/汉仪赤云隶 65W.ttf"],
        success:res=>{
          //console.log(res.fileList[0].tempFileURL)
          let url = res.fileList[0].tempFileURL
          wx.loadFontFace({
            global:true,
            family: 'SCIENCE',// 自定义字体名
            source: 'url("' + url + '")',
            desc: {
              style: 'normal',
              weight: 'normal',
              variant: 'normal'
            },
            complete: () => {}
          });
            
        },
        fail:console.error
      });
    },
    //全局数据
  globalData: {
    //用户openid
    user_openid: '',
    //用户信息
    userInfo: null,
    txt:["","","","","",""]
  }
  })
