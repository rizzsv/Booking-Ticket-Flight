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
    <form action={formAction} className="bg-white text-flysha-black w-[500px] flex flex-col rounded-[20px] gap-5 p-5">
    <div className="flex flex-col gap-1">
      <label htmlFor="email" className="font-medium">Email Address</label>
      <input type="email" name="email" id="email" placeholder="Write your email" className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple" />
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="password" className="font-medium">Password</label>
      <input type="password" name="password" id="password" placeholder="Type your password" className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple" />
    </div>
    <button type='submit' className="text-center text-flysha-black rounded-full bg-flysha-light-purple font-bold w-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">Sign In</button>
    <a href="signup.html" className="text-center text-flysha-black hover:text-white rounded-full bg-white hover:bg-flysha-black font-semibold w-full p-[12px_30px] border border-flysha-black transition-all duration-300">Create New Account</a>
  </form>
  )
}
