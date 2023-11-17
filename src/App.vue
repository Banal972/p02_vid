<template>
  <Main/>
  <Footer/>
</template>

<script>

  import Main from './router/Main.vue'
  import Footer from "./components/Footer.vue"

  export default {  
    name: 'App',
    data(){
      return {

      }
    },
    components: {
      Main,
      Footer
    }
  }

</script>

<style lang="scss">

  @import "./assets/scss/Layout.scss";
  @import "./assets/scss/Main.scss";

</style>
