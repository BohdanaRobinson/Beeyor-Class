import test, { expect } from "@playwright/test";
import { login } from "../utilities/login";

test(
  "Helper Login - Verify a user can login",
  { tag: ["@smoke"] },
  async ({ page }) => {
    const myAccountPage = await login(page);
    const logoutText = await myAccountPage.getLogOutText();
    expect(logoutText).toBe("Log out");
  },
);
