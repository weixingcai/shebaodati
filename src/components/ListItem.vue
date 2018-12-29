<template>
    <div class="list-item van-hairline--bottom" @click="toDetail(id,title)">
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
        },
        id:{
            type:Number,
            required:true
        }
    },
    data(){
        return{
            
        }
    },
    created(){
        
    },
    methods:{
        toDetail(id,title){
            this.$router.push({
                name:'Detail',
                query:{
                    id:encodeURIComponent(id),
                    text:encodeURIComponent(title),
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
        letter-spacing: .5px;
        color: #4c4c4c;
    }
</style>
