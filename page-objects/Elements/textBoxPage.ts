import { Locator, Page } from "@playwright/test";

export class TextBoxPage {
  readonly page: Page;
  readonly nameFieldItem: Locator;
  readonly submitItem: Locator;

  constructor({ page }: { page: Page }) {
    this.page = page;
    this.nameFieldItem = page.locator("#userName");
    this.submitItem = page.locator("#submit");
  }

  async fillInFullNameField(fullName: string, isSubmit: boolean) {
    await this.nameFieldItem.fill(fullName);
    if (isSubmit) {
      await this.submitItem.click();
    }
  }
}
