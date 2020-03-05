import { fag, portraitfag, solarpunk, dof, projects } from '../fag/fumonicon'

const navSegments = [
  {
    slug: 'about',
    segment: 'about',
    svg: portraitfag.svg,
    title: 'about\n',
  },
  {
    slug: 'projects',
    segment: 'projects',
    svg: projects.svg,
    title: 'projects\n',
  },
  {
    slug: '.',
    segment: undefined,
    svg: fag.svg,
    title: 'home\n',
  },
  {
    slug: 'solarpunk',
    segment: 'solarpunk',
    svg: solarpunk.svg,
    title: 'solar\npunk',
  },
  {
    slug: 'dof',
    segment: 'dof',
    svg: dof.svg,
    title: 'designing\nour future',
  },
]

export default navSegments
