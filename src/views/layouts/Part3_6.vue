<template>
  <div class="app-container">
    <bg v-bind:imgurl='img' v-bind:stage='sta' @toNext="move"></bg>
    <audio id="audio" loop></audio>
  </div>
</template>

<script>
import bg from '@/components/Bg'
export default {
  name: 'Part3_6',
  data() {
    return {
      img: require('@/assets/images/图片11-4.jpg'),
      sta: '11-4',
      text1: '',
      text1on: false,
      top: 7
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
      if (this.sta == '11-4'){
        let audio = document.getElementById('audio');
        audio.play();
        this.img = require('@/assets/images/图片11-3.jpg');
        this.sta="11-3";
        this.text1on=true;
      }
      else if (this.sta=="11-3"){
        //<!-- 此处应有emit某信号表示播放结束-->
        /*复原，一定要复原*/
        this.$router.push("/answer2");
        this.sta="11-4"
        this.img = require('@/assets/images/图片11-4.jpg');
      }
      else if(this.sta=="11-4"){
       this.$router.push("/answer2");
      }
    },
  },
  created(){
      this.img=require("@/assets/images/图片11-4.jpg");
  },
  mounted(){
      let audio = document.getElementById('audio');
      audio.src=require("@/assets/audio/ca.mp3");
      this.$nextTick(()=>{audio.play()});
    }
}
</script>

