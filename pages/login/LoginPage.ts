import BasePage from "../BasePage";

export default class LoginPage extends BasePage {
  async waitUntilPageIsLoaded() {
    await this.waitForElement("//h2[normalize-space(text())='Login']");
  }

  async inputUsername(username: string): Promise<void> {
    await this.fill("#username", username);
  }

  async inputPassword(password: string): Promise<void> {
    await this.fill("#password", password);
  }
}
