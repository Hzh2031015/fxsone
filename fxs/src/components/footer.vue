<template>
    <div class=''>
  <div class="footer"> <img src="/pic/common/icon_close.png" class="sm" alt=""><img src="/pic/quoten_bottom.png" class="y" alt=""><button>免费获取报价</button></div>
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

<style lang='scss'>
.footer{
  width: 100%;
  position: relative;
    background-color:rgba(0, 0, 0, .6) ;

  // height: .7rem;
  .sm{
    position: absolute;
    width: 35px;
    height: 30px;
  }
  .y{
   
    margin-left: 35px;

    width: 58%;
    height: 55px;

    // background-color:rgba(0, 0, 0, .2) ;
  }
  button{
    position: absolute;
    width: 85px;
    height: 30px;
    top:15px;
    // left:15px;
    margin-left: 25px;
    background-color: orange;
    color: white;
    border-radius: 25px;
    outline: none;
    border:none;
  }
}
</style>