
import { test, expect } from '@playwright/test';
test('test', { tag: '@smoke' }, async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('wake up ');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('workout');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('home cleaning ');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('study');
  await page.getByTestId('text-input').press('Enter');
  await page.getByText('wake up').click();
  await page.getByRole('listitem').filter({ hasText: 'wake up' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'workout' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
//   await expect(page.getByTestId('todo-item').getByTestId('text-input')).toHaveValue('study');
  await page.getByTestId('footer-navigation').click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.getByRole('link', { name: 'All' })).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('study');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(5);

  // Just adding comment to test new PR
  
});