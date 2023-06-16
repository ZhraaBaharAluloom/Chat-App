<template>
  <div class="flex">
    <div id="Header" class="fixed w-[420px] z-10">
      <div
        class="bg-[#F0F0F0] w-full flex justify-between items-center px-3 py-2"
      >
        <div class="flex items-center gap-5">
          <img
            :src="enrolledUser?.profileImg"
            alt="profile-image"
            class="rounded-full ml-1 w-10 h-10"
          />
          <span class="text-lg"> Hello {{ enrolledUser?.username }} </span>
        </div>
        <div class="flex items-center justify-center cursor-pointer">
          <LogoutIcon fillColor="#880808" class="mr-1" />
          <span @click="signOut" class="text-[#880808]">Logout</span>
        </div>
      </div>

      <div id="search" class="bg-white w-full px-2 border-b shadow-sm">
        <div
          class="px-1 m-2 flex items-center justify-center bg-[#F0F0F0] rounded-md"
        >
          <MagnifyIcon fillColor="#515151" :size="18" class="ml-2" />
          <input
            class="ml-5 appearance-non w-full bg-[#F0F0F0] py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder text-sm placeholder:text-gray-500"
            autocomplete="off"
            type="text"
            placeholder="Start a new chat"
            v-model="searchInputValue"
            @input="handleSearchUser"
            @click="handleSearchUser"
          />

          <CloseIcon
            v-if="showDropdown"
            @click="handleCloseSearchBar"
            fillColor="#515151"
            class="cursor-pointer"
          />
        </div>
        <div
          v-if="showDropdown"
          class="mt-1 bg-gray-300 rounded shadow-lg absolute w-full z-10 max-h-[40rem] overflow-y-aut"
        >
          <ul class="space-y-2">
            <li
              v-for="user in users.filter(
                (user) => user.id !== enrolledUser.id
              )"
              :key="user.id"
              @click="handleCreateNewChatRoom(user)"
              class="p-4 flex flex-wrap items-center cursor-pointer transition hover:bg-gray-900 hover:text-white"
            >
              <img
                :src="user.profileImg"
                alt="movie.name"
                class="w-10 rounded-md mr-4"
              />
              <div class="md:flex-1 py-4">
                <span class="text-lg font-semibold">{{ user.username }}</span>
                <p class="line-clamp-3 xl:line-clamp-5"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="isLoading">
      <p class="mt-[100px]">Loading ...</p>
    </div>
    <div v-else>
      <ChatView
        class="mt-[100px]"
        :userRooms="
          usersList.find((user) => user.id == enrolledUser.id)?.chatRooms
        "
        :usersList="usersList"
        :chatsList="chatsList"
        :roomChatsList="roomChatsList"
        :enrolledUser="enrolledUser"
        @openChat="openChat"
      />
      <div v-if="open">
        <MessageView
          :receivedRoomId="receivedRoomId"
          :roomChatsList="roomChatsList"
          :enrolledUser="enrolledUser"
          :usersList="usersList"
          :chatsList="chatsList"
          @createMsg="createMsg"
          @deleteMsg="deleteMsg"
          @editMsg="editMsg"
          @closeChat="closeChat"
        />
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
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { setUser } from "../services/userUtils";
import ChatView from "./ChatView.vue";
import MessageView from "./MessageView.vue";

// Icons
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import LogoutIcon from "vue-material-design-icons/Logout.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";

import decode from "jwt-decode";
import axios from "axios";

let chatsList = ref([]);
let usersList = ref([]);
let open = ref(false);
let isLoading = ref(true);
let enrolledUser = ref(null);
let roomChatsList = ref();
let receivedRoomId = ref(null);
let searchInputValue = ref("");
let users = ref(null);

const showDropdown = ref(false);

const router = useRouter();

const handleSearchUser = computed(() => {
  if (searchInputValue.value !== "") {
    users.value = usersList.value.filter((user) =>
      user.username.toLowerCase().includes(searchInputValue.value.toLowerCase())
    );
  } else {
    users.value = [...usersList.value];
  }
  showDropdown.value = !showDropdown.value;
});

const handleCloseSearchBar = () => {
  showDropdown.value = false;
};

const handleCreateNewChatRoom = async (selectedUser) => {
  try {
    let foundUser = usersList.value.find(
      (user) => user.id == enrolledUser.value.id
    );
    let existedChat = selectedUser.chatRooms.filter((chatRoom) => {
      return foundUser.chatRooms.some((chat) => {
        return chat.id == chatRoom.id;
      });
    });
    if (existedChat.length > 0) {
      handleCloseSearchBar();
    } else {
      isLoading.value = true;
      const newRoom = await axios.post(`http://localhost:3000/rooms`, {
        userTwoId: selectedUser.id,
      });

      openChat(newRoom.data.newChatRoom.id);
      handleCloseSearchBar();
      isLoading.value = false;
      getUsers();
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: HomeView.vue:163 ~ handleCreateNewChatRoom ~ error:",
      error
    );
  }
};

const getChats = async () => {
  try {
    isLoading.value = true;
    const chatsData = await axios.get(`http://localhost:3000/chats`);
    chatsList.value = chatsData.data.Chats;
    isLoading.value = false;
  } catch (error) {
    console.log("🚀 ~ file: HomeView.vue:88 ~ getChats ~ error:", error);
  }
};
const createMsg = async (roomId, newMsg) => {
  try {
    const newChat = await axios.post(
      `http://localhost:3000/rooms/${roomId}/chats`,
      newMsg
    );

    chatsList.value.push(newChat.data.newChat);
  } catch (error) {
    console.log("🚀 ~ file: HomeView.vue:88 ~ getChats ~ error:", error);
  }
};
const deleteMsg = async (msg) => {
  try {
    const confirmDelete = confirm(
      "Are you absolutely positive you want to demolish this delicious cookie? It may shed a tear or two... 🍪😐"
    );
    if (confirmDelete) {
      await axios.delete(`http://localhost:3000/chats/${msg.id}`);
      const msgIndex = chatsList.value.indexOf(msg);
      chatsList.value.splice(msgIndex, 1);
      roomChatsList.value.splice(msgIndex, 1);
      alert("Msg successfully obliterated! 💥😄");
    } else {
      alert("Phew! The msg has been spared. It breathes a sigh of relief.");
    }
  } catch (error) {
    console.log("🚀 ~ file: HomeView.vue:88 ~ getChats ~ error:", error);
  }
};

const editMsg = async (selectedMsg, messageInput) => {
  try {
    const confirmEdit = confirm(
      "Are you absolutely positive you want to demolish this message? It may shed a tear or two...😐"
    );
    if (confirmEdit) {
      const editedMsg = await axios.put(
        `http://localhost:3000/chats/${selectedMsg.id}`,
        { text: messageInput }
      );
      const msgIndex = chatsList.value.indexOf(selectedMsg);
      // chatsList.value.map((msg, index) => {
      //   if (msgIndex == index) {
      //     Object.assign(msg, editedMsg.data.chat);
      //     alert("Msg successfully Edited! 💥😄");
      //   }
      // });
      roomChatsList.value.map((msg, index) => {
        if (msgIndex == index) {
          Object.assign(msg, editedMsg.data.chat);
          alert("Msg successfully Edited! 💥😄");
        }
      });
    } else {
      alert("Okay, it's up to you");
    }
  } catch (error) {
    console.log("🚀 ~ file: HomeView.vue:88 ~ getChats ~ error:", error);
  }
};

const openChat = (roomId) => {
  isLoading.value = true;
  // let foundRoomChats = chatsList.value.filter(
  //   (chat) => chat.room?.id === roomId
  // );

  receivedRoomId.value = roomId;

  roomChatsList.value = chatsList.value;

  isLoading.value = false;
  open.value = true;
};

const closeChat = () => {
  open.value = false;
};

const getUsers = async () => {
  try {
    isLoading.value = true;

    const users = await axios.get(`http://localhost:3000/auth/users`);

    usersList.value = users.data.users;

    isLoading.value = false;
  } catch (error) {
    console.log("🚀 ~ file: HomeView.vue:182 ~ getUsers ~ error:", error);
  }
};

const signOut = () => {
  localStorage.removeItem("myToken");
  checkForToken();
};

const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    setUser(token);
    enrolledUser.value = decode(token);
  } else {
    localStorage.removeItem("myToken");
    router.push("/auth/signin");
  }
};

onMounted(async () => {
  await getChats();
  getUsers();
  await checkForToken();
});
</script>
