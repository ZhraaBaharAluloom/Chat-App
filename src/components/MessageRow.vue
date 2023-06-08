<template>
  <div class="">
    <div
      class="flex w-full px-4 py-3 items-center cursor-pointer"
      @click="openChat(user?.id)"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
        alt="profile-image"
        class="rounded-full mr-4 w-12"
      />
      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">
            {{ user?.username || "Zahraa" }}
          </div>
          <div class="text-[12px] text-gray-600 fixed left-56">
            {{ chatsList[chatsList.length - 1].formattedCreatedDate }}
          </div>
        </div>
        <div class="flex items-center">
          <CheckAllIcon :size="18" class="mr-1 text-blue-500" />
          <div
            class="text-[15px] text-gray-500 flex items-center justify-between w-full"
          >
            <p class="line-clamp-1">
              {{ chatsList[chatsList.length - 1].text }}
            </p>
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
  chatsList: {
    type: Array,
  },
  openChat: {
    type: Function,
  },
  user: {
    type: Object,
  },
});
</script>
