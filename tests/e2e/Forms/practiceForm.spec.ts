import { test, Page } from "@playwright/test";
import { MainPage } from "../../../page-objects/MainPage";
import { loginAndGetToken } from "../../utils/apiHelper";
import { PracticeFormPage } from "../../../page-objects/Forms/practiceFormPage";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage({ page });
  await loginAndGetToken;
  mainPage.navigateTo(
    "https://demoqa.com/automation-practice-form",
    "Practice Form"
  );
});

test("Verify appearance of Practice Form page", async ({ page }) => {
  const practiceFormPage = new PracticeFormPage({ page });
  practiceFormPage.verifyPageAppearance();
});

test("Fill in form with valide values", async ({ page }) => {
  const firstName = "John";
  const lastName = "Smith";
  const email = "john.smith@test.com";
  const mobileNumber = "0123456789";
  const subject = "maths";
  const currentAddress = "Test 1234, Yerevan";

  const practiceFormPage = new PracticeFormPage({ page });

  practiceFormPage.fillInTheField(firstName);
});
