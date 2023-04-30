import type { Config } from '@/types/data';
import { nlBE } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: nlBE,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Grace Bulckens - Angular Frontend Developer',
    description:
      'Grace Bulckens is a frontend developer with a passion for Angular. She is currently working at Euricom, a consultancy company in Belgium.',
    faviconPath: '/src/assets/astolfo.jpeg',
  },
  pdf: {
    footer: 'Curious about my work experience? Check out my LinkedIn profile or download my resume.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
