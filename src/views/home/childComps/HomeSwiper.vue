<template>
  <div id="homeswiper">
    <swiper>
      <swiper-item v-for="(item,index) in banners" > 
        <a :href="item.link"><img :src='item.image' @load='imageLoad'/></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeWwiper',
  data () {
    return {
      isLoad:false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners:{
     type: Array,
     required: true
    }
  },
  methods: {
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad');
        this.isLoad=true
      }
    }
  }
  
}
</script>

<style>
#homeswiper{
  padding-top: 44px;
}

</style>
