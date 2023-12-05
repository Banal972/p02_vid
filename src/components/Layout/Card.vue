<template>

    <div class="card-layout" @click="openModal">
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
        methods: {
            openModal(){
                let id = "";
                if(this.a.snippet.resourceId){
                    id = this.a.snippet.resourceId.videoId;
                }else{
                    if(this.a.id.videoId){
                        id = this.a.id.videoId;
                    }else{
                        id = this.a.id;
                    }
                }

                this.$emit('openModal',id);
            }
        },
    }

</script>

<style>

</style>