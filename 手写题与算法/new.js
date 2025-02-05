// 8 new 操作符
// 题目描述:手写 new 操作符实现
// 实现代码如下:
function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.call(obj, ...args);
  if (res && (typeof res === "object" || typeof res === "function")) {
    return res;
  }
  return obj;
}
// 用法如下：
// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }
// // Person.prototype.say = function() {
// //   console.log(this.age);
// // };
// // let p1 = myNew(Person, "lihua", 18);
// // console.log(p1.name);
// // console.log(p1);
// // p1.say();






function MyNew(foo, ...args) {
  let obj = Object.create(foo.prototype)
  let result = foo.apply(obj, args)
  
  return Object.prototype.toString.call(result) === '[object Object]' ? result : obj
}