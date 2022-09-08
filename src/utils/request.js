// 网络请求封装
import axios from 'axios'
axios.defaults.baseURL = "https://xs47628438.oicp.vip"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default axios