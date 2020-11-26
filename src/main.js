import Vue from 'vue';

import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import animate from 'animate.css';

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(animate);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


new Vue({
    el: "#app",
    data: {
        menuOpen: false,
        mobileMenu: false,

        searchBox: false,
    },
    
    methods: {
        menuOpenshow(){
            if(!this.menuOpen){
                this.menuOpen = true;
            }
            else{
                this.menuOpen = false;
            }

            if(!this.mobileMenu){
                this.mobileMenu = true;
            }
            else{
                this.mobileMenu = false;
            }
        },
        addSearchBox(){
            if(!this.searchBox){
                this.searchBox = true;
            }
            else{
                this.searchBox = false;
            }
        }
    }
});

