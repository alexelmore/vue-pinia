
<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Introduction -->
    <AppIntroduction />

    <!-- Main Content -->
    <AppMainContent />

    <!-- Player -->
    <AppPlayer />

    <!-- Auth Modal -->
    <AuthModal />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppIntroduction from './components/AppIntroduction.vue';
import AppMainContent from './components/AppMainContent.vue';
import AppPlayer from './components/AppPlayer.vue';
import AuthModal from './components/AuthModal.vue';
export default {
  name: 'App',
  components: { AppHeader, AppIntroduction, AppMainContent, AppPlayer, AuthModal }
}

</script>