// components/myguidance/myguidance.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        stepList: [{
            name: '第一步'
          }, {
            name: '第二步'
          }, {
            name: '第三步'
          }, {
            name: '第四步'
          }, ],
        url:["cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/guide/first.png",
            "cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/guide/second.png",
            "cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/guide/third.png",
            "cloud://cloud1-9gd5eqat4a153101.636c-cloud1-9gd5eqat4a153101-1311963630/guide/final.png"],
        stepNum: 1 //当前的步数
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 下一步
        numSteps() {
            this.setData({
                stepNum: this.data.stepNum == this.data.stepList.length ? 1 : this.data.stepNum + 1
            })
        },
        //返回
        return(){
            wx.switchTab({
              url: "/pages/mine/mine",
            })
        }
    }
})
