<template>
  <div class="recommendview">
    <div v-for='(item,index) in recommends' class="recommend-item">
      <a :href="item.link">
        <img :src='item.image' />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeWwiper',
  props: {
    recommends:{
     type: Array,
     required: true
    }
  }
  
  
}
</script>

<style>
.recommendview{
  display: flex;
  text-align: center;
  font-size: 12px;
  border-bottom:10px solid #f5f5f5
}
.recommend-item{
  flex:1;
  margin: 12px 0px 18px;
}
.recommend-item img{
  width:65px; 
  height:65px;
  margin-bottom:8px;
  }

</style>
