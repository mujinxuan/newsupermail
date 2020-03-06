<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left">左侧</div>
      <div slot="center">购物街</div>
      <div slot="right">右侧</div>
    </nav-bar>
    <tab-control :tittles="['流行','精选','新款']" @tabClick='tabClick' ref='tabControl1' class="tab-control" v-show='isTabFixed'></tab-control>
    <scroll ref="scroll" :probe-type="3"  @scroll='contentScroll' :pull-up-load='true' @pullingUp='loadMore'>
      <home-swiper :banners='banners' @swiperImageLoad='swiperImageLoad'></home-swiper>
      <recommend-view :recommends='recommends'></recommend-view>
      <feature-view></feature-view>
      <tab-control :tittles="['流行','精选','新款']" @tabClick='tabClick' ref='tabControl2'></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <!-- <h3>{{goods.pop.list}}</h3> -->
    
    
    <h3>首页</h3>
    
  </div>
  
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utils.js'  


export default {
  name: 'Home',
  components: {
    
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop

  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false

    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  destroyed () {
    console.log('home destory');
  },
  activated () {
    console.log('activated');
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh()
  },
  deactivated () {
    // console.log('deactivated');
    this.saveY=this.$refs.scroll.getScrollY();
    console.log(this.saveY);
    
  },
  created () {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');


    // console.log('home created');
  },
  mounted () {

    // 监听item中图片加载完成
    const refresh=debounce(this.$refs.scroll.refresh,2000)

    this.$bus.$on('itemImageLoad',()=>{
        refresh()
    })

    
    
    
  },
  methods: {
    // ----------事件监听的方法-------------------
    tabClick(index){
      // console.log(index);
      switch (index){
        case 0:
           this.currentType='pop';
           break
        case 1:
          this.currentType='new';
          break
        case 2:
          this.currentType='sell'; 
          break 
      }
      // console.log(this.currentType)
      this.$refs.tabControl1=index;
      this.$refs.tabControl2=index;
    },
    backClick(){
      // console.log('backClick');
    //  console.log(this.$refs.scroll.message);
     this.$refs.scroll.scrollTo(0,0)
    },

    contentScroll(position){
      // console.log(-position.y);
      // 1.判断BackTop是否显示
      this.isShowBackTop=(-position.y)>1000
      // 2.决定TabControl是否吸顶（position：fixed)
      this.isTabFixed=(-position.y)>this.tabOffsetTop


    },

    loadMore(){
      // console.log('goods加载更多')
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp()
    },
    swiperImageLoad(){
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
      console.log(this.tabOffsetTop);
      
    },
    
 
    //-------------------- 网络请求相关的方法----------------
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      console.log(res)
      this.banners=res.data.banner.list;
      console.log(this.banners)
      this.recommends=res.data.recommend.list
      console.log(this.recommends)
    })
    },

    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
      // console.log(res.data);
      // console.log(res.data.list);
      this.goods[type].list.push(...res.data.list);
      // for(let n of res.data.list){
      //   this.goods[type].list.push(n)
      // }
      this.goods[type].page+=1
      // this.goods.pop.list=res.data.list;
    })
    }
    
  }
}
</script>

<style scoped>
/* body{padding-top: 44px} */
.home-nav{background-color:var(--color-tint); 
          color: #ffffff;
          /* position: fixed;在使用浏览器滚动时，为了让导航不跟随一起滚动*/
          position: relative;
          z-index: 10;
          width: 100%;
         }
.tab-control{
  position:relative;
  z-index: 9;
} 

/* #home{
  height:100vh;
}
.wrapper{
  height:calc(100% - 49px);
  overflow: hidden;
} */
#home{
  height:100vh;
  position: relative;
}
.wrapper{
  position: fixed;
  top: 0px;
  bottom:49px;
  left: 0px;
  right: 0px;
  background-color: #ffffff
}

</style>

