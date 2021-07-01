<template>
  <div class="authForms">
    <input v-model="user.login" placeholder="Login" type="text" required />
    <input
      v-model="user.password"
      type="password"
      placeholder="Password"
      required
    />
    <input
      v-model="reEnterPassword"
      type="password"
      placeholder="Re-enter password"
    />
    <button v-on:click="handleRegistration">Create account</button>
    <p>or</p>
    <button v-on:click="handleRedirectToAuthorization">Sign in</button>
  </div>
  <div class="message">{{ message }}</div>
</template>

<script lang="ts">
import { IUser } from "../types/User.inteface.js";
export default {
  name: "Registration",
  data() {
    return {
      user: {
        login: "",
        password: "",
      } as IUser,
      reEnterPassword: "" as string,
      message: "" as string,
    };
  },
  methods: {
    handleRegistration(): void {
      if (this.user.password != this.reEnterPassword) {
        this.message = "Password mismatch";
      }
    },
    handleRedirectToAuthorization(): void {
      this.$router.push("Authorization");
    },
  },
};
</script>
