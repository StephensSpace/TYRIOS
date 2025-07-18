import adsClick from '../assets/sevenElementsIcons/ads_click.png';
import emergencyHome from '../assets/sevenElementsIcons/emergency_home.png';
import groups from '../assets/sevenElementsIcons/groups.png';
import mountainFlag from '../assets/sevenElementsIcons/mountain_flag.png';
import signpost from '../assets/sevenElementsIcons/signpost.png';
import trendingDown from '../assets/sevenElementsIcons/trending_down.png';
import tvOptions from '../assets/sevenElementsIcons/tv_options_edit_channels.png';


export interface SevenElementsList {
  id: number;
  title: string;
  imgUrl: string;
  subtitle: string;
  alt: string;
}

export const sevenElements: SevenElementsList[] = [
  {
    id: 1,
    title: "Your Ideal Customer",
    imgUrl: groups,
    subtitle: "Clearly define who your message is for and what they want.",
    alt: "Groups Icon",
  },
  {
    id: 2,
    title: "Their Core Problem",
    imgUrl: emergencyHome,
    subtitle: "Identify the specific challenges your customers face daily",
    alt: "Emergency Icon",
  },
  {
    id: 3,
    title: "You as the Guide",
    imgUrl: tvOptions,
    subtitle: "Position your brand as the trusted expert who can help",
    alt: "Options checked Icon",
  },
  {
    id: 4,
    title: "Clear Action Plan",
    imgUrl: signpost,
    subtitle: "Provide simple steps customers can follow to success",
    alt: "Signpost Icon",
  },
  {
    id: 5,
    title: "Strong Call to Action",
    imgUrl: adsClick,
    subtitle: "Tell customers exactly what to do next",
    alt: "Ads clicked Icon",
  },
  {
    id: 6,
    title: "Stakes & Consequences",
    imgUrl: trendingDown,
    subtitle: "Show what happens if they don't take action",
    alt: "trending Down Icon",
  },
  {
    id: 7,
    title: "Success Vision",
    imgUrl: mountainFlag,
    subtitle: "Paint a picture of their ideal future state",
    alt: "Flag on Mountain Icon",
  },
];

export default sevenElements;
