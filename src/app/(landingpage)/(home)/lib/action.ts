"use server"

import { getUser, lucia } from "@/lib/auth"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export async function logout(): Promise<{error: string} | nulll> {
    const {session} = await getUser()

    if(!session) {
        return { 
            error: "UnAuthorized"
        }
    }

    await lucia.invalidateSession(session.id)

    const sessionCookie = lucia.createBlankSessionCookie()
    
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )

    revalidatePath('/')
    return redirect('/')
}