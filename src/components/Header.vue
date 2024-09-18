<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {iconLogo} from "@/image";
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  background-color: #13cfa0;
  height: 50px;
  padding: 0% 5%;
  align-items: center;
  .logo-row {
    width: 50%;
    .text {
      color: white;
      padding-left: 8px;
      font-size: 20px;
    }
  }
  .button-row {
    display: flex;
    justify-content: end;
    width: 50%;
    .button {
      background: none;
      border-radius: 5px;
      border: solid 1px #fff;
      color: white;
      padding: 8px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin-left: 5px;
      &:hover {
        background: #ff6424;
        cursor: pointer;
      }
    }
  }
}
</style>
<template>
  <div class="header">
    <div class="logo-row" >
      <img :src="iconLogo" alt="logo" class="responsive" /> 
      <span class="text">Hieu Tran</span>
    </div>
    <div class="button-row">
      <button type="button" class="button">Indie Game</button>
      <button type="button" class="button">Entry Game</button>
      <button type="button" class="button">Community</button>
    </div>
  </div>
</template>

