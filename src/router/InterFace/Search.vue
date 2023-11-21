<template>
    <div class="blank"></div>
    <div class="_search">
        
        <div class="_wrap">

            <div class="input-box">
                <select :value="select" @change="selectChange">
                    <option value="">전체</option>
                    <option value="제목">제목</option>
                    <option value="채널명">채널명</option>
                </select>
                <input type="text" @input="inputChange" @keydown="submit" :value="input" placeholder="검색명을 입력해주세요">
            </div>

            <div class="grid" v-if="searchData.length > 0">
                <router-link to="" v-for="(a,i) in searchData" :key="i">
                    <div class="imb" :style="`background-image : url(${a.snippet.thumbnails.default.url})`"></div>
                </router-link>
            </div>

            <div class="found">
                검색결과가 존재하지 않습니다.
            </div>

        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name : "Search",
        data() {
            return {
                input : "",
                select : "",
                searchData : [],
            }
        },
        methods: {
            selectChange(e){
                this.select = e.target.value;
            },
            inputChange(e){
                this.input = e.target.value;
            },
            submit(e){
                if(e.key == "Enter" && e.code == "Enter"){

                    let type = "?type=channel&type=video";

                    if(this.select === "채널명"){
                        type = "?type=channel";
                    }

                    setTimeout(()=>{
                        axios.get(`https://www.googleapis.com/youtube/v3/search${type}`,{
                            params : {
                                q : this.input,
                                part : "snippet",
                                regionCode : "KR",
                                relevanceLanguage : "ko",
                                maxResults : 10,
                                key : process.env.VUE_APP_YOUTUBE_API_KEY
                            }
                        })
                        .then(({data})=>{
                            this.searchData = data.items;
                        })
                        .catch(e=>{
                            console.log(e);
                        })
                    },200);

                }
            }
        },
        mounted(){

        }
    }
</script>