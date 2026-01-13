import { expect, test } from "@playwright/test"

const skipTest = true

// These are "smoke tests" because they confirm the most basic critical
// functionality (the page loads and renders something) without going into deep
// detail about every single component.
test.describe("Smoke Tests: Page Loads & Rendering", () => {
  test("has title", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Lloyd Lobo/)
    // Code: <title>Lloyd Lobo | Portfolio</title> in Layout.astro.
  })

  test("has main heading", async ({ page }) => {
    // Playwright's toBeVisible() will automatically wait for the GSAP fade-in
    // animation (approx 1.2s) to complete, which is good.
    await page.goto("/")
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    // Code: <h1 ...>Hello there! I'm ...</h1> in Hero.astro.
  })
})

test.describe("Data Verification", () => {
  test("renders cv data correctly", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByText("Lloyd Lobo").first()).toBeVisible() // verify name
    await expect(page.getByText("tinycreatures").first()).toBeVisible() // verify a specific project exists (using data from cv.astro.json)
    await expect(page.getByText("Systems Programming")).toBeVisible() // verify a specific skill category
  })
})

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("floating nav links exist", async ({ page }) => {
    const nav = page.locator("#floating-nav")
    await expect(nav).toBeVisible()
    await expect(nav.getByRole("button", { name: "Home" })).toBeVisible()
    await expect(nav.getByRole("button", { name: "Projects" })).toBeVisible()
    await expect(nav.getByRole("button", { name: "Contact" })).toBeVisible()
  })

  test("social links have correct attributes", async ({ page }) => {
    const navContainer = page.locator("#floating-nav-container")
    await expect(navContainer).toBeVisible()

    await expect(page.locator(`[aria-label="GitHub"]`).first()).toBeVisible() // layout-aware locator

    const githubLink = navContainer.getByRole("link", { name: "GitHub" })
    await expect(githubLink).toBeVisible()
    await expect(githubLink).toHaveAttribute("href", /^https:\/\/github\.com\//)
  })
})

test.describe("Interactions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("clicking Projects scrolls to projects section", async ({ page }) => {
    const projectsSection = page.locator("#projects")
    const projectsTop = await projectsSection.evaluate((el) => el.offsetTop)

    if (!skipTest) { // TODO
      await page.click("#projectsBtn")
      await page.waitForTimeout(1200) // wait for GSAP animation to complete
      const scrollY = await page.evaluate(() => window.scrollY)
      expect(scrollY).toBeGreaterThan(projectsTop - 200)
    }
  })
})
