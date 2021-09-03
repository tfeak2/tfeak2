<template>
    <router-link :to="to">
        <i class="icon" :class="icon" />{{name}}
    </router-link>
</template>
<script>
export default {
    props: {
        to: String,
        icon: String,
        name: String,
    },
    setup() {
        
    },
}
</script>
<style scoped>
   a{
       text-decoration: none;
       text-align: left;
       color: white;
       border: none;
       margin: 0;
       border-top-left-radius: 0.5em;
       border-bottom-left-radius: 0.5em;
       padding: 0.4em;
       margin-top: 0.2em;
       font-weight: medium;
   }
   a:hover:not(.router-link-active){
       background-color: #474954;
   }
   .router-link-active{
       background-color: white;
       color: #383A42;
   }
   .icon{
       flex-shrink: 0;
        width: 25px;
        margin-right: 10px;
   }
</style>