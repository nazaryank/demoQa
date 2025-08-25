import { APIRequestContext, expect } from "@playwright/test";
import { credentials } from "./testData";

export async function loginAndGetToken(request: APIRequestContext) {
  const response = await request.post("https://demoqa.com/Account/v1/Login", {
    data: credentials,
  });
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  return body.token;
}
