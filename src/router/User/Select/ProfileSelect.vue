<template>
    <div class="_selectPro">
    
        <div class="_wrap">

            <div class="tit">프로필을 선택해주세요</div>

            <ul class="selecter">
                <li v-for="(a,i) in user.profile" :key="i" @click="routing($event,i,a.id)">
                    <div class="user-icon">
                        <div class="back" :style="`background-image:url(${a.img})`"></div>
                    </div>
                    <p>{{a.name}}</p>
                </li>
            </ul>

        </div>

    </div>
</template>

<script>

    import { mapState } from 'vuex';
    import { gsap } from "gsap";

    export default {
        name : "ProfileSelect",
        computed : {
            ...mapState(['user'])
        },
        methods : {

            routing(e,i,id){
                
                const width = e.currentTarget.getBoundingClientRect().left + e.currentTarget.clientWidth/2;

                const height = e.currentTarget.getBoundingClientRect().top + e.currentTarget.clientHeight/2;

                gsap.utils.toArray('li').forEach((e,index)=>{
                    
                    if(index == i){
                        return;
                    }

                    gsap.to(e,{
                        scale : 0
                    });

                })

                gsap.timeline({
                    onComplete : ()=>{
                        this.$router.push(`/user/select/${id}`);
                    }
                })
                .set(e.currentTarget,{
                    pointerEvents : "none"
                })
                .to(e.currentTarget,{
                    x : window.innerWidth/2 - width,
                    y : window.innerHeight/2 - height
                })
                .to(e.currentTarget,{
                    scale : 2
                })
                .to({},{delay : 0.1})

            }

        },
        mounted() {
            
        },
    }

</script>

<style lang="scss">
    @import "./Select.scss";
</style>