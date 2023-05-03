import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, linkedin, twitter, website } from '../helpers/links';
import {
  angular,
  angularUniversal,
  eslint,
  firebase,
  jest,
  nextJs,
  nx,
  php,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Angular front-end developer',
      company: 'Zimmo',
      image: import('@/assets/logos/zimmo.png'),
      dates: [new Date('2022-10'), null],
      description: `Zimmo is the second largest real estate platform in Belgium, attracting 6.2 million monthly visitors with over 110,000 real estate advertisements.Their user-friendly website, app, and innovative tools make the buying/selling process more transparent and understandable for all parties. They provide extra information about properties, such as price history and a powerful online estimation tool, to make users smarter.`,
      tagsList: {
        title: 'Technologies',
        tags: [angular(), angularUniversal(), php(), typescript(), jest()],
      },
      links: [
        facebook({ url: 'https://www.facebook.com/zimmo.be/' }),
        linkedin({ url: 'https://www.linkedin.com/company/zimmo-be' }),
        website({ url: 'https://zimmo.be' }),
      ],
    },

    {
      role: 'Front-end developer',
      company: 'Euricom',
      image: import('@/assets/logos/euricom.png'),
      dates: [new Date('2022-07'), null],
      description: `
        Euricom is a leading software development company that specializes in building custom solutions for clients. With a team of 90+ experts, Euricom has a strong focus on .NET and JavaScript technologies, enabling them to deliver cutting-edge solutions to their clients. Their services range from consultancy to development and training, ensuring that clients receive the support they need throughout the software development process. As a member of the Euricom team, I have the opportunity to work with a talented group of individuals who are passionate about creating high-quality software solutions that meet the unique needs of each client.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          typescript(),
          angular(),
          react(),
          vue(),
          nextJs(),
          nx(),
          tailwindCss(),
          firebase(),
          reactQuery(),
          nextJs(),
          pnpm(),
          eslint(),
          jest(),
        ],
      },
      links: [
        twitter({ url: 'https://twitter.com/EuricomNV' }),
        linkedin({ url: 'https://www.linkedin.com/company/euricom' }),
        website({ url: 'https://euri.com' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
