import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Electronics-ICT',
      institution: 'Artesis Plantijn Hogeschool Antwerpen, Belgium',
      image: import('@/assets/logos/ap.jpg'),
      dates: [new Date('2018.09'), new Date('2022.06')],
      description: "Bachelor's degree. Specialization in cloud computing.",
      links: [website({ url: 'https://www.ap.be/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
