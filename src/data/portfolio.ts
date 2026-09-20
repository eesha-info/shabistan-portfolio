/**
 * ============================================================================
 *  PORTFOLIO CONTENT — single source of truth
 * ============================================================================
 *  Everything shown on the site lives in this one file. To update the
 *  portfolio, edit the values below — no other file needs to change.
 *
 *  To ADD an item: copy an existing object inside the array (e.g. one
 *  skill, one job, one project) and change its values.
 *  To DELETE an item: remove its object from the array.
 * ============================================================================
 */

export const personal = {
  name: "Shabistan Shahin",
  title: "Software Engineer",
  tagline: "Java Backend Developer | Spring Boot & MuleSoft",
  // Short line shown under the availability badge in the hero section.
  availability: "Available for opportunities",
  summary:
    "Java Developer with 5+ years of experience building and enhancing enterprise APIs and microservices for telecom clients. Skilled in Spring Boot, RESTful API development, MuleSoft integrations, and CI/CD deployment pipelines. Experienced in vulnerability scanning and secure coding practices, with a strong record of delivering scalable backend solutions in Agile teams.",
  location: "Bengaluru, Karnataka",
  email: "shabistanshahin@gmail.com",
  phone: "+91-8340364675",
  // Leave a link empty ("") to automatically hide that button/icon on the site.
  linkedin: "",
  github: "",
  resumeUrl: "/resume.pdf",
};

// Numbers shown in the hero stats row.
export const stats = [
  { label: "Years Exp.", value: "5+" },
  { label: "Projects", value: "2+" },
  { label: "Technologies", value: "20+" },
];

// Cards in the "About Me" section — the high-level pillars of her work.
export const aboutHighlights = [
  {
    icon: "☕",
    title: "Java & Spring Boot",
    description:
      "Designing, developing, and unit-testing RESTful APIs and microservices using Java and Spring Boot in Agile sprint cycles.",
  },
  {
    icon: "🔗",
    title: "MuleSoft Integration",
    description:
      "Building integration workflows with MuleSoft Anypoint Studio and RAML to connect enterprise systems and partner platforms.",
  },
  {
    icon: "☁️",
    title: "CI/CD & DevOps",
    description:
      "Deploying releases through Jenkins and Azure DevOps pipelines, reducing manual effort across environments.",
  },
  {
    icon: "🔒",
    title: "Security & Vulnerability Scanning",
    description:
      "Conducting SCA, SAST, and DAST scans as part of the secure development lifecycle to remediate risks before release.",
  },
  {
    icon: "🗄️",
    title: "Databases",
    description:
      "Working with Oracle and MySQL for data persistence, along with XML/JSON data formats for API payloads.",
  },
  {
    icon: "🛠️",
    title: "Tools & Monitoring",
    description:
      "Using Splunk for log monitoring, Postman for API testing, and Git for version control across feature teams.",
  },
];

// Skills grouped by category — rendered as chips in the "Tech Stack" section.
export const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript"],
  },
  {
    category: "Backend / Frameworks",
    skills: ["Spring", "Spring Boot", "RESTful Web Services", "Microservices"],
  },
  {
    category: "Integration",
    skills: ["MuleSoft", "Anypoint Platform", "Anypoint Studio", "RAML", "DataWeave"],
  },
  {
    category: "Databases",
    skills: ["Oracle", "MySQL"],
  },
  {
    category: "Cloud / DevOps",
    skills: ["Azure DevOps", "Jenkins", "CI/CD Pipelines"],
  },
  {
    category: "Data Formats",
    skills: ["XML", "JSON"],
  },
  {
    category: "Security",
    skills: ["SCA", "SAST", "DAST", "Vulnerability Scanning"],
  },
  {
    category: "Build Tools",
    skills: ["Maven", "JFrog"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS"],
  },
  {
    category: "Tools",
    skills: [
      "Putty",
      "Postman",
      "Altova XMLSpy",
      "Lens",
      "Eclipse",
      "Spring Tool Suite",
      "Git",
    ],
  },
  {
    category: "AI Tools",
    skills: ["GitHub Copilot", "ChatGPT", "Claude Code"],
  },
];

// Work experience — each job can contain one or more nested projects.
export const experience = [
  {
    company: "Tech Mahindra Limited",
    role: "Java Developer",
    period: "July 2021 — Present",
    projects: [
      {
        name: "AT&T CSI",
        client: "AT&T",
        description:
          "Enhancement and maintenance of enterprise-grade APIs within AT&T's Customer Service Interface (CSI) layer, supporting core telecom business workflows with a focus on reliability, security, and faster release cycles.",
        highlights: [
          "Analyzed business requirements and translated them into scalable API enhancements within the CSI layer",
          "Designed, developed, and unit-tested RESTful APIs and microservices using Java and Spring Boot",
          "Built and deployed release versions using CI/CD pipelines integrated with Jenkins",
          "Implemented RESTful APIs and integrated third-party services to extend platform functionality",
          "Used Splunk for application log monitoring and troubleshooting of production issues",
          "Conducted vulnerability scanning (SCA, SAST, DAST) as part of the secure development lifecycle",
          "Performed code reviews and collaborated with QA teams to ensure defect-free releases",
          "Managed source code versioning and branching strategies using Git across feature teams",
        ],
        techStack: ["Java", "Maven", "Splunk", "Spring Boot", "Microservices", "MySQL", "Putty", "Git"],
      },
      {
        name: "AT&T — Mobile Virtual Network Operator (MVNO) Integration",
        client: "AT&T",
        description:
          "Design and implementation of integration workflows connecting multiple internal systems within AT&T's MVNO ecosystem, enabling seamless data exchange between partner platforms and core telecom systems.",
        highlights: [
          "Designed and implemented integration solutions using MuleSoft Anypoint Studio",
          "Developed API specifications using RAML for contract-first API design across integration flows",
          "Built and configured Mule flows to orchestrate data exchange between upstream and downstream systems",
          "Utilized Azure DevOps to build, deploy, and manage APIs across dev, QA, and production",
          "Used MuleSoft's DataWeave for complex data transformations between JSON and XML formats",
          "Performed API testing and validation using Postman for functional and performance requirements",
          "Collaborated with business analysts, QA, and infrastructure teams to troubleshoot integration issues",
        ],
        techStack: ["MuleSoft", "Anypoint Platform", "RAML", "Azure DevOps", "Postman", "Git"],
      },
    ],
  },
];

// Featured projects — shown as standalone cards in the "Projects" section.
export const projects = [
  {
    name: "AT&T CSI",
    description:
      "Enterprise-grade API enhancement and maintenance within AT&T's Customer Service Interface layer, supporting core telecom workflows with a focus on reliability, security, and faster release cycles.",
    highlights: [
      "Scalable RESTful APIs and microservices built with Java and Spring Boot",
      "CI/CD pipelines integrated with Jenkins for faster releases",
      "Secure development lifecycle with SCA, SAST, and DAST scanning",
    ],
    techStack: ["Java", "Spring Boot", "Microservices", "MySQL", "Jenkins", "Splunk"],
    link: "",
  },
  {
    name: "AT&T MVNO Integration",
    description:
      "Integration workflows connecting multiple internal systems within AT&T's MVNO ecosystem, enabling seamless data exchange between partner platforms and core telecom systems.",
    highlights: [
      "MuleSoft Anypoint Studio flows orchestrating upstream/downstream data exchange",
      "Contract-first API design using RAML specifications",
      "Complex JSON ↔ XML transformations with DataWeave",
    ],
    techStack: ["MuleSoft", "RAML", "Azure DevOps", "Postman", "DataWeave"],
    link: "",
  },
];

// Education history, most recent first.
export const education = [
  {
    degree: "Master of Computer Application",
    institution: "RKdF University, Bhopal",
    period: "2022 — 2024",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "Maulana Mazrul Haque Arabic & Persian University",
    period: "2016 — 2019",
  },
];
