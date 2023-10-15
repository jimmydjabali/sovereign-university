// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { AccountsUid } from './Accounts';

/** Identifier type for users.quiz_attempts */
export type QuizAttemptsCourseId = string;

/** Identifier type for users.quiz_attempts */
export type QuizAttemptsPart = number;

/** Identifier type for users.quiz_attempts */
export type QuizAttemptsChapter = number;

/** Represents the table users.quiz_attempts */
export default interface QuizAttempts {
  uid: AccountsUid;

  course_id: QuizAttemptsCourseId;

  part: QuizAttemptsPart;

  chapter: QuizAttemptsChapter;

  questions_count: number;

  correct_answers_count: number;

  done_at: number;
}

/** Represents the initializer for the table users.quiz_attempts */
export interface QuizAttemptsInitializer {
  uid: AccountsUid;

  course_id: QuizAttemptsCourseId;

  part: QuizAttemptsPart;

  chapter: QuizAttemptsChapter;

  questions_count: number;

  correct_answers_count: number;

  /** Default value: now() */
  done_at?: number;
}

/** Represents the mutator for the table users.quiz_attempts */
export interface QuizAttemptsMutator {
  uid?: AccountsUid;

  course_id?: QuizAttemptsCourseId;

  part?: QuizAttemptsPart;

  chapter?: QuizAttemptsChapter;

  questions_count?: number;

  correct_answers_count?: number;

  done_at?: number;
}
