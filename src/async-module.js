/*
 * @Author: yannis cyu
 * @Date: 2022-12-18 16:37:50
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 16:38:56
 * @Description: 请填写简介
 */

function getComponent(){
  return import('lodash').then(({default:_})=>{
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack'],'')

    return element
  })
}


getComponent().then((ele)=>{
  document.body.appendChild(ele)
})