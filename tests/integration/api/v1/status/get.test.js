import orchestrator from "tests/orchestrator.js";

describe("GET /api/v1/status", () => {
  describe("Anonymous user", () => {
    describe("Retrieving current status", () => {
      let response;
      let body;

      beforeAll(async () => {
        await orchestrator.waitForAllServices();
        await orchestrator.clearDatabase();

        response = await fetch("http://localhost:3000/api/v1/status");
        body = await response.clone().json();
      });

      test("should return 200", () => {
        expect(response.status).toBe(200);
      });

      test("should have updated_at", () => {
        expect(body.updated_at).toBeDefined();
      });

      test("should have valid updated_at", () => {
        expect(body.updated_at).toEqual(
          new Date(body.updated_at).toISOString(),
        );
      });

      test("should have dependencies", () => {
        expect(body.dependencies).toBeDefined();
      });

      test("should have dependencies as an object", () => {
        expect(typeof body.dependencies).toBe("object");
      });

      test("should have database on dependencies", () => {
        expect(body.dependencies.database).toBeDefined();
      });

      test("should have database on dependencies as an object", () => {
        expect(typeof body.dependencies.database).toBe("object");
      });

      test("dependencies should have database version", () => {
        expect(body.dependencies.database.version).toBeDefined();
      });

      test("database version should return 16.0", () => {
        expect(body.dependencies.database.version).toEqual("16.0");
      });

      test("dependencies should have max_connections", () => {
        expect(body.dependencies.database.max_connections).toBeDefined();
      });

      test("database dependecies should have max_connections equals 100", () => {
        expect(body.dependencies.database.max_connections).toEqual(100);
      });

      test("dependencies should have opened_connections", () => {
        expect(body.dependencies.database.opened_connections).toBeDefined();
      });

      test("should have 1 opened_connections", () => {
        expect(body.dependencies.database.opened_connections).toEqual(1);
      });
    });
  });
});
