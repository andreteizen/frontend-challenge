import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/styles/base/globals.scss'
import ReactQueryProvider from '@/utils/Providers/ReactQueryProvider'
import ReduxProvider from '@/utils/Providers/ReduxProvider'

export const metadata: Metadata = {
  title: 'Starsoft Challenge',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className}`}>
        <ReduxProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
