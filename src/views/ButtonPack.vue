<script setup lang="ts">
import { ref } from 'vue'

const asyncReq = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1)
      resolve(1)
    }, 2000)
  })
}
</script>

<template>
  <main>
    <input type="text" />
    <button v-button-click="asyncReq">哈哈异步点我呀</button>
  </main>
</template>
