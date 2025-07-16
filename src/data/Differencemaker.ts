import campaignIcon from '../assets/differenceIcons/campaign.png';
import financeIcon from '../assets/differenceIcons/finance_mode.png';
import moodIcon from '../assets/differenceIcons/mood.png';
import insightsIcon from '../assets/differenceIcons/search_insights.png';

export interface DifferenceList {
  id: number;
  title: string;
  imgUrl: string;
  subtitle: string;
  alt: string;
}

export const differenceMaker: DifferenceList[] = [
  {
    id: 1,
    title: "Strategic Messaging",
    imgUrl: campaignIcon,
    subtitle: "Analyze your value proposition, brand messaging, and communication effectiveness to ensure maximum impact.",
    alt: "Campaign Icon",
  },
  {
    id: 2,
    title: "Sales Effectiveness",
    imgUrl: financeIcon,
    subtitle: "Identify conversion bottlenecks and optimize your sales funnel for better business results.",
    alt: "Finance Icon",
  },
  {
    id: 3,
    title: "User Experience",
    imgUrl: moodIcon,
    subtitle: "Understand how visitors interact with your site and remove friction points that hurt engagement.",
    alt: "Mood Icon",
  },
  {
    id: 4,
    title: "Strategic Insights",
    imgUrl: insightsIcon,
    subtitle: "Get executive-level recommendations that align with your business goals and growth strategy.",
    alt: "Insights Icon",
  },
];

export default differenceMaker;
