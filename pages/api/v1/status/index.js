import database from "infra/database";
import { InternalServerError } from "infra/errors";

async function status(request, response) {
  try {
    const updatedAt = new Date().toISOString();
    const dependencies = await getDatabaseInfo();

    response.status(200).json({
      updated_at: updatedAt,
      dependencies: {
        database: {
          max_connections: dependencies.max_connections,
          opened_connections: dependencies.opened_connections,
          version: dependencies.version,
        },
      },
    });
  } catch (error) {
    const publicErrorObject = new InternalServerError({ cause: error });

    console.log("\nErro dentro do catch do database");
    console.error(publicErrorObject);
    response.status(500).json(publicErrorObject.toJson());
  }
}

async function getDatabaseInfo() {
  const result = await database.query({
    text: `
      SELECT
        current_setting('server_version') as version,
        current_setting('max_connections')::int as max_connections,
        (SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1) as opened_connections;
    `,
    values: [process.env.POSTGRES_DB],
  });

  return result.rows[0];
}

export default status;
