<template>
  <aside class="relative lg:w-1/3 xl:w-1/4 py-5 lg:pt-10 lg:pd-0">
    <div class="flex items-center sticky top-28 left-0">
      <img
        class="
          flex-none
          select-none
          rounded-full
          shadow-xl
          mr-8
          w-16
          h-16
          lg:w-20
          lg:h-20
          xl:w-24
          xl:h-24
        "
        src="~images/avatar.png"
      />
      <div class="text-sm font-semibold">
        <p>欢迎来到我博客~</p>
        <p>better late than never~</p>
        <div class="flex items-center mt-3">
          <a href="https://github.com/chenkun8651" target="_blank">
            <Github></Github>
          </a>
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