<template>
    <article>     

        <h1 v-if="this.page.title" class="title">{{this.page.title}}</h1>

        <h2 v-if="this.page.subtitle" class="sub-title">{{this.page.subtitle}}</h2>

        <p v-if="this.page.content" v-html="this.page.content" class="text">
        </p>

    </article>
</template>

<script>
    export default {
        name: "wp-pres-page-t",
        props:{
            page: {
                type: Object,
                default: ()=>{return {}}
            }
        }
    }
</script>

<style scoped>

.text, .title, .sub-title {
    margin-bottom: 3rem;
}

</style>