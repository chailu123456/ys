<template>
    <div class="navs">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'navs',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.navs {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: green;
}
</style>
