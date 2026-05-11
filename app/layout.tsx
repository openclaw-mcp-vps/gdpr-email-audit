import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Email Audit — Audit email lists for GDPR compliance',
  description: 'Scan your email marketing lists to identify GDPR compliance gaps, consent tracking issues, and required data deletions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3e30de8c-9030-49d0-94cb-0b9759980c90"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
