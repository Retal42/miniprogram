// pages/main/main.js
// pages/exampless/exampless.js
var app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
     now_state:null,
     addr:false,
     addr1:["长江中下游区","东北区","川渝地区","甘新区","华北区","青藏区","黄土高原区"],
     id:false,
     id1:["水稻","小麦","棉花","玉米","花生","大豆","马铃薯","油菜","芝麻","烟草","茶叶","向日葵","甜菜","冬瓜","草莓","葡萄","苹果","西瓜","黄豆","绿豆","高粱","亚麻","芦苇","白菜","萝卜","辣椒","桑树","八角","肉桂","橘子","桃子"],
     prod:false,
     prod1:["大棚","水田","旱田" ,"无土栽培" ,"桑基鱼塘"],
     med:false,
     med1:["矮壮素","赤霉酸","赤霉素","乙烯利","玉米健壮素","ABT","DTA","三十烷醇","萘乙酸","芸苔素类酯","氯化胆碱","802","胺鲜酯","多效唑","生长素","正氨基酸植物生长素","脱落酸","细胞分裂素","防落素","氮肥","尿素","钙镁磷肥","硫酸钾","基肥","苗肥","拔节孕穗肥","玉米拔节肥","钾肥","硼肥","石灰","农家肥","叶面肥","有机肥","生物肥","腐殖酸肥","磷肥","磷酸二氢钾","过磷酸钙","纯硫基高钾亚麻复合肥","苏云金杆菌","昆虫病毒","氢氟草酯","杀螟丹","双草醚","乙酰甲酰胺","联苯菊酯","阿维菌素","灭多威","乙草胺","氯氰菊酯","溴氰菊酯","丁硫克百威","涕灭威","敌百虫","优乐得","阿维达螨灵","多菌灵","草甘膦胃毒剂","地虫净肉桂酸钾","桂虫灵","唑虫啉","甲苯合剂","烯草酮","酰胺类除草剂","乳氟禾草灵","丙酯草醚","甲草胺","西马津","二甲戍林","百草枯","高效氯唑甲禾灵","枯草多","萘丙胺","氟乐灵","精禾草克","仲丁灵","禾阔双除","麦草畏氯氰菊酯","二甲四氯钠","氟唑禾草灵","丁草胺","地乐胺","乙草胺","草甘膦","杂竹清","甲基硫菌灵"],
     dev1:false,
     dev:["乘坐式高速插秧机","农药机","联合收割机","椎盘式自走式抛秧机","背负式手动喷雾器","播种机","施肥机","旋耕机","棉花打包收获机","摘棉桃机","直播机","玉米脱粒机","耕耘机","大豆精播机","拾捡分类机","榨油机","芝麻打捆收获收割机","甘蔗裁种机","植保机","喷雾","辅助采摘机","冬瓜育苗盘","打孔器机","开沟起垄机","开沟机","漫灌机","微耕机","免耕机","排种机","电动芦苇草帘机","栽苗器","育种机","灌溉机","套袋机","牛","打谷机","风车","木犁","镰刀","耙","锄头","挡板","架子车","牛","打麦机","钐子","辘轴","齿耙","烘干机","清棉机","剥绒机","马","连枷","篱笆","石磨","石臼","禾滚","切割机","烤房设备","骡子","棚架","葡萄绑枝器","授粉工具","手持式农药喷洒机"],
     dev2:false,
     databtn1:[
        {id:"地点：",src:"cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/mainIcon/addr.png"},
        {id:"生产间：",src:"cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/mainIcon/prod.png"},
        {id:"作物：",src:"cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/mainIcon/id.png"},
        {id:"药物：",src:"cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/mainIcon/med1.png"},
        {id:"器械1：",src:"cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/mainIcon/dev1.png"},
        {id:"器械2：",src:"cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/mainIcon/dev1.png"},
        ],
     txtbtn1:["","","","","",""]
    },
    Popup(e){
      var that = this
      if(e.currentTarget.dataset.index==0){
          that.setData({
              now_state:true,
              addr:true
          })
      } 
      else if(e.currentTarget.dataset.index==1){
        that.setData({
            now_state:true,
            prod:true
        })
      }
      else if(e.currentTarget.dataset.index==2){
        that.setData({
            now_state:true,
            id:true,

        })
      }
      else if(e.currentTarget.dataset.index==3){
        that.setData({
            now_state:true,
            med:true
        })
      }
      else if(e.currentTarget.dataset.index==4){
        that.setData({
            now_state:true,
            dev1:true
        })
      }
      else{
        that.setData({
            now_state:true,
            dev2:true
        })
      }
    },
    //点击黑色背景触发的事件
    hideModal(e){
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export(),
          now_state: false,
          addr:false,
          prod:false,
          id:false,
          med:false,
          dev1:false,
          dev2:false,
        })
      }.bind(this), 200)
      var that = this
     
    },
    //切换选项
    switch(e){
        //console.log(e.currentTarget.dataset.index)
        var that = this
        if(that.data.addr){
            that.setData({
                'txtbtn1[0]':e.currentTarget.dataset.index
            })
        }else if(that.data.prod){
            that.setData({
                'txtbtn1[1]':e.currentTarget.dataset.index
            })
        }else if(that.data.id){
            that.setData({
                'txtbtn1[2]':e.currentTarget.dataset.index
            })
        }else if(that.data.med){
            that.setData({
                'txtbtn1[3]':e.currentTarget.dataset.index
            })
        }else if(that.data.dev1){
            that.setData({
                'txtbtn1[4]':e.currentTarget.dataset.index
            })
        }else{
            that.setData({
                'txtbtn1[5]':e.currentTarget.dataset.index
            })
        }
        this.hideModal()
    },
    //得到结果
    getRes(e){
        var that=this
        app.globalData.txt=that.data.txtbtn1
        if(that.data.txtbtn1[2]!=""){
        wx.navigateTo({
          url: './result/result?choice='+JSON.stringify(that.data.txtbtn1),
        })
        }else{
            wx.showToast({
                title: '巧农难种无米之田，请至少选择一种作物~',
                icon: "none",
                duration: 1500
              })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
   
    },
   
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
   
    },
   
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
   
    },
   
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
   
    },
   
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
   
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
    onReachBottom: function () {
   
    },
   
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
   
    }
  })