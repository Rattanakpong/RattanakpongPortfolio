export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Experience {
  id: string;
  date: string;
  role: string;
  company: string;
  companyLink?: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Credential {
  id: string;
  title: string;
  institution: string;
  date: string;
  link?: string;
}

export enum PageRoute {
  HOME = '/',
  WORK = '/work',
  PROFILE = '/profile',
  CONTACT = '/contact',
}