import {request} from  './request'

export function getDetail(iid){
  return  request({
    url:'./detail',
    params:{
      iid
    }
  })

}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title,
    this.desc=itemInfo.desc,
    this.newPrice=itemInfo.price,
    this.oldPrice=itemInfo.oldPrice,
    this.discount=itemInfo.discountDesc,
    this.columns=columns,
    this.services=services,
    this.realPrice=itemInfo.lowNowPrice
  }
}

export class Shop{
  constructor(ShopInfo){
    this.logo=ShopInfo.shopLogo,
    this.name=ShopInfo.name,
    this.fans=ShopInfo.cFans,
    this.sells=ShopInfo.cSells,
    this.score=ShopInfo.score,
    this.goodsCount=ShopInfo.cGoods
  }
}


export class GoodsParam{
  constructor(info,rule){
    // 注：image可能没有值，有的有，有的没有
    this.image=info.images?info.images[0]:"",
    this.infos=info.set,
    this.sizes=rule.tables

  }

}