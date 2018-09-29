<template>
  <div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
  <p v-if="seen">现在你看到我了</p>
</div>
</template>
<script lang='ts'>
  import Vue from 'vue'
  export default Vue.extend({
    name: 'About',
    data() {
      return {
        message: '页面加载于 ' + new Date().toLocaleString(),
        seen: true,
      }
    },
  })
</script>
