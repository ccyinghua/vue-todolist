<template>
    <div id="app">
        <h1 >{{title}}</h1>
        <input type="text" name="" v-model="newItem" v-on:keyup.enter="addNew">
        <ul>
            <li v-for="item in items" v-bind:class="{finished:item.isfinished}" v-on:click="toggleFinish(item)">
                {{item.label}}
            </li>
        </ul>
        <h1>child tells me:{{ childWords }}</h1>
        <component-a msgfromfather="I am father msg" @doSomething="listen"></component-a>
    </div>
</template>

<script>
import Store from './store'
console.log(Store);
// window.localStorage.clear()  // 清除本地缓存
import ComponentA from './components/componentA.vue'

export default {
    data:function(){
        return{
            title:"this is a todo list",
            items: Store.fetch(),   //把item获取到,刷新之后不会消失
            //[
                // {
                //     label:'coding',
                //     isfinished:false
                // },
                // {
                //     label:'walking',
                //     isfinished:true
                // }
            //],
            newItem:'',
            childWords:''
        }
    },
    methods:{
        toggleFinish:function(item){
            item.isfinished = !item.isfinished;  //点击切换finished类
        },
        addNew:function(){      //点击回车生成li
            if(this.newItem){
                this.items.push({
                    label:this.newItem,
                    isfinished:false
                });
                this.newItem = ''
            }
        },
        listen:function(msg){
            this.childWords = msg;  //从子组件获得的msg值赋值给childWords
        }
    },
    watch:{
        items:{
            handler:function(items){
                Store.save(items)  //方法里建立的li存储起来
            },
            deep:true   // 深度观察
        }
    },
    components:{
        ComponentA
    }
}
</script>

<style>
.finished{
    text-decoration:underline;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
