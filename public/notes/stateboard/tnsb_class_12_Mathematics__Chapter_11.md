# Chapter 11: Probability Distributions

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 2  
> **Chapter:** Probability Distributions

---

# Introduction

Probability distributions describe how probabilities are distributed among possible outcomes of a random experiment.

They are used in:

- Statistics
- Data analysis
- Economics
- Science experiments
- Decision making

---

# PART A: RANDOM VARIABLES

---

# 1. Random Experiment

## Definition

An experiment whose outcome cannot be predicted with certainty is called a random experiment.

Examples:

- Tossing a coin
- Rolling a die
- Selecting a card

---

# 2. Random Variable

## Definition

A variable whose value is determined by the outcome of a random experiment is called a random variable.

Symbol:

\[
\boxed{X}
\]

---

Example:

For tossing two coins:

Possible outcomes:

\[
HH,HT,TH,TT
\]

Let X = number of heads.

Then:

\[
X=0,1,2
\]

---

# 3. Types of Random Variables

There are two types:

1. Discrete random variable
2. Continuous random variable

---

# 4. Discrete Random Variable

## Definition

A random variable that takes a finite or countable number of values is called a discrete random variable.

Examples:

- Number of students
- Number of defective items
- Number of heads

---

# 5. Continuous Random Variable

## Definition

A random variable that can take any value in an interval is called a continuous random variable.

Examples:

- Height
- Weight
- Temperature
- Time

---

# 6. Probability Distribution

## Definition

A table showing possible values of a random variable and their corresponding probabilities is called a probability distribution.

---

For a discrete random variable:

| X    | x₁  | x₂  | x₃  |
| ---- | --- | --- | --- |
| P(X) | p₁  | p₂  | p₃  |

---

# Conditions of Probability Distribution

For a random variable X:

## Condition 1

\[
\boxed{
P(X=x_i)\geq0
}
\]

---

## Condition 2

\[
\boxed{
\sum P(X=x_i)=1
}
\]

---

# 7. Probability Mass Function (PMF)

For a discrete random variable:

\[
\boxed{
P(X=x)=p(x)
}
\]

is called probability mass function.

---

# Properties of PMF

1.

\[
p(x)\geq0
\]

2.

\[
\sum p(x)=1
\]

---

# 8. Probability Density Function (PDF)

For continuous random variables, probability is described using density function.

Symbol:

\[
\boxed{f(x)}
\]

---

Properties:

\[
f(x)\geq0
\]

and:

\[
\boxed{
\int_{-\infty}^{\infty}f(x)dx=1
}
\]

---

# PART B: MEAN AND VARIANCE

---

# 9. Mean of a Random Variable

The mean is the expected value of a random variable.

Symbol:

\[
E(X)
\]

---

Formula:

\[
\boxed{
E(X)=\sum xp(x)
}
\]

---

# Example

Distribution:

| X    | 1   | 2   | 3   |
| ---- | --- | --- | --- |
| P(X) | 0.2 | 0.5 | 0.3 |

Mean:

\[
E(X)=1(0.2)+2(0.5)+3(0.3)
\]

\[
=0.2+1+0.9
\]

\[
\boxed{E(X)=2.1}
\]

---

# 10. Variance

Variance measures the spread of data.

Formula:

\[
\boxed{
Var(X)=E(X^2)-[E(X)]^2
}
\]

---

where:

\[
E(X^2)=\sum x^2p(x)
\]

---

# 11. Standard Deviation

Standard deviation:

\[
\boxed{
\sigma=\sqrt{Var(X)}
}
\]

---

# PART C: BINOMIAL DISTRIBUTION

---

# 12. Binomial Distribution

## Definition

A probability distribution representing the number of successes in repeated independent trials is called binomial distribution.

---

# Conditions for Binomial Distribution

1. Fixed number of trials.
2. Each trial has two outcomes:
   - Success
   - Failure
3. Probability of success remains constant.
4. Trials are independent.

---

# 13. Binomial Probability Formula

If:

- n = number of trials
- r = number of successes
- p = probability of success
- q = probability of failure

where:

\[
q=1-p
\]

then:

\[
\boxed{
P(X=r)=
^nC_r p^r q^{n-r}
}
\]

---

# Mean of Binomial Distribution

\[
\boxed{
\mu=np
}
\]

---

# Variance

\[
\boxed{
\sigma^2=npq
}
\]

---

# Standard Deviation

\[
\boxed{
\sigma=\sqrt{npq}
}
\]

---

# Example

A coin is tossed 5 times. Find probability of getting exactly 3 heads.

Here:

\[
n=5
\]

\[
r=3
\]

\[
p=\frac12
\]

\[
q=\frac12
\]

Formula:

\[
P(X=3)=
^5C_3
(\frac12)^3
(\frac12)^2
\]

\[
=10(\frac1{32})
\]

\[
\boxed{
=\frac5{16}
}
\]

---

# PART D: NORMAL DISTRIBUTION

---

# 14. Normal Distribution

## Definition

A continuous probability distribution having a bell-shaped curve is called normal distribution.

---

It is represented as:

\[
\boxed{
N(\mu,\sigma^2)
}
\]

where:

- μ = mean
- σ² = variance

---

# 15. Properties of Normal Distribution

---

## Property 1

The curve is symmetric about:

\[
\boxed{x=\mu}
\]

---

## Property 2

Mean, median and mode are equal.

\[
\boxed{
Mean=Median=Mode
}
\]

---

## Property 3

Total area under curve:

\[
\boxed{1}
\]

---

## Property 4

The curve extends from:

\[
-\infty \text{ to }+\infty
\]

---

# 16. Standard Normal Distribution

A normal distribution with:

\[
\mu=0
\]

and:

\[
\sigma=1
\]

is called standard normal distribution.

---

Transformation:

\[
\boxed{
Z=\frac{X-\mu}{\sigma}
}
\]

---

# 17. Normal Distribution Curve

Characteristics:

- Bell-shaped
- Symmetric
- Maximum at mean
- Tails approach x-axis

---

# Comparison Tables

## Discrete vs Continuous Random Variable

| Discrete                    | Continuous      |
| --------------------------- | --------------- |
| Countable values            | Infinite values |
| Uses PMF                    | Uses PDF        |
| Example: number of students | Example: height |

---

## Binomial vs Normal Distribution

| Binomial               | Normal                   |
| ---------------------- | ------------------------ |
| Discrete distribution  | Continuous distribution  |
| Fixed number of trials | Infinite possible values |
| Uses n, p, q           | Uses μ and σ             |

---

# Important Formula Sheet

## Probability Distribution

\[
\sum P(X)=1
\]

---

## Mean

\[
E(X)=\sum xp(x)
\]

---

## Variance

\[
Var(X)=E(X^2)-[E(X)]^2
\]

---

## Binomial Distribution

\[
P(X=r)=^nC_rp^rq^{n-r}
\]

---

## Binomial Mean

\[
\mu=np
\]

---

## Binomial Variance

\[
\sigma^2=npq
\]

---

## Normal Distribution

\[
Z=\frac{X-\mu}{\sigma}
\]

---

# Solved Examples

## Example 1

A die is thrown once. Let X be the number obtained.

Probability distribution:

\[
P(X=x)=\frac16
\]

for:

\[
x=1,2,3,4,5,6
\]

---

## Example 2

Find mean of binomial distribution:

\[
n=10,\ p=0.4
\]

Formula:

\[
\mu=np
\]

\[
=10(0.4)
\]

\[
\boxed{\mu=4}
\]

---

## Example 3

Find variance:

\[
n=10,\ p=0.4
\]

\[
q=0.6
\]

\[
\sigma^2=npq
\]

\[
=10(0.4)(0.6)
\]

\[
\boxed{=2.4}
\]

---

## Example 4

Convert:

\[
X=70,\mu=60,\sigma=5
\]

to standard normal variable.

\[
Z=\frac{70-60}{5}
\]

\[
\boxed{Z=2}
\]

---

# Common Mistakes

- Confusing random variable with probability value.
- Forgetting:

\[
\sum P(X)=1
\]

- Using wrong values of p and q in binomial distribution.
- Forgetting:

\[
q=1-p
\]

- Applying binomial distribution when trials are not independent.
- Confusing variance and standard deviation.
- Forgetting that normal distribution is continuous.

---

# Chapter Summary

- Random variables assign numerical values to outcomes.
- Discrete variables use probability mass functions.
- Continuous variables use probability density functions.
- Expected value gives the mean of a distribution.
- Binomial distribution models repeated independent trials.
- Normal distribution is a symmetric continuous distribution.

Important formulas:

\[
\boxed{
E(X)=\sum xp(x)
}
\]

\[
\boxed{
P(X=r)=^nC_rp^rq^{n-r}
}
\]

\[
\boxed{
Z=\frac{X-\mu}{\sigma}
}
\]

# Tamil Nadu State Board Class 12 Mathematics Volume 2

