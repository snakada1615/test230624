<template>
  <div class="q-ma-md">
    <!--  ここから質問項目のはじまり  -->
    <div class="row">
      <div
        class="column mx-0 mb-0 py-2 bg-dark rounded text-light font-weight-bold"
      >
        {{ qaList.qaTitle }}
      </div>
    </div>
    test
    <q-card
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      class="text-white"
    >
      <div>meee</div>
      <q-card-section
        ><div>popo</div>
        beee</q-card-section
      >
    </q-card>
    <div class="row">
      <div class="column px-0 mx-0">
        <!--
         qaListの項目に沿って質問と回答一案（ドロップダウン）を表示
         項目のインデックスが0の時だけNutritionBarを表示
           -->
        <q-card
          v-for="(qaGroup, index) in qaList.categoryList"
          :key="index"
          style="min-width: 530px"
          header-bg-variant="success"
          bg-variant="light"
          border-variant="success"
          class="mx-1 px-0 my-2"
        >
          <q-card-section>
            <div>{{ qaGroup.category }}</div>
          </q-card-section>
          <q-select v-model="model" :options="options" label="Standard" />
          <q-card-section>
            <ul class="pl-2 my-0">
              <li
                v-for="(qa, index2) in qaGroup.questionList"
                :key="index2"
                :class="{ 'mt-3': index2 !== 0 }"
              >
                <!--    追加項目の表示      -->
                <slot
                  v-if="
                    extraComponentFlag.includes(
                      qaGroup.categoryId + '_' + qa.questionId
                    )
                  "
                  name="extraContents"
                ></slot>

                {{ qa.questionText }}
                <q-select
                  :value="
                    answerListComputed.filter((item) => {
                      return (
                        item.categoryId === qaGroup.categoryId &&
                        item.questionId === qa.questionId
                      );
                    })
                  "
                  :options="
                    qa.answerOptions.map((item) => {
                      return {
                        text: item.optionText,
                        value: {
                          categoryId: qaGroup.categoryId,
                          questionId: qa.questionId,
                          score: item.optionScore,
                          optionId: item.optionId,
                        },
                      };
                    })
                  "
                  size="sm"
                  @change="onAnswerChanged($event)"
                />
              </li>
            </ul>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
/**
 * 与えられた質問セットに応じて質問項目と回答候補一覧（ドロップダウン）を表示
 * ユーザーが解答を選択するごとに変更内容をemit
 */

import { arrayOf, instanceOf } from "vue-types";
import { computed, ref } from "vue";
import { AnswerItem, QaList } from "../myClass";

const model = ref(null);
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const props = defineProps({
  /**
   * 質問と回答optionの一覧
   */
  qaList: instanceOf(QaList),

  /**
   * 回答一覧
   */
  answerList: arrayOf(AnswerItem),
  /**
   * 表示項目に応じて追加コンポーネントを表示するためのフラグ
   */
  extraComponentFlag: {
    type: Array,
    default: () => [],
  },
});

const emits = defineEmits(["update:answerList"]);
const answerListComputed = computed(() => props.answerList);

function onAnswerChanged(val) {
  const res = JSON.parse(JSON.stringify(props.answerList));
  const index = res.findIndex(
    (item) =>
      item.categoryId === val.categoryId && item.questionId === val.questionId
  );
  res.splice(index, 1, val);
  emits("update:answerList", res);
}
</script>
