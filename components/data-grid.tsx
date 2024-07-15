"use client";

import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { Skeleton } from "./ui/skeleton";
import { formatDateRange } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { DataCard, DataCardLoading } from "./data-card";

export const DataGrid = () => {
  const { data, isLoading } = useGetSummary();

  const params = useSearchParams();
  const to = params.get("to") || undefined;
  const from = params.get("from") || undefined;

  const dateRangeLabel = formatDateRange({ to, from });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
        <DataCardLoading />
        <DataCardLoading />
        <DataCardLoading />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
      <DataCard
        icon={FaPiggyBank}
        title="Remaining"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        dateRange={dateRangeLabel}
      />
      <DataCard
        icon={FaArrowTrendUp}
        title="Income"
        value={data?.incomeAmount}
        percentageChange={data?.incomeChange}
        dateRange={dateRangeLabel}
      />
      <DataCard
        icon={FaArrowTrendDown}
        title="Expenses"
        value={data?.expensesAmount}
        percentageChange={data?.expensesChange}
        dateRange={dateRangeLabel}
      />
    </div>
  );
};
