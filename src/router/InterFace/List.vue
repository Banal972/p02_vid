<template>
    <div class="blank"></div>
    <div class="_list">
        
        <div class="_wrap">
            <div class="title">{{title}}</div>

            <div class="grid">
                <Card v-for="(a, i) in data" :key="i" :a="a"/>
            </div>

        </div>

    </div>

</template>
<script>
    import Card from '@/components/Layout/Card.vue';
    import axios from 'axios';

    export default {
        name : "List", 
        components : {
            Card
        },
        data() {
            return {
                title : "",
                viewClick : false,
                data : []
            }
        },
        methods: {
            updateTitle(to){
                const type = to.type;

                let params = {
                    part : "snippet",
                    chart : "mostPopular",
                    regionCode  : "KR",
                    maxResults : 12,
                    key : process.env.VUE_APP_YOUTUBE_API_KEY
                }

                switch (type) {
                    case "popular":
                        this.title = "인기 영상"
                        break;
                    case "music":
                        this.title = "음악"
                        params['videoCategoryId'] = 10;
                        break;

                    case "gaming":
                        this.title = "게임"
                        params['videoCategoryId'] = 20;
                        break;

                    case "news":
                        this.title = "뉴스"
                        params['videoCategoryId'] = 25;
                        break;

                    case "sport":
                        this.title = "스포츠"
                        params['videoCategoryId'] = 17;
                        break;

                    case "likes":
                        this.title = "관심 콘텐츠"
                        break;

                }

                // 인기
                axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
                    params: params
                })
                .then(({data})=>{
                    this.data = data.items;
                })
                .catch(e=>{
                    console.log(e);
                });

            }
        },
        created(){

            this.updateTitle(this.$route.params);

            this.$watch(
                () => this.$route.params,
                (to)=>{
                    this.updateTitle(to);
                }
            )

        },
    }
</script>
<style>
    
</style>