<template>
  
  <div class="_main">
    
    <div class="main-frame">

      <dl class="title" ref="title">
        <dt>[리무진서비스] EP.72 에스파 윈터</dt>
        <dd>I’m Unhappy, London, Confetti, 대낮에 한 이별</dd>
      </dl>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/zefga5_GEyY?si=ksqEZ0Nq_ecQ2Cww&amp;controls=0&amp;autoplay=1&amp;mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="main-layout">

      <!-- 인기많은 -->
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
            <Card :a="a" @openModal="modalOpen"/>
          </swiper-slide>
        </swiper>

      </div>

      <!-- 게임 -->
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
          <swiper-slide v-for="(a,i) in gaming" :key="i" >
            <Card :a="a" @openModal="modalOpen"/>
          </swiper-slide>
        </swiper>

      </div>

      <!-- 채널 -->
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
            <Card :a="a" :type="'lay-02'" @openModal="modalOpen"/>
          </swiper-slide>
        </swiper>

      </div> 

      <!-- 배너 -->
      <div class="_wrap si-b" v-if="user == undefined">
        <div class="sign-up" @click="$router.push('/auth')" style="cursor: pointer">
          <div class="icon"><img src="../../assets/img/logo.svg" alt="" width="200"></div> 
          로그인 하고 나만의 동영상을 저장해보세요
        </div>
      </div>

      <div class="_wrap si-b" v-if="user">
        <div class="sign-up">
          <div class="icon"><img src="../../assets/img/logo.svg" alt="" width="200"></div> 
          동영상을 클릭해 나만의 동영상을 저장해보세요
        </div>
      </div>

      <!-- top 100 -->
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
          <swiper-slide v-for="(a,i) in music" :key="i" >
            <Card :a="a" @openModal="modalOpen"/>
          </swiper-slide>
        </swiper>

      </div>

      <!-- 숏츠 -->
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
            <Card :a="a" :type="'lay-02'" @openModal="modalClose"/>
          </swiper-slide>
        </swiper>

      </div> 
      
    </div>

  </div>

  <ViewModal v-if="viewClick" :viewID="viewID" @closeModal="viewClick = false;"/>

</template>

<script>

  // 컴포넌트
  import Card from '@/components/Layout/Card.vue'
  import ViewModal from './ViewModal.vue'

  
  // css
  import "swiper/css"

  // 모듈
  import axios from "axios"
  import {Swiper,SwiperSlide} from "swiper/vue"
  import { mapState } from 'vuex'
  import gsap from 'gsap'

  export default {
    name : "Main",
    data(){
      return {
        popular : [],
        gaming : [],
        music : [],
        viewClick : false,
        viewID : ""
      }
    },
    components : {
      Card,
      Swiper,
      SwiperSlide,
      ViewModal
    },
    methods : {
      modalOpen(event){
        this.viewID = event;
        this.viewClick = true;
      },
      modalClose(){
        this.viewClick = false;
      }
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
    computed : {
      ...mapState(['user'])
    },
    async mounted(){

      gsap.timeline()
      .fromTo(this.$refs.title.querySelector('dt'),{
        x : -50,
        opacity : 0
      },{
        opacity : 1,
        x : 0
      })
      .fromTo(this.$refs.title.querySelector('dd'),{
        x : -50,
        opacity : 0
      },{
        x : 0,
        opacity : 1
      });

      // 인기
      await axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
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
      });

      // 게임
      await axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
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
      await axios.get("https://youtube.googleapis.com/youtube/v3/playlistItems",{
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
      });


    }
  }
</script>

<style>

  
  
</style>