import { createApp } from 'vue'
import App from './App.vue'

// 라우터
import router from './lib/router'

// fontawesome
import FontAwesomeIcon from "./lib/fontawesome"

// veux
import store from './store'

// 쿠키
import {globalCookiesConfig} from "vue3-cookies"

const app = createApp(App);

globalCookiesConfig({
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
});

// 유튜브 iframe
import VueYtframe from "vue3-ytframe";

app
.component('font-awesome-icon', FontAwesomeIcon)
.use(VueYtframe)
.use(store)
.use(router)
.mount('#app')
