import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import { json } from "stream/consumers";

test.beforeEach(async ({ page }) => {
  await page.route(
    "https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862",
    async (route) => {
      const response = await route.fetch();
      const responseBody = await response.json();
    }
  );
});
