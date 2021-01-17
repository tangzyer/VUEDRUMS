<template>
  <div class="app-container">
    <bg v-bind:imgurl='img' v-bind:stage='sta' @toNext="move"></bg>
  </div>
</template>

<script>
import bg from '@/components/Bg'
export default {
  name: 'Part3',
  data() {
    return {
      img: require('@/assets/images/图片11-10.jpg'),
      sta: '11-10',
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
    move() {
      //返回做题界面
    },
    created(){
      this.img=require("@/assets/images/7-1.jpg");
    },
  },
}
</script>
