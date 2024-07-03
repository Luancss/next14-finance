import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

type Props = {
  id: string;
  category: string | null;
  categoryId: string | null;
};

export const CategoryColumn = ({
  id,
  category,
  categoryId
}: Props) => {
  const { onOpen: onOpenAccount } = useOpenCategory();

  const onClick = () => {
    if (categoryId) {
      onOpenAccount(categoryId);
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center cursor-pointer hover:underline",
        !category && "text-rose-500",
      )}
    >
      {!category && <TriangleAlert className="mr-2 size-4 shrink-0"/>}
      {category || "Uncategorized"}
    </div>
  );
};
