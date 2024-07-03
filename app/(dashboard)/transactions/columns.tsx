"use client";

import { InferResponseType } from "hono";
import { client } from "@/lib/hono";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Actions } from "./actions";
import { format } from "date-fns";

export type ResponseType = InferResponseType<typeof client.api.transactions.$get, 200>["data"][0];


export const columns: ColumnDef<ResponseType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({row}) => {
      const date = row.getValue("date") as Date;

        return (
          <span>
            {format(date, "dd MMMM, yyyy")}
          </span>
        )
    }
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({row}) => {
        return (
          <span>
            {row.original.category}
          </span>
        )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => <Actions id={row.original.id}/>
  }
];
