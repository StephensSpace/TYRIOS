export interface HeroProps {
  title: string;
  subtitle: string;
  infoSpans?: string[]; // optional
  formVariant?: "text" | "dropdown"; // optional, Standardwert folgt in Hero
}