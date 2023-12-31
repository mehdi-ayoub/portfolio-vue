import { createApp } from 'vue';
import App from './App.vue';

// FontAwesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faCrop, faMobile} from '@fortawesome/free-solid-svg-icons';
import { faAppStore, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Adding icons to the library
library.add(faCode, faCrop, faAppStore, faLinkedin, faGithub, faPaperPlane, faMobile, faBars);

const app = createApp(App);

// Registering the FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
