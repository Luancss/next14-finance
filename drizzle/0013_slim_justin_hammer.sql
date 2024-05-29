CREATE TABLE IF NOT EXISTS "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"plaid_id" text,
	"name" text NOT NULL,
	"user_Id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "user_Id" TO "user_id";