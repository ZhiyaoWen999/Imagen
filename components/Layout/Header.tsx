import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

export function Header() {
  const { user, signOut } = useAuth()

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Image Gen SaaS
        </Link>
        <div>
          {user ? (
            <>
              <Link href="/dashboard">
                <Button >Dashboard</Button>
              </Link>
              <Button onClick={signOut} >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button >Login</Button>
              </Link>
              <Link href="/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}