<template>
    <div class="container">
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
    name:'index',
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
        width: 340.5px;
        height: 148.5px;
        
        background-image: url(/static/img/logo-bg.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .logo-img{
        display: block;
        width: 220px;
	    height: 70px; 
        margin: auto;
        padding: 55px 0 0; 
    }
    .search{
        font-size: 0;
        margin: 41.5px 0 0;
        padding: 0 12px; 
    }
    input{
        padding: 0;
        margin: 0;
        width: 289px;
	    height: 28px;
        box-sizing: border-box;
        box-shadow: 0px 1px 21px 0px rgba(221, 221, 221, 0.75);
        border: none;
        border-radius: 14px; 
        vertical-align: top;
        padding: 0 29.5px;
        font-size: 12px;
        letter-spacing: .5px;
        color: #4c4c4c;
        background-image: url(/static/img/icon.png);
        background-repeat: no-repeat;
        background-position: center left 10px;
        background-size: 12.5px 12.5px;
    }
    input::placeholder{
        font-size: 12px;
        letter-spacing: .5px;
        color: #cccccc;
    }
    .button{
        display: inline-block;
        width: 50px;
        height: 28px; 
        background-image: linear-gradient(90deg,#2b51a2 0%,#3f91cf 100%),linear-gradient(#2f9bff,#2f9bff);
        background-blend-mode: normal,normal;
        box-shadow: 0px 7px 16px 0px rgba(54, 115, 186, 0.35);
        border-radius: 14px;
        font-size: 12px;
        letter-spacing: .5px;
        color: #ffffff;
        line-height: 30px;
        vertical-align: top;
        text-align: center;
        margin-left: 12px;
    }
    .inset{
        display: block;
        width: 202px;
        height: 126px; 
        margin: 100px auto 0;
    }
</style>
