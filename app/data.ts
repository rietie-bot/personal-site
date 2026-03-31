type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

// ✏️ Edit these with your own projects!
export const PROJECTS: Project[] = [
  {
    name: 'My Cool Project',
    description: 'A short description of what you built.',
    link: 'https://example.com',
    id: 'project1',
  },
  {
    name: 'Another Project',
    description: 'Something else you're proud of.',
    link: 'https://example.com',
    id: 'project2',
  },
]

// ✏️ Add your work history!
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Your Company',
    title: 'Your Role',
    start: '2023',
    end: 'Present',
    link: 'https://example.com',
    id: 'work1',
  },
]

// ✏️ Add your social links!
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/yourname',
  },
  {
    label: '𝕏',
    link: 'https://x.com/yourhandle',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/yourname',
  },
]

// ✏️ Your email address
export const EMAIL = 'you@example.com'
