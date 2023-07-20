<template>
    <div class="flex items-center justify-around w-full">
        <TweetItemActionsIcon :color="'blue'">
            <template v-slot:icon="{classes}">
                <ChatBubbleOvalLeftIcon :class="classes"/>
            </template>
             <template v-slot:default>{{ props.tweet.repliesCount }}</template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon :color="'green'">
                <template v-slot:icon="{ classes }">
                    <ArrowPathRoundedSquareIcon :class="classes"/>
                </template>
                 <template v-slot:default>{{ generationRandomNumber() }}</template>
            </TweetItemActionsIcon>
            <TweetItemActionsIcon :color="'red'">
                <template v-slot:icon="{ classes }">
                    <HeartIcon :class="classes"/>
                </template>
                 <template v-slot:default>{{ generationRandomNumber() }}</template>
            </TweetItemActionsIcon>
            <TweetItemActionsIcon :color="'blue'">
                <template v-slot:icon="{ classes }">
                    <ArrowDownTrayIcon :class="classes"/>
                </template>
                 <template v-slot:default>{{ generationRandomNumber() }}</template>
            </TweetItemActionsIcon>
    </div>
</template>
<script setup>
import { ChatBubbleOvalLeftIcon, HeartIcon, ArrowDownTrayIcon, ArrowPathRoundedSquareIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
    tweet:{
        type: Object,
        required: true
    }
})
function generationRandomNumber(){
    return Math.floor(Math.random() *100)
}
</script>