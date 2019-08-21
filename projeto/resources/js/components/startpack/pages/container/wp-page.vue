<template>
    <div>
        <wp-loader :target="this.pages[page]"></wp-loader>
        <component v-show="this.pages[page]" :is="this.currentView" :page="this.pages[page]"></component>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "wp-page",
        props: {
            currentView: String,
            page: String,
            pageData:{
                type:Object,
                default: null
            }
        },

        beforeMount() {
            if(this.pageData)
                this.setPage({name:this.page, page:this.pageData})
            else
                if(typeof this.page != 'undefined')
                    this.setPage({name:this.page})
        },

        methods: {
            ...mapActions('startpack', ['setPage'])
        },

        computed: {
            ...mapState('startpack', ['pages'])
        },
        watch:{
            page(n,o)
            {
                if(n!=o){
                    if(typeof this.page != 'undefined'){
                        if(typeof this.pages[n] == "undefined")
                            this.setPage({name:n})
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>