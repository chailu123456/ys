<template>
    <div class="home">
        <navs>首页</navs>
        <div class="banner">
            <van-swipe  :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img @click="img(index)" :src="image" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import api from '../api/index.js'
import navs from '@/components/navs'
import { Swipe,Lazyload, SwipeItem } from 'vant';
export default {
    name: 'home',
    data() {
        return {
            msg:'首页',
            images: [
                'https://m.360buyimg.com/babel/jfs/t1/4859/26/9221/91139/5bac3b8aEc3d21089/27b230afaa262fbe.jpg',
                'https://img1.360buyimg.com/da/jfs/t1/5616/38/9187/93798/5bac9a76E33fe3f17/608072d07ab1a784.jpg',
                'https://m.360buyimg.com/babel/jfs/t1/493/8/8752/98205/5ba9c198E17378d03/482c05c916584370.jpg',
                'https://img1.360buyimg.com/pop/jfs/t1/3911/4/4936/101044/5b9db232E90a55749/23df87186fdcbb47.jpg'
            ]
        }
    },
    created(){
        axios({
            method:'post',
            url:'web/news/website',
            data: {"pageNum":"1","pageSize":"6","news_type":"1"},
        }).then(res=>{
            console.log(res)
        
        })
    },
    methods:{
        img(index) {
            console.log('当前 Swipe 索引：' + index);
        }
    },
    components:{
        navs
    }
}
</script>
<style>
.home {
    width: 100%;
    height: 100%;
}
.banner {
    width: 100%;
    height: 200px;
}
.van-swipe {
    height: 100%;
}
.van-swipe img {
    width: 100%;
    height: 100%;
}
</style>