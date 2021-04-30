<template>
    <div class='box1'>
    <hea/>
    <div class="tu1"></div>
    <div class="tu2">
    <div class="zi1">【装修前】</div>
    <div class="zi2">NO.1收房验房</div>
    <div class="zi3">NO.2装修预算</div>
    <div class="zi2">NO.3装修风水</div>
    <div class="zi3">NO.4装修设计</div>
    </div>
    <div class="tu3">
    <div class="zi4">【装修中】</div>
    <div class="zi3">NO.5材料选择</div>
    <div class="zi2">NO.6水电工程</div>
    <div class="zi3">NO.7泥木工程</div>
    <div class="zi2">NO.8油漆工程</div>   
    </div>
    <div class="tu4">
    <div class="zi5">【装修后】</div>
    <div class="zi2">NO.9装修验房</div>
    <div class="zi3">NO.10去污保洁</div>
    <div class="zi2">NO.11软装搭配</div>
    <div class="zi3">NO.12家居生活</div>  
    </div>
    <div  class="zi6">
        <p>房先森互联网家装有别于传统装修公司与其他装修中
        价平台，以自营模式整合设计师与项目经理，杜绝项目转
        包外包，利用互联网将工地进行在线全景直播，通过去中
        间环节，提供装修套餐+个性定制服务。</p>
    </div>
    <div class="bottom">
          <p>服务热线：400-9977-658</p >

      <ul class="ul">
        <li>触摸版</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
    </div>
    </div>
</template>

<script>
// import hea from "@components/head.vue"
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang='scss' scoped> 
.tu1{
    width: 100%;
    height: 150px;
    background-image: url(/pic/process/process1.jpg);
    background-size: 100% 100%;
}
.tu2{
    width: 100%;
    height: 450px;
    background-image: url(/pic/process/process2.jpg);
    background-size: 100% 100%;
}
.tu3{
    width: 100%;
    height: 450px;
    background-image: url(/pic/process/process3.png);
    background-size: 100% 100%;
}
.tu4{
    width: 100%;
    height: 450px;
    background-image: url(/pic/process/process4.jpg);
    background-size: 100% 100%;
}
.zi1{
    font-size: 25px;
    color: #ff4351;
    margin-left: 1rem;
}
.zi2{
    font-size: 20px;
    color: #000;
    margin-left: 1.7rem;
    padding-top: 60px;
}
.zi3{
    font-size: 20px;
    color: #000;
    margin-left: 3rem;
    padding-top: 50px;
}
.zi4{
    font-size: 25px;
    color: skyblue;
    margin-left: 3.5rem;
}
.zi5{
    font-size: 25px;
    color: rgb(207, 135, 235);
    margin-left: 1rem;
}
.zi6{
    font-size: 25px;
    
}
.bottom{
    font-size: 20px;
    text-align: center;
    margin-top: 0.5rem;
}
ul{
    width: 100%;
    display: flex;
    li{
        flex: 20%;
    }
}
li:hover{
    color:#98e0c2;
}

</style>
