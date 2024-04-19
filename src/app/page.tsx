"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
			<h1 className="font-semibold">
				Thin Livestreamer "client"
			</h1>
			<p className="text-sm">
				Watch some of the most popular Twitch/Youtube channels from here!
			</p>
			<Link href="/livestreamers">
				<Button>Explore streams</Button>
			</Link>
		</main>
	)
}
