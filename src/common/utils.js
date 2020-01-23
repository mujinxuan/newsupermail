//对于refresh非常频繁的问题，进行防抖操作
// 防抖函数debounce

export function debounce(func,delay){
  let timer=null;
  return  function(...args){
    if(timer) clearTimeout(timer)//clearTimeout是一个函数，功能是清除定时器。开启一个新的定时器必须清除之前的定时器。
    timer=setTimeout(()=>{
      func.apply(this,args)
    },delay)

  }
}


    