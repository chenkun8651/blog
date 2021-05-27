<template>
  <footer class="flex mt-8 text-center">
    <div
      class="container mx-auto max-w-6xl py-6 border-t border-gray-300 dark:border-gray-800"
    >
      <p class="py-1 text-sm font-bold">代码注入生活</p>
      <p class="py-1 text-sm font-serif tracking-wide">Inject Code Into Life</p>
      <div class="py-1 flex items-center justify-center">
        <Github></Github>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

import Github from "../components/svg-components/github.vue";

export default Vue.extend({
  components: {
    Github,
  },
});
</script>