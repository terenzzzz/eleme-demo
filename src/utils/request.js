// 网络请求封装
import axios from 'axios'

//穿透使用
// axios.defaults.baseURL = "https://xs47628438.oicp.vip"

// 开发使用
// axios.defaults.baseURL = "http://127.0.0.1:3007"

// 部署使用
axios.defaults.baseURL = "https://www.terenzzzz.com:7777"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default axios