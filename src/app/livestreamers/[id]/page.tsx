"use client"

import { useTheme } from 'next-themes'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'
import YoutubeEmbedVideo from 'youtube-embed-video'

import { getYoutubeStream } from './getYoutubeStream'

export default async function Display ({
  params,
  searchParams,
}: {
  params: {
    id: string,
  },
  searchParams: {
    source: string,
    channelId?: string,
  }
}) {
  const { theme } = useTheme()

  const ytVideoId = 'exUpFfxC-Mk' // await getYoutubeStream(searchParams.channelId ?? '')

  return (
    <div>
      <h1 className='mb-8 text-2xl'>{params.id}</h1>

      {searchParams.source === 'twitch' ? (
        <ReactTwitchEmbedVideo theme={theme ?? 'light'} width={720} channel={params.id} />
      ) : (
        <div>
          <YoutubeEmbedVideo videoId={ytVideoId} width={720} height={480} autoplay={true} />
          <iframe src={/*`https://www.youtube.com/live_chat?v=${ytVideoId}`*/`https://www.youtube.com/live/chat?v=${ytVideoId}&embed\domain=niclas661.xyz`} />
        </div>
      )}
    </div>
  )
}
