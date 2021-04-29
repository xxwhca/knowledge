<!--
 * @Author: jxzuo
 * @Date: 2021-04-23 23:26:56
 * @LastEditTime: 2021-04-24 23:41:22
 * @LastEditors: jxzuo
-->


### JS

#### 1. 基本数据类型
Number、String、Boolean、undefined、object、Null、symble
#### 2. null和undifined区别
[知识点](https://www.cnblogs.com/haishen/p/10718715.html)
#### 3. 事件委托
[知识点](https://blog.csdn.net/qq_38128179/article/details/86293394)

#### 4.深浅拷贝
[知识点](https://blog.csdn.net/weixin_41082623/article/details/88084831)

#### 5. 宏任务微任务  事件循环
[知识点](https://www.cnblogs.com/wangziye/p/9566454.html)
[知识点](https://zhuanlan.zhihu.com/p/26229293)
[知识点](https://zhuanlan.zhihu.com/p/55511602)

#### 6. 捕获冒泡
[知识点](https://www.jianshu.com/p/3f0ee1f6ec30)


#### 7. 原型 / 构造函数 / 实例 / 原型链  

[知识点](https://www.jianshu.com/p/dee9f8b14771)  

[知识点](https://www.jianshu.com/p/652991a67186)  

[知识点](https://www.jianshu.com/p/a4e1e7b6f4f8)  

#### 8.JavaScript 的执行阶段
JavaScript 的执行分为：解释和执行两个阶段,这两个阶段所做的事并不一样：
* 解释阶段：
   * 词法分析
   * 语法分析
   * 作用域规则确定
* 执行阶段：
   * 创建执行上下文
   * 执行函数代码
   * 垃圾回收

#### 9. 执行上下文  
执行上下文可以简单理解为一个对象:  
它包含三个部分:  
* 变量对象(VO)
* 作用域链(词法作用域)
* this指向

它的类型:
* 全局执行上下文
* 函数执行上下文
* eval执行上下文

代码执行过程:  
* 创建 全局上下文 (global EC)
* 全局执行上下文 (caller) 逐行 自上而下 执行。遇到函数时，函数执行上下文 (callee) 被push到执行栈顶层
* 函数执行上下文被激活，成为 active EC, 开始执行函数中的代码，caller 被挂起
* 函数执行完后，callee 被pop移除出执行栈，控制权交还全局上下文 (caller)，继续执行

详细了解了这个过程之后，我们就可以对执行上下文总结一些结论了。
* 单线程
* 同步执行，只有栈顶的上下文处于执行中，其他上下文需要等待
* 全局上下文只有唯一的一个，它在浏览器关闭时出栈
* 函数的执行上下文的个数没有限制
* 每次某个函数被调用，就会有个新的执行上下文为其创建，即使是调用的自身函数，也是如此。


执行上下文的生命周期
* 创建阶段
   在这个阶段中，执行上下文会分别创建变量对象，确定this指向，以及其他需要的状态。
* 代码执行阶段
   创建完成之后，就会开始执行代码，会完成变量赋值，以及执行其他代码。
* 销毁阶段
   可执行代码执行完毕之后，执行上下文出栈，对应的内存空间失去引用，等待被回收
[知识点](https://www.jianshu.com/p/a6d37c77e8db)  

#### 10. 变量对象
一、建立arguments对象  

二、检查当前上下文的函数声明，也就是使用function关键字声明的函数。在变量对象中以函数名建立一个属性，属性值为指向该函数所在内存地址的引用   

三、检查当前上下文中的变量声明，每找到一个变量声明，就在变量对象中以变量名建立一个属性，属性值为undefined，const/let 声明的变量没有赋值，不能提前使用

[知识点](https://www.jianshu.com/p/330b1505e41d)  

#### 11.js垃圾回收机制
* 问什么是垃圾：  
   一般来说没有被引用的对象就是垃圾，就是要被清除， 有个例外如果几个对象引用形成一个环，互相引用，但根访问不到它们，这几个对象也是垃圾，也要被清除。
* 如何检垃圾  
   一种算法是标记 标记-清除 算法
[知识点](https://segmentfault.com/a/1190000018605776)


#### 12. 作用域/作用域链  
> 作用域是在运行时代码中的某些特定部分中变量，函数和对象的可访问性  
* 作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突
* 自由变量：当前作用域没有定义的变量，为自由变量 

[知识点](https://www.cnblogs.com/fundebug/p/10535230.html)  

#### 13. 闭包 
[知识点](https://github.com/xxwhca/knowledge/blob/main/01-%E9%97%AD%E5%8C%85.md)  
[知识点](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)  

#### 14. 闭包的使用场景
[知识点](https://www.cnblogs.com/gg-qq/p/11399152.html)

#### 15. 对象的拷贝
[知识点](https://segmentfault.com/a/1190000019977308)  

#### 16. new运算符的执行过程
[知识点](https://blog.csdn.net/qq_43553067/article/details/88077564)

#### 17.call apply bind
[知识点](https://www.jianshu.com/p/aa2eeecd8b4f)
[知识点](https://zhuanlan.zhihu.com/p/129345120)

#### 18. instanceof 原理  
能在实例的 原型对象链 中找到该构造函数的prototype属性所指向的 原型对象，就返回true。即:  
```
// __proto__: 代表原型对象链
instance.[__proto__...] === instance.constructor.prototype

// return true
```
[知识点](https://www.cnblogs.com/ysk123/p/10006786.html)

#### 19. js数组的一些方法
[知识点](https://www.cnblogs.com/zyfeng/p/10541133.html)
[知识点](https://blog.csdn.net/weixin_38131507/article/details/102551504)

#### 20. js字符串的一些方法
[知识点](https://www.cnblogs.com/Yimi/p/10362214.html)
#### 9. 代码的复用
当你发现任何代码开始写第二遍时，就要开始考虑如何复用。一般有以下的方式:

* 函数封装
* 继承
* 复制`extend`
* 混入`mixin`
* 借用`apply/call`  

#### 10. 继承(不会不会不会)
在 JS 中，继承通常指的便是 原型链继承，也就是通过指定原型，并可以通过原型链继承原型上的属性或者方法。  
[知识点](https://www.cnblogs.com/humin/p/4556820.html)

#### 11. 类型转换
* `-、*、/、% `：一律转换成数值后计算
* +：
   * 数字 + 字符串 = 字符串， 运算顺序是从左到右
   * 数字 + 对象， 优先调用对象的valueOf -> toString
   * 数字 + boolean/null -> 数字
   * 数字 + undefined -> NaN
* `[1].toString() === '1'`
* `{}.toString() === '[object object]'`
* `NaN !== NaN` 、`+undefined 为 NaN`

#### 12. 类型判断
* instanceOf
* typeOf  
[知识点](https://www.cnblogs.com/yadiblogs/p/10750775.html)

#### 13. 模块化
模块化开发在现代开发中已是必不可少的一部分，它大大提高了项目的可维护、可拓展和可协作性。通常，我们 在浏览器中使用 ES6 的模块化支持，在 Node 中使用 commonjs 的模块化支持。
* 分类:
   * es6: import / export
   * commonjs: require / module.exports / exports
   * amd: require / defined
* require与import的区别
   * require支持 动态导入，import不支持，正在提案 (babel 下可支持)
   * require是 同步 导入，import属于 异步 导入
   * require是 值拷贝，导出值变化不会影响导入值；import指向 内存地址，导入值会随导出值而变化  
   * import/export 只能在模块顶层使用，不能在函数、判断语句等代码块之中引用；require/exports 可以。
   [知识点](https://zhuanlan.zhihu.com/p/121770261)
#### 14. 防抖与节流
#### 15. 函数执行改变this
[知识点](https://www.cnblogs.com/pssp/p/5216085.html)
[知识点](https://blog.csdn.net/xuehangongzi/article/details/80841167)
#### 16. ES6/ES7
* 声明
   [知识点](https://www.cnblogs.com/zhaoxiaoying/p/9031890.html)
   * let / const: 块级作用域、不存在变量提升、暂时性死区、不允许重复声明
   * const: 声明常量，无法修改
* 解构赋值
* `class / extend:` 类声明与继承
* `Set / Map:` 新的数据结构 [知识点](https://www.runoob.com/w3cnote/es6-map-set.html)
* `Symbol：`
一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。[知识点](https://www.runoob.com/w3cnote/es6-symbol.html)
* 异步解决方案:
   * Promise的使用与实现
   * generator:
      * yield: 暂停代码
      * next(): 继续执行代码
   * await / async: 是generator的语法糖， babel中是基于promise实现。
#### 箭头函数和普通函数的区别
[知识点](https://www.cnblogs.com/biubiuxixiya/p/8610594.html)
#### 20. 函数柯里化
[知识点]https://www.jianshu.com/p/2975c25e4d71)
#### 21. js实现异步的几种方式
* 回调函数
* promise
* await/async  
[知识点](https://blog.csdn.net/qq_41764462/article/details/103371725)




### 浏览器
#### WebSocket
#### 存储
我们经常需要对业务中的一些数据进行存储，通常可以分为 短暂性存储 和 持久性储存。
* 短暂性的时候，我们只需要将数据存在内存中，只在运行时可用
* 持久性存储，可以分为 浏览器端 与 服务器端
   * 浏览器:
      * cookie: 通常用于存储用户身份，登录状态等
         * http 中自动携带， 体积上限为 4K， 可自行设置过期时间
      * localStorage / sessionStorage: 长久储存/窗口关闭删除， 体积限制为 4~5M
      * indexDB
      [知识点](https://blog.csdn.net/justlpf/article/details/82662365)
   * 服务器:
      * 分布式缓存 redis
      * 数据库
### 服务端与网络

#### 2. 常见状态码
* 1xx: 接受，继续处理
* 200: 成功，并返回数据
* 400: 请求语法错误
* 401: 要求身份认证
* 403: 拒绝请求
* 404: 资源不存在
* 500: 服务器错误

