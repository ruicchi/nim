type Project = {
  name: string
  description: string
  link: string
  video: string
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

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'chungus-lang',
    description:
      'An automata theory based general programming language.',
    link: 'https://github.com/marianoluiz/chungus-lang',
    video:
      '//TODO',
    id: 'project1',
  },
  {
    name: 'matching-stars',
    description: 'Match 2 card game, with galaxy theme!',
    link: 'https://github.com/ruicchi/matching-stars',
    video:
      'https://res.cloudinary.com/dfz0pi0zy/video/upload/v1772182006/Match_2_video_j9hqfh.mp4',
    id: 'project2',
  },
  {
    name: 'sorting-visualizer',
    description: 'A project for visualizing sorting algorithms.',
    link: 'https://github.com/ruicchi/sorting-visualizer',
    video:
      'https://res.cloudinary.com/dfz0pi0zy/video/upload/v1772181118/Sorting_video_xsgqjr.mp4',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  //* to be added soon if i got work or intern
  
  // {
  //   company: 'Reglazed Studio',
  //   title: 'CEO',
  //   start: '2024',
  //   end: 'Present',
  //   link: 'https://ibelick.com',
  //   id: 'work1',
  // },
  // {
  //   company: 'Freelance',
  //   title: 'Design Engineer',
  //   start: '2022',
  //   end: '2024',
  //   link: 'https://ibelick.com',
  //   id: 'work2',
  // },
  // {
  //   company: 'Freelance',
  //   title: 'Front-end Developer',
  //   start: '2017',
  //   end: 'Present',
  //   link: 'https://ibelick.com',
  //   id: 'work3',
  // },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'The fascinating technolology direction of Japan',
    description: 'Their quiet innovation',
    link: '/blog/the-fascinating-technology-direction-of-japan',
    uid: 'blog-1',
  },
  {
    title: 'What I learned from my first three years of college',
    description:
      'A look back at my college years and what I learned',
    link: '/blog/what-i-learned-from-my-first-three-years-of-college',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Ruicchi',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/luiscapiral',
  },
]

export const EMAIL = 'luiscapiral@yahoo.com'