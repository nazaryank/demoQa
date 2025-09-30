import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route(
    "https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862",
    async (route) => {
      const response = await route.fetch();
      const responseBody = await response.json();
    }
  );
});
