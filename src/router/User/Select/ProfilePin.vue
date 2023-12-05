<template>
    <div class="_selectPro">
        
        <div class="_wrap">

            <div class="user-pack">
                <div class="user-icon" :style="`background-image:url(${userData.img})`"></div>
                <p class="name">{{userData.name}}</p>

                <p class="pins">등록된 PIN을 입력해주세요.</p>
            </div>

            <div :class=" fail ? 'fail' : '' " class="inb">
                <div class="inb-b" ref="inbs">
                    <div class="input" v-for="(a,i) in pins" :key="a">
                        <input 
                            type="password" 
                            :value="pins[i]"
                            :ref="`pinInput${i}`"
                            pattern="[0-9]+"
                            maxlength="1"
                            @input="inputPin($event,i)"
                            @keydown="keyDown($event,i)"
                            placeholder="·"
                        >
                        <div class="line"></div>
                    </div>
                </div>
            </div>

            <div class="center">
                <button type="button" @click="this.pinModal = !this.pinModal">PIN 찾기</button>
            </div>

        </div>

    </div>

    <div class="pin_find_modal" v-if="pinModal">
        <div class="back" @click="this.pinModal = !this.pinModal"></div>

        <div class="cont">

            <label for="">계정의 비밀번호를 입력해주세요</label>
            <input ref="pws" type="password" @input="this.inputPass = $event.target.value">
            <div class="btn">
                <button type="button" @click="pinSubmit">찾기</button>
            </div>

        </div>

    </div>

</template>

<script>

    import gsap from 'gsap';
    import { mapState } from 'vuex';

    export default {
        name : "ProfilePin",
        data() {
            return {
                pins : ['','','',''],
                userData : {},
                inputPass : "",
                pinModal : false,
                fail : false
            }
        },
        computed : {
            ...mapState(['user'])
        },
        mounted() {
            const filter = this.user.profile.filter(e=>e.id == this.$route.params.id);
            this.userData = filter[0];
        },
        methods: {
            pinSubmit(){
                if(this.inputPass == this.user.userPW){
                    alert(`해당 프로필의 PIN은 ${this.userData.pin} 입니다.`);
                    this.pinModal = false;
                }else{
                    alert('비밀번호가 다릅니다.');
                }
            },
            submit(){

                let pin = "";
                this.pins.forEach(e=>{
                    pin += e;
                });

                if(this.userData.pin == pin){
                    this.$store.commit('profileLogin',this.$route.params.id);
                    this.$router.push('/');
                }else{

                    gsap.timeline({
                        ease: "elastic.inOut(2,0.1)",
                        defaults : {
                            duration : 0.03
                        },
                        onComplete : ()=>{
                            this.pins = ['','','',''];
                        }
                    })
                    .to(this.$refs.inbs,{
                        xPercent : -2.5
                    })
                    .to(this.$refs.inbs,{
                        xPercent : 0
                    })
                    .to(this.$refs.inbs,{
                        xPercent : 2.5
                    })
                    .to(this.$refs.inbs,{
                        xPercent : 0
                    })

                    this.fail = true;
                }

            },
            keyDown(e,i){

                this.fail = false;

                if(e.key == "Backspace"){

                    if(this.pins[i] === "" && i > 0){

                        this.pins[i-1] = "";
                        setTimeout(() => {
                            this.$refs[`pinInput${i - 1}`][0].focus();
                        }, 100);

                    }

                }

            },
            inputPin(e,i){

                this.pins[i] = e.target.value;
                const legn = document.querySelectorAll('input');

                if(e.target.value.length >= 1){

                    if(i >= (legn.length - 1)){
                        return this.submit();
                    }

                    legn[i+1].focus();

                }

            }
        }
    }
</script>

<style>
    
</style>