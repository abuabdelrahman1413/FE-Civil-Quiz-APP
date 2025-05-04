
import { Subject } from './subjects';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  subject: Subject; // Added subject field
}

// Question data will be added later.
export const questions: Question[] = [];
