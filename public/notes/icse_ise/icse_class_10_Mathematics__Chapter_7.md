# Chapter 7: Remainder and Factor Theorems

> **Board:** ICSE
> **Class:** 10
> **Subject:** Mathematics
> **Chapter:** Remainder and Factor Theorems

---

# Introduction

Polynomial division is an important concept in algebra. Instead of performing lengthy polynomial division every time, the **Remainder Theorem** and **Factor Theorem** provide quick methods to determine the remainder and factors of a polynomial. These theorems are widely used for simplifying polynomial expressions, finding unknown coefficients, and completely factorizing higher-degree polynomials.

---

# 1. Polynomial

## Definition

A **Polynomial** is an algebraic expression consisting of variables and constants combined using addition, subtraction, and multiplication, where the exponents of the variables are non-negative integers.

---

## General Form

```
P(x)

=

aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀
```

where

- **aₙ ≠ 0**
- **n** is the degree of the polynomial.

---

## Examples

```
2x² + 5x − 3
```

```
x³ − 4x + 6
```

```
5x⁴ + 2x² − 9
```

---

# 2. Remainder Theorem

## Statement

If a polynomial

```
P(x)
```

is divided by

```
(x − a)
```

then the remainder is

```
P(a)
```

---

## Formula

If

```
P(x)

÷

(x − a)
```

then

```
Remainder

=

P(a)
```

---

## Example

Find the remainder when

```
P(x)

=

x² + 5x + 6
```

is divided by

```
(x − 2)
```

### Solution

```
P(2)

=

2² + 5(2) + 6

=

4 + 10 + 6

=

20
```

### Answer

```
Remainder = 20
```

---

# 3. Factor Theorem

## Statement

A polynomial

```
P(x)
```

has

```
(x − a)
```

as a factor **if and only if**

```
P(a) = 0
```

---

## Formula

If

```
P(a)=0
```

then

```
(x − a)
```

is a factor.

---

## Example

Check whether

```
(x − 3)
```

is a factor of

```
x² − 5x + 6
```

### Solution

```
P(3)

=

9 −15 +6

=

0
```

Since

```
P(3)=0
```

Therefore,

```
(x−3)
```

is a factor.

---

# 4. Finding Unknown Constants

The Remainder and Factor Theorems help determine unknown coefficients in a polynomial.

---

## Procedure

1. Substitute the given value of

```
x
```

into the polynomial.

2. Use

```
P(a)=0
```

or the given remainder.

3. Solve the resulting linear equation.

---

## Example

Find

```
k
```

if

```
(x−2)
```

is a factor of

```
x² + kx − 6
```

### Solution

```
P(2)

=

4 +2k −6

=

0
```

```
2k−2=0
```

```
k=1
```

---

# 5. Complete Factorization

Higher-degree polynomials can be factorized completely using the Factor Theorem.

---

## Steps

1. Find one factor using the Factor Theorem.
2. Divide the polynomial by that factor.
3. Obtain the quotient.
4. Factorize the quotient further.

---

## Example

Factorize

```
x³ −6x² +11x −6
```

### Step 1

Check

```
P(1)
```

```
1−6+11−6

=

0
```

Hence,

```
(x−1)
```

is a factor.

---

### Step 2

Divide by

```
(x−1)
```

Quotient

```
x²−5x+6
```

---

### Step 3

Factorize

```
x²−5x+6
```

```
(x−2)(x−3)
```

---

### Final Answer

```
(x−1)(x−2)(x−3)
```

---

# 6. Simultaneous Application

Sometimes two unknown coefficients are found using two different factor or remainder conditions.

---

## Example

Find

```
a

and

b
```

if

```
P(x)

=

x³ + ax + b
```

has

```
(x−1)

and

(x−2)
```

as factors.

---

### Solution

Using

```
P(1)=0
```

```
1+a+b=0
```

Using

```
P(2)=0
```

```
8+2a+b=0
```

Subtract

```
(8+2a+b)

−

(1+a+b)

=

0
```

```
7+a=0
```

```
a=−7
```

Substitute into

```
1+a+b=0
```

```
1−7+b=0
```

```
b=6
```

---

# Synthetic Division (Brief Overview)

Synthetic division is a shortcut method for dividing a polynomial by a linear factor of the form

```
(x−a)
```

It is commonly used after identifying a factor using the Factor Theorem.

---

# Relationship Between the Two Theorems

| Remainder Theorem                          | Factor Theorem                        |
| ------------------------------------------ | ------------------------------------- |
| Gives the remainder when divided by (x−a). | Determines whether (x−a) is a factor. |
| Remainder = P(a)                           | If P(a)=0, then (x−a) is a factor.    |

---

# Applications

The Remainder and Factor Theorems are used in:

- Polynomial factorization
- Solving polynomial equations
- Finding unknown coefficients
- Algebraic simplification
- Curve analysis
- Computer algorithms
- Engineering and physics calculations

---

# Solved Examples

## Example 1

### Question

Find the remainder when

```
P(x)=3x²−2x+5
```

is divided by

```
(x−1)
```

### Solution

```
P(1)

=

3−2+5

=

6
```

### Answer

```
6
```

---

## Example 2

### Question

Check whether

```
(x+2)
```

is a factor of

```
x²+5x+6
```

### Solution

Here,

```
a=−2
```

```
P(−2)

=

4−10+6

=

0
```

Hence,

```
(x+2)
```

is a factor.

### Answer

```
Yes
```

---

## Example 3

### Question

Find

```
k
```

if

```
(x−4)
```

is a factor of

```
x²+kx−12
```

### Solution

```
P(4)

=

16+4k−12

=

0
```

```
4+4k=0
```

```
k=−1
```

### Answer

```
−1
```

---

## Example 4

### Question

Factorize

```
x³−4x²−7x+10
```

given that

```
(x−5)
```

is a factor.

### Solution

Divide the polynomial by

```
(x−5)
```

Quotient

```
x²+x−2
```

Factorize

```
(x+2)(x−1)
```

Final Answer

```
(x−5)(x+2)(x−1)
```

---

## Example 5

### Question

Find the remainder when

```
P(x)=2x³−5x+1
```

is divided by

```
(x+1)
```

### Solution

```
P(−1)

=

−2+5+1

=

4
```

### Answer

```
4
```

---

# Common Mistakes

- Substituting the wrong value of **x**. Remember that dividing by **(x − a)** means substitute **x = a**, while dividing by **(x + a)** means substitute **x = −a**.
- Confusing the **Remainder Theorem** with the **Factor Theorem**.
- Forgetting that **P(a) = 0** is necessary for **(x − a)** to be a factor.
- Making arithmetic mistakes while evaluating the polynomial.
- Incorrectly factorizing the quotient polynomial after division.
- Ignoring negative signs during substitution.
- Assuming a polynomial has a factor without verification.
- Using synthetic division incorrectly after identifying a factor.

---

# Formula Sheet

| Formula / Rule                      | Description            |
| ----------------------------------- | ---------------------- |
| **Remainder = P(a)**                | Remainder Theorem      |
| **P(a)=0 ⇒ (x−a) is a factor**      | Factor Theorem         |
| **P(−a)=0 ⇒ (x+a) is a factor**     | Factor Theorem         |
| **Divide after finding one factor** | Complete Factorization |
| **Substitute x=a**                  | For divisor (x−a)      |
| **Substitute x=−a**                 | For divisor (x+a)      |

---

# Chapter Summary

- A **Polynomial** is an algebraic expression with variables raised to non-negative integer powers.
- The **Remainder Theorem** states that the remainder obtained when dividing a polynomial **P(x)** by **(x − a)** is **P(a)**.
- The **Factor Theorem** states that **(x − a)** is a factor of **P(x)** if and only if **P(a) = 0**.
- These theorems help determine unknown coefficients, verify factors, and simplify polynomial division.
- Higher-degree polynomials can be completely factorized by first identifying one factor using the **Factor Theorem**, then dividing to obtain the remaining factors.
- Synthetic division provides a quicker method for dividing a polynomial by a linear factor.
- The Remainder and Factor Theorems are fundamental tools in algebra and are frequently tested in ICSE Class 10 board examinations.

# ICSE Class 10 Mathematics

