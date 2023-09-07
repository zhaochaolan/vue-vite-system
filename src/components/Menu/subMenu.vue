<template>
	<div class="menu-wrapper">
		<template v-if="item.children">
			<el-sub-menu :index="item.path" :key="item.path">
				<template #title>
					<el-icon>
						<component :is="item.meta.icon"></component>
					</el-icon>
					<span>{{ item.meta.title }}</span>
				</template>
				<sub-menu
				v-for="subItem in item.children"
				:key="subItem.path"
				:item="subItem"
				></sub-menu>
			</el-sub-menu>
		</template>
		<template v-else>
			<el-menu-item :index="item.path" :key="item.path">
				<el-icon>
					<component :is="item.meta.icon"></component>
				</el-icon>
				<template #title>
					{{ item.meta.title }}
				</template>
			</el-menu-item>
		</template>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name:'SubMenu',
	props:{
		item:{
			type: Object,
			default:() => ({})
		}
	}
})
</script>
