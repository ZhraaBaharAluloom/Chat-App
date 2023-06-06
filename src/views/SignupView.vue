<template>
  <section class="h-screen bg-slate-900">
    <div class="container h-full px-6 py-24">
      <div
        class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between"
      >
        <!-- Left column container with background-->
        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2665/2665038.png"
            class="w-full"
            alt="Phone image"
          />
        </div>

        <!-- Right column container with form -->
        <div class="w-6/12 md:w-8/12 lg:ml-6 lg:w-5/12">
          <form @submit.prevent="signUp">
            <!-- Email input -->
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded border-1 border-white bg-transparent px-3 py-[0.32rem] leading-[2.15] outline focus:outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput3"
                placeholder="Username"
                v-model="usernameValue"
              />
              <label
                for="exampleFormControlInput3"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Username*
              </label>
            </div>

            <!-- Password input -->
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="password"
                class="peer block min-h-[auto] w-full rounded border-0 border-white bg-transparent px-3 py-[0.32rem] leading-[2.15] outline focus:outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput33"
                placeholder="Password"
                v-model="passwordValue"
              />
              <label
                for="exampleFormControlInput33"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Password*
              </label>
            </div>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded border-0 border-white bg-transparent px-3 py-[0.32rem] leading-[2.15] outline focus:outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput33"
                placeholder="Profile Image"
                v-model="profileImageVAlue"
              />
              <label
                for="exampleFormControlInput33"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Profile Image (Optional)
              </label>
            </div>

            <!-- Submit button -->
            <button
              type="submit"
              class="inline-block w-full rounded bg-white px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-primary shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Sign Up
            </button>
            <p class="mb-0 mt-2 pt-1 text-md text-white">
              Already have an account?
              <router-link to="/auth/signin">
                <span
                  @click=""
                  class="text-danger text-yellow-500 cursor-pointer font-semibold transition duration-150 ease-in-out hover:text-danger-800 focus:text-danger-600 active:text-danger-700"
                  >Sign In</span
                >
              </router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const usernameValue = ref("");
const passwordValue = ref("");
const profileImageVAlue = ref("");

const signUp = async () => {
  const userCredentials = {
    username: usernameValue.value.trim(),
    password: passwordValue.value.trim(),
    profileImageVAlue: profileImageVAlue?.value.trim(),
  };
  try {
    const createdUserToken = await axios.post(
      "http://localhost:3000/auth/signup",
      { ...userCredentials }
    );
  } catch (error) {
    console.log("🚀 ~ file: SignupView.vue:90 ~ signUp ~ error:", error);
  }
};
</script>
