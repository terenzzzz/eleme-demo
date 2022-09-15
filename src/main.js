import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import '../node_modules/animate.css/animate.css';
import "@/mobile/flexible"  //移动端适配
import "@/styles/reset.css" //初始化样式
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss);

Vue.config.productionTip = false

import {
  NavBar, Icon, Search, Tabbar, TabbarItem, Col, Row,
  Image as VanImage, Swipe, SwipeItem, Tab, Tabs, Cell, Form,
  Field, Button, List, Area, Picker, Badge, CellGroup, ActionSheet,
  SubmitBar, Tag, NoticeBar, Popup, Divider, DatetimePicker, AddressList,
  AddressEdit
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
Vue.use(CellGroup);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(List);
Vue.use(Area);
Vue.use(Picker);
Vue.use(Badge);
Vue.use(ActionSheet);
Vue.use(SubmitBar);
Vue.use(Tag);
Vue.use(NoticeBar);
Vue.use(Popup);
Vue.use(Divider);
Vue.use(DatetimePicker);
Vue.use(AddressList);
Vue.use(AddressEdit);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
