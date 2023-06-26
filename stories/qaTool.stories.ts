// import { action } from '@storybook/addon-actions'
import qaTool from "../components/atoms/qaTool.vue";
import {
  AnswerItem,
  AnswerOption,
  CategoryList,
  QaList,
  QuestionItem,
} from "../components/myClass";

export default {
  title: "NFA-app/molecules/qaTool",
  component: qaTool,
  tags: ["autodocs"],
};

const category1 = new CategoryList("type a", "a1", 15, []);
category1.addQuestionItem(
  new QuestionItem("this is question a1", "a1-01", false, 0, [
    new AnswerOption("this is choice a1-01-option1", 0, "a1-01-option1"),
    new AnswerOption("this is choice a1-01-option2", 1, "a1-01-option2"),
    new AnswerOption("this is choice a1-01-option3", 2, "a1-01-option3"),
    new AnswerOption("this is choice a1-01-option4", 3, "a1-01-option4"),
    new AnswerOption("this is choice a1-01-option5", 4, "a1-01-option5"),
  ])
);
category1.addQuestionItem(
  new QuestionItem("this is question a2", "a1-02", false, 0, [
    new AnswerOption("this is choice a1-02-option1", 0, "a1-02-option1"),
    new AnswerOption("this is choice a1-02-option2", 1, "a1-02-option2"),
    new AnswerOption("this is choice a1-02-option3", 2, "a1-02-option3"),
    new AnswerOption("this is choice a1-02-option4", 3, "a1-02-option4"),
    new AnswerOption("this is choice a1-02-option5", 4, "a1-02-option5"),
  ])
);
category1.addQuestionItem(
  new QuestionItem("this is question a3", "a1-03", false, 0, [
    new AnswerOption("this is choice a1-03-option1", 0, "a1-03-option1"),
    new AnswerOption("this is choice a1-03-option2", 1, "a1-03-option2"),
    new AnswerOption("this is choice a1-03-option3", 2, "a1-03-option3"),
    new AnswerOption("this is choice a1-03-option4", 3, "a1-03-option4"),
    new AnswerOption("this is choice a1-03-option5", 4, "a1-03-option5"),
  ])
);

const category2 = new CategoryList("type b", "b1", 25, []);
category2.addQuestionItem(
  new QuestionItem("this is question b1", "b1-01", false, 0, [
    new AnswerOption("this is choice b1-01-option1", 0, "b1-01-option1"),
    new AnswerOption("this is choice b1-01-option2", 1, "b1-01-option2"),
    new AnswerOption("this is choice b1-01-option3", 2, "b1-01-option3"),
    new AnswerOption("this is choice b1-01-option4", 3, "b1-01-option4"),
    new AnswerOption("this is choice b1-01-option5", 4, "b1-01-option5"),
  ])
);
category2.addQuestionItem(
  new QuestionItem("this is question a2", "b1-02", false, 0, [
    new AnswerOption("this is choice b1-02-option1", 0, "b1-02-option1"),
    new AnswerOption("this is choice b1-02-option2", 1, "b1-02-option2"),
    new AnswerOption("this is choice b1-02-option3", 2, "b1-02-option3"),
    new AnswerOption("this is choice b1-02-option4", 3, "b1-02-option4"),
    new AnswerOption("this is choice b1-02-option5", 4, "b1-02-option5"),
  ])
);
category2.addQuestionItem(
  new QuestionItem("this is question a3", "b1-03", false, 0, [
    new AnswerOption("this is choice b1-03-option1", 0, "b1-03-option1"),
    new AnswerOption("this is choice b1-03-option2", 1, "b1-03-option2"),
    new AnswerOption("this is choice b1-03-option3", 2, "b1-03-option3"),
    new AnswerOption("this is choice b1-03-option4", 3, "b1-03-option4"),
    new AnswerOption("this is choice b1-03-option5", 4, "b1-03-option5"),
  ])
);

const qaList = new QaList("QA sample", 0, [category1, category2]);

const answerList = [
  new AnswerItem("a1", "a1-01", "", 1),
  new AnswerItem("a1", "a1-02", "", 2),
  new AnswerItem("a1", "a1-03", "", 3),
  new AnswerItem("b1", "b1-01", "", 4),
  new AnswerItem("b1", "b1-02", "", 3),
  new AnswerItem("b1", "b1-03", "", 2),
];

export const Default = {
  args: {
    qaList,
    answerList,
  },
};
