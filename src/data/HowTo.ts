export interface HowToList {
  id: number;
  title: string;
  subtitle: string;
}

export const howToList: HowToList[] = [
  {
    id: 1,
    title: "Submit Your Information",
    subtitle: "Provide your email, website URL, and analysis focus so we can tailor the insights to your specific goals.",

  },
  {
    id: 2,
    title: "AI Analysis",
    subtitle: "Our advanced AI examines messaging, design, sales effectiveness, and overall strategy based on your specific intent.",
  },
  {
    id: 3,
    title: "Get Strategic Report",
    subtitle: "Understand how visitors interact with your site and remove friction points that hurt engagement.",
  }
];

export default howToList;
