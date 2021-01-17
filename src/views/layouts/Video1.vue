<template>
  <div>
    <div class = 'bg'>
      <transition name="fade" mode="out-in">
        <img v-bind:src="imgurl" :key="imgurl" style="height:100%;width:100%" @click="movetoNext"/>
      </transition>
    </div>
    <div class="test_two_box">
      <video id="myVideo" class="video-js">
        <source v-bind:src="videourl" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video1',
  data(){
    return{
      imgurl:require("@/assets/images/花鼓敲打.jpg"),
      videourl:require("../../../static/Drums.mp4")
    }
  },
  methods:{
    movetoNext(){
      this.$emit('sound','play');
      this.$router.push('/Answer2');
    }
  },
  created(){
    this.videourl=require("../../../static/Drums.mp4");
  },
  mounted() {
    this.$emit("sound","stop");
    let myPlayer = this.$video(myVideo, {
      //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
      controls: true,
      poster: 'http://192.168.234.116:8110//Picture/position/banner.jpg', //封面
      //自动播放属性,muted:静音播放
      // autoplay: "muted",
      //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      preload: "auto",
      //设置视频播放器的显示宽度（以像素为单位）
      width: "280px",
      //设置视频播放器的显示高度（以像素为单位）
      height: "157px",
      margin: "0 auto",
      top: "-10px"
    })
  },
}
</script>

<style scoped>
.bg{
  position:absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.test_two_box{
  width:350px;
  height:300px;
  position:absolute;
  left:50%;
  top:40%;
  transform: translate(-50%,-50%);
  z-index:100;
  background-image: url("~@/assets/images/视频需要的文本框.png");
  background-repeat: no-repeat;
  background-position: -10px 0px;
  background-size: 100% 100%;
}
.video-js{
  position:relative;
  left:50%;
  top:55%;
  transform: translate(-50%,-50%);
}
</style>
