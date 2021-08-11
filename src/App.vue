<template lang="html">
  <div id="app">
    <div class="box ">
      <ul style="list-style:none;" class="pt-5">
        <li class="p-2 pt-3"><router-link to="/">Tasks</router-link></li>
        <li class="p-2"><router-link to="/lists">Lists</router-link></li>
        <li class="p-2"><router-link to="/settings">Settings</router-link></li>
      </ul>
    </div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<style>

#app {
  width: 85%;
  height: 85%;
  background:linear-gradient(180deg,#83b6f1 0,#2e6dc0);
  position: relative;
  top: 10%;
  left: 8%;
}
.box {
  width: 15%;
  height: 30%;
  background: white;
  position: absolute;
  top: 30%;
  left: 5%;
  border-radius: 5px;
}
.p{
 position: relative;
 left: -10%;
}
</style>
