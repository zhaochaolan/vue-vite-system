import { get } from '@/utils/axios/index'
import {getMenuListResultModel} from '../type'

const getMenuList = async () => get<getMenuListResultModel>({
	url:'/system/getMenuList'
})

export {getMenuList}
