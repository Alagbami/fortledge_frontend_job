import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GoodFood Dashboard',
  description: 'Food ordering dashboard for restaurant management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
