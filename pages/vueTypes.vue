<script setup lang="ts">
import ProductList from "../components/sample/ProductList.vue";

const list = [
  {
    id: 1,
    description: "Item 1",
    price: 1.5,
  },
  {
    id: 2,
    description: "Item 2",
    price: 20.0,
  },
  {
    id: 3,
    description: "Item 3",
    price: 1.99,
  },
  {
    id: 4,
    description: "Item 4",
    price: 0,
    status: "sold out",
  },
];
</script>

<template>
  <div id="app">
    <q-btn color="primary" class="q-mx-lg-md" to="/">
      <div>Top</div>
    </q-btn>
    <product-list :list="list" />
  </div>
</template>
