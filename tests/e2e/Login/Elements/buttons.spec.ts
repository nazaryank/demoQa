import { test } from "@playwright/test";
import { MainPage } from "../../../../page-objects/MainPage";
import { loginAndGetToken } from "../../../utils/apiHelper";
import { ButtonsPage } from "../../../../page-objects/Elements/buttonsPage";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage({ page });
  await loginAndGetToken;
  await mainPage.navigateTo("https://demoqa.com/buttons", "Buttons");
});

test("should verify functionality of Double click button", async ({ page }) => {
  const buttonsPage = new ButtonsPage({ page });
  await buttonsPage.clickOnTheBUttonAndVerifyOutcome(
    "DoubleClickBtn",
    "You have done a double click"
  );
});

test("should verify functionality of right click button", async ({ page }) => {
  const buttonsPage = new ButtonsPage({ page });

  await buttonsPage.clickOnTheBUttonAndVerifyOutcome(
    "rightClickButton",
    "You have done a right click"
  );
});
