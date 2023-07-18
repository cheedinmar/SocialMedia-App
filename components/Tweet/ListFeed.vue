<template>
    <div>
        <h1>
            List feed
        </h1>
        <ul>
            <li v-for="tweet in props.tweets">{{ tweet }}</li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps({
    tweets:{
        type: Array,
        required:true
    }
})
</script>