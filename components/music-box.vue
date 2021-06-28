<template>
  <div class="container">
    <!-- <audio src="./../assets/audio/cs.mp3"></audio> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async mounted() {
    const params = {
      phone: "15208102681",
      password: "783c8eb6f403c46e60fdb10d133aeb0b",
    };
    // const user = await this.$api.musicLoginByPhone(params);
    // console.log(user);
  },
});
</script>