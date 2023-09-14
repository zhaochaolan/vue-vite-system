import { get } from '@/utils/axios/index'
import {getMenuListResultModel} from '../type'
// import request from '@/utils/axios/index'
const getMenuList = async () => get<getMenuListResultModel>({
	url:'/system/getMenuList'
})

export {getMenuList}
