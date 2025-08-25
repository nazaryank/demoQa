import { expect, Locator, Page } from "@playwright/test";

export class ButtonsPage {
  readonly page: Page;
  readonly doubleClickBtn: Locator;
  readonly rightClickBtn: Locator;

  constructor({ page }: { page: Page }) {
    this.page = page;
    this.doubleClickBtn = page.locator("#doubleClickBtn");
    this.rightClickBtn = page.locator("#rightClickBtn");
  }

  async clickOnTheBUttonAndVerifyOutcome(button: string, outcome: string) {
    if (button == "DoubleClickBtn") {
      await this.doubleClickBtn.click();
    } else if (button == "rightClickButton") {
      await this.rightClickBtn.click({ button: "right" });
    }

    await expect(outcome).toBe;
  }
}
