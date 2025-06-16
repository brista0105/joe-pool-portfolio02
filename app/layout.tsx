import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Joe Pool - Automation & AI Expert | $70/hr',
  description: 'Professional automation consultant specializing in Make.com, N8N, Power Automate, and AI integration. 10+ years experience building workflow automation solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Removed custom font <link> tags to avoid Next.js warning */}
      </head>
      <body className="font-inter bg-vercel-white dark:bg-vercel-black text-gray-900 dark:text-vercel-white transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}