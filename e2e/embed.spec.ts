import { expect, test } from "@playwright/test"

test("Test livestreamers", async ({ page }) => {
	await page.goto("/livestreamers")
	await expect(page.locator("h2")).toHaveText(
		"Streamers 🖥️"
	)
})
