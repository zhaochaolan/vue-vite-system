<script setup lang="ts">
</script>

<template>
  <div>
		<el-config-provider :locale="zhCn">
        <router-view />
    </el-config-provider>
  </div>
</template>
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
</script>

<style scoped>
@import './style/index.scss';
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
