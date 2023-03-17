import Layout from '@/components/layout'
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth';
import Input from '@/components/Input';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthSessionStatus from '@/components/AuthSessionStatus';

const Login = () => {
  const router = useRouter()

  const { login } = useAuth({
      middleware: 'guest',
      redirectIfAuthenticated: '/feed',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(true)
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
      if (router.query.reset?.length > 0 && errors.length === 0) {
          setStatus(atob(router.query.reset))
      } else {
          setStatus(null)
      }
  })

  const handle = async event => {
      event.preventDefault()

      login({
          email,
          password,
          remember: shouldRemember,
          setErrors,
          setStatus,
      })
  }

  return (
    <Layout>
      {status}
      <section className="container mx-auto px-4 py-10">
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md">
          <div className="flex justify-center mx-auto">
          <h3 className='text-3xl font-semibold'>Sign In</h3>
          </div>
          <AuthSessionStatus className="mb-4" status={status} />
          <form  onSubmit={handle} className="mt-6">
            <div>
              <Input
                id="email"
                label="Email"
                errors={errors.email}
                type="email"
                value={email}
                className="block mt-1 w-full"
                onChange={event => setEmail(event.target.value)}
                required
                autoFocus
              />
            </div>
            
            <div>
              <Input
                id="password"
                label="Password"
                errors={errors.password}
                type="password"
                value={password}
                className="block mt-1 w-full"
                onChange={event => setPassword(event.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-400"> Do not have an account? <Link href="/register" className="font-medium text-gray-700 hover:underline">Create One</Link></p>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
