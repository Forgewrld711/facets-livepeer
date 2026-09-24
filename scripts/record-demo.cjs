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
  await page.waitForTimeout(1800);
  await page.getByRole('button', { name: 'Play calibration' }).click();
  await page.waitForTimeout(3500);
  await page.getByLabel('Creative direction').fill('a living glass archipelago at midnight, crystalline tides, luminous cyan and magenta, no text');
  await page.waitForTimeout(2200);
  await page.locator('#generate').hover();
  await page.waitForTimeout(1600);
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await page.waitForTimeout(3200);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(2200);
  await context.close();
  await browser.close();
})();
