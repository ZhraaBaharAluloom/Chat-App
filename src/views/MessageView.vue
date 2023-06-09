<template>
  <div class="ml-[420px] w-full">
    <div class="w-full">
      <div class="border-l border-green-500 w-full">
        <div
          class="bg-[#F0F0F0] fixed z-10 min-w-[calc(100vw-420px)] flex justify-between items-center px-2 py-2"
        >
          <div class="flex items-center">
            <img
              :src="
                filteredChats.find((chat) => chat.user?.id !== enrolledUser?.id)
                  ?.user?.profileImg || notEnrolledUsers[0].profileImg
              "
              alt="profile-image"
              class="rounded-full mx-1 w-10 h-10"
            />
            <div class="text-gray=500 ml-1 font-semibold">
              {{
                filteredChats.find(
                  (chat) => chat.user?.id !== props.enrolledUser?.id
                )?.user?.username || notEnrolledUsers[0].username
              }}
            </div>
          </div>
          <CloseIcon
            @click="handleCloseChat"
            fillColor="#515151"
            class="cursor-pointer"
          />
        </div>
      </div>
      <div
        id="MessagesSection"
        ref="messagesSection"
        class="pt-20 h-[calc(100vh-65px)] w-[calc(100vw-420px)] overflow-auto fixed touch-auto"
      >
        <div
          class="px-12 text-sm"
          v-for="(chat, index) in filteredChats"
          :key="index"
        >
          <div
            v-if="chat.user?.id !== enrolledUser.id"
            class="flex w-[calc(100%-100px)]"
          >
            <div class="inline-block bg-gray-100 p-2 rounded-md my-6">
              <div class="flex gap-4">
                {{ chat.text }}
              </div>
            </div>
          </div>

          <div
            v-else
            class="flex justify-end float-right space-x-1 w-[calc(100%-100px)]"
          >
            <div class="inline-block bg-green-200 p-2 rounded-md my-1">
              <div class="flex gap-4">
                {{ chat.text }}
                <span class="flex gap-1">
                  <MdiTrashCanOutlineIcon
                    @click="handleDeleteMsg(chat)"
                    :size="18"
                    class="text-red-900 cursor-pointer"
                  />
                  <EditIcon
                    :size="18"
                    class="text-gray-600 cursor-pointer"
                    @click="handleEditMsg(chat)"
                  />
                </span>
              </div>
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
            v-model="messageInput"
            @keyup.enter="handleCreateOrEdit"
          />
          <button
            type="submit"
            class="ml-3 p-2 w-12 flex items-center justify-center"
            @click="handleCreateOrEdit"
          >
            <SendIcon fillColor="#515151" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUpdated, ref, watch } from "vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import EmoticonExcitedOutlineIcon from "vue-material-design-icons/EmoticonExcitedOutline.vue";
import PaperclipIcon from "vue-material-design-icons/Paperclip.vue";
import SendIcon from "vue-material-design-icons/Send.vue";
import MdiTrashCanOutlineIcon from "vue-material-design-icons/TrashCan.vue";
import EditIcon from "vue-material-design-icons/Pencil.vue";

const props = defineProps({
  isEditing: {
    type: Boolean,
  },
  roomChatsList: {
    type: Array,
  },
  enrolledUser: {
    type: Object,
  },
  receivedRoomId: {
    type: Number,
  },

  usersList: {
    type: Array,
  },
  chatsList: {
    type: Array,
  },
});

const filteredChats = computed(() => {
  return props.chatsList.filter(
    (chat) => chat.room?.id === props.receivedRoomId
  );
});

const notEnrolledUsers = computed(() => {
  return props.usersList.filter((user) => {
    return (
      user.id !== props.enrolledUser.id &&
      user.chatRooms.some((room) => {
        return room.id === props.receivedRoomId;
      })
    );
  });
});

const messageInput = ref("");
const messagesSection = ref(null);
let isEditing = ref(false);
let selectedMsg = ref(null);

const emit = defineEmits(["createMsg", "deleteMsg", "editMsg", "closeChat"]);

onMounted(() => {
  scrollMessagesToBottom();
});

onUpdated(() => {
  scrollMessagesToBottom();
});

const scrollMessagesToBottom = () => {
  if (messagesSection.value) {
    messagesSection.value.scrollTop = messagesSection.value.scrollHeight;
  }
};

const handleCreateOrEdit = () => {
  if (isEditing.value) {
    emit("editMsg", selectedMsg.value, messageInput.value);
    messageInput.value = "";
    isEditing.value = false;
  } else {
    const newMgs = {
      text: messageInput.value,
    };

    if (messageInput.value !== "") {
      emit("createMsg", props.receivedRoomId, newMgs);
      messageInput.value = "";
    } else {
      alert("Seriously?");
    }
  }
};

const handleDeleteMsg = (msg) => {
  emit("deleteMsg", msg);
};

const handleEditMsg = (msg) => {
  isEditing.value = true;
  messageInput.value = msg.text;
  selectedMsg.value = msg;
};

const handleCloseChat = () => {
  emit("closeChat");
};
</script>

<style scoped></style>
