<template>
  <div class="ml-[420px] w-full">
    <div class="w-full">
      <div class="border-l border-green-500 w-full">
        <div
          class="bg-[#F0F0F0] fixed z-10 min-w-[calc(100vw-420px)] flex justify-between items-center px-2 py-2"
        >
          <div class="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
              alt="profile-image"
              class="rounded-full mx-1 w-10"
            />
            <div class="text-gray=500 ml-1 font-semibold">
              {{ props.openedChat.username }}
            </div>
          </div>
          <DotsVerticalIcon fillColor="#515151" />
        </div>
      </div>
      <div
        id="MessagesSection"
        class="pt-20 h-[calc(100vh-65px)] w-[calc(100vw-420px)] overflow-auto fixed touch-auto"
      >
        <div class="px-12 text-sm" v-for="msg in props.openedChat.msgs">
          <div v-if="msg.send" class="flex w-[calc(100%-100px)]">
            <div class="inline-block bg-gray-100 p-2 rounded-md my-6">
              {{ msg.text }}
            </div>
          </div>

          <div
            v-else
            class="flex justify-end float-right space-x-1 w-[calc(100%-100px)]"
          >
            <div class="inline-block bg-green-200 p-2 rounded-md my-1">
              {{ msg.text }}
            </div>
          </div>
        </div>
      </div>

      <div class="w-[calc(100vw-420px)] p-2.5 z-10 bg-[#F0F0F0] fixed bottom-0">
        <div class="flex justify-center items-center">
          <EmoticonExcitedOutlineIcon
            :size="27"
            fillColor="#515151"
            class="mx-1.5"
          />
          <PaperclipIcon :size="27" fillColor="#515151" class="mx-1.5 mr-3" />
          <input
            class="mr-1 shadow rounded-lg appearance-non w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            autocomplete="off"
            type="text"
            placeholder="Message"
          />
          <button
            type="submit"
            class="ml-3 p-2 w-12 flex items-center justify-center"
          >
            <SendIcon fillColor="#515151" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import EmoticonExcitedOutlineIcon from "vue-material-design-icons/EmoticonExcitedOutline.vue";
import PaperclipIcon from "vue-material-design-icons/Paperclip.vue";
import SendIcon from "vue-material-design-icons/Send.vue";
const props = defineProps({
  openedChat: {},
});
console.log("🚀 ~ file: MessageView.vue:77 ~ openedChat:", props.openedChat);
</script>

<style scoped></style>
