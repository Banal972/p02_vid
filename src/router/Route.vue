<template>
    <Header/>
    <router-view></router-view>
    <Footer/>
</template>

<script>
    // 컴포넌트
    import Header from "../components/Header.vue";
    import Footer from "../components/Footer.vue";
    export default {
        name : "Route",
        components : {
            Header,
            Footer
        }
    }
</script>