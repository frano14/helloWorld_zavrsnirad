export interface PopularTag {
  title: string;
  talentsRating: number;
  jobsRating: number;
  talents: number | string;
  jobs: number | string;
}

export interface Blocks {
  title: string;
  p: string;
  color: string;
}

export const blocks: Blocks[] = [
  {
    title: "Accessible and User-Friendly",
    p: "Experience an accessible and user-friendly job hunting platform, enabling easy job search and application with just a few clicks.",
    color: "bg-[#da70d6]",
  },
  {
    title: "Network of Opportunities",
    p: "Connect with numerous job opportunities and professionals across various industries, providing a wide range of career development prospects.",
    color: "bg-[#008080]",
  },
  {
    title: "Quick Job Search",
    p: "Enable a quick job search tailored to your preferences, saving time and effort in finding the perfect career opportunity.",
    color: "bg-[#967bb6]",
  },
  {
    title: "Personalized Recommendations",
    p: "Receive personalized job recommendations based on your profile and experience, matching your skills and interests, and assisting in finding the right job fit.",
    color: "bg-[#007a92]",
  },
  {
    title: "Networking with Professionals",
    p: "Engage with professionals from your industry through our network, offering opportunities to exchange experiences and open doors to new business prospects.",
    color: "bg-[#b66fdf]",
  },
  {
    title: "Career Development Tips",
    p: "Access a wealth of useful tips and resources for career development, empowering you to maximize your potential and advance in your professional life.",
    color: "bg-[#91e6b3]",
  },
  {
    title: "Simple and Intuitive Interface",
    p: "Utilize a platform designed with a focus on user experience, providing a simple and intuitive interface for seamless navigation and usage throughout the job search process.",
    color: "bg-[#da70d6]",
  },
];

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
    title: "Database Administrator",
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
