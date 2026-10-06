---
title: "Free Alternatives to SPSS for Your Project: JASP and jamovi"
description: "No SPSS licence? JASP and jamovi are free, open SPSS files, and give APA tables. See which to use for Chapter 4, and where every test lives in each."
pubDate: 2026-10-12
tags: ["SPSS", "Software", "Chapter 4"]
draft: true
cta:
  title: "Not sure which software your analysis needs?"
  body: "Tell me your hypotheses and what software you have. I'll tell you the simplest way to run every test, or run them for you."
  label: "Ask me on WhatsApp"
  message: "Hi Joshua, I read your post on free SPSS alternatives. I don't have SPSS and need help with my analysis."
---

Every Chapter 4 season, I get the same message: *"I don't have SPSS. Can you send me a cracked copy?"*

Please, don't go looking for one. A cracked SPSS can carry malware, and it has a habit of crashing halfway through your project, often the week before submission. You'd be gambling your data and your deadline on a pirated download.

The good news is that you don't need it. In the real world, there are **two free programs that run every test you need for Chapter 4**, open SPSS files, and produce tables that look just like SPSS output: **JASP** and **jamovi**.

## First: does your school already have SPSS?

Check before you do anything else. Many universities pay for an SPSS licence and give students access in a computer lab or through a campus download. If yours does, use it. Most supervisors know SPSS best, and that matters when they're reading your tables.

If your school doesn't, or you can't get to the lab, keep reading.

## SPSS vs Excel vs JASP / jamovi

| | SPSS | Excel | JASP / jamovi |
|---|---|---|---|
| Cost | Paid licence | Usually already installed | **Free and open-source** |
| Supervisor familiarity | Highest | Medium | Growing; the output looks like SPSS |
| Opens SPSS files (.sav) | Yes | No | **Yes** |
| Good for | All of Chapter 4 | Cleaning, coding, frequency tables, charts, basic tests | All of Chapter 4 |
| Watch out for | Cracked copies can carry malware and crash mid-project | No Cronbach's alpha button; ANOVA post-hoc tests are manual | Menus are named differently from SPSS |

## My recommendation

Here's what I tell every student:

1. **Clean and code your data in Excel.** It's the tool you already know, and it's perfect for fixing typos, coding Likert answers and building frequency tables.
2. **Run your analysis in SPSS** if your school provides it.
3. **Otherwise, use JASP.** It's the closest to SPSS in look and feel, so your tables will feel familiar to your supervisor.

jamovi is just as good. If a friend or lecturer already uses it, go with jamovi. Both are free, so you can install both and see which one you're more comfortable with.

## What are JASP and jamovi?

**JASP** is free statistics software developed at the University of Amsterdam. **jamovi** is a free program built on top of R, the statistics language researchers use, but you never have to write any code.

Both work the same way: open your data, click a test from the menu, tick the variables you want, and the results appear instantly beside your data. Change a setting and the tables update immediately. No "OK" button, no output window to dig through.

Both:

- open **.csv** files (from Excel or Google Forms) and **.sav** files (SPSS data)
- produce **APA-style tables** you can copy straight into Word
- run on Windows and Mac

## Where every Chapter 4 test lives

This is the table I wish someone had given me. Every test you're likely to need, and where to find it.

| Test | JASP menu | jamovi menu |
|---|---|---|
| Frequencies and descriptives | Descriptives | Exploration → Descriptives |
| Cronbach's alpha (reliability) | Reliability → Classical | Factor → Reliability Analysis |
| Chi-square | Frequencies → Contingency Tables | Frequencies → Independent Samples (χ² test of association) |
| Correlation | Regression → Correlation | Regression → Correlation Matrix |
| Linear regression | Regression → Linear Regression | Regression → Linear Regression |
| t-tests | T-Tests → Independent / Paired Samples | T-Tests |
| ANOVA with Tukey post-hoc | ANOVA → ANOVA → Post Hoc Tests | ANOVA → One-Way ANOVA |

Not sure which of these tests you need? Read [Which statistical test should I use?](/blog/which-statistical-test-should-i-use/) first.

## What about Excel on its own?

Excel can take you surprisingly far. Turn on the free **Analysis ToolPak** and you get t-tests, ANOVA, correlation and regression:

1. Go to **File → Options → Add-ins**.
2. At the bottom, next to **Manage**, choose **Excel Add-ins** and click **Go**.
3. Tick **Analysis ToolPak** and click **OK**.
4. You'll now find it under **Data → Data Analysis**.

But Excel has gaps that matter for Chapter 4. There's no button for **Cronbach's alpha**, so checking your questionnaire's reliability is manual work. And if your ANOVA is significant, there's no built-in **post-hoc test** to show which groups differ. That's why I use Excel for cleaning and JASP or SPSS for the actual analysis.

## Will my supervisor accept JASP or jamovi?

In most cases, yes. A chi-square test is a chi-square test, whatever software runs it. The numbers will match SPSS exactly.

Two things help:

- **Say what you used.** In Chapter 3 (method of data analysis), write something like: *"Data were analysed using JASP (Version X)."* Use the version number shown in the program's About section.
- **Present your tables properly.** Don't paste screenshots from any software, SPSS included. Rebuild the key numbers in a clean APA table in Word. My [Chapter 4 guide](/blog/how-to-write-chapter-4-of-your-project/) shows how.

If your supervisor or department insists on SPSS, follow their rule. Their rule is the one that counts at your defence.

## One last tip: never write "p = .000"

All three programs can show a *p*-value as **.000** when it's very small. It's never actually zero. Write **p < .001** instead. Supervisors spot "p = .000" immediately.

## The bottom line

You don't need cracked software to finish Chapter 4. Check if your school has SPSS. If not, download JASP or jamovi for free, clean your data in Excel, and run your tests with confidence.

Your job is to understand your results, not to fight with a pirated download the night before submission.
