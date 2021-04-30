<template>
    <div class=''>
        <hea ><slot></slot></hea>
       <jian />
        <img class="di" src="/pic/di.png" alt="">
        <ul class="ico">
            <li> <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-location">
             
          </use>
        </svg>  <p>杭州市滨江区长河街道</p></li>
            <li> <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-hot-line"></use>
        </svg> <p>400-9977-658</p></li>
        </ul>
        <div class="bgg"><img src="/pic/er.png" alt=""> <p>长按识别二维码关注微信咨询</p></div>
        <p class="font">房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐 + 个性化定制服务</p>
    <foo2 />
    </div>
</template>

<script>
import hea from "@/components/head.vue";
import foo2 from "@/components/footer2.vue";
import jian from "@/components/jian.vue";


export default {
    components:{
        hea,
        foo2,
        jian
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang='scss' type="text/css"   scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color:#39c894;
  font-size: .7rem;
}

.ico{
    width: 100%;
    display: flex;
    margin-top: 10px;
    li{
        width: 50%;
        // background-color: red;
        text-align: center;
    }
}
.di{
    width: 100%;
    height: 4rem;
}
.bgg{
    width: 100%;
    text-align: center;
    background-color: rgb(235, 232, 232);
    img{
        width: 45%;
    }
}
.font{
    font-size: .3rem;
    border-bottom: 10px solid #ccc;
}
</style>