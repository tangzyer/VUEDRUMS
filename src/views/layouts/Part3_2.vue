<template>
  <div>
    <bg v-bind:imgurl='img' v-bind:stage='sta' @toNext="move"></bg>
        <div class="player">
    <div
      class="player-cd"
      id="trigger"
    >
    <audio id="audio" loop></audio>
    </div>
    </div>
  </div>
</template>

<script>
import bg from '@/components/Bg'
export default {
  name: 'Part3_2',
  data() {
    return {
      img:"../../common/images/7-1.jpg",
      sta: '10-1',
      text1: '',
      text1on: false,
      top: 7,
      imagepath:"new"
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
      if (this.sta == '10-1'){
        this.img = require('@/assets/images/'+this.imagepath+'图片10-2.jpg');
        this.sta="10-2";
        let audio = document.getElementById('audio');
        audio.play();
        this.text1on=true;
      }
      else if (this.sta=="10-2"){
        this.text1on=false;
        this.img=require("@/assets/images/"+this.imagepath+"图片10-3.jpg");
        this.sta="10-3";
      }

      else if (this.sta=="10-3"){
        //<!-- 这里图片结束了应该怎么写呢？-->
        this.img=require("@/assets/images/"+this.imagepath+"图片10-4.jpg");
        this.sta="10-4"
      }
      else if (this.sta=="10-4"){
        this.$router.push("/Video1");
      }
    },
    mounted(){
      let audio = document.getElementById('audio');
      audio.src=require("@/assets/audio/ca.mp3");
      this.$nextTick(()=>{audio.play()});
    }
  },
  created(){
      var width=document.documentElement.clientWidth;
      var Height=document.documentElement.clientHeight;
      var ratio=Height/width;
      if(ratio>1.85) {this.iswide=false;this.imagepath="";}
      this.img=require("@/assets/images/"+this.imagepath+"图片10-1.jpg");
  },
}
</script>
