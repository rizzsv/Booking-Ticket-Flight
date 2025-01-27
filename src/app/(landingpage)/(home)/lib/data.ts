"use server";

import prisma from "../../../../../lib/prisma";

export const getCityFilter = async () => {
	try {
		const data = await prisma.flight.groupBy({
			by: ["departureCity", "destinationCity"],
			where: {
				departureDate: {
					gt: new Date(),
				},
			},
			_count: {
				departureCity: true,
				destinationCity: true,
			},
		});

		return data;
        console.log(data);
        
        
	} catch (error) {
		console.log(error);
		return [];
	}
};