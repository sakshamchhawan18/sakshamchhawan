import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "cams",
    companyName: "CAMS Limited",
    positions: [
      {
        id: "cams-sre",
        title: "Site Reliability Engineer (SRE)",
        employmentPeriod: {
          start: "07.2025",
          end: "11.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed and containerized Spring Boot microservices using Docker and Podman as part of migration to cloud-native architecture.
- Contributed to Project Odin (CAMS AI) by building internal tools and proof-of-concepts that accelerated migration from on-prem infrastructure to Google Cloud Platform.
- Built Spring Boot–based internal utility services and automation scripts to streamline integration workflows.
- Improved service readiness and reduced manual deployment steps across microservices.`,
        skills: [
          "Spring Boot",
          "Docker",
          "Podman",
          "Microservices",
          "GCP",
          "Cloud Migration",
          "Automation",
          "DevOps",
        ],
      },
    ],
  },

  {
    id: "marshee",
    companyName: "Marshee",
    positions: [
      {
        id: "marshee-product-lead-intern",
        title: "Product Lead Intern",
        employmentPeriod: {
          start: "10.2024",
          end: "05.2025",
        },
        employmentType: "Internship",
        icon: "idea",
        description: `- Promoted from Web Developer Intern to Product Lead Intern after contributing to core web development using Next.js and Node.js.
- Led the web development team by managing agile sprints and coordinating cross-functional collaboration.
- Balanced technical execution and product leadership to ensure timely feature delivery and improved user experience.`,
        skills: [
          "Next.js",
          "Node.js",
          "Product Management",
          "Agile",
          "Sprint Planning",
          "Team Leadership",
          "Cross-functional Collaboration",
        ],
      },
    ],
  },

  {
    id: "kenmark",
    companyName: "Kenmark IT Solutions",
    positions: [
      {
        id: "kenmark-nodejs-intern",
        title: "Junior Node.js Intern",
        employmentPeriod: {
          start: "06.2023",
          end: "08.2023",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Designed and implemented RESTful APIs using Node.js and Express.js.
- Reduced server response time by 20% and improved data retrieval efficiency by 35%.
- Collaborated with frontend teams to integrate backend services with Flutter and Angular applications.
- Optimized API performance by 25% through improved data structuring and caching mechanisms.`,
        skills: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "Caching",
          "Performance Optimization",
          "Flutter",
          "Angular",
        ],
      },
    ],
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "kiit",
        title: "Kalinga Institute of Industrial Technology",
        employmentPeriod: {
          start: "2021",
          end: "2025",
        },
        employmentType: "Full-time",
        icon: "education",
        description: `- Bachelor of Technology in Information Technology.
- Graduated with a CGPA of 8.21.
- Built a strong foundation in software engineering, data structures, databases, and system design.`,
        skills: [
          "Data Structures",
          "Algorithms",
          "Databases",
          "Software Engineering",
          "System Design",
          "Problem Solving",
        ],
      },
    ],
  },
];
