<template> 
  <div class=""> 
      <he></he>    
    <div class="top">
            
      <ul>
                
        <li>
                    筛选           <i class="iconfont icon-down"></i>         
        </li>
                
        <li>
                    风格           <i class="iconfont icon-down"></i>         
        </li>
                
        <li>
                    排序           <i class="iconfont icon-down"></i>         
        </li>
                
        <li>          <i class="iconfont icon-search"></i>         </li>
              
      </ul>
          
    </div>

        
    <p>级别</p>

        
    <div class="center">
            
      <ul class="uu">
                
        <li>不限</li>
                
        <li>总监</li>
                
        <li>主任</li>
                
        <li>优秀</li>
              
      </ul>
          
    </div>
        
    <h3>      收费     </h3>
        
    <ul class="uu uus">
            
      <li>不限</li>
            
      <li>0-50元/m</li>
            
      <li>50-100元</li>
            
      <li>100-150元</li>
          
    </ul>
      
  </div>
</template>

<script>
import he from "@/components/head.vue"
export default {
  // 注册
  components: {
      he,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.top{
    width: 100%;
    overflow: hidden;
    height: 1.5rem;
}
</style>
