<!--第一个问题的组件，答题功能，答题正确则emit一事件"clickright",参数为1代表题的序号，
答题错误则emit一事件“clickwrong",参数为1代表提的序号）-->
<template>
  <div class="app-container">

    <div class="bg">
      <img v-bind:src="bgurl" :key="bgurl" style="height:100%;width:100%" />
    </div>
    <div class="answer">
      <ul class="lists">
        <li v-for='(val,index) in list' :key="index" @click="choiceIt(val)">
          <img v-bind:src="val.ans" alt="" style="width: 100%">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//第一个问题的组件
export default {
  name: 'answer',
  data(){
    return{
      val:"",
      state:false,
      qstindex:1,
      bgurl:require("@/assets/images/图片11-1.png"),
      list:[
        {
          ans: require('@/assets/images/黄钟.png'),
          state: false
        },
        {
          ans: require('@/assets/images/大吕.png'),
          state: false
        },
        {
          ans: require('@/assets/images/夷则.png'),
          state: false
        },
        {
          ans: require('@/assets/images/四月.png'),
          state: true
        }
      ]

    }
  },
  //components: { BgForQuestion },


  methods: {
    choiceIt(val) {
      if(val.state){
        this.$emit('clickright',this.qstindex);
        console.log("Right!");
        this.$router.push('/part35');
      }
      else{
        this.$emit('clickwrong',this.qstindex);
        console.log("wrong!")
        this.$router.push('/part36');
      }
    },
  }
}

</script>

<style scoped>
.answer{
  position:absolute;
  left: 0px;
  top: 30px;
  /* background: url("../../common/images/1-1.jpg") no-repeat;
  background-size: cover; */
  z-index: 100;
}
.lists{
  width:50%;
  margin:0 auto;
}

.lists li img{
  width:20%;
  text-align: center;
  position:relative;
  z-index: auto;
}
/*
.lists li span{
  position:absolute;
  right: 0.31rem;
  top: 50%;
  width: 0.6rem;
  height: 0.6rem;
  margin-top: -0.3rem;
}*/
.bg{
  position:fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  /* background: url("../../common/images/1-1.jpg") no-repeat;
  background-size: cover; */
  z-index: -1;
}
.fade-enter {
  opacity:0.3;
}
.fade-leave{
  opacity:0.7;
}
.fade-enter-active{
  transition:opacity .3s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .3s;
}
</style>
