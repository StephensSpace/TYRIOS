import financeIcon from '../assets/differenceIcons/finance_mode.png';
import assignment from '../assets/discoverIcons/assignment.png';
import readiness from '../assets/discoverIcons/readiness_score.png';
import reduceCap from '../assets/discoverIcons/reduce_capacity.png';

export interface DiscoverList {
  id: number;
  titleEN: string;
  imgUrl: string;
  subtitleEN: string;
  alt: string;
}

export const discoverList: DiscoverList[] = [
  {
    id: 1,
    titleEN: "Story Effectiveness Score",
    imgUrl: readiness,
    subtitleEN: "Get a clear rating of how well your story connects.",
    alt: "Be Ready Icon",
  },
  {
    id: 2,
    titleEN: "Audience Alignment Check",
    imgUrl: reduceCap,
    subtitleEN: "See if you're speaking to the right customers",
    alt: "Reduce Capacity Icon",
  },
  {
    id: 3,
    titleEN: "Conversion Optimization",
    imgUrl: financeIcon,
    subtitleEN: "Specific tactics to boost your conversion rate",
    alt: "Finance Icon",
  },
  {
    id: 4,
    titleEN: "Ready-to-Use Copy Examples",
    imgUrl: assignment,
    subtitleEN: "Actual rewrites you can implement today",
    alt: "Assignment Icon",
  },
];

export default discoverList;