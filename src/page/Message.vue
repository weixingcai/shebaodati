<template>
    <div class="container">
        <van-nav-bar
            title="留言"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="title">
            <p>如果您需要更精准的个性化服务，请留下您的姓名和电话。您的姓名与电话将仅用于本次社保为您提供精准咨询服务。</p>
        </div>
        <div class="form">
            <input type="text" placeholder="请输入您的姓名" class="input1">
            <input type="text" placeholder="请输入您的电话号码" class="input2">
            <textarea placeholder="请输入您的问题，我们会为您解答"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name:'message',
    data(){
        return {
            
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    .title{
        padding: 19px 12px 23px;
    }
    .title>p{
        line-height: 20px;
        vertical-align: middle;
        font-size: 13px;
        letter-spacing: .5px;
	    color: #4c4c4c;
        font-weight: 700;
    }
    .form{
        padding: 0 12px;
    }
    .form input{
        width: 100%;
        height: 30px;
        border: none;
        box-shadow: 0px 1px 21px 0px 
		rgba(221, 221, 221, 0.75);
	    border-radius: 15px;
        margin-bottom: 12px;
        box-sizing: border-box;
        padding: 0 0 0 30px;
        font-size: 12px;
    }
    .form input::placeholder{
        font-size: 12px;
        color: #cccccc;
    }
    .input1{
        background-image: url(/static/img/head.png);
        background-repeat: no-repeat;
        background-position: left 13px center;
        background-size: 10px 12px;
    }
    .input2{
        background-image: url(/static/img/phone.png);
        background-repeat: no-repeat;
        background-position: left 13px center;
        background-size: 9px 12px;
    }
    .form textarea{
        width: 100%;
        height: 125px;
        box-sizing: border-box;
        padding: 10px 30px;
        margin: 0;
        box-shadow: 0px 1px 21px 0px rgba(221, 221, 221, 0.75);
	    border-radius: 14px;
        border: none;
        resize: none;
        font-size: 12px;
        background-image: url(/static/img/query.png);
        background-repeat: no-repeat;
        background-position: left 13px top 14px;
        background-size: 11px 11px;
    }
    .form textarea::placeholder{
        font-size: 12px;
        color: #cccccc;
    }
</style>
