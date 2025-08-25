import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../../page-objects/LoginSignUp/loginPage";
import { MainPage } from "../../../../page-objects/MainPage";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage({ page });
  await mainPage.navigateTo("https://demoqa.com/login", "Login");
});

test.describe("DemoQA Login UI", () => {
  const userName = "testuser";
  const password = "Test@1234#";
  const wrongUserName = "wrongUserName";
  const wrongPassword = "wrongPassword";
  test("should login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage({ page });

    await loginPage.performLogin(userName, password);
    await page.click("#login");
    await expect(page.locator("#userName-value")).toHaveText(userName);
  });

  test("should not login with invalid username", async ({ page }) => {
    const login = new LoginPage({ page });

    await login.performLogin(wrongUserName, password);
    await page.click("#login");
    await expect(page.locator("#name")).toHaveText(
      "Invalid username or password!"
    );
  });

  test("should not login with invalid password", async ({ page }) => {
    const login = new LoginPage({ page });

    await login.performLogin(userName, wrongPassword);

    await page.click("#login");
    await expect(page.locator("#name")).toHaveText(
      "Invalid username or password!"
    );
  });
});
