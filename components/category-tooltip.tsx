import { format } from "date-fns";

import { formatCurrency } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const CategoryTooltip = ({ active, payload }: any) => {
  if (!active) return null;

  const name = payload[0].payload.name;
  const value = payload[0].value;

  return (
    <div className="rounded-sm bg-white shadow-sm border overflow-hidden">
      <div className="text-sm p-2 px-3 bg-muted text-muted-foreground">
        {name}
      </div>
      <Separator />
      <div className="p-2 px-3 space-y-1">
        <div className="flex items-center justify-betwen gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 bg-rose-500 rounded-full" />
              <p className="text-sm text-muted-foreground">
                Expenses
              </p>
            </div>
            <p className="text-sm text-right font-medium">
              {formatCurrency(value * -1)}
            </p>
        </div>
      </div>
    </div>
  );
};
