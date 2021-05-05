<template>
  <div class="box">
    <hea></hea>
    <div class="tu">
      <img src="/pic/10quoted.jpg" alt="" />
    </div>
    <div class="title-box">
      <div class="title">
        房先森10S报价
      </div>
      <img src="/pic/common/icon_title.png" alt="" />
    </div>
    <div class="ipt_box">
      <input type="text" placeholder="请填写建筑面积" class="ipt" />
      <select name="fengge" id="fg">
        <option value="1">现代</option>
      </select>
      <div class="select">
        <select name="shi" id="s">
          <option value="1">1室</option>
        </select>
        <select name="ting" id="t">
          <option value="1">1厅</option>
        </select>
        <select name="chu" id="c">
          <option value="1">1厨</option>
        </select>
        <select name="wei" id="w">
          <option value="1">1卫</option>
        </select>
        <select name="yangtai" id="yt">
          <option value="1">1阳台</option>
        </select>
      </div>
      <button id="submit">立即申请</button>
    </div>
    <div class="baojia">
      <div class="h3_box">
        <h3 class="h3">装修报价</h3>
      </div>
      <h3 class="h3_zongjia gray">
        全包装修总价：<span class="span">81,889,78</span>元
      </h3>
      <h3>您还可以选择</h3>
      <h3 class="h3_1 gray">
        房先森装修半包套餐价，<span class="span_1">399</span>元/平方
      </h3>
      <button>预约399套餐</button>
    </div>
    <div class="title-box">
      <div class="title">
        我们可以为您提供
      </div>
      <img src="/pic/common/icon_title.png" alt="" />
    </div>
    <ul class="ul">
      <li class="right_border">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-app"></use>
        </svg>
        <h3>产品系列</h3>
        <p>半包、全包套餐、全屋定制及个性化升级</p>
      </li>
      <li class="right_border">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-price"></use>
        </svg>
        <h3>0元装修</h3>
        <p>与建行合作装修贷款，实现0元开启装修</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-view"></use>
        </svg>
        <h3>工地直播</h3>
        <p>工地巡检照片、360度全景节点验收</p>
      </li>
      <li class="right_border top_border">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-preferential"></use>
        </svg>
        <h3>合作优惠</h3>
        <p>正品材料工厂直供，F2C让利用户</p>
      </li>
      <li class="right_border top_border">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-construction-site"></use>
        </svg>
        <h3>参观工地</h3>
        <p>随时预约参观工地，零距离感受施工工艺</p>
      </li>
      <li class="top_border">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-protection-fill"></use>
        </svg>
        <h3>售后保障</h3>
        <p>整装2年质保，隐蔽水电工程10年质保</p>
      </li>
    </ul>
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
    <img src="/pic/15_buttom.png" alt="">       
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
  height: 100%;
  .tu {
    width: 100%;
    height: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title-box {
    position: relative;
    .title {
      width: 100%;
      height: 108px;
      font-size: 36px;
      top: 36px;
      text-align: center;
      line-height: 108px;
      border-bottom: 1px solid #d7d7d7;
    }
    img {
      position: absolute;
      bottom: -12.5px;
      left: 42%;
    }
  }
  .ipt_box {
    width: 100%;
    .ipt {
      width: 6rem;
      height: 0.8rem;
      font-size: 0.4rem;
      margin-top: 36px;
      margin-left: 30px;
    }
    #fg {
      width: 6rem;
      height: 0.8rem;
      font-size: 0.4rem;
      margin-left: 30px;
      margin-top: 15px;
    }
    .select {
      #s {
        width: 2.8rem;
        height: 0.8rem;
        margin-left: 30px;
        margin-right: 20px;
        margin-top: 15px;
      }
      #t {
        width: 2.8rem;
        height: 0.8rem;
        margin-top: 15px;
      }
      #c {
        width: 1.8rem;
        height: 0.8rem;
        margin-left: 30px;
        margin-top: 15px;
      }
      #w {
        width: 1.8rem;
        height: 0.8rem;
        margin-left: 15px;
        margin-top: 15px;
      }
      #yt {
        width: 1.8rem;
        height: 0.8rem;
        margin-left: 15px;
        margin-top: 15px;
      }
    }
    #submit {
      width: 6rem;
      height: 0.8rem;
      font-size: 0.4rem;
      margin: 15px 0 36px 30px;
      text-align: center;
      color: white;
      line-height: 0.8rem;
      background-color: orange;
      border: none;
    }
  }
  .baojia {
    box-sizing: border-box;
    font-size: 0.3rem;
    border: 1px dashed #39c894;
    padding: 10px 10px;
    margin: 10px 10px;
    text-align: 0 auto;
    position: relative;
    .h3_box {
      background: white;
      padding: 0px 25px 0px 25px;
      position: absolute;
      top: -10px;
      left: 35%;
    }
    h3 {
      text-align: center;
    }
    .h3_1 {
      margin-top: 20px;
    }
    .gray {
      color: grey;
    }
    .h3_zongjia {
      margin: 20px 0px 35px 0px;
    }
    .span {
      color: #ff4351;
    }
    .span_1 {
      color: #eed251;
    }
    button {
      border: 1px solid #39c894;
      width: 6rem;
      height: 0.8rem;
      font-size: 0.4rem;
      margin: 20px 20px;
      color: #39c894;
      line-height: 0.8rem;
      background: none;
    }
  }
  .ul {
    overflow: hidden;
    margin-top: 15px;
    li {
      box-sizing: border-box;
      width: 33%;
      height: 3.2rem;
      float: left;
      padding: 20px 10px;
      svg {
        margin: 10px 35px;
      }
      h3 {
        text-align: center;
      }
      p {
        box-sizing: border-box;
        color: #999999;
        text-align: center;
      }
    }
    .right_border {
      border-right: 1px solid #eaeaea;
    }
    .top_border {
      border-top: 1px solid #eaeaea;
    }
  }
  .text_box {
    width: 100%;
    height: 1.5rem;
    border-top: 5px solid #eaeaea;
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
