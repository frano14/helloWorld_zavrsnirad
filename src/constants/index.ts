export interface PopularTag {
  title: string;
  talentsRating: number;
  jobsRating: number;
  talents: number | string;
  jobs: number | string;
}

export const popularTags: PopularTag[] = [
  {
    title: "Front-End Developer",
    talentsRating: 4.85,
    jobsRating: 4.9,
    talents: 1270,
    jobs: 1891,
  },
  {
    title: "Back-End Developer",
    talentsRating: 4.91,
    jobsRating: 4.72,
    talents: 873,
    jobs: 2444,
  },
  {
    title: "Full Stack Developer",
    talentsRating: 4.9,
    jobsRating: 4.85,
    talents: 832,
    jobs: 713,
  },
  {
    title: "Designer",
    talentsRating: 4.75,
    jobsRating: 4.94,
    talents: 1876,
    jobs: 2074,
  },
  {
    title: "CY Security",
    talentsRating: 4.97,
    jobsRating: 4.89,
    talents: 214,
    jobs: 597,
  },
  {
    title: "System Administrator",
    talentsRating: 4.84,
    jobsRating: 4.79,
    talents: 313,
    jobs: 488,
  },
  {
    title: "Database System",
    talentsRating: 4.87,
    jobsRating: 4.88,
    talents: 129,
    jobs: 420,
  },
  {
    title: "Other",
    talentsRating: 4.85,
    jobsRating: 4.87,
    talents: "10000+",
    jobs: "15000+",
  },
];
