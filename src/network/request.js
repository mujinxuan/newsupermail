import axios  from 'axios'

// 第三种封装01
// export function request(config){
//   return new Promise((resolve,reject)=>{

//     // 1.创建axios实例
//     const instance=axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:1000
//     })
//     instance(config)
//     .then(res=>{
//       resolve(res)
//     })
//     .catch(err=>{
//       reject(err)
//     })


//   })
// }


// 第三种封装02
export function request(config){

  // 1.创建axios实例
  const instance=axios.create({
    baseURL:'http://123.207.32.32:8000/api/hy',
    timeout:6000
  })
  
  //axios拦截器
  //请求拦截
  instance.interceptors.request.use(config=>{
    console.log(config);
    return config
  },err=>{
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res=>{
    console.log(res);
    return res.data
  },err=>{
    console.log(err)
  }) 

  return  instance(config)//返回一个promise对象

}


// 第一种封装
// export function request(config,success,failure){
//   // 1.创建axios实例
//   const instance1=axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:3000
//   });

//   // config传入到实例中才进行网络请求
//   instance1(config)
//   .then(res=>{success(res)})
//   .catch(err=>{failure(err)})

// }



//第二种封装
// export function  request(config){
//   //  1.创建axios实例
//   const instance1=axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:3000
//   });

//   // config传入到实例中才进行网络请求
//   instance1(config.baseconfig)
//   .then(res=>{config.success(res)})
//   .catch(err=>{config.failure(err)})

// }