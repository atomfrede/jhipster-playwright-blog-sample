import { LoginPage } from '../models/login';
import { ChangePasswordPage } from '../models/change-password';

let loginPage: LoginPage;
let changePasswordPage: ChangePasswordPage;

beforeAll(async () => {
  loginPage = new LoginPage(page);
  changePasswordPage = new ChangePasswordPage(page);
  await loginPage.navigate();
  await loginPage.login('user', 'user');
  await changePasswordPage.navigate();
});

test('should fail to update password when using incorrect current password', async () => {
  await page.route('**/api/account/change-password', route =>
    route.fulfill({
      status: 400,
    })
  );

  await changePasswordPage.updatePassword('wrong-current-password', 'jhipster', 'jhipster');
  await page.waitForSelector('.alert-danger');

  await page.unroute('**/api/account/change-password');
});

test('should be able to update password', async () => {
  await page.route('**/api/account/change-password', route =>
    route.fulfill({
      status: 200,
    })
  );

  await changePasswordPage.updatePassword('correct-current-password', 'jhipster', 'jhipster');
  await page.waitForSelector('.alert-success');

  await page.unroute('**/api/account/change-password');
});
