export interface ProgressCircleConfig {
  size: number;
  value: number;
  showValue?: boolean;
}

export interface ProgressCircleVariants {
  section: ProgressCircleConfig;
  overview: ProgressCircleConfig;
}


export interface SectionData {
  name: string;
  progressCircle: ProgressCircleVariants;
  analysis: string;            
  currentImpression: string;   
  recommendations: string[];   
  suggestedImprovements?: string[];
  salesSection?: boolean;
}

export interface ScoreData {
  progressCircle: ProgressCircleConfig;
  date: string;         
  customerUrl: string;  
}

export interface ResultConfig {
  score: ScoreData;
  sections: {
    [sectionName: string]: SectionData;
  };
}

export const resultConfigs: ResultConfig = {
  score: {
    progressCircle: { size: 150, value: 85, showValue: true },
    date: "2025-07-18",
    customerUrl: "https://example.com/customer"
  },
  sections: {
    storyMessage: {
      name: "Story & Message",
      progressCircle: {
        section: { size: 60, value: 5, showValue: false },
        overview: { size: 100, value: 5, showValue: true }
      },
      analysis: `The core message of helping businesses grow 
        through strategic branding and marketing is communicated 
        effectively. However, the story could be more compelling 
        by focusing on specific client success stories and 
        highlighting unique value propositions.`,
      currentImpression: `The messaging is clear but lacks a 
        strong emotional hook and doesn't fully showcase potential 
        transformation.`,
      recommendations: [
        `Weave client testimonials and case studies throughout the 
        page.`,
        `Highlight areas where the brand excels, such as industry 
        expertise or unique methods.`
      ],
      suggestedImprovements: [
        `Instead of 'Struggling to grow?', try 'Unlock Explosive 
        Growth with Strategic Branding and Marketing.'`,
        `Replace 'Let's Turn Your Challenges into Success' with 
        'Transform Your Business with Award-Winning Brand Strategies.'`
      ]
    },
    UxDesign: {
      name: "UX & Design",
      progressCircle: {
        section: { size: 60, value: 8, showValue: false },
        overview: { size: 100, value: 8, showValue: true }
      },
      analysis: `Clean and modern design, easy navigation, but some 
        sections could use better hierarchy and more interactive 
        elements.`,
      currentImpression: `Professional and trustworthy, but could be 
        more dynamic.`,
      recommendations: [
        `Add interactive elements like animations or hover effects.`,
        `Use varied font sizes and weights to improve hierarchy.`
      ]
    },
    graphicsImagery: {
      name: "Graphics & Imagery",
      progressCircle: {
        section: { size: 60, value: 7, showValue: false },
        overview: { size: 100, value: 7, showValue: true }
      },
      analysis: `Good quality visuals, but some stock photos are generic.`,
      currentImpression: `Pleasant, but not memorable.`,
      recommendations: [
        `Use custom photos or illustrations that reflect the brand's personality.`,
        `Consider adding video content.`
      ]
    },
    salesEffectivenes: {
      name: "Sales Effectiveness & Persuasion",
      progressCircle: {
        section: { size: 60, value: 6, showValue: false },
        overview: { size: 100, value: 6, showValue: true }
      },
      analysis: `Clear overview of services, but weak calls to action and lack 
        of prominent client testimonials.`,
      currentImpression: `Lacks urgency and doesn't compel action.`,
      recommendations: [
        `Make CTAs more specific and benefit-driven.`,
        `Feature testimonials and case studies more prominently.`
      ],
      suggestedImprovements: [
        `Use 'Get Your Free Consultation Today!' at the top and bottom of the page`,
        `'Book a Free Strategy Session and Discover How We Can Help You Grow.'`
      ],
      salesSection: true
    },
    textualAnalysis: {
      name: "Textual Analysis & Readability",
      progressCircle: {
        section: { size: 60, value: 3, showValue: false },
        overview: { size: 100, value: 3, showValue: true }
      },
      analysis: `Text is clear and concise, but some sections could be more 
        benefit-focused and use stronger language.`,
      currentImpression: `Easy to read, but could be more persuasive.`,
      recommendations: [
        `Use stronger verbs and more active voice`,
        `Highlight key benefits`
      ]
    },
    strategicAnalysis: {
      name: "Strategic Analysis",
      progressCircle: {
        section: { size: 60, value: 9, showValue: false },
        overview: { size: 100, value: 9, showValue: true }
      },
      analysis: `Clear intent to generate leads, but could be more sharply focused
        on the ideal target audience.`,
      currentImpression: `Decent introduction, but not fully optimized for conversion.`,
      recommendations: [
        `Weave client testimonials and case studies throughout the page.`,
        `Highlight areas where the brand excels, such as industry expertise or unique methods.`
      ],
      suggestedImprovements: [
        `Tailor messaging to the target audience's needs`,
        `Place lead capture forms strategically`,
        `Track website traffic and conversion rates`
      ]
    }
  }
};

export default resultConfigs;
