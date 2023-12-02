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
                <router-link to="">생성</router-link>
            </div>

        </div>        
        
    </div>
</template>
<script>
    export default {
        name : "Add",
        data() {
            return {
                
            }
        },
    }
</script>
<style lang="scss">
    @import "./Add.scss";
</style>