<template>
    <div class="blank"></div>
    <div class="_search">
        
        <div class="_wrap">

            <h4 class="title">
                {{ $route.params.data }} 를 검색하셨습니다.
                <span>관련된 12개의 영상을 불러왔습니다.</span>
            </h4>

            <div class="grid" v-if="searchData">
                <Card v-for="(a, i) in searchData" :key="i" :a="a" @openModal="modalOpen"/>
            </div>

            <div class="found" v-if="!searchData">
                검색결과가 존재하지 않습니다.
            </div>

        </div>

    </div>

    <ViewModal v-if="viewClick" :viewID="viewID" @closeModal="viewClick = false;"/>

</template>

<script>

    import ViewModal from '@/components/Layout/ViewModal/ViewModal.vue';
    import Card from '@/components/Layout/Card.vue';
    import axios from 'axios';

    export default {
        name : "Search",
        data() {
            return {
                searchData : null,
                viewClick : false,
                viewID : ""
            }
        },
        components : {
            ViewModal,
            Card
        },
        methods : {
            modalOpen(event){
                this.viewID = event;
                this.viewClick = true;
            },
            modalClose(){
                this.viewClick = false;
            },
        },
        mounted(){

            axios.get(`https://www.googleapis.com/youtube/v3/search`,{
                params : {
                    q : this.$route.params.data,
                    part : "snippet",
                    regionCode : "KR",
                    relevanceLanguage : "ko",
                    maxResults : 12,
                    key : process.env.VUE_APP_YOUTUBE_API_KEY
                }
            })
            .then(({data})=>{
                this.searchData = data.items;
            })
            .catch(e=>{
                console.log(e);
            })

        }
    }
</script>