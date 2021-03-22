import { LoginPage } from '../models/login';

let loginPage: LoginPage;

beforeAll(async () => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

test('requires username', async () => {
  await loginPage.login('', 'a-password', false);
  await loginPage.loginErrorVisible();
});

test('requires password', async () => {
  await loginPage.login('a-login', '', false);
  await loginPage.loginErrorVisible();
});

test('errors when password is incorrect', async () => {
  await loginPage.login('admin', 'bad-password', false);
  await loginPage.loginErrorVisible();
});

test('go to login page when successfully logs in', async () => {
  await loginPage.login('admin', 'admin');
  await page.waitForSelector('[data-cy="adminMenu"]');
});
