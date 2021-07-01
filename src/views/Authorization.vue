<template>
  <div class="authorizationForm">
    <input v-model="user.name" placeholder="Name" type="text" required />
    <input
      v-model="user.password"
      type="password"
      placeholder="Password"
      required
    />
    <button v-on:click="handleAuthorization">Sign in</button>
    <p>or</p>
    <button v-on:click="handleRedirectToRegistration">Create account</button>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { IUserAuthoriztion } from "../types/User.inteface.js";
import { mapActions } from "vuex";
export default {
  name: "Authorization",
  data() {
    return {
      user: {
        name: "",
        password: "",
      } as IUserAuthoriztion,
      message: "" as string,
    };
  },
  methods: {
    ...mapActions(["signIn"]),
    handleRegistration(): void {
      this.signIn({ name: this.user.name, password: this.user.password });
    },
    handleRedirectToRegistration(): void {
      this.$router.push("registration");
    },
  },
};
</script>
