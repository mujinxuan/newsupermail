<template>
  <div class="goods-item" @click="intemclick">
    <img :src="goodsItem.show.img" @load='imageLoad'/>
    <div class="goods-info ">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div> 


  </div>
</template>
<script>
export default {
  name:'GoodsListItem',
  props: {
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    intemclick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
      

    }
  }
}
</script>
<style>
  .goods-item {
      padding-bottom:40px;
      position: relative;
      width: 46%
    }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;/*当对象内文本溢出时显示省略标记（...）。*/
    white-space: nowrap;/*文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>