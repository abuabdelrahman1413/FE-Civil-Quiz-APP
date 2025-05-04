
'use client';

import { useState, useMemo, useCallback } from 'react';
import { QuestionCard } from '@/components/question-card';
import { questions, type Question } from '@/data/questions';
import { Subject, subjectList, getSubjectIcon } from '@/data/subjects'; // Import getSubjectIcon
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
// Removed ScrollArea import as it's not currently used
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils'; // Import the cn utility function

type QuizState = 'selecting' | 'playing' | 'completed';

// Filter out 'All Subjects' if it exists in the imported list
const specificSubjects = subjectList.filter(s => s !== 'All Subjects');

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('selecting');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]); // Start with empty selection
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSubjectChange = useCallback((subject: string, isChecked: boolean) => {
    setSelectedSubjects((prevSelected) => {
      if (isChecked) {
        // Add the subject if it's not already selected
        return prevSelected.includes(subject) ? prevSelected : [...prevSelected, subject];
      } else {
        // Remove the subject
        return prevSelected.filter(s => s !== subject);
      }
    });
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedSubjects(specificSubjects);
  }, []);

  const handleClearAll = useCallback(() => {
    setSelectedSubjects([]);
  }, []);

  const filteredQuestions = useMemo(() => {
    if (selectedSubjects.length === 0) {
      return []; // No subjects selected, no questions
    }
    // Filter questions whose subject is in the selectedSubjects array.
    // Shuffle the filtered questions
    const shuffled = questions
      .filter((q) => selectedSubjects.includes(q.subject))
      .sort(() => Math.random() - 0.5);
    return shuffled;

  }, [selectedSubjects]);

  const handleStartQuiz = () => {
    if (filteredQuestions.length === 0) {
       // Should be disabled, but as a fallback
      console.warn(`Cannot start quiz with 0 questions selected.`);
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
    setSelectedSubjects([]); // Reset selection to empty
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === filteredQuestions.length - 1;

  const pageVariants = {
    initial: { opacity: 0, y: 20 }, // Slide from bottom
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }, // Slide to top
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4,
  };

  const getSelectedSubjectsText = () => {
    if (selectedSubjects.length === 0) {
      return 'None';
    }
    if (selectedSubjects.length === specificSubjects.length) {
        return 'All Subjects';
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
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gradient-to-br from-background to-muted/10">
       <div className="w-full max-w-4xl"> {/* Container for centering content */}
        <header className="text-center mb-8 mt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
                Civil FE Exam Practice
            </h1>
            <p className="text-md md:text-lg text-muted-foreground mt-1">
                Test your knowledge with multiple-choice questions
            </p>
        </header>

        <AnimatePresence mode="wait">
            {quizState === 'selecting' && (
            <motion.div
                key="selecting"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full" // Takes full width of the max-w-4xl container
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-primary">Select Subjects</h2>
                    <div className="space-x-2">
                         <Button variant="outline" size="sm" onClick={handleSelectAll}>Select All</Button>
                         <Button variant="outline" size="sm" onClick={handleClearAll}>Clear All</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {specificSubjects.map((subject) => {
                        const isChecked = selectedSubjects.includes(subject);
                        const SubjectIcon = getSubjectIcon(subject as Subject); // Get the icon component
                        const questionCount = questions.filter(q => q.subject === subject).length;

                        return (
                            <div
                                key={subject}
                                className={cn(
                                    "flex items-center space-x-3 rounded-md border p-3 transition-colors cursor-pointer hover:bg-accent hover:text-accent-foreground",
                                    isChecked ? "bg-accent/50 border-primary shadow-inner" : "bg-card shadow-sm" // Add shadow for depth
                                )}
                                onClick={() => handleSubjectChange(subject, !isChecked)} // Allow clicking the whole div
                                role="checkbox"
                                aria-checked={isChecked}
                                tabIndex={0} // Make it focusable
                                onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && handleSubjectChange(subject, !isChecked)} // Keyboard accessibility
                            >
                                <Checkbox
                                    id={subject}
                                    checked={isChecked}
                                    onCheckedChange={(checked) => handleSubjectChange(subject, !!checked)}
                                    aria-labelledby={`label-${subject}`}
                                    className="border-muted-foreground data-[state=checked]:border-primary shrink-0" // Style checkbox border and prevent shrinking
                                    tabIndex={-1} // Remove checkbox from tab order, parent div handles it
                                />
                                 {SubjectIcon && <SubjectIcon className="h-5 w-5 text-muted-foreground flex-shrink-0" />}
                                <Label
                                    htmlFor={subject} // Still associate label for screen readers
                                    id={`label-${subject}`}
                                    className="flex-1 text-sm font-medium cursor-pointer"
                                >
                                    {subject}
                                    {` (${questionCount})`}
                                </Label>
                            </div>
                        );
                    })}
                </div>

                 <div className="text-center space-y-4">
                     <p className="text-sm text-muted-foreground">
                       Selected: <span className="font-medium text-foreground">{getSelectedSubjectsText()}</span>
                     </p>
                     <p className="text-sm text-muted-foreground">
                       Total questions in selection: {filteredQuestions.length}
                     </p>
                    <Button
                    onClick={handleStartQuiz}
                    className="w-full max-w-xs mx-auto text-lg py-3 h-auto shadow-md hover:shadow-lg transition-shadow" // Larger button with shadow
                    disabled={filteredQuestions.length === 0}
                    aria-label={`Start quiz with ${filteredQuestions.length} questions from selected subjects`}
                    >
                    Start Quiz ({filteredQuestions.length})
                    </Button>
                    {filteredQuestions.length === 0 && (
                        <p className="text-sm text-destructive">Please select at least one subject to start the quiz.</p>
                    )}
                 </div>

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
                className="w-full max-w-md mx-auto" // Center completion card
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
       </div>
    </main>
  );
}

