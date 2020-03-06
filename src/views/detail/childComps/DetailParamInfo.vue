<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
       <table v-for="(table,index) in paramInfo.sizes"   class="info-size">
         <tr v-for="(tr,indey) in table" :key="index">
           <td v-for="(td,indez) in tr">{{td}}</td>
         </tr>
       </table>
       <table  class="info-param">
          <tr v-for="(info, index) in paramInfo.infos">
            <td class="info-param-key">{{info.key}}</td>
            <td class="param-value">{{info.value}}</td>
          </tr>
       </table>
        <!-- <table v-for="(table, index) in paramInfo.sizes"  class="info-size" :key="index">
          <tr v-for="(tr, indey) in table" :key="indey">
            <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
          </tr>
        </table> -->
     
     <div class="image">
       <div>参数信息</div>
       <img :src="paramInfo.image">
     </div>
  </div>
  
</template>
<script>
export default {
  name:'DetailParamInfo',
  props:{
    paramInfo:{
      type:Object,
      dafault(){
        return {}
      }
    }
  }
}
</script>
<style  scoped>

.param-info{
  padding: 20px 10px;
  border-bottom: 5px solid #f5f5f5;
}

.param-info table {
    width: 100%;
    border-collapse: collapse;
  }

.param-info table tr{
  height: 42px;
   border-bottom: 1px solid #e5e5e5;
}

.info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 83px;
  }

  .info-param {
    border-top: 1px solid #e2e2e2;
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }


/* .param-info table td{
  border: 1px solid #ff0;
}   */

/* .param-info table tr{
  height: 30px;
  border-bottom: 1px solid #000;
} */


 

</style>