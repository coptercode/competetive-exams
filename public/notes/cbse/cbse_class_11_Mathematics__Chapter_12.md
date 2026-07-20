# Chapter 12: Limits and Derivatives

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Limits and Derivatives

---

# Introduction

**Calculus** is one of the most important branches of mathematics. It deals with the study of **change** and **motion**. The concepts of **limits** and **derivatives** form the foundation of calculus and are extensively used in mathematics, physics, engineering, economics, and computer science.

A **limit** describes the value that a function approaches as the input approaches a particular value. A **derivative** measures the rate at which one quantity changes with respect to another and represents the slope of the tangent to a curve at a given point.

---

# 1. Limits

A **limit** is the value that a function approaches as the independent variable approaches a particular value.

If

```
f(x)
```

approaches

```
L
```

as

```
x → a
```

then we write

```
lim f(x) = L
x→a
```

---

## Example

```
lim (2x+3)
x→2
```

Substituting

```
x=2
```

gives

```
2(2)+3

=7
```

Therefore,

```
lim (2x+3)=7
x→2
```

---

# 2. Left-Hand Limit (LHL)

The **Left-Hand Limit** is the value approached by the function as

```
x
```

approaches

```
a
```

from the left side.

Notation

```
lim f(x)
x→a⁻
```

---

# 3. Right-Hand Limit (RHL)

The **Right-Hand Limit** is the value approached by the function as

```
x
```

approaches

```
a
```

from the right side.

Notation

```
lim f(x)
x→a⁺
```

---

# 4. Existence of a Limit

A limit exists only if

```
LHL = RHL
```

That is,

```
lim f(x)

=

lim f(x)
x→a⁻      x→a⁺
```

---

## Example

For

```
f(x)=|x|
```

at

```
x=0
```

```
LHL=0

RHL=0
```

Hence,

```
Limit exists.
```

---

# 5. Standard Limits

The following limits are very important.

### (i)

```
lim (sinx/x)

=1
x→0
```

---

### (ii)

```
lim (tanx/x)

=1
x→0
```

---

### (iii)

```
lim ((1−cosx)/x)

=0
x→0
```

---

### (iv)

```
lim ((1−cosx)/x²)

=1/2
x→0
```

---

### (v)

```
lim ((eˣ−1)/x)

=1
x→0
```

---

### (vi)

```
lim ((aˣ−1)/x)

=lna
x→0
```

where

```
a>0
```

---

# 6. Algebra of Limits

If

```
lim f(x)=L

and

lim g(x)=M
```

then

---

## Sum Rule

```
lim[f(x)+g(x)]

=L+M
```

---

## Difference Rule

```
lim[f(x)−g(x)]

=L−M
```

---

## Product Rule

```
lim[f(x)g(x)]

=LM
```

---

## Quotient Rule

```
lim[f(x)/g(x)]

=L/M
```

provided

```
M≠0
```

---

# 7. Derivative

The **derivative** of a function measures its **instantaneous rate of change**.

Geometrically, it represents the **slope of the tangent** to the curve.

---

## Definition

If

```
y=f(x)
```

then the derivative is

```
dy/dx

=

lim

[f(x+h)−f(x)]

/

h

h→0
```

---

## Alternative Notations

```
f'(x)
```

```
dy/dx
```

```
Dₓy
```

---

# 8. Derivative from First Principles

The derivative is obtained using the limit definition.

### Example

Find the derivative of

```
f(x)=x²
```

Using first principles,

```
f(x+h)

=(x+h)²
```

```
=x²+2xh+h²
```

```
f(x+h)−f(x)

=2xh+h²
```

```
Divide by h

=2x+h
```

Taking limit,

```
h→0
```

```
Derivative

=2x
```

---

# 9. Derivatives of Standard Functions

| Function | Derivative |
| -------- | ---------- |
| c        | 0          |
| x        | 1          |
| x²       | 2x         |
| x³       | 3x²        |
| xⁿ       | nxⁿ⁻¹      |
| sin x    | cos x      |
| cos x    | −sin x     |
| tan x    | sec²x      |
| eˣ       | eˣ         |
| aˣ       | aˣ ln a    |
| ln x     | 1/x        |

---

# 10. Differentiability

A function is **differentiable** at a point if its derivative exists there.

For differentiability,

- The function must be continuous.
- Left-hand derivative must equal right-hand derivative.

---

# 11. Relationship Between Continuity and Differentiability

```
Differentiable

⇒

Continuous
```

However,

```
Continuous

⇏

Differentiable
```

A continuous function may not be differentiable.

Example

```
f(x)=|x|
```

is continuous at

```
x=0
```

but not differentiable there because the left-hand and right-hand derivatives are different.

---

# 12. Geometrical Interpretation

The derivative at a point represents the **slope of the tangent** to the curve.

```
        Tangent

          /

         /

--------●------------

      Curve
```

- Positive derivative → Increasing function
- Negative derivative → Decreasing function
- Zero derivative → Horizontal tangent

---

# 13. Applications of Derivatives

Derivatives are used in:

- Finding slopes of curves
- Velocity and acceleration
- Optimization problems
- Economics
- Engineering
- Physics
- Computer graphics
- Machine learning

---

# Solved Examples

### Example 1

Evaluate

```
lim (3x+5)
x→2
```

**Solution**

```
=3(2)+5

=11
```

---

### Example 2

Evaluate

```
lim (sinx/x)
x→0
```

**Solution**

Using the standard limit,

```
=1
```

---

### Example 3

Find the derivative of

```
f(x)=x³
```

**Solution**

Using the power rule,

```
f'(x)

=3x²
```

---

### Example 4

Find the derivative of

```
sinx
```

**Solution**

```
d/dx(sinx)

=cosx
```

---

### Example 5

Find the derivative of

```
5x⁴
```

**Solution**

```
=20x³
```

---

### Example 6

Determine whether

```
f(x)=|x|
```

is differentiable at

```
x=0
```

**Solution**

Left-hand derivative

```
=−1
```

Right-hand derivative

```
=1
```

Since they are not equal,

```
The function is not differentiable.
```

---

# Common Mistakes

- Confusing **limits** with the actual value of a function.
- Forgetting to check whether **LHL = RHL** before concluding that a limit exists.
- Incorrectly applying standard limits.
- Forgetting that derivatives are defined using **limits**.
- Using the power rule incorrectly.
- Ignoring the chain of algebraic simplification while applying first principles.
- Assuming every continuous function is differentiable.
- Forgetting that the derivative of a constant is **zero**.

---

# Formula Sheet

## Limit Notation

```
lim f(x)
x→a
```

---

## Standard Limits

```
lim (sinx/x)

=1
x→0
```

```
lim (tanx/x)

=1
x→0
```

```
lim ((1−cosx)/x²)

=1/2
x→0
```

```
lim ((eˣ−1)/x)

=1
x→0
```

---

## Derivative Definition

```
dy/dx

=

lim

[f(x+h)−f(x)]

/

h

h→0
```

---

## Power Rule

```
d/dx(xⁿ)

=nxⁿ⁻¹
```

---

## Standard Derivatives

```
d/dx(c)

=0
```

```
d/dx(x)

=1
```

```
d/dx(sinx)

=cosx
```

```
d/dx(cosx)

=−sinx
```

```
d/dx(tanx)

=sec²x
```

```
d/dx(eˣ)

=eˣ
```

```
d/dx(lnx)

=1/x
```

---

# Chapter Summary

- A **limit** describes the value a function approaches as the independent variable approaches a specified point.
- A limit exists only when the **left-hand limit (LHL)** and the **right-hand limit (RHL)** are equal.
- Several **standard limits**, especially trigonometric and exponential limits, are fundamental tools in calculus.
- A **derivative** measures the **instantaneous rate of change** of a function and represents the **slope of the tangent** to its graph.
- The derivative is defined using the **first principle**, which is based on the concept of limits.
- Standard derivative formulas simplify the differentiation of common algebraic, trigonometric, exponential, and logarithmic functions.
- Every **differentiable** function is **continuous**, but the converse is not always true.
- Limits and derivatives provide the foundation for advanced calculus and have numerous applications in mathematics, science, engineering, economics, and technology.

# CBSE Class 11 Mathematics

