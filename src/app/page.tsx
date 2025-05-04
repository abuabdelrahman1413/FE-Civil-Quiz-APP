
'use client';

import { useState, useMemo, useCallback } from 'react';
import { QuestionCard } from '@/components/question-card';
import { questions, type Question } from '@/data/questions';
import { Subject, subjectList, getSubjectIcon } from '@/data/subjects'; // Import getSubjectIcon
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Import Select components
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type QuizState = 'selecting' | 'playing' | 'completed';
type QuestionCountOption = '10' | '20' | '50' | 'all';

// Filter out 'All Subjects' if it exists in the imported list
const specificSubjects = subjectList.filter(s => s !== 'All Subjects');
const questionCountOptions: QuestionCountOption[] = ['10', '20', '50', 'all'];

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('selecting');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<QuestionCountOption>('10'); // Default to 10 questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSubjectChange = useCallback((subject: string, isChecked: boolean) => {
    setSelectedSubjects((prevSelected) => {
      if (isChecked) {
        return prevSelected.includes(subject) ? prevSelected : [...prevSelected, subject];
      } else {
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

  const availableQuestionsBySubject = useMemo(() => {
    if (selectedSubjects.length === 0) {
      return []; // No subjects selected, no questions
    }
    // Filter questions whose subject is in the selectedSubjects array.
    return questions.filter((q) => selectedSubjects.includes(q.subject));
  }, [selectedSubjects]);

  const filteredQuestions = useMemo(() => {
    const shuffled = [...availableQuestionsBySubject].sort(() => Math.random() - 0.5);
    if (selectedQuestionCount === 'all' || shuffled.length === 0) {
      return shuffled;
    }
    const count = parseInt(selectedQuestionCount, 10);
    return shuffled.slice(0, count);
  }, [availableQuestionsBySubject, selectedQuestionCount]);


  const handleStartQuiz = () => {
    if (filteredQuestions.length === 0) {
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
    setSelectedSubjects([]);
    setSelectedQuestionCount('10'); // Reset question count to default
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === filteredQuestions.length - 1;

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4,
  };

  const getSelectedSubjectsText = () => {
    if (selectedSubjects.length === 0) return 'None';
    if (selectedSubjects.length === specificSubjects.length) return 'All Subjects';
    if (selectedSubjects.length === 1) return selectedSubjects[0];
    if (selectedSubjects.length > 3) return `${selectedSubjects.length} subjects selected`;
    return [...selectedSubjects].sort().join(', ');
  }

   const maxQuestionsAvailable = availableQuestionsBySubject.length;
   const actualQuizLength = filteredQuestions.length;

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gradient-to-br from-background to-muted/10">
       <div className="w-full max-w-4xl">
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
                className="w-full"
            >
                {/* Subject Selection */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-primary">1. Select Subjects</h2>
                        <div className="space-x-2">
                            <Button variant="outline" size="sm" onClick={handleSelectAll}>Select All</Button>
                            <Button variant="outline" size="sm" onClick={handleClearAll}>Clear All</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {specificSubjects.map((subject) => {
                            const isChecked = selectedSubjects.includes(subject);
                            const SubjectIcon = getSubjectIcon(subject as Subject);
                            const questionCount = questions.filter(q => q.subject === subject).length;

                            return (
                                <div
                                    key={subject}
                                    className={cn(
                                        "flex items-center space-x-3 rounded-md border p-3 transition-colors cursor-pointer hover:bg-accent hover:text-accent-foreground",
                                        isChecked ? "bg-accent/50 border-primary shadow-inner" : "bg-card shadow-sm"
                                    )}
                                    onClick={() => handleSubjectChange(subject, !isChecked)}
                                    role="checkbox"
                                    aria-checked={isChecked}
                                    tabIndex={0}
                                    onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && handleSubjectChange(subject, !isChecked)}
                                >
                                    <Checkbox
                                        id={subject}
                                        checked={isChecked}
                                        onCheckedChange={(checked) => handleSubjectChange(subject, !!checked)}
                                        aria-labelledby={`label-${subject}`}
                                        className="border-muted-foreground data-[state=checked]:border-primary shrink-0"
                                        tabIndex={-1}
                                    />
                                    {SubjectIcon && <SubjectIcon className="h-5 w-5 text-muted-foreground flex-shrink-0" />}
                                    <Label
                                        htmlFor={subject}
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
                     <p className="text-sm text-muted-foreground mt-3">
                       Selected: <span className="font-medium text-foreground">{getSelectedSubjectsText()}</span> ({maxQuestionsAvailable} questions available)
                     </p>
                </div>

                {/* Number of Questions Selection */}
                <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">2. Select Number of Questions</h2>
                    <Select
                        value={selectedQuestionCount}
                        onValueChange={(value) => setSelectedQuestionCount(value as QuestionCountOption)}
                        disabled={maxQuestionsAvailable === 0} // Disable if no subjects selected
                    >
                        <SelectTrigger className="w-full max-w-xs mx-auto">
                            <SelectValue placeholder="Number of questions" />
                        </SelectTrigger>
                        <SelectContent>
                             {questionCountOptions.map((option) => {
                                const numOption = option === 'all' ? maxQuestionsAvailable : parseInt(option, 10);
                                const isDisabled = maxQuestionsAvailable === 0 || (option !== 'all' && maxQuestionsAvailable < numOption);
                                const label = option === 'all' ? `All (${maxQuestionsAvailable})` : option;
                                return (
                                    <SelectItem key={option} value={option} disabled={isDisabled}>
                                        {label} Questions
                                    </SelectItem>
                                );
                             })}
                        </SelectContent>
                    </Select>
                      {maxQuestionsAvailable > 0 && actualQuizLength !== maxQuestionsAvailable && selectedQuestionCount !== 'all' && (
                        <p className="text-sm text-muted-foreground mt-2 text-center">
                            {`Note: Only ${actualQuizLength} questions available for the selected subjects and count.`}
                        </p>
                    )}
                </div>


                 {/* Start Quiz Button */}
                 <div className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Quiz will contain: <span className="font-medium text-foreground">{actualQuizLength} questions</span>
                    </p>
                    <Button
                        onClick={handleStartQuiz}
                        className="w-full max-w-xs mx-auto text-lg py-3 h-auto shadow-md hover:shadow-lg transition-shadow"
                        disabled={actualQuizLength === 0}
                        aria-label={`Start quiz with ${actualQuizLength} questions`}
                    >
                        Start Quiz ({actualQuizLength})
                    </Button>
                    {maxQuestionsAvailable === 0 && (
                        <p className="text-sm text-destructive">Please select at least one subject.</p>
                    )}
                    {maxQuestionsAvailable > 0 && actualQuizLength === 0 && selectedQuestionCount !== 'all' && (
                         <p className="text-sm text-destructive">Not enough questions available for the selected count. Choose fewer questions or 'All'.</p>
                    )}
                 </div>

            </motion.div>
            )}

            {quizState === 'playing' && currentQuestion && (
            <motion.div
                key={currentQuestionIndex}
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
                totalQuestions={actualQuizLength} // Use actual quiz length
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
                className="w-full max-w-md mx-auto"
            >
                <Card className="text-center shadow-lg rounded-lg">
                <CardHeader>
                    <CardTitle className="text-xl md:text-2xl font-semibold text-primary">
                    Quiz Completed!
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                    You have answered all {actualQuizLength} questions for the selected subject(s): <span className="font-medium text-foreground">{getSelectedSubjectsText()}</span>.
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
