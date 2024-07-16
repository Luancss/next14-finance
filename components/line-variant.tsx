import { format } from "date-fns";
import {
  Tooltip,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

import { CustomTooltip } from "./custom-tooltip";

type Props = {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export const LineVariant = ({ data = [] }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          tickLine={false}
          axisLine={false}
          dataKey="date"
          tickFormatter={(value) => format(value, "dd MMM")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          dot={false}
          dataKey="income"
          className="drop-shadow-sm"
          strokeWidth={2}
          fill="#3d82f6"
        />
        <Line
          dot={false}
          dataKey="expenses"
          className="drop-shadow-sm"
          strokeWidth={2}
          fill="#f43f5e"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
