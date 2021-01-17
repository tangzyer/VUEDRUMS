<template>
  <div class="app-container">
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
import Bg from '@/components/Bg'
export default {
  name: 'Part3Layout',
  data() {
    return {
      img: '../../common/images/7-1.jpg',
      sta: '7-1',
      text1: '',
      text1on: false,
      top: 7
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
    move() {
      if (this.sta == '7-1'){
        this.img = require("@/assets/images/7-2.jpg");
        this.sta="7-2";
        this.text1on=true;
        let audio = document.getElementById('audio');
        // audio.src=require("@/assets/audio/ca.mp3");
        // audio.play();
      }
      else if (this.sta=="7-2"){
        this.text1on=false;
        this.img=require("@/assets/images/图片8-1.jpg");
        this.sta="8-1";
      }
      else if (this.sta=="8-1"){
        this.img=require("@/assets/images/图片8-2.jpg");
        this.sta="8-2";
      }
      else if (this.sta=="8-2"){
        this.img=require("@/assets/images/图片9-1.jpg");
        this.sta="9-1"
      }
      else if (this.sta=="9-1"){
        this.img=require("@/assets/images/图片9-2.jpg");
        this.sta="9-2"
      }
      else if (this.sta=="9-2"){
        //<!-- 这里图片结束了应该怎么写呢？-->
        // this.img=require("@/assets/images/图片9-2.jpg");
        // this.sta="9-3"
        this.$router.push('/part32');
      }
    },
  },
  created(){
      this.img=require("@/assets/images/7-1.jpg");
  },
  mounted(){
      let audio = document.getElementById('audio');
      audio.src=require("@/assets/audio/ca.mp3");
      this.$nextTick(()=>{audio.play()});
      this.$emit("sound","part3");
      // let trigger = document.getElementById('trigger')
      // trigger.addEventListener('touchstart', () => {
      //       audio.play()
      // })
      // // 模拟触发 「touchstart」 事件
      // this.createTouchstartEventAndDispatch(trigger);
      //audio.play();
  }
}
</script>
