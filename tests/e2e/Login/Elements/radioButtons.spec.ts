import { MainPage } from "../../../../page-objects/MainPage";
import { test } from "@playwright/test";
import { loginAndGetToken } from "../../../utils/apiHelper";
import { RadioButtonsPage } from "../../../../page-objects/Elements/radioButtonsPage";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage({ page });
  await loginAndGetToken;
  await mainPage.navigateTo("https://demoqa.com/radio-button", "Radio Button");
});

test("verify functionality of YES radioButton (by ID)", async ({ page }) => {
  const radioButtonsPage = new RadioButtonsPage({ page });
  await radioButtonsPage.selectRadioButtonById("yesRadio", "Yes");
});

test("verify functionality of IMPRESSIVE radioButton (by Label)", async ({
  page,
}) => {
  const radioButtonsPage = new RadioButtonsPage({ page });
  await radioButtonsPage.selectRadioButtonById("impressiveRadio", "Impressive");
});
