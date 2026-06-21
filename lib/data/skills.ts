export type SkillCategory = {
  category: string;
  skills: string[];
};

export const technicalSkills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Kotlin", "Java", "Objective-C", "JavaScript", "TypeScript", "Dart", "SQL", "PHP"],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      "Android (Kotlin/Java)",
      "iOS (Objective-C)",
      "Flutter",
      "React / Next.js 15/16",
      "Tailwind CSS v4",
      "HTML",
      "CSS",
      "WordPress",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "REST APIs",
      "Node.js",
      "Firebase (Auth, Firestore)",
      "Supabase (Postgres, Edge Functions)",
      "SQL Server",
      "MySQL",
    ],
  },
  {
    category: "Mobile Distribution",
    skills: ["Google Play Console", "App Store Connect"],
  },
  {
    category: "Tools & Quality",
    skills: ["Git", "CI/CD (GitHub Actions)", "Biome", "Vitest", "Playwright", "Agile"],
  },
];
