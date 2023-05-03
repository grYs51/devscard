import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import {
  angular,
  angularUniversal,
  cypress,
  dotnet,
  eslint,
  express,
  jest,
  postgreSql,
  sass,
  sqlServer,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Jaap.nl',
      image: import('@/assets/portfolio/jaap-icon.png'),
      dates: [new Date('2022-10'), null],
      details: [
        { label: 'Team size', value: '10 people' },
        { label: 'My role', value: ['Front-end Developer', 'Mobile developer'] },
        { label: 'Company', value: 'Zimmo' },
        { label: 'Category', value: ['Web app', 'Mobile app'] },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/jaap-screenshot-1.jpeg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/jaap-screenshot-2.jpeg'), alt: 'Second screenshot' },
      ],
      description:
        "The Jaap.nl website is one of the leading real estate platforms in the Netherlands, providing solutions for both property seekers and sellers. With innovative features, Jaap makes property listings more transparent and accessible for consumers in the complex Dutch housing market. In addition, Jaap offers handy solutions for real estate agents to generate leads and increase their revenue. Jaap is part of the Zimmo Group, with Mediahuis as the sole shareholder. I have the privilege of being part of the development team for Jaap.nl, working on a project that is making a real difference in the lives of consumers and real estate professionals. It's an exciting opportunity to contribute to a platform that is innovative, reliable, and user-friendly, and I'm proud to be a part of the team making it happen.",
      tagsList: {
        title: 'Technologies',
        tags: [angular(), angularUniversal(), sass(), eslint(), jest(), cypress()],
      },
      links: [website({ url: 'https://www.jaap.nl' })],
    },
    {
      name: 'SnapLAN Ticketshop',
      image: import('@/assets/portfolio/snaplan-logo.png'),
      dates: [new Date('2023-03'), new Date('2023-05')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Full-stack Developer'] },
        { label: 'Company', value: 'SnapLAN' },
        { label: 'Category', value: ['Web app'] },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/snaplan-screenshot-1.png'), alt: 'Homepage SnapLan' },
        { src: import('@/assets/portfolio/snaplan-screenshot-2.png'), alt: 'Admin panel' },
      ],
      description:
        "SnapLAN is a ticketshop for LAN parties. It's a web application that allows users to buy tickets for LAN parties and manage their account. It also allows admins to manage the events and the users. The application is built with Angular and TailwindCSS for the front-end and express server as backend. The database is a PostgreSQL database. People can login with their Discord account. The application is hosted on Locally with a proxy on cloudflare.",
      tagsList: {
        title: 'Technologies',
        tags: [angular(), tailwindCss(), typescript(), express(), postgreSql()],
      },
      links: [],
    },
    {
      name: 'EURICOM - FULL-STACK .NET BOOTCAMP CASE 2022',
      image: import('@/assets/portfolio/euricom.png'),
      dates: [new Date('2022-08'), new Date('2022-09')],
      details: [
        { label: 'Team size', value: '5 people' },
        { label: 'My role', value: ['Front-end Developer', 'Back-end developer'] },
        { label: 'Company', value: 'Euricom' },
        { label: 'Category', value: ['Web app'] },
      ],
      description:
        'During the last 2 weeks of the bootcamp we practiced all what we learned by building, in team, a web application to manage and display T-profiles. A full stack application with Database (SQL Server), API (ASP.NET Core), Authentication (Azure AD) and a nice UI (Angular and TailwindCSS). And of course everything was covered by an agile scrum process with weekly sprints.',
      tagsList: {
        title: 'Technologies',
        tags: [angular(), dotnet(), jest(), sqlServer(), tailwindCss(), typescript()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
