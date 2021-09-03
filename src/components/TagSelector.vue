<template>
    <form @submit="onSubmit">
        <input v-model="newTagName" placeholder="add subreddit" type="text">
        <input class="submit" type="submit" value="submit">
    </form>
    <div class="tags" v-for="tag in tags" :key="tag">
        <div class="tag"><div class="text">{{tag}}</div><i @click="$emit('delete-tag', tag)" class="fas fa-times"></i></div>
    </div>
</template>
<script>
export default {
    name: "TagSelector",
    props: {
        tags: Array,
    },
    data(){
        return {
            newTagName: "",
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault();
            this.$emit("new-tag", this.newTagName);
            this.newTagName = "";
        }
    }
}
</script>
<style scoped>
    form{
        margin-bottom: 2px;
    }
    .tag{
        display: flex;
        background-color: #4C4D57;
        color: white;
        padding: 0.2em;
        border-radius: 0.5em;
        width: 11em;
        margin-bottom: 2px;
    }
    i{
        margin-left: 10px;
        margin-right: 8px;
        cursor: pointer;
        text-align: left;
    }
    input{
        border: 2px solid #4C4D57;
        width: 8em;
        margin-right: 3px;
        border-radius: 0.5em;
        padding: 0.2em;
        
    }
    .submit{
        width: 4.5em;
        
        background-color: #7CDEDC;
        color: #4C4D57;
        cursor: pointer;
    }
    .text{
        text-align: left;
        width: 170px;
    }
</style>