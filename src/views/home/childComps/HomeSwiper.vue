<template>
  <div id="homeswiper">
    <swiper>
      <swiper-item v-for="(item,index) in banners" > 
        <a :href="item.link"><img :src='item.image'/></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeWwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners:{
     type: Array,
     required: true
    }
  }
  
  
}
</script>

<style>
#homeswiper{
  padding-top: 44px;
}

</style>
