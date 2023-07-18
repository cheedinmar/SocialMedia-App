<template>
    <div>
        <MainSection title="Home" :loading="loading">
            <Head>
                <Title>Home / Twitter</Title>
            </Head>
            <div class="border-b " :class="twitterBorderColor">
                <TweetForm :user="user"/>
            </div>
            <TweetListFeed  :tweets="homeTweets"/>
       
        </MainSection>
    </div>
</template>
<script setup>
const { twitterBorderColor} = useTailwindConfig()
const {getHomeTweet} = useTweets()
const homeTweets = ref([
    {
        2:2
    },
])
const loading = ref(false)
const {useAuthUser} = useAuth();
const user = useAuthUser()
onBeforeMount(async()=>{
    loading.value = true
    try{
        await getHomeTweet()
    }catch(error){
        console.log(error)
    }finally{
        loading.value = false
    }
})
</script>