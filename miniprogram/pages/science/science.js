// pages/science/science.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    selected: 0,
    list: ['地点', '生产间', '作物', '药物','器械'],
    pageLoading:false,
    addrlist:[
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/长江中下游1.png',addr:"长江中下游区",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=长江中下游地区",
        intro:"水乡泽国，鱼米之乡，唱起悠悠渔歌"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/黄土高原2.png',addr:"黄土高原区",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=黄土高原区",
        intro:"苍黄原野，养育一代又一代人"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/东北4.png',addr:"三江平原区",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=三江平原区",
        intro:"漫山遍野的大豆高粱，那是东北的风味"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/青藏4.png',addr:"青藏区",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=青藏区",
        intro:"小酌一口青稞酒，远处牛羊满地"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/甘新1.png',addr:"甘新区",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=甘新区",
        intro:"“星编珠聚，味比醍醐”，这可是新疆的瓜果？"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/川渝2.png',addr:"川渝地区",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=川渝地区",
        intro:"睹一睹天府之国，尝一尝川香渝辣"},
    ],
    prodlist:[
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/大棚4.png',prod:"大棚养殖",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=大棚养殖',
        intro:"创造人工环境，模拟适合作物生长的条件"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/桑基鱼塘5.png',prod:"桑基鱼塘",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=桑基鱼塘',
        intro:"古人的智慧结晶，实现能量多级利用"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/水田1.png',prod:"水田",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=水田',
        intro:"白鹭青天，渔歌互答，江南风味莫过于此"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/旱田5.png',prod:"旱田",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=旱田',
        intro:"田间阵阵麦飘香，又是一年丰收日"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/无土栽培3.png',prod:"无土栽培",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=无土栽培',
        intro:"一种劳动需求低，生产效率高的新型种植技术"},
    ],
    croplist:[
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/水稻3.png',crop:"水稻",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=水稻',
        intro:"随着稻香 河流继续奔跑"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/小麦4.png',crop:"小麦",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=小麦',
        intro:"远处蔚蓝天空下，涌动着金色麦浪"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/棉花2.png',crop:"棉花",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=棉花",
        intro:"炸蕾吐絮，棉花开得正旺"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/玉米3.png',crop:"玉米",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=玉米",
        intro:"香甜软糯，客官买根蒸玉米吧"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/花生2.png',crop:"花生",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=花生",
        intro:"其貌不扬花生花，可爱又美丽"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/大豆2.png',crop:"大豆",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=大豆",
        intro:"豆萁！你离锅炉远点！"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/土豆1.png',crop:"马铃薯",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=马铃薯",
        intro:"不喜欢土豆的有难了，我说的"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/油菜3.png',crop:"油菜",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=油菜",
        intro:"金黄色的海洋，其实是有的"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/芝麻1.png',crop:"芝麻",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=芝麻",
        intro:"芝麻压得油，还我丛林饱参汉"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/甘蔗1.png',crop:"甘蔗",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=甘蔗",
        intro:"在吗医生？上次补的牙又崩掉了"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/烟草2.png',crop:"烟草",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=烟草",
        intro:"未成年人禁止吸烟"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/茶2.png',crop:"茶",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=茶",
        intro:"碧波荡漾一抹香，茶不醉人人自醉"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/大麻4.png',crop:"大麻",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=大麻",
        intro:"亲近幸福，远离毒品"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/向日葵4.png',crop:"向日葵",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=向日葵",
        intro:"做一株向日葵，在阳光的掌心"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/甜菜4.png',crop:"甜菜",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=甜菜",
        intro:"想要来一碗罗宋汤吗？"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/蚕豆3.png',crop:"蚕豆",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=蚕豆",
        intro:"蚕豆花开映女桑，方茎碧叶吐芬芳"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/冬瓜4.png',crop:"冬瓜",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=冬瓜",
        intro:"霜白中透着嫩绿，咬著冰霜透齿牙"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/草莓4.png',crop:"草莓",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=草莓",
        intro:"簇簇茵茵覆垄莹，甜酸津润致醇浓"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/葡萄4.png',crop:"葡萄",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=葡萄",
        intro:"抚琴端坐长廊下，一架葡萄满院香"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/苹果2.png',crop:"苹果",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=苹果",
        intro:"你是我的小呀小苹果"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/西瓜2.png',crop:"西瓜",
        url:"/pages/science/introduction/content/maincontent/maincontent?item=西瓜",
        intro:"三伏天解暑神器"},
    ],
    medicinelist:[
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/杀虫剂4.png',medicine:"杀虫剂",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=杀虫剂',
        intro:"防治农业害虫和城市卫生害虫的药品"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/除草剂2.png',medicine:"除草剂",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=除草剂',
        intro:"消灭或抑制杂草的一类物质"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/化肥2.png',medicine:"化肥",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=化肥',
        intro:"黑化肥发灰会挥发，灰化肥挥发会发黑"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/SCIENCE/植物生长调节剂4.png',medicine:"植物生长调节剂",
        url:'/pages/science/introduction/content/maincontent/maincontent?item=植物生长调节剂',
        intro:"一种调节植物生长周期的化学物质"},
    ],
    devicelist:[
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/device/牛/图片1.png',device:"牛--农耕之本",
        url:'/pages/science/introduction/content/maincontent2/maincontent2?item=niu',
        intro:"牛是最早的生产方式,也是最普遍的耕畜"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/device/device/木犁.png',device:"手持农具的出现",
        url:'/pages/science/introduction/content/maincontent2/maincontent2?item=handdevice',
        intro:"解放双手，提高效率"},
        {imag:'cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/device/device/图片1.png',device:"现代化器械的发展",
        url:'/pages/science/introduction/content/maincontent2/maincontent2?item=device',
        intro:"智能 高效 便利"},
    ],
    },

    selected: function (e) {
        let that = this
        let index = e.currentTarget.dataset.index
        console.log(index)
        if (index == 0) {
          that.setData({
            selected: 0
          })
        } else if (index == 1) {
          that.setData({
            selected: 1
          })
        } else if (index == 2) {
          that.setData({
            selected: 2
          })
        } else if (index == 3) {
            that.setData({
              selected: 3
            })
          }
        else {
          that.setData({
            selected: 4
          })
        }
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        /** 
         * 获取系统信息,系统宽高
         */
        wx.getSystemInfo({
          success: function (res) {
            that.setData({
              winWidth: res.windowWidth,
              winHeight: res.windowHeight
            });
          }
     
        });
    },

    enterShow:function(){

        　　wx.navigateTo({
        
        　　url: '../show/show',
        
        　　})
    },

    onclick1:function(){
      wx.navigateTo({
        url: '/pages/science/introduction/onclick/onclick1/onclick1',
      })
    },
      onclick2:function(){
        wx.navigateTo({
          url: '/pages/science/introduction/onclick/onclick2/onclick2',
        })
      },
      onclick3:function(){
        wx.navigateTo({
          url: '/pages/science/introduction/onclick/onclick3/onclick3',
        })
      },
      onclick4:function(){
        wx.navigateTo({
          url: '/pages/science/introduction/onclick/onclick4/onclick4',
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

    }
})