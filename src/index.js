/*
 * @Author: yannis cyu
 * @Date: 2022-12-17 15:48:10
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 00:24:34
 * @Description: 请填写简介
 */

import helloWorld from "./hello-world";
import imgSrc from './assets/artist-detail.jpg'
import logoSvg from './assets/sun.svg'
import exampleTxt from './hello.txt'

import './style.css'

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