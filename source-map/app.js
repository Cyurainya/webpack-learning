/*
 * @Author: yannis cyu
 * @Date: 2022-12-18 18:53:11
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 19:14:01
 * @Description: 请填写简介
 */
class A{
  constructor(){
    this.str = 'hello webpack'
  }

  sayHello (){
    console.log(this.str)
  }
}

const a = new A();

a.sayHello()