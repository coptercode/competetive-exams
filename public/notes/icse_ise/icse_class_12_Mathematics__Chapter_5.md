# Chapter 5: Applications of Derivatives

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Applications of Derivatives

(Topics covered from uploaded ISC Class 12 Mathematics outline: increasing/decreasing functions, maxima and minima, optimization problems, and rate of change applications) :contentReference[oaicite:0]{index=0}

---

# Introduction

The **derivative** of a function represents the rate at which one quantity changes with respect to another.

Applications of derivatives help us understand:

- Increasing and decreasing behaviour of functions
- Maximum and minimum values
- Tangents and normals
- Optimization problems
- Rates of change

These concepts are widely used in:

- Engineering
- Physics
- Economics
- Business optimization
- Data science

---

# 1. Rate of Change

## Definition

The derivative represents the instantaneous rate of change of one variable with respect to another.

---

If:

```
y=f(x)
```

then rate of change of y with respect to x is:

```
dy/dx
```

---

# Example

If distance:

```
s=f(t)
```

then:

Velocity:

```
v=ds/dt
```

Acceleration:

```
a=d²s/dt²
```

---

# 2. Geometrical Meaning of Derivative

The derivative at a point gives the:

**Slope of tangent to the curve at that point.**

---

Formula:

```
Slope = dy/dx
```

---

# Tangent

A line touching a curve at one point.

---

# Normal

A line perpendicular to tangent.

---

# Relation Between Tangent and Normal

If tangent slope:

```
m
```

then normal slope:

```
-1/m
```

---

# Equation of Tangent

At point:

```
(x₁,y₁)
```

Formula:

```
y-y₁=m(x-x₁)
```

where:

```
m=dy/dx
```

---

# Equation of Normal

```
y-y₁=-1/m(x-x₁)
```

---

# 3. Increasing and Decreasing Functions

A function may increase or decrease depending on the sign of its derivative.

---

# Increasing Function

A function is increasing if:

```
f'(x)>0
```

---

Meaning:

As x increases, y increases.

---

# Decreasing Function

A function is decreasing if:

```
f'(x)<0
```

---

Meaning:

As x increases, y decreases.

---

# Constant Function

If:

```
f'(x)=0
```

---

# Example

Given:

```
f(x)=x²
```

Derivative:

```
f'(x)=2x
```

For:

```
x>0
```

```
f'(x)>0
```

Function increases.

For:

```
x<0
```

```
f'(x)<0
```

Function decreases.

---

# 4. Critical Points

## Definition

Points where:

```
f'(x)=0
```

or derivative does not exist.

---

These points are candidates for:

- Maximum
- Minimum

---

# Example

For:

```
f(x)=x²-4x+3
```

Derivative:

```
f'(x)=2x-4
```

Put:

```
2x-4=0
```

Therefore:

```
x=2
```

Critical point:

```
x=2
```

---

# 5. Maxima and Minima

---

# Maximum Value

The highest value of a function in a given interval.

---

# Minimum Value

The lowest value of a function in a given interval.

---

# Local Maximum

Maximum value near a particular point.

---

# Local Minimum

Minimum value near a particular point.

---

# 6. First Derivative Test

Used to determine maxima and minima.

---

Steps:

### Step 1

Find:

```
f'(x)
```

---

### Step 2

Solve:

```
f'(x)=0
```

---

### Step 3

Check sign change.

---

# Conditions

## Maximum

Derivative changes:

```
+  →  -
```

---

## Minimum

Derivative changes:

```
-  →  +
```

---

# Example

Find maximum/minimum:

```
f(x)=x²-4x+3
```

Derivative:

```
f'(x)=2x-4
```

Critical point:

```
x=2
```

Second derivative:

```
f''(x)=2
```

Since:

```
f''(x)>0
```

Minimum exists.

Value:

```
f(2)=4-8+3
```

```
=-1
```

Minimum value:

```
-1
```

---

# 7. Second Derivative Test

If:

```
f'(x)=0
```

then examine:

```
f''(x)
```

---

# Conditions

## Maximum

```
f''(x)<0
```

---

## Minimum

```
f''(x)>0
```

---

## No conclusion

```
f''(x)=0
```

---

# 8. Optimization Problems

## Definition

Finding the maximum or minimum value of a quantity under given conditions.

---

# Steps

### Step 1

Define variables.

---

### Step 2

Create equation.

---

### Step 3

Differentiate.

---

### Step 4

Find critical points.

---

### Step 5

Check maximum/minimum.

---

# Example Applications

- Maximum area.
- Minimum cost.
- Maximum profit.
- Minimum distance.

---

# 9. Approximation Using Differentials

For small changes:

```
dy=f'(x)dx
```

---

# Approximate Change

```
Δy≈dy
```

---

# Example

Find approximate change in:

```
√x
```

when x changes slightly.

---

# 10. Rolle's Theorem Application

If:

```
f'(c)=0
```

then c may represent:

- Maximum point
- Minimum point

---

# 11. Mean Value Theorem Application

Derivative gives average rate of change.

Formula:

```
f'(c)=
[f(b)-f(a)]/(b-a)
```

---

# 12. Derivatives in Economics

---

# Cost Function

```
C(x)
```

Marginal cost:

```
MC=dC/dx
```

---

# Revenue Function

```
R(x)
```

Marginal revenue:

```
MR=dR/dx
```

---

# Profit Function

```
P=R-C
```

Maximum profit occurs when:

```
dP/dx=0
```

---

# 13. Motion Applications

If:

Position:

```
s(t)
```

Velocity:

```
v=ds/dt
```

Acceleration:

```
a=dv/dt
```

---

# 14. Linear Approximation

For small changes:

```
f(x+Δx)

≈

f(x)+f'(x)Δx
```

---

# ASCII Flowchart

```
        APPLICATIONS OF DERIVATIVES
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
   Rate Change  Increasing   Max-Min
       │            │            │
       ▼            ▼            ▼
 Velocity      f'(x)>0     Optimization
       │
       ▼
 Tangent & Normal
```

---

# Important Formulae

| Concept              | Formula      |
| -------------------- | ------------ |
| Rate of Change       | dy/dx        |
| Tangent Slope        | m=dy/dx      |
| Tangent Equation     | y-y₁=m(x-x₁) |
| Normal Slope         | -1/m         |
| Increasing           | f'(x)>0      |
| Decreasing           | f'(x)<0      |
| Critical Point       | f'(x)=0      |
| Maximum              | f''(x)<0     |
| Minimum              | f''(x)>0     |
| Differential         | dy=f'(x)dx   |
| Linear Approximation | f(x)+f'(x)Δx |

---

# Solved Examples

## Example 1

Find whether:

```
f(x)=x³
```

is increasing.

Solution:

Derivative:

```
f'(x)=3x²
```

Since:

```
3x²≥0
```

Function is increasing.

---

## Example 2

Find maximum/minimum of:

```
f(x)=x²+6x+5
```

Derivative:

```
f'(x)=2x+6
```

Put:

```
2x+6=0
```

```
x=-3
```

Second derivative:

```
f''(x)=2
```

Since positive:

Minimum.

Value:

```
f(-3)=9-18+5
```

```
=-4
```

Minimum value:

```
-4
```

---

## Example 3

Find tangent to:

```
y=x²
```

at x=2.

Derivative:

```
dy/dx=2x
```

Slope:

```
m=4
```

Point:

```
(2,4)
```

Equation:

```
y-4=4(x-2)
```

---

## Example 4

A particle moves:

```
s=t³-6t²+9t
```

Find velocity.

Solution:

```
v=ds/dt
```

```
v=3t²-12t+9
```

---

## Example 5

Find approximate change in:

```
y=x²
```

when x changes from 5 to 5.1.

Solution:

```
dy=2x dx
```

```
=2(5)(0.1)
```

```
=1
```

Approximate change:

```
1
```

---

# Common Mistakes

- Forgetting to check derivative sign.
- Confusing maximum with minimum.
- Using second derivative test incorrectly.
- Forgetting critical points where derivative does not exist.
- Incorrect tangent slope calculation.
- Not checking domain restrictions.

---

# Exam Tips

- Practice increasing/decreasing interval problems.
- Memorize maximum and minimum conditions.
- Solve optimization problems step-by-step.
- Practice tangent and normal equations.
- Learn applications of derivatives in physics and economics.

---

# Quick Revision

- Derivative gives rate of change.
- Tangent slope:

```
m=dy/dx
```

- Increasing:

```
f'(x)>0
```

- Decreasing:

```
f'(x)<0
```

- Maximum:

```
f''(x)<0
```

- Minimum:

```
f''(x)>0
```

- Critical point:

```
f'(x)=0
```

---

# Chapter Summary

- **Applications of Derivatives** explain how derivatives are used to study real-world changes.
- Derivatives help determine **rates of change, slopes of curves, tangent and normal equations**.
- The sign of the first derivative identifies whether a function is increasing or decreasing.
- Maximum and minimum concepts help solve optimization problems in mathematics and real-life situations.
- Derivatives are widely applied in **physics (motion), economics (profit/cost), engineering design, and scientific modelling**.

# ISC Class 12 Mathematics

