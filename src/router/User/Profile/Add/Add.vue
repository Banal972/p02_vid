<template>
    <div class="profile-add-update">

        <div class="_wrap">
            
            <!-- 유저 프로필 -->
            <label for="file" class="user-img">
                <div class="user-profile">
                    <div class="icon">
                        <font-awesome-icon :icon="['far', 'pen-to-square']" />
                    </div>
                </div>
                <input type="file" id="file">
            </label>

            <div class="input-title">
                <label for="name">프로필 이름</label>
                <input type="text" id="name" placeholder="프로필명을 입력해주세요">
            </div>

            <router-link to="" class="pin">핀설정</router-link>

            <div class="btn">
                <router-link to="">이전</router-link>
                <button type="button" @click="onSubmit">생성</button>
            </div>

        </div>        
        
    </div>
</template>
<script>
import { mapState } from 'vuex';

    export default {
        name : "Add",
        data() {
            return {
                imgURL : "",
                name : "",
            }
        },
        computed : {
            ...mapState(['user'])
        },
        methods : {
            onSubmit(){
                this.$slots
            }
        }
    }
</script>
<style lang="scss">
    @import "./Add.scss";
</style>