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
