
export enum TestType {
  MATCHING = 'MATCHING',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
}

export interface Question {
  id: number;
  text: string;
}

export interface MultipleChoiceQuestion extends Question {
  options: { id: string; text: string }[];
}

export interface Passage {
  id: string;
  title?: string;
  text: string;
}

interface BaseTest {
  id: number;
  title: string;
  instructions: string;
}

export interface MatchingTestType extends BaseTest {
  type: TestType.MATCHING;
  questions: Question[];
  passages: Passage[];
  answers: string[];
}

export interface MultipleChoiceTestType extends BaseTest {
  type: TestType.MULTIPLE_CHOICE;
  passage: string;
  questions: MultipleChoiceQuestion[];
  answers: string[];
}

export type Test = MatchingTestType | MultipleChoiceTestType;
