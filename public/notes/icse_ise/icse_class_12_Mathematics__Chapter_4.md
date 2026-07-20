# Chapter 4: Continuity, Differentiability and Differentiation

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Continuity, Differentiability and Differentiation

(Topics covered from uploaded ISC Class 12 Mathematics outline: piecewise continuity, implicit differentiation, parametric differentiation, logarithmic differentiation, second-order derivatives, and Mean Value Theorems) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Continuity and Differentiability** are fundamental concepts of calculus. They describe how functions behave and how smoothly they change.

This chapter deals with:

- Limits and continuity
- Differentiability of functions
- Derivative rules
- Implicit differentiation
- Parametric differentiation
- Logarithmic differentiation
- Second-order derivatives
- Mean Value Theorems

These concepts are essential for **physics, engineering, economics, statistics, and optimization problems**.

---

# 1. Limits

## Definition

The limit of a function describes the value that a function approaches as the variable approaches a particular point.

---

# Notation

```
lim f(x)=L
x→a
```

Means:

As x approaches a, f(x) approaches L.

---

# Left-Hand Limit (LHL)

Limit when x approaches from the left side.

```
lim f(x)
x→a⁻
```

---

# Right-Hand Limit (RHL)

Limit when x approaches from the right side.

```
lim f(x)
x→a⁺
```

---

# Existence of Limit

A limit exists if:

```
LHL = RHL
```

---

# Important Limit Results

## 1.

```
lim sinx/x = 1
x→0
```

---

## 2.

```
lim (1−cosx)/x² = 1/2
x→0
```

---

## 3.

```
lim (eˣ−1)/x = 1
x→0
```

---

# 2. Continuity

## Definition

A function is continuous at x=a if:

```
lim f(x)=f(a)
x→a
```

---

# Conditions for Continuity

A function is continuous if:

### 1.

Left limit exists

```
LHL
```

### 2.

Right limit exists

```
RHL
```

### 3.

Both are equal to function value

```
LHL=RHL=f(a)
```

---

# Types of Discontinuity

---

## Removable Discontinuity

The limit exists but function value is different.

---

## Jump Discontinuity

Left and right limits are different.

---

## Infinite Discontinuity

Function approaches infinity.

---

# 3. Continuity of Piecewise Functions

For a piecewise function:

```
f(x)=
{
expression 1, x<a

expression 2, x≥a
}
```

Check:

```
LHL = RHL = f(a)
```

---

# Example

Find k for continuity:

```
f(x)=
{
kx+1 , x<2

5 , x≥2
}
```

At x=2:

LHL:

```
2k+1
```

RHL:

```
5
```

Therefore:

```
2k+1=5
```

```
k=2
```

---

# 4. Differentiability

## Definition

A function is differentiable if its derivative exists at every point.

---

# Derivative Definition

```
f'(x)=lim [f(x+h)-f(x)]/h
h→0
```

---

# Relation Between Continuity and Differentiability

```
Differentiability ⇒ Continuity
```

But:

```
Continuity ⇏ Differentiability
```

---

# Example

```
f(x)=|x|
```

is continuous but not differentiable at x=0.

---

# 5. Basic Differentiation Rules

---

# Constant Rule

```
d(c)/dx = 0
```

---

# Power Rule

```
d(xⁿ)/dx = nxⁿ⁻¹
```

---

# Sum Rule

```
d(u+v)/dx=u'+v'
```

---

# Product Rule

For:

```
y=uv
```

Derivative:

```
dy/dx=u(dv/dx)+v(du/dx)
```

---

# Quotient Rule

For:

```
y=u/v
```

Derivative:

```
dy/dx=(vdu/dx−udv/dx)/v²
```

---

# Chain Rule

For:

```
y=f(g(x))
```

```
dy/dx=f'(g(x))g'(x)
```

---

# 6. Derivatives of Standard Functions

---

## Trigonometric Functions

```
d(sinx)/dx=cosx
```

```
d(cosx)/dx=-sinx
```

```
d(tanx)/dx=sec²x
```

---

## Exponential Functions

```
d(eˣ)/dx=eˣ
```

---

## Logarithmic Functions

```
d(logx)/dx=1/x
```

---

# 7. Implicit Differentiation

## Definition

When x and y are mixed together and y cannot be separated easily, implicit differentiation is used.

---

# Example

Given:

```
x²+y²=25
```

Differentiate:

```
2x+2y(dy/dx)=0
```

Therefore:

```
dy/dx=-x/y
```

---

# 8. Parametric Differentiation

If:

```
x=f(t)

y=g(t)
```

then:

```
dy/dx=(dy/dt)/(dx/dt)
```

---

# Example

Given:

```
x=t²

y=t³
```

Then:

```
dx/dt=2t

dy/dt=3t²
```

Therefore:

```
dy/dx=3t/2
```

---

# 9. Logarithmic Differentiation

Used for functions where variable appears in both base and power.

Example:

```
y=xˣ
```

Taking log:

```
logy=xlogx
```

Differentiate:

```
1/y dy/dx=logx+1
```

Therefore:

```
dy/dx=xˣ(logx+1)
```

---

# Applications

- Exponential functions.
- Products of powers.
- Complex algebraic functions.

---

# 10. Second Order Derivative

## Definition

The derivative of the first derivative is called the second derivative.

---

# Notation

```
d²y/dx²
```

---

# Example

If:

```
y=x³
```

First derivative:

```
dy/dx=3x²
```

Second derivative:

```
d²y/dx²=6x
```

---

# Applications

- Acceleration calculations.
- Maxima and minima.
- Curve analysis.

---

# 11. Rolle's Theorem

## Statement

If a function satisfies:

1. Continuous on [a,b]
2. Differentiable on (a,b)
3. f(a)=f(b)

Then there exists at least one point c where:

```
f'(c)=0
```

---

# Graphically

```
      •
     / \
----/---\----
   a     b

At c:

slope = 0
```

---

# 12. Lagrange's Mean Value Theorem

## Statement

If a function is continuous on [a,b] and differentiable on (a,b), then:

There exists c such that:

```
f'(c)=
[f(b)-f(a)]/(b-a)
```

---

# Geometrical Meaning

At some point:

```
Tangent slope = Chord slope
```

---

# Difference Between Rolle's and Lagrange's Theorem

| Rolle's Theorem | Lagrange's Theorem |
| --------------- | ------------------ |
| f(a)=f(b)       | No such condition  |
| f'(c)=0         | f'(c)=slope        |
| Special case    | General theorem    |

---

# ASCII Flowchart

```
       CONTINUITY & DIFFERENTIABILITY
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
     Limits    Continuity   Derivatives
       │            │            │
       ▼            ▼            ▼
 Piecewise     Differentiability  Rules
       │
       ▼
 Mean Value Theorems
       │
       ▼
 Applications
```

---

# Important Formulae

| Concept               | Formula                 |
| --------------------- | ----------------------- |
| Limit Definition      | lim f(x)=L              |
| Continuity            | lim f(x)=f(a)           |
| Derivative            | lim[f(x+h)-f(x)]/h      |
| Power Rule            | nxⁿ⁻¹                   |
| Product Rule          | uv'+vu'                 |
| Quotient Rule         | (vu'-uv')/v²            |
| Chain Rule            | f'(g(x))g'(x)           |
| Parametric Derivative | dy/dx=(dy/dt)/(dx/dt)   |
| Second Derivative     | d²y/dx²                 |
| Rolle's Theorem       | f'(c)=0                 |
| Lagrange MVT          | f'(c)=[f(b)-f(a)]/(b-a) |

---

# Solved Examples

## Example 1

Check continuity:

```
f(x)=x²
```

at x=2.

Solution:

```
lim x²=x²
x→2
```

```
=4
```

Function value:

```
f(2)=4
```

Therefore:

```
Continuous at x=2
```

---

## Example 2

Differentiate:

```
y=x³+5x²
```

Solution:

```
dy/dx=3x²+10x
```

---

## Example 3

Find derivative:

```
y=sinx cosx
```

Using product rule:

```
dy/dx=
sinx(-sinx)+cosx(cosx)
```

Therefore:

```
=cos²x−sin²x
```

---

## Example 4

Find dy/dx:

```
x²+y²=16
```

Solution:

```
2x+2y dy/dx=0
```

Therefore:

```
dy/dx=-x/y
```

---

## Example 5

Verify Rolle's theorem for:

```
f(x)=x²−4x+3
```

on [1,3].

Since:

```
f(1)=0
```

and:

```
f(3)=0
```

Conditions satisfied.

Derivative:

```
f'(x)=2x−4
```

For Rolle:

```
2c−4=0
```

Therefore:

```
c=2
```

---

# Common Mistakes

- Confusing continuity with differentiability.
- Forgetting domain restrictions.
- Applying product rule incorrectly.
- Missing dy/dx terms in implicit differentiation.
- Using MVT without checking conditions.
- Forgetting chain rule.

---

# Exam Tips

- Practice continuity problems involving piecewise functions.
- Memorize derivative formulas.
- Practice implicit and logarithmic differentiation.
- Learn conditions of Rolle's and Lagrange's theorem.
- Solve problems on second-order derivatives.

---

# Quick Revision

- Continuity:

```
lim f(x)=f(a)
```

- Differentiability means derivative exists.
- Differentiability always implies continuity.
- Chain rule:

```
dy/dx=f'(g(x))g'(x)
```

- Parametric:

```
dy/dx=(dy/dt)/(dx/dt)
```

- Rolle:

```
f'(c)=0
```

- Lagrange:

```
f'(c)= [f(b)-f(a)]/(b-a)
```

---

# Chapter Summary

- **Continuity** describes whether a function has no breaks, while **differentiability** measures the rate of change of a function.
- Differentiation provides tools for finding slopes, rates, and changing quantities.
- Advanced techniques such as **implicit differentiation, parametric differentiation, and logarithmic differentiation** help solve complex functions.
- **Second-order derivatives** describe changing rates and are important in physics and optimization.
- **Mean Value Theorems** connect derivatives with average rates of change and form the foundation of advanced calculus.
- These concepts are widely applied in **engineering, economics, physics, data science, and mathematical modelling**.

# ISC Class 12 Mathematics

