<template>
    <div class=''>
         <div class="jiao">
      <div class="h"> <span> <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-hot-line"></use>
            </svg>服务热线:400-9977-658</span> </div>
            <ul>
              <li>触屏版</li>
              <li>电脑版</li>
              <li>关于我们</li>
              <li>联系我们</li>
            </ul>
            <span class="hui">2016 sirfang.com 刚需房装修就找房先森</span>
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

<style lang='scss' type="text/css">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #39c894;
  font-size: 0.3rem;
}
.jiao{
  width: 100%;
  .h{
    width: 100%;
    text-align: center;
  }
  ul{
    width: 100%;
    display: flex;
    border-top:1px solid rgb(235, 232, 232);
     border-bottom:1px solid rgb(235, 232, 232);
    li{
      flex:1;
      font-size: .3rem;
      border-right:1px solid rgb(235, 232, 232);
      text-align: center;
    }

  }
  .hui{
    margin-top: 5px;
    display: inline-block;
    width: 100%;
    color: #ccc;
    text-align: center;
  }
}
</style>