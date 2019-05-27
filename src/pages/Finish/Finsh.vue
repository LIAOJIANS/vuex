<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader  :upData="upData"/>
        <TodoList :list="list" :detelaData="detelaData"/>
        <TodoFooter :list="list" :allCount="allCount" :delAll = "delAll" :selectAll="selectAll"/>
      </div>
    </div>
  </div>
</template>

<script>
    import TodoHeader from '../../components/TodoHeader/TodoHeader.vue'
    import TodoList from '../../components/TodoList/TodoList.vue'
    import TodoFooter from '../../components/TodoFooter/TodoFooter.vue'
    import allStorage from '../../utli/storageUtli.js'
    export default {
      data() {
        return {
          list: allStorage.getStorage(),
          allCount : 0
        }
      },
      created() {
        this.cont()
      },
      updated() {
        this.cont()
      },
      watch: {
        allCount(value) { // 监听数组长度
          return value
        },
        list:{   // 深度监听  一旦list内部发生改变立即储存到本地
          deep: true,
          handler: allStorage.setStorage
        }
      },
      methods: {
        upData(lists) {
            this.list.unshift(lists)
        },
        detelaData(index) {
            this.list.splice(index, 1)
        },
        cont() {
          this.allCount = this.list.length
        },
        delAll() {
          // var newList = []
          // this.list.forEach((item) => {
          //  if(item.complate) {
          //     newList = item
          //  }
          // })
          this.list = this.list.filter( lists => !lists.complate) // 过滤之后会生成数组
          // console.log(newList)
        },
        selectAll(check) {
          this.list.forEach(lists => lists.complate = check)
        }
      },
      components: {
        TodoHeader,
        TodoList,
        TodoFooter
      }
    }
</script>

<style scoped>
</style>
