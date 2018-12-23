<template>
    <div>
        <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return {
            title:'',
        }
    },
    created(){
        console.log(this.$route);
        this.title = decodeURIComponent(this.$route.query.text);
    },
    methods:{
        onClickLeft(){
            this.$router.push({
                path:'/index'
            });
        }
    }
}
</script>

<style scoped>

</style>
