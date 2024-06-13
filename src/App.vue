<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import PWABadge from "./components/PWABadge.vue";
import ReloadPWA from "./components/ReloadPWA.vue";

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  // Stash the event so it can be triggered later.
  this.deferredPrompt = e;
});
window.addEventListener("appinstalled", () => {
  this.deferredPrompt = null;
});
function dismiss() {
  this.deferredPrompt = null;
}
function install() {
  this.deferredPrompt.prompt();
}
</script>

<template>
  <ReloadPWA />
  <v-banner v-if="deferredPrompt" color="info" dark class="text-left">
    Get our free app. It won't take up space on your phone and also works
    offline!

    <template v-slot:actions>
      <v-btn text @click="dismiss">Dismiss</v-btn>
      <v-btn text @click="install">Install</v-btn>
    </template>
  </v-banner>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/favicon.svg" class="logo" alt="vue-pwa-app logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="vue-pwa-app" />
  <PWABadge />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
