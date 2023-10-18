import Link from 'next/link'
import './globals.css'
import LogoutButton from '@/components/LogoutButton'
import DeployButton from '@/components/DeployButton'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const dynamic = 'force-dynamic'
 
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center">
        <nav>
          {user ? (
            <div>
              Hey, {user.email}!
              <LogoutButton />
            </div>
          ) : (
            <Link
              href="/login"
              
            >
              Login
            </Link>
          )}
      </nav>
          {children}
        </main>
      </body>
    </html>
  )
}


