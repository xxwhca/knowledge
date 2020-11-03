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

