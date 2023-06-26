<script setup lang="ts">
import TestVue from "~/components/atoms/testVue.vue";
</script>

<template>
  <div id="app">
    <q-btn color="primary" class="q-mx-lg-md" to="/">
      <div>Top</div>
    </q-btn>
    <q-btn color="secondary" class="q-mx-md" to="/vueTypes">
      <div>vueTypes</div>
    </q-btn>
    <test-vue :task="{ id: 'hiroto', state: false, title: 'hey guys' }" />
  </div>
</template>
