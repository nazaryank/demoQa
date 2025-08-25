import { expect, Locator, Page } from "@playwright/test";

export class SignUpPage {
  readonly page: Page;
  readonly newUserButton: Locator;
  readonly registerWrapper: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly registerButton: Locator;
  readonly validationError: Locator;
  readonly errorMessage: Locator;
  readonly captchaVerify: Locator;
  readonly captchaChecked: Locator;

  constructor({ page }: { page: Page }) {
    this.page = page;
    this.newUserButton = page.locator("#newUser");
    this.registerWrapper = page.locator(".register-wrapper");
    this.firstNameField = page.locator("#firstname");
    this.lastNameField = page.locator("#lastname");
    this.userNameField = page.locator("#userName");
    this.passwordField = page.locator("#password");
    this.registerButton = page.locator("#register");
    this.validationError = page.locator(".is-invalid");
    this.errorMessage = page.locator("#name");
    this.captchaVerify = page.locator(".recaptcha-checkbox-spinner");
    this.captchaChecked = page.locator(".recaptcha-checkbox-checked");
  }

  async clickOnNewUserButton() {
    await this.newUserButton.click();
    await expect(this.registerWrapper).toBe;
  }

  async fillInCredentials(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
  }

  async clickOnRegisterButton() {
    await this.registerButton.click();
  }

  async verifyValidationError() {
    await expect(this.validationError).toBe;
  }

  async verifyErrorMessage(errorMessage: string) {
    await expect(this.errorMessage).toContainText(errorMessage);
  }

  async clickOnCaptchaVerify() {
    await this.captchaVerify.click();
    await expect(this.captchaChecked).toBe;
  }
}
