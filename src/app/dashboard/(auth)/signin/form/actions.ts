"use server"

import { redirect } from "next/navigation";
import { userSchema } from "./validation";
import bcrypt from 'bcrypt'
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import prisma from "../../../../../../lib/prisma";

export interface ActionResult {
    errorTitle: string  | null
    errorDesc: string[] | null     
}

export async function handleSignIn(prevState: any, formData: FormData): Promise<ActionResult> {
    console.log(formData.get('password'));  

    const validate = userSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if(!validate.success) {
        const errorDesc = validate.error.issues.map((issue) => issue.message)

        return {
            errorTitle: 'Error Validation',
            errorDesc
        }
    }
    
    const existingUser = await prisma.user.findFirst({
        where: {
            email: validate.data.email
        }
    })

    if(!existingUser){
        return {
            errorTitle: 'Error',
            errorDesc: ['Email tidak ditemukan']
        }
    }

    // benahi error ini nanti 

    // const validPassword = await bcrypt.compare(
    //     validate.data.password,
    //     existingUser.password
    // )

    // if (!validPassword) {
    //     return {
    //         errorTitle: "Error",
    //         errorDesc: ["Email / Password salah"]
    //     }
    // }

    const session = await lucia.createSession(existingUser.id, {})
    const sessionCookie = await lucia.createSessionCookie(session.id)

    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )

    return redirect("/dashboard")
}