---
title: "CSV vs XLSX: Why Your Excel Work Keeps Disappearing"
description: "Lost your formulas after saving? Learn the real difference between CSV and XLSX, the hidden traps in CSV files, and the one habit that protects your work."
pubDate: 2026-10-12
tags: ["Excel", "Data hygiene", "Beginners"]
draft: true
cta:
  title: "Build good habits from day one"
  body: "The Zero to Data Analyst mentorship starts with data hygiene, then takes you through formulas, Power Query and dashboards with real Nigerian business data."
  label: "Reserve a seat on WhatsApp"
  message: "Hi Joshua, I read your CSV vs XLSX post. I'd like to join the Zero to Data Analyst mentorship."
---

You open a sales file. You spend an hour cleaning it: new columns, formulas, a second sheet for your summary. You press **Ctrl+S**, close Excel, and go to bed.

The next morning, your formulas are gone. Your summary sheet is gone. Only plain numbers are left.

You didn't do anything wrong in Excel. You just saved your work in a **CSV** file. This is the number one mistake I see in my classes, and it has happened to some students more than once.

## What is a CSV file?

**CSV** stands for *comma-separated values*. It's plain text: each row is a line, and each value is separated by a comma.

Think about it. If you right-click a CSV file and open it with **Notepad**, this is what you actually see:

```
Order ID,Customer Name,State,Product,Quantity
ORD00001,Funke Balogun,Oyo,Virtual Card,4
ORD00002,Yetunde Adebayo,Abuja,Dollar Card,12
```

That's it. No colours, no formulas, no sheets. Excel just displays it nicely in a grid, which is why it *looks* like a normal workbook.

## What is an XLSX file?

**XLSX** is a full Excel workbook. It saves everything you build:

- formulas
- formatting and colours
- multiple sheets
- PivotTables and charts
- Power Query steps

## The difference in one table

| CSV (.csv) | Excel Workbook (.xlsx) |
|---|---|
| Plain text: values separated by commas | A full workbook |
| Saves **one sheet, values only** | Saves formulas, formatting, many sheets, pivots and charts |
| Used to **move** data between systems | Used to **work on** data |
| Opens in almost any program | Opens in Excel, Google Sheets and similar tools |

In the real world, CSV is a **delivery format**. Your bank statement export, a Google Forms download, a report from your company's system: they arrive as CSV because every program can read them. But CSV is not where you do your work.

## Why your work disappears

When you save a file that is still a CSV, Excel can only keep what a CSV can hold: the values on the sheet you're looking at. Everything else is thrown away:

- your formulas become their results
- every extra sheet is dropped
- your formatting, charts and pivots are gone

Newer versions of Excel show a yellow **"Possible data loss"** warning bar when you open a CSV. Most people close it without reading it. Please, read it.

## The fix: one habit

The moment you open a CSV that you plan to work on:

**File → Save As → choose "Excel Workbook (*.xlsx)" → Save.**

Do it before you type a single formula. From then on, you're working in a real workbook, and Ctrl+S is safe.

## Three more CSV traps to know

Losing your work is the obvious problem. These three are sneakier.

### 1. Leading zeros disappear

Let's say your customer list has phone numbers like **08031234567**. Open the CSV in Excel and you'll see **8031234567**. Excel decided it's a number, and numbers don't start with zero. The same happens to account numbers and IDs that start with 0.

Save that back as CSV and the zero is gone for good.

### 2. Long numbers turn into scientific notation

Very long numbers, like card numbers, can show up as something like **5.39923E+15**. Worse, Excel only keeps 15 significant digits, so the last digits of a 16-digit card number are silently replaced with zeros.

### 3. Dates get confused

Is **03/04/2026** the 3rd of April or the 4th of March? Depending on your computer's settings, Excel may read your dates the wrong way round, or not recognise them as dates at all.

**The fix for all three:** instead of double-clicking the CSV, import it with **Data → From Text/CSV**. Click **Transform Data** and set each column's type yourself: phone numbers and IDs as **Text**, dates as **Date**. That's Power Query, and it's the professional way to bring CSV data into Excel. [Here's my full step-by-step guide](/blog/clean-data-in-excel-with-power-query/).

## Two more habits from my classes

**Never edit the raw file.** Keep the original CSV untouched forever. Work in a copy with a clear name, like `Fintech_Sales_WORK_v1.xlsx`. If you make a mess, you can always go back to the raw data.

**Turn on AutoRecover.** Go to **File → Options → Save** and set AutoRecover to every **2 minutes**. With power cuts and flat laptop batteries, this one setting has saved my students hours of work.

## Recap

1. **CSV** is plain text for **moving** data. **XLSX** is a workbook for **working on** data.
2. Saving as CSV keeps only the values on one sheet. Formulas, sheets and formatting are lost.
3. The moment you open a CSV you'll work on: **File → Save As → Excel Workbook (.xlsx).**
4. Watch for lost leading zeros, long numbers and confused dates. Import with **Data → From Text/CSV** to control them.
5. Never edit the raw file, and set AutoRecover to 2 minutes.
