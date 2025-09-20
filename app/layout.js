import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shreyan Ghosh | Full-Stack Developer & Creative Technologist',
  description: 'Full-Stack Developer and Creative Technologist specializing in modern web applications. Explore my projects, skills, and experience.',
  keywords: 'Shreyan Ghosh, Zenoguy, Full-Stack Developer, React, Next.js, Node.js, Creative Technologist',
  authors: [{ name: 'Shreyan Ghosh' }],
  creator: 'Shreyan Ghosh',
  openGraph: {
    title: 'Shreyan Ghosh | Full-Stack Developer & Creative Technologist',
    description: 'Full-Stack Developer and Creative Technologist specializing in modern web applications.',
    url: 'https://zenoguy.dev',
    siteName: 'Shreyan Ghosh Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyan Ghosh | Full-Stack Developer',
    description: 'Full-Stack Developer and Creative Technologist',
    creator: '@zenoguy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}