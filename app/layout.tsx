import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feature Request Router — Route requests to the right team',
  description: 'Automatically route feature requests from email, Slack, and support tickets to the right team with AI-powered priority scoring.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fcba6433-730e-453f-935f-7268f8e9fd4f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
