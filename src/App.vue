<script setup lang="ts">
  import { iconProduct,iconProduct1} from "./image";
  import Header from "./components/Header.vue";
  import { ref } from "vue";

  const items = ref([{ image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" },
                   { image: iconProduct , title:"Bamboo bear in the landscape side in china" },
                   { image: iconProduct1 , title:"Bamboo bear in the landscape side in eastern of china" }])
</script>
<template>
  <Header></Header>
  <div class="row">
    <h3 class="title">Photo Cards</h3>
  </div>
  <div class="row">
    <div class="column" v-for="item in items">
      <div class="content">
        <img id="object1" :src="item.image" alt="logo" class="responsive" />
        <p class="text-truncate">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "./assets/style.scss";
</style>