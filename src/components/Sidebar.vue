<template>
    <div class="sidebar">
        <p>tfeak2</p>
        <Link to="./" name="Home" icon="fas fa-home" />
        <Tab :links="swapShoot" name="Swap Shoot" icon="fas fa-retweet" />
        <Link to="./RandReddit" name="Rand Reddit" icon="fas fa-random" />
        <Link to="./Vote" name="Campaign" icon="fas fa-vote-yea" />
    </div>
</template>
<script>
import Link from './Link'
import Tab from './Tab'
export default {
    components: {
        Link,
        Tab,
    },
    setup() {
        
    },
    data(){
        return {
            swapShoot: [
                {
                    to: "/SwapShoot",
                    name: "Swap Shoot",
                    icon: "fas fa-retweet",
                },
                {
                    to: "/SwapShootPrivacy",
                    name: "Privacy",
                    icon: "fas fa-address-card",
                },
            ],
        }
    }
}
</script>
<style scoped>
    p{
        font-size: 2em;
        font-weight: 600;
        margin: 0;
        padding: 0.25em 0;
    }
    img{
        height: 2.5em;
    }
    .logo {
        
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .sidebar {
        width: 11em;
        color: white;
        background-color: #383A42;

        float: left;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0;
        padding-left: 0.5em;

        transition: 0.3s ease;

        display: flex;
        flex-direction: column;
    }
</style>