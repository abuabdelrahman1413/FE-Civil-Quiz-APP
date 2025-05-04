
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
      if (subject === ALL_SUBJECTS) {
        // If "All Subjects" is checked, return only that.
        // If it's unchecked (which shouldn't happen directly unless it's the only one), keep it as All.
        return isChecked ? [ALL_SUBJECTS] : prevSelected;
      }

      let newSelection: string[];
      if (isChecked) {
        // Add the subject, removing "All Subjects" if present.
        newSelection = [...prevSelected.filter(s => s !== ALL_SUBJECTS), subject];
      } else {
        // Remove the subject.
        newSelection = prevSelected.filter(s => s !== subject);
      }

      // If no specific subjects are selected, default back to "All Subjects".
      if (newSelection.length === 0) {
        return [ALL_SUBJECTS];
      }

      return newSelection;
    });
  }, []);


  const filteredQuestions = useMemo(() => {
    if (selectedSubjects.includes(ALL_SUBJECTS) || selectedSubjects.length === 0) {
      return questions;
    }
    return questions.filter((q) => selectedSubjects.includes(q.subject));
  }, [selectedSubjects]);

  const handleStartQuiz = () => {
    if (filteredQuestions.length === 0) {
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
    return selectedSubjects.join(', ');
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
                      const isChecked = selectedSubjects.includes(subject);
                      const isAllSubjectsOption = subject === ALL_SUBJECTS;
                      const isDisabled = isAllSubjectsOption && selectedSubjects.length > 1 && !isChecked; // Disable "All" if others are checked

                      return (
                        <div key={subject} className="flex items-center space-x-2">
                          <Checkbox
                            id={subject}
                            checked={isChecked}
                            onCheckedChange={(checked) => handleSubjectChange(subject, !!checked)}
                            disabled={isDisabled}
                            aria-labelledby={`label-${subject}`}
                          />
                          <Label
                            htmlFor={subject}
                            id={`label-${subject}`}
                            className={`flex-1 ${isDisabled ? 'text-muted-foreground cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            {subject}
                            {subject !== ALL_SUBJECTS && ` (${questions.filter(q => q.subject === subject).length})`}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
                 {filteredQuestions.length === 0 && !selectedSubjects.includes(ALL_SUBJECTS) && (
                   <p className="text-sm text-destructive text-center">No questions available for the selected combination of subjects.</p>
                 )}
                 <p className="text-sm text-muted-foreground text-center">
                   Selected: {getSelectedSubjectsText()}
                 </p>
                 <p className="text-sm text-muted-foreground text-center">
                   Total questions in selection: {filteredQuestions.length}
                 </p>
                <Button
                  onClick={handleStartQuiz}
                  className="w-full"
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
