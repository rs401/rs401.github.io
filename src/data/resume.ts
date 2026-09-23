// Work history, education and projects for the public site.
//
// PUBLIC DATA ONLY — this repo is public, so everything in this file is published
// whether or not a page renders it. Describe responsibilities, never the
// employer's infrastructure: no backup schedules, incidents, past gaps (e.g.
// "had no DR plan"), internal tool names, security practices, or service lists.
// The detailed resume keeps those and lives outside this repo; this file is a
// hand-trimmed subset of it, so when the resume changes, update this to match.
// Also no home city or phone numbers.

export const person = {
  name: 'Rich Stadnick',
  tagline: 'Father, Husband, Christian, Nerd.',
  role: 'Senior Software Engineer and Architect',
  company: 'Lake Homes Realty',
  links: {
    github: 'https://github.com/rs401',
    linkedin: 'https://www.linkedin.com/in/richard-stadnick-3b4ab53b/',
    email: 'rich.stadnick@gmail.com',
  },
};

export interface Role {
  title: string;
  start: number;
  end?: number; // absent = present
  points: string[];
}

export interface Job {
  company: string;
  summary?: string;
  roles: Role[];
}

export const work: Job[] = [
  {
    company: 'Lake Homes Realty',
    summary:
      'A real estate company running "lifestyle" niche websites for brokers and agents across the country.',
    roles: [
      {
        title: 'Senior Software Engineer (Back End) / Architect',
        start: 2025,
        points: [
          'Co-leading the redesign and rewrite of the listing-data (ETL) pipeline, from architecture and technology choices to data governance.',
          'Own backup and disaster recovery for the back end systems, including the runbooks.',
          'Maintain the cloud infrastructure behind the sites and the data pipeline.',
          'Maintain the back end code and mentor other developers working in it.',
        ],
      },
      {
        title: 'Software Engineer II (Back End)',
        start: 2024,
        end: 2025,
        points: [
          'Built an internal code generator that does most of the work of launching a new niche site.',
          'Launched a third niche site on the shared codebase.',
          'Built features for the sites and the internal admin tools.',
          'Managed cloud capacity and costs.',
        ],
      },
      {
        title: 'Software Engineer I (Back End)',
        start: 2022,
        end: 2024,
        points: [
          'Migrated the company\'s hosting to AWS.',
          'Launched a second niche site on the shared codebase.',
          'Ran the nightly listing-data import.',
          'Handled production deployments and server upkeep.',
        ],
      },
    ],
  },
  {
    company: 'Fishyvisions LLC',
    roles: [
      {
        title: 'Software Engineer Intern',
        start: 2022,
        end: 2022,
        points: ['Wrote tests for a startup codebase that had very few.'],
      },
    ],
  },
];

export const skills = {
  languages: ['Go', 'Python', 'SQL', 'C++', 'C#', 'Java', 'JavaScript / TypeScript'],
};

export interface Credential {
  name: string;
  detail?: string;
  year: string;
  url?: string;
}

// Parchment URLs verify the Champlain awards.
export const education: Credential[] = [
  { name: 'AWS Certified Cloud Practitioner', year: '2023' },
  {
    name: 'B.S. Software Development',
    detail: 'Champlain College, summa cum laude',
    year: '2021',
    url: 'https://www.parchment.com/u/award/19c70b3600c0adea5c814d97e6cb025d',
  },
  {
    name: 'Certificate, Software Development',
    detail: 'Champlain College',
    year: '2021',
    url: 'https://www.parchment.com/u/award/160054c540146f6fae863ce3725957df',
  },
  {
    name: 'Certificate, C++ Programming',
    detail: 'Champlain College',
    year: '2021',
    url: 'https://www.parchment.com/u/award/58fbb2b24d387d5fba2fd12fad751167',
  },
  {
    name: 'Certificate, Visual C# Programming',
    detail: 'Champlain College',
    year: '2021',
    url: 'https://www.parchment.com/u/award/bf48477de294dd78dc0169a452fdb425',
  },
  { name: 'MCSA — Microsoft Certified Systems Administrator', year: '2002' },
  {
    name: 'A.S. Computer Servicing',
    detail: 'New England Institute of Technology',
    year: '2002',
  },
];

export interface Project {
  name: string;
  year: string;
  description: string;
  stack: string;
  source: string;
  demo?: string;
}

// Side and school projects, 2019–2022. Years are repo creation dates; links
// checked 2026-09-22.
// Dropped demos: bissues.hupden.com no longer connects, and letsgo.events is now
// someone else's site — do not link it again.
export const projects: Project[] = [
  {
    name: 'Lets Go',
    year: '2021',
    description:
      'An app for organizing in-person gatherings. MVC design with Google OAuth alongside its own auth system and middleware; app, database and cache each in their own container.',
    stack: 'Go, Gin, GORM, PostgreSQL, Redis, Docker Compose',
    source: 'https://github.com/rs401/letsgo',
  },
  {
    name: 'Lets Go Rip',
    year: '2022',
    description: 'Lets Go split into gRPC microservices, deployed on Kubernetes.',
    stack: 'Go, gRPC, Kubernetes, GKE',
    source: 'https://github.com/rs401/letsgorip',
  },
  {
    name: 'Lets Go (Firebase)',
    year: '2022',
    description: 'The same idea again, serverless.',
    stack: 'React, Firestore, Cloud Functions',
    source: 'https://github.com/rs401/letsgofire',
    demo: 'https://letsgo-325500.firebaseapp.com/',
  },
  {
    name: 'Send This',
    year: '2022',
    description:
      'Send a file from a desktop to a phone by scanning a QR code. Uploaded files are deleted automatically after a day.',
    stack: 'Go on Google Cloud Functions, Cloud Storage, Angular',
    source: 'https://github.com/rs401/send-this-42ae',
    demo: 'https://send-this-42ae.web.app/',
  },
  {
    name: 'Bissues',
    year: '2021',
    description: 'A bug and issue tracker, built as a Champlain College course project.',
    stack: 'C#, .NET 5, Entity Framework, PostgreSQL, Docker Compose',
    source: 'https://github.com/rs401/BissuesProject',
  },
  {
    name: 'Typing Practice Game',
    year: '2019',
    description: 'Written during my C++ courses to help my son practice typing.',
    stack: 'C++',
    source: 'https://github.com/rs401/Typing_Practice_Game',
  },
];
