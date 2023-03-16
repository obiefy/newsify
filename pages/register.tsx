import Guest from '@/components/layout/guest'
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth';
import Logo from '@/components/Logo';
import Input from '@/components/Input';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/feed',
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])

  const handle = event => {
      event.preventDefault()

      register({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
          setErrors,
      })
  }

  return (
    <Guest>
      <section className="container mx-auto px-4 py-10">
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md">
          <div className="flex justify-center mx-auto">
            <h3 className='text-3xl font-semibold'>Sign Up</h3>
          </div>

          <form  onSubmit={handle} className="mt-6">
            <div>
              <Input
                id="name"
                label="Name"
                errors={errors.name}
                type="text"
                value={name}
                className="block mt-1 w-full"
                onChange={event => setName(event.target.value)}
                required
                autoFocus
              />
            </div>
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

            <div>
              <Input
                id="passwordConfirmation"
                label="Password Confirmation"
                errors={errors.password_confirmation}
                type="password"
                value={passwordConfirmation}
                className="block mt-1 w-full"
                onChange={event => setPasswordConfirmation(event.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have account? <Link href="/login" className="font-medium text-gray-700 hover:underline">Sign In</Link></p>
        </div>
      </section>
    </Guest>
  );
}

export default Register;
