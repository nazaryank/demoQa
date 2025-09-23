import { test } from "@playwright/test";
import { MainPage } from "../../../../page-objects/MainPage";
import { loginAndGetToken } from "../../../utils/apiHelper";
import { CheckboxPage } from "../../../../page-objects/Elements/checkboxPage";
import { channel } from "diagnostics_channel";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage({ page });
  await loginAndGetToken;
  await mainPage.navigateTo("https://demoqa.com/checkbox", "Check Box");
});

test("Should verify checking all the items functionality", async ({ page }) => {
  const checkboxPage = new CheckboxPage({ page });
  await checkboxPage.checkAllCheckBoxes();
  await checkboxPage.verifyResultPresence(true);
});

test("Should verify unchecking all the items", async ({ page }) => {
  const checkboxPage = new CheckboxPage({ page });
  await checkboxPage.checkAllCheckBoxes();
  await checkboxPage.clickOnCollapseAllButton();
  await checkboxPage.uncheckCheckBox();
  await checkboxPage.verifyResultPresence(false);
});
