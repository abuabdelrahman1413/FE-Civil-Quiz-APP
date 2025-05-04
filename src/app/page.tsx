
'use client';

import { useState, useMemo, useCallback } from 'react';
import { QuestionCard } from '@/components/question-card';
import { questions, type Question } from '@/data/questions';
import { subjectList, ALL_SUBJECTS, Subject } from '@/data/subjects';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';

type QuizState = 'selecting' | 'playing' | 'completed';

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('selecting');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([ALL_SUBJECTS]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSubjectChange = useCallback((subject: string, isChecked: boolean) => {
    setSelectedSubjects((prevSelected) => {
      let newSelection: string[];

      if (subject === ALL_SUBJECTS) {
        // If "All Subjects" is checked, select only "All Subjects".
        // If unchecked, clear the selection (will default back to "All Subjects" if empty).
        newSelection = isChecked ? [ALL_SUBJECTS] : [];
      } else {
        if (isChecked) {
          // Add the subject, removing "All Subjects" if it's currently selected.
          newSelection = [...prevSelected.filter(s => s !== ALL_SUBJECTS), subject];
        } else {
          // Remove the subject.
          newSelection = prevSelected.filter(s => s !== subject);
        }
      }

      // If the resulting selection is empty, default back to "All Subjects".
      if (newSelection.length === 0) {
        return [ALL_SUBJECTS];
      }

      // If all specific subjects are selected, switch to just "All Subjects"
      const allSpecificSubjects = subjectList.filter(s => s !== ALL_SUBJECTS);
      if (!newSelection.includes(ALL_SUBJECTS) && newSelection.length === allSpecificSubjects.length) {
         return [ALL_SUBJECTS];
      }


      return newSelection;
    });
  }, []);


  const filteredQuestions = useMemo(() => {
    // If "All Subjects" is selected or the selection somehow became empty, include all questions.
    if (selectedSubjects.includes(ALL_SUBJECTS) || selectedSubjects.length === 0) {
      return questions;
    }
    // Otherwise, filter questions whose subject is in the selectedSubjects array.
    return questions.filter((q) => selectedSubjects.includes(q.subject));
  }, [selectedSubjects]);

  const handleStartQuiz = () => {
    if (filteredQuestions.length === 0) {
      // This case should ideally not happen if defaulting to ALL_SUBJECTS works correctly.
      console.warn(`No questions available for selected subjects: ${selectedSubjects.join(', ')}`);
      return;
    }
    setCurrentQuestionIndex(0);
    setQuizState('playing');
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizState('completed');
    }
  };

  const handleRestartQuiz = () => {
    setQuizState('selecting');
    setSelectedSubjects([ALL_SUBJECTS]); // Reset selection
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === filteredQuestions.length - 1;

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -50 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  const getSelectedSubjectsText = () => {
    if (selectedSubjects.includes(ALL_SUBJECTS)) {
      return ALL_SUBJECTS;
    }
    if (selectedSubjects.length === 1) {
      return selectedSubjects[0];
    }
    if (selectedSubjects.length > 3) {
        return `${selectedSubjects.length} subjects selected`;
    }
    // Sort for consistent display order
    return [...selectedSubjects].sort().join(', ');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-background to-muted/30">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
        FE Civil Exam Prep
      </h1>
      <AnimatePresence mode="wait">
        {quizState === 'selecting' && (
          <motion.div
            key="selecting"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full max-w-md"
          >
            <Card className="shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold text-primary text-center">
                  Select Subjects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ScrollArea className="h-60 w-full rounded-md border p-4">
                  <div className="space-y-3">
                     {subjectList.map((subject) => {
                      // Determine checked state based on whether the subject is in the array
                      // or if "All Subjects" is selected (which means everything is conceptually checked)
                      const isChecked = selectedSubjects.includes(ALL_SUBJECTS) || selectedSubjects.includes(subject);
                      // "All Subjects" is disabled only if it's the *sole* item selected.
                      // This prevents unchecking it when it's the only way to represent "everything".
                      // const isDisabled = subject === ALL_SUBJECTS && selectedSubjects.length === 1 && selectedSubjects[0] === ALL_SUBJECTS;
                      const isDisabled = false; // Allow toggling "All Subjects" freely

                      return (
                        <div key={subject} className="flex items-center space-x-2">
                          <Checkbox
                            id={subject}
                            // Use the direct membership check for the checkbox state,
                            // but the 'isChecked' derived above might be useful elsewhere.
                            checked={selectedSubjects.includes(subject) || selectedSubjects.includes(ALL_SUBJECTS)}
                            onCheckedChange={(checked) => handleSubjectChange(subject, !!checked)}
                            disabled={isDisabled}
                            aria-labelledby={`label-${subject}`}
                            // For "All Subjects", indicate it controls others
                            aria-controls={subject === ALL_SUBJECTS ? subjectList.filter(s => s !== ALL_SUBJECTS).join(' ') : undefined}
                          />
                          <Label
                            htmlFor={subject}
                            id={`label-${subject}`}
                            className={`flex-1 ${isDisabled ? 'text-muted-foreground cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            {subject}
                            {/* Show count only for specific subjects */}
                            {subject !== ALL_SUBJECTS && ` (${questions.filter(q => q.subject === subject).length})`}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
                 {/* This message might be obsolete if the default logic works */}
                 {/* {filteredQuestions.length === 0 && !selectedSubjects.includes(ALL_SUBJECTS) && (
                   <p className="text-sm text-destructive text-center">No questions available for the selected combination of subjects.</p>
                 )} */}
                 <p className="text-sm text-muted-foreground text-center">
                   Selected: {getSelectedSubjectsText()}
                 </p>
                 <p className="text-sm text-muted-foreground text-center">
                   Total questions in selection: {filteredQuestions.length}
                 </p>
                <Button
                  onClick={handleStartQuiz}
                  className="w-full"
                  // Disable button only if the final filtered list is empty (shouldn't happen with default)
                  disabled={filteredQuestions.length === 0}
                  aria-label={`Start quiz with ${filteredQuestions.length} questions from selected subjects`}
                >
                  Start Quiz ({filteredQuestions.length})
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {quizState === 'playing' && currentQuestion && (
          <motion.div
            key={currentQuestionIndex} // Key change triggers animation
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full"
          >
            <QuestionCard
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={filteredQuestions.length}
              onNextQuestion={handleNextQuestion}
              isLastQuestion={isLastQuestion}
            />
          </motion.div>
        )}

        {quizState === 'completed' && (
          <motion.div
            key="completion"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full max-w-md"
          >
            <Card className="text-center shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold text-primary">
                  Quiz Completed!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You have answered all {filteredQuestions.length} questions for the selected subject(s): <span className="font-medium text-foreground">{getSelectedSubjectsText()}</span>.
                </p>
                <Button onClick={handleRestartQuiz} className="w-full">
                  Take Another Quiz
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

