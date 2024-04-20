import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"

import Page from "@/app/page"

test("Home page", () => {
	render(<Page />)
	const header = screen.getByRole("heading", {
		level: 1,
		name: "Thin Livestreamer \"client\""
	})
	const button = screen.getByRole("button", { name: "Explore streams" })

	expect(header).toBeDefined()
	expect(button).toBeDefined()
})
