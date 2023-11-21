import { createWebHistory, createRouter } from "vue-router"; // 라이브러리 가져옴

// 중첩
import Route from "../router/Route.vue";

// 라우터
import Found404 from "../router/Found404.vue";
import Main from "../router/InterFace/Main.vue";
import List from "../router/InterFace/List.vue";
import Search from "../router/InterFace/Search.vue";


// routes 를 길어지니깐 따로 변수로 생성
const routes = [
  {
    path: "/",
    component : Route,
    children : [
      {
        path : "",
        component : Main
      },
      {
        path : "list/:type",
        component : List
      },
      {
        path: "search",
        component : Search,
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    component: Found404,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;