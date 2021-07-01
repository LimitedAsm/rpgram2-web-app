<template>
  <div id="nav">
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Game' }">Game</router-link> |
    <router-link :to="{ name: 'Registration' }">Sign up</router-link> |
    <router-link :to="{ name: 'Authorization' }">Sign in</router-link>
  </div>
</template>
