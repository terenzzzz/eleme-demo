// api文件夹下的各个模块 都来到index 再统一导出
import { categories, stores} from "./home";
export const categoriesAPI = categories
export const storesAPI = stores

import { menu, store } from "./menu";
export const menuAPI = menu
export const storeAPI = store


