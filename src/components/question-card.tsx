'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'; // Import Badge
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { OptionButton } from '@/components/option-button';
import type { Question } from '@/data/questions';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onNextQuestion,
  isLastQuestion,
}: QuestionCardProps) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswerIndex(index);
      setIsAnswered(true);
    }
  };

  const isCorrect = selectedAnswerIndex === question.correctAnswerIndex;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-muted/50 p-4 md:p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1 mr-4">
            <CardTitle className="text-lg md:text-xl font-semibold leading-tight mb-1">
              {question.text}
            </CardTitle>
             <Badge variant="secondary" className="text-xs">{question.subject}</Badge> {/* Display Subject */}
          </div>
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap mt-1">
            {questionNumber} / {totalQuestions}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6 space-y-3">
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            text={option}
            index={index}
            isSelected={selectedAnswerIndex === index}
            isCorrect={index === question.correctAnswerIndex}
            isAnswered={isAnswered}
            onClick={handleOptionClick}
          />
        ))}
      </CardContent>

      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Separator className="my-0" />
            <CardFooter className="flex flex-col items-start p-4 md:p-6 bg-secondary/30">
              <h3 className="text-md font-semibold mb-2 text-foreground">Explanation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {question.explanation}
              </p>
              <Button
                className="mt-4 w-full sm:w-auto self-end transition-opacity duration-300"
                onClick={onNextQuestion}
                aria-label={isLastQuestion ? 'Finish Quiz' : 'Next Question'}
              >
                {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </CardFooter>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
