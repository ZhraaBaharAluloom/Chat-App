<template>
  <div
    id="Messages"
    class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]"
  >
    <MessageRow
      v-for="message in props.messages"
      :message="message"
      :openChat="props.openChat"
    />
  </div>
</template>

<script setup lang="ts">
import MessageRow from "../components/MessageRow.vue";
const props = defineProps({
  messages: {
    type: [Array],
  },
  openChat: {},
});
</script>

<style scoped></style>
