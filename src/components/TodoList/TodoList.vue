<template>
  <ul class="todo-main">
      <Todolist v-for="(item, index) in list" :key="index" :item="item" :index="index" :detelaData="detelaData"/>
  </ul>
</template>

<script>
  import Todolist from '../TodoItem/TodoItem.vue'

    export default {
        props: {
          list: Array,
          detelaData: Function
        },
        components: {
          Todolist
        }
    }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
