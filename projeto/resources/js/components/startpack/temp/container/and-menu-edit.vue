<template>
    <section>
        <!-- <h1>Teste container menu edit</h1> -->
        <and-pres-list-menu :menus="menus" v-on:del="teste"> </and-pres-list-menu>
    </section>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "and-menu-edit",
        props: {


        },

        beforeMount() {

        },

        methods: {
           ...mapActions('startpack', ['delMenu']),
           teste(item){
            this.delMenu(item);
        }
    },

    computed: {
       ...mapState('startpack', ['menus'])
   },
   watch:{

   }
}
</script>

<style scoped>

</style>