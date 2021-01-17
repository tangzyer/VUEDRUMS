<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" @sound="play"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" @sound="play"></router-view>
    <audio id="audio1" loop></audio>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods:{
    play(stage){
      if (stage=="part3"){
         let audio = document.getElementById('audio1');
         audio.src=require("@/assets/audio/ca.mp3");
         audio.play();
      }
      else if(stage=="stop"){
        let audio = document.getElementById('audio1');
        audio.pause();
      }
      else if(stage=="anima"){
        let audio = document.getElementById('audio1');
        audio.src=require("@/assets/audio/river.mp3");
         audio.play();
      }
    }
  }
}
</script>
<style lang="scss"></style>
