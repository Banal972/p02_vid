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

  *::-webkit-scrollbar {width: 8px;}
  *::-webkit-scrollbar-thumb {background-color: #2f3542; border-radius: 10px;}

  ul,li {
      list-style: none;
  }

  a {
      text-decoration: none; color: inherit;
  }

  html {
      font-size: $rem+"px"; letter-spacing: -0.025em; font-family: "Pretendard"; background: #000;

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

  // 인풋 number 버튼 삭제
  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  option {
      color: #000;
  }





  @import "./assets/scss/InterFace/Layout.scss";
  @import "./assets/scss/InterFace/List.scss";
  @import "./assets/scss/InterFace/Search.scss";
  @import "./assets/scss/InterFace/Main.scss";
  @import "./assets/scss/404.scss";

</style>
