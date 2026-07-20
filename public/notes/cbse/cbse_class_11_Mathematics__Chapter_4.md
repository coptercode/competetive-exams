# Chapter 4: Complex Numbers and Quadratic Equations

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Complex Numbers and Quadratic Equations

---

# Introduction

The set of **real numbers** is not sufficient to solve all algebraic equations. For example, the equation

```
x² + 1 = 0
```

has no real solution because no real number has a square equal to **−1**. To overcome this limitation, mathematicians introduced **complex numbers** by defining the imaginary unit **i**, where

```
i² = −1
```

Complex numbers are widely used in mathematics, physics, engineering, electronics, signal processing, and quantum mechanics. This chapter introduces complex numbers, their algebraic operations, modulus, conjugate, Argand plane, polar form, and the solution of quadratic equations with complex roots.

---

# 1. Need for Complex Numbers

Consider the equation

```
x² + 1 = 0
```

Then,

```
x² = −1
```

Since no real number satisfies this equation, we define the imaginary unit:

```
i = √−1
```

Therefore,

```
i² = −1
```

Using **i**, the solutions become

```
x = ±i
```

---

# 2. Imaginary Unit

The **imaginary unit** is denoted by

```
i
```

where

```
i² = −1
```

---

## Powers of i

| Power | Value |
| ----: | :---: |
|    i¹ |   i   |
|    i² |  −1   |
|    i³ |  −i   |
|    i⁴ |   1   |
|    i⁵ |   i   |

The powers repeat after every four terms.

---

# 3. Complex Numbers

A **complex number** is a number of the form

```
z = a + ib
```

where

- **a** = Real part
- **b** = Imaginary part

### Notation

```
Re(z) = a
```

```
Im(z) = b
```

---

## Examples

```
3 + 2i
```

```
−5 + i
```

```
7 − 4i
```

```
2
```

(Real number)

```
5i
```

(Pure imaginary number)

---

# 4. Types of Complex Numbers

---

## (A) Purely Real Number

Imaginary part is zero.

Example

```
5 + 0i
```

---

## (B) Purely Imaginary Number

Real part is zero.

Example

```
4i
```

---

## (C) General Complex Number

Both real and imaginary parts are present.

Example

```
6 − 3i
```

---

# 5. Equality of Complex Numbers

Two complex numbers are equal if their corresponding real and imaginary parts are equal.

If

```
a + ib = c + id
```

then

```
a = c
```

and

```
b = d
```

---

# 6. Algebraic Operations on Complex Numbers

Let

```
z₁ = a + ib
```

```
z₂ = c + id
```

---

## (A) Addition

```
z₁ + z₂

=

(a + c)

+

i(b + d)
```

---

### Example

```
(3 + 2i)

+

(4 + 5i)

=

7 + 7i
```

---

## (B) Subtraction

```
z₁ − z₂

=

(a − c)

+

i(b − d)
```

---

### Example

```
(6 + 4i)

−

(2 + i)

=

4 + 3i
```

---

## (C) Multiplication

Multiply as ordinary algebra and use

```
i² = −1
```

### Formula

```
(a + ib)(c + id)

=

(ac − bd)

+

i(ad + bc)
```

---

### Example

```
(2 + 3i)

(1 + 4i)

=

2 + 8i + 3i + 12i²

=

2 + 11i −12

=

−10 +11i
```

---

## (D) Division

Multiply numerator and denominator by the conjugate of the denominator.

### Formula

```
(a + ib)

/

(c + id)

=

[(a + ib)(c − id)]

/

(c² + d²)
```

---

### Example

```
(3 + i)

/

(1 − i)
```

Multiply numerator and denominator by

```
1 + i
```

```
=

(3 + i)(1 + i)

/

2
```

```
=

(2 + 4i)

/

2
```

```
=

1 + 2i
```

---

# 7. Conjugate of a Complex Number

The **conjugate** of

```
a + ib
```

is

```
a − ib
```

### Symbol

```
z̄
```

---

## Examples

```
5 + 3i

→

5 − 3i
```

```
−2 − i

→

−2 + i
```

---

## Properties of Conjugates

```
z × z̄

=

a² + b²
```

---

```
z + z̄

=

2a
```

---

```
z − z̄

=

2ib
```

---

# 8. Modulus of a Complex Number

The **modulus** represents the distance of the complex number from the origin in the Argand plane.

### Symbol

```
|z|
```

---

### Formula

For

```
z = a + ib
```

```
|z|

=

√(a²+b²)
```

---

### Example

Find the modulus of

```
3 + 4i
```

```
|z|

=

√(9+16)

=

5
```

---

## Properties

```
|z| ≥ 0
```

---

```
|z|

=

|z̄|
```

---

```
|z₁z₂|

=

|z₁||z₂|
```

---

# 9. Argand Plane

The **Argand Plane** is used to represent complex numbers graphically.

---

## Axes

- Horizontal axis → Real axis
- Vertical axis → Imaginary axis

---

### Diagram

```
Imaginary Axis

↑

|

|       • (a,b)

|

------------------------→ Real Axis
```

The point

```
(a,b)
```

represents

```
a + ib
```

---

# 10. Polar Form of a Complex Number

A complex number can be represented using its modulus and argument.

If

```
z = a + ib
```

then

```
z

=

r(cosθ + isinθ)
```

where

```
r = |z|
```

and

```
θ = argument of z
```

---

## Argument

The **argument** is the angle made by the line joining the point to the origin with the positive real axis.

### Symbol

```
arg(z)
```

---

# 11. Quadratic Equations

A quadratic equation is an equation of degree 2.

### General Form

```
ax² + bx + c = 0
```

where

```
a ≠ 0
```

---

# 12. Nature of Roots

The nature of roots depends on the **discriminant**.

### Formula

```
D = b² − 4ac
```

---

## Case 1

```
D > 0
```

Two distinct real roots.

---

## Case 2

```
D = 0
```

Equal real roots.

---

## Case 3

```
D < 0
```

Complex conjugate roots.

---

# 13. Quadratic Formula

The roots of

```
ax² + bx + c = 0
```

are

```
x

=

[−b ± √(b²−4ac)]

/

2a
```

---

## Complex Roots

If

```
D < 0
```

then

```
√−k

=

i√k
```

---

### Example

Solve

```
x² + 4x + 5 = 0
```

Using

```
D = 16 −20

=−4
```

```
x

=

(−4 ±2i)

/

2

=

−2 ± i
```

---

# Solved Examples

### Example 1

Simplify

```
i⁷
```

**Solution**

Since powers repeat every 4,

```
7 ÷4

remainder 3
```

Therefore,

```
i⁷=i³

=−i
```

---

### Example 2

Add

```
(5+2i)

+

(3−4i)
```

**Solution**

```
8−2i
```

---

### Example 3

Find the conjugate and modulus of

```
6−8i
```

**Solution**

Conjugate

```
6+8i
```

Modulus

```
√(36+64)

=10
```

---

### Example 4

Represent

```
3+2i
```

on the Argand plane.

**Solution**

Plot the point

```
(3,2)
```

where **3** is on the real axis and **2** is on the imaginary axis.

---

### Example 5

Solve

```
x²+2x+5=0
```

**Solution**

```
D=4−20

=−16
```

```
x

=

−1±2i
```

---

### Example 6

Find the modulus of

```
−5+12i
```

**Solution**

```
|z|

=

√(25+144)

=

13
```

---

# Common Mistakes

- Forgetting that **i² = −1**, not **1**.
- Incorrectly multiplying complex numbers without replacing **i²** by **−1**.
- Confusing the **conjugate** with the **negative** of a complex number.
- Forgetting to multiply both numerator and denominator by the conjugate while dividing complex numbers.
- Using the wrong sign while calculating the discriminant.
- Assuming all quadratic equations have real roots.
- Confusing the **modulus** with the **argument** of a complex number.
- Plotting the imaginary part on the horizontal axis instead of the vertical axis in the Argand plane.

---

# Formula Sheet

### Imaginary Unit

```
i² = −1
```

---

### Complex Number

```
z=a+ib
```

---

### Addition

```
(a+ib)+(c+id)

=(a+c)+i(b+d)
```

---

### Multiplication

```
(a+ib)(c+id)

=(ac−bd)+i(ad+bc)
```

---

### Conjugate

```
z̄=a−ib
```

---

### Modulus

```
|z|

=

√(a²+b²)
```

---

### Polar Form

```
z

=

r(cosθ+isinθ)
```

---

### Discriminant

```
D=b²−4ac
```

---

### Quadratic Formula

```
x

=

[−b±√(b²−4ac)]

/

2a
```

---

# Chapter Summary

- The **imaginary unit** **i**, defined by **i² = −1**, extends the real number system to the **complex number system**.
- A **complex number** is written as **a + ib**, where **a** is the real part and **b** is the imaginary part.
- Complex numbers can be **added, subtracted, multiplied,** and **divided** using algebraic rules and the identity **i² = −1**.
- The **conjugate** of a complex number changes the sign of its imaginary part, while the **modulus** gives its distance from the origin in the **Argand plane**.
- Complex numbers can also be represented in **polar form** using their modulus and argument.
- The **discriminant** determines the nature of the roots of a quadratic equation.
- When the discriminant is negative, the quadratic equation has **complex conjugate roots**.
- Complex numbers provide a complete system for solving all quadratic equations and are widely used in higher mathematics, physics, and engineering.

# CBSE Class 11 Mathematics

