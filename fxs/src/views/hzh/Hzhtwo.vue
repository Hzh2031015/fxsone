<template>
    <div class=''>
        <div class="header">
            <img src="/pic/关注.png" alt="" class="img">
            <div class="guan">关注房先森微信公众号<span style="color:orange">sirfang_com</span></div>
        </div>
        
        <div class="search">
           <article class="search-inner">
            <input type="text" name="keyword" placeholder="搜索">
            <button type="button" class="btn btn-search">搜索</button>
        </article>
        </div>
         <div class="div">111</div>


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

<style lang='scss' scoped>
.header{
    width: 100%;
    height: 2rem;
    background-color: #39c894;
    .img{
        width: 53%;
        height:.54rem;
        margin-left: 1.2rem;
        margin-top: .3rem;
    }
    .guan{
        width: 70%;
        height: .55rem;
        margin-left: 1.2rem;
        margin-top: .2rem;
        background-color: #2bb280;
        border-radius: .4rem;
        color: white;
        font-size: .32rem;
        padding-left: .2rem;
        line-height: .55rem;
    }
}
.search {
    width: 92%;
    margin: .3rem auto;
    padding: 0;
    border: 2px solid #2bb281;
    height: .9rem;
    line-height: 1rem;
    position: relative;
}
.search-inner {
    width: 100%;
    height: 1rem;
}
.search input {
    width: 85%;
    height: .9rem;
    display: inline-block;
    border: 0;
    font-size: 16px;
    text-indent: .1rem;
    vertical-align: text-bottom;
}
.search .btn {
    width: 15%;
    height: .9rem;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    background: #2bb281;
    color: #fff;
    border: 0;
    font-size: 14px;
    border-radius: 0;
}

</style>
