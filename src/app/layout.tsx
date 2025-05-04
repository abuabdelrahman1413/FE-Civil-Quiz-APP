import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

export const metadata: Metadata = {
  title: 'FE Civil Exam Prep', // Updated title
  description: 'Practice questions for the FE Civil exam.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}> {/* Removed font variables */}
        {children}
        <Toaster /> {/* Add Toaster for potential future use */}
      </body>
    </html>
  );
}
