<template>
  <div class="">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#00be9c">
      <van-swipe-item>
        <ul>
          <li><img src="/pic/jian.png" alt=""></li>
          <li><img src="/pic/jian.png" alt=""></li>
          <li><img src="/pic/jian.png" alt=""></li>
          <li><img src="/pic/jian.png" alt=""></li>

          
        </ul>
      </van-swipe-item>
      <van-swipe-item>
        <ul>
          <li><img src="/pic/jian.png" alt=""></li>
          <li><img src="/pic/jian.png" alt=""></li>
          <li><img src="/pic/jian.png" alt=""></li>
          <li><img src="/pic/jian.png" alt=""></li>
         
        </ul>
      </van-swipe-item>
    </van-swipe>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' type="text/css" scoped>
ul{
    width: 100%;
    display: flex;
}
</style>
