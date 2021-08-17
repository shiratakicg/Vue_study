new Vue({
    el:'#app',
    data: {
        width: 800,
        height: 600
    },
    computed: {
        //算出プロパティhalfWidthを定義
        halfWidth: function() {
            return this.width / 2
        },
        halfHeight: function() {
            return this.height /2
        },
        //[width * height]の中心座標をオブジェクトで返す
        halfPoint: function() {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        }
    }
})
