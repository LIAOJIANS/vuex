<template>
 <div>
   <input type="text" v-model="name" class="text"> <br>
   <textarea name="" id="" cols="30" rows="10" v-model="content" class="textarea">
  </textarea>
   <br>
   <button @click="send">发送</button>
   <div class="cont">
     <div class="title">
       <span>用户名</span>
       <span>内容</span>
     </div>
      <div class="title" v-for="(item, index) in Rating" :key="index">
        <span>{{ item.name }}</span>
        <span>{{ item.content }}</span>
      </div>
   </div>
 </div>
</template>

<script>
    export default {
       data() {
         return {
           name:"", // 用户名
           content:"", // 内容文件
           Rating: [// 组装数组文件
             {
               name: "sss",
               content: "我试哈晒"
             }
          ]
       }
       },
        methods: {
          send() {
            const ratings = {
              name: this.name,
              content: this.content
            }
            this.Rating.unshift(ratings)
            this.name = ""
            this.content = ""
          }
        }
    }
</script>

<style lang="less" scoped>
  .text {
    margin-bottom: 20px;
  }
  .cont {
    margin-top: 20px;
    border-top: 1px solid red;
    width: 500px;
    .title {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
