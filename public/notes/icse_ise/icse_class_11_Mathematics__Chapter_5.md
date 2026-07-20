# Chapter 5: Quadratic Equations

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Quadratic Equations

---

# Introduction

A **Quadratic Equation** is a polynomial equation of degree **2**, generally written in the form:

```
ax² + bx + c = 0
```

where

- **a, b, c** are constants
- **a ≠ 0**

Quadratic equations are fundamental in algebra and have applications in **physics, engineering, economics, optimization, projectile motion, and computer graphics**. This chapter covers **methods of solving quadratic equations, nature of roots, relations between roots and coefficients, symmetric functions of roots, equations with complex coefficients, and common root conditions**.

---

# 1. Quadratic Equation

## Standard Form

```
ax² + bx + c = 0

(a ≠ 0)
```

---

## Examples

```
x² − 5x + 6 = 0
```

```
3x² + 2x − 1 = 0
```

---

# 2. Methods of Solving Quadratic Equations

---

## (i) Factorization

### Example

```
x² − 5x + 6 = 0

(x−2)(x−3)=0

x=2,3
```

---

## (ii) Completing the Square

### Formula

```
x²+bx

=

(x+b/2)²−(b/2)²
```

---

## (iii) Quadratic Formula

### Formula

```
x

=

(-b ± √(b²−4ac))

/

2a
```

---

# 3. Discriminant

## Definition

The expression

```
D = b² − 4ac
```

is called the **Discriminant**.

---

# Nature of Roots

| Discriminant | Nature of Roots         |
| ------------ | ----------------------- |
| D > 0        | Two distinct real roots |
| D = 0        | Equal real roots        |
| D < 0        | Complex conjugate roots |

---

## Perfect Square Condition

If

```
D > 0
```

and **D** is a perfect square,

the roots are **rational**.

Otherwise,

they are **irrational**.

---

# 4. Complex Roots

If

```
D < 0
```

then

```
x

=

(-b ± i√(-D))

/

2a
```

---

## Example

```
x²+16=0

x=±4i
```

---

# 5. Relation Between Roots and Coefficients

Let

```
α

and

β
```

be the roots of

```
ax²+bx+c=0
```

Then

### Sum of Roots

```
α+β

=

−b/a
```

---

### Product of Roots

```
αβ

=

c/a
```

---

# 6. Forming a Quadratic Equation

If roots are

```
α

and

β
```

then the equation is

```
x²

−

(α+β)x

+

αβ

=

0
```

---

### General Form

```
ax²

−

a(α+β)x

+

aαβ

=

0
```

---

# 7. Symmetric Functions of Roots

Using

```
α+β=S

αβ=P
```

---

## Sum of Squares

```
α²+β²

=

S²−2P
```

---

## Sum of Cubes

```
α³+β³

=

S³−3PS
```

---

## Reciprocal Sum

```
1/α+1/β

=

S/P
```

---

## Reciprocal Product

```
1/αβ

=

1/P
```

---

## Example

Given

```
α+β=5

αβ=6
```

Find

```
α²+β²
```

Solution

```
25−12=13
```

---

# 8. Signs of Roots

For

```
ax²+bx+c=0
```

---

## Both Roots Positive

Conditions

```
α+β>0

αβ>0
```

---

## Both Roots Negative

Conditions

```
α+β<0

αβ>0
```

---

## Roots of Opposite Signs

Condition

```
αβ<0
```

---

# 9. Common Root of Two Quadratic Equations

Suppose

```
f(x)=0

g(x)=0
```

have one common root.

---

## Method

- Let common root be **α**.
- Use relations between roots.
- Eliminate the unknown root.
- Obtain the required condition.

---

# 10. Equations with Complex Coefficients

Quadratic equations may contain imaginary coefficients.

Example

```
x²+(2+i)x+(3−i)=0
```

Solve using the quadratic formula.

---

# Difference Between Real and Complex Roots

| Real Roots         | Complex Roots          |
| ------------------ | ---------------------- |
| D ≥ 0              | D < 0                  |
| Lie on number line | Lie on Argand plane    |
| No imaginary part  | Include imaginary part |

---

# Difference Between Equal and Distinct Roots

| Equal Roots | Distinct Roots   |
| ----------- | ---------------- |
| D = 0       | D > 0            |
| Same value  | Different values |

---

# Flowchart

```
          QUADRATIC EQUATIONS
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
 Standard Form  Methods      Discriminant
                   │              │
                   ▼              ▼
          Nature of Roots   Complex Roots
                   │
                   ▼
      Roots & Coefficients
                   │
                   ▼
      Symmetric Functions
                   │
                   ▼
      Common Root Conditions
```

---

# Important Formulae

| Concept           | Formula                         |
| ----------------- | ------------------------------- |
| Quadratic Formula | **x = (-b ± √D)/2a**            |
| Discriminant      | **D = b² − 4ac**                |
| Sum of Roots      | **α + β = -b/a**                |
| Product of Roots  | **αβ = c/a**                    |
| Sum of Squares    | **α² + β² = (α+β)² − 2αβ**      |
| Sum of Cubes      | **α³ + β³ = (α+β)³ − 3αβ(α+β)** |
| Reciprocal Sum    | **1/α + 1/β = (α+β)/αβ**        |

---

# Applications

- Projectile motion.
- Area optimization.
- Economics and profit analysis.
- Structural engineering.
- Computer graphics.
- Electrical engineering.
- Robotics.
- Physics.
- Artificial Intelligence.
- Data modeling.

---

# Solved Examples

## Example 1

### Question

Solve

```
x²−7x+12=0
```

### Solution

```
(x−3)(x−4)=0

x=3,4
```

### Answer

```
3

and

4
```

---

## Example 2

### Question

Find the roots of

```
x²+4x+4=0
```

### Solution

```
D=16−16=0

x=-2
```

### Answer

Equal roots

```
−2,−2
```

---

## Example 3

### Question

Find the nature of roots of

```
x²+2x+5=0
```

### Solution

```
D=4−20

=-16<0
```

### Answer

Complex conjugate roots.

---

## Example 4

### Question

If the roots are

```
2

and

5
```

form the quadratic equation.

### Solution

```
x²−7x+10=0
```

### Answer

```
x²−7x+10=0
```

---

## Example 5

### Question

If

```
α+β=6

αβ=8
```

find

```
α²+β²
```

### Solution

```
36−16

=

20
```

### Answer

```
20
```

---

# Common Mistakes

- Forgetting that **a ≠ 0** in a quadratic equation.
- Using the wrong sign in the quadratic formula.
- Confusing the **discriminant** with the roots.
- Forgetting that **complex roots occur in conjugate pairs**.
- Making algebraic errors while forming equations from given roots.
- Incorrectly applying formulas for symmetric functions of roots.

---

# Exam Tips

- Always calculate the **discriminant first** to identify the nature of the roots.
- Memorize the relations **α + β = -b/a** and **αβ = c/a**.
- Use factorization whenever possible before applying the quadratic formula.
- Verify answers by substituting the roots into the original equation.
- Practice problems involving common roots and symmetric functions, as they are frequently asked in ISC examinations.

---

# Quick Revision

- Standard Form → **ax² + bx + c = 0**
- Discriminant → **D = b² − 4ac**
- Quadratic Formula → **(-b ± √D)/2a**
- Sum of Roots → **-b/a**
- Product of Roots → **c/a**
- Equal Roots → **D = 0**
- Distinct Real Roots → **D > 0**
- Complex Roots → **D < 0**
- Equation from Roots → **x² − (α+β)x + αβ = 0**
- Sum of Squares → **(α+β)² − 2αβ**

---

# Chapter Summary

- A **quadratic equation** is a polynomial equation of degree **2**, expressed as **ax² + bx + c = 0**, where **a ≠ 0**.
- Quadratic equations can be solved using **factorization, completing the square, or the quadratic formula**, depending on the nature of the equation.
- The **discriminant (D = b² − 4ac)** determines whether the roots are **real, equal, distinct, irrational, or complex**.
- The **sum and product of roots** are directly related to the coefficients of the equation, enabling the formation of new equations and evaluation of **symmetric functions** without explicitly finding the roots.
- Quadratic equations may also involve **complex coefficients**, and equations with a negative discriminant have **complex conjugate roots**.
- Understanding quadratic equations is fundamental for advanced topics in **algebra, calculus, coordinate geometry, optimization, engineering, and applied mathematics**.

# ISC Class 11 Mathematics

