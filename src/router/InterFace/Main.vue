<template>
  
  <div class="_main">
    
    <div class="main-frame">

      <dl class="title" ref="title">
        <dt>{{visual?.snippet.title}}</dt>
        <dd>{{visual?.snippet.description}}</dd>
      </dl>

      <iframe :src="`https://www.youtube.com/embed/${visual?.id}?controls=0&amp;autoplay=1&amp;mute=1&amp;&loop=1&playlist=${visual?.id}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen v-if="visual"></iframe>

    </div>

    <div class="main-layout">

      <!-- 인기많은 -->
      <div class="popularity _wrap" left>

        <dl class="_tit">
          <dt>지금 가장 인기많은 영상</dt>
        </dl>

        <div class="grid slide01">
          <div class="next"><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
          <div class="prev"><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
          <swiper
            :slides-per-view="1.5"
            :space-between="20"
            :navigation="{
              nextEl : '.slide01 .next',
              prevEl : '.slide01 .prev',
            }"
            :modules="modules" 
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

      </div>

      <!-- 게임 -->
      <div class="popularity _wrap" left>

        <dl class="_tit">
          <dt>인기 상승 게임영상</dt>
        </dl>

        <div class="grid slide02">
          <div class="next"><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
          <div class="prev"><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
          <swiper
            :slides-per-view="1.5"
            :space-between="20"
            :navigation="{
              nextEl : '.slide02 .next',
              prevEl : '.slide02 .prev',
            }"
            :modules="modules"
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

      </div>

      <!-- 스포츠 -->
      <div class="popularity _wrap" left>

        <dl class="_tit">
          <dt>스포츠</dt>
        </dl>

        <div class="grid slide03">
          <div class="next"><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
          <div class="prev"><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
          <swiper
            :slides-per-view="1.5"
            :space-between="20"
            :navigation="{
              nextEl : '.slide03 .next',
              prevEl : '.slide03 .prev',
            }"
            :modules="modules"
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
            <swiper-slide v-for="(a,i) in sport" :key="i" >
              <Card :type="'lay-02'" :a="a" @openModal="modalOpen"/>
            </swiper-slide>
          </swiper>
        </div>

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

        <div class="grid slide04">
          <div class="next"><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
          <div class="prev"><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
          <swiper
            :slides-per-view="1.5"
            :space-between="20"
            :navigation="{
              nextEl : '.slide04 .next',
              prevEl : '.slide04 .prev',
            }"
            :modules="modules"
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

      </div>

      <!-- 뉴스 -->
      <div class="popularity _wrap" left>

        <dl class="_tit">
          <dt>뉴스</dt>
        </dl>

        <div class="grid slide05">
          <div class="next"><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
          <div class="prev"><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
          <swiper
            :slides-per-view="1.5"
            :space-between="20"
            :navigation="{
              nextEl : '.slide05 .next',
              prevEl : '.slide05 .prev',
            }"
            :modules="modules"
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
            <swiper-slide v-for="(a,i) in news" :key="i" >
              <Card :type="'lay-02'" :a="a" @openModal="modalOpen"/>
            </swiper-slide>
          </swiper>
        </div>

      </div> 

    </div>

  </div>

  <ViewModal v-if="viewClick" :viewID="viewID" @closeModal="viewClick = false;"/>

</template>

<script>

  // 컴포넌트
  import Card from '@/components/Layout/Card.vue'
  import ViewModal from '../../components/Layout/ViewModal/ViewModal.vue'

  
  // css
  import "swiper/css"

  // 모듈
  import axios from "axios";
  import { Swiper,SwiperSlide } from "swiper/vue";
  import { Navigation } from "swiper/modules";
  import { mapState } from 'vuex';
  import gsap from 'gsap';

  export default {
    name : "Main",
    data(){
      return {
        popular : [],
        gaming : [],
        music : [],
        news : [],
        sport : [],
        viewClick : false,
        viewID : "",
        visual : null
      }
    },
    components : {
      Card,
      Swiper,
      SwiperSlide,
      ViewModal
    },
    setup(){
      return {
        modules: [Navigation],
      }
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
    computed : {
      ...mapState(['user'])
    },
    async mounted(){


      const first = async ()=>{

        const array = [];

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
          array.push(...data.items);
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
          array.push(...data.items);
        });

        // 스포츠
        await axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
          params: {
            part : "snippet",
            chart : "mostPopular",
            regionCode  : "KR",
            maxResults : 10,
            videoCategoryId : 17,
            key : process.env.VUE_APP_YOUTUBE_API_KEY
          }
        })
        .then(({data})=>{
          this.sport = data.items;
          array.push(...data.items);
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
          array.push(...data.items);
        });

        // 뉴스
        axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
          params: {
            part : "snippet",
            chart : "mostPopular",
            regionCode  : "KR",
            maxResults : 10,
            videoCategoryId : 25,
            key : process.env.VUE_APP_YOUTUBE_API_KEY
          }
        })
        .then(({data})=>{
          this.news = data.items;
        });

        return array;
        
      }

      // 출력한 영상들 랜덤으로 1개 가져와서 메인비주얼 출력
      const second = (arr)=>{

        const random = Math.floor(Math.random() * arr.length);

        // 메인 비주얼
        axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
          params: {
            part : "snippet",
            id : arr[random].id,
            key : process.env.VUE_APP_YOUTUBE_API_KEY
          }
        })
        .then(({data})=>{
          this.visual = data.items[0];
        })
        .catch(e=>{
          console.log(e);
        });

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

      }

      try {

        const array = await first();
        await second(array);
        
      } catch(e){
        console.log(e);
      }


      

    }
  }
</script>

<style>

  
  
</style>