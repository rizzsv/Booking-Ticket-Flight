"use server"

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions"
import { redirect } from "next/navigation"
import { FormFlightSchema } from "./validation"
import prisma from "../../../../../../lib/prisma";
import { generateSeatPerClass } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function saveFlight(
    prevState: unknown,
    formData: FormData
): Promise<ActionResult> {
    console.log(formData.get('planeId'))

    const departureDate = new Date(formData.get('departureDate') as string)
    const arrivalDate = new Date(formData.get('arrivalDate') as string)

    const validate = FormFlightSchema.safeParse({
        planeId: formData.get('planeId'),
        price: formData.get('price'),
        departureCity: formData.get('departureCity'),
        departureDate,
        departureCityCode: formData.get('departureCityCode'),
        destinationCity: formData.get('destinationCity'),
        destinationCityCode: formData.get('destinationCityCode'),
        arrivalDate,
    })

    if (!validate.success) {
        const errorDesc = validate.error.issues.map((issue) => issue.message)

        return {
            errorTitle: 'Error Validation',
            errorDesc
        }
    }

    const data = await prisma.flight.create({
        data: {
            ...validate.data,
            price: Number.parseInt(validate.data.price)
        }
    })

    const seats = generateSeatPerClass(data.id)

    await prisma.flightSeat.createMany({
        data: seats
    })

    revalidatePath('/dashboard/flights')
    redirect('/dashboard/flights')
}

export async function updateFlight(
    prevState: unknown,
    id: string,
    formData: FormData
): Promise<ActionResult> {
    const departureDate = new Date(formData.get('departureDate') as string)
    const arrivalDate = new Date(formData.get('arrivalDate') as string)

    const validate = FormFlightSchema.safeParse({
        planeId: formData.get('planeId'),
        price: formData.get('price'),
        departureCity: formData.get('departureCity'),
        departureDate,
        departureCityCode: formData.get('departureCityCode'),
        destinationCity: formData.get('destinationCity'),
        destinationCityCode: formData.get('destinationCityCode'),
        arrivalDate,
    })

    if (!validate.success) {
        const errorDesc = validate.error.issues.map((issue) => issue.message)

        return {
            errorTitle: 'Error Validation',
            errorDesc
        }
    }

    await prisma.flight.update({
        where: {id:id},
        data: {
            ...validate.data,
            price: Number.parseInt(validate.data.price)
        }
    })

    revalidatePath('/dashboard/flights')
    redirect('/dashboard/flights')
}