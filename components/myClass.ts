export class AnswerItem {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public categoryId: string,
    public questionId: string,
    public optionId: string,
    public optionText: string,
    public score: number
  ) {}
}

export class QuestionItem {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public categoryId: string,
    public questionId: string,
    public questionText: string
  ) {}
}

export class CategoryItem {
  // eslint-disable-next-line no-useless-constructor
  constructor(public categoryId: string, public categoryText: string) {}
}

export class AnswerList extends Array<AnswerItem> {
  add = function (model: AnswerItem) {
    this.push(model);
  };

  get categoryScore() {
    return this.reduce((accum, current) => {
      const myIndex = accum.findIndex(
        (item) => item.categoryId === current.categoryId
      );
      if (myIndex === -1) {
        accum[current.categoryId] = current.score;
      } else {
        accum[current.categoryId] += current.score;
      }
      return accum;
    }, []);
  }
}
