import test, { expect } from "@playwright/test";
import { goToLoginPage, goToStartPage } from "../actions/navigations";

test(
  "Plain Login - Verify a user can login",
  { tag: ["@smoke", "@regression"] },
  async ({ page }) => {
    //1. Go to the start page
    await goToStartPage(page);

    //2NAvigate to Login PAge and wait until it's loaded
    const loginPage = await goToLoginPage(page);

    //3. Wait until Login Page is loaded
    await loginPage.waitUntilPageIsLoaded();

    //4. Input username
    await loginPage.inputUsername("students");

    //5. Input password
    await loginPage.inputPassword("Default1!");
  },
);
