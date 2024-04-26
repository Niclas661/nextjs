"use client"

import { RefreshCcw } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import YoutubeEmbedVideo from "youtube-embed-video"

import { livestreamers } from "@/constants/data"
import { getYoutubeStream } from "./getYoutubeStream"

const StreamPlatformOptions = ({
	id
}: {
	id: string | string[]
}) => {
	if (Array.isArray(id)) {
		return null
	}
	const foundStreamer = livestreamers.find(
		(l) => l.id.toLowerCase() === id.toLowerCase()
	)
	if (foundStreamer === undefined) {
		return null
	}

	const { platformIds } = foundStreamer

	return (
		<div className="flex gap-2 mb-4">
			{platformIds.kick && (
				<Link href={`/livestreamers/${id}?source=kick`}>
					<button type="button">Kick</button>
				</Link>
			)}
			{platformIds.twitch && (
				<Link href={`/livestreamers/${id}?source=twitch`}>
					<button type="button">Twitch</button>
				</Link>
			)}
		</div>
	)
}

const Display = async () => {
	const params = useParams()
	const searchParams = useSearchParams()

	const router = useRouter()
	const ytVideoId = await getYoutubeStream(
		searchParams.get("channelId") ?? ""
	)

	return (
		<div>
			<div className="flex gap-4 align-middle mb-8">
				<h1 className="text-2xl">{params.id}</h1>

				<button onClick={() => router.refresh()} type="button">
					<RefreshCcw />
				</button>
			</div>

			<StreamPlatformOptions id={params.id} />

			{searchParams.get("source") === "twitch" ? (
				<ReactTwitchEmbedVideo width={720} channel={params.id} />
			) : searchParams.get("source") === "kick" ? (
				<iframe
					src={`https://player.kick.com/${params.id}`}
					width={720}
					height={480}
					allowFullScreen={true}
					title="Kick embed player"
				/>
			) : (
				<div>
					<YoutubeEmbedVideo
						videoId={ytVideoId}
						width={720}
						height={480}
						autoplay={true}
					/>
				</div>
			)}
		</div>
	)
}

export default Display
