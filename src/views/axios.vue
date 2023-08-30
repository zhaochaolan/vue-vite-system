<template>
    <div>axios页面</div>
</template>
<script setup lang="ts">
import API from '@/api/index'
const requestRes = async () => {
    const result = await API.login('zhangsan', '122')
    console.log(result)
}
requestRes()
</script>

<style scoped lang="less"></style>