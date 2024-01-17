import { createApp } from 'vue'
import router from './routes/routes.js';
import './style.css';
import App from './App.vue'
import 'flowbite';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'
import { faLaravel } from '@fortawesome/free-brands-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library
    .add(faCodeBranch, faDatabase, faEarthAmericas, faGit, faLaravel, faNpm, faVuejs, faPhp, faCss3Alt)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app');
