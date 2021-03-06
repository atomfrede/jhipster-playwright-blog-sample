export class LoginPage {
  page: any;

  constructor(page: any) {
    this.page = page;
  }
  async navigate(): Promise<void> {
    await this.page.goto('http://localhost:8080/login');
  }

  async loginErrorVisible(): Promise<void> {
    await page.waitForSelector('[data-cy="loginError"]');
  }

  async login(username: string, password: string, awaitNavigation: boolean = true): Promise<void> {
    await this.page.fill('[data-cy="username"]', username);
    await this.page.fill('[data-cy="password"]', password);
    await this.page.click('[data-cy="submit"]');
    if (awaitNavigation) {
      await this.page.waitForNavigation();
    }
  }
}
