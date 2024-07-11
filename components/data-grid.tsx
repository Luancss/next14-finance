"use client";

import { FaPiggyBank } from "react-icons/fa";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { formatDateRange } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { DataCard } from "./data-card";

export const DataGrid = () => {
  const { data, isLoading } = useGetSummary();

  const params = useSearchParams();
  const to = params.get("to") || undefined;
  const from = params.get("from") || undefined;

  const dateRangeLabel = formatDateRange({ to, from });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
      <DataCard
        icon={FaPiggyBank}
        title="Remaining"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        variant="default"
        dateRange={dateRangeLabel}
      />
    </div>
  );
};
