<template>
  <div id='detail'>
    <detail-nav-bar  class="detail-nav"></detail-nav-bar>
    <scroll  ref="scroll">
      <detail-swiper :top-images='topImages'></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </scroll>
  </div>
  
</template>
<script>
// import NavBar from 'components/common/navbar/NavBar'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo' 
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'

import Scroll from 'components/common/scroll/Scroll'

import {getDetail, Goods, Shop, GoodsParam} from 'network/detail'

export default {
  name:"Detail",
  data(){
    return{
      iid:null,
      // res:null
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll
  },
  created () {
    console.log(this.$route.params);
    // 保存传入的iid
    this.iid=this.$route.params.iid
    // 根据iid请求详情数据
    getDetail(this.iid).then(res=>{
      console.log(res);
      // this.res=res;
      const data=res.result
      //1.获取顶部的图片轮播数据
      this.topImages=data.itemInfo.topImages

      // 2.获取商品基本信息
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      // 3.获取商家信息
      this.shop=new Shop(data.shopInfo)

      // 4.保存商品的详情数据(数据简单没有必要写类)
      this.detailInfo=data.detailInfo

      // 5.获取参数信息
      this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)

      
    })

  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
  
}
</script>

<style  scoped>
  
  #detail{
    position: relative;
    z-index:9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav{
     position: relative;
     z-index:9;
     background-color: #fff;
  }
 /* .content{
   height: calc(100%-44px);
 } */

 #home{
  height:100vh;
  position: relative;
}
.wrapper{
  position: fixed;
  top: 44px;
  bottom:49px;
  left: 0px;
  right: 0px;
  background-color:#fff
}

 
</style>