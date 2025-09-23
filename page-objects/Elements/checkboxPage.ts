import { expect, Locator, Page } from "@playwright/test";

export class CheckboxPage {
  readonly page: Page;
  readonly expandAllButton: Locator;
  readonly collapseAllButton: Locator;
  readonly checkBox: Locator;
  readonly result: Locator;
  readonly checkedBox: Locator;

  constructor({ page }: { page: Page }) {
    this.page = page;
    this.expandAllButton = page.locator(".rct-icon-expand-all");
    this.collapseAllButton = page.locator(".rct-icon-collapse-all");
    this.checkBox = page.locator(".rct-icon-uncheck");
    this.result = page.locator("#result");
    this.checkedBox = page.locator(".rct-icon-check");
  }

  async checkAllCheckBoxes() {
    await this.checkBox.click();
    await this.expandAllButton.click();
    await expect(this.checkBox).toHaveCount(0);
  }

  async clickOnCollapseAllButton() {
    await this.collapseAllButton.click();
  }

  async verifyResultPresence(isPresent: boolean) {
    if (isPresent) {
      await expect(this.result).toBeVisible();
    } else {
      await expect(this.result).toHaveCount(0);
    }
  }

  async uncheckCheckBox() {
    await this.checkedBox.click();
    await this.expandAllButton.click();
    await expect(this.checkedBox).toHaveCount(0);
  }
}
