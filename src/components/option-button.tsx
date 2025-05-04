'use client';

import type React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface OptionButtonProps {
  text: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  isAnswered: boolean;
  onClick: (index: number) => void;
}

export function OptionButton({
  text,
  index,
  isSelected,
  isCorrect,
  isAnswered,
  onClick,
}: OptionButtonProps) {
  const getVariant = (): 'default' | 'secondary' | 'destructive' | 'outline' => {
    if (!isAnswered) return 'outline';
    if (isSelected) {
      return isCorrect ? 'default' : 'destructive'; // Use default (primary/blue) for correct selected, destructive for incorrect selected
    }
    if (isCorrect) return 'default'; // Show correct answer as default (primary/blue) if user selected wrong
    return 'outline'; // Unselected, incorrect options remain outline
  };

  const getBackgroundColor = (): string => {
    if (!isAnswered) return ''; // Default background
    if (isSelected) {
      return isCorrect ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700';
    }
    if (isCorrect) return 'bg-green-600 hover:bg-green-700'; // Show correct answer in green
    return 'bg-muted'; // Muted background for unselected incorrect options after answering
  };

   const getTextColor = (): string => {
    if (isAnswered && (isSelected || isCorrect)) return 'text-primary-foreground'; // White text on colored background
    return 'text-foreground'; // Default text color
  };

  const Icon = isSelected ? (isCorrect ? Check : X) : (isCorrect && isAnswered ? Check : null);

  return (
    <Button
      variant={getVariant()}
      className={cn(
        'w-full justify-start h-auto py-3 px-4 text-left whitespace-normal transition-colors duration-300 ease-in-out relative',
         getBackgroundColor(), // Apply dynamic background color
         getTextColor(), // Apply dynamic text color
        isAnswered ? 'cursor-not-allowed opacity-80' : 'hover:bg-accent hover:text-accent-foreground' // Disable hover effect if answered
      )}
      onClick={() => !isAnswered && onClick(index)}
      disabled={isAnswered}
      aria-pressed={isSelected}
      aria-live="polite" // Announce changes
    >
      <span className="mr-2 font-semibold">{String.fromCharCode(65 + index)}.</span>
      <span>{text}</span>
      {Icon && <Icon className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5" />}
    </Button>
  );
}
