import type { User } from "@/features/portfolio/types/user";


export const USER = {
  firstName: "Saksham",
  lastName: "Chhawan",
  displayName: "Saksham",
  username: "sakshamchhawan",
  gender: "male",
  pronouns: "he/him",
  bio: "Building reliable backend systems and cloud-native products. Engineering with intent.",

flipSentences: [
  "Backend & Platform Engineer",
  "SRE • Cloud • Microservices",
  "Open Source & Systems Builder",
],
  address: "Hyderabad, India",
  phoneNumber: "OTQ1NjU2NTUwOA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "c2Frc2hhbWNoaGF3YW5AZ21haWwuY29t", // base64 encoded
  website: "https://sakshamchhawan.com",
  jobTitle: "Design Engineer",
  jobs: [
    {
      title: "Ex- SRE Engineer",
      company: "CAMS",
      website: "https://www.linkedin.com/company/camsrta/",
    },
  ],
  //   about: `
  // Hello, World! I am Chánh Đại — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

  // With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

  // One of my key projects, [ZaDark](https://zadark.com), launched in 2022, enhances the Zalo experience on PC and Web, surpassing 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reaching 20k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) (as of Sep 2025).

  // I'm also the creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 4k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker) and was selected for [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort.

  // Let's connect and collaborate!
  //   `,
  about: `
- Software Engineer & SRE with a strong focus on building scalable, cloud-native architectures and high-performance microservices.
- Skilled in Next.js, Node.js, Spring Boot, and GCP; experienced in streamlining migrations from on-prem systems to the cloud through automation and containerization.
- Passionate about Product Leadership and system reliability, bridging the gap between technical execution and user-centric product delivery.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
`,

  avatar: "https://i.ibb.co/k273mW0k/Whats-App-Image-2026-01-07-at-4-57-38-PM.jpg",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?v=4",
  namePronunciationUrl: "/audio/saksham.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    // "ncdai",
    // "nguyenchanhdai",
    // "nguyen chanh dai",
    // "chanhdai",
    // "chanh dai",
    // "iamncdai",
    // "quaric",
    // "zadark",
    // "nguyễn chánh đại",
    // "chánh đại",
  ],
  dateCreated: "2026-01-01", // YYYY-MM-DD
} satisfies User;
