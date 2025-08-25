import { test, expect } from "@playwright/test";
import books from "../../../../test-data/books.json";
test.beforeEach(async ({ page }) => {
  await page.route("*/**/BookStore/v1/Books", async (route) => {
    await route.fulfill({
      body: JSON.stringify(books),
    });
  });

  await page.goto("https://demoqa.com/books");
});

test("The page is opened", async ({ page }) => {
  await expect(page.locator("#searchBox-wrapper")).toBe;
});
