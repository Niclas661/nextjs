"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import Link from "next/link"
import { useState } from "react"

const CustomField = () => {
	const [channelName, setChannelName] = useState('')
  const [platform, setPlatform] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChannelName(e.currentTarget.value)
	}

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlatform(e.currentTarget.value)
  }

	return (
		<>
			<h3 className="font-semibold mt-16 mb-4">Find livestream</h3>

			<div>
        <Label>Channel name</Label>
				<input
					type="text"
					className="w-32 mt-2"
					id="customValue"
					name="customValue"
					onChange={handleInputChange}
				/>
			</div>

			<fieldset className="my-4 flex gap-2">
				<legend>Platform</legend>
				<div>
					<input
						type="radio"
						id="platform"
						name="platform"
						value="twitch"
            onChange={handleRadioChange}
						defaultChecked
					/>
					<label htmlFor="twitch">Twitch</label>
				</div>

				<div>
					<input
						type="radio"
						id="platform"
						name="platform"
						value="youtube"
            onChange={handleRadioChange}
            disabled
					/>
					<label htmlFor="youtube">YouTube</label>
				</div>
			</fieldset>

			<Link href={`/livestreamers/${channelName}?source=${platform}`}>
				<Button>Open stream</Button>
			</Link>
		</>
	)
}

export const StreamerAccordion = ({
	streamers
}: {
	streamers: Array<{ id: string; source: string; ytChannelId?: string }>
}) => {
	return (
		<div>
			<ul>
				{streamers.map((streamer) => (
					<li key={streamer.id} className="mx-2 my-6 uppercase">
						<Link
							href={`/livestreamers/${streamer.id}?source=${
								streamer.source
							}${
								streamer.ytChannelId
									? `&channelId=${streamer.ytChannelId}`
									: ""
							}`}>
							{streamer.id}
						</Link>
					</li>
				))}
			</ul>

			<CustomField />
		</div>
	)
}
