<template>
    <div>axios页面</div>
</template>
<script setup lang="ts">
import API from '@/api/index'
const requestRes = async () => {
    const result = await API.login('zhangsan', '1111')
    console.log(result)
}
requestRes()
</script>

<style scoped lang="less"></style>
