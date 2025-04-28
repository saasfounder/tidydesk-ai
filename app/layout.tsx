import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-tidydesk-primary text-tidydesk-light min-h-screen">
        {children}
      </body>
    </html>
  )
}
