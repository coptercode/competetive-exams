# Chapter 7: Binomial Theorem

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Binomial Theorem

---

# Introduction

The **Binomial Theorem** provides a systematic method for expanding expressions of the form

```
(a + b)ⁿ
```

where **n** is a positive integer. It is one of the most important topics in algebra and forms the basis for **probability, calculus, sequences and series, approximation techniques, and combinatorics**. This chapter covers the **general term, binomial coefficients, middle terms, independent term, identities, and applications**.

---

# 1. Binomial Expression

## Definition

A **Binomial** is an algebraic expression consisting of **two terms**.

### Examples

```
x + y
```

```
2a − 3b
```

```
5x + 4
```

---

# 2. Binomial Theorem

## Statement

For any positive integer **n**,

```
(a+b)ⁿ

=

ⁿC₀aⁿ

+

ⁿC₁aⁿ⁻¹b

+

ⁿC₂aⁿ⁻²b²

+ ...

+

ⁿCₙbⁿ
```

---

## Sigma Form

```
(a+b)ⁿ

=

Σ

ⁿCᵣaⁿ⁻ʳbʳ

r=0→n
```

---

# 3. General Term

## Formula

The

```
(r+1)th
```

term is

```
T(r+1)

=

ⁿCᵣaⁿ⁻ʳbʳ
```

---

## Example

Find the **5th term** in

```
(x+2)⁸
```

Solution

```
T₅

=

⁸C₄

x⁴

2⁴
```

```
=70×16x⁴

=1120x⁴
```

---

# 4. Number of Terms

For

```
(a+b)ⁿ
```

Number of terms

```
=n+1
```

---

## Example

```
(x+y)¹²
```

contains

```
13 terms
```

---

# 5. Binomial Coefficients

The coefficients are

```
ⁿC₀

ⁿC₁

ⁿC₂

...

ⁿCₙ
```

---

## Properties

### First Property

```
ⁿC₀

=

ⁿCₙ

=

1
```

---

### Symmetry Property

```
ⁿCᵣ

=

ⁿCₙ₋ᵣ
```

---

### Pascal's Identity

```
ⁿCᵣ

+

ⁿCᵣ₋₁

=

ⁿ⁺¹Cᵣ
```

---

### Sum of Coefficients

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

# 6. Middle Term

---

## When n is Even

There is **one middle term**.

Position

```
(n/2)+1
```

---

## Formula

```
T(n/2+1)
```

---

## When n is Odd

There are **two middle terms**.

Positions

```
(n+1)/2

and

(n+3)/2
```

---

# Example

```
(x+y)⁶
```

Middle term

```
4th
```

---

# 7. Independent of x Term

A term is independent of

```
x
```

if the exponent of

```
x
```

becomes

```
0
```

---

## Method

1. Write the general term.
2. Find the exponent of

```
x
```

3. Set exponent equal to

```
0
```

4. Solve for

```
r
```

---

# Example

Find the independent term in

```
(x²+1/x)⁹
```

General term

```
T(r+1)

=

⁹Cᵣ

x¹⁸

x⁻ʳ

x⁻ʳ

=

⁹Cᵣ

x¹⁸⁻³ʳ
```

Set exponent

```
18−3r=0
```

```
r=6
```

Hence,

```
7th term
```

is independent of

```
x
```

---

# 8. Greatest Binomial Coefficient

---

## If

```
n
```

is even

Greatest coefficient

```
ⁿCₙ⁄₂
```

---

## If

```
n
```

is odd

Greatest coefficients

```
ⁿC(n−1)/2

and

ⁿC(n+1)/2
```

---

# 9. Binomial Identities

---

## Identity 1

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

## Identity 2

```
ⁿC₀

−

ⁿC₁

+

ⁿC₂

−...

=

0
```

for

```
n>0
```

---

## Identity 3

```
ⁿC₁

+

2ⁿC₂

+

3ⁿC₃

+...

+

nⁿCₙ

=

n2ⁿ⁻¹
```

---

# 10. Binomial Approximation

When

```
|x|<1
```

```
(1+x)ⁿ

≈

1+nx
```

for small values of

```
x
```

---

## Example

```
(1.02)⁵

≈

1+5(0.02)

=

1.10
```

---

# Difference Between Binomial Expansion and Factorization

| Binomial Expansion    | Factorization             |
| --------------------- | ------------------------- |
| Expands expression    | Converts into factors     |
| Uses Binomial Theorem | Uses algebraic identities |

---

# Flowchart

```
            BINOMIAL THEOREM
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
 Binomial      General Term   Coefficients
                    │
                    ▼
              Middle Terms
                    │
                    ▼
      Independent of x Term
                    │
                    ▼
      Binomial Identities
                    │
                    ▼
          Approximation
```

---

# Important Formulae

| Concept             | Formula                  |
| ------------------- | ------------------------ |
| Binomial Expansion  | **(a+b)ⁿ = Σ ⁿCᵣaⁿ⁻ʳbʳ** |
| General Term        | **T(r+1)=ⁿCᵣaⁿ⁻ʳbʳ**     |
| Number of Terms     | **n+1**                  |
| Symmetry            | **ⁿCᵣ=ⁿCₙ₋ᵣ**            |
| Pascal Identity     | **ⁿCᵣ+ⁿCᵣ₋₁=ⁿ⁺¹Cᵣ**      |
| Sum of Coefficients | **2ⁿ**                   |
| Approximation       | **(1+x)ⁿ≈1+nx**          |

---

# Applications

- Probability.
- Statistics.
- Calculus.
- Numerical analysis.
- Engineering.
- Physics.
- Computer algorithms.
- Artificial Intelligence.
- Financial mathematics.
- Cryptography.

---

# Solved Examples

## Example 1

### Question

Find the **4th term** of

```
(x+3)⁷
```

### Solution

```
T₄

=

⁷C₃

x⁴

3³
```

```
=35×27x⁴
```

```
=945x⁴
```

### Answer

```
945x⁴
```

---

## Example 2

### Question

How many terms are present in

```
(a+b)¹⁰
```

### Solution

```
10+1

=

11
```

### Answer

```
11 terms
```

---

## Example 3

### Question

Find the middle term of

```
(x+y)⁸
```

### Solution

Since

```
n=8
```

Middle term

```
T₅
```

### Answer

```
5th term
```

---

## Example 4

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

## Example 5

### Question

Find the sum of coefficients of

```
(x+2)⁶
```

### Solution

Substitute

```
x=1
```

```
(1+2)⁶

=

3⁶

=

729
```

### Answer

```
729
```

---

# Common Mistakes

- Using the wrong value of **r** in the general term.
- Forgetting that the **(r+1)th term** corresponds to **r**, not the term number itself.
- Confusing **middle term** with the **middle coefficient**.
- Incorrectly applying **Pascal's Identity**.
- Making errors while simplifying powers of variables.
- Forgetting to set the exponent of **x** to zero when finding the independent term.

---

# Exam Tips

- Memorize the **general term formula** thoroughly.
- Remember that **n+1** gives the total number of terms.
- Write the general term first before solving any term-related problem.
- Use **x = 1** to find the **sum of coefficients**.
- Practice questions involving **middle terms** and **independent of x** terms, as they are frequently asked in ISC examinations.

---

# Quick Revision

- Binomial → Expression with two terms.
- Binomial Theorem → Expansion of **(a+b)ⁿ**.
- General Term → **T(r+1)=ⁿCᵣaⁿ⁻ʳbʳ**.
- Number of Terms → **n+1**.
- Symmetry → **ⁿCᵣ=ⁿCₙ₋ᵣ**.
- Pascal Identity → **ⁿCᵣ+ⁿCᵣ₋₁=ⁿ⁺¹Cᵣ**.
- Sum of Coefficients → **2ⁿ**.
- Independent Term → Exponent of variable = **0**.
- Approximation → **(1+x)ⁿ≈1+nx** (for small **x**).

---

# Chapter Summary

- The **Binomial Theorem** provides a direct method for expanding powers of a binomial expression **(a+b)ⁿ** using **binomial coefficients**.
- The **general term** formula enables the calculation of any specific term in the expansion without expanding the entire expression.
- Important concepts include the **number of terms**, **middle term(s)**, **binomial identities**, **Pascal's Identity**, and the determination of the **term independent of x**.
- The theorem also provides useful **approximation formulas** for evaluating expressions when the variable has a small value.
- Binomial coefficients possess several important algebraic properties that simplify calculations and proofs.
- The Binomial Theorem is widely used in **algebra, probability, statistics, calculus, numerical methods, engineering, computer science, and financial mathematics**, making it one of the most fundamental results in mathematics.

# ISC Class 11 Mathematics

