<template>
  <div class="">
    <hea />
    <bann />
    <div class="nav">
      <ul class="o-nav">
        <li>
          <i class="iconfont icon-case"></i>
          <p>装修方案</p>
        </li>
        <li>
          <i class="iconfont icon-case"></i>
          <p>装修方案</p>
        </li>
        <li>
          <i class="iconfont icon-case"></i>
          <p>装修方案</p>
        </li>
        <li>
          <i class="iconfont icon-case"></i>
          <p>装修方案</p>
        </li>
      </ul>
      <ul class="t-nav">
        <li>
          <i class="iconfont icon-case"></i>
          <p>装修方案</p>
        </li>
        <li>
          <i class="iconfont icon-case"></i>
          <p>装修方案</p>
        </li>
        <li>
          <i class="iconfont icon-case"></i>
          <p>装修方案</p>
        </li>
        <li>
          <i class="iconfont icon-case"></i>
          <p>装修方案</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import hea from "@/components/head.vue";
import bann from "@/components/banner.vue";

export default {
  components: {
    hea,
    bann,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
.nav {
  width: 100%;
  .o-nav {
    //   overflow: hidden;
      margin-top: .2rem;
    display: flex;
    width: 100%;
    li {
        
      width: 25%;
      text-align: center;
    //   border: 1px solid red;
      border-radius: 1rem;
      height: 1.35rem;
      
      margin-left: 0.5rem;
        &:nth-child(1){
            background-color: #39c894;
        }
         &:nth-child(2){
            background-color: #feb505;
        }
         &:nth-child(3){
            background-color: #f6e46f;
        }
          &:nth-child(4){
            background-color: #00b2b2;
        }
      i {
          line-height: 1.35rem;
        font-size: 0.5rem;
        color:white;
      }
      p {
          margin-top: .1rem;
        font-size: 0.1rem;
      }
    }
  }
   .t-nav {
    display: flex;
    width: 100%;
    li {
        margin-top: .5rem;
      width: 25%;
      text-align: center;
    //   border: 1px solid red;
      border-radius: 1rem;
           height: 1.35rem;

      margin-left: 0.5rem;
        &:nth-child(1){
            background-color: #1b9af7;
        }
         &:nth-child(2){
            background-color: #7b72e9;
        }
         &:nth-child(3){
            background-color: #ff4351;
        }
          &:nth-child(4){
            background-color: #fe8864;
        }
      i {
          line-height: 1.35rem;
        font-size: 0.5rem;
        color:white;
      }
      p {
          margin-top: .2rem;

        font-size: 0.1rem;
      }
    }
  }
}
</style>
