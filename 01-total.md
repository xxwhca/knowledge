### CSS
#### 1. 盒模型
* content-box (W3C 标准盒模型)
* border-box (IE 盒模型)  
[知识点](https://blog.csdn.net/qq_34966814/article/details/82872971)

#### 2. BFC
块级格式化上下文，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。  
[知识点](https://www.cnblogs.com/yuer20180726/p/11395982.html)

#### 3.层叠上下文  
[知识点](https://blog.csdn.net/llll789789/article/details/97562099)

#### 4. 居中布局
* 水平居中
   * 行内元素: text-align: center
   * 块级元素: margin: 0 auto
   * absolute + transform
   * flex + justify-content: center
* 垂直居中
   * line-height: height
   * absolute + transform
   * flex + align-items: center
   * table
* 水平垂直居中
   * absolute + transform
   * flex + align-items: center+justify-content:center
   
#### 5. 选择器优先级
* !important > 行内样式 > #id > .class > tag > * > 继承 > 默认

#### 6.去除浮动影响，防止父级高度塌陷
* 通过增加尾元素清除浮动
   * :after / <br> : clear: both
* 创建父级 BFC
* 父级设置高度

#### 7.link 与 @import 的区别
* link功能较多，可以定义 RSS，定义 Rel 等作用，而@import只能用于加载 css
* 当解析到link时，页面会同步加载所引的 css，而@import所引用的 css 会等到页面加载完才被加载
* @import需要 IE5 以上才能使用
* link可以使用 js 动态引入，@import不行

#### 8. CSS预处理器(Sass/Less/Postcss)
CSS预处理器的原理: 是将类 CSS 语言通过 Webpack 编译 转成浏览器可读的真正 CSS。在这层编译之上，便可以赋予 CSS 更多更强大的功能，常用功能:
* 嵌套
* 变量
* 循环语句
* 条件语句
* 自动前缀
* 单位转换
* mixin复用

#### 9.CSS动画
* transition: 过渡动画
   * transition-property: 属性
   * transition-duration: 间隔
   * transition-timing-function: 曲线
   * transition-delay: 延迟
   * 常用钩子: transitionend

* animation / keyframes
   * animation-name: 动画名称，对应@keyframes
   * animation-duration: 间隔
   * animation-timing-function: 曲线
   * animation-delay: 延迟
   * animation-iteration-count: 次数
      * infinite: 循环动画
   * animation-direction: 方向
      * alternate: 反向播放
   * animation-fill-mode: 静止模式
      * forwards: 停止时，保留最后一帧
      * backwards: 停止时，回到第一帧
      * both: 同时运用 forwards / backwards
* 动画属性: 尽量使用动画属性进行动画，能拥有较好的性能表现
   * translate
   * scale
   * rotate
   * skew
   * opacity
   * color

### JS
#### 1. 原型 / 构造函数 / 实例 / 原型链  

[知识点](https://www.jianshu.com/p/dee9f8b14771)  

[知识点](https://www.jianshu.com/p/652991a67186)  

[知识点](https://www.jianshu.com/p/a4e1e7b6f4f8)  


#### 2. 执行上下文  
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
[知识点](https://www.jianshu.com/p/a6d37c77e8db)  

#### 3. 变量对象
[知识点](https://www.jianshu.com/p/330b1505e41d)  

#### 4. 作用域/作用域链  
[知识点](https://www.cnblogs.com/fundebug/p/10535230.html)  

#### 5. 闭包
[知识点](https://github.com/xxwhca/knowledge/blob/main/01-%E9%97%AD%E5%8C%85.md)  

#### 6. 对象的拷贝
[知识点](https://segmentfault.com/a/1190000019977308)  

#### 7. new运算符的执行过程
[知识点](https://blog.csdn.net/qq_43553067/article/details/88077564)

#### 8. instanceof 原理  
能在实例的 原型对象链 中找到该构造函数的prototype属性所指向的 原型对象，就返回true。即:  
```
// __proto__: 代表原型对象链
instance.[__proto__...] === instance.constructor.prototype

// return true
```
[知识点](https://www.cnblogs.com/ysk123/p/10006786.html)

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
#### 14. 防抖与节流
#### 15. 函数执行改变this
[知识点](https://www.cnblogs.com/pssp/p/5216085.html)
[知识点](https://blog.csdn.net/xuehangongzi/article/details/80841167)

#### 20. 函数柯里化
[知识点](https://www.cnblogs.com/ailingstar/p/12425649.html)
