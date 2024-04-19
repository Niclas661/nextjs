"use client"

import Link from "next/link"

export const StreamerAccordion = ({
  streamers,
}: { streamers: Array<{ id: string, source: string, ytChannelId?: string }> }) => {
  return (
    <ul>
      {streamers.map((streamer) => (
        <li key={streamer.id} className="mx-2 my-6 uppercase">
          <Link href={`/livestreamers/${streamer.id}?source=${streamer.source}${streamer.ytChannelId ? `&channelId=${streamer.ytChannelId}` : ''}`}>
            {streamer.id}
          </Link>
        </li>
      ))}
    </ul>
  )
}
