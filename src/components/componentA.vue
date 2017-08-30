<template>
  <div class="hello">
    <h2>componentA:{{msgfromfather}}</h2>
    <button @click="onClickMe">Open mouse!</button>
  </div>
</template>

<script>
export default {
  data :function() {
    return {
      msg: 'I am componentA msg!'
    }
  },
  props:['msgfromfather'],   // 注册属性
  methods:{
    onClickMe:function(){
      this.$emit('doSomething',this.msg);  //点击触发父级的doSomething事件，把msg值传给父级
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
