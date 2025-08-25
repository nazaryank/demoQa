import { expect, Locator, Page } from "@playwright/test";

export class RadioButtonsPage {
  readonly page: Page;
  readonly textSuccess: Locator;

  constructor({ page }: { page: Page }) {
    this.page = page;
    this.textSuccess = page.locator(".text-success");
  }

  async selectRadioButtonById(radioId: string, expectedText: string) {
    await this.page.locator(`label[for="${radioId}"]`).click();
    await expect(this.textSuccess).toContainText(expectedText);
  }
}
