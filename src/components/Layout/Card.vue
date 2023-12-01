<template>

    <div class="card-layout" @click="$emit('openModal',this.a.id.videoId ? this.a.id.videoId : this.a.id)">
        
        <div class="iframe">
            <img 
                :src=" 
                    a ? 
                        a.snippet.thumbnails.maxres 
                        ? 
                            a.snippet.thumbnails.maxres.url 
                        :
                            a.snippet.thumbnails.high.url 
                    : 
                    'https://placehold.co/600x400' 
                    " 
            alt="">
        </div>

        <h4>{{a?.snippet.title}}</h4>
    </div>

</template>

<script>
    
    export default {
        name : "Card",
        props : {
            a : Object,
            type : String
        },
    }

</script>

<style>

</style>