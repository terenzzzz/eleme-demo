// api文件夹下的各个模块 都来到index 再统一导出
import { categories, stores} from "./home";
export const categoriesAPI = categories
export const storesAPI = stores

import { menu, store } from "./menu";
export const menuAPI = menu
export const storeAPI = store

import { register, login, userInfo,functions } from "./user";
export const registerAPI = register
export const loginAPI = login
export const userInfoAPI = userInfo
export const functionsAPI = functions
