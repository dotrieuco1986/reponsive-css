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
  padding: 2% 5%;
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

    .menu {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    .menu > li {
      margin: 0 1rem;
      overflow: hidden;
    }

    .menu-button-container {
      display: none;
      height: 100%;
      width: 30px;
      cursor: pointer;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #menu-toggle {
      display: none;
    }

    .menu-button,
    .menu-button::before,
    .menu-button::after {
      display: block;
      background-color: #fff;
      position: absolute;
      height: 4px;
      width: 30px;
      transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
      border-radius: 2px;
    }

    .menu-button::before {
      content: '';
      margin-top: -8px;
    }

    .menu-button::after {
      content: '';
      margin-top: 8px;
    }

    #menu-toggle:checked + .menu-button-container .menu-button::before {
      margin-top: 0px;
      transform: rotate(405deg);
    }

    #menu-toggle:checked + .menu-button-container .menu-button {
      background: rgba(255, 255, 255, 0);
    }

    #menu-toggle:checked + .menu-button-container .menu-button::after {
      margin-top: 0px;
      transform: rotate(-405deg);
    }

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
  @media screen and (max-width: 1200px) { 

    .logo-row {
      .text {
        display: none;
      }
    }
    .button-row {
      .menu-button-container {
        display: flex;
      }
      .menu {
        position: absolute;
        top: 0;
        margin-top: 50px;
        left: 0;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      #menu-toggle ~ .menu li {
        height: 0;
        margin: 0;
        padding: 0;
        border: 0;
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
      }
      #menu-toggle:checked ~ .menu li {
        border: 1px solid #fff;
        height: 3.5rem;
        padding: 0.5em;
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
      }
      .menu > li {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0.5em 0;
        width: 100%;
        color: white;
        background-color: #13cfa0;
      }
      .menu > li:not(:last-child) {
        border-bottom: 1px solid #13cfa0;
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
      <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li><button type="button" class="button">Indie Game</button></li>
        <li><button type="button" class="button">Entry Game</button></li>
        <li><button type="button" class="button">Community</button></li>
      </ul> 
    </div>
  </div>
</template>

