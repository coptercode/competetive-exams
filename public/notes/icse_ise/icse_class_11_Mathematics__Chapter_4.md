# Chapter 4: Complex Numbers

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Complex Numbers

---

# Introduction

**Complex Numbers** extend the real number system by introducing the **imaginary unit**, denoted by **i**, where

```
i² = -1
```

Complex numbers are used to solve equations that have no real solutions, such as **x² + 1 = 0**. They have wide applications in **electrical engineering, quantum mechanics, signal processing, fluid dynamics, control systems, and applied mathematics**.

---

# 1. Complex Number

## Definition

A **Complex Number** is a number of the form

```
z = a + ib
```

where

- **a** = Real Part
- **b** = Imaginary Part
- **i = √(-1)**

---

## Notation

```
Re(z) = a

Im(z) = b
```

---

## Example

```
z = 5 + 3i

Re(z) = 5

Im(z) = 3
```

---

# 2. Imaginary Unit

## Definition

The imaginary unit is defined as

```
i = √(-1)
```

---

## Powers of i

| Power | Value |
| ----- | ----- |
| i¹    | i     |
| i²    | -1    |
| i³    | -i    |
| i⁴    | 1     |
| i⁵    | i     |

---

## Shortcut

Powers of **i** repeat every **4** terms.

```
iⁿ

↓

Find

n mod 4
```

---

# 3. Types of Complex Numbers

---

## Purely Real Number

Imaginary part is zero.

Example

```
7 + 0i
```

---

## Purely Imaginary Number

Real part is zero.

Example

```
5i
```

---

## Zero Complex Number

```
0 + 0i
```

---

## Equal Complex Numbers

Two complex numbers are equal if

```
Real parts are equal

and

Imaginary parts are equal.
```

---

# 4. Algebra of Complex Numbers

---

## Addition

```
(a+ib)

+

(c+id)

=

(a+c)

+

i(b+d)
```

---

## Subtraction

```
(a+ib)

−

(c+id)

=

(a−c)

+

i(b−d)
```

---

## Multiplication

```
(a+ib)

(c+id)

=

(ac−bd)

+

i(ad+bc)
```

---

## Division

```
(a+ib)

/

(c+id)

=

[(a+ib)(c−id)]

/

(c²+d²)
```

Multiply numerator and denominator by the **conjugate** of the denominator.

---

# 5. Conjugate of a Complex Number

## Definition

The conjugate of

```
z=a+ib
```

is

```
z̄=a−ib
```

---

## Properties

```
z + z̄ = 2a
```

```
z − z̄ = 2ib
```

```
z·z̄ = a²+b²
```

---

## Example

```
z=6−5i

z̄=6+5i
```

---

# 6. Modulus of a Complex Number

## Definition

The modulus represents the distance of the complex number from the origin.

Notation

```
|z|
```

---

## Formula

```
|z|

=

√(a²+b²)
```

---

## Example

```
z=3+4i

|z|

=

√(9+16)

=

5
```

---

## Properties

```
|z|

≥0
```

```
|z₁z₂|

=

|z₁||z₂|
```

```
|z/z₁|

=

|z|/|z₁|
```

---

# 7. Argand Plane

## Definition

The graphical representation of complex numbers.

---

## Axes

```
Horizontal → Real Axis

Vertical → Imaginary Axis
```

---

## Representation

```
Imaginary Axis

      ↑

      |

      • (a,b)

      |

------O----------------→ Real Axis
```

---

# 8. Polar Form

A complex number can be written as

```
z

=

r(cosθ+i sinθ)
```

where

```
r=|z|

θ=Argument
```

---

## Formulae

```
r

=

√(a²+b²)
```

```
tanθ

=

b/a
```

---

# 9. Argument of a Complex Number

## Definition

The angle made by the line joining the origin to the point representing the complex number.

Notation

```
Arg(z)
```

---

## Formula

```
θ

=

tan⁻¹(b/a)
```

Quadrant adjustments may be required depending on the signs of **a** and **b**.

---

# 10. Square Root of a Complex Number

Suppose

```
√(a+ib)

=

x+iy
```

Then,

```
(x+iy)²

=

a+ib
```

Compare the real and imaginary parts and solve simultaneously to obtain **x** and **y**.

---

# 11. Quadratic Equations with Complex Roots

If the discriminant

```
D=b²−4ac
```

is negative,

```
D<0
```

then the roots are

```
x

=

[-b±i√(-D)]

/

2a
```

---

## Example

Solve

```
x²+4=0
```

Solution

```
x²=-4

x=±2i
```

---

# Difference Between Real and Complex Numbers

| Real Number         | Complex Number          |
| ------------------- | ----------------------- |
| No imaginary part   | Contains imaginary part |
| Lies on number line | Lies on Argand plane    |
| Form: a             | Form: a + ib            |

---

# Difference Between Modulus and Argument

| Modulus              | Argument                       |
| -------------------- | ------------------------------ |
| Distance from origin | Angle with positive real axis  |
| Always non-negative  | Measured in radians or degrees |
| Denoted by \|z\|     | Denoted by Arg(z)              |

---

# Flowchart

```
             COMPLEX NUMBERS
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
     Algebra    Conjugate    Modulus
                    │
                    ▼
              Argand Plane
                    │
                    ▼
              Polar Form
                    │
                    ▼
             Square Roots
                    │
                    ▼
       Quadratic Equations
```

---

# Important Formulae

| Concept                | Formula                  |
| ---------------------- | ------------------------ |
| Complex Number         | **z = a + ib**           |
| Conjugate              | **z̄ = a − ib**           |
| Modulus                | **\|z\| = √(a² + b²)**   |
| Argument               | **θ = tan⁻¹(b/a)**       |
| Polar Form             | **z = r(cosθ + i sinθ)** |
| Product with Conjugate | **z·z̄ = a² + b²**        |
| Quadratic Roots        | **x = (-b ± i√(-D))/2a** |

---

# Applications

- Electrical engineering (AC circuits).
- Signal processing.
- Control systems.
- Quantum mechanics.
- Fluid dynamics.
- Electromagnetic theory.
- Computer graphics.
- Digital communication.
- Robotics.
- Artificial Intelligence.

---

# Solved Examples

## Example 1

### Question

Find the modulus of

```
z=5+12i
```

### Solution

```
|z|

=

√(25+144)

=

√169

=

13
```

### Answer

```
13
```

---

## Example 2

### Question

Find the conjugate of

```
4−7i
```

### Solution

Change the sign of the imaginary part.

### Answer

```
4+7i
```

---

## Example 3

### Question

Add

```
(3+2i)

and

(4−5i)
```

### Solution

```
=(3+4)

+

(2−5)i

=7−3i
```

### Answer

```
7−3i
```

---

## Example 4

### Question

Solve

```
x²+9=0
```

### Solution

```
x²=-9

x=±3i
```

### Answer

```
±3i
```

---

## Example 5

### Question

Express

```
z=1+i
```

in polar form.

### Solution

```
r=√2

θ=45°
```

### Answer

```
√2(cos45°+i sin45°)
```

---

# Common Mistakes

- Forgetting that **i² = -1**.
- Confusing the **modulus** with the **argument**.
- Not multiplying by the **conjugate** while dividing complex numbers.
- Ignoring quadrant corrections when finding the argument.
- Writing the conjugate incorrectly (only the sign of the imaginary part changes).
- Using the quadratic formula incorrectly when the discriminant is negative.

---

# Exam Tips

- Memorize the cyclic pattern of the powers of **i**.
- Simplify **iⁿ** using **n mod 4**.
- Always use the conjugate to simplify division.
- Draw the Argand plane when solving graphical questions.
- Practice converting between algebraic and polar forms.

---

# Quick Revision

- Complex Number → **a + ib**
- Imaginary Unit → **i² = -1**
- Conjugate → **a - ib**
- Modulus → **√(a² + b²)**
- Argument → **tan⁻¹(b/a)**
- Polar Form → **r(cosθ + i sinθ)**
- Product with Conjugate → **a² + b²**
- Negative Discriminant → Complex roots.

---

# Chapter Summary

- **Complex numbers** extend the real number system by introducing the imaginary unit **i**, where **i² = -1**.
- Every complex number is expressed as **z = a + ib**, with **a** as the real part and **b** as the imaginary part.
- Operations such as **addition, subtraction, multiplication, and division** follow specific algebraic rules, with division simplified using the **complex conjugate**.
- The **modulus** represents the distance of a complex number from the origin, while the **argument** gives its direction in the **Argand plane**.
- Complex numbers can be represented in both **algebraic** and **polar forms**, enabling efficient solutions in advanced mathematics.
- They are essential for solving quadratic equations with negative discriminants and have extensive applications in **engineering, physics, communication systems, computer science, and applied mathematics**.

# ISC Class 11 Mathematics

