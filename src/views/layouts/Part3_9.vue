<template>
  <div class="app-container">
    <bg v-bind:imgurl='img' v-bind:transon="ton" v-bind:long="lo" v-show="bgon" v-bind:stage='sta' @toNext="move"></bg>
    <transition name="moveUp">
    <img class="text" :src='text1' v-if="text1on" :style="{transition:'transform '+transform+'s linear',webkitTransform:'-webkit-transform '+transform+'s linear'}" @click= "move">
    </transition>
    <video class="vi" v-if="videoon" id="myvideo" :src="videoSrc" :autoplay="autoplay" webkit-playsinline=‘true’ playsinline=‘true’>
    </video>
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
    }
  },
  components: {
    Bg
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
        this.sta="2-0";
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
            //self.lo=true;
            self.move();
          });
        });
      }
      else if(this.sta=="1-2"){
         this.img=require("@/assets/images/1-1.jpg");
         this.sta="2-0";
      }
      else if (this.sta=="2-0"){
        //this.lo=false;
        this.img=require("@/assets/images/back.png");
        this.sta="2-01";
        this.text1on=true;
        // this.$nextTick(() =>{
        //   this.transform=0;
        // });
      }
      else if(this.sta=="2-01"){
        this.$router.push('/part4');
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
        this.img=require("@/assets/images/2-01.jpg");
        this.$nextTick(() =>{
          this.text1on=false;
        });
        //this.text1on=false;
        this.sta="2-02";
      }
      
    }
  },
  created(){
      this.img=require("@/assets/images/这一切都是值得的.jpg");
      this.text1=require("@/assets/images/文字2.png");
      this.videoSrc=require("@/assets/videos/开门.mp4")
      //this.audiosrc=require("@/assets/audio/opening.wav")
  },
  mounted () { 
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
    /* height: 100%; */
    z-index:200;
		/* background: url("../../common/images/1-1.jpg") no-repeat;
		background-size: cover; */
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