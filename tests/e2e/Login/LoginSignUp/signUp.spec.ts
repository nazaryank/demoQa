import { expect, test } from "@playwright/test";
import { SignUpPage } from "../../../../page-objects/LoginSignUp/signUpPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/login");
});

test.describe("sign up cases", () => {
  const firstName = "TestFIrstName";
  const lastName = "TestLastName";
  const userName = "TestUserName";
  const password = "Test@1234#";

  test("should verify signing up without password is not possible", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage({ page });

    await signUpPage.clickOnNewUserButton();
    await signUpPage.fillInCredentials(firstName, lastName, userName, "");
    await signUpPage.clickOnRegisterButton();
    await signUpPage.verifyValidationError();
  });

  test("should verify signing up without  username is not possible", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage({ page });

    await signUpPage.clickOnNewUserButton();
    await signUpPage.fillInCredentials(firstName, lastName, "", password);
    await signUpPage.clickOnRegisterButton();
    await signUpPage.verifyValidationError();
  });

  test("should verify signing up without lastname is not possible", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage({ page });

    await signUpPage.clickOnNewUserButton();
    await signUpPage.fillInCredentials(firstName, "", userName, password);
    await signUpPage.clickOnRegisterButton();
    await signUpPage.verifyValidationError();
  });

  test("should verify signing up without firstname is not possible", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage({ page });

    await signUpPage.clickOnNewUserButton();
    await signUpPage.fillInCredentials("", lastName, userName, password);
    await signUpPage.clickOnRegisterButton();
    await signUpPage.verifyValidationError();
  });

  test("should verify signing up is not possible without reCaptcha verify", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage({ page });

    await signUpPage.clickOnNewUserButton();
    await signUpPage.fillInCredentials(firstName, lastName, userName, password);
    await signUpPage.clickOnRegisterButton();
    await signUpPage.verifyErrorMessage("Please verify reCaptcha to register!");
  });

  test("should verify signing up functionality", async ({ page }) => {
    const signUpPage = new SignUpPage({ page });

    await signUpPage.clickOnNewUserButton();
    await signUpPage.fillInCredentials(firstName, lastName, userName, password);
    await signUpPage.clickOnCaptchaVerify();
    await signUpPage.clickOnRegisterButton();
  });
});
