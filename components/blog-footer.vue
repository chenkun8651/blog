<template>
  <footer class="flex mt-10 text-center">
    <div
      class="max-w-6xl mx-auto py-8 border-t border-gray-300 dark:border-gray-800"
    >
      <p class="my-2 text-base text-secondary tracking-wide">代码注入生活</p>
      <p class="my-2 text-base font-serif text-secondary tracking-wide">
        Inject Code Into Life
      </p>
      <div class="my-2 flex items-center justify-center">
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