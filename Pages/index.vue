<template>
    <div>
        <MainSection title="Home" :loading="loading">
            <Head>
                <Title>Home / Twitter</Title>
            </Head>
            <div class="border-b " :class="twitterBorderColor">
                <TweetForm :user="user" @on-success="handleFormSuccess"/>
            </div>
            <TweetListFeed  :tweets="homeTweets"/>
       
        </MainSection>
    </div>
</template>
<script setup>
const { twitterBorderColor} = useTailwindConfig()
const {getTweet} = useTweets();
const homeTweets = ref([
    {
        2:2
    },
])
const loading = ref(false)
const {useAuthUser} = useAuth();
const user = useAuthUser()
function handleFormSuccess(tweet) {
    navigateTo({
        path: `/status/${tweet.id}`
    })
    window.location.href = `/status/${tweet.id}`
    //window.location.reload()
}
onBeforeMount(async()=>{
    loading.value = true
    try{
       const {tweets} =  await getTweet()
       homeTweets.value = tweets
    }catch(error){
    }finally{
        loading.value = false
    }
})
</script>