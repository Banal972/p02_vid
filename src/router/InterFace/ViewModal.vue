<template>
    <div class="_viewModal" @click="closeModal" v-if="iframes.length > 0">
        <div class="back-off"></div>
        
        <div class="front" ref="front">

            <div class="cont">
            
                <div class="modal_iframe">
                    
                    <img :src="iframes[0].snippet.thumbnails.maxres.url" alt="">

                    <div class="play">
                        <font-awesome-icon :icon="['fas', 'play']" />
                    </div>

                </div>

                <div class="lay">

                    <div class="flex">
                        <dl class="tit">
                            <dt>작성자 - {{iframes[0].snippet.channelTitle}}</dt>
                            <dd>{{iframes[0].snippet.title}}</dd>
                        </dl>
                        <div class="add">
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        </div>
                    </div>

                    <div class="similar">
                        <h4 class="h4">비슷한 컨텐츠</h4>
                        <div class="grid">
                            <Card v-for="(a,i) in similar" :a="a" :key="i"/>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>

    import Card from '@/components/Layout/Card.vue';
    import axios from 'axios';

    export default {
        name : "ViewModal",
        components : {
            Card
        },
        data() {
            return {
                iframes : [],
                similar : []
            }
        },
        props : {
            viewID : String
        },
        methods: {
            closeModal(e){
                if(e.target === this.$refs.front){
                    this.$emit('closeModal');
                }
            },
            async axiosFunc(){

                try {

                    if(this.viewID != ""){

                        const response = 
                            await axios.get('https://youtube.googleapis.com/youtube/v3/videos',{
                                params : {
                                    part : "snippet",
                                    id : this.viewID,
                                    key : process.env.VUE_APP_YOUTUBE_API_KEY
                                }
                            })
                            .then(({data})=>{
                                this.iframes = data.items;
                                return data.items[0].snippet.categoryId;
                            });


                        await axios.get('https://youtube.googleapis.com/youtube/v3/videos',{
                            params : {
                                part : "snippet",
                                chart : "mostPopular",
                                maxResults : 4,
                                regionCode : "KR",
                                videoCategoryId : response,
                                key : process.env.VUE_APP_YOUTUBE_API_KEY
                            }
                        })
                        .then(({data})=>{
                            this.similar = data.items;
                        })

                    }

                } catch (e) {
                    console.log(e);
                }

            }
        },
        watch : {
            viewID(){
                this.axiosFunc();
            }
        },
        mounted(){
            this.axiosFunc();
        }
    }

</script>