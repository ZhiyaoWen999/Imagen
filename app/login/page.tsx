import { LoginForm } from '@/components/Auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <LoginForm />
    </div>
  )
}