// 网络请求封装
import axios from 'axios'

//穿透使用
// axios.defaults.baseURL = "https://xs47628438.oicp.vip"

// 开发使用
// axios.defaults.baseURL = "http://127.0.0.1:3007"

// 部署使用
axios.defaults.baseURL = "http://46.101.60.239:3000"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default axios