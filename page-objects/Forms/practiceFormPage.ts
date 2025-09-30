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
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly mobileNumberField: Locator;
  readonly currentAddressField: Locator;
  readonly dateOfBirthInput: Locator;
  readonly date: Locator;

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
    this.firstnameField = page.locator("#firstName");
    this.lastNameField = page.locator("#lastName");
    this.emailField = page.locator("#userEmail");
    this.mobileNumberField = page.locator("#userNumber");
    this.currentAddressField = page.locator("#currentAddress");
    this.dateOfBirthInput = page.locator("#dateOfBirthInput");
    this.date = page.locator(".react-datepicker__day");
  }

  async verifyPageAppearance() {
    await expect(this.usernameLabel).toBeVisible();
    await expect(this.emailLabel).toBeVisible();
    await expect(this.phoneNumberLabel).toBeVisible();
    await expect(this.dateOfBirthLabel).toBeVisible();
    await expect(this.currentAddressLabel).toBeVisible();
    await expect(this.stateAndCityLabel).toBeVisible();
  }

  async fillInTheField(
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    currentAddress: string
  ) {
    const fields = [
      { locator: this.firstnameField, value: firstName },
      { locator: this.lastNameField, value: lastName },
      { locator: this.emailField, value: email },
      { locator: this.mobileNumberField, value: mobileNumber },
      { locator: this.currentAddressField, value: currentAddress },
    ];

    for (const { locator, value } of fields) {
      await locator.fill(value);
    }
  }

  async selectDate() {
    let date = new Date();
    date.setDate(date.getDate() + 14);
    const expectedDate = date.getDate().toString();

    await this.dateOfBirthInput.click();
    await this.date.getByText(expectedDate, { exact: true }).click();
  }
}
