export class AnswerOption {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public optionText: string = "",
    public optionScore: number = 0,
    public optionId: string = ""
  ) {}
}

export class QuestionItem {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private _questionText: string = "",
    private _questionId: string = "",
    private _ansState: boolean = false,
    private _singleScore: number = 0,
    private _answerOptions: AnswerOption[] = []
  ) {}

  get questionText() {
    return this._questionText;
  }

  set questionText(item: string) {
    this._questionText = item;
  }

  get questionId() {
    return this._questionId;
  }

  set questionId(item: string) {
    this._questionId = item;
  }

  get ansState() {
    return this._ansState;
  }

  set ansState(item: boolean) {
    this._ansState = item;
  }

  get singleScore() {
    return this._singleScore;
  }

  set singleScore(item: number) {
    this._singleScore = item;
  }

  get answerOptions() {
    return this._answerOptions;
  }

  addAnswerOption(item: AnswerOption) {
    this._answerOptions.push(item);
  }
}

export class CategoryList {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private _category: string = "",
    private _categoryId: string = "",
    private _categoryScore: number = 0,
    private _questionList: QuestionItem[] = []
  ) {}

  get category() {
    return this._category;
  }

  set category(item: string) {
    this._category = item;
  }

  get categoryId() {
    return this._categoryId;
  }

  set categoryId(item: string) {
    this._categoryId = item;
  }

  get categoryScore() {
    return this._categoryScore;
  }

  set categoryScore(item: number) {
    this._categoryScore = item;
  }

  get questionList() {
    return this._questionList;
  }

  addQuestionItem(item: QuestionItem) {
    this._questionList.push(item);
  }
}

export class QaList {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private _qaTitle: string = "questions",
    private _totalScore: number = 0,
    private _categoryList: CategoryList[] = []
  ) {}

  get qaTitle() {
    return this._qaTitle;
  }

  set qaTitle(item: string) {
    this._qaTitle = item;
  }

  get categoryList() {
    return this._categoryList;
  }

  addCategoryList(item: CategoryList) {
    this._categoryList.push(item);
  }
}

export class AnswerItem {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public categoryId: string,
    public questionId: string,
    public optionId: string,
    public score: number
  ) {}
}

export class SingleQuestion {
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

export class AnswerList {
  // eslint-disable-next-line no-useless-constructor
  constructor(public answerList: AnswerItem[]) {}

  get categoryScore() {
    return this.answerList.reduce((accum, current) => {
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
