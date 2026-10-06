---
title: "Which Statistical Test Should I Use? A Simple Guide for Your Project"
description: "Chi-square, t-test, ANOVA, correlation or regression? Learn how to pick the right statistical test for your research question, with examples and SPSS steps."
pubDate: 2026-10-06
tags: ["Statistics", "SPSS", "Chapter 4"]
cta:
  title: "Still not sure which test fits your hypotheses?"
  body: "Send me your objectives and questionnaire on WhatsApp. I'll tell you the right test for each hypothesis, and run it for you if you need."
  label: "Ask me on WhatsApp"
  message: "Hi Joshua, I read your guide on choosing a statistical test. Can you check which tests fit my hypotheses?"
---

Almost every student gets to Chapter 4 and asks the same question: **which statistical test should I use?**

It feels like there are hundreds of tests to choose from. But for most undergraduate and Masters projects, you only need five: **chi-square, the t-test, ANOVA, correlation and regression**. And choosing between them comes down to just two things:

1. **What your research question is asking**, and
2. **The type of data you have.**

Get those two right and the test almost picks itself. Let's walk through it.

> **Short on time?** Use the free [Which test do I need? tool](/#finder) on the InsightsHub homepage. Answer two or three questions and it tells you the test.

## Step 1: Know your type of data

Every variable in your study is one of two broad types.

**Categorical data** puts people into groups or labels. Gender, religion, level of study, marital status and "yes/no" answers are all categorical.

**Numerical data** is a measurement you can take an average of. Age, CGPA, income, test scores and a total score from a scale are numerical.

Here's the trap that catches many students: **coding a variable as numbers in SPSS doesn't make it numerical.** If you code male as 1 and female as 2, gender is still categorical. The numbers are just labels.

A quick test: *can you sensibly take the average of it?* The average age of your respondents makes sense. The average religion doesn't. So age is numerical and religion is categorical.

## Step 2: Know what your question is asking

Most research questions and hypotheses ask one of four things:

- **Are two things linked?** ("Is education associated with knowledge of food safety?")
- **Do groups differ?** ("Do male and female students differ in exam anxiety?")
- **Does one thing predict another?** ("Does study time predict CGPA?")
- **What does my data look like?** (describing your respondents and their answers)

Now combine Step 1 and Step 2.

## The five tests, in plain English

| Test | Use it when | Example research question |
|---|---|---|
| **Chi-square** | Both variables are categorical and you want to know if they're linked | Is educational qualification associated with knowledge of food-borne infection? |
| **Independent t-test** | You compare a numerical outcome between **two** groups | Do female and male undergraduates differ in computer-based test anxiety? |
| **One-way ANOVA** | You compare a numerical outcome across **three or more** groups | Does academic stress differ across 100, 200, 300 and 400 level? |
| **Pearson correlation** | Both variables are numerical and you want to know if they move together | Is hours spent on social media related to CGPA? |
| **Linear regression** | You want to know if one or more variables **predict** a numerical outcome | Do study hours and class attendance predict CGPA? |

### Chi-square test of independence

Use chi-square when **both** variables are categorical. It tells you whether the two are associated, for example whether knowledge level (good or poor) depends on educational qualification.

**In SPSS:** Analyze → Descriptive Statistics → Crosstabs. Put one variable in Rows and the other in Columns, click **Statistics** and tick **Chi-square**.

**Check this:** look at the footnote under the Chi-Square Tests table. If more than 20% of cells have an expected count below 5, the chi-square result isn't reliable. Use **Fisher's exact test** instead, and say so in your write-up. Supervisors notice this.

### Independent samples t-test

Use a t-test when your outcome is **numerical** and you're comparing **two separate groups**, like male and female, or public and private school students.

**In SPSS:** Analyze → Compare Means → Independent-Samples T Test. Your numerical outcome goes in Test Variable and your grouping variable in Grouping Variable (click **Define Groups** and enter the codes, e.g. 1 and 2).

If the **same people** were measured twice, say before and after a training, use the **paired samples t-test** instead.

### One-way ANOVA

ANOVA is the t-test's big brother. Use it when you compare a numerical outcome across **three or more groups**, like levels of study or age bands.

**In SPSS:** Analyze → Compare Means → One-Way ANOVA. If the result is significant, ANOVA only tells you that *some* groups differ, not which ones. Click **Post Hoc** and tick **Tukey** to see exactly where the differences are.

### Pearson correlation

Use correlation when **both** variables are numerical and you want to know whether they move together. The correlation coefficient, *r*, runs from −1 to +1:

- close to **+1**: as one goes up, the other goes up
- close to **−1**: as one goes up, the other goes down
- close to **0**: no linear relationship

**In SPSS:** Analyze → Correlate → Bivariate, and tick Pearson.

**Remember:** correlation is not causation. A link between social media hours and CGPA does not prove that social media *causes* lower grades.

### Linear regression

Use regression when you want to know whether one or more variables **predict** a numerical outcome, and by how much. With more than one predictor, it's called multiple regression.

**In SPSS:** Analyze → Regression → Linear. Your outcome goes in Dependent and your predictors in Independent(s).

Report the **R²** (how much of the outcome your predictors explain), the overall *F* test, and the coefficient and *p*-value for each predictor.

If your outcome is **yes/no** (passed or failed, adopted or not), use **binary logistic regression** instead.

## When your data isn't "normal"

The t-test, ANOVA and Pearson correlation assume your numerical data is roughly normally distributed. If it's heavily skewed, or your sample is very small, use the non-parametric version:

| Instead of… | Use… |
|---|---|
| Independent t-test | Mann-Whitney U test |
| Paired t-test | Wilcoxon signed-rank test |
| One-way ANOVA | Kruskal-Wallis test |
| Pearson correlation | Spearman's rho |

## A note on Likert scales

Single Likert items (Strongly Agree to Strongly Disagree) are **ordinal**: they have an order, but the gaps between answers aren't guaranteed to be equal. When you **add several items into a total or average score** for a construct like "study habits", that score is usually treated as numerical. That's why you'll often see t-tests and correlations run on scale scores.

Whatever you do, check whether any items are negatively worded. Those need to be **reverse-coded** before you add them up, or your scale's reliability (Cronbach's alpha) will collapse.

## How to report your result

Don't paste the SPSS table and leave it. Every result needs three parts: **the test, the numbers, and what it means.**

> An independent samples t-test showed no significant difference in CGPA between male and female students, *t*(241) = 1.24, *p* = .217.

> There was a significant association between level of study and use of AI writing tools, χ²(3, *N* = 180) = 10.28, *p* = .016.

Then explain what it means for **your** study in one or two plain sentences. That's the part your supervisor and your defence panel care about most.

## Quick recap

1. Decide whether each variable is **categorical** or **numerical**.
2. Decide whether your question asks about a **link**, a **difference** or a **prediction**.
3. Two categorical variables → **chi-square**. Numerical outcome, two groups → **t-test**. Three or more groups → **ANOVA**. Two numerical variables → **correlation**. Predicting an outcome → **regression**.
4. Check the assumptions, and switch to the non-parametric version if they fail.
5. Report the test, the numbers, and what they mean.
