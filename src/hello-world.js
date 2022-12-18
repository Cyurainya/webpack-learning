/*
 * @Author: yannis cyu
 * @Date: 2022-12-17 15:47:21
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 14:21:44
 * @Description: 请填写简介
 */
function getString(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('hello world')
    },2000)
  })
}

async function helloWorld() {
 const string =  await getString();
 console.log('async',string)
}


export default helloWorld