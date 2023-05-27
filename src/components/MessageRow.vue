<template>
  <div class="">
    <div
      class="flex w-full px-4 py-3 items-center cursor-pointer"
      @click="openChat(chat)"
    >
      <img
        :src="profileImg"
        alt="profile-image"
        class="rounded-full mr-4 w-12"
      />
      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">{{ username }}</div>
          <!-- <div class="text-[12px] text-gray-600 fixed left-[300px]">
            {{ date }}
          </div> -->
        </div>
        <div class="flex items-center">
          <CheckAllIcon :size="18" class="mr-1" />
          <div
            class="text-[15px] text-gray-500 flex items-center justify-between w-full truncate"
          >
            {{ msgs[msgs.length - 1].text }}
          </div>
        </div>
      </div>
    </div>
    <div class="border-b w-[calc(100%-80px)] float-right"></div>
  </div>
</template>

<script setup>
import CheckAllIcon from "vue-material-design-icons/CheckAll.vue";

const props = defineProps({
  chat: {
    type: Object,
  },
  openChat: {
    type: Function,
  },
});
const { chat, openChat } = props;
const { username, msgs, profileImg } = chat;
</script>
