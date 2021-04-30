<template>
  <div class="">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#00be9c">
      <van-swipe-item> <img src="/pic/img1.jpg" alt="" /> </van-swipe-item>
      <van-swipe-item> <img src="/pic/10quoted.jpg" alt="" /> </van-swipe-item>
    </van-swipe>
    <div class="on">
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zero"></use></svg
      >0增项，标准施工 </span>

      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-protection-fill"></use>
        </svg>
        杜绝项目外包
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-price"></use>
        </svg>
        装修贷款
      </span>
    </div>
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
img {
  width: 100%;
  height: 3rem;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color:#39c894;
  font-size: .5rem;
}
.on{
    width: 100%;
    display: flex;
    span{
        margin-left: 5px;
        flex: 1;
        font-size: .25rem;
    }
}
</style>