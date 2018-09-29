<template>
  <div id="app">

    <router-view>
      <router-link to="/main">Main</router-link>    
      <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
    </div>
    </router-view>
  </div>
</template>

