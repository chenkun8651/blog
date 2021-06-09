<template>
  <header class="flex items-center py-6 md:py-8 lg:py-10 xl:py-12">
    <h1 class="text-4xl font-bold">
      <NuxtLink to="/">chenkun8651</NuxtLink>
    </h1>
    <div class="flex-1"></div>
    <div
      class="
        relative
        mr-2
        w-8
        h-8
        overflow-hidden
        transition-colors
        rounded
        cursor-pointer
        text-gray-600
        hover:bg-gray-200
        dark:text-primary
        dark:hover:bg-gray-800
      "
    >
      <NuxtLink
        class="absolute inset-0 flex items-center justify-center"
        to="/"
      >
        <Home></Home>
      </NuxtLink>
    </div>
    <div
      class="
        relative
        w-8
        h-8
        overflow-hidden
        transition-colors
        rounded
        cursor-pointer
        text-gray-600
        hover:bg-gray-200
        dark:text-primary
        dark:hover:bg-gray-800
      "
      @click="onToggle()"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <LightDay v-show="themeState === 'dark'"></LightDay>
        <NightDay v-show="themeState === 'light'"></NightDay>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import LightDay from "../components/svg-components/light-day.vue";
import NightDay from "../components/svg-components/night-day.vue";
import Home from "../components/svg-components/home.vue";

export default Vue.extend({
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
      themeState: "light" as string,
    };
  },
  components: {
    LightDay,
    NightDay,
    Home,
  },
  methods: {
    onToggle(): void {
      this.themeState = this.themeState === "light" ? "dark" : "light";
      document.documentElement.className = this.themeState;
    },
  },
});
</script>
