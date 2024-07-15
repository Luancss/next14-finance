import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileSearch } from "lucide-react";

type Props = {
  data?: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export const Chart = ({ data = []}: Props) => {
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-beetween">
        <CardTitle className="text-xl line-clamp-1">
          Transactions
        </CardTitle>
        <CardContent>
          {data.length === 0 ? (
            <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
              <FileSearch className="size-6 text-muted-foreground" />
              <p>
                No data for this period
              </p>
            </div>
          ) : (
            <AreaVariant 
              data={data}            
            />
          )}
        </CardContent>
      </CardHeader>
    </Card>
  )
}