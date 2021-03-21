export class LoginPage {
  page: any;

  constructor(page: any) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto('http://localhost:8080/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('[data-cy="username"]', username);
    await this.page.fill('[data-cy="password"]', password);
    await this.page.click('[data-cy="submit"]');
    await this.page.waitForNavigation();
  }
}
