<script setup lang="ts">
import { onMounted } from "vue";
import TestVue from "~/components/atoms/testVue.vue";
import { AnswerItem, AnswerList } from "~/components/myClass";

const answerList = new AnswerList[
  (new AnswerItem("a", "a-01", "3", "i am answer 3", 2),
  new AnswerItem("a", "a-02", "1", "i am answer 1", 0),
  new AnswerItem("a", "a-03", "4", "i am answer 4", 3),
  new AnswerItem("b", "b-01", "2", "i am answer 2", 1),
  new AnswerItem("b", "b-02", "4", "i am answer 4", 3),
  new AnswerItem("b", "b-03", "1", "i am answer 1", 0))
]();

function answerListFiltered(item) {
  return answerList?.filter((item2) => {
    return item2.questionId === item;
  });
}

onMounted(() => {
  console.log("mounted");
  console.log(answerList);
  console.log(answerListFiltered("a-02"));
});
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
