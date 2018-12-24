<template>
    <div class="container">
        <van-nav-bar
            title="留言"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="title van-hairline--bottom">
            <p>社保分中心电话</p>
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
        padding: 19px 12px;
    }
    .title>p{
        height: 13px;
        line-height: 13px;
        vertical-align: middle;
        font-size: 13px;
        letter-spacing: 1px;
	    color: #4c4c4c;
    }
</style>
