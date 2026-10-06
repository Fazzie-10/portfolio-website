// Decision tree for the "Which test do I need?" tool. Mirrors how Joshua teaches it:
// the test is decided by what the question asks and the type of data you have.

export interface Choice {
  label: string;
  hint?: string;
  next: string; // id of the next step or result
}

export interface Step {
  id: string;
  question: string;
  choices: Choice[];
}

export interface Result {
  id: string;
  test: string;
  when: string;
  example: string;
  alternative?: string;
}

export const STEPS: Step[] = [
  {
    id: "start",
    question: "What is your research question asking?",
    choices: [
      { label: "Are two things linked?", hint: "e.g. Is education associated with knowledge?", next: "link" },
      { label: "Do groups differ?", hint: "e.g. Do male and female students differ in anxiety?", next: "groups" },
      { label: "Does one thing predict another?", hint: "e.g. Does study time predict CGPA?", next: "predict" },
      { label: "I just need to describe my data", hint: "e.g. Demographics in Table 4.1", next: "describe" },
    ],
  },
  {
    id: "link",
    question: "What type of data are the two variables?",
    choices: [
      { label: "Both categorical", hint: "Groups or labels, like gender, religion, yes/no", next: "r-chisquare" },
      { label: "Both numerical", hint: "Measurements you can average, like age, score, CGPA", next: "r-correlation" },
      { label: "One of each", hint: "That's really a question about groups differing", next: "groups" },
    ],
  },
  {
    id: "groups",
    question: "How many groups are you comparing?",
    choices: [
      { label: "Two groups", hint: "e.g. male vs female, public vs private", next: "two" },
      { label: "Three or more", hint: "e.g. 100L, 200L, 300L, 400L", next: "many" },
    ],
  },
  {
    id: "two",
    question: "Are the two sets of scores from different people, or the same people measured twice?",
    choices: [
      { label: "Different people", next: "r-ttest" },
      { label: "Same people, before and after", next: "r-paired" },
    ],
  },
  {
    id: "many",
    question: "Different people in each group, or the same people measured several times?",
    choices: [
      { label: "Different people", next: "r-anova" },
      { label: "Same people, several times", next: "r-rmanova" },
    ],
  },
  {
    id: "predict",
    question: "What type is the outcome you're predicting?",
    choices: [
      { label: "Numerical", hint: "e.g. CGPA, blood pressure, sales", next: "r-linear" },
      { label: "Yes / No", hint: "e.g. passed or failed, adopted or not", next: "r-logistic" },
    ],
  },
  {
    id: "describe",
    question: "What type of variable are you describing?",
    choices: [
      { label: "Categorical", next: "r-freq" },
      { label: "Numerical", next: "r-mean" },
    ],
  },
];

export const RESULTS: Result[] = [
  {
    id: "r-chisquare",
    test: "Chi-square test of independence",
    when: "Two categorical variables, and you want to know if they're linked.",
    example: "Is educational qualification associated with knowledge of food-borne infection among food handlers?",
    alternative: "If more than 20% of cells have an expected count below 5, use Fisher's exact test instead.",
  },
  {
    id: "r-correlation",
    test: "Pearson correlation",
    when: "Two numerical variables, and you want to know if they move together.",
    example: "Is hydration status related to cognitive function in athletes?",
    alternative: "If the data aren't normally distributed, or are ranks, use Spearman's rho.",
  },
  {
    id: "r-ttest",
    test: "Independent samples t-test",
    when: "A numerical outcome compared between two separate groups.",
    example: "Do female and male undergraduates differ in computer-based test anxiety?",
    alternative: "If the scores aren't normally distributed, use the Mann-Whitney U test.",
  },
  {
    id: "r-paired",
    test: "Paired samples t-test",
    when: "A numerical outcome measured twice on the same people.",
    example: "Did nurses' knowledge scores improve after the training programme?",
    alternative: "If the differences aren't normally distributed, use the Wilcoxon signed-rank test.",
  },
  {
    id: "r-anova",
    test: "One-way ANOVA",
    when: "A numerical outcome compared across three or more separate groups.",
    example: "Does academic stress differ across levels of study?",
    alternative: "If the scores aren't normally distributed, use the Kruskal-Wallis test.",
  },
  {
    id: "r-rmanova",
    test: "Repeated measures ANOVA",
    when: "A numerical outcome measured three or more times on the same people.",
    example: "Did patients' pain scores change at week 1, week 4 and week 8?",
    alternative: "If assumptions aren't met, use the Friedman test.",
  },
  {
    id: "r-linear",
    test: "Linear regression",
    when: "Predicting a numerical outcome from one or more variables.",
    example: "Does hydration status predict athletic performance?",
    alternative: "Use multiple regression when you have several predictors.",
  },
  {
    id: "r-logistic",
    test: "Binary logistic regression",
    when: "Predicting a yes/no outcome from one or more variables.",
    example: "Do age and income predict whether a farmer adopts improved seed?",
  },
  {
    id: "r-freq",
    test: "Frequencies and percentages",
    when: "Describing how many people fall in each category.",
    example: "Table 4.1: Socio-demographic characteristics of respondents.",
  },
  {
    id: "r-mean",
    test: "Mean and standard deviation",
    when: "Describing the average and spread of a measurement.",
    example: "Respondents had a mean age of 21.4 years (SD 2.3).",
    alternative: "If the data are skewed, report the median and interquartile range instead.",
  },
];
