# my-first-project

> this is my first project

## 运行

```javascript
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```
## localStorageBenin存储
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
