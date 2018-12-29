<template>
    <div class="question van-hairline--bottom">
        <p>{{title}}</p>
    </div>
</template>

<script>
export default {
    name:'question',
    props:{
        title:{
            type:String,
            required:true,
            default:''
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
    .question{
        padding: 17px 12px;
    }
    .question>p{
        line-height: 15px;
        vertical-align: middle;
        color: #4c4c4c;
        font-size: 13px;
        letter-spacing: .5px;
        padding: 0 0 0 22px;
        background-image: url(/static/img/question.png);
        background-repeat: no-repeat;
        background-position: center left;
        background-size: 15px 15px; 
    }
</style>
