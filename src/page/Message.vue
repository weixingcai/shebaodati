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
        <div class="button">
            <div class="button-submit">提交</div>
            <div class="button-phone" @click="popupShow = true">查看社保分中心电话</div>
        </div>
        <van-popup v-model="popupShow" overlay-class="popup-class" :close-on-click-overlay="false" :lazy-render="true">
            <div class="popup-inner-top">
                <p>社保分中心电话</p>
            </div>
            <div class="popup-inner-bottom">
                <div class="popup-inner-bottom-item" v-for="(item,index) of phoneList" :key="index" :class="{'van-hairline--bottom':index != phoneList.length - 1}">
                    <p>
                        <span>{{item.name}}</span>
                        <span>{{item.phone}}</span>
                    </p>
                </div>
            </div>
            <img src="/static/img/close.png" alt="" class="popup-close" @click="popupShow = false">
        </van-popup>
    </div>
</template>

<script>
export default {
    name:'message',
    data(){
        return {
            popupShow:false,
            phoneList:[{
                name:'和平分中心',
                phone:'27825003'
            },{
                name:'河东分中心',
                phone:'24237629'
            },{
                name:'河西分中心',
                phone:'88271220'
            },{
                name:'南开分中心',
                phone:'27686925'
            },{
                name:'河北分中心',
                phone:'26292934'
            },{
                name:'红桥分中心',
                phone:'86520332'
            },{
                name:'东丽分中心',
                phone:'24967594'
            },{
                name:'西青分中心',
                phone:'27393099'
            },{
                name:'津南分中心',
                phone:'28391766'
            },{
                name:'北辰分中心',
                phone:'26393702'
            },{
                name:'塘沽分中心',
                phone:'25863767'
            },{
                name:'汉沽分中心',
                phone:'67132681'
            },{
                name:'大港分中心',
                phone:'25994704'
            },{
                name:'开发区分中心',
                phone:'66370790'
            },{
                name:'保税区分中心',
                phone:'84906499'
            },{
                name:'高新区分中心',
                phone:'83717220'
            },{
                name:'武清分中心',
                phone:'29393770'
            },{
                name:'宝坻分中心',
                phone:'29998820'
            },{
                name:'静海分中心',
                phone:'28941931'
            },{
                name:'蓟县分中心',
                phone:'22772003'
            },{
                name:'宁河分中心',
                phone:'69116207'
            }],
            switchPosition:false
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1);
        },
        handleFocus(){
            console.log('ok');
        }
    }
}
</script>

<style scoped>
    .title{
        padding: 19px 12px 19px;
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
        font-size: 0;
    }
    input{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 30px;
        border: none;
        box-shadow: 0px 1px 21px 0px rgba(221, 221, 221, 0.75);
	    border-radius: 15px;
        margin-bottom: 12px;
        box-sizing: border-box;
        padding: 10px 0 10px 30px;
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
    .button{
        width: 100%;
        box-sizing: border-box;
        padding: 0 12px;
        /* position: relative;
        bottom: 45px; */
        
    }
    .button-submit{
        width: 231px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        vertical-align: middle;
        margin: auto;
        border-radius: 17.5px;
        background-image: linear-gradient(90deg,#2b51a2 0%,#3f91cf 100%),linear-gradient(#2f9bff,#2f9bff);
	    background-blend-mode: normal,normal;
        box-shadow: 0px 7px 16px 0px rgba(54, 115, 186, 0.35);
        font-size: 12px;
        letter-spacing: .5px;
	    color: #ffffff;
    }
    .button-phone{
        text-align: center;
        font-size: 13px;
        letter-spacing: .5px;
        color: #2b51a2;
        margin-top: 24.5px;
    }
    .popup-inner-top{
        width: 327px;
        height: 45px;
        background-color: #2b51a2;
        border-radius: 15px 15px 0 0;
        position: relative;
    }
    .popup-inner-top>p{
        text-align: center;
        color: #ffffff;
        letter-spacing: .5px;
        font-size: 13px;
        height: 45px;
        line-height: 45px;
        vertical-align: middle;
    }
    .popup-inner-bottom{
        width: 327px;
        border-radius: 0 0 15px 15px;
        background-color: #ffffff;
    }
    .popup-inner-bottom-item{
        display: inline-block;
        width: 50%;
        vertical-align: top;
    }
    .popup-inner-bottom-item>p{
        font-size: 0;
    }
    .popup-inner-bottom-item>p>span{
        display: inline-block;
        width: 50%;
        font-size: 12px;
        line-height: 12px;
        text-align: center;
        padding: 12px 0;
        box-sizing: border-box;
    }
    .popup-close{
        position: absolute;
        top: 0px;
        left: 50%;
        width: 35px;
        height: 25px;
        margin-left: -17.5px;
    }
</style>
