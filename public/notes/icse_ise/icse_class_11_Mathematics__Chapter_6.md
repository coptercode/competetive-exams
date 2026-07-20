# Chapter 6: Permutations and Combinations

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Permutations and Combinations

---

# Introduction

**Permutations and Combinations** are fundamental concepts in counting techniques. They help determine the number of possible arrangements or selections of objects without actually listing them. These concepts are widely used in **probability, statistics, cryptography, computer science, scheduling, coding theory, and combinatorics**.

---

# 1. Fundamental Principle of Counting

## Definition

If one event can occur in **m** ways and another independent event can occur in **n** ways, then both events together can occur in

```
m × n
```

ways.

---

## Addition Principle

If two events cannot occur simultaneously, then the total number of ways is

```
m + n
```

---

## Example

A shirt can be chosen in **4** ways and trousers in **3** ways.

```
Total ways

=

4 × 3

=

12
```

---

# 2. Factorial Notation

## Definition

The factorial of a positive integer **n** is

```
n!

=

n(n−1)(n−2)...

2×1
```

---

## Special Cases

```
0!

=

1
```

```
1!

=

1
```

---

## Examples

```
5!

=

120
```

```
7!

=

5040
```

---

## Properties

```
n!

=

n(n−1)!
```

```
(n+1)!

=

(n+1)n!
```

---

# 3. Permutations

## Definition

A **Permutation** is an arrangement of objects where **order matters**.

---

## Formula

```
ⁿPᵣ

=

n!

/

(n−r)!
```

where

```
0 ≤ r ≤ n
```

---

## Example

Arrange 3 letters from

```
A,B,C,D
```

```
⁴P₃

=

4!

/

1!

=

24
```

---

# Special Cases

### All Objects Arranged

```
ⁿPₙ

=

n!
```

---

### One Object Selected

```
ⁿP₁

=

n
```

---

# 4. Permutations with Repetition

If repetition is allowed,

```
Number of arrangements

=

nʳ
```

---

## Example

Form 4-digit numbers using

```
0–9
```

```
10⁴

=

10000
```

---

# 5. Permutations of Identical Objects

If

```
n
```

objects contain repeated objects

```
p,q,r...
```

then

```
Number of arrangements

=

n!

/

(p!q!r!...)
```

---

## Example

Arrange the letters of

```
BOOK
```

```
4!

/

2!

=

12
```

---

# 6. Circular Permutations

## Formula

For arranging

```
n
```

distinct objects in a circle,

```
(n−1)!
```

---

## Example

Arrange

```
5
```

people around a table.

```
(5−1)!

=

24
```

---

# 7. Restricted Arrangements

---

## Objects Together

Treat the grouped objects as one unit.

---

## Objects Apart

Calculate total arrangements and subtract arrangements where they are together.

---

## Example

Arrange

```
A,B,C,D
```

such that

```
A and B are together.
```

Treat

```
AB
```

as one object.

```
3!

×

2!

=

12
```

---

# 8. Combinations

## Definition

A **Combination** is a selection of objects where **order does not matter**.

---

## Formula

```
ⁿCᵣ

=

n!

/

r!(n−r)!
```

---

## Example

Choose

```
3
```

students from

```
8
```

students.

```
⁸C₃

=

56
```

---

# 9. Relation Between Permutation and Combination

```
ⁿPᵣ

=

ⁿCᵣ × r!
```

or

```
ⁿCᵣ

=

ⁿPᵣ

/

r!
```

---

# 10. Properties of Combinations

---

## Symmetry Property

```
ⁿCᵣ

=

ⁿCₙ₋ᵣ
```

---

## Pascal's Identity

```
ⁿCᵣ

+

ⁿCᵣ₋₁

=

ⁿ⁺¹Cᵣ
```

---

## Sum of All Combinations

```
ⁿC₀

+

ⁿC₁

+

...

+

ⁿCₙ

=

2ⁿ
```

---

## Greatest Binomial Coefficient

If

```
n
```

is even,

greatest term

```
ⁿCₙ⁄₂
```

If

```
n
```

is odd,

greatest terms

```
ⁿC(n−1)/2

and

ⁿC(n+1)/2
```

---

# Difference Between Permutation and Combination

| Permutation                  | Combination                      |
| ---------------------------- | -------------------------------- |
| Order matters                | Order does not matter            |
| Arrangement                  | Selection                        |
| Formula: **ⁿPᵣ = n!/(n−r)!** | Formula: **ⁿCᵣ = n!/[r!(n−r)!]** |

---

# 11. Factorial Simplification

Example

```
8!

/

6!

=

8×7

=

56
```

---

Example

```
10!

/

8!

=

10×9

=

90
```

---

# Flowchart

```
        PERMUTATIONS & COMBINATIONS
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
 Fundamental     Factorial   Counting
 Principle
                    │
                    ▼
            Permutations
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
 Ordinary   Repetition   Circular
                    │
                    ▼
      Identical Objects
                    │
                    ▼
            Combinations
                    │
                    ▼
      Pascal's Identity & Properties
```

---

# Important Formulae

| Concept              | Formula                 |
| -------------------- | ----------------------- |
| Factorial            | **n! = n(n−1)!**        |
| Permutation          | **ⁿPᵣ = n!/(n−r)!**     |
| Combination          | **ⁿCᵣ = n!/[r!(n−r)!]** |
| Relation             | **ⁿPᵣ = ⁿCᵣ × r!**      |
| Circular Permutation | **(n−1)!**              |
| Identical Objects    | **n!/(p!q!r!...)**      |
| With Repetition      | **nʳ**                  |
| Pascal Identity      | **ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ** |
| Sum of Coefficients  | **2ⁿ**                  |

---

# Applications

- Probability.
- Statistics.
- Cryptography.
- Password generation.
- Tournament scheduling.
- Computer algorithms.
- Data science.
- Genetics.
- Artificial Intelligence.
- Network routing.

---

# Solved Examples

## Example 1

### Question

Find

```
⁶P₂
```

### Solution

```
⁶P₂

=

6!

/

4!

=

6×5

=

30
```

### Answer

```
30
```

---

## Example 2

### Question

Find

```
⁸C₂
```

### Solution

```
8!

/

2!6!

=

28
```

### Answer

```
28
```

---

## Example 3

### Question

Arrange the letters of

```
LEVEL
```

### Solution

Letters

```
L=2

E=2

V=1
```

```
5!

/

2!2!

=

30
```

### Answer

```
30
```

---

## Example 4

### Question

Arrange

```
6
```

people around a circular table.

### Solution

```
(6−1)!

=

120
```

### Answer

```
120
```

---

## Example 5

### Question

How many committees of

```
4
```

can be formed from

```
10
```

people?

### Solution

```
¹⁰C₄

=

210
```

### Answer

```
210
```

---

# Common Mistakes

- Confusing **permutations** with **combinations**.
- Forgetting that **order matters** in permutations.
- Using **nPr** instead of **nCr** in selection problems.
- Incorrect handling of repeated objects.
- Forgetting the circular permutation formula **(n−1)!**.
- Simplifying factorials incorrectly.
- Ignoring restrictions such as "together" or "apart."

---

# Exam Tips

- Read the question carefully to determine whether **order matters**.
- Use **nPr** for arrangements and **nCr** for selections.
- Simplify factorials before multiplying large numbers.
- For repeated letters, always divide by the factorial of repeated occurrences.
- In circular arrangements, fix one object first and arrange the rest.

---

# Quick Revision

- Factorial → **n!**
- **0! = 1**
- Permutation → Order matters.
- Combination → Order does not matter.
- **ⁿPᵣ = n!/(n−r)!**
- **ⁿCᵣ = n!/[r!(n−r)!]**
- Circular Arrangement → **(n−1)!**
- Repeated Objects → **n!/(p!q!...)**
- Pascal Identity → **ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ**
- Sum of Binomial Coefficients → **2ⁿ**

---

# Chapter Summary

- **Permutations** deal with the **arrangement** of objects where the **order of selection is important**, whereas **combinations** deal with the **selection** of objects where the **order is not important**.
- The **Fundamental Principle of Counting** and **factorial notation** provide the foundation for solving counting problems.
- Different formulas are used for **ordinary permutations, permutations with repetition, circular permutations, and arrangements of identical objects**.
- The relationship **ⁿPᵣ = ⁿCᵣ × r!** connects permutations and combinations.
- Important identities such as **Pascal's Identity**, the **symmetry property**, and the **sum of binomial coefficients** simplify many counting problems.
- Permutations and combinations are essential tools in **probability, statistics, cryptography, computer science, optimization, artificial intelligence, and decision-making**, making them one of the most important topics in discrete mathematics.

# ISC Class 11 Mathematics

