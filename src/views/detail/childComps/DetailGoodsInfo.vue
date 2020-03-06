<template>
 
  <div class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="item in detailInfo.detailImage[0].list" :key='index' :src='item' @load="imgLoad">
    </div>

  </div>
 
  
  

</template>
<script>
export default {
  name:'DetailGoodsInfo',
  props: {
    detailInfo:{
      type:Object,
      default(){
        return{}
      }  
    }
    
  },
  data () {
    return {
      counter:0,
      imagesLength:0
      
    }
  },
  methods: {
    imgLoad(){
      // 判断，所有图片加载完，进行一次回调就可以
      // this.counter+=1;
      // if(this.counter===this.imagesLength){
      //   this.$emit('imageLoad')
      // }
      if(++this.counter===this.imagesLength){
        this.$emit('imageLoad')
      }


    }

  },
  watch: {
    // watch:监听某个属性的变化
    detailInfo(){
      // 获取图片的个数
      this.imagesLength=this.detailInfo.detailImage[0].list.length
    }
  }
  
}
</script>
<style  scoped>
 .info-list img {
    width: 100%;
  }

</style>