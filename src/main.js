import Vue from 'vue'

import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

new Vue({
    el: "#app",
    data: {
        menuOpen: false,
        mobileMenu: false
    },
    
    methods: {
        menuOpenshow(){
            if(!this.menuOpen){
                this.menuOpen = true
            }
            else{
                this.menuOpen = false
            }

            if(!this.mobileMenu){
                this.mobileMenu = true
            }
            else{
                this.mobileMenu = false
            }
        }
    }
})

