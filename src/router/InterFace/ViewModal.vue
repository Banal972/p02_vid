<template>
    <div class="_viewModal">
        <div class="back-off"></div>
        
        <div class="front">

            <div class="cont">
            
                <div class="modal_iframe">
                    <iframe src="https://www.youtube.com/embed/tTO6BYzxI74?si=UfO5S5wmJ0wtPdpF&amp;autoplay=1&amp;mute=1&amp;loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <div class="play">
                        재생하기
                    </div>

                </div>

                <div class="lay">

                    <dl class="tit">
                        <dt>작성자 - OOO</dt>
                        <dd>윈터 - 대낮에 한 이별</dd>
                    </dl>

                    <div class="similar">
                        <h4 class="h4">비슷한 컨텐츠</h4>
                        <div class="grid">
                            <Card v-for="(a,i) in 4" :key="i"/>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import Card from '@/components/Layout/Card.vue';

    export default {
        name : "ViewModal",
        components : {
            Card
        }
    }

</script>