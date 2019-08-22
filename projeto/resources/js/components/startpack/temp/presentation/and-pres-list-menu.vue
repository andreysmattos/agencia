<template>
    <ul class="list">     
        <li class="list-item" v-for="menu in menus" @click="remove(menu)">
            {{menu}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "and-pres-edit-menu",
        props:{
           menus: {
            type: Array,
            default: []
           }
        },
        methods: {
            remove(aux){
                //aki vai deletar o item do menu
                this.$emit('del', aux);
            }
        }
    }
</script>

<style scoped>
    .list {
        display: flex;
        width: 100%;
        justify-content: space-between;

    }

    .list-item {
        height: 100px;
        line-height: 100px;

        width: 150px;
        border: solid 2px black;
        border-radius: 8px;
        background-color: #f5f5f5;
        text-transform: uppercase;
        font-size: 18px;
        color: black;
        font-weight: 700;

        text-align: center;
        
    }


</style>