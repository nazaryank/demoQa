import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly userNameItem: Locator;
  readonly passwordItem: Locator;

  constructor({ page }: { page: Page }) {
    this.page = page;
    this.userNameItem = page.locator("#userName");
    this.passwordItem = page.locator("#password");
  }

  async performLogin(username: string, password: string) {
    await this.userNameItem.fill(username);
    await this.passwordItem.fill(password);
  }
}
