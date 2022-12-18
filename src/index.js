/*
 * @Author: yannis cyu
 * @Date: 2022-12-17 15:48:10
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 16:52:01
 * @Description: 请填写简介
 */

import helloWorld from "./hello-world";
import imgSrc from './assets/artist-detail.jpg'
import logoSvg from './assets/sun.svg'
import exampleTxt from './hello.txt'
import _ from 'lodash'
import './style.css'

import './async-module'

helloWorld()

const img = document.createElement('img');
img.src = imgSrc;
document.body.appendChild(img)

const imgSvg = document.createElement('img');
imgSvg.src = logoSvg;
document.body.appendChild(imgSvg)

const block = document.createElement('div');
block.textContent = exampleTxt
document.body.appendChild(block)

console.log(_.join(['Another','module','loaded'],''))


const button = document.createElement('button');

button.textContent = 'click add'

button.addEventListener(/* webpackChunkName:'math',webpackFetch:true */'click',()=>{
  import('./math.js').then(({add})=>{
    console.log(add(4,5))
  })
})

document.body.appendChild(button)
