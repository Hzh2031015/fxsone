<template>
    <div class=''>
 <van-nav-bar
  left-text="返回"
  title="欧美文化的抽象美感"
  right-text="导航"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<div class="body">
    <img src="/pic/yt01.jpg" alt="">
   
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul> <hr/>
    <p>设计诠释：less is more 不需要过多的装饰，简单的墙面背景与简洁的家具即可组成一个温暖的家</p>
</div>
    <div class="box">
      <p>房先森互联网家装有别于传统装修公司与其他装修中
        价平台，以自营模式整合设计师与项目经理，杜绝项目转
        包外包，利用互联网将工地进行在线全景直播，通过去中
        间环节，提供装修套餐+个性定制服务。</p>   
    </div>
     <div class="bottom">
          <p>服务热线：400-9977-658</p >

      <ol class="ol">
        <li>触摸版</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ol>
    </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('导航');
    },
    },
};
</script>

<style lang='scss' scoped>
.body{
    width: 100%;
    height: 10rem;
    background-color: black;
    p{
    color: white;
    font-size: 20px;
    margin-top: 30px;
    margin-left: 0.3rem;
}
}
img{
    width: 100%;
    height: auto;
    margin-top: 0.8rem;
}
ul{
    display: flex;

li{
    
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #38ca94;
    margin-left: 0.5rem;
}}
.box{
    p{
        font-size: 15px;
    }
}
.bottom{
    font-size: 20px;
    text-align: center;
    margin-top: 0.5rem;
}
ol{
    width: 100%;
    display: flex;
    li{
        flex: 20%;
    }
    
}
li:hover{
    color:#98e0c2;
}
hr{
    margin-top: -0.3rem;
    background-color: #38ca94;
}
</style>
