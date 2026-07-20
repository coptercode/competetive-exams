# Chapter 9: Probability

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Probability

(Topics covered from uploaded ISC Class 12 Mathematics outline: conditional probability, Bayes' theorem, random variables, probability distributions, and expected values) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Probability** is the branch of mathematics that deals with the measurement of uncertainty and chance.

It helps predict the likelihood of events occurring.

Applications:

- Statistics
- Artificial intelligence
- Data science
- Finance
- Weather prediction
- Risk analysis

---

# 1. Random Experiment

## Definition

An experiment whose outcome cannot be predicted with certainty is called a random experiment.

---

# Examples

- Tossing a coin.
- Rolling a dice.
- Selecting a card.

---

# 2. Sample Space

## Definition

The set of all possible outcomes of a random experiment is called the sample space.

---

# Symbol

```
S
```

---

# Example

For a coin toss:

```
S={H,T}
```

For dice:

```
S={1,2,3,4,5,6}
```

---

# 3. Event

## Definition

An event is a subset of the sample space.

---

# Types of Events

---

## Simple Event

Contains only one outcome.

Example:

Getting 3 on a dice.

```
E={3}
```

---

## Compound Event

Contains more than one outcome.

Example:

Getting an even number:

```
E={2,4,6}
```

---

# 4. Probability of an Event

## Classical Definition

If all outcomes are equally likely:

\[
P(E)=\frac{Number\ of\ favourable\ outcomes}{Total\ number\ of\ outcomes}
\]

---

# Formula

```
P(E)=n(E)/n(S)
```

where:

- n(E) = favourable outcomes
- n(S) = total outcomes

---

# Range of Probability

```
0 ≤ P(E) ≤ 1
```

---

# Important Results

Impossible event:

```
P(E)=0
```

Certain event:

```
P(E)=1
```

---

# 5. Complementary Event

## Definition

The event that does not occur is called the complement of the event.

---

# Symbol

```
E'
```

---

# Formula

```
P(E')=1-P(E)
```

---

# Example

If:

```
P(E)=0.4
```

then:

```
P(E')=1-0.4
```

```
=0.6
```

---

# 6. Addition Theorem of Probability

For two events A and B:

\[
P(A∪B)=P(A)+P(B)-P(A∩B)
\]

---

# Mutually Exclusive Events

Two events are mutually exclusive if they cannot occur together.

---

Condition:

```
A∩B=φ
```

---

Then:

```
P(A∪B)=P(A)+P(B)
```

---

# 7. Conditional Probability

## Definition

The probability of occurrence of event A when event B has already occurred.

---

# Formula

\[
P(A|B)=\frac{P(A∩B)}{P(B)}
\]

where:

```
P(B)≠0
```

---

# Example

A card is drawn.

Find probability of getting an ace if card is known to be a face card.

---

# 8. Multiplication Theorem

From conditional probability:

\[
P(A∩B)=P(A)P(B|A)
\]

or

\[
P(A∩B)=P(B)P(A|B)
\]

---

# Independent Events

Two events are independent if occurrence of one does not affect the other.

---

Condition:

\[
P(A∩B)=P(A)P(B)
\]

---

# Example

Two coin tosses.

The result of first toss does not affect second toss.

---

# 9. Bayes' Theorem

## Definition

Bayes' theorem is used to find the probability of causes when the outcome is known.

---

# Formula

\[
P(A_i|B)=
\frac{P(A_i)P(B|A_i)}
{\sum P(A_i)P(B|A_i)}
\]

---

# Terms

- P(Aᵢ) → Prior probability
- P(B|Aᵢ) → Conditional probability
- P(Aᵢ|B) → Posterior probability

---

# Applications

- Medical diagnosis
- Machine learning
- Spam filtering
- Prediction systems

---

# 10. Random Variable

## Definition

A variable whose value depends on the outcome of a random experiment is called a random variable.

---

# Types

## Discrete Random Variable

Has countable values.

Example:

Number of heads in coin tosses.

---

## Continuous Random Variable

Has continuous values.

Example:

Height, weight, temperature.

---

# 11. Probability Distribution

## Definition

A table showing values of a random variable and their probabilities.

---

# Conditions

For a discrete distribution:

### 1.

```
P(X)≥0
```

### 2.

\[
ΣP(X)=1
\]

---

# Example

| X    | 0   | 1   | 2   |
| ---- | --- | --- | --- |
| P(X) | 1/4 | 1/2 | 1/4 |

---

# 12. Mean of Random Variable

The expected value of a random variable is called mean.

---

# Formula

\[
E(X)=ΣxP(x)
\]

---

# Example

| X    | 1   | 2   |
| ---- | --- | --- |
| P(X) | 0.5 | 0.5 |

Mean:

\[
E(X)=1(0.5)+2(0.5)
\]

\[
=1.5
\]

---

# 13. Variance

## Definition

Variance measures the spread of probability distribution.

---

# Formula

\[
Var(X)=E(X^2)-[E(X)]^2
\]

---

# Standard Deviation

\[
σ=\sqrt{Var(X)}
\]

---

# 14. Bernoulli Trials

## Definition

A sequence of independent trials having only two possible outcomes:

- Success
- Failure

---

# Conditions

1. Fixed number of trials.
2. Independent trials.
3. Same probability of success.

---

# 15. Binomial Distribution

## Definition

Probability distribution for number of successes in n independent Bernoulli trials.

---

# Formula

\[
P(X=r)=
^nC_r p^r q^{n-r}
\]

where:

- p = probability of success
- q = probability of failure

and:

```
q=1-p
```

---

# Mean

\[
μ=np
\]

---

# Variance

\[
σ²=npq
\]

---

# Example

A coin is tossed 3 times.

Probability of getting 2 heads:

```
n=3
r=2
p=1/2
q=1/2
```

\[
P(X=2)=^3C_2(1/2)^2(1/2)^1
\]

\[
=3/8
\]

---

# ASCII Flowchart

```
              PROBABILITY
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
   Events      Conditional    Random
                  Probability  Variable
      │             │             │
      ▼             ▼             ▼
 Addition       Bayes        Distribution
 Theorem        Theorem           │
                                  ▼
                              Expectation
```

---

# Important Formulae

| Concept                 | Formula                 |
| ----------------------- | ----------------------- |
| Probability             | P(E)=n(E)/n(S)          |
| Complement              | P(E')=1-P(E)            |
| Addition Theorem        | P(A∪B)=P(A)+P(B)-P(A∩B) |
| Conditional Probability | P(A                     | B)=P(A∩B)/P(B) |
| Multiplication          | P(A∩B)=P(A)P(B          | A)             |
| Independent Events      | P(A∩B)=P(A)P(B)         |
| Bayes Theorem           | P(Aᵢ                    | B)=P(Aᵢ)P(B    | Aᵢ)/Σ |
| Mean                    | E(X)=ΣxP(x)             |
| Variance                | E(X²)-E(X)²             |
| Binomial                | ⁿCᵣpʳqⁿ⁻ʳ               |

---

# Solved Examples

## Example 1

A dice is thrown once. Find probability of getting an even number.

Sample space:

```
S={1,2,3,4,5,6}
```

Even outcomes:

```
{2,4,6}
```

Therefore:

\[
P(E)=3/6
\]

Answer:

```
1/2
```

---

## Example 2

If:

```
P(A)=0.5
```

Find:

```
P(A')
```

Solution:

\[
P(A')=1-0.5
\]

Answer:

```
0.5
```

---

## Example 3

Two coins are tossed. Find probability of two heads.

Sample space:

```
{HH,HT,TH,TT}
```

Favourable:

```
HH
```

Probability:

```
1/4
```

---

## Example 4

Find mean of distribution:

| X    | 1   | 2   | 3   |
| ---- | --- | --- | --- |
| P(X) | 0.2 | 0.5 | 0.3 |

Solution:

\[
E(X)=1(0.2)+2(0.5)+3(0.3)
\]

\[
=2.1
\]

---

## Example 5

Find probability of exactly 3 heads in 5 tosses.

\[
P(X=3)=^5C_3(1/2)^3(1/2)^2
\]

\[
=10/32
\]

Answer:

```
5/16
```

---

# Common Mistakes

- Confusing mutually exclusive and independent events.
- Forgetting complement formula.
- Incorrect use of Bayes theorem.
- Probability values exceeding 1.
- Forgetting total probability equals 1.
- Incorrect binomial parameters.

---

# Exam Tips

- Practice conditional probability problems.
- Memorize Bayes theorem formula.
- Understand difference between independent and mutually exclusive events.
- Practice random variable tables.
- Solve binomial distribution questions.
- Learn expectation and variance formulas.

---

# Quick Revision

- Probability:

```
0≤P(E)≤1
```

- Complement:

```
P(E')=1-P(E)
```

- Conditional:

```
P(A|B)=P(A∩B)/P(B)
```

- Bayes theorem finds reverse probability.
- Mean:

```
E(X)=ΣxP(x)
```

- Variance:

```
E(X²)-E(X)²
```

- Binomial:

```
ⁿCᵣpʳqⁿ⁻ʳ
```

---

# Chapter Summary

- **Probability** provides a mathematical measure of uncertainty and chance.
- Conditional probability helps calculate probabilities when additional information is available.
- **Bayes' theorem** allows updating probabilities based on new evidence and is widely used in prediction systems.
- Random variables and probability distributions help represent uncertain outcomes mathematically.
- Expected value and variance describe the average behaviour and spread of distributions.
- Probability concepts are fundamental in **statistics, artificial intelligence, finance, machine learning, and scientific analysis**.

# ISC Class 12 Mathematics

