<template>
    <div>
        <div class="logo">
            <img src="/static/img/logo.png" alt="logo" class="logo-img">
        </div>
        <div class="search">
            <input type="text" placeholder="请输入您要提问的问题" v-model="text">
            <div class="button" @click="search">提问</div>
        </div>
        <img src="/static/img/inset.png" alt="inset" class="inset">
    </div>
</template>

<script>
import { ajaxPost } from '@/ajax/ajax.js'
export default {
    name:'Index',
    data(){
        return {
            text:'',
        }
    },
    created(){
        // this.post();
    },
    methods: {
        search:function(){
            if (this.text === '') {
                this.$toast('请填写提问信息');
            }else{
                this.$router.push({
                    name:'List',
                    query: {
                        text:encodeURIComponent(this.text),
                    }
                });    
            }
        },
        post(){
            ajaxPost('/admin/banner/getBannerList',{},(res)=>{
                console.log(res);
            },(err)=>{
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>
    .logo{
        margin: auto;
        /* width: 681px;
        height: 297px; */
        /* width: 9rem;
	    height: 4rem; */
        width: 340.5px;
        height: 148.5px;
        
        background-image: url(/static/img/logo-bg.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .logo-img{
        display: block;
        /* width: 440px;
	    height: 140px; */
        /* width: 6rem;
	    height: 2rem; */
        width: 220px;
	    height: 70px; 
        margin: auto;
        /* padding: 110px 0 0; */
        /* padding: 1.47rem 0 0; */
        padding: 55px 0 0; 
    }
    .search{
        /* margin: 83px 0 0;
        padding: 0 24px; */
        /* margin: 1.11rem 0 0;
        padding: 0 .32rem; */
        font-size: 0;
        margin: 41.5px 0 0;
        padding: 0 12px; 
    }
    input{
        padding: 0;
        margin: 0;
        /* width: 578px;
	    height: 56px; */
        /* width: 7.71rem;
        height: .75rem; */
        width: 289px;
	    height: 28px;
        box-sizing: border-box;
        box-shadow: 0px 1px 21px 0px rgba(221, 221, 221, 0.75);
        border: none;
        /* border-radius: 28px; */
        /* border-radius: .37rem; */
        border-radius: 14px; 
        vertical-align: top;
        /* padding: 0 59px;
        font-size: 24px; */
        /* padding: 0 .79rem;
        font-size: .32rem; */
        padding: 0 29.5px;
        font-size: 12px;
        letter-spacing: 1px;
        color: #4c4c4c;
        background-image: url(/static/img/icon.png);
        background-repeat: no-repeat;
        /* background-position: center left 20px;
        background-size: 25px 25px; */
        /* background-position: center left .27rem;
        background-size: .33rem .33rem; */
        background-position: center left 10px;
        background-size: 12.5px 12.5px;
    }
    input::placeholder{
        /* font-size: 24px; */
        /* font-size: .32rem; */
        font-size: 12px;
        letter-spacing: 1px;
        color: #cccccc;
    }
    .button{
        display: inline-block;
        /* width: 100px;
        height: 56px; */
        /* width: 1.33rem;
        height: .75rem; */
        width: 50px;
        height: 28px; 
        background-image: linear-gradient(90deg,#2b51a2 0%,#3f91cf 100%),linear-gradient(#2f9bff,#2f9bff);
        background-blend-mode: normal,normal;
        box-shadow: 0px 7px 16px 0px rgba(54, 115, 186, 0.35);
        /* border-radius: 28px;
        font-size: 24px; */
        /* border-radius: .37rem;
        font-size: .32rem; */
        border-radius: 14px;
        font-size: 12px;
        letter-spacing: 1px;
        color: #ffffff;
        line-height: 28px;
        vertical-align: top;
        text-align: center;
        margin-left: 12px;
    }
    .inset{
        display: block;
        /* width: 404px;
        height: 252px; 
        margin: 200px auto 0; */
        /* width: 5.39rem;
        height: 3.36rem; 
        margin: 2.67rem auto 0; */
        width: 202px;
        height: 126px; 
        margin: 100px auto 0;
    }
</style>
