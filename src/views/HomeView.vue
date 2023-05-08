<template>
  <div class="flex">
    <div id="Header" class="fixed w-[420px] z-10">
      <div
        class="bg-[#F0F0F0] w-full flex justify-between items-center px-3 py-2"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
          alt="profile-image"
          class="rounded-full ml-1 w-10"
        />
        <div class="flex items-center justify-center">
          <AccountGroupIcon fillColor="#515151" class="mr-6" />
          <DotsVerticalIcon fillColor="#515151" class="cursor-pointer" />
        </div>
      </div>

      <div id="search" class="bg-white w-full px-2 border-b shadow-sm">
        <div
          class="px-1 m-2 flex items-center justify-center bg-[#F0F0F0] rounded-md"
        >
          <MagnifyIcon fillColor="#515151" :size="18" class="ml-2" />
          <input
            class="ml-5 appearance-non w-full bg-[#F0F0F0] py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder text-sm placeholder: text-gray-500"
            autocomplete="off"
            type="text"
            placeholder="Start a new chat"
          />
        </div>
      </div>
    </div>
    <ChatView class="mt-[100px]" :messages="messages" :openChat="openChat" />

    <div v-if="open">
      <MessageView :messages="messages" :openedChat="openedChat" />
    </div>

    <div v-else>
      <div
        class="ml-[420px] fixed w-[calc(100vw-420px)] h-[100vh] bg-gray-100 text-center"
      >
        <div class="grid h-screen place-items-center">
          <div>
            <div class="w-full flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
                alt="profile-image"
                width="375"
              />
            </div>
            <div class="text-[32px] text-gray-500 font-light mt-10">
              WhatsApp Web
            </div>
            <div class="text-[14px] text-gray-500 font-light mt-1">
              Welcome to the real world!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChatView from "./ChatView.vue";
import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue";
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import MessageView from "./MessageView.vue";
import messages from "../messages";

let open = ref(false);
let openedChat = ref();
const openChat = (message) => {
  open.value = true;
  openedChat.value = message;
};
</script>
