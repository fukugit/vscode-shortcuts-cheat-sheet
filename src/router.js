import {createRouter, createWebHashHistory} from "vue-router";
import CheatSheet from './components/view/CheatSheet.vue';

const routes = [
  {path: '/', component: CheatSheet},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;