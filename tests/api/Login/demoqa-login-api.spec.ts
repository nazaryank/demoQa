import { test, expect, request } from "@playwright/test";
import { beforeEach } from "node:test";
import { json } from "stream/consumers";

test.beforeEach(async ({ page }) => {});

test("Login via api", async ({ browser }) => {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    "https://demoqa.com/Account/v1/Login",
    {
      data: {
        userName: "testUsername",
        password: "Test@1234#",
      },
    }
  );

  expect(response.ok()).toBeTruthy();
});
