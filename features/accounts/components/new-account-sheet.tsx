
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { insertAccountSchema } from "@/db/schema";
import { AccountForm } from "@/features/accounts/components/account-form";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { z } from "zod";

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.infer<typeof formSchema>

export const NewAccountSheet: React.FC = () => {
  const { isOpen, onClose } = useNewAccount();

  const onSubmit = (values: FormValues) => {
    console.log({values});
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
        <AccountForm 
          onSubmit={onSubmit}
          disabled={false}
          defaultValues={{
            name: "",
          }}
         />
      </SheetContent>
    </Sheet>
  )
}