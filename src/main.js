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

app
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
