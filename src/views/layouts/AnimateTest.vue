<template>
  <div id="main">
    <canvas id="canvas"></canvas>
    <transition name="fade">
      <div class="text" v-show="show">
        <img id="text_img" ref="Img" :src="imgsrc" style="position:absolute;left:-1px;height:100%;">
      </div>
    </transition>
    <div class="touch" @touchstart.stop="touchin" @touchend.stop="cleartime">
      <div id="phone_touch" ></div>
      <span>请长按观看</span>
    </div>
  </div>


</template>

<script type="text/javascript">
import '@/assets/css/h5.css'
var pos = 0;
export default {
  data(){
    return{
      imgsrc:"",
      show:false,
      flag1:false,
      cnt:0,
    }
  },
  mounted() {
    this.initCanvas()
  },
  methods: {
    rebgimg:function() {
      /*if(document.length === 0){*/
        //ctx.clearRect(0, 0, img_w, canvas.height);
        console.log("移" + left);
        console.log("停" + img_w);
        var arg = 0;
        if (h / w > 2) {
          arg = 0;
        }

        console.log("参数"+(left-arg));
        //var wine = 2*(2.1*canvas.width/canvas.height*canvas.width-600*canvas.height/canvas.width);
        var wine = 2*(0.96*w-1.6*h);
        console.log("wine = "+wine);

        /*
        else if(this.flag1){

          this.cnt = this.cnt+1;
          if(this.cnt === 200){
            this.cnt = 0;
            this.show = false;
            this.flag1 = false;
          }
        }*/
        if(left-arg > wine){
          ctx.drawImage(bgimg, 0, 0, img_w*ratio, img_h*ratio, left - arg, 0, img_w * ((canvas.height + 20) / img_h)*ratio, canvas.height*ratio);
          left -= 1;
          if(left === Math.round(wine/3)){
            this.imgsrc = require("@/assets/images/text_02.png");
            if(h/w > 1.8){
              this.$refs.Img.style.left = '200px';
            }
            else{
              this.$refs.Img.style.left = '150px'
            }
            this.$refs.Img.style.bottom = '-60px';
            this.show = true;
            console.log("图2");
            var left1 = this.$refs.Img.style.left;
            console.log("left1="+left1);
            var left2 = document.getElementById("text_img").offsetLeft;
            console.log("left2="+left2);
            if(h/w > 1.8){
              pos = left-200;
            }
            else{
              pos = left-150;
            }
            console.log("left="+this.$refs.Img.style.left);
            //this.show = false;
          }
          else if(left === Math.round(wine*0.93)){
            this.imgsrc = require("@/assets/images/text_03.png");
            this.$refs.Img.style.left = '200px';
            if(h/w > 1.8){
              this.$refs.Img.style.bottom = '-500px';
            }
            else{
              this.$refs.Img.style.bottom = '-500px';
            }

            this.show = true;
            console.log("图3");
            var left1 = this.$refs.Img.style.left;
            console.log("left1="+left1);
            var left2 = document.getElementById("text_img").offsetLeft;
            console.log("left2="+left2);
            pos = left-200;
            console.log("left="+this.$refs.Img.style.left);
          }
          else{
            this.$refs.Img.style.left = (left-pos).toString()+'px';
            console.log((left-arg-pos).toString()+'px');
            if(document.getElementById("text_img").offsetLeft === -100){
              this.show = false;
            }
            console.log("left="+this.$refs.Img.style.left);
          }

          //document.getElementById("text_img").style.left = (left-arg-pos).toString()+'px';

        }
        else{
          this.$emit('animateEnd');
          let self=this;
          setTimeout(()=>{self.$router.push('/part39');}, 3000 )
        }
        /*让第一张图片出来*/


      //}


        //最后一张图片的位置
      },
    touchin(){
      timer = setInterval(this.rebgimg,10);
      console.log("长按开始");
    },
    cleartime(){
      console.log("长按暂停");
      clearInterval(timer);
    },
    initCanvas() {
      console.log("初始化canvas")
      canvas = document.getElementById('canvas');
      ctx = canvas.getContext('2d');
      var scale = window.devicePixelRatio;
      var getPixelRatio = function(context) {
        var backingStore = context.backingStorePixelRatio ||
          context.webkitBackingStorePixelRatio ||
          context.mozBackingStorePixelRatio ||
          context.msBackingStorePixelRatio ||
          context.oBackingStorePixelRatio ||
          context.backingStorePixelRatio || 1;

        return (window.devicePixelRatio || 1) / backingStore;
      };
      ratio = getPixelRatio(ctx);
      console.log("ratio="+ratio);
      //ctx.scale(scale,scale);
      canvas.width = w;
      canvas.height = h;
      canvas.style.width=w+'px';
      canvas.style.height=h+'px';
      canvas.width = w*ratio;
      canvas.height=h*ratio;
      bgimg = new Image();
      bgimg.src = require("@/assets/images/长按图片.jpg");
      this.imgsrc = require("@/assets/images/text_01.png");
      this.show = true;
      this.$refs.Img.style.bottom = '-80px';
      bgimg.onload = function () {
        ctx.drawImage(bgimg, 0, 0, img_w*ratio, img_h*ratio, left, 0, img_w * ((canvas.height + 20) / img_h)*ratio, canvas.height*ratio);
        console.log("offset="+document.getElementById("text_img").offsetLeft);
      }
    }
  }
}

var w = window.document.body.clientWidth;
var h = window.document.body.clientHeight;
var img_w = 4130;
var img_h = 2639;
var left = 0;
var left_but = parseInt(w/1.5);
var timer;
var i = 1;
var bw = 0;
var imw = 0;
var grw = 0;
var top = 0;
var flag = true;
var faw = 0;
var ctx;
var canvas;
var bgimg;
var ratio;
</script>

<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active {
  transition: all 2.5s ease;
}

.text{
  position:fixed;
  left:-3rem;
  bottom:2rem;
  width:10rem;
  height:20rem;
  z-index:1000;
}

</style>
