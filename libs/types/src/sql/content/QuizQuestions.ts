// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { CoursesId } from './Courses';
import type { CoursePartsPart } from './CourseParts';
import type { CourseChaptersChapter } from './CourseChapters';

/** Identifier type for content.quiz_questions */
export type QuizQuestionsId = number;

/** Represents the table content.quiz_questions */
export default interface QuizQuestions {
  id: QuizQuestionsId;

  course_id: CoursesId;

  part: CoursePartsPart;

  chapter: CourseChaptersChapter;

  difficulty: string;

  author?: string;

  duration?: number;

  last_updated: number;

  last_commit: string;
}

/** Represents the initializer for the table content.quiz_questions */
export interface QuizQuestionsInitializer {
  id: QuizQuestionsId;

  course_id: CoursesId;

  part: CoursePartsPart;

  chapter: CourseChaptersChapter;

  difficulty: string;

  author?: string;

  duration?: number;

  /** Default value: now() */
  last_updated?: number;

  last_commit: string;
}

/** Represents the mutator for the table content.quiz_questions */
export interface QuizQuestionsMutator {
  id?: QuizQuestionsId;

  course_id?: CoursesId;

  part?: CoursePartsPart;

  chapter?: CourseChaptersChapter;

  difficulty?: string;

  author?: string;

  duration?: number;

  last_updated?: number;

  last_commit?: string;
}
