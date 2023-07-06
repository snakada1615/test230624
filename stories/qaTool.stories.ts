import { action } from "@storybook/addon-actions";
import qaTool from "../components/atoms/qaTool.vue";
import {
  AnswerItem,
  AnswerList,
  CategoryItem,
  QuestionItem,
} from "~/components/myClass";

export default {
  title: "NFA-app/molecules/qaTool",
  component: qaTool,
  tags: ["autodocs"],
};

const categoryList = [
  new CategoryItem("a", "this is category a"),
  new CategoryItem("b", "this is category b"),
];

const questionList = [
  new QuestionItem("a", "a-01", "this is question a-01"),
  new QuestionItem("a", "a-02", "this is question a-02"),
  new QuestionItem("a", "a-03", "this is question a-03"),
  new QuestionItem("b", "b-01", "this is question b-01"),
  new QuestionItem("b", "b-02", "this is question b-02"),
  new QuestionItem("b", "b-03", "this is question b-03"),
];

const answerOptions = new AnswerList(
  new AnswerItem("a", "a-01", "1", "i am answer 1", 0),
  new AnswerItem("a", "a-01", "2", "i am answer 2", 1),
  new AnswerItem("a", "a-01", "3", "i am answer 3", 2),
  new AnswerItem("a", "a-01", "4", "i am answer 4", 3),
  new AnswerItem("a", "a-02", "1", "i am answer 1", 0),
  new AnswerItem("a", "a-02", "2", "i am answer 2", 1),
  new AnswerItem("a", "a-02", "3", "i am answer 3", 2),
  new AnswerItem("a", "a-02", "4", "i am answer 4", 3),
  new AnswerItem("a", "a-03", "1", "i am answer 1", 0),
  new AnswerItem("a", "a-03", "2", "i am answer 2", 1),
  new AnswerItem("a", "a-03", "3", "i am answer 3", 2),
  new AnswerItem("a", "a-03", "4", "i am answer 4", 3),
  new AnswerItem("b", "b-01", "1", "i am answer 1", 0),
  new AnswerItem("b", "b-01", "2", "i am answer 2", 1),
  new AnswerItem("b", "b-01", "3", "i am answer 3", 2),
  new AnswerItem("b", "b-01", "4", "i am answer 4", 3),
  new AnswerItem("b", "b-02", "1", "i am answer 1", 0),
  new AnswerItem("b", "b-02", "2", "i am answer 2", 1),
  new AnswerItem("b", "b-02", "3", "i am answer 3", 2),
  new AnswerItem("b", "b-02", "4", "i am answer 4", 3),
  new AnswerItem("b", "b-03", "1", "i am answer 1", 0),
  new AnswerItem("b", "b-03", "2", "i am answer 2", 1),
  new AnswerItem("b", "b-03", "3", "i am answer 3", 2),
  new AnswerItem("b", "b-03", "4", "i am answer 4", 3)
);

const answerList = new AnswerList(
  new AnswerItem("a", "a-01", "3", "i am answer 3", 2),
  new AnswerItem("a", "a-02", "1", "i am answer 1", 0),
  new AnswerItem("a", "a-03", "4", "i am answer 4", 3),
  new AnswerItem("b", "b-01", "2", "i am answer 2", 1),
  new AnswerItem("b", "b-02", "4", "i am answer 4", 3),
  new AnswerItem("b", "b-03", "1", "i am answer 1", 0)
);

const Template = (args) => ({
  components: { qaTool },
  setup() {
    return { args };
  },
  template: "<qaTool " + '@input="onInput" ' + 'v-bind="args" ' + "/>",
  methods: {
    onInput: action("onInput"),
  },
});

export const Default = Template.bind({});
Default.args = {
  questionList,
  categoryList,
  answerOptions,
  answerList,
};
