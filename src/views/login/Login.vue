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
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store';
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
const router = useRouter()
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
const userStore = useUserStore();
const submitLogin = (formEl:FormInstance | undefined) => {
	if(!formEl) return;
	formEl.validate((valid: boolean) => {
		if(valid) {
			userStore.login(param);
			router.push('/');
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
.login-wrap {
	position: relative;
	width: 100%;
	height: 100vh;
	background-size: 100%;
}
.login-title {
	width: 100%;
	line-height: 50px;
	text-align: center;
	font-size: 20px;
	color: #fff;
	border-bottom: 1px solid #ddd;
	margin-bottom: 30px;
}
.login-content {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 350px;
	margin: -190px 0 0 -175px;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.3);
	overflow: hidden;
	padding: 30px 30px;
}
.login-btn {
	text-align: center;
}
.login-btn button {
	width: 100%;
	height: 36px;
	margin-bottom: 10px;
}
.login-tips {
	font-size: 12px;
	line-height: 30px;
	color: #fff;
}
</style>
