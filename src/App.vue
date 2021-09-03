<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" referrerpolicy="no-referrer" />
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
  color: #383A42;
}

#content{
  padding-left: 14em;
  
}
.content{
  text-align: left;
  padding-left: 5em;
  padding-right: 5em;
}
.LD{
        border-top-left-radius: 0.5em;
        border-bottom-left-radius: 0.5em;
    }
.RD{
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
  }
</style>
