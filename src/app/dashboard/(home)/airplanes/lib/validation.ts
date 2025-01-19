import { z } from "zod"

const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png'
]

const MAX_FILE_SIZE = 2000000 // 2mb

export const airplaneFormSchema = z.object({
    name: z.string({required_error: 'Nama Pesawat Tidak Boleh Kosong'}).min(4, {message: 'Nama Pesawat harus memiliki minimal 4 karakter'}),
    code: z.string({ required_error: 'Kode Pesawat tidak boleh kosong' })
    .regex(/^[A-Z]{3}-[0-9]{3}$/, "Format Kode Harus [XXX-111]"),
    image: z.
    any().
    refine((file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type),
    "Image harus berekstensi jpg, jpeg, dan png"
    )
    .refine(
        (file: File) => file.size <= MAX_FILE_SIZE,
        "Image harus memiliki ukuran minimal 2MB"
    )
})