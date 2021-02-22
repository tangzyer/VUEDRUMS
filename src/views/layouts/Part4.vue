<template>
  <div>
    <bg v-bind:imgurl='img' v-bind:stage='sta' v-show="bgon" @toNext="move"></bg>
     <video class="vi" v-if="videoon" id="myvideo" :src="videoSrc" :autoplay="autoplay" webkit-playsinline=‘true’ playsinline=‘true’>
    </video>
  </div>
</template>

<script>
import bg from '@/components/Bg'
export default {
  name: 'Part3_7',
  data() {
    return {
      img: require('@/assets/images/图片13-1.jpg'),
      sta: '13-1',
      text1: '',
      text1on: false,
      top: 7,
      imagepath:"new",
      autoplay: true,
      videoSrc:"",
      videoon:false,
      bgon:true
    }
  },
  components: {
    bg
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    },
    move() {
      if (this.sta == '13-1'){
        this.img = require('@/assets/images/'+this.imagepath+'图片13-2.jpg');
        this.sta="13-2";
        //this.text1on=true;
      }
      else if (this.sta=="13-2"){
        //<!-- 此处应有emit某信号-->
        /*复原，一定要复原*/
        this.sta="13-3"
        this.img = require('@/assets/images/'+this.imagepath+'图片13-3.jpg');
      }
      else if (this.sta=="13-3"){
        this.sta="14-1";
        this.img=require('@/assets/images/图片14-1.jpg');
      }
      else if (this.sta=="14-1"){
        this.videoSrc=require("@/assets/videos/结尾.mp4")
        this.videoon=true;
        this.sta="15-1";
        var self=this;
        this.img=require('@/assets/images/图片15-1.jpg');
        self.bgon=false;
        this.$nextTick(() => {
          console.log("getting element");
          //self.img=require('@/assets/images/图片15-1.jpg');
          document.getElementById('myvideo').loop = false // 不设置视频循环播放
          document.getElementById('myvideo').addEventListener('ended',function(){
            //self.img=require('@/assets/images/图片15-1.jpg');
            //self.bgon=true;
            console.log("ended video playing")
            self.videoon=false;
            self.move();
          });
        });
      }
      else if(this.sta=="15-1"){
        //this.img=require('@/assets/images/图片15-1.jpg');
        this.bgon=true;
        this.sta="15-2";
      }
      else if(this.sta=="15-2"){
        window.location.href = "https://tv.cctv.com/lm/gzsbqlx/?spm=C53121759377.PTxoH3RRFDJW.0.0";
      }
    },
  },
  created(){
      var width=document.documentElement.clientWidth;
      var Height=document.documentElement.clientHeight;
      var ratio=Height/width;
      if(ratio>1.85) {this.iswide=false;this.imagepath="";}
      this.$emit("sound","ending");
      this.img=require("@/assets/images/"+this.imagepath+"图片13-1.jpg");
  },
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
</style>