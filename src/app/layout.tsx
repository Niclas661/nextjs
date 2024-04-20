import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import type { ReactNode } from "react"

import { ThemeToggler } from "@/components/common/themeToggler"
import { cn } from "@/lib/utils"
import Providers from "@/providers/providers"
import { themeSetter } from "@/scripts/theme"
import "@/styles/globals.css"

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans"
})

export const metadata: Metadata = {
	title: 'Thin Livestreamer "client"',
	description: "Easy access to livestreamers on Twitch and YouTube."
}

type Props = {
	readonly children: ReactNode | ReactNode[]
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{themeSetter && (
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <need this to fix theme flicker>
					<script dangerouslySetInnerHTML={{ __html: themeSetter }} />
				)}
			</head>
			<body
				className={cn(
					"min-h-screene font-sans antialiased transition-all duration-200",
					fontSans.variable
				)}>
				<Providers>
					<ThemeToggler />
					{children}
					<div className="fixed inset-x-0 bottom-0 flex justify-center items-center py-2 flex-col bg-background">
						<h4>
							Built on
							<a
								href="https://github.com/Pouiiro/Pouiiros_next_plate"
								target="_blank"
								rel="noreferrer"
								className="ml-1 font-medium italic dark:text-blue-400">
								Pouiiro/Pouiiros_next_plate
							</a>
						</h4>
						<h4>
							Source code at
							<a
								href="https://github.com/Niclas661/nextjs"
								target="_blank"
								rel="noreferrer"
								className="ml-1 font-medium italic dark:text-blue-400">
								Niclas661/nextjs
							</a>
						</h4>
					</div>
				</Providers>
			</body>
		</html>
	)
}
