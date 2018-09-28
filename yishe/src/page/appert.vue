<template>
    <div class="appert">
        <navs>预约</navs>
    </div>
</template>
<script>
import navs from '@/components/navs'
export default {
    name:'appert',
    data(){
        return{
            msg:'预约'
        }
    },
    components:{
        navs
    }
}
</script>
<style scoped>
.appert {
    width: 100%;
    height: 100%;
}
</style>
