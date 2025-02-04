import type { FlightSeat } from "@prisma/client";
import React, { createContext, useState, type FC, type ReactNode } from "react";

interface SeatProviderProps {
  children: ReactNode;
}

export type SeatContextType = {
  seat: FlightSeat | null;
  setSelectedSeat: (seat: FlightSeat) => void;
};

export const seatContext = createContext<SeatContextType | null>(null);

const seatProvider: FC<SeatProviderProps> = ({ children }) => {
  const [seat, setSeat] = useState<FlightSeat | null>(null);

  const selectedSeat = (seat: FlightSeat) => {
    setSeat(seat);
  };

  return (
    <seatContext.Provider value={{ seat, setSelectedSeat: selectedSeat }}>
      {children}
    </seatContext.Provider>
  );
};

export default seatProvider;
