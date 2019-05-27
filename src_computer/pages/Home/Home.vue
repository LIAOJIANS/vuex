<template>
    <div>
      <Header></Header>
      <div>
        <router-link to="/message">
          <span>按钮一</span>
        </router-link>
        <router-link to="/news">
          <span>按钮二</span>
        </router-link>
        <button @click="$router.push({ path: '/poject' })"> 点我跳转项目</button>
      </div>
      <router-view>
        
      </router-view>
    </div>
</template>

<script>
  import Header from '../../components/Header/Header.vue'
    export default {
        components: {
          Header
        }
    }
</script>

<style scoped>

</style>
