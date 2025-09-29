import { test, expect } from "@playwright/test";
import { LinksPage } from "../../../../page-objects/Elements/linksPage";
import { loginAndGetToken } from "../../../utils/apiHelper";
import { MainPage } from "../../../../page-objects/MainPage";
test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage({ page });
  await loginAndGetToken;
  await mainPage.navigateTo("https://demoqa.com/links", "Links");
});
test("open home link in new tab", async ({ page, context }) => {
  const linksPage = new LinksPage({ page });
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    linksPage.clickLink("home"),
  ]);
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL("https://demoqa.com/");
});

test("verify Created link triggers API call", async ({ page }) => {
  const linksPage = new LinksPage({ page });

  const [response] = await Promise.all([
    page.waitForResponse(
      (resp) => resp.url().includes("/created") && resp.status() === 201
    ),
    linksPage.clickLink("created"),
  ]);
  expect(response.status()).toBe(201);
});
