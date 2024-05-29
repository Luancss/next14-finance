ALTER TABLE "categories" ADD COLUMN "user_Id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN IF EXISTS "user_id";