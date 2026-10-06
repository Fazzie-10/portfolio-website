// InsightsHub prices in naira. Change numbers here; the price table and the estimator both read from this file.

export type Level = "bsc" | "msc";

export interface Package {
  id: string;
  name: string;
  detail: string;
  bsc: number | null; // null = not offered at this level
  msc: number;
  quoteOnly?: boolean; // shows "From ₦…" and asks for a quote
}

export const QUANT: Package[] = [
  { id: "descriptive", name: "Descriptive statistics only", detail: "Frequencies, percentages, mean and SD, clean tables and charts", bsc: 30000, msc: 45000 },
  { id: "hypothesis", name: "Analysis + hypothesis testing", detail: "t-test, chi-square, correlation, ANOVA or regression, with APA tables", bsc: 50000, msc: 80000 },
  { id: "full", name: "Full Chapter 4", detail: "Everything above, plain-English interpretation, discussion guidance and a defence-prep call", bsc: 75000, msc: 120000 },
  { id: "advanced", name: "Advanced models", detail: "Factor analysis, SEM, mediation/moderation, panel data", bsc: null, msc: 150000, quoteOnly: true },
];

export const QUAL: Package[] = [
  { id: "qual-small", name: "Thematic analysis, up to 10 interviews/FGDs", detail: "Coding, themes, quotes table and write-up guidance", bsc: 50000, msc: 70000 },
  { id: "qual-large", name: "Thematic analysis, 11–25 interviews/FGDs", detail: "As above, at a larger scale", bsc: 80000, msc: 110000 },
];

export const MIXED_DISCOUNT = 0.15;
export const EXPRESS_MARKUP = 0.3;
export const TRANSCRIPTION_PER_HOUR = 5000;

export const CLASS = {
  name: "Research Methods & SPSS",
  price: 30000,
  weeks: 4,
};

export const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;
