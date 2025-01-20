import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import type { Metadata } from "next";
import React, { type FC } from "react";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import { columns } from "./components/columns-flight";

// interface FlightPageProps {

// }

export const metada: Metadata = {
  title: "Dashboard | Flights",
};

const FlightPage: FC = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Flights</div>
        <Button asChild>
          <Link href={"/dashboard/airplanes/create"}>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Data
          </Link>
        </Button>
      </div>
      <DataTable columns={ columns } data={[]} />
    </>
  );
};

export default FlightPage;
