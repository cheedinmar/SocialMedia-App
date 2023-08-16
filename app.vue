<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <LoadingPage v-if="isAuthLoading" />


      <!--app-->
      <div class="min-h-full" v-else-if="user">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg-max-w-7xl lg:px-8 lg:gap-5">
          <!--Left Side bar-->
          <div class="md:block hidden xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft @on-tweet="handleOpenTweetModal"/>
            </div>
          </div>
          <!--Main content-->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <router-view />
          </main>
          <!--Right Side bar-->
          <div class="md:block hidden col-span-12 md:col-span-3 xl:col-span-4">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>

      <AuthPage v-else />
      <UIModal :isOpen="postTweetModal" @on-close="handleModalClose">
        <TweetForm :user="user" @on-success="handleFormSuccess"/>
      </UIModal>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(false);
const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const isAuthLoading = useAuthLoading()
// console.log(useAuthUser);
const user = useAuthUser();
const { closePostTweetModal, usePostTweetModal, openPostTweetModal } = useTweets();
const postTweetModal = usePostTweetModal()
onBeforeMount(() => {
  initAuth()
})
function handleFormSuccess(){
 closePostTweetModal()
}
function handleModalClose(){
  closePostTweetModal()
}
function handleOpenTweetModal(){
  openPostTweetModal()
}

</script>
