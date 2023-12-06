<template>
    <div class="view_">

        <div class="head _wrap">
            <p @click="this.$router.go(-1)">
                <font-awesome-icon :icon="['fas', 'angle-left']" /> <span>{{title}}</span>
            </p>
        </div>

        <div class="volum" :class="mob && 'mob'">
            <font-awesome-icon :icon="['fas', 'volume-high']" />
            
            <div class="range">
                <input ref="vol" type="range" min="0" max="100" step="5" @input="volum" :value="volumState">
            </div>

        </div>

        <VueYtframe
            :video-id="$route.params.id"
            ref="vf"
            :playerVars="{controls : 0}"
            @ready = "readyHandler"
            @stateChange="stateHandler"
        />

        <div class="bottom _wrap">
            <div class="play" v-if="!pgr" @click="play">
                <font-awesome-icon :icon="['fas', 'play']"/>
            </div>
            <div class="stop" v-else @click="pause">
                <font-awesome-icon :icon="['fas', 'pause']" />
            </div>

            <div class="progressBar">
                <span :style="`width:${playState}%`"></span>
            </div>

            <div v-if="!mob">
                <div class="full-screen" @click="full" v-if="!fullScreen">
                    <font-awesome-icon :icon="['fas', 'maximize']" />
                </div>
                <div class="full-screen" @click="full" v-else>
                    <font-awesome-icon :icon="['fas', 'minimize']" />
                </div>
            </div>

        </div>

    </div>
</template>
<script>

    export default {
        name : "View",
        data() {
            return {
                pgr : true,
                title : "",
                fullScreen : false,
                playState : 0,
                volumState : 0,
                mob : false,
            }
        },
        watch : {
            volumState(){
                this.$refs.vol.style.background = `linear-gradient(to right, #25a982 0%, #25a982 ${this.volumState}%, #fff ${this.volumState}%, white 100%)`;
                this.$refs.vf.setVolume(this.volumState);
            }
        },
        methods: {
            volum(e){
                this.volumState = e.target.value;
            },
            play(){
                this.$refs.vf.playVideo(); 
            },
            pause(){
                this.$refs.vf.pauseVideo();
            },
            full(){

                let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;

                if(!isMobile){

                    if(!this.fullScreen){
                        document.documentElement.requestFullscreen(); // 전체화면
                        this.fullScreen = true;
                    }else{
                        document.exitFullscreen(); // 창모드
                        this.fullScreen = false;
                    }

                }

            },
            readyHandler(e){
                e.playVideo();
            },
            stateHandler(e){
                this.title = e.videoTitle;
                this.volumState = e.getVolume();

                if(e.getPlayerState() == 1){
                    this.pgr = true;
                    this.getProgress(e);
                }else if(e.getPlayerState() == 2){
                    this.pgr = false;
                }
                
            },
            getProgress(e){
                
                let progress = e.getCurrentTime() / e.getDuration() * 100;
                this.playState = progress;

                setTimeout(()=>{

                    this.getProgress(e);

                },100);

            }
        },
        mounted() {
            let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;

            if(isMobile){
                this.mob = true;
            }else{
                this.mob = false;
            }

            window.addEventListener('resize',()=>{
                let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;

                if(isMobile){
                    this.mob = true;
                }else{
                    
                    if(window.innerWidth < 821){
                        this.mob = true;
                    }else{
                        this.mob = false;
                    }
                    
                }
            });
        },
    }
</script>
<style lang="scss">
    @import "./View.scss";
</style>