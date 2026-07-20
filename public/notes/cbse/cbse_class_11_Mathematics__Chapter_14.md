# Chapter 14: Probability

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Probability

---

# Introduction

**Probability** is the branch of mathematics that deals with the likelihood or chance of occurrence of an event. It provides a numerical measure of uncertainty and is widely used in statistics, economics, finance, engineering, medicine, artificial intelligence, weather forecasting, and everyday decision-making.

In this chapter, we study **random experiments**, **sample space**, **events**, **axioms of probability**, and important results related to the addition of probabilities.

---

# 1. Random Experiment

A **random experiment** is an experiment whose exact outcome cannot be predicted in advance, although all possible outcomes are known.

### Examples

- Tossing a coin
- Rolling a die
- Drawing a card from a deck
- Selecting a student at random
- Spinning a wheel

---

# 2. Trial and Outcome

### Trial

A **trial** is one performance of a random experiment.

### Outcome

The result obtained from a trial is called an **outcome**.

### Example

Experiment:

```
Rolling a die
```

Possible outcomes

```
1,2,3,4,5,6
```

---

# 3. Sample Space

The **sample space** is the set of all possible outcomes of a random experiment.

It is denoted by

```
S
```

### Examples

#### Tossing a Coin

```
S={H,T}
```

---

#### Tossing Two Coins

```
S={HH,HT,TH,TT}
```

---

#### Rolling a Die

```
S={1,2,3,4,5,6}
```

---

# 4. Event

An **event** is any subset of the sample space.

If

```
S={1,2,3,4,5,6}
```

then

```
E={2,4,6}
```

is the event of obtaining an even number.

---

# 5. Types of Events

---

## (A) Simple (Elementary) Event

An event containing only one outcome.

Example

```
{4}
```

---

## (B) Compound Event

An event containing more than one outcome.

Example

```
{2,4,6}
```

---

## (C) Sure Event

An event that always occurs.

```
P(S)=1
```

---

## (D) Impossible Event

An event that never occurs.

```
∅
```

```
P(∅)=0
```

---

## (E) Complementary Event

If

```
A
```

is an event,

its complement is

```
A'
```

or

```
Aᶜ
```

representing the event that

```
A
```

does not occur.

---

# 6. Algebra of Events

### Union

```
A∪B
```

Represents

```
A

or

B

or both
```

---

### Intersection

```
A∩B
```

Represents

```
Both

A

and

B
```

---

### Difference

```
A−B
```

Represents outcomes in

```
A

but not in

B
```

---

### Complement

```
A'
```

Represents outcomes not belonging to

```
A
```

---

# 7. Axiomatic Approach to Probability

Probability satisfies the following axioms.

---

## Axiom 1

For every event

```
A
```

```
P(A)≥0
```

---

## Axiom 2

The probability of the sample space is

```
P(S)=1
```

---

## Axiom 3

If

```
A

and

B
```

are mutually exclusive events,

then

```
P(A∪B)

=

P(A)+P(B)
```

---

# 8. Probability of an Event

If all outcomes are equally likely,

```
P(E)

=

Number of favourable outcomes

/

Total number of outcomes
```

---

## Example

Find the probability of obtaining an even number on a die.

Sample space

```
{1,2,3,4,5,6}
```

Favourable outcomes

```
{2,4,6}
```

```
P(E)

=

3/6

=1/2
```

---

# 9. Properties of Probability

---

## Property 1

```
0≤P(A)≤1
```

---

## Property 2

```
P(∅)=0
```

---

## Property 3

```
P(S)=1
```

---

## Property 4

```
P(A')

=

1−P(A)
```

---

## Property 5

If

```
A⊆B
```

then

```
P(A)

≤

P(B)
```

---

# 10. Addition Theorem of Probability

For any two events

```
A

and

B
```

```
P(A∪B)

=

P(A)

+

P(B)

−

P(A∩B)
```

---

## Special Case

If

```
A

and

B
```

are mutually exclusive,

```
P(A∩B)=0
```

Therefore,

```
P(A∪B)

=

P(A)

+

P(B)
```

---

# 11. Equally Likely Events

Two or more events are equally likely if each has the same probability.

### Example

Rolling a fair die

Each outcome has probability

```
1/6
```

---

# 12. Mutually Exclusive Events

Two events are **mutually exclusive** if they cannot occur simultaneously.

Example

On a die,

```
A={2}
```

```
B={5}
```

Both cannot occur in one roll.

---

# 13. Exhaustive Events

A set of events is exhaustive if together they include every possible outcome.

Example

Coin toss

```
{H,T}
```

---

# 14. Applications of Probability

Probability is used in:

- Insurance
- Banking
- Artificial Intelligence
- Machine Learning
- Medical diagnosis
- Weather forecasting
- Genetics
- Risk analysis
- Sports analytics
- Decision making

---

# Solved Examples

### Example 1

Find the probability of getting a head on tossing a coin.

**Solution**

Sample space

```
{H,T}
```

Favourable outcomes

```
{H}
```

```
P(H)

=

1/2
```

---

### Example 2

Find the probability of getting a prime number on a die.

**Solution**

Prime numbers

```
2,3,5
```

```
P

=

3/6

=1/2
```

---

### Example 3

A card is drawn from a standard deck of 52 cards. Find the probability of drawing an Ace.

**Solution**

Number of Aces

```
4
```

```
P

=

4/52

=1/13
```

---

### Example 4

If

```
P(A)=0.65
```

find

```
P(A')
```

**Solution**

```
P(A')

=

1−0.65

=0.35
```

---

### Example 5

If

```
P(A)=0.4

P(B)=0.3

P(A∩B)=0.1
```

find

```
P(A∪B)
```

**Solution**

```
0.4+0.3−0.1

=0.6
```

---

### Example 6

A die is rolled once. Find the probability of getting a number greater than 4.

**Solution**

Favourable outcomes

```
5,6
```

```
P

=

2/6

=1/3
```

---

# Common Mistakes

- Confusing the **sample space** with an **event**.
- Forgetting that the probability of an impossible event is **0**.
- Forgetting that the probability of a sure event is **1**.
- Using the addition theorem without subtracting the intersection for overlapping events.
- Assuming events are mutually exclusive when they are not.
- Counting favourable outcomes incorrectly.
- Forgetting to simplify probability fractions.
- Confusing complementary events with mutually exclusive events.

---

# Formula Sheet

## Probability

```
P(E)

=

Number of favourable outcomes

/

Total number of outcomes
```

---

## Complement Rule

```
P(A')

=

1−P(A)
```

---

## Addition Theorem

```
P(A∪B)

=

P(A)

+

P(B)

−

P(A∩B)
```

---

## Mutually Exclusive Events

```
P(A∪B)

=

P(A)

+

P(B)
```

---

## Probability Limits

```
0≤P(A)≤1
```

---

## Impossible Event

```
P(∅)=0
```

---

## Sure Event

```
P(S)=1
```

---

# Chapter Summary

- A **random experiment** is an experiment whose outcome cannot be predicted with certainty.
- The **sample space** is the set of all possible outcomes, while an **event** is any subset of the sample space.
- Events may be **simple**, **compound**, **sure**, **impossible**, **mutually exclusive**, **complementary**, or **exhaustive**.
- The **axiomatic approach** defines probability using three fundamental axioms, ensuring that every probability lies between **0 and 1**.
- For equally likely outcomes, the probability of an event is the ratio of favourable outcomes to the total number of outcomes.
- The **complement rule** and the **addition theorem** are essential tools for solving probability problems.
- Probability provides a mathematical framework for analyzing uncertainty and supports decision-making in science, engineering, economics, medicine, artificial intelligence, and everyday life.
