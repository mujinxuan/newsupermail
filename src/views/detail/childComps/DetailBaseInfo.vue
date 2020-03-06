<template>
  <div  v-if="Object.keys(goods).length!==0"  class="base-info">   
    <div class="info-title" >{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <div class="info-service-item" v-for='index in goods.services.length-1' :key="index">
        <img :src="goods.services[index-1].icon" >
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>  
    <!-- <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div> -->
   

  </div>
  
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style  scoped>
  .base-info{ 
    margin-top: 15px; 
    padding: 0 8px;
    }
  .info-title{ 
    color: #333;
    font-weight:bold; 
    line-height:1.5;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .info-price{
    margin-top: 10px;
  }
  .info-price  .n-price{
    font-size: 24px;
    color: var(--color-high-text);
    margin-right: 10px;
  }
  .info-price  .o-price{
     font-size: 16px;
    text-decoration-line: line-through;
  }
  .info-price .discount{
    color: #fff;
    background-color: var(--color-high-text);
    padding: 5px;
    border-radius: 3px;
    font-size: 12px;
    margin-left: 5px;
    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }
  .info-other{
    margin-top: 20px;
    display: flex;
    font-size: 14px;
    color: #999;
    line-height: 30px;
    border-bottom: 3px solid #f5f5f5;
    justify-content: space-between;
  }
 .info-service{
   display: flex;
   justify-content: space-between;
   margin-top: 20px;
   padding-bottom: 20px;
   border-bottom: 3px solid #f5f5f5;
 }

 .info-service  img{
   width: 16px;
   height: 16px;
   margin-right: 5px;
   position: relative;
   top:3px
 }

 .info-service span{
   height: 16px;
   /* background-color: aqua; */
   vertical-align:middle;
 }

</style>