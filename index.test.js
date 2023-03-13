const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it("should return status code 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /api/hello", () => {
  it("should return status code 200", async () => {
    const response = await request(app).get("/api/hello");
    expect(response.statusCode).toBe(200);
  });

  it("should return JSON data with greeting property", async () => {
    const response = await request(app).get("/api/hello");
    expect(response.body).toEqual({ greeting: "hello API" });
  });
});

describe("GET /api/whoami", () => {
  it("should return status code 200", async () => {
    const response = await request(app).get("/api/whoami");
    expect(response.statusCode).toBe(200);
  });

  it("should return JSON data with ipaddress, language, and software properties", async () => {
    const response = await request(app).get("/api/whoami");
    expect(response.body).toEqual(
      expect.objectContaining({
        ipaddress: expect.any(String),
        language: expect.any(String),
        software: expect.any(String),
      })
    );
  });
});

describe("404 Not Found", () => {
  it("should return status code 404", async () => {
    const response = await request(app).get("/invalid");
    expect(response.statusCode).toBe(404);
  });
});
