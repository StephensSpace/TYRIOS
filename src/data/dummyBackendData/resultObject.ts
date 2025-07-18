export interface CircleData {
  size: number;
  value: number;
  showValue?: boolean;
}

export interface CircleSection {
  [sectionName: string]: CircleData[];
}

export const circleConfigs: CircleSection = {
  design: [
    { size: 120, value: 75, showValue: true },
    { size: 80, value: 40 },
  ],
  style: [
    { size: 100, value: 50, showValue: false },
    { size: 150, value: 90, showValue: true },
  ],
  usability: [
    { size: 110, value: 30 },
    { size: 95, value: 80, showValue: true },
  ],
};