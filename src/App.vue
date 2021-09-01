<template>
  <head>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
  </head>
  <Sidebar />
  <router-view id="content" />
</template>
<script>
import Sidebar from "./components/Sidebar"
export default {
  components: {
    Sidebar,
  },
  setup() {
    
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content{
  padding-left: 11em;
}
</style>
