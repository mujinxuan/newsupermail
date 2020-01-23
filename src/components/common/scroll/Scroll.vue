<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: "Scroll",
    props: {
     probeType:{
       type:Number,
       default:0
     },
     pullUpLoad:{
       type:Boolean,
       default:false
     }
    },
   
    data () {
      return {
         scroll:null,
         message:'better-scrollg滚动'
      }
    },
    
    
    
    mounted () {
      // 1.创建BScroll对象
      this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      });

      //2.监听滚动的位置
      if(this.probeType===2||this.probeType===3){
        this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('scroll',position)
      });
      

      //3.监听scroll滚动到底部.上拉加载
      if(this. pullUpLoad){
        this.scroll.on('pullingUp',()=>{
        console.log('scroll上拉加载更多');
        this.$emit('pullingUp')
      })
      }
        
      }
      
      // console.log(this.scroll);
      // this.scroll.refresh()

      
    },
    methods: {
      scrollTo(x,y,time=300){
       this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        // 完成上拉加载更多
        this.scroll.finishPullUp()
      },
      refresh(){
        console.log('------refresh-------');
        
       this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

  
 
</style>
