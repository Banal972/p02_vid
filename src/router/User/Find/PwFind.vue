<template>

    <div class="login_layout">
        
        <div class="bbx">

            <div class="logo">
                <img src="@/assets/img/logo.svg" alt="">
            </div>

            <div class="tit">
                비밀번호를 찾으시나요?
            </div>
            
            <div class="inb">
                <input type="text" placeholder="가입하신 아이디를 입력해주세요">
            </div>
            
            <div class="inb">
                <input type="email" placeholder="가입하신 이메일을 입력해주세요">
            </div>

            <div class="btn">
                <button>비밀번호 찾기</button>
            </div>

            <div class="banner" @click="$router.push('/auth/sign')">
                처음 오셨나요? <button>회원가입</button>
            </div>
            
        </div>

    </div>

</template>

<script>
    export default {
        name : "PwFind"
    }
</script>