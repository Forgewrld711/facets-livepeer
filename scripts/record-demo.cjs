const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: 'C:\\Users\\miran\\AppData\\Local\\Temp\\facets-demo-recording',
      size: { width: 1440, height: 900 },
    },
  });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:8042', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1600);
  await page.getByRole('button', { name: 'Play calibration' }).click();
  await page.waitForTimeout(2600);
  await page.getByLabel('Creative direction').fill('a living glass archipelago at midnight, crystalline tides, luminous cyan and magenta, no text');
  await page.waitForTimeout(1100);
  await page.getByRole('button', { name: 'Generate facet' }).click();
  await page.locator('#loop-status').filter({ hasText: /Attempt 1 returned/ }).waitFor({ timeout: 90000 });
  await page.waitForTimeout(3300);
  await page.getByLabel('Creative direction').fill('the same sound as a luminous underwater cathedral, deep blue glass and soft gold, no text');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Refine again' }).click();
  await page.locator('#loop-status').filter({ hasText: /Attempt 2 returned/ }).waitFor({ timeout: 90000 });
  await page.waitForTimeout(4200);
  await context.close();
  await browser.close();
})();
