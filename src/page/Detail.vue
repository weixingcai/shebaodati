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
                <p>aaaa</p>
            </div>
        </div>
        <list-item 
            v-for="(item,index) of list" 
            :key="index" 
            :title="item.title"
        />
    </div>
</template>

<script>
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
            title:'',
            list:[
                {
                    title:'行政村（大队）交15年（征地）保险什么时候可以办退休？'
                },
                {
                    title:'社保卡丢了，养老金发哪儿？'
                },
                {
                    title:'判刑人员还能领养老金吗？（监外执行，社区看管的，吸了毒在社区戒毒的，养老金会停吗？）'
                },
                {
                    title:'城乡退休之后还能交“五七工”保险吗？'
                },
            ]
        }
    },
    created(){
        console.log(this.$route);
        this.title = decodeURIComponent(this.$route.query.text);
    },
    methods:{
        onClickLeft:function(){
            this.$router.go(-1);
        }
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to,from);
        this.title = decodeURIComponent(to.query.text);
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
    .asnwer-inner>p{
        font-size: 12px;
	    color: #4c4c4c;
    }
</style>
