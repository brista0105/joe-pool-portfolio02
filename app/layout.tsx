import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Joe Pool - Senior Software Developer',
  description: 'Professional portfolio of Joe Pool, Senior Software Developer with expertise in C#, ASP.NET, SQL, and modern web technologies.',
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