import { getAirplanes } from "@/app/dashboard/(home)/airplanes/lib/data";
import React from "react";

export default async function FilterAirlinePage() {

    const airplanes = await getAirplanes()
    console.log(airplanes);
    

  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Airlines</p>
      {airplanes.map((val, i) => (
              <label
              key={`${val.name + i}`}
              htmlFor={val.name}
              className="font-semibold flex items-center gap-[10px] text-white"
            >
              <input
                type="checkbox"
                name="airlines"
                value={val.id}
                id={val.name}
                className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-[6px] checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white"
              />
              {val.name}
            </label>
      ))}
    </div>
  );
}
