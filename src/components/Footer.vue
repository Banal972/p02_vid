<template>
    <footer className='footer'>
        <div class="_wrap">
            <div className="top">
                <a href="https://github.com/Banal972" target='_blank'>
                    <font-awesome-icon :icon="['fab', 'github']" style="color : #fff"/>
                </a>
            </div>

            <p className='p'>
                이 사이트는 Banal(김지유) <span> <font-awesome-icon :icon="['fab', 'github']"  style="color : #fff" /> <a href="https://github.com/Banal972" target='_blank'>https://github.com/Banal972</a> </span> 포트폴리오 사이트 입니다.
            </p>

            <p className='copy'>Copyright 2023.Banal(김지유). All rights reserved.</p>
        </div>
    </footer>
</template>

<script>

export default {
    name : "Footer",
    comments : {
        
    }
}
</script>

<style>

</style>