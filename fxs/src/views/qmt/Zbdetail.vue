<template>
  <div class>
    <p class="pp">
      观澜时代国际花园云邸5幢
      <span class="sp1">泥木工程</span>
    </p>
    <div class="top">
      <span class="top-sp">户型：</span>
      <span class="top-sp1">二室</span>
      <span class="top-sp2">面积：</span>
      <span class="top-sp1">60-90m</span>
      <span class="top-sp2">装修预算：</span>
      <span class="top-sp1">18万</span>
    </div>
    <p class="p1">
      工地概况:
      <span>百万平米超级大盘，占据钱塘江北岸最美的江岸和湿地</span>
    </p>
    <ul class="uu">
      <li>
        <i class="icon iconfont icon-pencle"></i>
        评论(10)
      </li>
      <li class="ll">
        <i class="icon iconfont icon-tag"></i>
        预约参观工地
      </li>
    </ul>
    <section>
      <ul class="sec">
        <li>设计师：</li>
        <li>
          <u>吴飞柯</u>
        </li>
        <li>项目经理：</li>
        <li>王永龙</li>
      </ul>
      <ul class="sec-1">
        <li></li>
        <li></li>
        <li>2016-07-11</li>
        <li>泥木</li>
        <li>验收阶段</li>
      </ul>
      <p class="sec-foot">泥木工程验收成功</p>
      <div class="im1">
        <img src="/pic/zb1.png" alt />
      </div>
      <ul class="sec-1">
        <li></li>
        <li></li>
        <li>2016-04-27</li>
        <li>水电</li>
        <li>验收阶段</li>
      </ul>
      <p class="sec-foot">水电工程验收成功</p>
      <div class="im1">
        <img src="/pic/zb2.png" alt />
      </div>
      <ul class="sec-1">
        <li></li>
        <li></li>
        <li>2016-04-15</li>
        <li>水电</li>
        <li style="background:#AAAAAA">施工阶段</li>
      </ul>
      <div class="im1">
        <img src="/pic/zb3.png" alt />
      </div>
      <div class="a">
          <p class="sec-bottom">
      房先森互联网家装有别于传统装修公司与其他装修中
      介平台，以自营模式整合设计师与项目经理，
      杜绝项目转
      包外包，利用互联网将工地进行在线全景直播，
      通过去中
      间环节，
      提供装修套餐+个性化定制服务。
    </p>
      </div>
      
    </section>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.pp {
  margin-top: 0.3rem;
  margin-left: 0.2rem;
  font-size: 0.36rem;
  .sp1 {
    display: inline-block;
    font-size: 0.28rem;
    background-color: #39c894;
    color: #eaeaea;
    padding: 0 0.15rem;
    border-radius: 0.05rem;
    margin-left: 0.2rem;
  }
}
.top {
  margin-top: 0.2rem;
  font-size: 0.3rem;
  .top-sp {
    margin-left: 0.2rem;
  }
  .top-sp1 {
    color: #bebdbd;
  }
  .top-sp2 {
    margin-left: 0.4rem;
  }
}
.p1 {
  margin-left: 0.2rem;
  font-size: 0.3rem;
  margin-top: 0.2rem;
  span {
    color: #bebdbd;
    font-size: 0.2rem;
  }
}
.uu {
  display: flex;
  width: 96%;
  margin: 0 auto;
  height: 1rem;
  margin-top: 0.3rem;
  li {
    flex: 1;
    border: #eaeaea 1px solid;
    line-height: 1rem;
    text-align: center;
    font-size: 0.32rem;
    color: #37a7f7;
  }
  .ll {
    color: #39c894;
  }
}
section {
  background-color: #f5f3f3;
  width: 100%;
  margin-top: 0.4rem;
  height: 22.7rem;
  .sec {
    display: flex;
    font-size: 0.33rem;

    li {
      margin-top: 0.4rem;
      text-align: center;
    }
  }
  .sec li:nth-child(1) {
    margin-left: 0.2rem;
  }
  .sec li:nth-child(2) {
    color: #39c894;
  }
  .sec li:nth-child(3) {
    margin-left: 1rem;
  }
  ul li:nth-child(4) {
    color: #bebdbd;
  }
  .sec-1 {
    display: flex;
    width: 100%;
    height: 1rem;
    // background-color: #fff;
    margin-top: 0.2rem;
    line-height: 1rem;
  }
  .sec-1 li:nth-child(1) {
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    background-color: #39c894;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
  }
  .sec-1 li:nth-child(2) {
    width: 0.56rem;
    height: 0.5rem;
    border-bottom: 2px solid #39c894;
  }
  .sec-1 li:nth-child(3) {
    width: 2.3rem;
    background-color: #eaeaea;
    color: #757575;
    font-size: 0.35rem;
    text-align: center;
  }
  .sec-1 li:nth-child(4) {
    background-color: #39c894;
    width: 1.1rem;
    text-align: center;
    color: #eaeaea;
    font-size: 0.3rem;
  }
  .sec-1 li:nth-child(5) {
    background-color: #feb605;
    width: 1.6rem;
    text-align: center;
    color: #eaeaea;
    font-size: 0.3rem;
    margin-left: 0.2rem;
  }
}
.sec-foot {
  margin-left: 1.35rem;
  margin-top: 0.2rem;
  font-size: 0.35rem;
}
.im1 {
  margin-top: 0.2rem;
  margin-left: 1.35rem;
  width: 6rem;
  img {
    width: 100%;
  }
}
.a{
    width: 100%;
    background-color: #fff;
    .sec-bottom{
    width: 95%;
    margin: .2rem auto;
    padding: .2rem 0;
    font-size: .3rem;
    line-height: .52rem;
    text-indent: 2em;
}
}

</style>