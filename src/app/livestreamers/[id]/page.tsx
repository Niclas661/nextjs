"use client"

import { RefreshCcw } from "lucide-react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import YoutubeEmbedVideo from "youtube-embed-video"

import { getYoutubeStream } from "./getYoutubeStream"

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

			{searchParams.get("source") === "twitch" ? (
				<ReactTwitchEmbedVideo width={720} channel={params.id} />
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
