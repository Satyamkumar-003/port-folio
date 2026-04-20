// Single source of truth for portfolio content.
// Keep all text here so it's easy to update without touching components.

export const profile = {
  name: 'Satyam Kumar',
  role: 'Fullstack Engineering Intern',
  tagline: 'Java · Vert.x · React · MySQL · Kafka · End-to-end ownership',
  location: 'Bengaluru, India',
  email: 'satyamkumar0238@gmail.com',
  phone: '+91 79868 87107',
  phoneHref: '+917986887107',
  website: 'https://satyamkumar.dev',
  links: {
    github: 'https://github.com/satyam0238',
    linkedin: 'https://www.linkedin.com/in/satyam-kumar/',
  },
  resumeUrl: '/SatyamKumar_Backend_Resume.pdf',

  summary:
    'Fullstack engineering intern at BigBasket working across Java + Vert.x backends and React / UnifyApps admin frontends. I own features end-to-end — schema design, REST APIs, Kafka consumers, admin UI, and production rollout through Jenkins on Kubernetes.',

  highlights: [
    {
      label: 'Production code',
      value: 'Live',
      sub: 'Catalog-Admin 2.0 used by the catalog ops team',
    },
    {
      label: 'Internal tool',
      value: '1 → 0',
      sub: 'Replaced spreadsheet workflow with a real admin',
    },
    {
      label: 'CGPA',
      value: '8.7',
      sub: 'B.Tech CSE · CGC Landran',
    },
  ],
};

export const skills = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'C++', 'SQL'],
  },
  {
    title: 'Backend',
    items: ['Vert.x', 'Node.js', 'Express.js', 'REST API Design', 'Microservices'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MariaDB', 'MongoDB', 'Schema Design', 'Query Optimization'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'UnifyApps', 'HTML5', 'CSS3'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'JIRA', 'Confluence', 'Linux'],
  },
  {
    title: 'DSA',
    items: ['Data Structures & Algorithms'],
  },
  {
    title: 'Familiar with',
    items: ['Apache Kafka', 'AWS S3', 'Docker', 'Kubernetes', 'Jenkins', 'PAM'],
  },
  {
    title: 'CS Foundations',
    items: ['OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'System Design'],
  },
];

export const experience = [
  {
    id: 'bigbasket',
    role: 'Fullstack Engineering Intern',
    company: 'BigBasket',
    org: 'Tata Group',
    location: 'Bengaluru',
    period: 'Jan 2026 — Present',
    type: 'Full-time Internship',
    bullets: [
      'Monolith → microservices migration: shipped multiple catalog admin modules end-to-end (Vert.x REST APIs on MySQL + React / UnifyApps admin UIs) with permission gating, audit history, pagination & filtering, and unit + integration tests.',
      'Upload & event pipelines: authored Kafka consumers for high-volume upload flows in the replenishment and catalog services, including new MySQL-backed tables and update-aware consumer logic.',
      'Internal service-to-service APIs in the SKU service with proper header propagation (x-caller / x-tracker / x-entry-context) to decouple internal callers from admin auth.',
      'Auth & permissions integration: built the vendor-login OTP admin flow end-to-end (UI → catalog-admin 2.0 → auth service) and authored the production SQL rollout for the corresponding access controls.',
    ],
    stack: ['Java', 'Vert.x', 'MySQL', 'Kafka', 'S3', 'Docker', 'Kubernetes', 'Jenkins', 'React', 'UnifyApps'],
  },
  {
    id: 'bluestock',
    role: 'Frontend Developer Intern',
    company: 'Bluestock Fintech',
    location: 'Remote',
    period: 'Jan 2025 — Mar 2025',
    type: 'Internship',
    bullets: [
      'Built the Blog Detail Page in React.js with lazy loading and component-level optimisations that cut measured page-load time.',
      'Converted Figma mockups into responsive React components in close partnership with the design team.',
    ],
    stack: ['React.js', 'JavaScript', 'CSS'],
    certificateId: 'bluestock',
  },
  {
    id: 'solitaire',
    role: 'Full-Stack Trainee',
    company: 'Solitaire Infosys',
    location: 'Chandigarh',
    period: 'May 2024 — Aug 2024',
    type: 'Training',
    bullets: [
      'Built web application prototypes with Node.js, Express.js and JavaScript covering REST routing and responsive UI as first hands-on full-stack exposure.',
    ],
    stack: ['Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS'],
    certificateId: 'solitaire',
  },
];

export const projects = [
  {
    title: 'Catalog-Admin',
    status: 'Production · BigBasket',
    period: 'Feb 2026 — Mar 2026',
    description:
      'An internal admin tool I designed and shipped solo at BigBasket to replace a spreadsheet-based catalog workflow. Built the MySQL schema, the Vert.x REST API layer, and the React dashboard — now used daily by the catalog operations team.',
    bullets: [
      'Designed normalized MySQL schema with foreign-key constraints and indexes tuned for read-heavy access patterns.',
      'Built a Vert.x REST API layer handling all CRUD operations with strict input validation and structured error handling.',
      'Shipped a React.js admin dashboard so the catalog team can manage product data without engineering support.',
    ],
    stack: ['Java', 'Vert.x', 'MySQL', 'React.js'],
    featured: true,
  },
  {
    title: 'Service Provider App',
    status: 'Live',
    period: 'Aug 2024 — Oct 2024',
    description:
      'A MERN-stack application for booking local service professionals. Implemented JWT-based authentication, service listing APIs, and MongoDB collections for users and bookings.',
    bullets: [
      'JWT authentication with secure session handling for users.',
      'REST APIs for service discovery, booking, and provider listings.',
      'MongoDB schemas modeling users, services, and booking history.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/satyam0238/serviceprovider',
    liveUrl: 'https://satyam2237003.netlify.app/',
  },
  {
    title: 'Food Ordering App',
    status: 'Live',
    period: 'Dec 2024 — Feb 2025',
    description:
      'A full-stack food ordering app covering menu browsing, cart, and checkout. JWT-secured sessions, RESTful API routes, and MongoDB schemas for menus, users, and order history.',
    bullets: [
      'JWT-secured user sessions with login and signup flows.',
      'RESTful API for menus, cart operations, and order placement.',
      'MongoDB schemas for menus, users, and order history with Mongoose.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/satyam0238/mern-food-delivery',
    liveUrl: 'https://aahara-food-dilevery-app.netlify.app/',
  },
];

export const keyAchievements = [
  {
    id: 'bb-prod',
    title: 'Production code at BigBasket',
    body:
      'Catalog-Admin 2.0 migrations live and used daily by the catalog operations team during my internship.',
  },
  {
    id: 'leetcode',
    title: 'LeetCode problem-solving badges',
    body:
      'Earned for consistent DSA practice — comfortable with arrays, strings, trees, graphs, DP and SQL problems.',
  },
  {
    id: 'sih',
    title: 'Smart India Hackathon 2024',
    body:
      'Participant at CGC Landran in India\'s flagship national-level innovation hackathon.',
  },
];

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'CGC Landran, Punjab',
    period: '2022 — Present',
    score: 'CGPA 8.7 / 10',
    current: true,
  },
  {
    degree: 'Class 12 — CBSE',
    institution: 'DAV Public School, Samana',
    period: '2021 — 2022',
    score: '89.6%',
  },
  {
    degree: 'Class 10 — CBSE',
    institution: 'DAV Public School, Samana',
    period: '2019 — 2020',
    score: '85.4%',
  },
];

export const certifications = [
  {
    id: 'react',
    title: 'React.js',
    issuer: 'Coursera',
    year: 'Mar 2025',
    description: 'Components, Hooks, State Management, and the React ecosystem.',
    link: 'https://www.coursera.org/account/accomplishments/verify/HKEDT1X0ENNU',
    isExternal: true,
  },
  {
    id: 'dbms',
    title: 'Database Management Systems',
    issuer: 'NPTEL',
    year: 'Sep 2024',
    description: 'RDBMS, SQL, ER modelling, normalization, and transactions.',
    image: '/dbms-cert.jpg',
    link: '/certificate/dbms',
    isExternal: false,
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
