# Chapter 13: Statistics

> **Board:** CBSE  
> **Class:** 10  
> **Subject:** Mathematics  
> **Chapter:** Statistics

---

# Introduction

**Statistics** is the branch of mathematics that deals with the **collection, organization, presentation, analysis, and interpretation of data**. In this chapter, we learn how to determine the **mean**, **median**, and **mode** of grouped data, construct cumulative frequency tables, draw **ogives**, and understand the empirical relationship among the three measures of central tendency.

---

# 1. Data

**Data** is a collection of facts or numerical information gathered for a specific purpose.

### Types of Data

- **Ungrouped Data** – Individual observations are listed separately.
- **Grouped Data** – Observations are arranged into class intervals.

### Example

**Ungrouped Data**

```
12, 15, 18, 20, 22
```

**Grouped Data**

| Class Interval | Frequency |
| -------------- | --------: |
| 10–20          |         6 |
| 20–30          |         9 |
| 30–40          |         5 |

---

# 2. Frequency Distribution

A **frequency distribution table** shows how many observations fall into each class interval.

### Example

| Marks | Frequency |
| ----- | --------: |
| 0–10  |         2 |
| 10–20 |         5 |
| 20–30 |         8 |
| 30–40 |         6 |

---

# 3. Class Interval

A **class interval** is the range of values included in one class.

### Example

```
20–30
```

Here,

- Lower limit = 20
- Upper limit = 30

---

# 4. Class Mark

The **class mark** is the midpoint of a class interval.

### Formula

```
Class Mark

=

(Lower Limit + Upper Limit)/2
```

### Example

Find the class mark of

```
20–30
```

**Solution**

```
= (20 + 30)/2
```

```
= 25
```

---

# 5. Mean of Grouped Data

The **mean** is the average value of the observations.

There are three methods to calculate the mean:

- Direct Method
- Assumed Mean Method
- Step Deviation Method

---

## (A) Direct Method

### Formula

```
Mean

=

Σ(fx) / Σf
```

where

- **f** = Frequency
- **x** = Class mark

---

### Example

|   x |   f |  fx |
| --: | --: | --: |
|  10 |   2 |  20 |
|  20 |   3 |  60 |
|  30 |   5 | 150 |

```
Σf = 10
```

```
Σfx = 230
```

Mean

```
= 230/10
```

```
= 23
```

---

## (B) Assumed Mean Method

Choose an assumed mean

```
A
```

Let

```
d = x − A
```

### Formula

```
Mean

=

A + (Σfd / Σf)
```

---

## (C) Step Deviation Method

Let

```
u = (x − A)/h
```

where

```
h
```

is the common class size.

### Formula

```
Mean

=

A + (Σfu / Σf) × h
```

---

# 6. Median

The **median** is the middle value of a distribution.

For grouped data,

### Formula

```
Median

=

l + [(N/2 − cf)/f] × h
```

where

- **l** = Lower boundary of the median class
- **N** = Total frequency
- **cf** = Cumulative frequency before the median class
- **f** = Frequency of the median class
- **h** = Class width

---

# 7. Cumulative Frequency

The **cumulative frequency** is obtained by adding frequencies successively.

### Example

| Frequency | Cumulative Frequency |
| --------: | -------------------: |
|         4 |                    4 |
|         6 |                   10 |
|         8 |                   18 |
|         5 |                   23 |

---

# 8. Mode

The **mode** is the value that occurs most frequently.

For grouped data,

### Formula

```
Mode

=

l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h
```

where

- **l** = Lower boundary of the modal class
- **f₁** = Frequency of the modal class
- **f₀** = Frequency of the class preceding the modal class
- **f₂** = Frequency of the class succeeding the modal class
- **h** = Class width

---

# 9. Empirical Relationship

When the distribution is moderately symmetrical,

### Formula

```
Mode

=

3 × Median − 2 × Mean
```

or

```
Mean − Mode

=

3(Mean − Median)
```

---

# 10. Ogive (Cumulative Frequency Curve)

An **ogive** is the graph of cumulative frequencies.

Types:

- Less Than Ogive
- More Than Ogive

The point where the two ogives intersect gives the

```
Median.
```

---

# 11. Applications of Statistics

Statistics is used in:

- Education.
- Economics.
- Business.
- Medical research.
- Population studies.
- Sports.
- Weather forecasting.
- Government surveys.

---

# Solved Examples

### Example 1

Find the class mark of

```
40–50
```

**Solution**

```
= (40 + 50)/2
```

```
= 45
```

---

### Example 2

Find the mean using the direct method.

|   x |   f |
| --: | --: |
|  10 |   2 |
|  20 |   3 |
|  30 |   5 |

**Solution**

```
Σfx = 230
```

```
Σf = 10
```

Mean

```
= 23
```

---

### Example 3

Find the cumulative frequency.

| Frequency |
| --------: |
|         5 |
|         8 |
|         7 |
|         6 |

**Solution**

| Frequency | Cumulative Frequency |
| --------: | -------------------: |
|         5 |                    5 |
|         8 |                   13 |
|         7 |                   20 |
|         6 |                   26 |

---

### Example 4

The mean of a distribution is

```
20
```

and the median is

```
18
```

Find the mode.

**Solution**

Using

```
Mode = 3 × Median − 2 × Mean
```

```
= 3 × 18 − 2 × 20
```

```
= 54 − 40
```

```
= 14
```

---

### Example 5

The modal class has frequency

```
18
```

The preceding class has frequency

```
12
```

The succeeding class has frequency

```
10
```

The lower boundary is

```
40
```

The class width is

```
10
```

Find the mode.

**Solution**

Using

```
Mode

=

40 + [(18−12)/(36−12−10)] × 10
```

```
= 40 + (6/14) × 10
```

```
≈ 44.29
```

---

### Example 6

Find the median class.

| Class Interval | Frequency |
| -------------- | --------: |
| 0–10           |         5 |
| 10–20          |         8 |
| 20–30          |        10 |
| 30–40          |         7 |

**Solution**

Total frequency

```
N = 30
```

```
N/2 = 15
```

Cumulative frequencies are

```
5
```

```
13
```

```
23
```

The first cumulative frequency greater than or equal to 15 is

```
23
```

Hence,

```
Median Class = 20–30
```

---

# Common Mistakes

- Using the **class limits** instead of the **class marks** while calculating the mean.
- Forgetting to prepare the **cumulative frequency table** before finding the median.
- Choosing the wrong **median class** or **modal class**.
- Confusing **frequency** with **cumulative frequency**.
- Using the wrong values of **f₀**, **f₁**, and **f₂** in the mode formula.
- Ignoring the **class width (h)** in the median and mode formulas.
- Making arithmetic errors while calculating **Σfx**, **Σfd**, or **Σfu**.

---

# Formula Sheet

| Concept                      | Formula                               |
| ---------------------------- | ------------------------------------- |
| Class Mark                   | `(Lower Limit + Upper Limit)/2`       |
| Mean (Direct Method)         | `Σfx / Σf`                            |
| Mean (Assumed Mean Method)   | `A + (Σfd / Σf)`                      |
| Mean (Step Deviation Method) | `A + (Σfu / Σf) × h`                  |
| Median                       | `l + [(N/2 − cf)/f] × h`              |
| Mode                         | `l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h` |
| Empirical Relation           | `Mode = 3 × Median − 2 × Mean`        |

---

# Chapter Summary

- **Statistics** deals with the collection, organization, analysis, and interpretation of data.
- Data may be **grouped** or **ungrouped**.
- The **class mark** is the midpoint of a class interval.
- The **mean** of grouped data can be calculated by the **Direct**, **Assumed Mean**, or **Step Deviation** methods.
- The **median** is the middle value of a distribution and is calculated using cumulative frequencies.
- The **mode** is the most frequently occurring value and is determined using the modal class.
- An **ogive** is a cumulative frequency curve used to locate the median graphically.
- The empirical relationship **Mode = 3 × Median − 2 × Mean** is useful for moderately symmetrical distributions.
- Statistics has wide applications in education, economics, business, medicine, sports, research, and government planning.

# CBSE Class 10 Mathematics

