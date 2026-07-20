# Chapter 5: Continuity and Differentiability

> **Board:** CBSE  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Continuity and Differentiability

> **Note:** This chapter explains the concepts of continuity and differentiability of functions, derivatives of inverse trigonometric, exponential and logarithmic functions, implicit differentiation, logarithmic differentiation, the Chain Rule, and second-order derivatives.

---

# Introduction

The concepts of **continuity** and **differentiability** are fundamental in calculus. Continuity describes whether a function has any breaks or jumps, while differentiability determines whether the function has a well-defined tangent at every point.

These concepts are extensively used in physics, engineering, economics, optimization, and higher mathematics.

---

# 1. Continuity of a Function

## Definition

A function **f(x)** is said to be **continuous** at a point

```
x = a
```

if all the following conditions are satisfied:

1.

```
f(a)
```

exists.

2.

```
lim (x→a⁻) f(x)
```

exists.

3.

```
lim (x→a⁺) f(x)
```

exists.

4.

```
lim (x→a⁻) f(x)

=

lim (x→a⁺) f(x)

=

f(a)
```

---

## Symbolically

```
lim (x→a) f(x)

=

f(a)
```

---

# 2. Types of Discontinuity

---

## (A) Removable Discontinuity

Occurs when

```
LHL = RHL
```

but

```
f(a)
```

is either undefined or has a different value.

---

## (B) Jump Discontinuity

Occurs when

```
LHL ≠ RHL
```

---

## (C) Infinite Discontinuity

Occurs when one or both limits become infinite.

---

## (D) Oscillatory Discontinuity

Occurs when the limit does not exist due to oscillation.

Example

```
sin(1/x)
```

at

```
x = 0
```

---

# 3. Continuity of Standard Functions

The following functions are continuous on their domains:

- Polynomial functions
- Rational functions (where denominator ≠ 0)
- Trigonometric functions
- Inverse trigonometric functions (on their domains)
- Exponential functions
- Logarithmic functions (for x > 0)

---

# 4. Differentiability

## Definition

A function is **differentiable** at

```
x = a
```

if

```
lim (h→0)

[f(a+h)-f(a)]/h
```

exists.

This limit is called the derivative.

Notation

```
f'(a)

or

dy/dx
```

---

## Relation Between Continuity and Differentiability

If a function is differentiable at a point, then it is continuous at that point.

However,

> **Every differentiable function is continuous, but every continuous function is not necessarily differentiable.**

Example

```
f(x)=|x|
```

is continuous but not differentiable at

```
x=0
```

---

# 5. Derivative of Composite Functions (Chain Rule)

## Statement

If

```
y=f(u)

and

u=g(x)
```

then

```
dy/dx

=

(dy/du)

×

(du/dx)
```

---

## Example

Find the derivative of

```
y=(3x+1)⁵
```

Solution

```
dy/dx

=

5(3x+1)⁴ × 3

=

15(3x+1)⁴
```

---

# 6. Derivatives of Inverse Trigonometric Functions

| Function | Derivative      |
| -------- | --------------- |
| sin⁻¹x   | 1/√(1−x²)       |
| cos⁻¹x   | -1/√(1−x²)      |
| tan⁻¹x   | 1/(1+x²)        |
| cot⁻¹x   | -1/(1+x²)       |
| sec⁻¹x   | 1/\|x\|√(x²−1)  |
| cosec⁻¹x | -1/\|x\|√(x²−1) |

Valid on their respective domains.

---

# 7. Derivatives of Exponential Functions

## Natural Exponential Function

```
d/dx (eˣ)

=

eˣ
```

---

## General Exponential Function

```
d/dx (aˣ)

=

aˣ ln(a)
```

where

```
a>0

and

a≠1
```

---

# 8. Derivatives of Logarithmic Functions

## Natural Logarithm

```
d/dx (ln x)

=

1/x
```

for

```
x>0
```

---

## General Logarithm

```
d/dx (logₐx)

=

1/(x ln a)
```

---

# 9. Implicit Differentiation

## Definition

When a function is not explicitly given in the form

```
y=f(x)
```

the derivative is found by differentiating both sides with respect to

```
x
```

while treating

```
y
```

as a function of

````
x
```.

---

## Example

Given

````

x²+y²=25

```

Differentiate both sides.

```

2x+2y(dy/dx)=0

```

Therefore,

```

dy/dx

=

−x/y

```

---

# 10. Logarithmic Differentiation

## Definition

This method is useful when variables appear in both the base and exponent.

General form

```

y=u(x)^v(x)

```

Take logarithm on both sides.

```

ln y

=

v ln u

```

Differentiate implicitly.

---

## Example

Find the derivative of

```

y=xˣ

```

Solution

Take logarithm.

```

ln y=xlnx

```

Differentiate.

```

1/y

(dy/dx)

=

lnx+1

```

Hence,

```

dy/dx

=

xˣ(lnx+1)

```

---

# 11. Parametric Differentiation

If

```

x=f(t)

y=g(t)

```

then

```

dy/dx

=

(dy/dt)/(dx/dt)

```

provided

```

dx/dt ≠0

```

---

# 12. Second-Order Derivative

## Definition

The derivative of the first derivative is called the second derivative.

Notation

```

d²y/dx²

```

---

## Formula

If

```

y=f(x)

```

then

```

d²y/dx²

=

d/dx

(dy/dx)

```

---

## Example

Given

```

y=x³

```

First derivative

```

dy/dx=3x²

```

Second derivative

```

d²y/dx²

=6x

```

---

# 13. Differentiability of Special Functions

---

## Modulus Function

```

|x|

```

Continuous everywhere.

Not differentiable at

```

x=0

```

---

## Greatest Integer Function

Discontinuous at every integer.

Hence,

not differentiable there.

---

# 14. Important Standard Derivatives

| Function | Derivative |
|----------|------------|
| xⁿ | nxⁿ⁻¹ |
| sin x | cos x |
| cos x | -sin x |
| tan x | sec²x |
| cot x | -cosec²x |
| sec x | sec x tan x |
| cosec x | -cosec x cot x |
| eˣ | eˣ |
| ln x | 1/x |

---

# Comparison Tables

## Continuity vs Differentiability

| Continuity | Differentiability |
|------------|-------------------|
| No break in graph | Tangent exists |
| Depends on limits | Depends on derivative |
| Necessary for differentiability | Stronger condition |

---

## Explicit vs Implicit Functions

| Explicit | Implicit |
|----------|----------|
| y=f(x) | F(x,y)=0 |
| Differentiate directly | Differentiate both variables |

---

## Ordinary vs Logarithmic Differentiation

| Ordinary | Logarithmic |
|-----------|-------------|
| Used for simple functions | Used for variable exponents |
| Direct differentiation | Apply logarithm first |

---

# ASCII Diagrams

## Continuous Function

```

      •

    /

/

/

```

(No break)

---

## Jump Discontinuity

```

•

|

|

      •

```

---

## Cusp (Not Differentiable)

```

\

\

>

/

/

```

---

## Chain Rule

```

x

↓

u

↓

y

```

---

# Solved Examples

### Example 1

Check whether

```

f(x)=x²

```

is continuous at

```

x=2

```

**Solution**

```

lim(x→2)x²

=4

```

and

```

f(2)=4

```

Since

```

Limit

=

Function Value

```

the function is **continuous** at

```

x=2

```

---

### Example 2

Differentiate

```

y=sin⁻¹x

```

**Solution**

Using the standard derivative,

```

dy/dx

=

1/√(1−x²)

```

---

### Example 3

Find

```

d/dx(e³ˣ)

```

**Solution**

Using the Chain Rule,

```

d/dx(e³ˣ)

=

3e³ˣ

```

---

### Example 4

Find the derivative of

```

y=ln(x²+1)

```

**Solution**

Using the Chain Rule,

```

dy/dx

=

1/(x²+1)

×

2x

```

```

=

2x/(x²+1)

```

---

### Example 5

Differentiate implicitly

```

x²+y²=16

```

**Solution**

Differentiate both sides.

```

2x+2y(dy/dx)=0

```

Hence,

```

dy/dx

=

−x/y

```

---

### Example 6

Find the second derivative of

```

y=x⁴

```

**Solution**

First derivative,

```

dy/dx

=4x³

```

Second derivative,

```

d²y/dx²

=12x²

```

---

# Common Mistakes

- Assuming that every **continuous function** is also **differentiable**.
- Forgetting to verify all conditions for continuity before concluding that a function is continuous.
- Ignoring the **Chain Rule** while differentiating composite functions.
- Omitting the factor **dy/dx** during **implicit differentiation**.
- Applying logarithmic differentiation to simple expressions where ordinary differentiation is sufficient.
- Forgetting the absolute value in the derivatives of **sec⁻¹x** and **cosec⁻¹x**.
- Confusing **first-order** and **second-order** derivatives.
- Differentiating logarithmic functions without checking that their domains satisfy the required conditions (e.g., **x > 0** for **ln x**).

---

# Chapter Summary

- A function is **continuous** at a point if its limit exists and equals the function value at that point.
- A function is **differentiable** if its derivative exists; differentiability always implies continuity, but the converse is not true.
- Standard functions such as polynomials, exponential functions, logarithmic functions, and trigonometric functions are continuous on their respective domains.
- The **Chain Rule** is used to differentiate composite functions.
- Standard derivative formulas for **inverse trigonometric**, **exponential**, and **logarithmic** functions are fundamental tools in calculus.
- **Implicit differentiation** is used when a function is not given explicitly in terms of one variable.
- **Logarithmic differentiation** simplifies the differentiation of functions with variable exponents.
- The **second-order derivative** measures the rate of change of the first derivative and is useful in curve analysis and applications.
- Continuity and differentiability form the theoretical basis for applications of derivatives, optimization, integration, and differential equations.





# CBSE Class 12 Mathematics

