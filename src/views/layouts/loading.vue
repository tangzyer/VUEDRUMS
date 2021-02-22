<template>
  <div class="page-container" style="text-align: center;">
    <div id="loading-panel">
      <h1><strong>Loading...</strong></h1>
      <h2><strong>{{percent}}</strong></h2>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0,
    }
  },
  mounted: function() {
    this.preload()
  },
  methods: {
    preload: function() {
      let imgs = [
        require("@/assets/images/1-1.jpg"),
        require("@/assets/images/文字1.png"),
        require("@/assets/images/battlefield.jpg"),
        require("@/assets/images/2-01.jpg"),
      ]

      for (let img of imgs) {
        let image = new Image()
        image.src = img
        image.onload = () => {
          this.count++
        }
      }

    },
    watch: {
    count: function(val) {
      // console.log(val)
      if (val === 4) {
        // 图片加载完成后跳转页面
        this.$router.push('/home')
      }
    }
  }
  },
}
</script>