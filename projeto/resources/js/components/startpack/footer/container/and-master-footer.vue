<template>

        <!-- <component :is="this.currentView" :pae="this.pae"></component> -->
        <and-pres-master-footer> </and-pres-master-footer>
  
</template>

<script>

    // import { mapState, mapActions, mapGetters } from 'vuex';

    export default {
        props: {
            currentView: String
        },

        beforeMount() {
            // alert('teste');
        },

        methods: {

        },

        computed: {

        }
    }
</script>

