/*
 * @Author: yannis cyu
 * @Date: 2022-12-17 15:48:10
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-17 23:10:11
 * @Description: 请填写简介
 */

import helloWorld from "./hello-world";
import imgSrc from './assets/artist-detail.jpg'
helloWorld()

const img = document.createElement('img');
img.src = imgSrc;
document.body.appendChild(img)
