<template>
    <div class="list-item van-hairline--bottom" @click="toDetail(title)">
        <p>{{title}}</p>
    </div>
</template>

<script>
export default {
    name:'list-item',
    props:{
        title:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        toDetail(text){
            this.$router.push({
                name:'Detail',
                query:{
                    text:encodeURIComponent(text),
                }
            })
        }
    },
}
</script>

<style scoped>
    .list-item{
        padding: 12.5px;
    }
    .list-item>p{
        font-size: 13px;
        line-height: 17px;
        letter-spacing: 1px;
        color: #4c4c4c;
    }
</style>
