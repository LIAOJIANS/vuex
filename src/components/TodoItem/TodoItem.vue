<template>
  <li  @mouseenter="showDeleta(true)" @mouseleave="showDeleta(false)"  :style="{ background: gbColor }">
      <label>
        <input type="checkbox" v-model="item.complate" ref="isCheck"  />
        <span> {{ item.title }} </span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="delItem()">删除</button>
  </li>
</template>

<script>
  export default {
    props: {
      item: Object,
      index: Number,
      detelaData: Function
    },
    data() {
      return {
        gbColor: "white",
        isShow: false
      }
    },
    methods: {
      showDeleta(isEnter) {
        if(isEnter) {
          this.gbColor = "#aaaaaa"
          this.isShow = true
        }else {
          this.gbColor = "white"
          this.isShow = false
        }
      },
      delItem() {
        const { detelaData, index } = this
        if(window.confirm(`你确定删除{item.title}吗`,)) {
          detelaData(index)
        }
      }
    },
    computed: {
      // conts() {
      //   return this.cont
      // }
    },
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
