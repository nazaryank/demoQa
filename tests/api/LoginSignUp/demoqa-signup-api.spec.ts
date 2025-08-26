import { test, expect, request, APIRequestContext } from "@playwright/test";

test("sign up via API with invalid password is not possible", async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post("https://demoqa.com/Account/v1/User", {
    data: {
      userName: "test1",
      password: "1234#", // invalid
    },
  });

  expect(response.status()).toBe(400);

  const body = await response.json();
  expect(body).toHaveProperty("code");
  expect(body).toHaveProperty("message");
  expect(body.code).toBe("1300");
  expect(body.message).toBe(
    "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
  );
});

test("sign up via API without username is not possible", async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post("https://demoqa.com/Account/v1/User", {
    data: {
      userName: "",
      password: "Test@1234#",
    },
  });

  expect(response.status()).toBe(400);

  const body = await response.json();
  expect(body).toHaveProperty("code");
  expect(body).toHaveProperty("message");
  expect(body.code).toBe("1200");
  expect(body.message).toBe("UserName and Password required.");
});

test("create and delete user via API", async () => {
  const apiContext = await request.newContext();

  // 1. Create user
  const createResponse = await apiContext.post(
    "https://demoqa.com/Account/v1/User",
    {
      headers: { "Content-Type": "application/json" },
      data: {
        userName: "testUser999",
        password: "Test@12345",
      },
    }
  );

  expect(createResponse.status()).toBe(201);
  const createBody = await createResponse.json();
  const userId = createBody.userID;

  // 2. Generate token
  const tokenResponse = await apiContext.post(
    "https://demoqa.com/Account/v1/GenerateToken",
    {
      headers: { "Content-Type": "application/json" },
      data: {
        userName: "testUser999",
        password: "Test@12345",
      },
    }
  );

  const tokenBody = await tokenResponse.json();
  const token = tokenBody.token;

  // 3. Delete user (authenticated request)
  const deleteResponse = await apiContext.delete(
    `https://demoqa.com/Account/v1/User/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(await deleteResponse.text());
  expect(deleteResponse.status()).toBe(204);
});
