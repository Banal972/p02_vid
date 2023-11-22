<template>

    <div class="card-layout" @click="$emit('openModal')">
        
        <div class="iframe">
            <img :src=" a ? a.snippet.thumbnails.maxres?.url : 'https://placehold.co/600x400' " alt="">
        </div>

        <h4 v-if="a !== undefined">{{a.snippet.title}}</h4>
    </div>

</template>

<script>
    
    export default {
        name : "Card",
        props : {
            a : Object,
            type : String
        }
    }

</script>

<style>

</style>