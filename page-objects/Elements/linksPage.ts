import { Locator, Page } from "@playwright/test";

export class LinksPage {
  readonly page: Page;
  readonly links: Record<string, Locator>;

  constructor({ page }: { page: Page }) {
    this.page = page;

    this.links = {
      home: page.locator("#simpleLink"),
      homeDynamic: page.locator("#dynamicLink"),
      created: page.locator("#created"),
      noContent: page.locator("#no-content"),
      moved: page.locator("#moved"),
      badRequest: page.locator("#bad-request"),
      unauthorized: page.locator("#unauthorized"),
      forbidden: page.locator("#forbidden"),
      notFound: page.locator("#invalid-url"),
    };
  }

  async clickLink(linkName: keyof typeof this.links) {
    await this.links[linkName].click();
  }
}
