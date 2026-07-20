# Chapter 8: Sequences and Series

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Sequences and Series

---

# Introduction

A **Sequence** is an ordered list of numbers arranged according to a specific rule, while a **Series** is the sum of the terms of a sequence. Sequences and series are widely used in **finance, economics, computer science, engineering, statistics, population growth, and physics**. This chapter mainly focuses on **Arithmetic Progressions (AP), Geometric Progressions (GP), Harmonic Progressions (HP), Arithmetic Mean (AM), Geometric Mean (GM), Harmonic Mean (HM), and their properties**.

---

# 1. Sequence

## Definition

A **Sequence** is an ordered arrangement of numbers following a definite pattern.

### Examples

```
2, 4, 6, 8, ...
```

```
1, 3, 9, 27, ...
```

---

## Types of Sequences

- Arithmetic Sequence
- Geometric Sequence
- Harmonic Sequence
- Fibonacci Sequence

---

# 2. Series

## Definition

A **Series** is obtained by adding the terms of a sequence.

### Example

```
2 + 4 + 6 + 8 + ...
```

---

# Difference Between Sequence and Series

| Sequence                      | Series                     |
| ----------------------------- | -------------------------- |
| Ordered list of numbers       | Sum of the sequence        |
| Terms are separated by commas | Terms are connected by '+' |

---

# 3. Arithmetic Progression (AP)

## Definition

A sequence in which the difference between consecutive terms is constant.

---

## General Form

```
a, a+d, a+2d, ...
```

where

- **a** = First term
- **d** = Common difference

---

## nth Term of AP

```
aₙ

=

a+(n−1)d
```

---

## Sum of First n Terms

```
Sₙ

=

n/2

[2a+(n−1)d]
```

or

```
Sₙ

=

n(a+l)/2
```

where **l** is the last term.

---

## Example

```
a=5

d=3

Find 10th term.
```

Solution

```
a₁₀

=

5+9×3

=

32
```

---

# 4. Arithmetic Mean (AM)

## Definition

If **A** is the arithmetic mean between **a** and **b**, then

```
a, A, b
```

are in Arithmetic Progression.

---

## Formula

```
A

=

(a+b)/2
```

---

## Example

Between

```
8

and

18
```

```
AM

=

13
```

---

# 5. Geometric Progression (GP)

## Definition

A sequence in which each term is obtained by multiplying the previous term by a constant ratio.

---

## General Form

```
a, ar, ar², ar³, ...
```

where

- **a** = First term
- **r** = Common ratio

---

## nth Term

```
aₙ

=

arⁿ⁻¹
```

---

## Sum of First n Terms

For

```
r≠1
```

```
Sₙ

=

a(rⁿ−1)

/

(r−1)
```

or

```
Sₙ

=

a(1−rⁿ)

/

(1−r)
```

---

## Sum to Infinity

If

```
|r|<1
```

```
S∞

=

a

/

(1−r)
```

---

## Example

```
a=3

r=2

Find 5th term.
```

Solution

```
a₅

=

3×2⁴

=

48
```

---

# 6. Geometric Mean (GM)

## Definition

If

```
a,G,b
```

are in GP,

then

```
G²

=

ab
```

---

## Formula

```
G

=

√ab
```

---

## Example

Between

```
4

and

25
```

```
GM

=

10
```

---

# 7. Harmonic Progression (HP)

## Definition

A sequence is in Harmonic Progression if the reciprocals of its terms form an Arithmetic Progression.

---

### Example

```
1,

1/2,

1/3,

1/4,...
```

---

# 8. Harmonic Mean (HM)

## Formula

```
HM

=

2ab

/

(a+b)
```

---

## Example

Between

```
4

and

12
```

```
HM

=

96/16

=

6
```

---

# 9. Relationship Between Means

For two positive numbers,

```
AM ≥ GM ≥ HM
```

---

## Important Relation

```
AM × HM

=

GM²
```

---

# 10. Inserting Means

---

## Arithmetic Means

Between

```
a

and

b
```

Insert

```
n
```

AMs.

Common difference

```
d

=

(b−a)/(n+1)
```

---

## Geometric Means

Common ratio

```
r

=

(b/a)^(1/(n+1))
```

---

# 11. Special Series

---

## Sum of Natural Numbers

```
1+2+...

+n

=

n(n+1)/2
```

---

## Sum of Squares

```
1²+2²+...

+n²

=

n(n+1)(2n+1)/6
```

---

## Sum of Cubes

```
1³+2³+...

+n³

=

[n(n+1)/2]²
```

---

# Difference Between AP and GP

| AP                     | GP                  |
| ---------------------- | ------------------- |
| Common Difference      | Common Ratio        |
| Addition               | Multiplication      |
| nth Term: **a+(n−1)d** | nth Term: **arⁿ⁻¹** |

---

# Flowchart

```
         SEQUENCES & SERIES
                 │
      ┌──────────┼──────────┐
      ▼          ▼          ▼
 Sequence      Series    Progressions
                             │
          ┌──────────────────┼──────────────────┐
          ▼                  ▼                  ▼
         AP                 GP                 HP
          │                  │                  │
          ▼                  ▼                  ▼
         AM                 GM                 HM
          │                  │
          └──────────┬───────┘
                     ▼
               Important Relations
```

---

# Important Formulae

| Concept         | Formula                 |
| --------------- | ----------------------- |
| AP nth Term     | **aₙ = a + (n−1)d**     |
| AP Sum          | **Sₙ = n/2[2a+(n−1)d]** |
| GP nth Term     | **aₙ = arⁿ⁻¹**          |
| GP Sum          | **Sₙ = a(rⁿ−1)/(r−1)**  |
| GP Infinite Sum | **a/(1−r)**             |
| Arithmetic Mean | **(a+b)/2**             |
| Geometric Mean  | **√ab**                 |
| Harmonic Mean   | **2ab/(a+b)**           |
| Relation        | **AM × HM = GM²**       |
| Inequality      | **AM ≥ GM ≥ HM**        |

---

# Applications

- Compound interest calculations.
- Population growth models.
- Radioactive decay.
- Computer algorithms.
- Financial planning.
- Signal processing.
- Engineering analysis.
- Artificial Intelligence.
- Statistics.
- Data Science.

---

# Solved Examples

## Example 1

### Question

Find the 15th term of an AP with

```
a=7

d=4
```

### Solution

```
a₁₅

=

7+14×4

=

63
```

### Answer

```
63
```

---

## Example 2

### Question

Find the sum of the first

```
20
```

terms of the AP

```
5,8,11,...
```

### Solution

```
a=5

d=3
```

```
S₂₀

=

20/2

[10+57]

=

670
```

### Answer

```
670
```

---

## Example 3

### Question

Find the 6th term of the GP

```
2,6,18,...
```

### Solution

```
a=2

r=3
```

```
a₆

=

2×3⁵

=

486
```

### Answer

```
486
```

---

## Example 4

### Question

Find the Geometric Mean between

```
9

and

36
```

### Solution

```
GM

=

√(9×36)

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

Find the Harmonic Mean between

```
8

and

24
```

### Solution

```
HM

=

2×8×24

/

32

=

12
```

### Answer

```
12
```

---

# Common Mistakes

- Confusing the **common difference** in AP with the **common ratio** in GP.
- Using the AP formula for GP problems and vice versa.
- Forgetting that the GP infinite sum exists only when **|r| < 1**.
- Using incorrect formulas for AM, GM, and HM.
- Ignoring the relation **AM ≥ GM ≥ HM** for positive numbers.
- Making errors while inserting arithmetic or geometric means.

---

# Exam Tips

- Identify whether the sequence is an **AP**, **GP**, or **HP** before choosing a formula.
- Memorize the formulas for the **nth term** and **sum** of AP and GP.
- Remember that the infinite GP sum is valid only for **|r| < 1**.
- Practice problems involving **means** and their relationships.
- Check whether the required answer is a **term** or a **sum** before solving.

---

# Quick Revision

- Sequence → Ordered list of numbers.
- Series → Sum of sequence terms.
- AP → Constant difference.
- GP → Constant ratio.
- HP → Reciprocals form an AP.
- AP nth Term → **a + (n−1)d**
- GP nth Term → **arⁿ⁻¹**
- AP Sum → **n/2[2a+(n−1)d]**
- GP Sum → **a(rⁿ−1)/(r−1)**
- GP Infinite Sum → **a/(1−r)**
- AM → **(a+b)/2**
- GM → **√ab**
- HM → **2ab/(a+b)**
- Relation → **AM × HM = GM²**
- Inequality → **AM ≥ GM ≥ HM**

---

# Chapter Summary

- A **sequence** is an ordered collection of numbers, while a **series** is the sum of the terms of a sequence.
- The three major progressions studied are **Arithmetic Progression (AP)**, **Geometric Progression (GP)**, and **Harmonic Progression (HP)**, each defined by a specific numerical pattern.
- Important formulas include the **nth term** and **sum of n terms** for AP and GP, as well as the **sum to infinity** for a GP when **|r| < 1**.
- The **Arithmetic Mean (AM)**, **Geometric Mean (GM)**, and **Harmonic Mean (HM)** are important averages connected by the relation **AM × HM = GM²** and satisfy the inequality **AM ≥ GM ≥ HM**.
- Special series such as the sums of **natural numbers, squares, and cubes** are frequently used in mathematical proofs and problem-solving.
- Sequences and series have extensive applications in **finance, economics, computer science, engineering, statistics, physics, artificial intelligence, and data analysis**, making them an essential foundation for higher mathematics.

# ISC Class 11 Mathematics

