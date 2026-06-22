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
  await expect(page).toHaveTitle("Carlos Arancibia | Senior Product Engineer");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://www.carlos-arancibia.com");

  await expect(
    page.getByRole("heading", {
      name: /product engineer shipping/i,
    }),
  ).toBeVisible();

  await expect(page.locator("body")).not.toContainText(/portfolio in active development/i);

  const letsTalkLink = page.locator('header a[data-cta="talk-primary"]:visible').first();
  const headerResumeLink = page.locator('header a[data-cta="resume-secondary"]').first();

  await expect(letsTalkLink).toBeVisible();
  await expect(headerResumeLink).toBeVisible();
  await expect(headerResumeLink).toHaveAttribute("href", "/resume/print");
  await expect(headerResumeLink).toHaveAttribute("target", "_blank");

  await expect(page.locator("main")).toContainText(/10,000\+ downloads/i);
  await expect(page.locator("main")).toContainText(/Daily users/i);
  await expect(page.locator("main")).toContainText(/3,000\/day/i);
  await expect(page.getByRole("heading", { name: /three products that show how i build/i })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /what a former executive said about working with me/i }),
  ).toBeVisible();
  expect(await page.content()).toContain('"@type":"WebSite"');
  await expect(page.locator("main")).toContainText(/samuel soliz adaos/i);
  await expect(page.getByRole("link", { name: /view full recommendation/i })).toHaveAttribute(
    "href",
    /linkedin\.com\/in\/carancibiav\/details\/recommendations/,
  );

  await expect(page.getByRole("link", { name: /Read Digicorp DigiApp & Commerce case study/i })).toBeVisible();
  await expectMinHitArea(page.locator("main a").filter({ hasText: /case study/i }));

  await page.goto("/about");
  await expect(page).toHaveTitle("About Carlos Arancibia | Senior Product Engineer");
  await expect(page.getByRole("heading", { name: /i started in infrastructure/i })).toBeVisible();
  await expect(page.locator("main")).toContainText(/aug 2014 - dec 2014/i);
  await expect(page.locator("main")).toContainText(/dec 2019 - jun 2024/i);
  await expect(page.locator("main")).toContainText(/some roles overlapped by design/i);
  await expect(page.locator("main")).not.toContainText(/parallel context:/i);

  await page.goto("/case-studies");
  await expect(page).toHaveURL(/\/case-studies$/);
  await expect(page).toHaveTitle("Case Studies | Apps, Payments & Internal Tools | Carlos Arancibia");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://www.carlos-arancibia.com/case-studies",
  );
  await expect(page.locator("main")).toContainText(
    /An organized selection of shipped apps, payment systems, and internal tools/i,
  );
  await expect(page.locator("main")).toContainText(/additional product work/i);
  await expect(page.locator("main")).toContainText(/ownership/i);
  expect(await page.content()).toContain('"@type":"CollectionPage"');
  await expect(
    page.getByRole("link", { name: /Read Digicorp DigiApp & Commerce Ownership case study/i }),
  ).toBeVisible();
  await expectMinHitArea(page.locator("main a").filter({ hasText: /case study/i }));

  await page.getByRole("link", { name: /Read Digicorp DigiApp & Commerce Ownership case study/i }).click();
  await expect(page).toHaveURL(/\/case-studies\/.+/);
  await expect(page).toHaveTitle(/Digicorp DigiApp & Commerce Ownership \| Carlos Arancibia/);
  await expect(page.getByRole("heading", { name: /at a glance/i })).toBeVisible();
  await expect(page.locator("main")).toContainText(/why this matters/i);
  await expect(page.locator("main")).toContainText(/outcome/i);
  await expect(page.locator("main")).toContainText(/ownership/i);
  expect(await page.content()).toContain('"@type":"TechArticle"');

  await page.goto("/resume");
  await expect(page).toHaveTitle("Resume | Carlos Arancibia");
  await expect(page.getByRole("link", { name: "Open Print-Ready Resume" })).toBeVisible();
  await expect(page.locator("main").locator("iframe")).toHaveCount(0);
  await page.getByRole("button", { name: "Open inline preview" }).click();
  await expect(page.locator("main").locator("iframe")).toHaveCount(1);

  await page.goto("/#contact-section");
  await expect(page.getByRole("heading", { name: "Hiring? Start here" })).toBeVisible();
  await expect(page.locator("main")).toContainText(/Immediate/i);
  await expect(page.locator("main").getByRole("link", { name: "Email Carlos" }).first()).toBeVisible();
});

test("mobile header prioritizes Let's Talk and exposes secondary actions in hamburger panel", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const letsTalkLink = page.locator('header a[data-cta="talk-primary"]:visible').first();
  const desktopResumeLink = page.locator('header a[data-cta="resume-secondary"]').first();

  await expect(letsTalkLink).toBeVisible();
  await expect(desktopResumeLink).toBeHidden();

  const menuButton = page.getByRole("button", { name: "Open navigation menu" });
  const mobileNav = page.locator('header nav[aria-label="Mobile primary"]');

  await expect(menuButton).toBeVisible();
  await expect(mobileNav).toHaveCount(0);

  await menuButton.click();

  await expect(mobileNav).toBeVisible();
  await expect(mobileNav.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(mobileNav.getByRole("link", { name: "About" })).toBeVisible();
  await expect(mobileNav.getByRole("link", { name: "Case Studies" })).toBeVisible();

  const resumeMobileLink = page.locator('header a[data-cta="resume-mobile"]').first();
  await expect(resumeMobileLink).toHaveAttribute("href", "/resume/print");
  await expect(resumeMobileLink).toHaveAttribute("target", "_blank");
  await expect(page.locator('header button[aria-label^="Current theme:"]').last()).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(mobileNav).toHaveCount(0);
  await expect(menuButton).toBeFocused();
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

  const routes = ["/", "/about", "/case-studies", "/resume"];

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

test("theme selector works with keyboard interaction and keeps radiogroup semantics", async ({ page }) => {
  await page.goto("/");

  const themeButton = page.getByRole("button", { name: /current theme/i });
  await themeButton.focus();
  await page.keyboard.press("Enter");

  await expect(page.getByRole("radiogroup", { name: "Theme mode" })).toBeVisible();
  await expect(page.getByRole("dialog", { name: /theme preference/i })).toHaveCount(0);

  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Escape");

  await expect(themeButton).toBeFocused();
});

test("legacy FEP case study route redirects to MatchdayOS", async ({ page }) => {
  await page.goto("/case-studies/fep");
  await expect(page).toHaveURL(/\/case-studies\/matchdayos$/);
});
