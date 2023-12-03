import {createRouter, createWebHashHistory} from "vue-router"
import CheatSheet from './components/view/CheatSheet.vue'
import JsCheatSheet from './components/view/JsCheatSheet.vue'

const routes = [
  {path: '/', component: CheatSheet},
  {path: '/js', component: JsCheatSheet},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;