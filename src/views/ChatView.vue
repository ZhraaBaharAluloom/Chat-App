<template>
  <div
    id="chats"
    class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]"
  >
    <MessageRow
      v-for="(room, index) in userRooms"
      :key="index"
      @openChat="handleOpenChat"
      :room="room"
      :chatsList="chatsList"
      :enrolledUser="enrolledUser"
      :notEnrolledUSer="notEnrolledUSer"
      :roomChatsList="roomChatsList"
      :usersList="usersList"
    />
  </div>
</template>

<script setup>
// import { watch, watchEffect } from "vue";
import MessageRow from "../components/MessageRow.vue";

const props = defineProps({
  userRooms: {
    type: Object,
  },

  chatsList: {
    type: Array,
  },

  roomChatsList: {
    type: Array,
  },

  enrolledUser: {
    type: Object,
  },
  notEnrolledUSer: {
    type: Object,
  },
  usersList: {
    type: Array,
  },
});

const emits = defineEmits(["openChat"]);

const handleOpenChat = (roomId) => {
  emits("openChat", roomId);
};
</script>

<style scoped></style>
