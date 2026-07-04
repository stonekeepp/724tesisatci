// PostgreSQL client placeholder for production migration.
// When DATA_SOURCE=postgres, install @prisma/client and run migrations.

export async function getDbClient() {
  if (process.env.DATA_SOURCE !== "postgres") {
    return null;
  }
  // TODO: return prisma client when DATABASE_URL is configured
  // const { PrismaClient } = await import("@prisma/client");
  // return new PrismaClient();
  return null;
}
