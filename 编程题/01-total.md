<!--
 * @Author: jxzuo
 * @Date: 2021-04-24 22:36:37
 * @LastEditTime: 2021-04-24 23:34:50
 * @LastEditors: jxzuo
-->
#### 1.驼峰转下划线
`getTableData => get-table-data`
* 正则表达式
```
 str.replace(/[A-Z]/g,function(word){ return `-${word.toLowerCase()}`})
```
* 其他
```
   change(str){
      let cache=[]
      for(let i=0,j=0;j<str.length;j++){
        let word=str[j]
        if(word>'A' && word<'Z'){
          cache.push(str.substring(i,j).toLowerCase())
          i=j
        }
        if(j===str.length-1){
          cache.push(str.substring(i,str.length).toLowerCase())
        }
      }
      return cache.join('-')
    },
```
#### 2.字母异位词分组
```
// 异位词分组
    groupAnagrams(strs) {
      if (!strs || !strs.length) return [];
      let map={}

      for (let i of strs) {
        let temp = [...i].sort().join('');
        if (!map[temp]) {
          map[temp] = [i];
        } else {
          map[temp].push(i);
        }
      }

      return Object.values(map);
    },
```