import database from "infra/database";
import orchestrator from "tests/orchestrator";

describe("POST /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    let response;
    let body;

    beforeAll(async () => {
      await orchestrator.waitForAllServices();
      await database.query("drop schema public cascade; create schema public;");

      response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "POST",
      });
      body = await response.clone().json();
    });

    test("Running pending migrations", () => {
      expect(response.status).toBe(201);
    });

    test("return an array of pending migrations", () => {
      expect(Array.isArray(body)).toBe(true);
      expect(body.length).toBeGreaterThan(0);
    });

    test("migrations are be runned s uccessfully", async () => {
      response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "POST",
      });
      body = await response.json();

      expect(Array.isArray(body)).toBe(true);
      expect(body.length).toBe(0);
    });
  });
});
