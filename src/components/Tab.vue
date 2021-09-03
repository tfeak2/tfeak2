<template>
    <div @click="isEnabled = !isEnabled" class="toggle">
        <i class="icon" :class="icon"></i> {{name}} <i :style="`transform: rotate(${isEnabled ? '0' : '-90'}deg);`" id="dropdown" class="fas fa-sort-down"></i>
    </div>
    <div class="tabs" v-if="isEnabled">
        <div v-for="link in links" :key="link.name" class="tab">
            <Link :to="link.to" :name="link.name" :icon="link.icon"/>
        </div>
    </div>
</template>
<script>
import Link from './Link'
export default {
    props: {
        links: Array,
        icon: String,
        name: String,
    },
    components: {
        Link,
    },
    data(){
        return {
            isEnabled: false,
        }
    }
}
</script>
<style scoped>
    .tabs{
        margin-right: 0;
        padding-left: 0.5em;
        padding-bottom: 0.5em;
        padding-top: 0.3em;
        background-color: #26272C;
        border-top-left-radius: 0.5em;
        border-bottom-left-radius: 0.5em;
    }
    .tab{
        display: flex;
        flex-direction: column;
    }
    .toggle{
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
       cursor: pointer;
   }
   .icon{
       flex-shrink: 0;
        width: 25px;
        margin-right: 10px;
   }
   #dropdown{
       cursor: pointer;
       text-align: center;
       transition: 0.1s ease;
       font-size: 1em;
       padding: 0;
       margin: 0;
       transform-origin: center;
       margin-left: 2em;
   }
</style>