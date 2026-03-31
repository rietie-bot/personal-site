export type Speaker = {
  name: string
  role: string
  link?: string
  id: string
}

export type ScheduleItem = {
  time: string
  title: string
  description?: string
  id: string
}

export const EVENT = {
  title: 'OpenClaw Setup Night',
  subtitle: 'no AI experience needed',
  date: 'March 31, 2026',
  time: '17:30 – 22:30 CEST',
  venue: 'betahaus | Gänsemarkt',
  address: 'Gänsemarkt 43, 20354 Hamburg',
  lumaLink: 'https://luma.com/1du8xbfg',
  hostedBy: 'AI BEAVERS',
}

export const HIGHLIGHTS: string[] = [
  'Step-by-step setup help, no matter your level',
  'Real use cases from people already running OpenClaw daily',
  'Free OpenAI Codex subscription for every participant',
  'People who'll actually answer your questions without making it weird',
]

export const SCHEDULE: ScheduleItem[] = [
  {
    time: '17:30',
    title: 'Doors Open',
    description: 'Grab a drink, find a seat, say hi.',
    id: 'schedule-1',
  },
  {
    time: '18:00',
    title: 'Intro & Setup Kickoff',
    description: 'Quick overview, then we get OpenClaw running on your machine.',
    id: 'schedule-2',
  },
  {
    time: '18:45',
    title: 'Live Demo: Kilo Code',
    description: 'Watch an AI coding agent build a personal website from scratch.',
    id: 'schedule-3',
  },
  {
    time: '19:15',
    title: 'Hands-on Workshop',
    description: 'Customize your setup, explore use cases, get help from the crew.',
    id: 'schedule-4',
  },
  {
    time: '20:30',
    title: 'Open Hang & Networking',
    description: 'Keep hacking, share what you built, or just chill.',
    id: 'schedule-5',
  },
]

export const SPEAKERS: Speaker[] = [
  {
    name: 'Alexander Zakharov',
    role: 'AI BEAVERS',
    id: 'speaker-1',
  },
  {
    name: 'Andreas Wissel',
    role: 'AI BEAVERS',
    id: 'speaker-2',
  },
  {
    name: 'Vladyslav Nyzhashchyy',
    role: 'AI BEAVERS',
    id: 'speaker-3',
  },
]
