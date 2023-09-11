<template>
    <div class="flex items-center justify-around w-full">
        <TweetItemActionsIcon :color="'blue'" :size="size" @on-click="emits('onCommentClick')">
            <template v-slot:icon="{ classes }">
                <ChatBubbleOvalLeftIcon :class="classes" />
            </template>
            <template  v-if="showStats" v-slot:default>{{ props.tweet.repliesCount }}</template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon :color="'green'" :size="size">
            <template v-slot:icon="{ classes }">
                <ArrowPathRoundedSquareIcon :class="classes" />
            </template>
            <template  v-if="showStats" v-slot:default>{{ generationRandomNumber() }}</template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon :color="'red'" :size="size">
            <template v-slot:icon="{ classes }">
                <HeartIcon :class="classes" />
            </template>
            <template  v-if="showStats" v-slot:default>{{ generationRandomNumber() }}</template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon :color="'blue'" :size="size">
            <template  v-slot:icon="{ classes }">
                <ArrowDownTrayIcon :class="classes" />
            </template>
            <template v-if="showStats" v-slot:default>
                    {{ generationRandomNumber() }}
                </template>
        </TweetItemActionsIcon>
    </div>
</template>
<script setup>
import { ChatBubbleOvalLeftIcon, HeartIcon, ArrowDownTrayIcon, ArrowPathRoundedSquareIcon } from "@heroicons/vue/24/outline";
const emits = defineEmits(['onCommentClick'])
const props = defineProps({
    tweet: {
        type: Object,
        required: true
    },
    compact: {
        type: Boolean,
        required: false
    },
})
function generationRandomNumber() {
    return Math.floor(Math.random() * 100)
}
const showStats = computed(()=> props.compact)
const size = computed(() => props.compact ? 5 :8)
</script>