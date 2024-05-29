ALTER TABLE "accounts" ADD COLUMN "user_Id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" DROP COLUMN IF EXISTS "user_id";