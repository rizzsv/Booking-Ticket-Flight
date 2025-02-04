"use client"

import { ActionResult } from '@/app/dashboard/(auth)/signin/form/actions'
import React from 'react'
import { useFormState } from 'react-dom'
import { SignInUser } from '../lib/action'

const intialState: ActionResult = {
    errorTitle: null,
    errorDesc: []
}

export default function FormSignin() {
  const [state, formAction] = useFormState(SignInUser, intialState)

  return (
    <form action={formAction} className="mt-8 space-y-6">
      <div className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flysha-light-purple focus:border-transparent bg-white"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flysha-light-purple focus:border-transparent bg-white"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-flysha-light-purple focus:ring-flysha-light-purple border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-flysha-light-purple hover:text-flysha-purple">
            Forgot your password?
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-flysha-light-purple hover:bg-flysha-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flysha-light-purple transition-all duration-300"
        >
          Sign In
        </button>
        
        <a
          href="/sign-up"
          className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flysha-light-purple transition-all duration-300"
        >
          Create New Account
        </a>
      </div>
    </form>
  )
}
