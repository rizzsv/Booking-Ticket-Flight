import { z } from "zod";

export const userSchema = z.object({
	email: z
		.string({ required_error: "Email tidak boleh kosong" })
		.email({ message: "Email tidak valid" }),
	password: z
		.string({ required_error: "Password tidak boleh kosong" })
		.min(4, { message: "Password harus memiliki minimal 4 karakter" })
});
