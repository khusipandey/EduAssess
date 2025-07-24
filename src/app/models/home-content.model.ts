export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    buttons: { label: string; link: string }[];
  };
  intro: {
    title: string;
    description: string;
  };
  practiceBenefits: {
    title: string;
    benefits: { icon: string; text: string }[];
  };
  testimonials: {
    title: string;
    slides: { name: string; year: string; feedback: string }[];
  };
  stats: {
    students: string;
    questions: string;
    tests: string;
    reviews: string;
  };
  footer: {
    company: string[];
    legal: string[];
    copyright: string;
  };
}
