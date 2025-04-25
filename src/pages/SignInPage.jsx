import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import  {signIn}  from '../lib/auth'
import { useAuth } from '../context/AuthContext'

const SignInPage = () => {


  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  // const [success, setSuccess] = useState(false)



  const authIfo = useAuth()
  console.log({ authIfo })

  const navigate = useNavigate()

  const handleSubmit = async (event) => {

    event.preventDefault();

    setIsLoading(true)
    setError(null)

    try {

      await signIn(email, password);

      navigate('/')

    } catch (error) {
      setError(error.message || "Failed to sign in . Please check your credentials.")
      console.log("error", error)
    } finally {
      setIsLoading(false)
    }
  }



  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='max-w-md w-full'>
        {/* title and subtitle */}
        <div className='text-center mb-10'>
          <h1 className='text-3xl font-bold'>Welcome Back</h1>
          <p className='text-gray-600 mt-2'>Sign in to access your account</p>
        </div>
        {/* form info */}
        <div className="bg-white rounded-lg shadow-md p-8">


          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>



            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-200 disabled:cursor-not-allowed disabled:bg-orange-700"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sing In'}

            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-white bg-amber-400 hover:text-orange-800 font-semibold">
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignInPage