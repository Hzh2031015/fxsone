<template>
  <div class="box">
    <hea></hea>
    <div class="top_imgbox">
      <img src="/pic/loans/loans.jpg" alt="" />
    </div>
    <div class="title_box">
      申请房先森装修贷
      <img src="/pic/common/icon_title.png" alt="" />
    </div>
    <div class="ipt_box">
      <input type="text" name="phone" placeholder="电话" />
      <input type="text" name="xiaoqu" placeholder="小区名" />
      <input type="text" name="pingfang" placeholder="建筑面积" />
      <button class="submit">立即申请</button>
    </div>
    <div class="daikuan">
      <span class="span">什么是装修贷款？</span>
      <p>
        装修贷款是无担保个人信用贷款，是房先森装修和建行共同为准备装修的工薪人士发放的个人信用贷款，用于房屋装修相关的支出。<span>无需担保，无需抵押，</span>以个人信誉度作为判断依据，<span
          >最高可贷50万。</span
        >
      </p>
    </div>
    <div class="title_box">
      申请流程
      <img src="/pic/common/icon_title.png" alt="" />
    </div>
    <ul class="ul">
      <li class="right_border">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-price"></use>
        </svg>
        <h3>01</h3>
        <p>在线预约</p>
      </li>
      <li class="right_border">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-price"></use>
        </svg>
        <h3>02</h3>
        <p>银行评估初审</p>
      </li>
      <li class="right_border">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-price"></use>
        </svg>
        <h3>03</h3>
        <p>提交材料放款</p>
      </li>
    </ul>
    <div class="title_box">
      申请条件
      <img src="/pic/common/icon_title.png" alt="" />
    </div>
    <ul class="ul_tiaojian">
      <li class="right bottom">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-social-security"></use>
        </svg>
        <p>社保缴费记录</p>
      </li>
      <li class="bottom">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-document"></use>
        </svg>
        <p>购房资料或房产证</p>
      </li>
      <li class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-building"></use>
        </svg>
        <p>房管局拉房产证明</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bank"></use>
        </svg>
        <p>没有银行违约的信用记录</p>
      </li>
    </ul>
    <div class="vs">
      <!-- <img src="/pic/loans/loans1.png" alt="" class="imgvs" />
      <div class="titlebg_box1">
        <p class="p1">手续费率低</p>
        <p class="p2">（以结款十万还36期为例）</p>
      </div>
      <div class="titlebg_box2">
        <p>联合建行贷款优势</p>
      </div>
      <div class="left">
        <div class="logo_box">
          <p>每月还款：<span>3088</span>元</p>
          <p>年手续费低至</p>
          <p>3.72%</p>
        </div>
      </div>
      <div class="middle"></div>
      <div class="right"></div> -->
      <img src="/pic/loans/zyp16.png" alt="" />
    </div>
    <div class="text_box">
      <p>
        房先森互联网家装有别于传统装修公司与其他装修中
                价平台，以自营模式整合设计师与项目经理，杜绝项目转
                包外包，利用互联网将工地进行在线全景直播，通过去中
                间环节，提供装修套餐+个性定制服务。
      </p>
    </div>
    <div class="bottom">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hot-line"></use>
      </svg>
      <p>服务热线：400-9977-658</p>
      <ol class="ol">
        <li>触摸版</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li class="li">联系我们</li>
      </ol>
      <div class="wwwbox">&copy;2016 sirfang.com 刚需房装修就找房先森</div>
      <div class="b_img">
        <img src="/pic/15_buttom.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import hea from "@/components/head.vue";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    hea,
  },
};
</script>

<style lang="scss" type="text/css" scoped>
.icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15rem;
  fill: #39c894;
  overflow: hidden;
}
.box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .top_imgbox {
    width: 100%;
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title_box {
    box-sizing: border-box;
    width: 100%;
    height: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
    font-size: 20px;
    border-bottom: 1px solid #999999;
    position: relative;
    img {
      position: absolute;
      bottom: -13px;
      left: 38%;
      background-color: #fff;
      padding: 0px 15px;
    }
  }
  .ipt_box {
    width: 100%;
    height: 4rem;
    box-sizing: border-box;
    input {
      margin-left: 1rem;
      width: 70%;
      height: 0.6rem;
      border: 1px solid #d7d7d7;
      margin-top: 15px;
    }
    .submit {
      width: 70%;
      height: 0.6rem;
      border: none;
      margin-top: 15px;
      margin-left: 1rem;
      background-color: orange;
      color: white;
      text-align: center;
      line-height: 0.6rem;
      font-size: 20px;
    }
  }
  .daikuan {
    box-sizing: border-box;
    width: 100%;
    height: 2rem;
    padding: 20px 10px;
    border: 1px dashed #39c894;
    position: relative;
    font-size: 12px;
    .span {
      position: absolute;
      top: -10px;
      background-color: #fff;
      left: 30%;
      padding: 0px 10px;
      font-size: 20px;
    }
    p {
      span {
        color: #39c894;
      }
    }
  }
  .ul {
    width: 100%;
    height: 3rem;
    margin-top: 20px;
    overflow: hidden;
    li {
      box-sizing: border-box;
      width: 25%;
      height: 3rem;
      float: left;
      text-align: center;
      margin: 0px 12px;
      border: 1px solid #39c894;
      padding: 10px 7px;
      h3 {
        font-size: 14px;
      }
      p {
        font-size: 14px;
        color: #666666;
      }
    }
  }
  .ul_tiaojian {
    overflow: hidden;
    height: 5rem;
    margin-left: 10px;
    li {
      width: 40%;
      height: 2rem;
      float: left;
      text-align: center;
      padding: 15px 15px;
      p {
        font-size: 14px;
        margin: 10px 5px;
      }
    }
    .right {
      border-right: 1px solid #999999;
    }
    .bottom {
      border-bottom: 1px solid #999999;
    }
  }
  .vs {
    // box-sizing: border-box;
    // position: relative;
    // width: 100%;
    // height: 25rem;
    // background-color: #F4F4F4;
    // margin-top: 20px;
    // overflow: hidden;
    // .imgvs {
    //   width: 90%;
    //   height: 2rem;
    //   position: absolute;
    //   top: 0.3rem;
    //   left: 0.4rem;
    //   z-index: 999;
    // }
    // .titlebg_box1 {
    //   width: 70%;
    //   height: 1.2rem;
    //   background-image: url(/pic/loans/loans2.png);
    //   background-repeat: no-repeat;
    //   background-size: 100% 100%;
    //   position: absolute;
    //   top: 2.4rem;
    //   left: 15%;
    //   color: white;
    //   text-align: center;
    //   z-index: 999;
    //   .p1 {
    //     font-size: 20px;
    //   }
    //   .p2 {
    //     font-size: 13px;
    //   }
    // }
    // .titlebg_box2 {
    //   width: 70%;
    //   height: 1.2rem;
    //   background-image: url(/pic/loans/loans2.png);
    //   background-repeat: no-repeat;
    //   background-size: 100% 100%;
    //   position: absolute;
    //   top: 8rem;
    //   left: 15%;
    //   color: white;
    //   text-align: center;
    //   line-height: 1.2rem;
    //   z-index: 999;
    //   p {
    //     font-size: 23px;
    //   }
    // }
    // .left {
    //   width: 49%;
    //   height: 100%;
    //   float: left;
    // }
    // .middle {
    //   width: 2%;
    //   height: 100%;
    //   background-color: #39c894;
    //   float: left;
    //   position: absolute;
    //   top: 1.5rem;
    //   left: 49%;
    // }
    // .right {
    //   width: 49%;
    //   height: 100%;
    //   float: left;
    // }
  }
  .text_box {
    width: 100%;
    height: 1.5rem;
    // border-top: 5px solid #eaeaea;
    border-bottom: 5px solid #eaeaea;
    margin: 10px 0px;
    text-indent: 2em;
    padding: 5px 0px;
  }
  .bottom {
    position: relative;
    svg {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 1.8rem;
    }
    p {
      text-align: center;
    }
    .ol {
      overflow: hidden;
      margin-top: 10px;
      li {
        width: 24%;
        height: 20px;
        float: left;
        text-align: center;
        border-right: 1px solid #eaeaea;
      }
      .li {
        border-right: none;
      }
      li:hover {
        color: #39c894;
      }
    }
    .wwwbox {
      text-align: center;
      width: 100%;
      height: 15px;
      color: #d7d7d7;
      padding-top: 5px;
      margin: 10px 0px;
      border-top: 1px solid #eaeaea;
    }
    .b_img {
      width: 100%;
      height: 30px;
      background-color: black;
      img {
        width: 100%;
      }
    }
  }
}
</style>
