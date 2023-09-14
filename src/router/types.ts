import type { RouteRecordRaw, RouteMeta } from 'vue-router'
import { RoleEnum } from '/@/enums/roleEnum'
import { defineComponent } from 'vue'
import { Recordable } from '@pureadmin/utils'

export type Component<T = any> =
	| ReturnType<typeof defineComponent>
	| (() => Promise<typeof import('*.vue')>)
	| (() => Promise<T>)

	export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
		name: string
		meta: RouteMeta
		component?: Component | string
		components?: Component
		children?: AppRouteRecordRaw[]
		props?: Recordable
		fullPath?: string
	}

	export interface MenuTag {
		type?: 'primary' | 'error' | 'warn' | 'success'
		content?: string
		dot?: boolean
	}

	export interface Menu {
		name: string

		icon?: string

		path: string

		// path contains param, auto assignment.
		paramPath?: string

		disabled?: boolean

		children?: Menu[]

		rank?: number

		roles?: RoleEnum[]

		meta?: Partial<RouteMeta>

		tag?: MenuTag

		hideMenu?: boolean
	}

	export interface MenuModule {
		rank?: number
		menu: Menu
	}

	// export type AppRouteModule = RouteModule | AppRouteRecordRaw;
	export type AppRouteModule = AppRouteRecordRaw
