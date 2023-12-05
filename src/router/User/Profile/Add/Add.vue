<template>
    <div class="profile-add-update">

        <div class="_wrap">

            <!-- 유저 프로필 -->
            <label for="file" class="user-img">
                <div class="user-profile" :style="`background-image: url(${this.imgURL ? this.imgURL : '/img/profile.png'})`">
                    <div class="icon">
                        <font-awesome-icon :icon="['far', 'pen-to-square']" />
                    </div>
                </div>
                <input type="file" id="file" @change="onFile">
            </label>

            <div class="input-title">
                <label for="name">프로필 이름</label>
                <input type="text" id="name" ref="name" placeholder="프로필명을 입력해주세요" @input="onInput" :value="name">
            </div>

            <div class="pin" @click="this.pinSetting = true;">핀설정 <span>(설정을 안할경우 비밀번호 없이 로그인 됩니다.)</span> </div>

            <div class="inb" v-if="pinSetting">
                <p>핀 번호는 숫자로만 4자리 입력해야합니다.</p>
                <div class="inb-b" ref="inbs">
                    <div class="input" v-for="(a,i) in pins" :key="a">
                        <input 
                            type="text"
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

            <div class="btn">
                <button type="button" @click="this.$router.go(-1)" v-if="prevBtn">이전</button>
                <button type="button" @click="onSubmit" v-if="!updateId">생성</button>
                <button type="button" @click="onUpdate" v-else>수정</button>
            </div>

        </div>        
        
    </div>

    <div class="modal-pin">



    </div>

</template>
<script>
import { mapState } from 'vuex';

    export default {
        name : "Add",
        data() {
            return {
                pins : ['','','',''],
                imgURL : "",
                name : "",
                prevBtn : true,
                pinSetting : false,
                updateId : null
            }
        },
        computed : {
            ...mapState(['user'])
        },
        watch : {
            pins : {
                handler(to){

                    to.forEach((e,i)=>{
                        if(isNaN(e)){
                            this.pins[i] = "";
                            this.$refs[`pinInput${i}`][0].focus();
                        }
                    });

                },
                deep : true
            }
        },  
        methods : {
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
                const legn = document.querySelectorAll('.inb input');

                if(e.target.value.length >= 1){

                    if(i >= (legn.length - 1)){
                        return;
                    }

                    legn[i+1].focus();

                }
                
            },
            onFile(e){
                let file = e.target.files;
                const url = URL.createObjectURL(file[0]);
                this.imgURL = url;
            },
            onInput(e){
                this.name = e.target.value
            },
            onSubmit(){
                
                if(this.name == ""){
                    alert('이름을 입력하지 않았습니다.');
                    return this.$refs.name.focus();
                }

                let pin = "";
                let pinEmpty = false;

                this.pins.forEach((e,i)=>{

                    if(e != ""){ // 1개 이상 작성했는데 전부 작성 안했을경우
                        pinEmpty = true;
                    }
                    
                    if(i == 3 && e != ""){ // 끝가지 작성했을경우
                        pinEmpty = false;
                    }

                });

                if(pinEmpty == true){
                    return alert('핀을 끝까지 입력해야합니다.');
                }

                this.pins.forEach(e=>pin += e);

                try {
                    
                    this.$store.commit('profileAdd',{ 
                        imgURL : this.imgURL,
                        name : this.name,
                        pin : pin,
                    });

                    alert('등록 되었습니다.');
                    this.$router.push('/user/select');

                }catch(e){
                    console.log(e);
                }
                
                
            },
            onUpdate(){

                if(this.name == ""){
                    alert('이름을 입력하지 않았습니다.');
                    return this.$refs.name.focus();
                }

                let pin = "";
                let pinEmpty = false;

                this.pins.forEach((e,i)=>{

                    if(e != ""){ // 1개 이상 작성했는데 전부 작성 안했을경우
                        pinEmpty = true;
                    }
                    
                    if(i == 3 && e != ""){ // 끝가지 작성했을경우
                        pinEmpty = false;
                    }

                });

                if(pinEmpty == true){
                    return alert('핀을 끝까지 입력해야합니다.');
                }

                this.pins.forEach(e=>pin += e);

                try {
                    
                    this.$store.commit('profileUpdate',{
                        id : this.$route.params.id,
                        imgURL : this.imgURL,
                        name : this.name,
                        pin : pin
                    });

                    alert('프로필이 수정 되었습니다.');
                    this.$router.push('/');

                }catch(e){
                    console.log(e);
                }

            }   
        },
        created() {
            
            if(this.user.profile.length <= 0) {
                this.prevBtn = false;
            }

            if(this.$route.params.id){

                const getProfile = this.user.profile.filter(e=>e.id == this.$route.params.id)[0];
                
                this.updateId = getProfile;
                this.name = getProfile.name;

                if(getProfile.pin != null){
                    this.pinSetting = true;

                     for(let i = 0 ; i < getProfile.pin.length; i++){
                        this.pins[i] = getProfile.pin[i];
                    } 

                }

            }

        },
    }
</script>
<style lang="scss">
    @import "./Add.scss";
</style>