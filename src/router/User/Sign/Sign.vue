<template>
    <div class="_sign">
        
        <div class="bbx">
            
            <div class="tit">
                OTT 회원가입
            </div>

            <div class="argee">
                <div class="cont">
                    이 사이트는 포트폴리오로 만든 토이 프로젝트 사이트 입니다.<br/>
                    회원가입시 모든 데이터들이 따로 저장되지 않습니다. <br/>
                    새로고침할시 저장되었던 모든 데이터가 삭제됩니다.
                </div>
                <div class="chek">
                    <input type="checkbox" id="ag" :checked="chek" @change="chekHandler"> <label for="ag">동의합니다</label>
                </div>
            </div>

            <div class="inb">
                <label for="name">성함</label>
                <input 
                    type="text" 
                    id="name" 
                    :value="signData.name" 
                    placeholder="성함을 입력해주세요" 
                    style="max-width: 250px;" 
                    @input="signData.name = $event.target.value"
                    ref="name"
                >
            </div>

            <div class="inb">
                <label for="userEmail">이메일</label>
                <input 
                    type="email" 
                    id="userEmail" 
                    :value="signData.email" 
                    placeholder="이메일 입력해주세요" 
                    @input="signData.email = $event.target.value"
                    ref="userEmail"
                >
            </div>

            <div class="inb">
                <label for="userID">아이디</label>
                <input 
                    type="text" 
                    id="userID" 
                    :value="signData.id" 
                    placeholder="아이디를 입력해주세요" 
                    @input="signData.id = $event.target.value"
                    ref="userID"
                >
            </div>

            <div class="inb">
                <label for="pw">비밀번호</label>
                <input 
                    type="password" 
                    id="pw" 
                    :value="signData.pw" 
                    placeholder="비밀번호를 입력해주세요" 
                    @input="signData.pw = $event.target.value"
                    ref="pw"
                >
            </div>

            <div class="inb">
                <label for="pwc">비밀번호 확인</label>
                <input 
                    type="password" 
                    id="pwc" 
                    :value="pwc" 
                    placeholder="비밀번호와 똑같이 입력해주세요" 
                    @input="pwc = $event.target.value"
                    ref="pwc"
                >
            </div>

            <div class="btn">
                <button @click="submit">회원가입</button>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name : "Sign",
        data() {
            return {
                chek : false,
                signData : {
                    name : "",
                    email : "",
                    id : "",
                    pw : ""
                },
                pwc : ""
            }
        },
        methods: {
            chekHandler(e){
                this.chek = e.target.checked;
            },
            submit(){

                const emailExp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); //eslint-disable-line
                const pwExp = new RegExp('(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})')

                if(this.signData.name == ""){
                    this.$refs.name.focus();
                    return alert('성함을 입력하지 않았습니다.');
                    
                }

                if(this.signData.email == ""){
                    this.$refs.userEmail.focus();
                    return alert('이메일을 입력하지 않았습니다.');
                }

                if(!emailExp.test(this.signData.email)){
                    this.$refs.userEmail.focus();
                    return alert('올바른 이메일 형식이 아닙니다.');
                }

                if(this.signData.id == ""){
                    this.$refs.userID.focus();
                    return alert('아이디을 입력하지 않았습니다.');
                }

                if(this.signData.pw == ""){
                    this.$refs.pw.focus();
                    return alert('비밀번호를 입력하지 않았습니다.');
                }

                if(!pwExp.test(this.signData.pw)){
                    this.$refs.pw.focus();
                    return alert('비밀번호에 6자 이상, 특수문자 하나 이상 포함되어야합니다.');
                }

                if(this.pwc == ""){
                    this.$refs.pwc.focus();
                    return alert('비밀번호를 입력하지 않았습니다.');
                }

                if(this.pwc != this.signData.pw){
                    this.signData.pw = "";
                    this.pwc = "";
                    return alert('비밀번호가 서로 다릅니다.');
                }


                
                

            }
        },
    }
</script>

<style lang="scss">
    @import "./Sign.scss";
</style>