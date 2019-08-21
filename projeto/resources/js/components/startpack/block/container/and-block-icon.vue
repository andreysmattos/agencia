<template>
    <component :is="this.currentView"></component>
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

