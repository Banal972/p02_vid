<template>
    <div class="login_layout">
        
        <div class="bbx">

            <div class="logo">
                <img src="@/assets/img/logo.svg" alt="">
            </div>

            <div class="tit">
                오신걸 환영합니다.
            </div>
            
            <div class="inb">
                <input type="text" placeholder="아이디를 입력해주세요">
            </div>
            
            <div class="inb">
                <input type="password" placeholder="비밀번호를 입력해주세요">
            </div>

            <div class="chek">
                <input type="checkbox" id="save"> <label for="save">아이디 저장</label>
            </div>
            
            <div class="btn">
                <button>로그인</button>
            </div>

            <div class="btn-list">
                <router-link to="/auth/idfind">아이디 찾기</router-link>
                <router-link to="/auth/pwfind">비밀번호 찾기</router-link>
            </div>
            
            <div class="banner">
                처음 오셨나요? <button>회원가입</button>
            </div>
            
        </div>

    </div>
</template>
<script>
    export default {
        name : "Login"
    }
</script>

<style lang="scss">
    @import "./Login.scss";
</style>