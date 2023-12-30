import { createWebHistory, createRouter } from "vue-router"; // 라이브러리 가져옴

// 라우터
import store from "@/store";

// 중첩
import Route from "../router/Route.vue";

// 라우터

// 404
import Found404 from "../router/Found404.vue";

// 메인
import Main from "../router/InterFace/Main.vue";
import List from "../router/InterFace/List.vue";
import Search from "../router/InterFace/Search.vue";
import View from "../router/InterFace/View/View.vue";

// 유저
import Login from "../router/User/Login/Login.vue";
import Find from "../router/User/Find/Find.vue";
import Sign from "../router/User/Sign/Sign.vue";

// 프로필
import ProfileSelect from "../router/User/Select/ProfileSelect.vue";
import ProfilePin from "../router/User/Select/ProfilePin.vue";
import ProfileAdd from "../router/User/Profile/Add/Add.vue"



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
        path : "list/like",
        component : List,
        meta : { requiresAuth : true }
      },
      {
        path : "list/:type",
        component : List
      },
      {
        path: "search/:data",
        component : Search,
      }
    ]
  },
  {
    path : "/view/:id",
    component : View
  },
  {
    path : "/auth",
    component : Login,
  },
  {
    path : "/auth/find",
    component : Find,
  },
  {
    path : "/auth/sign",
    component : Sign,
  },
  {
    path : "/user/select",
    component : ProfileSelect,
    meta : { requiresAuth : true }
  },
  {
    path : "/user/select/:id",
    component : ProfilePin,
    meta : { requiresAuth : true }
  },
  {
    path : "/user/profile/add",
    component : ProfileAdd,
    meta : { requiresAuth : true }
  },
  {
    path : "/user/profile/:id",
    component : ProfileAdd,
    meta : { requiresAuth : true }
  },
  {
    path: "/:pathMatch(.*)*",
    component: Found404,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//auth
router.beforeEach((to,from,next)=>{

  // 로그인이 안되어있으면
  if(to.meta.requiresAuth && !store.getters.getUser){
    alert('로그인을 해야 접속하실수 있습니다.');
    return next({ path : "/auth" });
  }else {
    next();
  }

});

export default router;