<template>
  <div>
    <div class="flex items-center justify-start mb-3">
      <div class="mr-4 text-base">
        {{ this.$dayjs(issueItem.updatedAt).format("YYYY年 M月D日") }}
      </div>
      <div>
        <div
          class="p-0.5 text-white rounded-lg bg-opacity-50"
          v-for="(value, index) in issueItem.labels.nodes"
          :key="index"
          :style="{ backgroundColor: '#' + value.color }"
        >
          {{ value.name }}
        </div>
      </div>
    </div>
    <h1>
      <NuxtLink :to="`/issue/${issueItem.number}`">
        {{ issueItem.title }}
      </NuxtLink>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async created() {
    console.log(this.issueItem);
  },
  props: {
    issueItem: {
      type: Object,
      required: true,
    },
  },
});
</script>