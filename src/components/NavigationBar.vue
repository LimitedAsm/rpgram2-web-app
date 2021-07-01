<template>
  <div id="nav">
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link to="/game">Game</router-link> |
    <router-link to="/registration">Sign up</router-link> |
    <router-link to="/authorization">Sign in</router-link>
  </div>
</template>
