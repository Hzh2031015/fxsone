<template>
  <div class="trimlist">
      <heads>装修方案</heads>
    <nav>
      <ul class="bo">
        <li>
          <img src="/pic/cate2.png" alt width="100%" />
        </li>
        <li>
          <p class="nav-p">699全包精装套餐</p>
          <p class="nav-p1">
            价格：
            <span>￥699元/㎡</span>
          </p>
          <p class="nav-p1">
            已预约:
            <span style="color:black">221套</span>
          </p>
          <p class="nav-p1">
            正式发售:
            <span>全包套餐火爆预约中</span>
          </p>
        </li>
      </ul>
      <p class="nav-foot">精装全包套餐，包设计/包主材/包施工/包监理。采用知名辅材、一线主材，工厂直供F2C模式</p>
      <div class="color"></div>
      <ul class="uu">
        <li
          :class="num==index?'active':''"
          @click="tt(index)"
          v-for="(item,index) in list"
          :key="index"
        >{{item.title}}</li>
      </ul>
      <div class="uu-foot" v-show="flag==true">
        <img src="/pic/cate3.png" alt width="100%" />
      </div>
      <div v-show="flag==false">
        <ul class="uu-bottom">
          <li
            v-for="(item,index) in list1"
            :key="index"
            :class="sum==index?'cur':''"
            @click="tab(index)"
          >{{item.title}}</li>
        </ul>
        <table>
          <tr>
            <td class="tr1">项目</td>
            <td class="tr2">品牌</td>
            <td class="tr3">详情说明</td>
          </tr>
          <tr>
            <td>地柜</td>
            <td>定制橱柜</td>
            <td>3 延米以内</td>
          </tr>
          <tr>
            <td>吊柜</td>
            <td>定制橱柜</td>
            <td>1.2 延米内、阻尼抽屉2个（单色石英石台面）</td>
          </tr>
          <tr>
            <td>台面</td>
            <td>石英石</td>
            <td>3 延米以内</td>
          </tr>
          <tr>
            <td>套装门/移门及五金</td>
            <td>樱花</td>
            <td>
              含门以及门安装、三维可调试合页、门锁、门吸、厨房空间提供一樘门，平面
              和插框造型，仅限原始户型空间配门。若为移门，只限3平方米。
            </td>
          </tr>
          <tr>
            <td>门套</td>
            <td>双诺</td>
            <td>定制</td>
          </tr>
          <tr>
            <td>小地砖</td>
            <td>马可波罗瓷砖</td>
            <td>地砖满铺</td>
          </tr>
        </table>
      </div>
      <div class="color"></div>
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
      <div class="color"></div>
      
    </nav>
    <ul class="footer">
        <li @click="$router.push('/Zyp15')">
          <i class="icon iconfont icon-pencle"></i>
          马上免费预约
        </li>
        <li>
            <img src="/pic/foot.png" alt="" width="100%" height="100%">
        </li>
      </ul>
  </div>
</template>

<script>
import heads from "@/components/head.vue";

export default {
  data() {
    return {
      num: 0,
      sum: 0,
      flag: true,
      list: [
        {
          id: 0,
          title: "套餐详情"
        },
        {
          id: 1,
          title: "配置清单"
        },
        {
          id: 2,
          title: "施工工艺"
        },
        {
          id: 3,
          title: "服务流程"
        }
      ],
      list1: [
        {
          id: 0,
          title: "厨房"
        },
        {
          id: 1,
          title: "卫生间"
        },
        {
          id: 2,
          title: "阳台"
        },
        {
          id: 3,
          title: "卧室/客房/书房"
        },
        {
          id: 4,
          title: "客厅"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    tt(index) {
      this.num = index;
      this.flag = !this.flag;
    },
    tab(index) {
      this.sum = index;
    }
  },
  components:{
      heads,
  }
};
</script>

<style lang='scss' scoped>
*{
    margin: 0;
    padding: 0;
}
table {
  width: 100%;
  border-right: none;
  border-left: none;
  margin-bottom: 0.5rem;
  tr {
    height: 0.8rem;
    td {
      padding: 0.2rem 0.05rem;
      font-size: 0.23rem;
      border: 1px solid #eeeded;
      color: #a1a0a0;
    }

    .tr1 {
      width: 2rem;
      color: #37c994;
    }
    .tr2 {
      width: 1.5rem;
      color: #37c994;
    }
    .tr3 {
      color: #37c994;
    }
  }
}

nav {
  width: 100%;
  height: 3.5rem;

  .bo {
    display: flex;
    width: 97%;
    margin: 0 auto;
    li {
      height: 2.1rem;
    }
  }
  .bo li:nth-child(1) {
    flex: 1;
  }
  .bo li:nth-child(2) {
    flex: 1.5;
  }
  .nav-p {
    font-size: 0.4rem;
    margin-left: 0.2rem;
  }
  .nav-p1 {
    color: #cacaca;
    font-size: 0.25rem;
    margin-left: 0.2rem;
    span {
      color: #ff515c;
      font-size: 0.3rem;
    }
  }
}
.nav-foot {
  width: 97%;
  margin: 0.1rem auto;
  line-height: 0.45rem;
  font-size: 0.27rem;
}
.color {
  width: 100%;
  height: 0.2rem;
  background-color: #f4f4f4;
}
.uu {
  width: 100%;
  display: flex;

  li {
    width: 25%;
    border-bottom: 2px solid #f4f4f4;
    text-align: center;
    line-height: 1rem;
    height: 1rem;
    font-size: 0.27rem;
  }
  .active {
    border-bottom: #37c994 3px solid;
  }
}
.uu-foot {
  width: 100%;
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
.uu-bottom {
  display: flex;
  margin: 0.3rem auto;
  li {
    // flex: 1;
    width: 1.2rem;
    height: 0.5rem;
    border-radius: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    border: solid 1px #37c994;
    margin: 0 0.05rem;
    color: #37c994;
  }
  .cur {
    background-color: #37c994;
    color: white;
  }
}
.uu-bottom li:nth-child(4) {
  width: 2rem;
}
.footer{
    position: fixed;
    bottom: -5px;
    left: 0;
    width: 100%;
   
}
.footer li:nth-child(1){
          background-color: rgba(250, 100, 100, 0.952);
          color: rgb(235, 232, 232);
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          font-size: .3rem;

}
</style>
