"use server"

import { getUser, lucia } from "@/lib/auth"
import { objectToParams } from "@/lib/utils"
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

export async function searchFlight(formatData: FormData) {
    const searchData = {
        departure: formatData.get('departure'),
        arrival: formatData.get('arrival'),
        date: formatData.get('date'),
    }

    const queryParams = objectToParams(searchData);

    return redirect(`/available-flights?${queryParams}`)
}