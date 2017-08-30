# my-first-project

> this is my first project

## 运行

```javascript
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```
## localStorage本地存储
### App.vue

```javascript
import Store from './store' 

export default {
    data:function(){
        return{
            title:"this is a todolist",
            items: Store.fetch(),   //把item获取到,刷新之后不会消失
            newItem:''
        }
    },
    watch:{   // 监听
        items:{
            handler:function(items){
                Store.save(items)  //方法里建立的li存储起来
            },
            deep:true   // 深度观察
        }
    }
}

```
### store.js

```javascript
const STORAGE_KEY = 'todos-vuejs'
export default {
    fetch() {    // 取得本地缓存中对应的值
        return JSON.parse(window.localStorage.getItem( STORAGE_KEY ) || '[]' )
    },
    save(items) {   // 设置本地缓存，以key-value的形式
        window.localStorage.setItem( STORAGE_KEY,JSON.stringify(items) )
    }
}
```
## 组件通信
1. 父组件传递数据给子组件
- 传递普通字符串

```html
父组件：
<parent>
    <child msgfromfather="I am father msg"></child>  // 这里必须要用 - 代替驼峰
</parent>

子组件：
props: ['msgfromfather']
```
- 动态传递

```javascript
父组件：
<parent>
    <child :child-msg="msg"></child>  // 这里必须要用 - 代替驼峰
</parent>

data(){
    return {
        msg: [1,2,3]
    };
}

子组件通过props接收数据：
    1. props: ['childMsg']
    2. props: {
                 childMsg: Array   // 这样可以指定传入的类型，如果类型不对，会警告
              }
    3. props: {
                 childMsg: {
                     type: Array,
                    default: [0,0,0] //这样可以指定默认的值
                 }
              }

```
2. 子组件与父组件通信

```javascript
子组件：
<template>
    <div @click="up"></div>
</template>
data :function() {
    return {
        msg: 'I am componentA msg!'
    }
},
methods: {
    up() {
        this.$emit('doSomething',this.msg); //主动触发doSomething方法，this.msg为向父组件传递的数据
    }
}

父组件：
<div>
    <child @doSomething="listen"></child> //监听子组件触发的doSomething事件,然后调用listen方法
</div>
data :function() {
    return {
        childWords: ''
    }
},
methods: {
    listen:function(msg){
        this.childWords = msg;  //从子组件获得的msg值赋值给childWords
    }
}

```










