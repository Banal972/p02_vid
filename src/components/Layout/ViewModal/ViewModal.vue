<template>
    <div class="_viewModal" @click="closeModal" v-if="iframes.length > 0">
        <div class="back-off"></div>
        
        <div class="front" ref="front">

            <div class="cont">
            
                <div class="modal_iframe">
                    
                    <img 
                        :src="
                            iframes[0] ? 
                                iframes[0].snippet.thumbnails.maxres 
                                ? 
                                    iframes[0].snippet.thumbnails.maxres.url 
                                :
                                    iframes[0].snippet.thumbnails.high.url 
                            : 
                            'https://placehold.co/600x400' 
                            " 
                    alt="">

                    <div class="play" @click="$router.push(`/view/${iframes[0].id}`)">
                        <font-awesome-icon :icon="['fas', 'play']" />
                    </div>

                </div>

                <div class="lay">

                    <div class="flex">
                        <dl class="tit">
                            <dt>작성자 - {{iframes[0].snippet.channelTitle}}</dt>
                            <dd>{{iframes[0].snippet.title}}</dd>
                        </dl>
                        <div class="add" @click="addLikeVid">
                            <div class="icon">
                                <font-awesome-icon :icon="['fas', 'plus']" v-if="!like" />
                                <font-awesome-icon :icon="['fas', 'check']" :bounce="bounce" v-if="like"/>
                            </div>
                        </div>
                    </div>

                    <div class="similar">
                        <h4 class="h4">비슷한 컨텐츠</h4>
                        <div class="grid">
                            <Card v-for="(a,i) in similar" :a="a" :key="i" @click="changeID(a)"/>
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
    import { mapState } from 'vuex';
    

    export default {
        name : "ViewModal",
        components : {
            Card
        },
        data() {
            return {
                dataID : "",
                iframes : [],
                similar : [],
                like : false,
                bounce : false,
            }
        },
        computed : {
            ...mapState(['user'])
        },
        props : {
            viewID : String
        },
        methods: {
            changeID(a){
                this.dataID = a.id;
            },
            closeModal(e){
                if(e.target === this.$refs.front){
                    this.$emit('closeModal');
                }
            },
            addLikeVid(){
                // 1. 프로필에 likevid가 존재하는지
                // 2. 존재할경우 likevid 삭제
                // 3. 존재하지 않을경우 likevid 추가 및  like true bounce true
                // 4. 5초후 bounce false

                if(this.user){

                    const profile = this.user.profile.filter(e=>e.select)[0];

                    if(!profile.likeVid.includes(this.dataID)){                    
                        this.like = true;
                        this.bounce = true;
                        setTimeout(() => {
                            this.bounce = false;
                        }, 1000);
                    }else{
                        this.like = false;
                    }

                    this.$store.commit('likevid',this.dataID);

                }else{

                    alert('로그인해야 등록하실 수 있습니다.');
                    return this.$router.push('/auth');

                }

            },
            async axiosFunc(){

                try {

                    if(this.dataID != ""){

                        // 1. 프로필에 likevid가 존재하는지
                        // 2. 존재할경우 like true
                        // 3. 존재하지 않을경우 like false

                        if(this.user){

                            const profile = this.user.profile.filter(e=>e.select)[0];
                            if(profile.likeVid.includes(this.dataID)){
                                this.like = true;
                            }

                        }

                        // 비디오 가져오기
                        const response = 
                            await axios.get('https://youtube.googleapis.com/youtube/v3/videos',{
                                params : {
                                    part : "snippet",
                                    id : this.dataID,
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
            dataID(){
                this.axiosFunc();
            }
        },
        mounted(){
            this.dataID = this.viewID;
            this.axiosFunc();
        }
    }

</script>

<style lang="scss">
    @import "./ViewModal.scss";
</style>