import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// CSS
import '../src/admin/css/adminlte.min.css'
import '../src/admin/plugins/fontawesome-free/css/all.min.css'

// JS
import '../node_modules/ionicons/icons/index.js'
import '../src/admin/plugins/jquery/jquery.min.js'
import '../src/admin/plugins/bootstrap/js/bootstrap.bundle.min.js'
import '../src/admin/dist/js/adminlte.js'

createApp(App).use(router).mount('#app')
