/*
 * @Author: yannis cyu
 * @Date: 2022-12-19 21:57:53
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-19 22:30:08
 * @Description: 请填写简介
 */

console.log('hello pwa ',Boolean('serviceWorker' in navigator))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('regis success', registration)
      })
      .catch((err) => {
        console.log('regis fall', err)
      })
  })
}
