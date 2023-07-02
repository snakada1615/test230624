<!-- app.vue or layouts/default.vue -->
<script setup>
const model = ref(null);
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <QPageContainer>
      <QPage padding class="column flex-center q-gutter-xl">
        <!-- if on layouts use `slot`. if on app.vue use `NuxtPage` -->
        <q-btn label="Do something" />
        <q-icon name="alarm" /> yeah
        <slot />
        <q-select v-model="model" filled :options="options" label="Filled" />
      </QPage>
    </QPageContainer>
  </QLayout>
</template>
