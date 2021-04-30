<template>
  <div class="trim">
    <heads>装修方案</heads>
    <div class="box">
      <img src="/pic/case/case.jpg" alt width="100%" />
      <p class="box-p">局部装修</p>
      <ul>
        <li>
          <p class="box-p1">399元/㎡半包装修套餐</p>
          <p class="box-p2">
            特惠：
            <span>可选300元/㎡品牌主材包</span>
          </p>
        </li>
        <li>
          <p class="box-p3">已预约295套</p>
        </li>
      </ul>
    </div>
    <div class="box" @click="$router.push('/trimlist')">
      <img src="/pic/case/case1.jpg" alt width="100%" />
      <p class="box-p">全屋套餐</p>
      <ul>
        <li>
          <p class="box-p1">699元/㎡全包精装套餐</p>
          <p class="box-p2">
            正式发售：
            <span>全包套餐火爆预约中</span>
          </p>
        </li>
        <li>
          <p class="box-p3">已预约221套</p>
        </li>
      </ul>
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
    222
  </div>
</template>

<script>
import heads from "@/components/head.vue";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components:{
      heads,
  }
};
</script>

<style lang='scss' scoped>
.trim {
  background-color: #f4f4f4;
  width: 100%;
  height: 100%;
}
.box {
  width: 96%;
  height: 4.3rem;
  margin: 0.18rem auto;
  background-color: white;
  position: relative;
  .box-p {
    position: absolute;
    top: 0.1rem;
    background-color: #37c994;
    color: #f4f4f4;
    width: 1.5rem;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.3rem;
  }
  ul {
    display: flex;
    li {
      .box-p1 {
        font-size: 0.4rem;
        color: #313131;
        margin-left: 0.15rem;
      }
      .box-p2 {
        color: #9a9a9a;
        font-size: 0.32rem;
        margin-left: 0.15rem;
        span {
          color: #ff515c;
        }
      }
    }
  }
  ul li:nth-child(1) {
    flex: 3;
  }
  ul li:nth-child(2) {
    flex: 1.5;
    .box-p3 {
      background-color: #ff515c;
      height: 0.7rem;
      width: 2rem;
      margin-top: 0.15rem;
      margin-left: 0.4rem;
      color: #f4f4f4;
      text-align: center;
      line-height: 0.7rem;
      border-radius: 0.4rem 0 0 0.4rem;
      font-size: 0.26rem;
    }
  }
}
.a {
  width: 100%;
  background-color: #fff;
  .sec-bottom {
    width: 95%;
    margin: 0.2rem auto;
    padding: 0.2rem 0;
    font-size: 0.3rem;
    line-height: 0.52rem;
    text-indent: 2em;
  }
}
</style>
