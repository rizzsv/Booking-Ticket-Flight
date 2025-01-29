"use client";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { type FC } from "react";
import { useFormState } from "react-dom";
import { saveAirplane, updateAirplane } from "../lib/action";
import type { Airplane } from "@prisma/client";
import SubmitButtonForm from "../../components/submit-form-button";

interface FormAirplaneProps {
	type?: "ADD" | "EDIT";
	defaultValues?: Airplane | null;
}

const initialFormState: ActionResult = {
	errorTitle: null,
	errorDesc: [],
};

const FormAirplane: FC<FormAirplaneProps> = ({ type, defaultValues }) => {
	const updateAirplaneWithId = (_state: ActionResult, formData: FormData) =>
		updateAirplane(null, defaultValues?.id!!, formData);

	const [state, formAction] = useFormState(
		type === "ADD" ? saveAirplane : updateAirplaneWithId,
		initialFormState
	);

	return (
		<form action={formAction} className="w-[40%] space-y-4">
			{state.errorTitle !== null && (
				<div className=" my-7 bg-red-500 p-4 rounded-lg text-white">
					<div className="font-bold mb-4">{state.errorTitle}</div>

					<ul className="list-disc list-inside">
						{state.errorDesc?.map((value, index) => (
							<li key={index + value}>{value}</li>
						))}
					</ul>
				</div>
			)}

			<div className="space-y-2">
				<Label htmlFor="code">Kode Pesawat</Label>
				<Input
					placeholder="Kode pesawat..."
					name="code"
					id="code"
					defaultValue={defaultValues?.code}
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="name">Nama Pesawat</Label>
				<Input
					placeholder="Nama Pesawat..."
					name="name"
					id="name"
					defaultValue={defaultValues?.name}
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="image">Upload foto</Label>
				<Input
					type="file"
					placeholder="Upload foto..."
					name="image"
					id="image"
					required
				/>
			</div>

			<SubmitButtonForm />
		</form>
	);
};

export default FormAirplane;
