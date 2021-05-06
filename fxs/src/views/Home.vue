<template>
  <div class="">
    <hea />
    <bann />
    <div class="nav">
      <ul class="o-nav">
        <li @click="fa">
          <i class="iconfont icon-case" ></i>
          <p>装修方案</p>
        </li>
        <li @click="tu">
          <i class="iconfont icon-case"></i>
          <p>效果图</p>
        </li>
        <li @click="sj">
          <i class="iconfont icon-case"></i>
          <p>设计师</p>
        </li>
        <li @click="gd">
          <i class="iconfont icon-case"></i>
          <p>装修工地</p>
        </li>
      </ul>
      <ul class="t-nav">
        <li @click="gl">
          <i class="iconfont icon-case"></i>
          <p>装修攻略</p>
        </li>
        <li @click="dk">
          <i class="iconfont icon-case"></i>
          <p>装修贷款</p>
        </li>
        <li @click="yy">
          <i class="iconfont icon-case"></i>
          <p>免费预约</p>
        </li>
        <li @click="bj">
          <i class="iconfont icon-case"></i>
          <p>十秒报价</p>
        </li>
      </ul>
    </div>
    <!--导航 -->
    <div class="meet">
      <div class="wu">
        <h2>全屋装修</h2>
        <span>包设计，包主材，包水电，包施工</span>
      </div>
      <bann2 />
      <div></div>
    </div>
    <!-- 全屋装修 -->
    <div class="xiu">
      <div class="wu">
        <h2>装修预约</h2>
        <span>免费上门量房，设计方案满意为止</span>
      </div>
      <div class="inp">
        <p><input type="text" placeholder="小区名称" /></p>
        <p><input type="text" placeholder="姓名" /></p>
        <p><input type="text" placeholder="建筑面积" /></p>
        <p><input type="button" class="sq" value="立即申请" /></p>
      </div>
    </div>
    <!-- 装修预约 -->
    <div>
      <div class="she">
        <div class="wu"><h2>设计师</h2></div>
        <bann3 />
        <div class="change">
          <ul>
            <li>
              换一换
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-change"></use>
              </svg>
            </li>
            <li>
              更多设计师
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-more"></use>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 设计师 -->
    <div class="xiao">
      <div class="wu"><h2>效果图</h2></div>
      <div class="big"><img src="/pic/home.jpg" alt="" /></div>
      <ul class="small">
        <li><img src="/pic/shop.jpg" alt="" /></li>
        <li><img src="/pic/shop.jpg" alt="" /></li>
        <li><img src="/pic/shop.jpg" alt="" /></li>
        <li><img src="/pic/shop.jpg" alt="" /></li>
      </ul>
      <div class="change">
        <ul>
          <li>
            换一换
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-change"></use>
            </svg>
          </li>
          <li>
            更多设计师
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-more"></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>

    <div class="bo">
      <div class="wu"><h2>工地直播</h2></div>
      <div class="big">
        <img src="/pic/h.png" alt="" />
        <p>重汽嘉泽7栋 <span>泥木工程</span></p>
      </div>
      <div class="change">
        <ul>
          <li>
            换一换
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-change"></use>
            </svg>
          </li>
          <li>
            更多设计师
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-more"></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>
    <div class="lue">
      <div class="wu"><h2>装修攻略</h2></div>
      <ul class="break">
        <li>
          <img src="/pic/home.jpg" alt="" />
          <ul class="u">
            <li><h3>  
            
              房子交付要验房</h3></li>
            <li><span>   <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-time"></use>
              </svg>2016-07-07</span> &emsp;  <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-view"></use>
              </svg></li>
          </ul>
        </li>
       <li>
          <img src="/pic/home.jpg" alt="" />
          <ul class="u">
            <li><h3>  
            
              房子交付要验房</h3></li>
            <li><span>   <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-time"></use>
              </svg>2016-07-07</span>   <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-view"></use>
              </svg></li>
          </ul>
        </li>
       <li>
          <img src="/pic/home.jpg" alt="" />
          <ul class="u">
            <li><h3>  
            
              房子交付要验房</h3></li>
            <li><span>   <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-time"></use>
              </svg>2016-07-07</span> &emsp;  <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-view"></use>
              </svg></li>
          </ul>
        </li>
      </ul>
         <div class="change">
          <ul>
            <li>
              换一换
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-change"></use>
              </svg>
            </li>
            <li>
              更多设计师
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-more"></use>
              </svg>
            </li>
          </ul>
        </div>
    </div>
    <div class="font">
      <p>房先森互联网家装有别于传统装修公司与其他装修中介平台，
        以自营模式整合设计师与项目经理，杜绝项目转包外包
        ，利用互联网将工地进行在线全景直播，通过去中间环节
        ，提供装修套餐+个性化定制服务。</p>
    </div>
   <foo2 />
          <foo />
  </div>
</template>

<script>
import hea from "@/components/head.vue";
import bann from "@/components/banner.vue";
import bann2 from "@/components/banner2.vue";
import bann3 from "@/components/banner3.vue";

import inp from "@/components/input.vue";
import foo from "@/components/footer.vue";
import foo2 from "@/components/footer2.vue";


export default {
  components: {
    hea,
    bann,
    bann2,
    inp,
    bann3,
    foo,
    foo2,

  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    fa(){
      this.$router.push("/trim")
    },
    tu(){
      this.$router.push("/hzhfour")

    },
    dk(){
       this.$router.push("/zyp16")
    },
    sj(){
       this.$router.push("/yt12")
    },
    gd(){
      this.$router.push("/hzhten")
    },
    gl(){
      this.$router.push("/hzhtwo")
    },
    yy(){
       this.$router.push("/hzhtwo")
    },
    bj(){
       this.$router.push("/zyp15")
    }
  },
};
</script>

<style lang='scss' type="text/css" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #39c894;
  font-size: 0.3rem;
}

.nav {
  width: 100%;
  height: 4rem;
  border-bottom: 10px solid #ccc;
  .o-nav {
    //   overflow: hidden;
    margin-top: 0.2rem;
    display: flex;
    width: 100%;
    li {
      width: 20%;
      text-align: center;
      //   border: 1px solid red;
      border-radius: 1rem;
      height: 1.45rem;

      margin-left: 0.3rem;
      &:nth-child(1) {
        background-color: #39c894;
      }
      &:nth-child(2) {
        background-color: #feb505;
      }
      &:nth-child(3) {
        background-color: #f6e46f;
      }
      &:nth-child(4) {
        background-color: #00b2b2;
      }
      i {
        line-height: 1.35rem;
        font-size: 0.5rem;
        color: white;
      }
      p {
        margin-top: 0.1rem;
        font-size: 0.1rem;
      }
    }
  }
  .t-nav {
    display: flex;
    width: 100%;
    li {
      margin-top: 0.5rem;
      width: 20%;
      text-align: center;
      //   border: 1px solid red;
      border-radius: 1rem;
      height: 1.45rem;

      margin-left: 0.3rem;
      &:nth-child(1) {
        background-color: #1b9af7;
      }
      &:nth-child(2) {
        background-color: #7b72e9;
      }
      &:nth-child(3) {
        background-color: #ff4351;
      }
      &:nth-child(4) {
        background-color: #fe8864;
      }
      i {
        line-height: 1.35rem;
        font-size: 0.5rem;
        color: white;
      }
      p {
        margin-top: 0.2rem;

        font-size: 0.1rem;
      }
    }
  }
}
.meet {
  width: 100%;
  border-bottom: 10px solid #ccc;
  .wu {
    width: 85%;
    display: flex;
    border-left: 3px solid rgb(92, 149, 6);
    h2 {
      font-size: 0.6rem;
      font-weight: normal;
    }
    span {
      margin-top: 15px;
      color: rgb(134, 133, 133);
    }
  }
}
.xiu {
  width: 100%;
  .wu {
    width: 85%;
    display: flex;
    border-left: 3px solid rgb(92, 149, 6);
    h2 {
      font-size: 0.6rem;
      font-weight: normal;
    }
    span {
      margin-top: 15px;
      color: rgb(134, 133, 133);
    }
  }
  .inp {
    width: 100%;
    height: 3.5rem;
    // height: 35px;
    // background-color: red;
    margin: 15px auto;
    border-bottom: 10px solid #ccc;
    p {
      margin-top: 5px;
      margin: 0 auto;
      text-align: center;
      input {
        width: 5rem;
        margin-top: 5px;
        height: 35px;
        border-radius: 5px;
        border: rgb(231, 229, 229) solid 1px;
      }
      .sq {
        width: 5rem;
        height: 35px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: orange;
        color: white;
      }
    }
  }
}
.she {
  width: 100%;
  .wu {
    width: 85%;
    display: flex;
    border-left: 3px solid rgb(92, 149, 6);
    h2 {
      font-size: 0.6rem;
      font-weight: normal;
    }
  }
  .change {
    width: 100%;
    height: 1rem;
    border-bottom: 10px solid #ccc;
    ul {
      width: 100%;
      display: flex;
      border: 1px solid rgb(238, 238, 238);
      li {
        border-left: 1px solid rgb(230, 228, 228);
        text-align: center;
        flex: 1;
      }
    }
  }
}
.xiao {
  width: 100%;
  .wu {
    width: 85%;
    display: flex;
    border-left: 3px solid rgb(92, 149, 6);
  }
  h2 {
    font-size: 0.6rem;
    font-weight: normal;
  }
  .big {
    width: 100%;
    img {
      width: 100%;
      height: 5.5rem;
    }
  }
  .small {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 48%;
    }
  }
  .change {
    width: 100%;
    height: 1rem;
    border-bottom: 10px solid #ccc;
    ul {
      width: 100%;
      display: flex;
      border: 1px solid rgb(238, 238, 238);
      li {
        border-left: 1px solid rgb(235, 233, 233);
        text-align: center;
        flex: 1;
      }
    }
  }
}
.bo {
  .wu {
    width: 85%;
    display: flex;
    border-left: 3px solid rgb(92, 149, 6);
  }
  h2 {
    font-size: 0.6rem;
    font-weight: normal;
  }
  .big {
    width: 100%;
    img {
      width: 100%;
      height: 5.5rem;
    }
  }
  .change {
    width: 100%;
    height: 1rem;
    border-bottom: 10px solid #ccc;
    ul {
      width: 100%;
      display: flex;
      border: 1px solid rgb(238, 238, 238);
      li {
        border-left: 1px solid rgb(230, 228, 228);
        text-align: center;
        flex: 1;
      }
    }
  }
}
.lue {
  width: 100%;
  .wu {
    width: 85%;
    display: flex;
    border-left: 3px solid rgb(92, 149, 6);
  }
  h2 {
    font-size: 0.6rem;
    font-weight: normal;
  }
  .break{
  width: 100%;
    li{
      margin-top: 5px;
        width: 100%;
    display: flex;
    .u{
    li{
        &:nth-child(2){
        color: #ccc;
      }
    }
    }
     h3{
       font-size: .4rem;
       font-weight: normal;
     }
      img{
        width: 2rem;
        height:1rem;
      }
    }
  }
  .change {
    margin-top: 5px;
    width: 100%;
    height: 1rem;
    border-bottom: 10px solid #ccc;
    ul {
      width: 100%;
      display: flex;
      border: 1px solid rgb(238, 238, 238);
      li {
        border-left: 1px solid rgb(230, 228, 228);
        text-align: center;
        flex: 1;
      }
    }
  }
}
.font{
  width: 100%;
  height: 2rem;
  border-bottom: 10px solid #ccc;
  p{
    font-size: .3rem;
  }
}

</style>
