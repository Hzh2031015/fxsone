<template>
  <div class>
    <heads/>
    <header>
      <ul>
        <li>
          <p>
            户型
            <i class="iconfont ico">&#xe61a;</i>
          </p>
        </li>
        <li>
          <p>
            区域
            <i class="iconfont ico">&#xe61a;</i>
          </p>
        </li>
        <li>
          <p>
            风格
            <i class="iconfont ico">&#xe61a;</i>
          </p>
        </li>
        <li>
          <i class="iconfont icon">&#xe629;</i>
        </li>
      </ul>
    </header>
    <div class="box">
      <div class="ack">
        <ul>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
          <li>
            <img src="/pic/logo.png" alt />
            <p class="p1">欧美文化的抽象美感</p>
            <p class="p2">
              <span>混搭</span>
              <span>三室</span>
              <span>1100元/m</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="fouter">
        <span>上一页</span>
        <span>2/30</span>
        <span>下一页</span>
      </div>
    </div>

    <div class="foot-tips">
      <p>房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐 + 个性化定制服务。</p>
    </div>
  </div>
</template>

<script>
import heads from "@/components/head.vue"
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components:{
    heads
  }
};
</script>

<style lang='scss' scoped>
.foot-tips {
  padding: 3%;
  margin-bottom: 0;
  font-size: 0.3rem;
  line-height: 1.6;
  text-indent: 1rem;
  color: #666;
}
header {
  ul {
    display: flex;
    width: 100%;
    height: 0.9rem;

    li {
      width: 25%;
      margin-top: 0.1rem;
      height: 0.7rem;
      line-height: 0.7rem;

      text-align: center;
      border-right: rgb(202, 202, 202) 0.02rem solid;
      p {
        font-size: 0.4rem;
      }
    }
    li:last-child {
      border: none;
    }
  }
}
.box {
  background-color: rgb(219, 219, 219);
  width: 100%;
  padding-top: 0.2rem;
  .ack {
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      li {
        width: 47%;
        float: left;
        padding: 0;
        background: #fff;
        border: 1px solid #eaeaea;
        height: 3.3rem;
        margin: 0 1% 0.3rem 1%;
        img {
          width: 100%;
          height: 2.3rem;
        }
        .p1 {
          font-size: 0.3rem;
          text-align: center;
        }
        .p2 {
          font-size: 0.2rem;
          text-align: center;
          span {
            padding-right: 0.2rem;
            color: #999;
          }
        }
      }
    }
  }
  .fouter {
    width: 96%;
    margin-left: 2%;
    height: 0.82rem;
    text-align: center;
    display: flex;
    padding-bottom: 0.3rem;
    span {
      display: inline-block;
      color: white;
      line-height: 0.82rem;
      font-size: 0.36rem;
      background-color: #39c894;
      &:nth-child(1) {
        flex: 30%;
      }
      &:nth-child(2) {
        flex: 25%;
        background-color: white;
        color: black;
      }
      &:nth-child(3) {
        flex: 30%;
      }
    }
  }
}

.ico {
  color: #999;
}
.icon {
  color: #39c894;
  font-size: 0.5rem;
}
</style>
