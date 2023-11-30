import { createWebHistory, createRouter } from "vue-router"; // 라이브러리 가져옴

// 중첩
import Route from "../router/Route.vue";

// 라우터

// 404
import Found404 from "../router/Found404.vue";

// 메인
import Main from "../router/InterFace/Main.vue";
import List from "../router/InterFace/List.vue";
import Search from "../router/InterFace/Search.vue";

// 유저
import Login from "../router/User/Login/Login.vue";
import Find from "../router/User/Find/Find.vue";
import Sign from "../router/User/Sign/Sign.vue";

// 프로필
import ProfileSelect from "../router/User/Select/ProfileSelect.vue";
import ProfilePin from "../router/User/Select/ProfilePin.vue";


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
    path : "/auth",
    component : Login,
  },
  {
    path : "/auth/find",
    component : Find
  },
  {
    path : "/auth/sign",
    component : Sign
  },
  {
    path : "/user/select",
    component : ProfileSelect
  },
  {
    path : "/user/select/:id",
    component : ProfilePin
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