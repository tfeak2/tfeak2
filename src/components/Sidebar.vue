<template>
    <div class="sidebar">
        <Link to="./" name="Home" icon="fas fa-home" />
        <Link to="./About" name="About" />
    </div>
</template>
<script>
import Link from './Link'
export default {
    components: {
        Link,
    },
    setup() {
        
    }, 
}
</script>
<style scoped>
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