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
                <div class="search" @click="$router.push('/search')">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </div>
                <div class="user-icon"></div>
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
    export default {
        name : "Header"
    }
</script>

<style>
    
</style>