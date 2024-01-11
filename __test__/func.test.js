import supertest from "supertest";
import { server } from "../app.js";

const request = supertest(server);

test("Ich erwarte ein Array wenn ich GET benutze", async () => {
  const response = await request.get("/");
  expect(response.statusCode).toBe(200);
  expect(response.body).toBeInstanceOf(Object);
});
