<template>
    
    <div class="search-box">

        <div class="search-window" ref="window">

            <div class="flex">
                <div class="icon"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></div> <input type="text" ref="input" @keydown="onEnter" @input="this.input = $event.target.value">
            </div>

            <div class="late">
                <p>최근 검색 기록</p>
                <ul>
                    <li v-if="prevSearch.length <= 0">최근 검색기록이 없습니다</li>
                    <li v-for="(a,i) in prevSearch" :key="i">{{ a }}</li>
                </ul>
            </div>

        </div>

        <div class="search" @click="toggle">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </div>

    </div>
    

</template>

<script>
    import gsap from 'gsap';

    export default {
        name : "Search",
        data() {
            return {
                openSearch : false,
                prevSearch : [],
                input : "",
            }
        },
        watch : {
            openSearch(){
                if(!this.openSearch){
                    document.removeEventListener('click',this.close);
                }
            }
        },
        methods : {
            onEnter(e){

                if(e.key == "Enter"){

                    if(this.input == ""){
                        alert('검색어를 입력해주세요');
                        return this.$refs.input.focus();
                    }
                    
                    this.$router.push(`/search/${this.input}`);
                    this.prevSearch.push(this.input);

                }
            },
            toggle(){
                this.openSearch = true;

                if(this.$refs.window){

                    gsap.fromTo(this.$refs.window,{
                        width: "0rem",
                    },{
                        width: "20rem",
                        onStart : ()=>{
                            this.$refs.input.focus();
                        },
                        onComplete : ()=>{
                            document.addEventListener('click',this.close);
                        }
                    });

                }

            },
            close(e){

                if(this.$refs.window?.contains(e.target)){
                    return;
                }

                if(this.$refs.window){

                    gsap.fromTo(this.$refs.window,{
                        width: "20rem",
                    },{
                        width: "0rem",
                    });

                }

                this.openSearch = false;

            }
        },
        created() {
            this.$watch(
                () => this.$route.params,
                () => {
                    if(this.$refs.window){

                        gsap.to(this.$refs.window,{
                            width: "0rem",
                            duration : 0
                        });

                    }

                    this.openSearch = false;
                }
            )
        },
        mounted() {
            gsap.set(this.$refs.window,{width:"0rem"});
        },
    }
</script>

<style lang="scss">
    @import "./Search.scss";
</style>