import { Experience, Project, Skill, Credential } from './types';

export const SOCIAL_LINKS = {
  EMAIL: "prattanakpong@gmail.com",
  GITHUB: "https://github.com/Rattanakpong",
  LINKEDIN: "https://www.linkedin.com/in/pha-rattanakpong/",
  BEHANCE: "https://www.behance.net/pharattanakpong06"
};

export const SKILLS: Skill[] = [
  {
    category: "DEVELOPMENT",
    items: ["React","Node.js", "SQL", "Tailwind CSS", "Next.js", "REST APIs", "Python"]
  },
  {
    category: "DESIGN",
    items: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "UI/UX", "Canva", "Capcut"]
  },
];

export const CREDENTIALS: Credential[] = [
  {
    id: "deg-1",
    title: "Bachelor of Science in Computer Science",
    institution: "Paragon International University",
    date: "2028",
    link: "https://paragoniu.edu.kh/"
  },
  {
    id: "cert-1",
    title: "Google Cybersecurity",
    institution: "Google",
    date: "2025",
    link: "https://coursera.org/verify/professional-cert/EXKHRHH1WST6"
  },
  {
    id: "cert-2",
    title: "Master Laravel & PHP",
    institution: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/"
  },
  {
    id: "cert-3",
    title: "The Ultimate React Course",
    institution: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    date: "2025 - PRESENT",
    role: "Technical Support and Data Management",
    company: "ឃ្យូអ៎ . Q - R",
    companyLink: "https://www.facebook.com/profile.php?id=61559521294212",
    description: "Completed multiple projects in Data Management, with strong understanding of data systems Took on UI tasks as a Designer while working in the data role Tested and validated 15+ software features, reducing post-release bugs by 20% and improving user experience. Delivered Technical Support for 100+ users, resolving issues with a 95% first-response resolution rate."
  },
  {
    id: "exp-2",
    date: "2025 - PRESENT",
    role: "Local Board Director",
    company: "JCI Phnom Penh",
    companyLink: "https://www.facebook.com/JCIPhnomPenh",
    description: "In Marketing Team, I have design a lot of artwork such as: Poster, Video, Newsletter. I gain many lesson on time fixable with time management. I gain a lot of experience with task management based on allocation items and item storing.  "
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p-01",
    title: "CJTT Trading Website",
    type: "WEB APP",
    description: "Scalable website for CJTT Trading Co., Ltd connects talented Cambodians with rewarding employment opportunities in Japan. Start your journey to a brighter future today.",
    tags: ["React", "CSS", "TypeScript", "JavaScript"],
    imageUrl: "Pro1.png",
    link: "https://cjtt.vercel.app/"
  },
  {
    id: "p-02",
    title: "Web-Based Refugee and Migrant Support",
    type: "WEB DEVELOPMENT",
    description: "Welcome to CRMS! The Web-Based Refugee and Migrant Support Platform is designed to provide support to refugees and migrants through an accessible, user-friendly online interface. This platform aims to bridge the gap between refugees/migrants and the resources they need to successfully integrate into their new communities. Founded in 2023, our mission is to offer centralized access to essential services such as housing, healthcare, legal aid, education, and employment opportunities, and to foster community integration through social networking, mentorship programs, and volunteer opportunities.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "Pro2.png",
    link: "https://rattanakpong.github.io/CRMS-Done-/"
  },
  {
    id: "p-03",
    title: "2025 JCI Phnom Penh Newsletters Issues 2",
    type: "GRAPHIC DESIGN (AI)",
    description: "in the Team responsible for designing Newsletters Issues 2 for JCI Phnom Penh.",
    tags: ["Illustrator", "Photoshop", "Canva"],
    imageUrl: "Pro3.jpg",
    link: "https://www.behance.net/gallery/242539603/2025-JCI-Phnom-Penh-Newsletters-Issues-2"
  },
    {
    id: "p-04",
    title: "2025 JCI Phnom Penh Newsletters Issues 3",
    type: "GRAPHIC DESIGN (AI)",
    description: "in the Team responsible for designing Newsletters Issues 3 for JCI Phnom Penh.",
    tags: ["Illustrator", "Photoshop", "Canva"],
    imageUrl: "Pro4.png",
    link: "https://www.behance.net/gallery/242539209/2025-JCI-Phnom-Penh-Newsletter-Issues-3"
  },
  {
    id: "p-05",
    title: "2026 General Membership Meeting",
    type: "GRAPHIC DESIGN (AI)",
    description: "Designing General Membership Meeting for JCI Phnom Penh.",
    tags: ["Photoshop", "Illustrator", "Canva","Capcut"],
    imageUrl: "Pro5.png",
    link: "https://www.behance.net/gallery/242538463/2026-General-Membership-Meeting"
  },
  {
    id: "p-06",
    title: "2026 Young Leaders Program",
    type: "GRAPHIC DESIGN (AI)",
    description: "Designing 2026 Young Leaders Program for JCI Phnom Penh.",
    tags: ["Photoshop", "Illustrator", "Canva","Capcut"],
    imageUrl: "Pro6.jpg",
    link: "https://www.behance.net/gallery/242536275/2026-Young-Leaders-Program"
  }
];