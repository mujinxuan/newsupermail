<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score"  :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter? '高':'低'}}</span></td>

          </tr>
        </table>
      </div>  
        

    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailShopInfo',
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  }
  
}
</script>

<style  scoped>
  .shop-info{
    margin-top:25px;
    padding: 0 8px;
    
    
  }
  .shop-top{
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }

  .shop-info img{
    width: 45px; 
    height: 45px; 
    border-radius: 50%;
    background-color: brown;
  }
  .shop-info  .title{
    font-size: 18px;
    vertical-align: center;
    margin-left: 10px;
  }

  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .sells-count, .goods-count {
    font-size: 18px;
  }

  .sell-text,.goods-text{
    font-size: 14px;
  }
  .shop-middle-right{
    padding-left: 30px;
    border-left: 1px solid #ccc;
  }
  .shop-middle-right table td {
    margin:20px 0px;
  }
  
  
  
  .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }
  

  
  .shop-middle-right .better {
    font-size: 12px;
    color: #fff;
    background-color:#5ea732 ;
    
  }

  .shop-middle-right .better-more {
    color: #fff;
    background-color:#f13e3a ;
  }

  .shop-bottom {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }

</style>