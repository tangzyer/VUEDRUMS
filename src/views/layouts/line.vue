  
<template>
  <div>
    <bg :imgurl='img' transon=true @toNext="clicking"></bg>
    <div class="grid" v-if="showoption">
	<div class="item" id="line0" @click="choosingLine(0)"></div>
	<div class="item" id="line1" @click="choosingLine(1)"></div>
	<div class="item" id="line2" @click="choosingLine(2)"></div>
	<div class="item" id="line3" @click="choosingLine(3)"></div>
	<div class="item" id="line4" @click="choosingLine(4)"></div>
	<div class="item" id="line5" @click="choosingLine(5)"></div>
    </div>
    <div class="but" v-if="showoption">
        <img @click="confirm" src="~@/assets/images/confirm.png" style="height:100%;width:100%;">
    </div>
    <div v-show="Lining[2]" class="l1" :style="{top:top0+'px',left:right0+'px',height:height0+'px',width:width0+'px' }">  
        <img src="~@/assets/images/line1.png" style="height:100%;width:100%;" >
    </div>
    <div class="l1" v-show="Lining[3]" :style="{top:top3+'px',left:right0+'px',height:height1+'px',width:width0+'px' }">
        <img src="~@/assets/images/line6.png" style="height:100%;width:100%;" >
    </div>
    <div class="l1" v-show="Lining[6]" :style="{top:top3+'px',left:right0+'px',height:height3+'px',width:width0+'px' }">
        <img src="~@/assets/images/line6.png" style="height:100%;width:100%;" >
    </div>
    <div class="l1" v-show="Lining[7]" :style="{top:top1+'px',left:right0+'px',height:height1+'px',width:width0+'px' }"> 
        <img src="~@/assets/images/line6.png" style="height:100%;width:100%;" >
    </div>
    <div class="l1" v-show="Lining[1]" :style="{top:top3+'px',left:right0+'px',height:height1+'px',width:width0+'px' }">
        <img src="~@/assets/images/line5.png" style="height:100%;width:100%;" >
    </div>
    <div class="l1" v-show="Lining[5]" :style="{top:top1+'px',left:right0+'px',height:height1+'px',width:width0+'px' }">
        <img src="~@/assets/images/line5.png" style="height:100%;width:100%;" >
    </div>
    <div class="l1" v-show="Lining[0]" :style="{top:top3+'px',left:right0+'px',height:height2+'px',width:width0+'px' }">
        <img src="~@/assets/images/line4.png" style="height:100%;width:100%;" >
    </div>
    <div class="l1" v-show="Lining[4]" :style="{top:top1+'px',left:right0+'px',height:height2+'px',width:width0+'px' }">
        <img src="~@/assets/images/line4.png" style="height:100%;width:100%;" >
    </div>
    <div class="l1" v-show="Lining[8]" :style="{top:top4+'px',left:right0+'px',height:height2+'px',width:width0+'px' }">
        <img src="~@/assets/images/line4.png" style="height:100%;width:100%;" >
    </div>
 <div class="player">
    <div
      class="player-cd"
      id="trigger"
    >
    <audio id="audio" :src="audiosrc" loop></audio>
    </div>
     </div>
  </div>
</template>

<script>
import Bg from '@/components/Bg'
export default {
   name: 'Linet',
   data(){
       return{
           img:"",
           showoption:true,
           correct:false,
           sta:0,
           answer:{
               0:1,
               1:2,
               2:3,
           },
           style1:{},
           style2:{},
           style3:{},
           style4:{},
           style5:{},
           style6:{},
           chosenleft:0,
           correctnum:0,
           Lining:[false,false,false,false,false,false,false,false,false],
           top0:0,
           top1:0,
           top2:0,
           top3:0,
           top4:0,
           right0:0,
           right1:0,
           right2:0,
           height0:0,
           height1:0,
           height2:0,
           height3:0,
           width0:0,
           audiosrc:"",
           imagepath:'new'

       }
   },
   components: {
    Bg
  },
  created(){
      var width=document.documentElement.clientWidth;
      var Height=document.documentElement.clientHeight;
      var ratio=Height/width;
      if(ratio>1.85) {this.iswide=false;this.imagepath="";}
      this.audiosrc=require("@/assets/audio/festival.mp3")
  },
  methods:{
    createTouchstartEventAndDispatch (el) {
      let event = document.createEvent('Events');
      event.initEvent('touchstart', true, true);
      el.dispatchEvent(event);
    },
      move(){
          this.$router.push('/part3');
      },
      clicking(){
          if(this.sta==1){
              this.move();
          }
          else if(this.sta==2){
              this.back();
          }
      },
      back(){
          this.correctnum=0;
          this.sta=0;
          this.showoption=true;
          this.img=require('@/assets/images/background.jpg');
      },
      confirm(){
          console.log("confirming")
          for (let i = 0; i < this.Lining.length; ++i) {
                this.$set(this.Lining,i,false);
          }
          if(this.correctnum>0){
              this.showoption=false;
              this.img=require('@/assets/images/'+this.imagepath+'图片6-1.jpg');
              this.sta=1;
          }
          else{
              this.showoption=false;
              this.img=require('@/assets/images/'+this.imagepath+'6-2.jpg');
              this.sta=2;
          }
      },
      choosingLine(idx){
            // const rect=e.target.getBoundingClientRect();//获取点击的dom的位置
            console.log(idx);
            if(idx%2==0){
                this.chosenleft=idx;
            }
            else{
                this.$set(this.Lining,(this.chosenleft/2)*3+(idx-1)/2, true);
                console.log((this.chosenleft/2)*3+(idx-1)/2);
                //this.Lining[this.chosenleft+(idx%3)]=true;
                if(this.answer[this.chosenleft]==idx){
                    this.correctnum+=1;
                }

            }
      }
  },
  mounted(){
      let trigger = document.getElementById('trigger')
      let audio = document.getElementById('audio')
      trigger.addEventListener('touchstart', () => {
        audio.play()
      })
      // 模拟触发 「touchstart」 事件
      this.createTouchstartEventAndDispatch(trigger)
      this.img=require('@/assets/images/background.jpg');
      const e0=document.getElementById("line0").getBoundingClientRect();
      const e1=document.getElementById("line1").getBoundingClientRect();
      const e2=document.getElementById("line2").getBoundingClientRect();
      const e3=document.getElementById("line3").getBoundingClientRect();
      const e4=document.getElementById("line4").getBoundingClientRect();
      const e5=document.getElementById("line5").getBoundingClientRect();
      this.top0=e0.bottom-20;
      this.top1=(e2.bottom+e2.top)/2;
      this.top2=e4.bottom-20;
      this.right0=e0.right-30;
      this.right1=e2.right-10;
      this.right2=e3.right-10;
      this.width0=e1.left-e0.right+40;
      this.height0=e5.top-e0.bottom+50;
      this.height1=e3.bottom-e0.bottom;
      this.height2=10;
      this.top3=(e0.bottom+e0.top)/2;
     // this.top3=e0.top+(e0.bottom-e0.top)/3;
      this.top4=(e5.bottom+e5.top)/2;
      this.height3=this.height0+e0.height-20;
    //   style1={
    //      position: "absolute",
    //      top:top1+'px',
    //      left:right1+'px',
    //      width:width1+'px',
    //   }
  }
}
</script>
<style scoped>
    .grid{
        display: grid;
		position:fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
        padding-top:0.5rem;
        padding-bottom:2rem;
        padding-left:0.5rem;
        padding-right:0.5rem;
        grid-template-columns: 4.5rem 4rem;  
        grid-template-rows: 4rem 4rem 4rem;
        /* grid-column-gap: 1rem; */
        grid-row-gap:1rem;
        z-index:1;
    }
    .item:nth-child(1){background: url('~@/assets/images/druma.png') no-repeat;
                       background-size:100% 100%;}
    .item:nth-child(2){background: url('~@/assets/images/textdrum1new.png') no-repeat;
                       background-size:100% 100%;}
    .item:nth-child(3){background: url('~@/assets/images/drumb.png') no-repeat;
                       background-size: 100% 100%}
    .item:nth-child(4){background: url('~@/assets/images/textdrum2new.png') no-repeat;
                       background-size: 100% 100%;}
    .item:nth-child(5){background: url('~@/assets/images/drumc.png') no-repeat;
                       background-size: 100% 100%;}
    .item:nth-child(6){background: url('~@/assets/images/textdrum31new.png') no-repeat;
                       background-size: 100% 100%;}
    .but{
        width:4rem;
        height:1rem;
        position: fixed;
        bottom: 1rem;
        left:3rem;
        right:3rem;
        text-align: center;
        z-index:3;
        /* background: url('~@/assets/images/confirm.png') no-repeat;
        background-size:100% 100%; */
    }
    .l1{
       position: fixed;
       /* left:160px;
       top:190px;
       width:50px;
       height:280px; */
    }
</style>