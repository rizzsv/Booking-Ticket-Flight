import React from 'react'
import FormSignin from './components/form-signin'

export default function SignPage() {
  return (
    <div className="min-h-screen flex items-center justify-center from-flysha-light-purple to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-lg text-gray-600">Sign in to continue your journey</p>
        </div>
        <FormSignin />
      </div>
    </div>
  )
}
