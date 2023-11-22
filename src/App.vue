<template>
  <router-view></router-view>
</template>

<script>

  export default {  
    name: 'App',
  }

</script>

<style lang="scss">

  @import "@/assets/scss/lib.scss";

  * {
      padding: 0; margin: 0;
  }

  ul,li {
      list-style: none;
  }

  a {
      text-decoration: none; color: inherit;
  }

  html {
      font-size: $rem; letter-spacing: -0.025em; font-family: "Pretendard";

      @include max(820) {
          font-size: 14px;
      }

      @include max(480) {
          font-size: 12px;
      }

  }

  img {
      max-width: 100%; height: auto; vertical-align: top;
  }

  select,
  input,
  button {
      padding: 0; background: none; border: 0; outline: 0; font-family: "Pretendard"; color: inherit; font-size: inherit; box-sizing: border-box;
  }

  select,
  input {
    padding : 0 0.5em;
  }

  option {
      color: #000;
  }





  @import "./assets/scss/InterFace/Layout.scss";
  @import "./assets/scss/InterFace/List.scss";
  @import "./assets/scss/InterFace/Search.scss";
  @import "./assets/scss/InterFace/Main.scss";
  @import "./assets/scss/InterFace/View.scss";
  @import "./assets/scss/404.scss";

</style>
