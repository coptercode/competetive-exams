# Chapter 12: Introduction to Probability Theory

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 2  
> **Chapter:** Introduction to Probability Theory

---

# Introduction

Probability is the branch of mathematics that studies the chance of occurrence of events.

It helps us measure uncertainty and predict outcomes.

This chapter covers:

- Random experiments
- Sample spaces
- Events
- Classical probability
- Addition theorem
- Conditional probability
- Multiplication theorem
- Independent events
- Total probability theorem
- Bayes theorem

Applications:

- Statistics
- Data science
- Artificial intelligence
- Finance
- Scientific predictions

---

# PART A: BASIC CONCEPTS OF PROBABILITY

---

# 1. Random Experiment

## Definition

An experiment whose outcome cannot be predicted with certainty is called a random experiment.

---

Examples:

- Tossing a coin
- Rolling a die
- Drawing a card

---

# 2. Outcome

A possible result of a random experiment is called an outcome.

---

Example:

Rolling a die:

Possible outcomes:

\[
1,2,3,4,5,6
\]

---

# 3. Sample Space

## Definition

The set of all possible outcomes of a random experiment is called the sample space.

Symbol:

\[
\boxed{S}
\]

---

Example:

For tossing a coin:

\[
\boxed{
S=\{H,T\}
}
\]

---

For rolling a die:

\[
\boxed{
S=\{1,2,3,4,5,6\}
}
\]

---

# 4. Event

## Definition

A subset of the sample space is called an event.

Symbol:

\[
\boxed{E}
\]

---

Example:

Rolling an even number:

\[
E=\{2,4,6\}
\]

---

# Types of Events

---

# 5. Impossible Event

An event that cannot occur.

Probability:

\[
\boxed{P(E)=0}
\]

---

Example:

Getting 7 on a standard die.

---

# 6. Sure Event

An event that always occurs.

Probability:

\[
\boxed{P(E)=1}
\]

---

Example:

Getting a number between 1 and 6 when rolling a die.

---

# 7. Complementary Event

If E is an event, its complement is:

\[
\boxed{E'}
\]

---

Probability:

\[
\boxed{
P(E')=1-P(E)
}
\]

---

# PART B: CLASSICAL PROBABILITY

---

# 8. Probability of an Event

If all outcomes are equally likely:

\[
\boxed{
P(E)=
\frac{\text{Number of favourable outcomes}}
{\text{Total number of outcomes}}
}
\]

---

Range of Probability:

\[
\boxed{
0\leq P(E)\leq1
}
\]

---

# Example

A die is thrown once.

Find probability of getting an even number.

Sample space:

\[
S=\{1,2,3,4,5,6\}
\]

Total outcomes:

\[
6
\]

Favourable outcomes:

\[
\{2,4,6\}
\]

Number:

\[
3
\]

Therefore:

\[
P(E)=\frac36
\]

\[
\boxed{\frac12}
\]

---

# PART C: ADDITION THEOREM

---

# 9. Addition of Events

For two events A and B:

\[
\boxed{
P(A\cup B)
=

P(A)+P(B)-P(A\cap B)
}
\]

---

Where:

- \(A\cup B\) = occurrence of A or B
- \(A\cap B\) = occurrence of both A and B

---

# 10. Mutually Exclusive Events

Two events are mutually exclusive if they cannot occur together.

Condition:

\[
\boxed{
A\cap B=\phi
}
\]

---

Addition theorem becomes:

\[
\boxed{
P(A\cup B)=P(A)+P(B)
}
\]

---

Example:

In a die throw:

A = getting 2

B = getting 5

Both cannot occur together.

---

# PART D: CONDITIONAL PROBABILITY

---

# 11. Conditional Probability

## Definition

The probability of an event occurring when another event has already occurred is called conditional probability.

Notation:

\[
\boxed{
P(A|B)
}
\]

(read as probability of A given B)

---

Formula:

\[
\boxed{
P(A|B)
=

\frac{P(A\cap B)}
{P(B)}
}
\]

where:

\[
P(B)\neq0
\]

---

# Example

If:

\[
P(A\cap B)=0.2
\]

and:

\[
P(B)=0.5
\]

then:

\[
P(A|B)
=

\frac{0.2}{0.5}
\]

\[
\boxed{0.4}
\]

---

# PART E: MULTIPLICATION THEOREM

---

# 12. Multiplication Rule

For two events:

\[
\boxed{
P(A\cap B)
=

P(A)P(B|A)
}
\]

---

Also:

\[
\boxed{
P(A\cap B)
=

P(B)P(A|B)
}
\]

---

# PART F: INDEPENDENT EVENTS

---

# 13. Independent Events

Two events are independent if occurrence of one does not affect the other.

---

Condition:

\[
\boxed{
P(A\cap B)=P(A)P(B)
}
\]

---

Example:

Two coin tosses.

The first toss does not affect the second toss.

---

# PART G: TOTAL PROBABILITY THEOREM

---

# 14. Partition of Sample Space

A collection of events:

\[
B_1,B_2,...,B_n
\]

is a partition if:

1. Events are mutually exclusive.
2. Their union is the entire sample space.

---

# 15. Total Probability Theorem

If:

\[
B_1,B_2,...,B_n
\]

form a partition of sample space, then:

\[
\boxed{
P(A)
=

\sum_{i=1}^{n}
P(B_i)P(A|B_i)
}
\]

---

For three events:

\[
\boxed{
P(A)
=

P(B_1)P(A|B_1) +
P(B_2)P(A|B_2) +
P(B_3)P(A|B_3)
}
\]

---

# PART H: BAYES THEOREM

---

# 16. Bayes Theorem

## Definition

Bayes theorem calculates the probability of a cause when an event has already occurred.

---

Formula:

\[
\boxed{
P(B_i|A)
=

\frac{
P(B_i)P(A|B_i)
}
{
\sum P(B_j)P(A|B_j)
}
}
\]

---

# 17. Simple Bayes Problem Method

Steps:

1. Identify possible causes.
2. Find prior probabilities.
3. Find conditional probabilities.
4. Apply Bayes formula.

---

# Example

Three machines produce items:

Machine A:

\[
40\%
\]

Machine B:

\[
35\%
\]

Machine C:

\[
25\%
\]

A defective item is selected.

Find probability it came from Machine A.

Given:

\[
P(D|A)=0.02
\]

\[
P(D|B)=0.03
\]

\[
P(D|C)=0.05
\]

---

Using Bayes theorem:

\[
P(A|D)
=

\frac{P(A)P(D|A)}
{P(A)P(D|A)+P(B)P(D|B)+P(C)P(D|C)}
\]

---

# Important Formula Sheet

## Probability

\[
\boxed{
P(E)=
\frac{\text{Favourable outcomes}}
{\text{Total outcomes}}
}
\]

---

## Complement

\[
\boxed{
P(E')=1-P(E)
}
\]

---

## Addition Theorem

\[
\boxed{
P(A\cup B)
=

P(A)+P(B)-P(A\cap B)
}
\]

---

## Conditional Probability

\[
\boxed{
P(A|B)
=

\frac{P(A\cap B)}
{P(B)}
}
\]

---

## Multiplication Theorem

\[
\boxed{
P(A\cap B)
=

P(A)P(B|A)
}
\]

---

## Independent Events

\[
\boxed{
P(A\cap B)=P(A)P(B)
}
\]

---

## Bayes Theorem

\[
\boxed{
P(B_i|A)
=

\frac{
P(B_i)P(A|B_i)
}
{\sum P(B_j)P(A|B_j)}
}
\]

---

# Solved Examples

---

## Example 1

A coin is tossed once.

Find probability of getting head.

Sample space:

\[
S=\{H,T\}
\]

Favourable outcomes:

\[
1
\]

Total outcomes:

\[
2
\]

Therefore:

\[
\boxed{
P(H)=\frac12
}
\]

---

## Example 2

Two dice are thrown.

Find probability of getting sum 7.

Total outcomes:

\[
36
\]

Favourable pairs:

\[
(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)
\]

Number:

\[
6
\]

Probability:

\[
\frac6{36}
\]

\[
\boxed{\frac16}
\]

---

## Example 3

If:

\[
P(A)=0.4
\]

and:

\[
P(B)=0.5
\]

and A, B are independent:

\[
P(A\cap B)
=

0.4\times0.5
\]

\[
\boxed{0.2}
\]

---

# Common Mistakes

- Confusing sample space and event.
- Forgetting probability range:

\[
0\leq P(E)\leq1
\]

- Using addition theorem for independent events incorrectly.
- Forgetting subtraction of intersection term.
- Mixing conditional probability order:

\[
P(A|B)\neq P(B|A)
\]

- Applying Bayes theorem without identifying prior probabilities.
- Forgetting mutually exclusive events have:

\[
P(A\cap B)=0
\]

---

# Chapter Summary

- Probability measures uncertainty.
- Sample space contains all possible outcomes.
- Events are subsets of sample spaces.
- Conditional probability considers previous information.
- Independent events do not affect each other.
- Total probability combines different possible causes.
- Bayes theorem finds reverse probabilities.

\[
\boxed{
\text{Probability transforms uncertainty into mathematical prediction.}
}
\]
