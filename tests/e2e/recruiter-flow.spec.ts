import { expect, type Locator, test } from "@playwright/test";

async function expectMinHitArea(locator: Locator, minHeight = 44) {
  const tolerance = 0.2;
  const count = await locator.count();

  for (let index = 0; index < count; index += 1) {
    const box = await locator.nth(index).boundingBox();
    expect(box, `Missing bounding box for locator index ${index}`).not.toBeNull();
    expect(box!.height).toBeGreaterThanOrEqual(minHeight - tolerance);
  }
}

test("recruiter flow across home, case study, resume, and contact", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /ship production software/i,
    }),
  ).toBeVisible();

  await expect(page.getByRole("status")).toContainText(
    "Portfolio in active development; content and UX are being refined.",
  );

  const letsTalkLink = page.locator('header a[data-cta="talk-primary"]:visible').first();
  const headerResumeLink = page.locator('header a[data-cta="resume-secondary"]').first();

  await expect(letsTalkLink).toBeVisible();
  await expect(headerResumeLink).toBeVisible();
  await expect(headerResumeLink).toHaveAttribute("href", /\/resume\/carlos-arancibia-resume\.pdf/);
  await expect(headerResumeLink).toHaveAttribute("target", "_blank");
  await expect(letsTalkLink).toHaveClass(/bg-\[linear-gradient/);
  await expect(headerResumeLink).not.toHaveClass(/bg-\[linear-gradient/);

  await expect(page.locator("main")).toContainText(/10,000\+/i);
  await expect(page.locator("main")).toContainText(/3,000\/day/i);
  await expect(page.locator("main")).toContainText(/active in production today/i);
  await expect(page.getByRole("heading", { name: "Professional Recommendation" })).toBeVisible();
  await expect(page.locator("main")).toContainText(/samuel soliz adaos/i);
  await expect(
    page.getByRole("link", { name: "LinkedIn recommendation" }).first(),
  ).toHaveAttribute("href", /linkedin\.com\/in\/carancibiav\/details\/recommendations/);

  await expectMinHitArea(page.locator("main a").filter({ hasText: /case study/i }));

  await page.goto("/about");
  await expect(page.locator("main")).toContainText(/aug 2014 - dec 2014/i);
  await expect(page.locator("main")).toContainText(/dec 2019 - jun 2024/i);
  await expect(page.locator("main")).not.toContainText(
    /my work spans public mobile distribution, payment collections, and operational systems used by/i,
  );
  await expect(page.locator("main")).toContainText(/focus on production evidence, continuity/i);

  await page.goto("/case-studies");
  await expect(page).toHaveURL(/\/case-studies$/);
  await expect(page.locator("main")).toContainText(/product context/i);
  await expect(page.locator("main")).toContainText(/matchdayos/i);
  await expect(page.locator("main")).toContainText(/dec 2019 - jun 2024/i);
  await expect(page.locator("main")).toContainText(/jan 2017 - jun 2024/i);
  await expectMinHitArea(page.locator("main a").filter({ hasText: /read case study/i }));

  await page.getByRole("link", { name: "Read case study" }).first().click();
  await expect(page).toHaveURL(/\/case-studies\/.+/);
  await expect(page.getByRole("heading", { name: "Snapshot" })).toBeVisible();
  await expect(page.locator("main")).toContainText(/dec 2019 - jun 2024/i);
  await expect(page.locator("main")).not.toContainText(/datec ecosystem/i);

  await page.goto("/resume");
  await expect(page.getByRole("link", { name: /Open Resume/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "Download PDF" })).toBeVisible();
  await expect(page.locator("main").locator("iframe")).toHaveCount(0);
  await expectMinHitArea(page.getByRole("link", { name: "Download PDF" }));

  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "Let's connect" })).toBeVisible();
  await expect(page.locator("main").getByRole("link", { name: "Email" }).first()).toBeVisible();

  await expect(page.locator("footer")).not.toContainText(
    /recruiter-first portfolio focused on production evidence/i,
  );
});

test("mobile header prioritizes Let's Talk and exposes secondary actions in hamburger panel", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const letsTalkLink = page.locator('header a[data-cta="talk-primary"]:visible').first();
  const desktopResumeLink = page.locator('header a[data-cta="resume-secondary"]').first();

  await expect(letsTalkLink).toBeVisible();
  await expect(desktopResumeLink).toBeHidden();

  const menuButton = page.getByRole("button", { name: "Open navigation menu" });
  await expect(menuButton).toBeVisible();
  await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toHaveCount(0);

  await menuButton.click();

  const mobilePanel = page.getByRole("dialog", { name: "Mobile navigation" });
  await expect(mobilePanel).toBeVisible();
  await expect(mobilePanel.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(mobilePanel.getByRole("link", { name: "About" })).toBeVisible();
  await expect(mobilePanel.getByRole("link", { name: "Case Studies" })).toBeVisible();

  const resumeMobileLink = mobilePanel.locator('a[data-cta="resume-mobile"]').first();
  await expect(resumeMobileLink).toHaveAttribute("href", /\/resume\/carlos-arancibia-resume\.pdf/);
  await expect(resumeMobileLink).toHaveAttribute("target", "_blank");
  await expect(mobilePanel.getByRole("button", { name: /theme preference/i })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(mobilePanel).toHaveCount(0);
});

test("no horizontal overflow on key recruiter breakpoints", async ({ page }) => {
  test.setTimeout(180_000);

  const viewports = [
    { width: 360, height: 740 },
    { width: 375, height: 667 },
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1366, height: 768 },
    { width: 1440, height: 900 },
  ];

  const routes = ["/", "/about", "/case-studies", "/resume", "/contact"];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);

    for (const route of routes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const hasOverflow = await page.evaluate(() => {
        const doc = document.documentElement;
        return doc.scrollWidth > doc.clientWidth;
      });

      expect(hasOverflow, `Overflow on ${route} @ ${viewport.width}x${viewport.height}`).toBe(false);
    }
  }
});

test("theme selector works with keyboard interaction", async ({ page }) => {
  await page.goto("/");

  const themeButton = page.getByRole("button", { name: /theme preference/i });
  await themeButton.focus();
  await page.keyboard.press("Enter");

  await expect(page.getByRole("radio", { name: "System" })).toBeVisible();

  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Escape");

  await expect(themeButton).toBeFocused();
});

test("legacy FEP case study route redirects to MatchdayOS", async ({ page }) => {
  await page.goto("/case-studies/fep");
  await expect(page).toHaveURL(/\/case-studies\/matchdayos$/);
});
