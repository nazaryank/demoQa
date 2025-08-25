import { test, expect, request } from "@playwright/test";

test("Verify BookStore API returns valid data", async ({ browser }) => {
  const apiContext = await request.newContext();
  const response = await apiContext.get(
    "https://demoqa.com/BookStore/v1/Books"
  );

  const body = await response.json();

  expect(response.ok()).toBeTruthy;
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(body).toHaveProperty("books");
  for (const b of body.books) {
    expect(b).toHaveProperty("isbn");
    expect(b).toHaveProperty("title");
    expect(b).toHaveProperty("author");
    expect(b.isbn).not.toBe("");
    expect(b.title.length).toBeGreaterThan(0);
    expect(b.author.length).toBeGreaterThan(0);
  }
  expect(body.books[0].isbn).toMatch(/^[0-9]+$/);
});

test("Delete book without auth should return 401", async ({ browser }) => {
  const apiContext = await request.newContext();
  const response = await apiContext.delete(
    "https://demoqa.com/BookStore/v1/Books"
  );

  expect(response.status()).toBe(401);

  const body = await response.json();
  expect(body).toHaveProperty("code");
});

test("Delete book/ positive case", async ({ browser }) => {
  const apiContext = await request.newContext();
  const responseLogin = await apiContext.post(
    "https://demoqa.com/Account/v1/Login",
    {
      data: {
        userName: "testUsername",
        password: "Test@1234#",
      },
    }
  );

  const response = await apiContext.delete(
    "https://demoqa.com/BookStore/v1/Books"
  );

  expect(response.ok()).toBeTruthy;
});
