'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/Layout/Header";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-4xl font-bold text-center">Welcome to Image Gen SaaS</h1>
        <p className="text-xl text-center max-w-2xl">
          Generate stunning images using AI technology. Edit prompts, adjust settings, and unleash your creativity.
        </p>
        <div className="flex gap-4">
          {user ? (
            <Link href="/dashboard">
              <Button>Go to Dashboard</Button>
            </Link>
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
      </main>
      <footer className="py-4 text-center text-sm text-gray-500">
        © 2023 Image Gen SaaS. All rights reserved.
      </footer>
    </div>
  );
}
