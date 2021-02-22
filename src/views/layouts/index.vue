<template>
  <div>
    <div class="loading-wrapper" v-show="showLoading">
      <Loading></Loading>
    </div>
    <bg v-bind:imgurl='img' v-bind:transon="ton" v-bind:long="lo" v-show="bgon" v-bind:stage='sta' @toNext="move"></bg>
    <!-- <transition name="moveUp"> -->
    <img class="text" :src='text1' v-if="text1on" :style="{transition:'transform '+transform+'s linear',webkitTransform:'-webkit-transform '+transform+'s linear'}" @click= "move">
    <!-- </transition> -->
    <!-- <div class="test" id="vid"> -->
    <video class="vi" preload="auto" v-if="videoon" id="myvideo" :src="videoSrc" :autoplay="autoplay" webkit-playsinline=‘true’ playsinline=‘true’ x5-video-player-type="h5">
    </video>
    <!-- </div> -->
     <div class="player">
    <div
      class="player-cd"
      id="trigger"
    >
    <audio id="audio" :src="audiosrc" loop></audio>
    </div>
     </div>
    <!-- <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div> -->
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import Bg from '@/components/Bg'
import Loading from '@/components/Loading'
import wechatH5Video from "wechat-h5-video";
export default {
  name: 'AppLayout',
  data() {
    return {
      img:'../../common/images/1-1.jpg',
      sta:"1-1",
      text1:"",
      text1on:false,
      videoon:false,
      videoSrc:"",
      top:7,
      autoplay: true,
      state: false,
      bgon:true,
      audiosrc:"",
      ton:false,
      transform:11,
      lo:false,
      iswide:false,
      imagepath:'new',
      showLoading: false,
      count: 0,
    }
  },
  components: {
    Bg,
    Loading
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    },
    createTouchstartEventAndDispatch (el) {
      let event = document.createEvent('Events');
      event.initEvent('touchstart', true, true);
      el.dispatchEvent(event);
    },
    move(){
      console.log("moved",this.sta);
      if (this.sta=="1-1"){
        let audio = document.getElementById('audio');
        audio.src=require("@/assets/audio/opening.wav");
        audio.play();
        this.sta="1-2";
        this.videoon=true;
        this.ton=false;
        //this.bgon=false;
        var self = this;
        this.$nextTick(() => {
          console.log("getting element");
          document.getElementById('myvideo').loop = false // 不设置视频循环播放
          document.getElementById('myvideo').addEventListener('ended',function(){
            console.log("ended video playing")
            self.videoon=false;
            self.lo=true;
            self.move();
          });
        });
      }
      else if(this.sta=="1-2"){
         this.img=require("@/assets/images/1-1.jpg");
         this.sta="2-0";
      }
      else if (this.sta=="2-0"){
        this.lo=false;
      // this.audiosrc=require("@/assets/audio/serenity.mp3");
      // let trigger = document.getElementById('trigger')
      // let audio = document.getElementById('audio')
      // trigger.addEventListener('touchstart', () => {
      //       audio.play()
      //     })

      // // 模拟触发 「touchstart」 事件
      // this.createTouchstartEventAndDispatch(trigger);
      //   this.bgon=true;
      let audio = document.getElementById('audio');
      audio.src=require("@/assets/audio/serenity.mp3");
      audio.play();
        this.img=require("@/assets/images/battlefield.jpg");
        this.sta="2-01";
        this.text1on=true;
        // this.$nextTick(() =>{
        //   this.transform=0;
        // });
      }
      else if(this.sta=="2-01"){
//         setTimeout(function () {
//   // this.closeModal()
//   // list.api.reloadData();
//            this.ton=true;
//         this.transform=0;
//         this.img=require("@/assets/images/2-01.jpg");
//         this.$nextTick(() =>{
//           this.text1on=false;
//         });
//         //this.text1on=false;
//         this.sta="2-02";
// },500)
        this.ton=true;
        this.transform=0;
        this.img=require("@/assets/images/"+this.imagepath+"2-01.jpg");
        this.$nextTick(() =>{
          this.text1on=false;
        });
        //this.text1on=false;
        this.sta="2-02";
        let audio = document.getElementById('audio')
        audio.src=require("@/assets/audio/festival.mp3");
        audio.play();
      }
      else if (this.sta=="2-02"){
        // this.bgon=false;
        //
        this.ton=false;
        //this.bgon=false;
        this.videoSrc=require("@/assets/videos/map.mp4")
        //this.text1on=false;
        this.videoon=true;
        var self = this;
        this.sta="2-1";
        this.$nextTick(() => {
          console.log("getting element");
          document.getElementById('myvideo').loop = false // 不设置视频循环播放
          document.getElementById('myvideo').addEventListener('ended',function(){
            console.log("ended video playing")
            self.videoon=false;
            self.move();
          });
        });
      }
      else if (this.sta=="2-1"){
      //this.audiosrc=require("@/assets/audio/festival.mp3");
     // let trigger = document.getElementById('trigger')
      // trigger.addEventListener('touchstart', () => {
      //       audio.play()
      // })
      // // 模拟触发 「touchstart」 事件
      // this.createTouchstartEventAndDispatch(trigger);
        //this.text1on=false;
        this.bgon=true;
        this.img=require("@/assets/images/"+this.imagepath+"图片3-1.jpg");
        this.sta="2-3";
      }
      else if (this.sta=="2-3"){
        this.img=require("@/assets/images/"+this.imagepath+"图片4-1.jpg");
        this.sta="2-6"
      }
      else if (this.sta=="2-4"){
        this.img=require("@/assets/images/4-2.jpg");
        this.sta="2-5"
      }
      else if (this.sta=="2-5"){
        this.img=require("@/assets/images/4-3.jpg");
        this.sta="2-6"
      }
      else if (this.sta=="2-6"){
        this.img=require("@/assets/images/5-1.jpg");
        this.sta="2-7"
      }
      else if (this.sta=="2-7"){
        this.img=require("@/assets/images/5-2.jpg");
        this.sta="2-8"
      }
      else if (this.sta=="2-8"){
        this.img=require("@/assets/images/5-3.jpg");
        this.sta="2-9"
      }
      else if (this.sta=="2-9"){
        this.img=require("@/assets/images/5-4.jpg");
        this.sta="2-10";
      }
      else if (this.sta=="2-10"){
        this.sta="2-11";
        this.$router.push('/line')
      }

    },
    preload: function() {
      let imgs = [
        require("@/assets/images/1-1.jpg"),
        require("@/assets/images/文字1.png"),
        require("@/assets/images/battlefield.jpg"),
        require("@/assets/images/2-01.jpg"),
        require("@/assets/images/"+this.imagepath+"图片3-1.jpg"),
        require("@/assets/images/"+this.imagepath+"图片4-1.jpg"),
        require("@/assets/images/4-2.jpg"),
        require("@/assets/images/4-3.jpg"),
        require("@/assets/images/5-1.jpg"),
        require("@/assets/images/5-2.jpg"),
        require("@/assets/images/5-3.jpg"),
        require("@/assets/images/5-4.jpg"),
        require('@/assets/images/background.jpg'),
        // "static/图片11-1.png",
        // "static/四月.png",
      ]

      for (let img of imgs) {
        let image = new Image()
        image.src = img
        image.onload = () => {
          this.count++
          console.log(this.count)
        }
      }

    },
  },
  created(){
      var width=document.documentElement.clientWidth;
      var Height=document.documentElement.clientHeight;
      var ratio=Height/width;
      if(ratio>1.85) {this.iswide=false;this.imagepath="";}
      this.img=require("@/assets/images/1-1.jpg");
      this.text1=require("@/assets/images/文字1.png");
      this.videoSrc=require("@/assets/videos/begin.mp4")
      this.audiosrc=require("@/assets/audio/opening.wav")
  },
  mounted () {
  //  this.preload();
    // var de = document.documentElement;
    // if (de.requestFullscreen) {
    //     de.requestFullscreen();
    // } else if (de.mozRequestFullScreen) {
    //     de.mozRequestFullScreen();
    // } else if (de.webkitRequestFullScreen) {
    //     de.webkitRequestFullScreen();
    // }
      // document.getElementById('myvideo').loop = false // 不设置视频循环播放
      // document.getElementById('myvideo').addEventListener('ended',function(){
      //           console.log("ended video playing")
      //           move();
      // });
      // audio = document.getElementById('audio')
      // audio.play();
  },
  watch: {
    count: function(val) {
      // console.log(val)
      if (val === 13) {
        // 图片加载完成后跳转页面
        //this.$router.push('/home')
        this.showLoading=false;
        this.bgon=true;
      }
    }
  }
}
</script>

<style scoped>
	.vi{
		position:fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
  	height: 100%;
    /* height: 100%; */
    z-index:200;
    object-fit:fill;
		/* background: url("../../common/images/1-1.jpg") no-repeat;
		background-size: cover; */
	}
  .test{
    width: 100%;
  	height: 100%;
  }
  .text{
    z-index: 100;
    width:100%;
    top:0;
    position:absolute;
  }
  .moveUp-enter-active,  .moveUp-leave-active {
    transition: all 20s linear 0.3;
    transform: translateY(50%);
  }
   .moveUp-enter,  .moveUp-leave {
    transform: translateY(100%);
  }
   .moveUp-leave-to{
     transform: translateY(100%);
   }
  .fade-enter {
		opacity:0.5;
	}
	.fade-leave{
		opacity:1;
	}
	.fade-enter-active{
		transition:opacity .3s;
	}
	.fade-leave-active{
		opacity:0;
		transition:opacity .3s;
	}
</style>
