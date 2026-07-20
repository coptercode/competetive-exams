# Chapter 13: Probability

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Probability

> **Note:** This chapter covers conditional probability, multiplication theorem, independent events, total probability theorem, Bayes' theorem, random variables, probability distributions, mathematical expectation, variance, and Bernoulli trials.

---

# Introduction

Probability is the branch of mathematics that deals with uncertainty and the likelihood of events. In Class 12, probability is extended to include **conditional probability**, **Bayes' theorem**, **random variables**, **probability distributions**, and **mathematical expectation**, which have applications in statistics, economics, medicine, engineering, artificial intelligence, and data science.

---

# 1. Basic Terminology

## Random Experiment

An experiment whose outcome cannot be predicted with certainty.

### Examples

- Tossing a coin
- Rolling a die
- Drawing a card

---

## Sample Space

The set of all possible outcomes.

Notation

```

S

```

Example

For a die,

```

S = {1,2,3,4,5,6}

```

---

## Event

A subset of the sample space.

Notation

```

A, B, C

```

---

# 2. Conditional Probability

## Definition

The probability of occurrence of an event

```

A

```

given that another event

```

B

```

has already occurred.

Notation

```

P(A|B)

```

---

## Formula

```

P(A|B)

=

P(A∩B)

/P(B)

```

provided

```

P(B) ≠ 0

```

Similarly,

```

P(B|A)

=

P(A∩B)

/P(A)

```

---

# 3. Multiplication Theorem of Probability

From conditional probability,

```

P(A∩B)

=

P(B)P(A|B)

```

or

```

P(A∩B)

=

P(A)P(B|A)

```

---

## For Three Events

```

P(A∩B∩C)

=

P(A)

P(B|A)

P(C|A∩B)

```

---

# 4. Independent Events

## Definition

Two events

```

A

and

B

```

are independent if

```

P(A|B)

=

P(A)

```

or equivalently,

```

P(A∩B)

=

P(A)P(B)

```

---

## Properties

- Occurrence of one event does not affect the other.
- Independent events are not necessarily mutually exclusive.

---

# 5. Dependent Events

Two events are dependent if

```

P(A|B)

≠

P(A)

```

---

# 6. Total Probability Theorem

Suppose

```

A₁,A₂,...,Aₙ

```

form a partition of the sample space.

Then

```

P(B)

=

P(A₁)P(B|A₁)

-

P(A₂)P(B|A₂)

- ...

-

P(Aₙ)P(B|Aₙ)

```

---

# 7. Bayes' Theorem

## Statement

If

```

A₁,A₂,...,Aₙ

```

form a partition of the sample space and

```

P(B)>0

```

then

```

P(Aᵢ|B)

=

P(Aᵢ)P(B|Aᵢ)

/

ΣP(Aⱼ)P(B|Aⱼ)

```

---

## For Two Events

```

P(A|B)

=

P(A)P(B|A)

/

P(B)

```

where

```

P(B)

=

P(A)P(B|A)

-

P(A')P(B|A')

```

---

# 8. Random Variable

## Definition

A variable whose value depends on the outcome of a random experiment.

Usually denoted by

```

X

```

---

## Types

### Discrete Random Variable

Takes countable values.

Examples

- Number of heads in three coin tosses.
- Number on a die.

---

### Continuous Random Variable

Takes values over an interval.

Examples

- Height
- Weight
- Temperature

(Only discrete random variables are included in the CBSE syllabus.)

---

# 9. Probability Distribution

## Definition

A table showing all possible values of a random variable and their corresponding probabilities.

---

## Conditions

```

0 ≤ P(X=x) ≤ 1

```

and

```

ΣP(X=x)

=

1

```

---

## Example

| X | 0 | 1 | 2 |
|---|---:|---:|---:|
| P(X) | 0.2 | 0.5 | 0.3 |

---

# 10. Mean (Mathematical Expectation)

## Definition

The expected value of a random variable.

Notation

```

E(X)

```

---

## Formula

```

E(X)

=

ΣxP(x)

```

---

## Interpretation

The expectation represents the long-term average outcome if the experiment is repeated many times.

---

# 11. Variance

## Definition

Variance measures the spread of a probability distribution.

Notation

```

Var(X)

```

---

## Formula

```

Var(X)

=

E(X²)

−

[E(X)]²

```

where

```

E(X²)

=

Σx²P(x)

```

---

# 12. Standard Deviation

## Formula

```

σ

=

√Var(X)

```

---

# 13. Bernoulli Trials

## Definition

Repeated random experiments satisfying:

- Only two outcomes:
  - Success
  - Failure
- Probability of success remains constant.
- Trials are independent.

---

## Probability of Success

```

p

```

---

## Probability of Failure

```

q

=

1−p

```

---

# 14. Bernoulli Distribution

If a random variable

```

X

```

takes values

```

0

and

1

```

then

| X | Probability |
|---|-------------|
| 0 | q |
| 1 | p |

where

```

p+q=1

```

---

## Mean

```

E(X)=p

```

---

## Variance

```

Var(X)=pq

```

---

# 15. Important Probability Formulae

```

P(A')

=

1−P(A)

```

---

```

P(A∪B)

=

P(A)

-

P(B)

−

P(A∩B)

```

---

For mutually exclusive events,

```

P(A∩B)=0

```

Hence,

```

P(A∪B)

=

P(A)+P(B)

```

---

For independent events,

```

P(A∩B)

=

P(A)P(B)

```

---

# Comparison Tables

## Independent vs Dependent Events

| Independent Events | Dependent Events |
|--------------------|------------------|
| One event does not affect the other | One event affects the other |
| P(A∩B)=P(A)P(B) | Product rule does not apply directly |

---

## Conditional Probability vs Simple Probability

| Conditional Probability | Simple Probability |
|-------------------------|--------------------|
| Depends on another event | Independent of conditions |
| Uses P(A\|B) | Uses P(A) |

---

## Discrete vs Continuous Random Variable

| Discrete | Continuous |
|-----------|------------|
| Countable values | Infinite values in an interval |
| Included in CBSE syllabus | Basic idea only |

---

## Mean vs Variance

| Mean | Variance |
|------|----------|
| Average value | Measure of dispersion |
| E(X) | Var(X) |

---

# ASCII Diagrams

## Conditional Probability

```

Sample Space

+------------------+

| B |

| +------+ |

| |A∩B | |

| +------+ |

+------------------+

```

---

## Probability Distribution

```

Probability

│

│ *

│ * *

│ * *

└────────────── X

```

---

## Bernoulli Trial

```

Trial

↓

Success (p)

or

Failure (q)

```

---

## Bayes' Theorem

```

Prior

↓

Evidence

↓

Posterior Probability

```

---

# Solved Examples

### Example 1

A card is drawn from a standard deck of 52 cards. Find the probability that it is a king given that it is a face card.

**Solution**

Face cards

```

= 12

```

Kings

```

= 4

```

Therefore,

```

P(King|Face)

=

4/12

=

1/3

```

---

### Example 2

If

```

P(A)=0.5

P(B)=0.4

```

and

```

A

and

B

```

are independent, find

```

P(A∩B)

```

**Solution**

```

P(A∩B)

=

0.5×0.4

=

0.2

```

---

### Example 3

A random variable has the following distribution.

| X | 1 | 2 | 3 |
|---|---:|---:|---:|
| P(X) | 0.2 | 0.5 | 0.3 |

Find

```

E(X)

```

**Solution**

```

E(X)

=

1(0.2)

-

2(0.5)

-

3(0.3)

```

```

=

0.2+1+0.9

=

2.1

```

---

### Example 4

Using the distribution in Example 3, find

```

Var(X)

```

**Solution**

First,

```

E(X²)

=

1²(0.2)

-

2²(0.5)

-

3²(0.3)

```

```

=

0.2+2+2.7

=

4.9

```

Now,

```

Var(X)

=

4.9−(2.1)²

```

```

=

4.9−4.41

=

0.49

```

---

### Example 5

A Bernoulli trial has

```

p=0.7

```

Find

```

q

```

**Solution**

```

q

=

1−0.7

=

0.3

```

---

### Example 6

If

```

P(A)=0.6

and

P(B|A)=0.5

```

find

```

P(A∩B)

```

**Solution**

Using the multiplication theorem,

```

P(A∩B)

=

P(A)P(B|A)

```

```

=

0.6×0.5

=

0.3

```

---

# Common Mistakes

- Confusing **conditional probability** with ordinary probability.
- Applying the multiplication rule for **independent events** to dependent events.
- Forgetting to verify that the probabilities in a probability distribution add up to **1**.
- Using **E(X)** instead of **E(X²)** while calculating variance.
- Assuming mutually exclusive events are independent; in general, they are **not** independent.
- Ignoring the denominator while applying **Bayes' theorem**.
- Forgetting that in Bernoulli trials **p + q = 1**.
- Making arithmetic errors while computing expectation and variance.

---

# Chapter Summary

- **Conditional probability** measures the probability of an event when another event has already occurred.
- The **Multiplication Theorem** relates conditional probability to the probability of simultaneous occurrence of events.
- Two events are **independent** if the occurrence of one does not affect the probability of the other.
- The **Total Probability Theorem** expresses the probability of an event in terms of a partition of the sample space.
- **Bayes' theorem** updates probabilities based on new information and is widely used in statistics, machine learning, and decision-making.
- A **random variable** assigns numerical values to the outcomes of a random experiment, and its behavior is described by a **probability distribution**.
- The **mathematical expectation** gives the average value of a random variable, while **variance** and **standard deviation** measure the spread of the distribution.
- **Bernoulli trials** involve repeated independent experiments with two possible outcomes, forming the foundation for many advanced probability models.
```
