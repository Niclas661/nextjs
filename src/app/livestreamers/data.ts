
export enum Platform {
  Twitch = 'twitch',
  YouTube = 'youtube',
  Kick = 'kick',
}

interface Livestreamer {
  readonly id: string
  readonly platformIds: {
    youtube?: string
    kick?: string
    twitch?: string
  }
  readonly mediaChannelURLs?: {
    x?: string
    instagram?: string
    youtube?: string
  }
}

export const livestreamers: Array<Livestreamer> = [
  {
    id: 'xqc',
    platformIds: {
      twitch: 'xqc',
      kick: 'xqc',
    },
    mediaChannelURLs: {
      x: 'https://twitter.com/xQc',
      youtube: 'https://www.youtube.com/@xQcOW',
    },
  },
  {
    id: 'forsen',
    platformIds: {
      twitch: 'forsen',
    },
    mediaChannelURLs: {
      x: 'https://twitter.com/Forsen',
    },
  },
  {
    id: 'caseoh_',
    platformIds: {
      twitch: 'caseoh_',
    },
    mediaChannelURLs: {
      instagram: 'https://www.instagram.com/caseoh_games/',
    },
  },
  {
    id: 'destiny',
    platformIds: {
      youtube: 'destiny',
      kick: 'destiny',
    },
    mediaChannelURLs: {
      instagram: 'https://www.instagram.com/destiny/',
      x: 'https://twitter.com/TheOmniLiberal/',
    }
  }
]
