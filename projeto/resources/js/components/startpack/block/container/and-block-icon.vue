<template>
    <section>
    <!-- <component :is="this.currentView" :pae="this.pae"></component> -->
        <h1>FUNCIONOU O ELEMENTO VUE</h1>
    </section>
</template>

<script>

    // import { mapState, mapActions, mapGetters } from 'vuex';

    export default {
        props: {
            currentView: String,
            paeName: String,
        },

        beforeMount() {
            alert('teste');
        },

        methods: {
            
        },

        computed: {
          
        }
    }
</script>

