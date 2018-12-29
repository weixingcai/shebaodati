<template>
    <div class="container">
        <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <question :title="title"></question>
        <div class="answer van-hairline--bottom">
            <div class="asnwer-inner">
                <img :src="'http://shebao.ueepub.cn' + answer" alt="answer_img" class="answer-img" v-if="is_img === 1">
                <div v-html="answer" v-else></div>
            </div>
        </div>
        <list-item 
            v-for="(item,index) of list" 
            :key="index" 
            :title="item.question_title"
            :id="item.id"
        />
    </div>
</template>

<script>
import { ajaxPost } from '@/ajax/ajax.js'
import Question from '@/components/Question'
import listItem from '@/components/ListItem'
export default {
    name:'detail',
    components:{
        Question,
        listItem
    },
    data(){
        return {
            id:'',
            title:'',
            answer:'',
            is_img:0,
            list:[]
        }
    },
    created(){
        console.log(this.$route);
        this.id = decodeURIComponent(this.$route.query.id);
        this.getQuestionInfo(this.id);
    },
    methods:{
        getQuestionInfo(id){
            ajaxPost('/index/index/getQuestionInfo',{
                id:id
            },(res)=>{
                console.log(res);
                if (res.data.code == 1005) {
                    this.list = res.data.data.child_info;
                    this.title = res.data.data.question_title;
                    this.answer = res.data.data.question_answer;
                    this.is_img = res.data.data.is_img;
                }else{

                }
            },(err)=>{
                console.log(err);
            });
        },
        onClickLeft:function(){
            this.$router.go(-1);
        }
    },
    beforeRouteUpdate (to, from, next) {
        // console.log(to,from);
        this.title = decodeURIComponent(to.query.text);
        this.id = decodeURIComponent(to.query.id);
        this.getQuestionInfo(to.query.id);
        next();
    }
}
</script>

<style scoped>
    .answer{
        padding: 12px 12px 35px;
    }
    .asnwer-inner{
        padding: 12px;
        box-shadow: 0px 1px 40px 0px rgba(221, 221, 221, 0.75);
	    border-radius: 4px;
    }
    .asnwer-inner>div{
        font-size: 12px;
	    color: #4c4c4c;
    }
    .answer-img{
        display: block;
        width: 100%;
        height: auto;
        margin-bottom: 15px;
    }
</style>
