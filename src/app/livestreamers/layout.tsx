import { StreamerAccordion } from "./accordion"

export default async function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const livestreamers = [
		{ id: "xqc", source: "twitch" },
		{ id: "forsen", source: "twitch" },
		{ id: "caseoh_", source: "twitch" },
		{
			id: "destiny",
			source: "youtube",
			ytChannelId: "UC554eY5jNUfDq3yDOJYirOQ"
		}
	]

	return (
		<div className="container mx-auto grid md:grid-cols-5 sm:grid-cols-3 m-8">
			<div className="col-span-1 m-2">
				<h1 id="items-heading" className="font-bold">
					Streamers 🖥️
				</h1>
				<StreamerAccordion streamers={livestreamers} />
			</div>
			<div className="md:col-span-4 sm:col-span-2">{children}</div>
		</div>
	)
}
