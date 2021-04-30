<template>
  <div class="">
      <input type="text" @input="input" :value="value"  > 
  </div>
</template>

<script>
export default {
    props:["value"],
  data() {
    return {};
  },
 
  mounted() {},
  methods: {
      input(e){
          this.$emit('input',e.target.value)
      },
     
  },
};
</script>

<style lang="scss"></style>