import { Page, Locator, expect } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly logoutButton: Locator;
  readonly pageHeader: Locator;

  constructor({ page }: { page: Page }) {
    this.page = page;
    this.logoutButton = page.locator("#submit");
    this.pageHeader = page.locator(".text-center");
  }

  async logout() {
    await this.page.goto("https://demoqa.com/login");
    await this.logoutButton.click();
    await this.page.waitForURL("**/login");
  }

  async navigateTo(pageLink: string, pageHeader: string) {
    await this.page.goto(pageLink, { waitUntil: "domcontentloaded" });

    await expect(this.page.locator("h1")).toContainText(pageHeader);
  }
}
