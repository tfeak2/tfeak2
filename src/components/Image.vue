<template>
    <img @click="onClick" :src="url" alt="">
</template>
<script>
export default{
    name: "Img",
    props: {
        url: String,
    },
    methods: {
        onClick(){
            this.$emit("reload");
        }
    }
}
</script>
<style scoped>
    img{
        height: 500px;
        border-radius: 10px;
        border: 2px solid #4C4D57;
        cursor: pointer;
    }
</style>