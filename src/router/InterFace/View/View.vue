<template>
    <div class="view_">
        <div id="player" ref="player"></div>
    </div>
</template>
<script>
    export default {
        name : "View",
        data() {
            return {
                player : null
            }
        },
        mounted() {

            
            /* eslint-disable */
            window.onYouTubeIframeAPIReady = ()=> {

                this.player = new YT.Player('player', { // eslint-disable-next-line no-unused-vars
                    videoId: this.$route.params.id,
                });

            }
            /* eslint-enable */

        },
        beforeCreate() {
            if(this.player){
                this.player.destory();
            }
        },
    }
</script>
<style lang="scss">
    @import "./View.scss";
</style>