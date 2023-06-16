<template>
  <div class="">
    <div
      class="flex w-full px-4 py-3 items-center cursor-pointer"
      @click="getRoomId(room?.id)"
    >
      <img
        :src="
          filteredChats.find((chat) => chat.user.id !== enrolledUser.id)?.user
            .profileImg || notEnrolledUsers[0].profileImg
        "
        alt="profile-image"
        class="rounded-full mr-4 w-12"
      />
      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">
            {{
              filteredChats.find((chat) => chat.user.id !== enrolledUser.id)
                ?.user?.username || notEnrolledUsers[0].username
            }}
          </div>
          <div
            v-if="filteredChats.length > 0"
            class="text-[12px] text-gray-600 fixed left-56"
          >
            {{ filteredChats[filteredChats.length - 1].formattedCreatedDate }}
          </div>
        </div>
        <div class="flex items-center">
          <CheckAllIcon :size="18" class="mr-1 text-blue-500" />
          <div
            class="text-[15px] text-gray-500 flex items-center justify-between w-full"
          >
            <p class="line-clamp-1" v-if="filteredChats.length > 0">
              {{ filteredChats[filteredChats.length - 1].text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b w-[calc(100%-80px)] float-right"></div>
  </div>
</template>

<script setup>
import { computed, onUpdated, ref, watch } from "vue";
import CheckAllIcon from "vue-material-design-icons/CheckAll.vue";

const props = defineProps({
  openChat: {
    type: Function,
  },
  room: {
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
  usersList: {
    type: Array,
  },
});

const filteredChats = computed(() => {
  return props.chatsList.filter((chat) => chat.room?.id === props.room.id);
});

const notEnrolledUsers = ref([]);

// Compute the list of not enrolled users based on props
const computeNotEnrolledUsers = computed(() => {
  return props.usersList.filter((user) => {
    return (
      user.id !== props.enrolledUser.id &&
      user.chatRooms.some((room) => {
        return room.id === props.room.id;
      })
    );
  });
});

// Update the notEnrolledUsers reference when computeNotEnrolledUsers changes
const updateNotEnrolledUsers = () => {
  notEnrolledUsers.value = computeNotEnrolledUsers.value;
};

// Watch for changes in props and update the notEnrolledUsers reference accordingly
watch(
  [() => props.usersList, () => props.enrolledUser, () => props.receivedRoomId],
  updateNotEnrolledUsers,
  { immediate: true }
);

const emits = defineEmits(["openChat"]);

const getRoomId = (roomId) => {
  emits("openChat", roomId);
};

onUpdated(() => {
  return filteredChats;
});
</script>
