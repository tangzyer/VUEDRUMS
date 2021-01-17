<template>
  <div class="app-container">
    <bg v-bind:imgurl='img' v-bind:stage='sta' @toNext="move"></bg>
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
      if (this.sta == '13-1'){
        this.img = require('@/assets/images/图片13-2.jpg');
        this.sta="13-2";
        //this.text1on=true;
      }
      else if (this.sta=="13-2"){
        //<!-- 此处应有emit某信号-->
        /*复原，一定要复原*/
        this.sta="13-3"
        this.img = require('@/assets/images/图片13-3.jpg');
      }
      else if (this.sta=="13-3"){
        this.sta="14-1";
        this.img=require('@/assets/images/图片14-1.jpg');
      }
    },
    created(){
      this.img=require("@/assets/images/图片13-1.jpg");
    },
  },
}
</script>

