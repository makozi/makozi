import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: []
});

router.beforeEach(() => {
  window.location.replace("https://marizumakozi.com/");
});

export default router;
