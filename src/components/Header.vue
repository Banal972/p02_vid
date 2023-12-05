<template>
    <header class="header">
        <div class="_wrap">
            
            <div class="lb">
                <div class="logo" @click="$router.push('/')">
                    <img src="../assets/img/logo.svg" alt="" width="100">
                </div>
                <ul class="gnb">
                    <li><router-link to="/"><font-awesome-icon :icon="['fas', 'house']" /> HOME</router-link></li>
                    <li><router-link to="/list/popular">인기 영상</router-link></li>
                    <li><router-link to="/list/music">음악</router-link></li>
                    <li><router-link to="/list/gaming">게임</router-link></li>
                    <li><router-link to="/list/news">뉴스</router-link></li>
                    <li><router-link to="/list/sport">스포츠</router-link></li>
                    <li><router-link to="/list/like">관심 콘텐츠</router-link></li>
                </ul>
            </div>

            <div class="user">
                
                <Search/>

                <router-link to="/auth" v-if="user == null">로그인</router-link>

                <div class="user-info" v-if="user !== null">

                    <div class="user-icon" :style="`background-image:url(${selectUser?.img})`" @click="this.profileInfo = !this.profileInfo"></div>

                    <div class="info-box" v-if="profileInfo">
                        <ul class="member">
                            <li 
                                v-for="(a,i) in profile" 
                                :key="i" 
                                @click="$store.commit('profileLogin',a.id)"
                            >
                                <div class="user-icon" :style="`background-image:url(${a.img})`"></div>
                                <p class="name">{{a.name}}</p>
                            </li>
                            <li @click="addProfile">
                                <div class="user-icon" :style="`background-image:url(/img/plus.jpg)`"></div>
                                <p class="name">프로필 추가</p>
                            </li>
                        </ul>

                        <ul class="nav">
                            <li @click="$router.push(`/user/profile/${selectUser.id}`)">프로필 수정</li>
                            <li @click="$store.commit('authLogout')">로그아웃</li>
                        </ul>
                    </div>

                </div>

            </div>

            <div class="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    </header>
</template>

<script>

    import { mapState } from 'vuex';
    import Search from './Layout/Search/Search.vue';

    export default {
        name : "Header",
        data() {
            return {
                selectUser : null,
                profile : null,
                profileInfo : false
            }
        },
        components : {
            Search
        },
        computed : {
            ...mapState(['user'])
        },
        methods: {
            addProfile(){
                if(this.user.profile.length >= 5){
                    return alert('프로필은 5개 이상 생성할 수 없습니다.');
                }
                this.$router.push('/user/profile/add');
            }
        },
        watch : {
            user: {
                handler(val){
                    
                    if(val != null){
                        const selectUser = val.profile.filter(el=>el.select == true)[0];
                        this.selectUser = selectUser;

                        const profile = val.profile.filter(el=>el.select == false);
                        this.profile = profile;
                    }else{

                        this.selectUser = null;
                        this.profile = null;

                    }

                },
                deep : true // 데이터 안의 배열이 변동되도 가져옴
            }
        },
        created() {
            
            const selectUser = this.user?.profile.filter(el=>el.select == true)[0];
            this.selectUser = selectUser;

            const profile = this.user?.profile.filter(el=>el.select == false);
            this.profile = profile;

        },
    }

</script>

<style>
    
</style>