// 网络请求封装
import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:3007"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default axios