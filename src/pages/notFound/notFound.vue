<template>
  <div class="mod_notFound">
    <h1 class="notFound_title">404 not found</h1>
    <p class="notFound_tip">{{ time }}s 后自动返回...</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        time: 3
      }
    },
    created () {
      // 3s 后自动返回上一个页面
      var timer = setInterval(() => {
        if(--this.time === 0) {
          clearInterval(timer)
          this.$router.go(-1)
        }
      }, 1000)
    }
  }
</script>

<style lang="scss" scoped>
  .mod_notFound {
    .notFound_title {
      margin-top: 50px;
      line-height: 100px;
      font-size: 35px;
      text-align: center;
    }
    .notFound_tip {
      font-size: 15px;
      text-align: center;
    }
  }
</style>

