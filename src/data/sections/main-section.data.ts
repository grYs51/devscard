import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/astolfo.jpeg'),
  fullName: 'Grace Bulckens',
  role: 'Angular Frontend Developer',
  details: [
    { label: 'Email', value: 'info@grys.me', url: 'mailto:info@grace.me' },
    { label: 'From', value: 'Antwerp, Belgium' },
  ],
  pdfDetails: [
    // { label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'info@grys.me' },
    { label: 'LinkedIn', value: '/in/grace.bulcken', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/grys51', url: 'https://github.com' },
    { label: 'Website', value: 'grys.me', url: '/', fullRow: true },
  ],
  description:
    'I am a frontend developer with a passion for Angular. I am currently working at Euricom, a consultancy company in Belgium.',
  tags: [{ name: 'Angular' }, { name: 'TypeScript' }, { name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Grace-Bulckens.pdf',
  },
  links: [
    github({ url: 'https://github.com/grYs51' }),
    linkedin({ url: 'https://www.linkedin.com/in/grace-bulckens/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
