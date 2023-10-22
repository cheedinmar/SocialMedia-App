<template>
    <div>
        <MainSection title="Search" :loading="loading">

            <Head>
                <Title>Search</Title>
            </Head>


            <TweetListFeed :tweets="searchTweets" />

        </MainSection>
    </div>
</template>
<script setup>
const { getTweet: getTweetsComposable } = useTweets()

const loading = ref(false)
const searchTweets = ref([])
const searchQuery2 = useRoute().query.q

watch(() => useRoute().fullPath, () => {
    getTweets()
})


onBeforeMount(() => {
    getTweets()
})

async function getTweets() {
    loading.value = true
    const searchQuery = useRoute().fullPath.match(/q=([^&]+)/)[1]
    try {
        const { tweets } = await getTweetsComposable({
            query: searchQuery
        })


        searchTweets.value = tweets
    } catch (error) {
    } finally {
        loading.value = false
    }
}


</script>