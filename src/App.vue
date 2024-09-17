<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { iconProduct,iconProduct1} from "./image";
</script>
<style lang="scss">
  @import "./assets/style.scss";
</style>
<template>
<div class="row">
  <div class="column">
    <div class="content">
      <img id="object1" :src="iconProduct" alt="logo" class="responsive" />
      <p class="text-truncate">Bamboo bear in the landscape side in china</p>
    </div>
  </div>
  
  <div class="column" >
    <div class="content">
      <img id="object1" :src="iconProduct1" alt="logo" class="responsive" />
      <p class="text-truncate">Bamboo bear in the landscape side in china</p>
    </div>
  </div>
  
  <div class="column">
    <div class="content">
      <img id="object1" :src="iconProduct1" alt="logo" class="responsive" />
      <p class="text-truncate">Bamboo bear in the landscape side in eastern of china</p>
    </div>
  </div>
  
  <div class="column">
    <div class="content">
      <img id="object1" :src="iconProduct" alt="logo" class="responsive" />
      <p class="text-truncate">Bamboo bear in the landscape side in china</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img id="object1" :src="iconProduct1" alt="logo" class="responsive" />
      <p class="text-truncate">Bamboo bear in the landscape side in china</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img id="object1" :src="iconProduct" alt="logo" class="responsive" />
      <p class="text-truncate">Bamboo bear in the landscape side in china</p>
    </div>
  </div>
</div>
</template>
