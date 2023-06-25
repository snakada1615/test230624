import { action } from "@storybook/addon-actions";
import testVue from "../components/atoms/testVue.vue";

export default {
  component: testVue,
  title: "sample/testVue",
  tags: ["autodocs"],
  // 👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
  // 👇 Our exports that end in "Data" are not stories. a
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action("pin-task"),
  onArchiveTask: action("archive-task"),
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
