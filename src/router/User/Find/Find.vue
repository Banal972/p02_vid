<template>

    <div class="login_layout">
        
        <div class="bbx">

            <div class="logo">
                <img src="@/assets/img/logo.svg" alt="">
            </div>

            <div v-if="!setFind">

                <div class="tit">
                    아이디를 찾으시나요?
                </div>
                
                <form @submit="findID">

                    <div class="inb">
                        <input 
                            type="text" 
                            :value="inputName" 
                            placeholder="가입하신 성함을 입력해주세요"
                            @input="inputName = $event.target.value"
                        >
                    </div>
                    
                    <div class="inb">
                        <input 
                            type="email" 
                            :value="inputEmail" 
                            placeholder="가입하신 이메일을 입력해주세요"
                            @input="inputEmail = $event.target.value"
                        >
                    </div>

                    <div class="flex">
                        <router-link to="/auth">로그인</router-link>
                        <button type="button" @click="setFind = !setFind">비밀번호찾기</button>
                    </div>

                    <div class="btn">
                        <button type="submit">찾기</button>
                    </div>

                </form>

            </div>

            <div v-if="setFind">

                <div class="tit">
                    비밀번호를 찾으시나요?
                </div>

                <form @submit="findPW">

                    <div class="inb">
                        <input 
                            type="text" 
                            :value="inputID" 
                            placeholder="가입하신 아이디를 입력해주세요"
                            @input="inputID = $event.target.value"
                        >
                    </div>

                    <div class="inb">
                        <input 
                            type="email" 
                            :value="inputEmail" 
                            placeholder="가입하신 이메일을 입력해주세요"
                            @input="inputEmail = $event.target.value"
                        >
                    </div>

                    <div class="flex">
                        <router-link to="/auth">로그인</router-link>
                        <button type="button" @click="setFind = !setFind">아이디찾기</button>
                    </div>

                    <div class="btn">
                        <button type="submit">찾기</button>
                    </div>

                </form>
            </div>

            <div class="banner" @click="$router.push('/auth/sign')">
                처음 오셨나요?
            </div>
            
        </div>

    </div>

</template>

<script>
    export default {
        name : "Find",
        data() {
            return {
                setFind : false,
                inputEmail : "",
                inputName : "",
                inputID : ""
            }
        },
        methods: {
            findID(e){
                e.preventDefault();

                const find = this.$store.state.member.filter(e=>e.userName == this.inputName && e.userEmail == this.inputEmail)[0];

                if(find == undefined){
                    return alert('아이디가 존재하지 않습니다.');
                }

                alert(`${this.inputName}님의 아이디는 ${find.userID} 입니다.`);
                this.$router.push('/auth');

            },
            findPW(e){
                e.preventDefault();

                const find = this.$store.state.member.filter(e=>e.userID == this.inputID && e.userEmail == this.inputEmail)[0];

                if(find == undefined){
                    return alert('아이디가 존재하지 않습니다.');
                }

                alert(`${this.inputID}님의 비밀번호는 ${find.userPW} 입니다.`);
                this.$router.push('/auth');

            }
        },
    }
</script>

<style>

</style>