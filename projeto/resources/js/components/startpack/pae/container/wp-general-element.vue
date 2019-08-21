<template>
    <component :is="this.currentView" :pae="this.pae"></component>
</template>

<script>

    import { mapState, mapActions, mapGetters } from 'vuex';

    export default {
        props: {
            currentView: String,
            paeName: String,
        },

        beforeMount() {
            this.setPaes(this.paeName)
        },

        methods: {
            ...mapActions('startpack', ['setPaes'])
        },

        computed: {
			...mapGetters('startpack',['getFromPaes']),

            pae() {
			    return this.getFromPaes(this.paeName) || {}
            }
        }
    }
</script>

