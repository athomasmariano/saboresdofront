import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/toggle'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer' 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        
        <Header />

        <main className="max-w-7xl mx-80 px-4 sm:px-6 md:px-8 py-6 sm:py-8">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModeToggle />
            {children}
          </ThemeProvider>
        </main>

        <Footer /> 
        
      </body>
    </html>
  )
}
