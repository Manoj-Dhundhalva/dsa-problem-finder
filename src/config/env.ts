import { z } from "zod";

const envSchema = z.object({
  VITE_API_BASE_URL: z.url().refine((value) => ["http:", "https:"].includes(new URL(value).protocol), {
    message: "API_BASE_URL must use http:// or https://",
  }),

  VITE_API_TIMEOUT: z.coerce
    .number()
    .int()
    .positive()
    .default(30 * 1000),
});

const result = envSchema.safeParse(import.meta.env);

if (!result.success) {
  console.error("❌ Invalid environment variables\n");

  const tree = z.treeifyError(result.error);
  console.error(JSON.stringify(tree, null, 2));

  console.error("\nValidation Errors:");

  result.error.issues.forEach((issue) => {
    const path = issue.path.length > 0 ? issue.path.join(".") : "root";
    console.error(`  • ${path}: ${issue.message}`);
  });

  throw new Error("Invalid environment variables");
}

export const env = result.data;

export type TEnv = typeof env;
