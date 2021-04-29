<template>
  <div class="">
    <header>
      <img src="/logo.png" alt="" />
      <h5><slot>首页</slot></h5>
      <div class="ico">
        <i class="icon iconfont icon-user use"></i>
        <div class="name">我的</div>
      </div>
        <div class="ico">
       <i class="icon iconfont icon-nav na"></i>
                    <div class="name">导航</div>
      </div>
    </header>
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
header {
  width: 100%;
  display: flex;
  img {
    margin: 16px;
    width: 1.9rem;
    height: 0.6rem;
  }
  h5 {
    margin: 16px;
    text-align: center;
    flex: 3;
    font-size: 0.5rem;
    font-weight: normal;
  }
  span {
    margin: 18px;

    font-size: 0.4rem;
  }
  .ico{
      margin: 10px;
      .use{
          font-size: .5rem;
          color:#999999;
      }
       .na{
          font-size: .5rem;
            color:#999999;
      }
      .name{
          color:#999;
        //   font-size: 22px;
      }
  }
}
</style>