import { LoginPage } from '../models/login';

let loginPage: LoginPage;

beforeEach(async () => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

test('should login', async () => {
  await loginPage.login('admin', 'admin');
  await page.goto('http://localhost:8080');
  await page.waitForSelector('[data-cy="adminMenu"]');
});
