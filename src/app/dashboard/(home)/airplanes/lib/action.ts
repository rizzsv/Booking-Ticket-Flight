"use server"

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { airplaneFormSchema } from "./validation";
import { redirect } from "next/navigation";
import { uploadFile } from "@/lib/supabase";
import { error } from "console";
import prisma from "../../../../../../lib/prisma";
import { revalidatePath } from "next/cache";


export async function saveAirplane(prevState: any, formData: FormData): Promise<ActionResult> {
    const values = airplaneFormSchema.safeParse({
        name: formData.get("name"),
        image: formData.get("image"),
        code: formData.get("code")
    })

    if(!values.success) {
        const errorDesc = values.error.issues.map(issue => issue.message)

        return {
            errorTitle: "Error Validation",
            errorDesc,
        };
    }

    const uploadedFile = await uploadFile(values.data.image)

    if(uploadFile instanceof Error) {
        return {
            errorTitle: 'Failed to upload file',
            errorDesc: ['Terjadi masalah pada koneksi, silahkan coba lagi']
        }
    }

    try {
        const data = await prisma.airplane.create({
            data: {
                name: values.data.name,
                code: values.data.code,
                image: uploadedFile as string
            }
        })
    } catch (error) {
        return {
            errorTitle: 'Failed to insert data',
            errorDesc: ['Terjadi masalah pada koneksi, silahkan coba lagi']
        }
    }

    revalidatePath('/dashboard/airplanes')
    redirect('/dashboard/airplanes')
}