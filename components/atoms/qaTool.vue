<template>
  <div class="q-ma-md">
    {{ answerList }}
    <!--  ここから質問項目のはじまり  -->
    <div class="row">
      <div
        class="column mx-0 mb-0 py-2 bg-dark rounded text-light font-weight-bold"
      >
        title
      </div>
    </div>
    {{ answerList }}
    <!--
         questionListの項目に沿って質問と回答一案（ドロップダウン）を表示
         項目のインデックスが0の時だけNutritionBarを表示
           -->
    <q-card
      v-for="(category, index) in categoryList"
      :key="index"
      style="min-width: 530px"
      class="baseColor"
      bordered
    >
      {{ category.categoryText }}
      {{ category.categoryId }}
      <q-card-section>
        <ul class="pl-2 my-0">
          <li
            v-for="(question, index2) in questionList.filter(
              (item) => item.categoryId === category.categoryId
            )"
            :key="index2"
            :class="{ 'q-mt-lg': index2 !== 0 }"
          >
            <!--    追加項目の表示      -->
            <slot
              v-if="
                extraComponentFlag.includes(
                  category.categoryId + '_' + question.questionId
                )
              "
              name="extraContents"
            ></slot>

            {{ question.questionText }}
            <q-select
              :dense="true"
              :options-dense="true"
              :value="temp[question.questionId]"
              :options="
                answerOptionsFiltered({
                  categoryId: category.categoryId,
                  questionId: question.questionId,
                })
              "
              @input="console.log($event)"
            />
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </div>
</template>
<script lang="ts" setup>
/**
 * 与えられた質問セットに応じて質問項目と回答候補一覧（ドロップダウン）を表示
 * ユーザーが解答を選択するごとに変更内容をemit
 */

import { arrayOf, instanceOf } from "vue-types";
import { ref } from "vue";
import { AnswerItem, AnswerList, CategoryItem, QuestionItem } from "../myClass";

const props = defineProps({
  /**
   * 質問の一覧
   */
  questionList: arrayOf(QuestionItem),

  /**
   * カテゴリの一覧
   */
  categoryList: arrayOf(CategoryItem),

  /**
   * 回答オプションの一覧
   */
  answerOptions: arrayOf(AnswerItem),

  /**
   * 回答一覧
   */
  answerList: instanceOf(AnswerList),
  /**
   * 表示項目に応じて追加コンポーネントを表示するためのフラグ
   */
  extraComponentFlag: {
    type: Array,
    default: () => [],
  },
});

/*
const emits = defineEmits(["update:answerList"]);
function answerListFiltered(item) {
  return props.answerList?.filter(
    (item2) =>
      item2.categoryId === item.categoryId &&
      item2.questionId === item.questionId
  );
}
*/

function answerOptionsFiltered(item) {
  return props.answerOptions
    ?.filter(
      (item2) =>
        item2.categoryId === item.categoryId &&
        item2.questionId === item.questionId
    )
    .map((item) => {
      return {
        label: item.optionText,
        value: item,
      };
    });
}

const temp = ref({});

// const answerOptionDisplay = computed({
//   get: () =>
//     props.answerOptions?.map((item) => {
//       return {
//         label: item.optionText,
//         value: item,
//       };
//     }),
//   set: (val) => {
//     const res = JSON.parse(JSON.stringify(props.answerList));
//     const index = res.findIndex(
//       (item) =>
//         item.categoryId === val.categoryId && item.questionId === val.questionId
//     );
//     res.splice(index, 1, val);
//     emits("update:answerList", res);
//   },
// });
</script>
