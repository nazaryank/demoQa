import { FullConfig, request, chromium } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    "https://demoqa.com/Account/v1/Login",
    {
      data: {
        userName: "testUsername", // make sure this user exists
        password: "Test@1234#",
      },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok()) {
    console.error("Login failed:", response.status(), await response.text());
    return;
  }

  const responseBody = await response.json();
  const token = responseBody.token;

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  await page.goto("https://demoqa.com");
  await context.storageState({ path: "storageState.json" });

  await browser.close();
}

export default globalSetup;
