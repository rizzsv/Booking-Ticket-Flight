import React from 'react'
import FormSignin from './components/form-signin'

export default function SignPage() {
  return (
    <div className="form-section container max-w-[1130px] w-full mx-auto flex flex-col gap-[30px] mt-[53px]">
      <div className="title flex flex-col gap-1">
        <h1 className="font-bold text-[32px] leading-[48px]">Sign In</h1>
        <p className="font-medium text-lg leading-[27px]">Enjoy new experience of flight</p>
      </div>
      <FormSignin />
    </div>
  )
}
