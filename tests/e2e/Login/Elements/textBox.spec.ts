import { test, expect } from "@playwright/test";
import { TextBoxPage } from "../../../../page-objects/Elements/textBoxPage";
import { loginAndGetToken } from "../../../utils/apiHelper";
import { MainPage } from "../../../../page-objects/MainPage";

test.beforeEach(async ({ page }) => {
  await loginAndGetToken;
});

test("Fill in all the text boxes with valid values", async ({ page }) => {
  const textBox = new TextBoxPage({ page });
  const mainPage = new MainPage({ page });

  await mainPage.navigateTo("https://demoqa.com/text-box", "Text Box");
  await textBox.fillInFullNameField("Knarik Nazaryan", false);

  await expect(page.locator("#userName")).toHaveValue("Knarik Nazaryan");
});
