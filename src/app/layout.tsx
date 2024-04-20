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
	title: 'Thin livestreamer "client"',
	description:
		"Easy access to livestreamers on Twitch and YouTube."
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
					<h4 className="fixed inset-x-0 bottom-0 flex justify-center items-end pb-8">
						Built upon 
						<a
							href="https://github.com/Pouiiro/Pouiiros_next_plate"
							target="_blank"
							rel="noreferrer"
							className="ml-1 font-medium italic text-blue-900 dark:text-blue-400 animate-pulse">
							Pouiiro/Pouiiros_next_plate
						</a>
					</h4>
				</Providers>
			</body>
		</html>
	)
}
