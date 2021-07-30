<template>
  <div class="mb-5 p-2">
    <div class="mb-2 flex items-center justify-start">
      <div class="flex items-center">
        <Date></Date>
        <div
          class="
            ml-1
            mr-3
            text-sm text-gray-600
            hover:text-gray-900
            dark:text-gray-200
            dark:hover:text-gray-50
          "
        >
          {{ this.$dayjs(issueItem.createdAt).format("YYYY年 MM月DD日") }}
        </div>
      </div>
      <div class="text-xl text-gray-100">
        <div
          class="px-2 rounded"
          v-for="(value, index) in issueItem.labels.nodes"
          :key="index"
          :style="{ backgroundColor: '#' + value.color }"
        >
          <NuxtLink :to="`/label/${value.name}`">
            {{ value.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <h1 class="text-2xl underline transition duration-500 hover:text-blue-500">
      <NuxtLink :to="`/issue/${issueItem.number}`">
        {{ issueItem.title }}
      </NuxtLink>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Date from "../components/svg-components/date.vue";

export default Vue.extend({
  props: {
    issueItem: {
      type: Object,
      required: true,
    },
  },
  components: {
    Date,
  },
});
</script>