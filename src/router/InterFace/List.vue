<template>
    <div class="blank"></div>
    <div class="_list">
        
        <div class="_wrap">
            <div class="title">{{title}}</div>

            <div class="grid">
                <Card v-for="(a, i) in data" :key="i" :a="a" @openModal="modalOpen"/>
            </div>

        </div>

    </div>

    <ViewModal v-if="viewClick" :viewID="viewID" @closeModal="viewClick = false;"/>

</template>
<script>

    // 컴포넌트
    import Card from '@/components/Layout/Card.vue';
    import ViewModal from '../../components/Layout/ViewModal/ViewModal.vue';
    // 모듈
    import axios from 'axios';
    import { mapState } from 'vuex';

    export default {
        name : "List", 
        components : {
            Card,
            ViewModal
        },
        data() {
            return {
                title : "",
                data : [],
                viewClick : false,
                viewID : ""
            }
        },
        computed : {
            ...mapState(['user'])
        },
        watch : {
            user: {
                handler(){
                    if(this.user){
                        this.likeGet();
                    }
                },
                deep : true // 배열이나 객체가 수정되도 강제적으로 가져옴
            }
        },
        methods: {
            modalOpen(event){
                this.viewID = event;
                this.viewClick = true;
            },
            modalClose(){
                this.viewClick = false;
            },
            likeGet(){
                const profile = this.user.profile.filter(e=>e.select)[0];

                const vidID = profile.likeVid;

                axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
                    params : {
                        part : "snippet",
                        id : vidID.join(','), // 비디오 요청 보낼때 , 를 붙여서 보냄
                        key : process.env.VUE_APP_YOUTUBE_API_KEY
                    }
                })
                .then(({data})=>{
                    this.data = data.items;
                })
                .catch(e=>{
                    console.log(e);
                });
            },
            updateTitle(to){

                const type = to[0].type;
                const path = to[1];

                let like = false;

                let params = {
                    part : "snippet",
                    chart : "mostPopular",
                    regionCode  : "KR",
                    maxResults : 12,
                    key : process.env.VUE_APP_YOUTUBE_API_KEY
                }

                if(path != "/list/like"){

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
                    }

                }else{

                    this.title = "관심 콘텐츠"
                    like = true;

                }

                if(!like){

                    axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
                        params: params
                    })
                    .then(({data})=>{
                        this.data = data.items;
                    })
                    .catch(e=>{
                        console.log(e);
                    });

                }else{

                    if(this.user){
                        this.likeGet();
                    }

                }
                

            }
        },
        created(){

            this.updateTitle([this.$route.params,this.$route.fullPath]);

            this.$watch(
                () => [this.$route.params,this.$route.fullPath],
                (to)=>{
                    this.updateTitle(to);
                    window.scrollTo(0,0);
                }
            )

        },
    }
</script>
<style>
    
</style>