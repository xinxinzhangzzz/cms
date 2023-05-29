
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "normalize.css"
import Antd from 'ant-design-vue';
import "./design/index.css"


import App from './App.vue'
import router from './router'
import "./permisstion"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
