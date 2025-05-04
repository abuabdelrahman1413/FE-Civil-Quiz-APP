'use client';

import { useState, useMemo } from 'react';
import { QuestionCard } from '@/components/question-card';
import { questions, type Question } from '@/data/questions';
import { subjectList, ALL_SUBJECTS } from '@/data/subjects';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';

type QuizState = 'selecting' | 'playing' | 'completed';

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('selecting');
  const [selectedSubject, setSelectedSubject] = useState<string>(ALL_SUBJECTS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const filteredQuestions = useMemo(() => {
    if (selectedSubject === ALL_SUBJECTS) {
      return questions;
    }
    return questions.filter((q) => q.subject === selectedSubject);
  }, [selectedSubject]);

  const handleStartQuiz = () => {
    if (filteredQuestions.length === 0) {
      // Optionally handle the case where no questions exist for the selected subject
      console.warn(`No questions available for subject: ${selectedSubject}`);
      // You might want to show a message to the user here
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
    setQuizState('selecting'); // Go back to subject selection
  };

    const handleSelectNewSubject = () => {
    setQuizState('selecting');
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
                  Select a Subject
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject-select">Subject Area</Label>
                  <Select
                    value={selectedSubject}
                    onValueChange={setSelectedSubject}
                  >
                    <SelectTrigger id="subject-select" className="w-full">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjectList.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                 {filteredQuestions.length === 0 && selectedSubject !== ALL_SUBJECTS && (
                   <p className="text-sm text-destructive text-center">No questions available for this subject yet.</p>
                 )}
                 <p className="text-sm text-muted-foreground text-center">
                   {selectedSubject === ALL_SUBJECTS
                     ? `Total questions: ${questions.length}`
                     : `Questions in this subject: ${filteredQuestions.length}`}
                 </p>
                <Button
                  onClick={handleStartQuiz}
                  className="w-full"
                  disabled={filteredQuestions.length === 0}
                  aria-label={`Start quiz with ${filteredQuestions.length} questions`}
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
                  You have answered all {filteredQuestions.length} questions for the selected subject: <span className="font-medium text-foreground">{selectedSubject}</span>.
                </p>
                <Button onClick={handleRestartQuiz} className="w-full">
                  Take Another Quiz
                </Button>
                 {/* Optional: Allow restarting the same subject */}
                 {/* <Button onClick={handleStartQuiz} variant="outline" className="w-full">
                   Restart "{selectedSubject}" Quiz
                 </Button> */}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
