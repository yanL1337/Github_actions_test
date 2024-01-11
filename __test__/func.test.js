import supertest from "supertest";
import { server } from "../app.js";

const request = supertest(server);

test("Ich erwarte ein Array wenn ich GET benutze", async () => {
  return await supertest(server).get("/").expect(200).expect(Object);
  //   const response = await request.get("/");
  //   expect(response.statusCode).toBe(200);
  //   return expect(response.body).toBeInstanceOf(Object);
});
