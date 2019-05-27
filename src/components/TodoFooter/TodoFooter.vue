<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"v-model="finishs"/>
    </label>
    <span>
          <span>已完成{{ completeSize }}</span> / 全部{{ allCount }}
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="delAll">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        props: {
          allCount: Number,
          list: Array,
          selectAll: Function,
          delAll: Function
        },
        computed: {
          completeSize () {
            const { list } = this
            return list.reduce(( preTotal, todo) => preTotal + (todo.complate ? 1 : 0), 0)
          },
          finishs: {
            get() {
              return this.completeSize === this.list.length
            },
            set(value) {
              this.selectAll(value)
            }
          }
        }
    }
</script>

<style scoped>

  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
