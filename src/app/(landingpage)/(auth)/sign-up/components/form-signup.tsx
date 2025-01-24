"use client";
import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import React from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signUpUser } from "../lib/actions";

const initialState: ActionResult = {
  errorTitle: null,
  errorDesc: []
}

function SubmitButton() {
  const {pending} = useFormState()

  return (
    <button
    type="submit"
    disabled={pending}
    className="text-center text-flysha-black rounded-full bg-flysha-light-purple font-bold w-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] disabled:opacity-40"
  >
    Create New Account
  </button>
  )
}

export default function FormSignup() {

  const [state, formAction] = useFormState(signUpUser, initialState)

  return (
    <form action={formAction} className="bg-white text-flysha-black w-[500px] flex flex-col rounded-[20px] gap-5 p-5">

{state.errorTitle !== null && (
                    <div className='bg-red-500 w-full p-4 rounded-lg text-white'>
                    <div className='font-bold mb-4'>{state.errorTitle}</div>
                        
                        <ul className='list-disc list-inside'>
                            {state.errorDesc?.map((value, index) => (
                                <li key={index + value}>{value}</li>
                            ))}
                        </ul>
                </div>
        )}

      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
            Complete Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Write your name"
            className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="passport" className="font-medium">
            No. Passport
          </label>
          <input
            type="text"
            name="passport"
            id="passport"
            placeholder="Write passport number"
            className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold ring-2 ring-flysha-light-purple"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Write your email"
          className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold ring-2 "
        />
        <span className="error-messages font-medium text-xs text-flysha-red font-inter">
          Wrong format email address
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Type your password"
          className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
        />
        <span className="error-messages font-medium text-xs font-inter">
          Wrong format email address
        </span>
      </div>

      <SubmitButton />

      <Link
        href="signin.html"
        className="text-center text-flysha-black hover:text-white rounded-full bg-white hover:bg-flysha-black font-semibold w-full p-[12px_30px] border border-flysha-black transition-all duration-300"
      >
        Sign In
      </Link>
    </form>
  );
}
