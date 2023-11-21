<template>
    <div class="blank"></div>
    <div class="_list">
        
        <div class="_wrap">
            <div class="title">{{title}}</div>

            <div class="grid">
                <Card v-for="(a, i) in 12" :key="i"/>
            </div>

        </div>

    </div>

    <ViewModal v-if="viewClick"/>

</template>
<script>
import Card from '@/components/Layout/Card.vue';
import ViewModal from "./ViewModal.vue";

export default {
    name : "List", 
    components : {
        Card,
        ViewModal
    },
    data() {
        return {
            title : "",
            viewClick : false
        }
    },
    methods: {
        updateTitle(to){
            const type = to.type;

            if(type === "popular"){
                this.title = "인기 영상"
            }else if(type === "music"){
                this.title = "음악"
            }else if(type === "gaming"){
                this.title = "게임"
            }else if(type === "butty"){
                this.title = "뷰티"
            }
        }
    },
    created(){

        this.updateTitle(this.$route.params);

        this.$watch(
            () => this.$route.params,
            (to)=>{
                this.updateTitle(to);
            }
        )

    }
}
</script>
<style>
    
</style>