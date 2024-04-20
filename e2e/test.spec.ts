import { expect, test } from "@playwright/test"

test("Test E2E", async ({ page }) => {
	await page.goto("/")
	await expect(page).toHaveTitle("Thin Livestreamer \"client\"")
	await expect(page.locator("h1")).toHaveText(
		"Thin Livestreamer \"client\""
	)

	await page.getByRole("link", { name: "Explore streams" }).click()
	await expect(page).toHaveURL("/livestreamers")
	await expect(page.locator("h1")).toHaveText("Choose a streamer from the list, and get an embedded Twitch/YouTube player and chat.")
})
