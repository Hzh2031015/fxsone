<template>
    <div class=''>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color= "#00be9c">
  <van-swipe-item> <img src="/pic/banner.jpg" alt=""> </van-swipe-item>
  <van-swipe-item> <img src="/pic/banner1.jpg" alt=""> </van-swipe-item>
  <van-swipe-item> <img src="/pic/banner2.jpg" alt=""> </van-swipe-item>
  <van-swipe-item> <img src="/pic/banner3.jpg" alt=""> </van-swipe-item>
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

<style lang='scss' scoped>
img{
    width: 100%;
    height: 3rem;
}
</style>