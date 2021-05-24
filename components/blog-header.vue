<template>
  <header class="flex items-center py-8 xl:py-16">
    <h1 class="text-4xl italic transform hover:translate-y-1">
      <NuxtLink to="/">chenkun8651</NuxtLink>
    </h1>
    <div class="flex-1"></div>
    <div
      class="relative overflow-hidden w-8 h-8 transition-colors rounded cursor-pointer text-gray-600 hover:bg-gray-200 dark:text-primary dark:hover:bg-gray-800"
      @click="onToggle()"
    >
      <LightDay v-show="themeState === 'dark'"></LightDay>
      <NightDay v-show="themeState === 'light'"></NightDay>
    </div>
  </header>
</template>

<script lang="ts">
import LightDay from "../components/svg-components/light-day.vue";
import NightDay from "../components/svg-components/night-day.vue";

export default {
  created() {
    if (process.browser) {
      let pref = window.matchMedia("(prefers-color-scheme: light)");
      if (pref.matches) this.themeState = "light";
      pref = window.matchMedia("(prefers-color-scheme: dark)");
      if (pref.matches) this.themeState = "dark";
      document.documentElement.className = this.themeState;
    }
  },
  data() {
    return {
      themeState: "light",
    };
  },
  components: {
    LightDay,
    NightDay,
  },
  methods: {
    onToggle() {
      this.themeState = this.themeState === "light" ? "dark" : "light";
      document.documentElement.className = this.themeState;
    },
  },
};
</script>