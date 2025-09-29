import { expect, Locator, Page } from "@playwright/test";

export class PracticeFormPage {
  readonly page: Page;
  readonly usernameLabel: Locator;
  readonly emailLabel: Locator;
  readonly phoneNumberLabel: Locator;
  readonly dateOfBirthLabel: Locator;
  readonly subjectsLabel: Locator;
  readonly currentAddressLabel: Locator;
  readonly stateAndCityLabel: Locator;
  readonly chooseFileButton: Locator;
  readonly firstnameField: Locator;

  constructor({ page }: { page: Page }) {
    this.page = page;
    this.usernameLabel = page.locator("#userName-label");
    this.emailLabel = page.locator("#userEmail-label");
    this.phoneNumberLabel = page.locator("#userNumber-label");
    this.dateOfBirthLabel = page.locator("#dateOfBirth-label");
    this.subjectsLabel = page.locator("#subjects-label");
    this.currentAddressLabel = page.locator("#currentAddress-label");
    this.stateAndCityLabel = page.locator("#stateCity-label");
    this.chooseFileButton = page.locator("#uploadPicture");
    this.firstnameField = page.locator('[placeholder="First Name"]');
  }

  async verifyPageAppearance() {
    await expect(this.usernameLabel).toBeVisible();
    await expect(this.emailLabel).toBeVisible();
    await expect(this.phoneNumberLabel).toBeVisible();
    await expect(this.dateOfBirthLabel).toBeVisible();
    await expect(this.subjectsLabel).toBeVisible();
    await expect(this.currentAddressLabel).toBeVisible();
    await expect(this.stateAndCityLabel).toBeVisible();
  }

  async fillInTheField(firstName: string) {
    await this.firstnameField.fill(firstName);
  }
}
