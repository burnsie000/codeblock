import dynamic from 'next/dynamic'
const Link = dynamic(() => import('next/link'))
import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
const Image = dynamic(() => import('next/image'))
const Script = dynamic(() => import('next/script'))



export default async function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
    const cookieStore = cookies()
    const supabase = await createClient(cookieStore)
    const { data: { session }} = await supabase.auth.getSession()
    if (session) {
        redirect('/')
    }
  const signIn = async (formData: FormData) => {
    'use server'
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const turnstileRes = formData.get('cf-turnstile-response') as string
    console.log(turnstileRes)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/')
  }

  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/login?message=Check email to continue sign in process')
  }

  return (
    <div className="flex-1 flex flex-col h-screen items-center relative mx-auto w-full px-8 justify-center py-[8rem] gap-2">
      
        <Link
        href="/"
        className="relative text-white flex float-left items-start justify-start mr-auto bg-primary px-7 py-1 font-semibold rounded-3xl"
      >
        Back
      </Link>
        <Image src='/codeblock.svg' alt='codeblock logo' title='CodeBlock' height={200} width={250} className='relative flex flex-1 mx-auto justify-center items-center' />
      <form
        className="animate-in flex-1 flex flex-col max-w-[20rem] md:max-w-[30rem] w-full justify-center gap-2 text-foreground"
        action={signIn}
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-3xl border-primary px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-3xl px-4 py-2 bg-inherit border border-primary mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-primary rounded-3xl px-4 py-2 text-foreground mb-2">
          Sign In
        </button>
        <button
          formAction={signUp}
          className="border border-primary rounded-3xl px-4 py-2 text-foreground mb-2"
        >
          Sign Up
        </button>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  )
}
