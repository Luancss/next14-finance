CREATE TABLE IF NOT EXISTS "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"plaid_id" text,
	"name" text NOT NULL,
	"user_Id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "user_Id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" DROP COLUMN IF EXISTS "user_id";