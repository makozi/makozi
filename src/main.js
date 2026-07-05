import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";

const targetUrl = "https://marizumakozi.com/";

if (window.location.hostname !== "marizumakozi.com" && window.location.href !== targetUrl) {
  window.location.replace(targetUrl);
}

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
