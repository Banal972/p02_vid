<template>
  
  <div class="_main">
    
    <div class="main-frame">

      <dl class="title">
        <dt>[리무진서비스] EP.72 에스파 윈터</dt>
        <dd>I’m Unhappy, London, Confetti, 대낮에 한 이별</dd>
      </dl>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/zefga5_GEyY?si=ksqEZ0Nq_ecQ2Cww&amp;controls=0&amp;autoplay=1&amp;mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="main-layout">

      <div class="popularity _wrap" left>

        <dl class="_tit">
          <dt>지금 가장 인기많은 영상</dt>
        </dl>

        <swiper
          class="grid"
          :slides-per-view="1.5"
          :space-between="20"
          :breakpoints="{
            480: {
              slidesPerView: 2.5,
            },
            820 : {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 4.5,
            },
          }"
        >
          <swiper-slide v-for="(a,i) in popular" :key="i" >
            <Card :a="a"/>
          </swiper-slide>
        </swiper>

      </div>

      <div class="popularity _wrap" left>

        <dl class="_tit">
          <dt>인기 상승 게임영상</dt>
        </dl>

        <swiper
          class="grid"
          :slides-per-view="1.5"
          :space-between="20"
          :breakpoints="{
            480: {
              slidesPerView: 2.5,
            },
            820 : {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 4.5,
            },
          }"
        >
          <swiper-slide v-for="(a,i) in popular" :key="i" >
            <Card :a="a"/>
          </swiper-slide>
        </swiper>

      </div>

      <div class="popularity _wrap" left>

        <dl class="_tit">
          <dt>인기상승 채널</dt>
        </dl>

        <swiper
          class="grid"
          :slides-per-view="1.5"
          :space-between="20"
          :breakpoints="{
            480: {
              slidesPerView: 2.5,
            },
            820 : {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 4.5,
            },
          }"
        >
          <swiper-slide v-for="(a,i) in popular" :key="i" >
            <Card :a="a" :type="'lay-02'"/>
          </swiper-slide>
        </swiper>

      </div> 

      <div class="_wrap si-b">
        <div class="sign-up" @click="$router.push('/auth')">
          <div class="icon"><img src="../../assets/img/logo.svg" alt="" width="200"></div> 
          로그인 하고 나만의 동영상을 저장해보세요
        </div>
      </div>

      <div class="popularity _wrap" left>

        <dl class="_tit">
          <dt>TOP 100 음악</dt>
        </dl>

        <swiper
          class="grid"
          :slides-per-view="1.5"
          :space-between="20"
          :breakpoints="{
            480: {
              slidesPerView: 2.5,
            },
            820 : {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 4.5,
            },
          }"
        >
          <swiper-slide v-for="(a,i) in popular" :key="i" >
            <Card :a="a"/>
          </swiper-slide>
        </swiper>

      </div>

      <div class="popularity _wrap" left>

        <dl class="_tit">
          <dt>지금 뜨는 숏츠</dt>
        </dl>

        <swiper
          class="grid"
          :slides-per-view="1.5"
          :space-between="20"
          :breakpoints="{
            480: {
              slidesPerView: 2.5,
            },
            820 : {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 4.5,
            },
          }"
        >
          <swiper-slide v-for="(a,i) in popular" :key="i" >
            <Card :a="a" :type="'lay-02'"/>
          </swiper-slide>
        </swiper>

      </div> 

      <!-- <div class="popularity _wrap" left>

        <dl class="_tit">
          <dt>지금 방송중인 생방송</dt>
        </dl>

        <swiper
          class="grid"
          :slides-per-view="4.5"
          :space-between="20"
        >
          <swiper-slide v-for="(a,i) in data" :key="i" >
            <Card :a="a"/>
          </swiper-slide>
        </swiper>

      </div>  -->

    </div>

  </div>

</template>

<script>

  // 컴포넌트
  import Card from '@/components/Layout/Card.vue'
  

  // 모듈
  // import axios from "axios"
  import {Swiper,SwiperSlide} from "swiper/vue"

  // css
  import "swiper/css"

  export default {
    name : "Main",
    data(){
      return {
        popular : [],
        gaming : [],
        music : [],
      }
    },
    components : {
      Card,
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
    mounted(){

      // 인기
      /* axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
        params: {
          part : "snippet",
          chart : "mostPopular",
          regionCode  : "KR",
          maxResults : 10,
          key : process.env.VUE_APP_YOUTUBE_API_KEY
        }
      })
      .then(({data})=>{
        this.popular = data.items;
      })
      .catch(e=>{
        console.log(e);
      }); */

/*       // 게임
      axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
        params: {
          part : "snippet",
          chart : "mostPopular",
          regionCode  : "KR",
          maxResults : 10,
          videoCategoryId : 20,
          key : process.env.VUE_APP_YOUTUBE_API_KEY
        }
      })
      .then(({data})=>{
        this.gaming = data.items;
      })
      .catch(e=>{
        console.log(e);
      });


      // Top 100 인기곡
      axios.get("https://youtube.googleapis.com/youtube/v3/playlistItems",{
        params: {
          part : "snippet",
          playlistId : "PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m",
          maxResults : 10,
          key : process.env.VUE_APP_YOUTUBE_API_KEY
        }
      })
      .then(({data})=>{
        this.music = data.items;
      })
      .catch(e=>{
        console.log(e);
      }); */


    }
  }
</script>

<style>

  
  
</style>