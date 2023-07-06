<template>
  <div>
    <div class="q-ma-md">
      <!--  ここから質問項目のはじまり  -->
      <div class="row">
        <div class="column mx-0 mb-0 py-2 bg-dark text-white font-weight-bold">
          title
        </div>
      </div>
    </div>
    <!--
           questionListの項目に沿って質問と回答一案（ドロップダウン）を表示
           項目のインデックスが0の時だけNutritionBarを表示
             -->
    <q-card
      v-for="(category, index) in categoryList"
      :key="index"
      style="min-width: 530px"
      class="baseColor q-px-sm q-my-md bg-grey-2 text-black"
      bordered
    >
      {{ category.categoryText }}
      <q-card-section>
        <ul>
          <li
            v-for="(question, index2) in questionList.filter(
              (item) => item.categoryId === category.categoryId
            )"
            :key="index2"
            :class="{ 'q-mt-xs': index2 !== 0 }"
          >
            <!--    keyが一致した場合にslotに追加項目の表示      -->
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
              v-model="answerListComputed[question.questionId]"
              :dense="true"
              :options-dense="true"
              :options="
                answerOptionsFiltered({
                  categoryId: category.categoryId,
                  questionId: question.questionId,
                })
              "
              label-color="white"
              filled
              bg-color="green"
              @update:model-value="setOption($event)"
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
import { computed } from "vue";
import { AnswerItem, AnswerList, CategoryItem, QuestionItem } from "../myClass";

const props = defineProps({
  /**
   * カテゴリの一覧
   */
  categoryList: arrayOf(CategoryItem),

  /**
   * 質問の一覧
   */
  questionList: arrayOf(QuestionItem),

  /**
   * 回答オプションの一覧
   */
  answerOptions: instanceOf(AnswerList),

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

const emits = defineEmits<{
  (e: "input", value: AnswerList<AnswerItem>): void;
}>();

function answerOptionsFiltered(item) {
  return props.answerOptions
    .filter(
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

function setOption(key) {
  const result = props.answerList.map((item) => {
    if (
      item.categoryId === key.value.categoryId &&
      item.questionId === key.value.questionId
    ) {
      return key.value;
    } else {
      return item;
    }
  });
  emits("input", result);
}

const answerListComputed = computed(() => {
  return props.answerList.reduce(
    (accum, current) => (accum[current.questionId] = current),
    {}
  );
});
</script>
