<template>
    <button class="LD" @click="$emit('toggle-type', 'hot')" :id="activeTypes.includes('hot')">Hot</button>
    <button @click="$emit('toggle-type', 'top')" :id="activeTypes.includes('top')">Top</button>
    <button @click="$emit('toggle-type', 'rising')" :id="activeTypes.includes('rising')">Rising</button>
    <button class="RD" @click="$emit('toggle-type', 'new')" :id="activeTypes.includes('new')">New</button>
</template>
<script>
export default {
    name: "TypeSelector",
    props: {
        activeTypes: Array,
    }
}
</script>
<style scoped>
    button{
        border: none;
        border-top: 2px solid #4C4D57;
        border-bottom: 2px solid #4C4D57;
        border-radius: none;
        margin-bottom: 2px;
        background-color: #4C4D57;
        color: #F0F7EE;
        cursor: pointer;
        width: 50px;
        height: 25px;
    }
    #true{
        background-color: #7CDEDC;
        color: #4C4D57;
    }
    .LD{
        border-left: 2px solid #4C4D57;
    }
    .RD{
        border-right: 2px solid #4C4D57;
    }
</style>