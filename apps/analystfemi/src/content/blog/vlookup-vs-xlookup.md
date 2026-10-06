---
title: "VLOOKUP vs XLOOKUP: Which Should You Use in Excel?"
description: "VLOOKUP or XLOOKUP? See the syntax, the 6 key differences and real examples with a Nigerian fintech dataset, so you know exactly which lookup to use in Excel."
pubDate: 2026-10-06
tags: ["Excel", "Lookups", "Formulas"]
cover: "/media/vlookup-vs-xlookup.webp"
coverAlt: "Excel sheet showing a VLOOKUP formula on a product lookup table"
cta:
  title: "Learn lookups, Power Query and dashboards live"
  body: "The Zero to Data Analyst mentorship takes you from your first formula to a finished dashboard, with real Nigerian business data. ₦50,000 a month."
  label: "Reserve a seat on WhatsApp"
  message: "Hi Joshua, I read your VLOOKUP vs XLOOKUP post. I'd like to join the Zero to Data Analyst mentorship."
---

Lookups are where Excel stops being a calculator and starts being a data tool. They let you pull information from one table into another, like bringing a product's price into a list of orders.

For years, **VLOOKUP** was the formula everyone learned first. Today most versions of Excel also have **XLOOKUP**, which fixes almost everything people hate about VLOOKUP. So which should you use?

Watch me walk through both, step by step:

<video src="/media/vlookup-vs-xlookup.mp4" poster="/media/vlookup-vs-xlookup.webp" controls preload="none" playsinline></video>

## The setup: a fact table and a lookup table

In my classes we use a fintech sales dataset. There are two tables:

- A **sales table** (the *fact table*): every order, with the product sold but **no price**.
- A **product lookup table** (the *dimension table*): one row per product, with its category and standard price.

| Product | Product Category | Standard Price (NGN) |
|---|---|---|
| POS Terminal | Hardware | 85,000 |
| Card Reader | Hardware | 25,000 |
| Smart Savings Plan | Savings | 15,000 |
| Dollar Card | Cards | 12,000 |
| SME Loan | Loans | 150,000 |

The job: bring the **Standard Price** into the sales table, so we can calculate revenue.

## VLOOKUP: the classic

```
=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
```

- **lookup_value**: what you're searching for (the product in this row)
- **table_array**: the lookup table to search
- **col_index_num**: which column of that table to return, counted from the left
- **range_lookup**: `FALSE` for an exact match, `TRUE` for an approximate match

To get the price of the product in cell F2, with the lookup table in columns A to C of a sheet called Products:

```
=VLOOKUP(F2, Products!$A$2:$C$13, 3, FALSE)
```

The `3` means "return the third column" (the price). The `$` signs lock the range so it doesn't move when you copy the formula down.

## XLOOKUP: the modern replacement

```
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])
```

The same lookup with XLOOKUP:

```
=XLOOKUP(F2, Products!$A$2:$A$13, Products!$C$2:$C$13, "Not found")
```

Instead of counting columns, you point directly at **the column to search** and **the column to return**.

## The 6 differences that matter

### 1. Exact match is the default in XLOOKUP

VLOOKUP's last argument is optional, and if you leave it out, Excel assumes `TRUE`: an **approximate match**. On an unsorted product list, that silently returns **wrong prices** without any error. It's the most common VLOOKUP mistake I see in class.

XLOOKUP does an **exact match by default**. Safer for beginners, and safer for everyone.

### 2. XLOOKUP can look left

VLOOKUP can only search the **first column** of your range and return something to its right. If the column you need is to the left of the one you're searching, VLOOKUP can't do it.

XLOOKUP doesn't care. The return column can be anywhere.

### 3. Inserting a column doesn't break XLOOKUP

With VLOOKUP, `3` means "third column". Insert a new column into the lookup table and the third column is now something else, and your formula quietly returns the wrong data.

XLOOKUP points at the actual column, so inserting columns doesn't break it.

### 4. A built-in "not found" message

When VLOOKUP can't find a value, you get `#N/A`, and you have to wrap it in IFERROR to show something nicer:

```
=IFERROR(VLOOKUP(F2, Products!$A$2:$C$13, 3, FALSE), "Not found")
```

XLOOKUP has an **if_not_found** argument built in: `"Not found"` in the example above.

### 5. Return several columns at once

Point XLOOKUP's return array at more than one column, for example both Category **and** Price, and the results spill across the cells to the right. VLOOKUP needs one formula per column.

### 6. Search from the bottom up

XLOOKUP's **search_mode** lets you search from the last row to the first (use `-1`). That's useful for finding the **most recent** record, like a customer's latest order.

## So which one should you use?

| | VLOOKUP | XLOOKUP |
|---|---|---|
| Default match | Approximate (risky) | Exact |
| Look left | No | Yes |
| Survives inserted columns | No | Yes |
| Built-in "not found" | No (needs IFERROR) | Yes |
| Return several columns | No | Yes |
| Works in | Every version of Excel | Microsoft 365, Excel 2021 and later, Excel for the web, Google Sheets |

**Use XLOOKUP** if your Excel has it. It's easier to read, harder to break, and does more.

**Learn VLOOKUP anyway.** You'll meet it in older workbooks, at companies still on Excel 2016 or 2019, and in job interviews. And if you need a lookup that works in every version *and* can look left, learn **INDEX-MATCH**, the classic alternative we also cover in class.

## Practise it

Open any table with a product or ID column and try this:

1. Bring the price into your sales table with **VLOOKUP**, using `FALSE`.
2. Do the same with **XLOOKUP**.
3. Insert a new column into the lookup table and watch which formula breaks.

That third step teaches you more than any explanation. It's exactly how we learn in the [Zero to Data Analyst mentorship](/#curriculum): real data, real mistakes, and fixing them together.
