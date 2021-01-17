<!--放完动画了有animationEnd信号-->
<template>
<div class="app-container">
  <iframe id="bdIframe"
          src="../Animate/indexmove.html"
    scrolling="no"
    frameborder="0"
    @click="move"
    ></iframe>
</div>
</template>

<script>
export default {
name: "Animate",
data(){
  return{
    end:false
  }
},
  methods:{
      move(){
        if(this.end){
        console.log("end");
        this.$emit('AnimateEnd');
        this.$router.push('/part39');
        }
      }
  },
  mounted(){
    /**
     * iframe-宽高自适应显示
     */
    this.$emit("sound","anima");
    const oIframe = document.getElementById('bdIframe');
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = (Number(deviceWidth)) + 'px'; //数字是页面布局宽度差值
    oIframe.style.height = (Number(deviceHeight)) + 'px';
    var self=this;
    this.$nextTick(() => {
      var testiframe=document.getElementById("bdIframe").contentWindow;
      var doc=testiframe.document;
      //在这里修改对应的event
      testiframe.addEventListener("animateEnd",function(e){
        self.$emit('animationEnd');
        self.end=true;
        self.$router.push('/part39');
        console.log("!End!");}
      )
    })//数字是页面布局高度差
  },
}

</script>

<style scoped>

</style>
