<template>
	<div class="login-wrap">
		<div class="login-content">
			<h1 class="login-title">后台管理</h1>
			<el-form :model="param" ref="loginForm" :rules="rules">
				<el-form-item prop="username">
					<el-input v-model="param.username" placeholder="username">
						<template #prepend>
							<el-button :icon="User"></el-button>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="param.password" placeholder="password">
						<template #prepend>
							<el-button :icon="Lock"></el-button>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item class="login-btn">
					<el-button type="primary" @click="submitLogin(loginForm)">登录</el-button>
				</el-form-item>
			</el-form>

		</div>
	</div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Lock, User } from '@element-plus/icons-vue';
import { login } from '@/api/module/login'
interface LoginInfo {
	username:string
	password:string
}

//校验密码的函数
const validatePassword = (
	rule:unknown,
	value:string | undefined,
	callback:(msg?: string) => void
) => {
	if(!value){
		callback('密码不能为空');
	}else{
		callback()
	}
}

const param = reactive<LoginInfo>({
	username:'admin',
	password:'123456'
})

//校验规则
const rules: FormRules = {
	username:[
		{
			required:true,
			message:'请输入用户名',
			trigger:'blur'
		}
	],
	password:[
		{
			required:true,
			validator:validatePassword,
			trigger:'blur'
		}
	]
}

//el-form 组件对象
const loginForm = ref<FormInstance>();

const submitLogin = (formEl:FormInstance | undefined) => {
	if(!formEl) return;
	formEl.validate((valid: boolean) => {
		if(valid) {
			login(param).then((res:any) => {
				console.log(res)
			})

			ElMessage.success('登录成功');
		}else{
			ElMessage.error('登录失败');
			return false
		}


	})

}
</script>
<style lang="scss" scoped>
.login-btn{
	.el-button{
		width: 100%;
	}
}
</style>
