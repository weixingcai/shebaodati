<template>
    <div>
        <div class="logo">
            <img src="/static/logo.png" alt="logo" class="logo-img">
        </div>
        <div class="search">
            <input type="text" placeholder="请输入您要提问的问题" v-model="text">
            <div class="button" @click="search">提问</div>
        </div>
        <img src="/static/inset.png" alt="inset" class="inset">
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
    methods: {
        search:function(){
            if (this.text === '') {
                this.$toast('请填写提问信息');
            }else{
                this.$router.push({
                    name:'List',
                    params: {
                        text:this.text
                    }
                });    
            }
        }
    }
}
</script>

<style scoped>
    .logo{
        margin: auto;
        /* width: 681px;
        height: 297px; */
        width: 9rem;
	    height: 4rem;
        
        background-image: url(/static/logo-bg.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .logo-img{
        display: block;
        /* width: 440px;
	    height: 140px; */
        width: 6rem;
	    height: 2rem;
        margin: auto;
        /* padding: 110px 0 0; */
        padding: 1.47rem 0 0;
    }
    .search{
        /* margin: 83px 0 0;
        padding: 0 24px; */
        margin: 1.11rem 0 0;
        padding: 0 .32rem;
    }
    input{
        padding: 0;
        margin: 0;
        /* width: 578px;
	    height: 56px; */
        width: 7.71rem;
        height: .75rem;
        box-sizing: border-box;
        box-shadow: 0px 1px 21px 0px rgba(221, 221, 221, 0.75);
        border: none;
        /* border-radius: 28px; */
        border-radius: .37rem;
        vertical-align: top;
        /* padding: 0 59px;
        font-size: 24px; */
        padding: 0 .79rem;
        font-size: .32rem;
        letter-spacing: 1px;
        color: #4c4c4c;
        background-image: url(/static/icon.png);
        background-repeat: no-repeat;
        /* background-position: center left 20px;
        background-size: 25px 25px; */
        background-position: center left .27rem;
        background-size: .33rem .33rem;
    }
    input::placeholder{
        /* font-size: 24px; */
        font-size: .32rem;
        letter-spacing: 1px;
        color: #cccccc;
    }
    .button{
        display: inline-block;
        /* width: 100px;
        height: 56px; */
        width: 1.33rem;
        height: .75rem;
        background-image: linear-gradient(90deg,#2b51a2 0%,#3f91cf 100%),linear-gradient(#2f9bff,#2f9bff);
        background-blend-mode: normal,normal;
        box-shadow: 0px 7px 16px 0px rgba(54, 115, 186, 0.35);
        /* border-radius: 28px;
        font-size: 24px; */
        border-radius: .37rem;
        font-size: .32rem;
        letter-spacing: 1px;
        color: #ffffff;
        line-height: .75rem;
        vertical-align: top;
        text-align: center;
    }
    .inset{
        display: block;
        /* width: 404px;
        height: 252px; 
        margin: 200px auto 0; */
        width: 5.39rem;
        height: 3.36rem; 
        margin: 2.67rem auto 0;
    }
</style>
