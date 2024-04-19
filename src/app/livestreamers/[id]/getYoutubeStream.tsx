import YoutubeEmbedVideo from 'youtube-embed-video'

const API_KEY = ''

export const getYoutubeStream = async (channelId: string) => {

  if (channelId === '') {
    return undefined
  }

  const apiLiveBroadcastData = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${API_KEY}`
  )
  if (!apiLiveBroadcastData.ok) {
    return undefined
  }

  const apiData = (await apiLiveBroadcastData.json()) as {
    items: Array<{
      id: {
        videoId: string,
      },
    }>,
  }


  return apiData.items[0]?.id.videoId
}
