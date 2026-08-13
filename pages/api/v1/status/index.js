import { createRouter } from "next-connect";
import database from "infra/database";
import { InternalServerError, MethodNotAllowedError } from "infra/errors";

const router = createRouter();

router.get(getHandler);

export default router.handler({
  onNoMatch: onNoMatchHandler,
  onError: onErrorHandlerError,
});

async function getHandler(request, response) {
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

function onNoMatchHandler(request, response) {
  const publicErrorObject = new MethodNotAllowedError();
  return response
    .status(publicErrorObject.statusCode)
    .json(publicErrorObject.toJson());
}

function onErrorHandlerError(error, request, response) {
  const publicErrorObject = new InternalServerError({
    cause: error,
  });

  console.log("\nErro dentro do catch do next-connect:");
  console.error(publicErrorObject);
  response
    .status(publicErrorObject.statusCode)
    .json(publicErrorObject.toJson());
}
