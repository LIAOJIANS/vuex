<template>
    <div>
      <div class="content">看看我的总数{{ counts }}，那我是{{ oddji }}</div>
      <div class="button">
        <button @click="add">+</button>
        <button @click="del">-</button>
        <button @click="odd(count)">偶数加一</button>
        <button @click="setTime">时隔一秒加一</button>
      </div>
    </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex"
    export default {
      data() {
        return {

        }
      },
      methods: {
        add() {
          this.$store.dispatch("add")
        },
        del() {
         this.$store.dispatch("del")
        },
        odd(con) {
         this.$store.dispatch('odd')
        },
        setTime() {
          this.$store.dispatch('setTime')
        }
      },
      computed: {
        ...mapGetters(['oddji']),
        ...mapState(['counts'])
      }
    }
</script>

<style scoped>

</style>
