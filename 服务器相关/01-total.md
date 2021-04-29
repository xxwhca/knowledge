<!--
 * @Author: jxzuo
 * @Date: 2021-04-23 17:39:05
 * @LastEditTime: 2021-04-23 23:20:47
 * @LastEditors: jxzuo
-->
#### 1. 常见状态码
* 1xx: 接受，继续处理
* 200: 成功，并返回数据
* 400: 请求语法错误
* 401: 要求身份认证
* 403: 拒绝请求
* 404: 资源不存在
* 500: 服务器错误
[知识点](https://blog.csdn.net/banana960531/article/details/85621865)

#### 2. 常用HTTP请求
* get 
* post
* head
* delete
[知识点](https://www.cnblogs.com/zhouwenfan-home/p/11334101.html)

#### 3. Get和Post的区别
* GET在浏览器回退时是无害的，而POST会再次提交请求
* GET请求只能进行url编码，而POST支持多种编码方式。
* GET产生一个TCP数据包；POST产生两个TCP数据包。
[知识点](https://blog.csdn.net/qq_37174383/article/details/86687758)

#### 4. 什么是前端缓存
前端缓存分为`浏览器缓存`和`http缓存`
* http缓存
    * 强缓存
        * `Expires`
        * `Cache-Control`
    * 协商缓存
        * `Last-Modified / If-Modified-Since`
        * `Etag / If-None-Match`
    [知识点](https://www.jianshu.com/p/256d0873c398)
* 浏览器缓存
    * 本地存储
        * webStorage
        * cookie
        * indexDB
    * 默认缓存
#### 5. 跨域的解决办法
* jsonp
* 服务端设置 `CORS: Access-Control-Allow-Origin：*`
* 本地设置代理 `devServer proxy`
* postMessage
[知识点](https://www.cnblogs.com/sdcs/p/8484905.html)

#### 6.webSocket
[知识点](https://zhuanlan.zhihu.com/p/74326818)

#### 7. URL输出到页面的全过程
[知识点](https://blog.csdn.net/wlk2064819994/article/details/79756669)

