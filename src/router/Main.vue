<template>
  
  <div class="_main">
    
    <div class="main-frame">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/zefga5_GEyY?si=ksqEZ0Nq_ecQ2Cww&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="popularity _wrap" left>

      <dl class="_tit">
        <dt>지금 인기많은 비디오</dt>
      </dl>

      <swiper
        class="grid"
        :slides-per-view="3.3"
        :space-between="10"
      >
        <swiper-slide v-for="(a,i) in data" :key="i" >
          <Card :a="a"/>
        </swiper-slide>
      </swiper>

    </div>

    

  </div>

</template>

<script>

  // 컴포넌트
  import Card from '@/components/Layout/Card.vue'

  // 모듈
  import axios from "axios"
  import {Swiper,SwiperSlide} from "swiper/vue"

  // css
  import "swiper/css"

  export default {
    name : "Main",
    data(){
      return {
        data : []
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

      axios.get("https://youtube.googleapis.com/youtube/v3/videos",{
        params: {
          part : "snippet",
          chart : "mostPopular",
          maxResults : 10,
          key : process.env.VUE_APP_YOUTUBE_API_KEY
        }
      })
      .then(({data})=>{
        this.data = data.items;
      })
      .catch(e=>{
        console.log(e);
      });

    }
  }
</script>

<style>

  
  
</style>