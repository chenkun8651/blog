<template>
  <aside class="relative lg:w-1/3 xl:w-1/4 py-5 lg:pt-10 lg:pd-0">
    <div class="flex items-center sticky top-28 left-0">
      <img
        class="flex-none select-none rounded-full shadow-xl mr-8 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
        src="../assets/img/avatar.png"
      />
      <div class="text-sm font-semibold">
        <p>天青色等烟雨~</p>
        <p>而我在等你~</p>
        <div class="flex items-center mt-3">
          <Github></Github>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";

import Github from "./svg-components/github.vue";

export default Vue.extend({
  components: {
    Github,
  },
});
</script>