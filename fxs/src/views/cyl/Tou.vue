<template>
  <div>
    <!-- 第19页 -->
  <hea ><slot>关于我们</slot></hea>
    <img class="top" src="/pic/19.png" alt="">
    <h2>房先森简介</h2>
    
    <img src="/pic/common/icon_title.png" class="s" alt="">
    <hr color="#ccc" height="1px">
    <p>杭州瑞壹网络科技有限公司旗下“房先森”，专注于家庭装修服务，装饰立足刚需房,利用互联网将装修、供应链、进行融合，多维度实现用户对设计师、工长、工地、材料等的线上选择体验，房先森以自营的模式真正意义上过滤掉传统家装公司利润，将利润让给业主。杭州瑞壹网络科技有限公司成立了“房先森装修学院“”并以装修套餐 + 个性化定制的模式，提供创新型装修服务</p>
<div class="bg">  <h2>我们是谁？我们如何与众不同</h2>
  
    <div class="b"><img src="/pic/common/icon_title.png" class="ss" alt=""></div>
    <hr color="#ccc" height="1px">
    <img class="two" src="/pic/2.png"  alt=""></div>
    <foo2 />
  </div>
</template>

<script>
import hea from "@/components/head.vue";
import foo2 from "@/components/footer2.vue";


export default {
components:{
  hea,
  foo2
}
}
</script>

<style lang="scss">
.bg{
  width: 100%;
  background-color: rgb(230, 228, 228);
}
.b{
    background-color: rgb(218, 218, 218)
}
  .top{
    width: 100%;
    height: 2rem;
  }
  h2{
  text-align: center;
  font-weight: normal;
  font-size: .5rem;
  }
  .s{
    position: relative;
    left:42%;
    top:18px;
    background-color: #fff;
  }
   .ss{
    position: relative;
    left:42%;
    top:16px;
    background-color: rgb(202, 202, 202)f;
  }
  p{
    margin-top: 15px;
    font-size: .2rem;
  }
  .two{
    width: 100%;
  }
</style>