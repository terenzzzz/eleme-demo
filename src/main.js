import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import "@/mobile/flexible"  //移动端适配
import "@/styles/reset.css" //初始化样式
// import "../node_modules/bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false

import {
  NavBar, Icon, Search, Tabbar, TabbarItem, Col, Row,
  Image as VanImage, Swipe, SwipeItem, Tab, Tabs, Cell, Form,
  Field, Button,List,Area, Picker,Badge 
} from 'vant';
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(List);
Vue.use(Area);
Vue.use(Picker);
Vue.use(Badge);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
