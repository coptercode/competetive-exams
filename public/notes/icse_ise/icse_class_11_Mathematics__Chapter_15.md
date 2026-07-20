# Chapter 15: Statistics

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Statistics

---

# Introduction

**Statistics** is the branch of mathematics concerned with the **collection, organization, presentation, analysis, and interpretation of numerical data**. It helps in making informed decisions based on data and is widely used in **economics, business, engineering, medicine, artificial intelligence, data science, research, and social sciences**.

---

# 1. Statistics

## Definition

Statistics is the science of collecting, classifying, presenting, analyzing, and interpreting numerical data.

---

## Types of Data

### Primary Data

Data collected by the investigator for the first time.

**Examples**

- Survey data
- Questionnaire responses
- Experimental observations

---

### Secondary Data

Data collected by someone else and used by the investigator.

**Examples**

- Census reports
- Government publications
- Research journals

---

# 2. Classification of Data

Data can be classified into:

- Individual Series
- Discrete Series
- Continuous Series

---

# 3. Frequency Distribution

A **frequency distribution** shows the number of observations corresponding to different values or class intervals.

---

## Terms Used

### Class Interval

Difference between upper and lower limits.

Example

```
10–20
```

---

### Class Limits

- Lower Limit
- Upper Limit

---

### Class Width

```
Upper Limit − Lower Limit
```

---

### Mid-point (Class Mark)

```
(Lower Limit + Upper Limit)/2
```

---

# 4. Measures of Central Tendency

These measures represent the central value of a dataset.

They are

- Mean
- Median
- Mode

---

# 5. Arithmetic Mean

## Definition

The arithmetic mean is the sum of all observations divided by the total number of observations.

---

## Formula (Individual Series)

```
Mean

=

Σx/n
```

---

## Formula (Discrete Frequency Distribution)

```
Mean

=

Σfx/Σf
```

---

## Assumed Mean Method

```
Mean

=

A+(Σfd/Σf)
```

where

```
d=x−A
```

---

## Step-Deviation Method

```
Mean

=

A+h(Σfu/Σf)
```

where

```
u=(x−A)/h
```

---

# 6. Median

## Definition

The median is the middle observation when the data are arranged in ascending or descending order.

---

## Formula (Individual Series)

If

```
n
```

is odd,

```
Median=(n+1)/2 th observation
```

---

## Formula (Continuous Series)

```
Median

=

L+

[(N/2−cf)/f]×h
```

where

- L = Lower boundary of median class
- N = Total frequency
- cf = Cumulative frequency before median class
- f = Frequency of median class
- h = Class width

---

# 7. Mode

## Definition

Mode is the value that occurs with the highest frequency.

---

## Formula (Continuous Series)

```
Mode

=

L+

[(f₁−f₀)/(2f₁−f₀−f₂)]×h
```

where

- L = Lower boundary
- f₀ = Previous frequency
- f₁ = Modal class frequency
- f₂ = Next frequency

---

# 8. Empirical Relation

For a moderately symmetrical distribution,

```
Mode

=

3Median−2Mean
```

---

# 9. Measures of Dispersion

Dispersion indicates the spread of observations.

Common measures include

- Range
- Mean Deviation
- Variance
- Standard Deviation

---

# 10. Range

## Formula

```
Range

=

Largest Observation−Smallest Observation
```

---

## Coefficient of Range

```
(L−S)/(L+S)
```

where

- L = Largest value
- S = Smallest value

---

# 11. Variance

Variance is the average of the squared deviations from the mean.

---

## Formula

```
Variance

=

Σ(x−x̄)²/n
```

---

# 12. Standard Deviation

## Definition

Standard deviation is the positive square root of variance.

---

## Formula

```
σ

=

√[Σ(x−x̄)²/n]
```

---

## Shortcut Formula

```
σ

=

√[(Σfx²/Σf)−x̄²]
```

---

# 13. Coefficient of Variation (CV)

It is used to compare the consistency of two or more datasets.

---

## Formula

```
CV

=

(σ/Mean)×100
```

---

# Difference Between Mean, Median and Mode

| Mean                       | Median              | Mode                       |
| -------------------------- | ------------------- | -------------------------- |
| Arithmetic average         | Middle observation  | Most frequent observation  |
| Affected by extreme values | Less affected       | Not affected significantly |
| Uses all observations      | Depends on position | Depends on frequency       |

---

# Difference Between Dispersion Measures

| Measure                  | Description                                    |
| ------------------------ | ---------------------------------------------- |
| Range                    | Difference between largest and smallest values |
| Variance                 | Average squared deviation                      |
| Standard Deviation       | Square root of variance                        |
| Coefficient of Variation | Relative measure of dispersion                 |

---

# Flowchart

```
               STATISTICS
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
     Data      Frequency     Classification
                    │
                    ▼
      Measures of Central Tendency
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
      Mean       Median       Mode
                    │
                    ▼
      Measures of Dispersion
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
      Range     Variance   Standard Deviation
                    │
                    ▼
        Coefficient of Variation
```

---

# Important Formulae

| Concept                  | Formula                       |
| ------------------------ | ----------------------------- |
| Mean                     | **Σx/n**                      |
| Mean (Frequency)         | **Σfx/Σf**                    |
| Median (Continuous)      | **L+[(N/2−cf)/f]×h**          |
| Mode (Continuous)        | **L+[(f₁−f₀)/(2f₁−f₀−f₂)]×h** |
| Empirical Relation       | **Mode = 3Median − 2Mean**    |
| Range                    | **Largest − Smallest**        |
| Variance                 | **Σ(x−x̄)²/n**                 |
| Standard Deviation       | **√Variance**                 |
| Coefficient of Variation | **(σ/Mean)×100**              |

---

# Applications

- Data Science and Analytics.
- Artificial Intelligence.
- Machine Learning.
- Business forecasting.
- Economics.
- Medical research.
- Quality control.
- Government census.
- Market research.
- Sports analytics.

---

# Solved Examples

## Example 1

### Question

Find the mean of

```
4, 6, 8, 10, 12
```

### Solution

```
Mean

=

(4+6+8+10+12)/5

=

40/5

=

8
```

### Answer

```
8
```

---

## Example 2

### Question

Find the median of

```
2, 5, 7, 9, 12
```

### Solution

The middle observation is

```
7
```

### Answer

```
7
```

---

## Example 3

### Question

Find the mode of

```
3, 5, 5, 6, 8
```

### Solution

The value occurring most frequently is

```
5
```

### Answer

```
5
```

---

## Example 4

### Question

Find the range of

```
12, 18, 25, 30
```

### Solution

```
30−12

=

18
```

### Answer

```
18
```

---

## Example 5

### Question

If the variance of a dataset is

```
49
```

find the standard deviation.

### Solution

```
σ

=

√49

=

7
```

### Answer

```
7
```

---

# Common Mistakes

- Confusing **mean**, **median**, and **mode**.
- Ignoring frequencies while calculating the mean.
- Selecting the wrong median class in grouped data.
- Using incorrect class boundaries in grouped distributions.
- Forgetting to square deviations while computing variance.
- Confusing variance with standard deviation.

---

# Exam Tips

- Memorize all formulas for **mean, median, mode, variance, and standard deviation**.
- Arrange raw data in ascending order before finding the median.
- Identify the modal class correctly before applying the mode formula.
- Verify cumulative frequencies carefully in grouped data.
- Practice shortcut methods to save time in examinations.

---

# Quick Revision

- Statistics → Collection, analysis, and interpretation of data.
- Mean → **Σx/n**
- Mean (Frequency) → **Σfx/Σf**
- Median (Grouped) → **L+[(N/2−cf)/f]×h**
- Mode (Grouped) → **L+[(f₁−f₀)/(2f₁−f₀−f₂)]×h**
- Empirical Relation → **Mode = 3Median − 2Mean**
- Range → **Largest − Smallest**
- Variance → **Σ(x−x̄)²/n**
- Standard Deviation → **√Variance**
- Coefficient of Variation → **(σ/Mean)×100**

---

# Chapter Summary

- **Statistics** deals with the collection, organization, presentation, analysis, and interpretation of numerical data.
- Data can be classified into **individual, discrete, and continuous series**, and represented using frequency distributions.
- The **measures of central tendency**—**mean, median, and mode**—describe the central value of a dataset.
- The **measures of dispersion**—**range, variance, standard deviation, and coefficient of variation**—measure the spread and consistency of data.
- The **empirical relation** between mean, median, and mode is useful for moderately symmetrical distributions.
- Statistics is indispensable in **data science, artificial intelligence, economics, engineering, business analytics, medicine, and scientific research**, enabling informed decision-making through data analysis.
