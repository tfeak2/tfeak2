<template>
    <button class="save" @click="$emit('save')"><i class="fas fa-save"></i>Save</button>
    <div v-for="slot in slots" :key="slot.id">
        <div class="slot" @click="$emit('load-slot', slot.id)"><div class="text">{{slot.id}}</div><i @click="$emit('delete-slot', slot.id)" class="fas fa-times"></i></div>
    </div>
</template>
<script>
export default {
    name: "SaveSlots",
    props: {
        slots: Array,
    }
}
</script>
<style scoped>
    .slot{
        display: flex;
        background-color: #4C4D57;
        color: white;
        width: 11em;
        padding: 0.2em;
        margin-bottom: 2px;
        cursor: pointer;
        border-radius: 0.5em;
    }
    i{
        cursor: pointer;
        text-align: left;
        margin-right: 8px;
    }
    input{
        border: 1px solid;
        width: 147px;
        margin-right: 3px;
        border-radius: none;
        
    }
    .save{
        width: 6em;
        border-radius: 0.5em;
        background-color: #7CDEDC;
        color: #4C4D57;
        cursor: pointer;
        border: 2px solid #4C4D57;
        margin-bottom: 2px;
    }
    .text{
        text-align: left;
        width: 170px;
    }
</style>