import { Page } from "@playwright/test";
import { goToLoginPage, goToStartPage } from "../actions/navigations";

export async function login(page: Page) {
  //1. Go to the start page
  await goToStartPage(page);

  //2NAvigate to Login PAge and wait until it's loaded
  const loginPage = await goToLoginPage(page);
  await loginPage.waitUntilPageIsLoaded();

  //3. Perform login
  await loginPage.inputUsername("students");
  await loginPage.inputPassword("Default1!");
  const myAccountPage = await loginPage.clickLoginButton();
  //4. return myAccountPage instance
  return myAccountPage;
}
