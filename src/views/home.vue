<template>
	<div class="common-layout">
		<el-container>
			<el-aside>
				<vSide/>
			</el-aside>
			<el-container>
				<el-header>
				<vHeader/>
			</el-header>
				<el-main>
					<router-view v-slot="{Component}">
						<transition name="move" mode="out-in">
							<keep-alive>
								<component :is="Component"></component>
							</keep-alive>

						</transition>

					</router-view>
				</el-main>
			</el-container>
		</el-container>

	</div>

</template>
<script setup lang="ts">
import vHeader from '@/components/Header/index.vue'
import vSide from '@/components/Menu/index.vue'
</script>
<style scoped>
.common-layout{
	width: 100%;
	height: 100%;
}
</style>
