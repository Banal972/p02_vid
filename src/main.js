import { createApp } from 'vue'
import App from './App.vue'

// 라우터
import router from './lib/router'

// fontawesome
import FontAwesomeIcon from "./lib/fontawesome"



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
