<template>
    <div class="login_layout">
        
        <div class="bbx">

            <div class="logo">
                <img src="@/assets/img/logo.svg" alt="">
            </div>

            <div class="tit">
                오신걸 환영합니다.
            </div>
            
            <form @submit="login">

                <div class="inb">
                    <input 
                        type="text" 
                        :value="userId" 
                        placeholder="아이디를 입력해주세요"
                        @input="userId = $event.target.value"
                        ref="userId"
                    >
                </div>
                
                <div class="inb">
                    <input 
                        type="password" 
                        :value="userPw" 
                        placeholder="비밀번호를 입력해주세요"
                        @input="userPw = $event.target.value"
                        ref="userPw"
                    >
                </div>

                <div class="flex">
                    <div class="chek">
                        <input type="checkbox" id="save" @change="saveId" :checked="saveid"> <label for="save">아이디 저장</label>
                    </div>

                    <router-link to="/auth/find">아이디 / 비밀번호 찾기</router-link>
                </div>
                
                <div class="btn">
                    <button type="submit">로그인</button>
                </div>

            </form>
            
            <div class="banner" @click="$router.push('/auth/sign')">
                처음 오셨나요?
            </div>
            
        </div>

    </div>
</template>
<script>

    import {useCookies} from "vue3-cookies"

    export default {
        name : "Login",
        setup(){
            const { cookies } = useCookies();
            return { cookies };
        },
        data() {
            return {
                userId : "",
                userPw : "",
                saveid : false,
            }
        },
        mounted() {
            let idGet = this.cookies.get("cookie-user");
            if(idGet){
                this.userId = idGet;
                this.saveid = true;
            }
        },
        methods: {
            saveId(e){
                this.saveid = e.target.checked;
            },
            login(e){

                e.preventDefault();

                if(this.userId == ""){
                    this.$refs.userId.focus();
                    return alert("아이디를 입력해주세요.");
                }

                if(this.userPw == ""){
                    this.$refs.userId.focus();
                    return alert("비밀번호를 입력해주세요.");
                }

                const find = this.$store.state.member.findIndex(e=>e.userID == this.userId);

                if(find < 0 || this.userPw != this.$store.state.member[find].userPW){
                    return alert('아이디 혹은 비밀번호가 다릅니다.')
                }

                this.$store.commit('authLogin',this.userId);
                alert('로그인에 성공하였습니다.');
                this.cookies.set("cookie-user",this.userId);
                this.$router.push('/user/select');

            }
        },
    }
</script>

<style lang="scss">
    @import "./Login.scss";
</style>