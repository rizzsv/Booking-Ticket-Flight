"use server";

import prisma from "../../../../../lib/prisma";

export const getCityFilter = async () => {
	try {
		const data = await prisma.flight.findMany({
			where: {
			    departureDate: {
					//ketika jadwal pesawat tidak ada di jam yang akan mendatang, maka tidak ada data yang akan ditampilkan
			        gt: new Date(),
			    },
			},
			distinct: ['departureCity'],  
			select: {
				departureCity: true,
				destinationCity: true,
			}
		});

		console.log("Query result:", data);
		return data;
		
	} catch (error) {
		console.error("Error in getCityFilter:", error);
		throw error; 
	}
};

export const getAirplanes = async () => {
	try {
		const data = await prisma.airplane.findMany({
			where: {
				flight: {
					every: {
						id: undefined,
					},
				},
			},
		});

		return data;
	} catch (error) {
		console.log(error);
		return [];
	}
};