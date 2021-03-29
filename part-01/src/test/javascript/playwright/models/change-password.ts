export class ChangePasswordPage {
  page: any;

  constructor(page: any) {
    this.page = page;
  }
  async navigate(): Promise<void> {
    await this.page.goto('http://localhost:8080/account/password');
    await this.page.waitForSelector('[data-cy="currentPassword"]');
  }

  async updatePassword(currentPassword: string, newPassword: string, newPasswordConfirm: string): Promise<void> {
    await this.page.fill('[data-cy="currentPassword"]', '');
    await this.page.fill('[data-cy="newPassword"]', '');
    await this.page.fill('[data-cy="confirmPassword"]', '');

    await this.page.fill('[data-cy="currentPassword"]', currentPassword);
    await this.page.fill('[data-cy="newPassword"]', newPassword);
    await this.page.fill('[data-cy="confirmPassword"]', newPasswordConfirm);
    await this.page.click('[data-cy="submit"]');
  }
}
