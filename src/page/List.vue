<template>
    <div class="container">
        <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <question :title="title"></question>
        <list-item 
            v-for="(item,index) of list" 
            :key="index" 
            :title="item.question_title"
            :id="item.id"
        />
        <div class="more-question" v-if="level == 1">
            <div class="more-question-button" @click="getAllQuestions(title)">查看更多问题</div>
        </div>
        <div class="search-again" v-if="level == 2">
            <div class="search-again-left">
                <div class="search-again-left-button" @click="onClickLeft">重新查询</div>
            </div>
            <div class="search-again-right">
                <div class="search-again-right-button">
                    <div class="search-again-right-button-inner" @click="toMessage">留言</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ajaxPost } from '@/ajax/ajax.js'
import Question from '@/components/Question'
import listItem from '@/components/ListItem'
export default {
    name:'list',
    components: {
        Question,
        listItem
    },
    data(){
        return {
            title:'',
            list:[],
            level:1
        }
    },
    created(){
        // console.log(this.$route);
        this.title = decodeURIComponent(this.$route.query.text);
        this.getQuestions(this.title);
    },
    methods:{
        getQuestions(question){
            ajaxPost('/index/index/getQuestions',{
                question:question
            },(res)=>{
                console.log(res);
                if (res.data.code == 1005) {
                    this.list = res.data.data;
                }else{

                }
            },(err)=>{
                console.log(err);
            });
        },
        getAllQuestions(question){
            ajaxPost('/index/index/getAllQuestions',{
                question:question
            },(res)=>{
                console.log(res);
                if (res.data.code == 1005) {
                    this.list = res.data.data;
                    this.level = 2;
                }else{

                }
            },(err)=>{
                console.log(err);
            });
        },
        onClickLeft(){
            this.$router.push({
                path:'/index'
            });
        },
        toMessage(){
            this.$router.push({
                name:'Message',
            });
        }
    }
}
</script>

<style scoped>
    .more-question{
        padding: 35px 0;
    }
    .more-question-button{
        width: 200px;
        height: 35px;
        border-radius: 17.5px;
        background-image: linear-gradient(90deg,#2b51a2 0%,#3f91cf 100%),linear-gradient(#2f9bff,#2f9bff);
	    background-blend-mode: normal,normal;
        box-shadow: 0px 7px 16px 0px rgba(54, 115, 186, 0.35);
        margin: auto;
        text-align: center;
        line-height: 37px;
        vertical-align: middle;
        font-size: 12px;
        letter-spacing: .5px;
	    color: #ffffff;
    }
    .search-again{
        font-size: 0;
        padding: 35px 0;
    }
    .search-again-left,
    .search-again-right{
        display: inline-block;
        width: 50%;
        font-size: 16px;
        vertical-align: top;
    }
    .search-again-left-button{
        width: 150px;
        height: 35px;
        margin: auto;
        text-align: center;
        line-height: 37px;
        vertical-align: middle;

        background-image: linear-gradient(90deg,#2b51a2 0%,#3f91cf 100%),linear-gradient(#2f9bff,#2f9bff);
	    background-blend-mode: normal,normal;
	    box-shadow: 0px 7px 16px 0px rgba(54, 115, 186, 0.35);
        border-radius: 17.5px;
        
        font-size: 12px;
        letter-spacing: .5px;
	    color: #ffffff;
    }
    .search-again-right-button{
        width: 150px;
        height: 35px;
        margin: auto;
        text-align: center;
        line-height: 35px;
        vertical-align: middle;

        border-radius: 17.5px;
        box-sizing: border-box;
        box-shadow: 0px 7px 16px 0px rgba(54, 115, 186, 0.35);
        background-image: linear-gradient(90deg,#2b51a2 0%,#3f91cf 100%);
        
        padding: 2px;
    }
    .search-again-right-button-inner{
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        border-radius: 17.5px;
        font-size: 12px;
        letter-spacing: .5px;
	    color: #2b51a2;
    }
</style>
