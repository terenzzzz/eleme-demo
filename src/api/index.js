// api文件夹下的各个模块 都来到index 再统一导出
import { categories, stores} from "./home";
export const categoriesAPI = categories
export const storesAPI = stores

import { menu, store, product} from "./menu";
export const menuAPI = menu
export const storeAPI = store
export const productAPI = product

import { register, login, userInfo, user, functions } from "./user";
export const registerAPI = register
export const loginAPI = login
export const userInfoAPI = userInfo
export const userAPI = user
export const functionsAPI = functions

import {orders, order, orderDetail} from "./order"
export const ordersAPI = orders
export const orderAPI = order
export const orderDetailAPI = orderDetail

import {statu} from "./status"
export const statuAPI = statu

import {nickName,birth,email,password} from "./setting"
export const nickNameAPI = nickName
export const birthAPI = birth
export const emailAPI = email
export const passwordAPI = password

