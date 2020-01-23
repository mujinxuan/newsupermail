<template>
  <div class="nav-bar">
    <div class="left"><slot name='left'></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display:flex;
    line-height: 44px;
    height: 44px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    text-align: center

  }
  .left,.right{
    width: 60px;
    /* background-color: aqua */
  }
  .center{
    flex: 1;
    /* background-color:chocolate; */
    text-align: center;
    /* color:salmon; */
  }


  
 
</style>
