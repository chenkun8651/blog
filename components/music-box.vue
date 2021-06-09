<template>
  <div id="aplayer"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async mounted() {
    const params = {
      phone: "15208102681",
      password: "chenkun@0508",
    };
    const user = await this.$api.musicLoginByPhone(params);
    console.log(user);
  },
});
</script>