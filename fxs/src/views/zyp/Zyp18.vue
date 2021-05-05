<template>
  <div class="box">
    <div class="head">
      <img src="/pic/loans/zyp18head.png" alt="" />
    </div>
    <div class="pinglun">
      <ul>
        <li>
          <div class="li">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-user"></use>
              </svg> </span
            ><span class="span">x*h</span><span class="span1">2016-05-19</span>
          </div>
          <p>这篇文章很实用，正在装修，刚好可以用来参考一下。</p>
        </li>
        <li>
          <div class="li">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-user"></use>
              </svg> </span
            ><span class="span">z*0</span><span class="span1">2016-04-11</span>
          </div>
          <p>喜欢这篇文章很实用。</p>
        </li>
        <li>
          <div class="li">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-user"></use>
              </svg> </span
            ><span class="span">h*5</span><span class="span1">2016-04-06</span>
          </div>
          <p>这个设计师为人和随和，很喜欢他。画图也很仔细，暂时就这些。</p>
        </li>
        <li>
          <div class="li">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-user"></use>
              </svg> </span
            ><span class="span">x*n</span><span class="span1">2016-02-19</span>
          </div>
          <p>设计风格简约大气，人很热情，沟通很耐心，极力推荐。</p>
        </li>
        <li>
          <div class="li">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-user"></use>
              </svg> </span
            ><span class="span">z*o</span><span class="span1">2016-01-10</span>
          </div>
          <p>空间利用合理，设计风格很喜欢。</p>
        </li>
        <li>
          <div class="li">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-user"></use>
              </svg> </span
            ><span class="span">h*5</span><span class="span1">2016-12-02</span>
          </div>
          <p>这个设计师为人和随和，很喜欢他。画图也很仔细，暂时就这些</p>
        </li>
      </ul>
      <div class="btn">
        <div class="btn_div">上一页</div>
        <div>2/30</div>
        <div class="btn_div">下一页</div>
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

<style lang="scss" type="text/css" scoped>
.icon {
  width: 0.8rem;
  height: 0.8rem;
  vertical-align: -0.15rem;
  fill: white;
  background: #dcdcdc;
  border-radius: 50%;
  overflow: hidden;
}
.box {
  box-sizing: border-box;
}
.head {
  width: 100%;
  height: 1rem;
  margin-bottom: 10px;
  border-bottom: #dcdcdc solid 1px;

  img {
    width: 100%;
    height: 100%;
  }
}
.pinglun {
  width: 100%;
  ul {
    box-sizing: border-box;
    width: 95%;
    height: 16rem;
    margin: 5px 10px;
    li {
      font-size: 0.4rem;
      margin: 0px 10px;
      padding: 10px 0px;
      border-bottom: #dcdcdc solid 1px;
      .li {
        margin: 0.2rem 0rem;
        .span {
          color: #39c894;
          margin: 0px 44% 0px 10px;
        }
        .span1 {
          color: #999;
        }
      }
    }
  }
  .btn {
    width: 90%;
    height: 0.8rem;
    margin: 5px 5%;
    border: 1px solid #dcdcdc;
    div {
      display: inline-block;
      width: 33.33%;
      height: 100%;
      text-align: center;
      line-height: 0.8rem;
      font-size: 20px;
    }
    .btn_div {
      color: white;
      background-color: #39c894;
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
