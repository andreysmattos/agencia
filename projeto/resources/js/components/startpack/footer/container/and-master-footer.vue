<template>

        <!-- <component :is="this.currentView" :pae="this.pae"></component> -->
        <and-pres-master-footer :menus="this.menus"> </and-pres-master-footer>
  
</template>

<script>

    import { mapState } from 'vuex';

    export default {
        props: {
            currentView: String
        },

        beforeMount() {
            // alert('teste');
        },
        mounted(){
            console.log('teste')
        },

        methods: {

        },

        computed: {
            ...mapState('startpack', ['menus']),
        }
    }
</script>

