<template>

    <div class="card-layout" :class="type">
        
        <div class="iframe">
            <img src="https://placehold.co/600x400" alt="">
            <!-- <img :src="a.snippet.thumbnails.default.url" alt=""> -->
        </div>

        <!-- <h4>{{a.snippet.title}}</h4> -->
    </div>

</template>

<script>
    
    export default {
        name : "Card",
        props : {
            // a : Object,
            type : String
        }
    }

</script>

<style>

</style>