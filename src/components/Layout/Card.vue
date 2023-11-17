<template>

    <div class="card-layout-1">
        
        <div class="iframe">
            <img :src="a.snippet.thumbnails.standard.url" alt="">
        </div>

        <h4>{{a.snippet.title}}</h4>
    </div>

</template>

<script>
    
    export default {
        name : "Card",
        props : {
            a : Object
        },
        mounted(){
            console.log(this.a);
        }
    }

</script>

<style>

</style>