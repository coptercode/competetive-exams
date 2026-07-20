# Chapter 7: Binomial Theorem

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Binomial Theorem

---

# Introduction

The **Binomial Theorem** provides a systematic method for expanding expressions of the form

```
(a + b)ⁿ
```

where **n** is a positive integer. Instead of repeated multiplication, the theorem gives a direct formula involving **binomial coefficients**. It has applications in algebra, probability, calculus, numerical analysis, and computer science.

This chapter introduces the Binomial Theorem, **Pascal's Triangle**, the **general term**, the **middle term(s)**, and numerical applications of binomial expansions.

---

# 1. Historical Background

The Binomial Theorem was studied by mathematicians in ancient India, Persia, and China.

Important contributors include:

- Pingala
- Halayudha
- Al-Karaji
- Omar Khayyam
- Isaac Newton (extended the theorem to non-integral powers)

The triangular arrangement of binomial coefficients is known as **Pascal's Triangle**, although it was known in many civilizations before Pascal.

---

# 2. Binomial Expression

A **binomial** is an algebraic expression containing two terms.

### Examples

```
x + y
```

```
2a − b
```

```
3x + 5
```

---

# 3. Binomial Theorem

For any positive integer

```
n
```

the expansion of

```
(a+b)ⁿ
```

is

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

## General Expansion

```
(a+b)ⁿ

=

Σ

ⁿCᵣ

aⁿ⁻ʳbʳ
```

where

```
r = 0,1,2,...,n
```

---

# 4. Binomial Coefficients

The numbers

```
ⁿC₀

ⁿC₁

ⁿC₂

...
```

are called **binomial coefficients**.

### Formula

```
ⁿCᵣ

=

n!

/

r!(n−r)!
```

---

## Properties

### First and Last Coefficients

```
ⁿC₀=1
```

```
ⁿCₙ=1
```

---

### Symmetry Property

```
ⁿCᵣ

=

ⁿC₍ₙ₋ᵣ₎
```

---

### Pascal's Identity

```
ⁿCᵣ

+

ⁿC₍ᵣ₋₁₎

=

ⁿ⁺¹Cᵣ
```

---

# 5. Pascal's Triangle

The coefficients of the binomial expansion can be obtained using Pascal's Triangle.

```
                1

              1   1

            1   2   1

          1   3   3   1

        1   4   6   4   1

      1   5  10  10   5   1

    1   6  15  20  15   6   1
```

Each number is obtained by adding the two numbers directly above it.

---

# 6. Expansion of Small Powers

### (a + b)²

```
a²

+

2ab

+

b²
```

---

### (a + b)³

```
a³

+

3a²b

+

3ab²

+

b³
```

---

### (a − b)²

```
a²

−

2ab

+

b²
```

---

### (a − b)³

```
a³

−

3a²b

+

3ab²

−

b³
```

---

# 7. General Term

The **general term** of the expansion is useful when only one particular term is required.

---

## Formula

The

```
(r+1)th
```

term is

```
Tᵣ₊₁

=

ⁿCᵣ

aⁿ⁻ʳbʳ
```

where

```
r=0,1,2,...,n
```

---

## Example

Find the fourth term of

```
(x+2)⁵
```

Here

```
n=5
```

Fourth term

```
r=3
```

```
T₄

=

⁵C₃

x²

2³
```

```
=10×8x²

=80x²
```

---

# 8. Middle Term(s)

The number of terms in the expansion is

```
n+1
```

---

## Case 1

If

```
n
```

is even,

there is **one middle term**.

Middle term

```
[(n/2)+1]th
```

---

## Case 2

If

```
n
```

is odd,

there are **two middle terms**.

They are

```
[(n+1)/2]th

and

[(n+3)/2]th
```

---

## Example

Expansion of

```
(a+b)⁶
```

contains

```
7 terms
```

Middle term

```
4th term
```

---

## Example

Expansion of

```
(a+b)⁵
```

contains

```
6 terms
```

Middle terms

```
3rd

and

4th
```

---

# 9. Important Binomial Identities

### Sum of Coefficients

Substitute

```
a=1

b=1
```

```
(1+1)ⁿ

=2ⁿ
```

Hence,

```
ⁿC₀

+

ⁿC₁

+...

+

ⁿCₙ

=

2ⁿ
```

---

### Alternating Sum

Substitute

```
a=1

b=−1
```

```
(1−1)ⁿ=0
```

Therefore,

```
ⁿC₀

−

ⁿC₁

+

ⁿC₂

−...

=0
```

for

```
n≥1
```

---

# 10. Numerical Expansions

---

## Example

Expand

```
(x+1)⁴
```

Using the theorem,

```
x⁴

+

4x³

+

6x²

+

4x

+

1
```

---

## Example

Expand

```
(2x−3)³
```

```
8x³

−

36x²

+

54x

−

27
```

---

# 11. Applications of Binomial Theorem

The Binomial Theorem is used in:

- Algebraic expansions
- Approximation techniques
- Probability
- Statistics
- Calculus
- Numerical methods
- Computer algorithms
- Engineering computations

---

# Solved Examples

### Example 1

Expand

```
(a+b)²
```

**Solution**

```
a²

+

2ab

+

b²
```

---

### Example 2

Expand

```
(x+2)³
```

**Solution**

```
x³

+

6x²

+

12x

+

8
```

---

### Example 3

Find the coefficient of

```
x²
```

in

```
(x+3)⁴
```

**Solution**

General term

```
Tᵣ₊₁

=

⁴Cᵣ

x⁴⁻ʳ

3ʳ
```

For

```
x²
```

```
4−r=2
```

```
r=2
```

Coefficient

```
⁴C₂×3²

=6×9

=54
```

---

### Example 4

Find the fifth term of

```
(a+b)⁸
```

**Solution**

Fifth term

```
r=4
```

```
T₅

=

⁸C₄

a⁴b⁴
```

```
=70a⁴b⁴
```

---

### Example 5

How many terms are present in

```
(x+y)¹⁰
```

**Solution**

Number of terms

```
10+1

=11
```

---

### Example 6

Find the sum of coefficients of

```
(2x+1)⁵
```

**Solution**

Put

```
x=1
```

```
(2+1)⁵

=3⁵

=243
```

---

# Common Mistakes

- Confusing the exponent **n** with the term number **r**.
- Using the wrong formula for the general term.
- Forgetting that the first term corresponds to **r = 0**.
- Incorrectly calculating binomial coefficients.
- Missing negative signs while expanding **(a − b)ⁿ**.
- Confusing the coefficient of a term with the term itself.
- Incorrectly identifying the middle term(s).
- Forgetting to simplify factorial expressions before calculation.

---

# Formula Sheet

### Binomial Theorem

```
(a+b)ⁿ

=

Σ

ⁿCᵣ

aⁿ⁻ʳbʳ
```

---

### Binomial Coefficient

```
ⁿCᵣ

=

n!

/

r!(n−r)!
```

---

### General Term

```
Tᵣ₊₁

=

ⁿCᵣ

aⁿ⁻ʳbʳ
```

---

### Number of Terms

```
n+1
```

---

### Middle Term (n Even)

```
[(n/2)+1]th
```

---

### Middle Terms (n Odd)

```
[(n+1)/2]th

and

[(n+3)/2]th
```

---

### Symmetry Property

```
ⁿCᵣ

=

ⁿC₍ₙ₋ᵣ₎
```

---

### Sum of Coefficients

```
2ⁿ
```

---

### Alternating Sum

```
0
```

for

```
n≥1
```

---

# Chapter Summary

- A **binomial** is an algebraic expression consisting of two terms.
- The **Binomial Theorem** provides a direct formula for expanding **(a + b)ⁿ**, where **n** is a positive integer.
- The coefficients in the expansion are called **binomial coefficients** and are given by **ⁿCᵣ = n! / [r!(n − r)!]**.
- **Pascal's Triangle** provides a convenient way to obtain binomial coefficients.
- The **general term** allows any specific term in the expansion to be found without expanding the entire expression.
- The number of terms in the expansion is **n + 1**, and the position of the middle term(s) depends on whether **n** is even or odd.
- Useful identities include the **sum of coefficients** and the **alternating sum of coefficients**.
- The Binomial Theorem has extensive applications in algebra, probability, statistics, calculus, and scientific computations.

# CBSE Class 11 Mathematics

