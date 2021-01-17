<!--第二个问题的组件，答题功能，答题正确则emit一事件"clickright",参数为2代表题的序号，
答题错误则emit一事件“clickwrong",参数为2代表提的序号）-->
<template>
  <div >
    <bg v-bind:imgurl='bgurl' v-bind:stage='sta' @toNext="move"></bg>
    <div class="answer" v-if="ifshow">
      <ul class="lists">
        <li v-for='(val,index) in list':key="index" @click="choiceIt(val)">
          <img v-bind:src="val.ans" alt="" style="width: 100%">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bg from "@/components/Bg"
export default {
  name: 'answer',
  components: {
    bg,
  },
  data(){
    return{
      sta: "",
      ifshow:true,
      val:"",
      state:false,
      qstindex:2,
      imagepath:"new",
      bgurl:require("@/assets/images/图片11-5.jpg"),
      list:[
        {
          ans: require('@/assets/images/击鼓边.png'),
          state: false
        },
        {
          ans: require('@/assets/images/敲鼓边.png'),
          state: false
        },
        {
          ans: require('@/assets/images/磨鼓钉.png'),
          state: false
        },
        {
          ans: require('@/assets/images/花敲鼓.png'),
          state: true
        }
      ]

    }
  },
  //components: { BgForQuestion },


  methods: {
    choiceIt(val) {
      if(val.state){
        this.ifshow = false;
        this.sta = "11-6"
        this.bgurl = require("@/assets/images/"+this.imagepath+"图片11-6.jpg")
        this.$emit('clickright',this.qstindex);
        console.log("Right!")
      }
      else{
        this.sta = "11-7"
        this.ifshow = false;
        this.bgurl = require("@/assets/images/"+this.imagepath+"图片11-7.jpg")
        this.$emit('clickwrong',this.qstindex);
        console.log("wrong!")
      }
    },
    move(){
      if (this.sta == "11-6"){
        console.log("11-9")
        this.sta = "11-9"
        this.bgurl = require("@/assets/images/"+this.imagepath+"图片11-9.jpg")
      }
      else if(this.sta == "11-7"){
        this.sta = "11-10";
        this.bgurl = require("@/assets/images/"+this.imagepath+"图片11-10.jpg");
      }
      else if(this.sta == "11-9"){
        this.sta = "11-11"
        this.bgurl = require("@/assets/images/"+this.imagepath+"图片11-11.jpg")

      }
      else if(this.sta == "11-10"){
        this.sta = "";
        this.ifshow = true;
        this.$router.push('/video1');
      }
      else if(this.sta == "11-11"){
        this.sta = "12-1"
        this.bgurl = require("@/assets/images/"+this.imagepath+"图片12-1.jpg")
      }
      else if(this.sta == "12-1"){
        this.$router.push('/anima');
      }
    }
  },
  created(){
      var width=document.documentElement.clientWidth;
      var Height=document.documentElement.clientHeight;
      var ratio=Height/width;
      if(ratio>1.85) {this.iswide=false;this.imagepath="";}
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
