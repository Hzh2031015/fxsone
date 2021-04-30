<template>
    <div class=''>
         <div class="up"> <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-top">
             
          </use>
        </svg></div>
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

<style lang='scss' type="text/css" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color:#39c894;
  font-size: .7rem;
}
.up{
    width: 55px;
    height: 50px;
    
position: fixed;
right:0;
bottom:55px;
    text-align: center;
    background-color: rgb(245, 244, 244);
    border-radius: 25px;
    .icon{
        font-size: .65rem;
        margin-top: 6px;
        color:#ccc;
    }
}
</style>