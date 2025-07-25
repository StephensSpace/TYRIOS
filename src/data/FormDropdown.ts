export interface FormItems {
    id: string
    textEN: string
    disabled?: boolean
}

export const formDropItems: FormItems[] = [
  {
    id: '',
    textEN: `What's your primary goal for this analysis?`,
    disabled: true,
  },
  {
    id: 'form1',
    textEN: `Increase Conversions and Sales`,
  },
  {
    id: 'form2',
    textEN: `Optimized Brand Messaging`,
  },
  {
    id: 'form3',
    textEN: `Enhance Visual Design`,
  },
  {
    id: 'form4',
    textEN: `Overall Strategic Review`,
  },
  {
    id: 'form5',
    textEN: `Competitive Analysis`,
  },
  {
    id: 'form6',
    textEN: `Mobile Experience Optimization`,
  },
]

export default formDropItems;