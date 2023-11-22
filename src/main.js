import { createApp } from 'vue'
import App from './App.vue'

// 라우터
import router from './lib/router'

// fontawesome
import FontAwesomeIcon from "./lib/fontawesome"

// veux
import store from './store'

const app = createApp(App)

app
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
