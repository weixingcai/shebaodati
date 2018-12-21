<template>
    <div>
        <van-nav-bar
            title="标题"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script>
export default {
    name:'',
    data(){
        return {

        }
    },
    created(){
        console.log(this.$route);
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
