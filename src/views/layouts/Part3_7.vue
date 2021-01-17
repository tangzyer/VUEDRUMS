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
      img: require('@/assets/images/图片11-9.jpg'),
      sta: '11-9',
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
      if (this.sta == '10-1'){
        this.img = require('@/assets/images/图片11-11.jpg');
        this.sta="11-11";
        this.text1on=true;
      }
      else if (this.sta=="11-11"){
        //<!-- 此处应有emit某信号-->
        /*复原，一定要复原*/
        this.sta="11-9"
        this.img = require('@/assets/images/图片11-9.jpg');
      }
    },
    created(){
      this.img=require("@/assets/images/7-1.jpg");
    },
  },
}
</script>

