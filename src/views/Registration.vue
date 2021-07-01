<template>
  <div class="authForms">
    <input v-model="user.name" placeholder="Name" type="text" required />
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
  <div v-if="message" class="message">{{ message }}</div>
</template>

<script lang="ts">
import { IUserRegistration } from "../types/User.inteface.js";
import { mapActions } from "vuex";
export default {
  name: "Registration",
  data() {
    return {
      user: {
        name: "",
        password: "",
      } as IUserRegistration,
      reEnterPassword: "" as string,
      message: "" as string,
    };
  },
  methods: {
    ...mapActions(["signUp"]),
    handleRegistration(): void {
      if (this.user.password != this.reEnterPassword) {
        this.message = "Password mismatch";
      } else {
        this.signUp({ name: this.user.name, password: this.user.password });
      }
    },
    handleRedirectToAuthorization(): void {
      this.$router.push("Authorization");
    },
  },
};
</script>
