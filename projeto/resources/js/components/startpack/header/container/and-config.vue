<template>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        props:{
            configs: {
                type: Array,
                default: ()=>{return null}
            },
            filters: {
                type: Array,
                default: null
            },
            fields: {
                type: Object,
                default: null
            },
            token: {
                type: String,
                default: ''
            },
            menus: {
                type: Array,
                default: null
            },
            breadcrumbs: {
                type: Array,
                default: null
            }
        },
        data(){
            return {
                accessibility: false
            }
        },

        beforeMount(){



            this.setConfigs(this.configs)

            if(this.fields)
                this.setState({state: 'fields','payload': this.fields})

            if(this.filters)
                this.setState({state: 'filters','payload': this.filters})

            if(this.token){
                this.setToken(this.token)
            }

            if(this.breadcrumbs){
                this.setBreadcrumbs(this.breadcrumbs)
            }

            if(this.menus){
                this.setMenus(this.menus);
            }

        },

        watch: {

        },

        methods: {
            ...mapActions('startpack',['setConfigs','setState', 'setToken', 'setMenus', 'setBreadcrumbs', 'setContraste'])
        },
        computed: {

        }
    }
</script>

