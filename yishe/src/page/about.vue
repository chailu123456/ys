<template>
    <div class="about">
         <navs>关于我们</navs>
    </div>
</template>
<script>
import navs from '@/components/navs'
export default {
    name:'about',
    data(){
        return{
            msg:'关于我们'
        }
    },
    components:{
        navs
    }
}
</script>
<style scoped>
.about {
    width: 100%;
    height: 100%;
}
</style>