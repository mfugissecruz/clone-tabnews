import database from "infra/database";
import orchestrator from "tests/orchestrator";

describe("GET /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    describe("Running pending migrations", () => {
      let response;
      let body;

      beforeAll(async () => {
        await orchestrator.waitForAllServices();
        await database.query(
          "drop schema public cascade; create schema public;",
        );

        response = await fetch("http://localhost:3000/api/v1/migrations");
        body = await response.clone().json();
      });

      test("GET to /api/v1/migrations should return 200", () => {
        expect(response.status).toBe(200);
      });

      test("return an array of pending migrations", () => {
        expect(Array.isArray(body)).toBe(true);
        expect(body.length).toBeGreaterThan(0);
      });
    });
  });
});
