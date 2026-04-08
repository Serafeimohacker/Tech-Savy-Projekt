import { ClerkProvider, Show, SignInButton, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
          <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '1rem 2rem', 
            background: '#f4f4f4',
            borderBottom: '1px solid #ddd' 
          }}>
            <h1 style={{ margin: 0, fontSize: '1.5rem' }}>TechSavvy Portal</h1>
            <nav>
              <Show when="signed-out">
                {/* We removed the extra <button> tag inside here to keep the HTML clean */}
                <SignInButton mode="modal" />
              </Show>
              <Show when="signed-in">
                <UserButton showName />
              </Show>
            </nav>
          </header>
          <main style={{ padding: '2rem' }}>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}