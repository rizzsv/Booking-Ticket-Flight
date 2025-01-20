"use client"

import type { ActionResult } from '@/app/dashboard/(auth)/signin/form/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React, {type FC } from 'react'
import { saveAirplane, updateAirplane } from '../lib/action'
import { useFormState } from 'react-dom'
import type { Airplane } from '@prisma/client'

interface formAirplaneProps {

    type?: "ADD" | "EDIT"
    defaultValues? : Airplane | null ;
 }

const initialFormState: ActionResult = {
    errorTitle: null,
    errorDesc: []
}

const SubmitButton = () => {
    const {pending} = useFormState()

    return (
        <Button disabled={pending} className='w-full'>Submit</Button>
    )
}

const FormAirplane: FC<formAirplaneProps> = ({type, defaultValues}) => {

    const updateAirplaneWithId = (_state: ActionResult, formData: FormData) => updateAirplane(null, defaultValues?.id!!, formData)

    const [state, formAction] = useFormState(type === "ADD" ? saveAirplane: updateAirplaneWithId, initialFormState)

  return (
    <form action={formAction} className='w-[40%] space-y-4'>
                {state.errorTitle !== null && (
                    <div className='my-7 bg-red-500 p-4 rounded-lg text-white'>
                    <div className='font-bold mb-4'>{state.errorTitle}</div>
                        
                        <ul className='list-disc list-inside'>
                            {state.errorDesc?.map((value, index) => (
                                <li key={index + value}>{value}</li>
                            ))}
                        </ul>
                </div>
        )}
        <div className='space-y-2'>
            <Label htmlFor='code'>
                Kode Pesawat
            </Label>
            <Input
             placeholder='kode pesawat...' 
             name='code' 
             id='code' 
             defaultValue={defaultValues?.code}
             required></Input>
        </div>

        <div className='space-y-2'>
            <Label htmlFor='name'>
                Nama Pesawat
            </Label>
            <Input 
            placeholder='Nama pesawat...' 
            name='name' 
            id='name' 
            defaultValue={defaultValues?.name}
            required></Input>
        </div>

        <div className='space-y-2'>
            <Label htmlFor='image'>
                Upload Foto
            </Label>
            <Input
             type='file' 
             placeholder='Upload foto...' 
             name='image' 
             id='image' 
             required></Input>
        </div>
        <SubmitButton/>
    </form>
  )
}

export default FormAirplane

