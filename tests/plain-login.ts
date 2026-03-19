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

    //6. Click login button and get myAccountPage;
    const myAccountPage = await loginPage.clickLoginButton();

    //7. Wait until myAccountPage is loaded
    await myAccountPage.waitUntilPageIsLoaded();

    //8.Get log out text
    const logOutText = await myAccountPage.getLogOutText();
    //9Verify login was succesful and log out text is visible
    expect(logOutText).toBe("Log out");
  },
);
