import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  angular,
  apolloGraphql,
  astro,
  cypress,
  express,
  nestJs,
  nextJs,
  postgreSql,
  prisma,
  react,
  sass,
  solid,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        angular({
          level: 5,
          description:
            'Since high school I have been creating projects in Angular. I have experience in creating applications from scratch, as well as in maintaining and developing existing ones.',
        }),
        typescript({
          level: 4,
          description: 'I focus on writing clean and readable code. Type safety is very important to me.',
        }),
        express({
          level: 3,
          description:
            'I like how easy it is to create a REST API in Express. I have experience in creating APIs for Angular applications.',
        }),
        nestJs({
          level: 3,
          description:
            'I made a few projects in NestJS. I like the approach of this framework and I want to learn it better.',
        }),
        react({
          level: 3,
          description:
            "I have made a few project in React. I'm more familiar with Angular, but I want to learn React better.",
        }),
        sass({
          level: 4,
        }),
        tailwindCss({ level: 3 }),
        postgreSql({ level: 3 }),
        cypress({ level: 3 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [astro(), apolloGraphql(), nextJs(), solid(), prisma()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:be', name: 'Dutch - native' },
        { icon: 'circle-flags:uk', name: 'English - second language' },
        { icon: 'circle-flags:fr', name: 'french - moderate' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
