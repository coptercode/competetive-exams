# Chapter 10: Differential Calculus – Differentiability

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 2  
> **Chapter:** Differential Calculus – Differentiability

---

# Introduction

Differentiation is a branch of calculus that studies the rate of change of a function.

It helps to find:

- Slope of curves
- Instantaneous velocity
- Maximum and minimum values
- Growth and decay rates

This chapter covers:

- Derivative from first principles
- Geometrical meaning of derivative
- Rules of differentiation
- Chain rule
- Implicit differentiation
- Parametric differentiation
- Second-order derivatives

---

# PART A: DERIVATIVE

---

# 1. Derivative

## Definition

The derivative of a function represents the rate of change of one quantity with respect to another.

Notation:

\[
\boxed{
\frac{dy}{dx}
}
\]

or

\[
\boxed{f'(x)}
\]

---

# 2. Derivative from First Principles

If:

\[
y=f(x)
\]

then derivative is defined as:

\[
\boxed{
f'(x)=
\lim_{h\to0}
\frac{f(x+h)-f(x)}{h}
}
\]

---

# 3. Geometrical Meaning of Derivative

The derivative represents the slope of the tangent to the curve at a point.

For a curve:

\[
y=f(x)
\]

slope of tangent:

\[
\boxed{
m=\frac{dy}{dx}
}
\]

---

# 4. Physical Meaning

Derivative represents rate of change.

Example:

Velocity:

\[
\boxed{
v=\frac{ds}{dt}
}
\]

Acceleration:

\[
\boxed{
a=\frac{dv}{dt}
}
\]

---

# PART B: BASIC DERIVATIVES

---

# 5. Derivative of Constant

If:

\[
y=c
\]

then:

\[
\boxed{
\frac{dy}{dx}=0
}
\]

---

# 6. Derivative of x

\[
\boxed{
\frac{d}{dx}(x)=1
}
\]

---

# 7. Power Rule

If:

\[
y=x^n
\]

then:

\[
\boxed{
\frac{dy}{dx}=nx^{n-1}
}
\]

---

Example:

\[
\frac{d}{dx}(x^3)
\]

\[
=3x^2
\]

---

# 8. Derivative of Sum

If:

\[
y=u+v
\]

then:

\[
\boxed{
\frac{dy}{dx}
=

\frac{du}{dx} +
\frac{dv}{dx}
}
\]

---

# PART C: RULES OF DIFFERENTIATION

---

# 9. Product Rule

If:

\[
y=uv
\]

then:

\[
\boxed{
\frac{dy}{dx}
=

u\frac{dv}{dx} +
v\frac{du}{dx}
}
\]

---

Example:

\[
y=x^2\sin x
\]

Derivative:

\[
=

x^2\cos x+2x\sin x
\]

---

# 10. Quotient Rule

If:

\[
y=\frac uv
\]

then:

\[
\boxed{
\frac{dy}{dx}
=

\frac{
v\frac{du}{dx}
-u\frac{dv}{dx}
}
{v^2}
}
\]

---

# 11. Chain Rule

Used for composite functions.

If:

\[
y=f(g(x))
\]

then:

\[
\boxed{
\frac{dy}{dx}
=

\frac{dy}{du}
\frac{du}{dx}
}
\]

---

Example:

\[
y=(x^2+1)^5
\]

Let:

\[
u=x^2+1
\]

Then:

\[
\frac{dy}{dx}
=

5u^4(2x)
\]

Therefore:

\[
\boxed{
10x(x^2+1)^4
}
\]

---

# PART D: DERIVATIVES OF IMPORTANT FUNCTIONS

---

# 12. Trigonometric Functions

---

\[
\boxed{
\frac{d}{dx}(\sin x)=\cos x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\cos x)=-\sin x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\tan x)=\sec^2x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\cot x)=-\csc^2x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\sec x)=\sec x\tan x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\cosec x)
=

-\cosec x\cot x
}
\]

---

# 13. Exponential Functions

---

\[
\boxed{
\frac{d}{dx}(e^x)=e^x
}
\]

---

\[
\boxed{
\frac{d}{dx}(a^x)=a^x\log a
}
\]

---

# 14. Logarithmic Functions

---

\[
\boxed{
\frac{d}{dx}(\log x)=\frac1x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\ln x)=\frac1x
}
\]

---

# PART E: IMPLICIT DIFFERENTIATION

---

# 15. Implicit Function

When y is not directly expressed in terms of x, the function is implicit.

Example:

\[
x^2+y^2=a^2
\]

---

Differentiate both sides:

\[
2x+2y\frac{dy}{dx}=0
\]

Therefore:

\[
\boxed{
\frac{dy}{dx}
=

-\frac xy
}
\]

---

# PART F: PARAMETRIC DIFFERENTIATION

---

# 16. Parametric Equations

If:

\[
x=f(t)
\]

and:

\[
y=g(t)
\]

then:

\[
\boxed{
\frac{dy}{dx}
=

\frac{dy/dt}{dx/dt}
}
\]

---

Example:

\[
x=t^2,\quad y=t^3
\]

Then:

\[
\frac{dx}{dt}=2t
\]

\[
\frac{dy}{dt}=3t^2
\]

Therefore:

\[
\frac{dy}{dx}
=

\frac{3t^2}{2t}
\]

\[
\boxed{
=\frac{3t}{2}
}
\]

---

# PART G: SECOND ORDER DERIVATIVES

---

# 17. Second Derivative

The derivative of the first derivative is called second derivative.

Notation:

\[
\boxed{
\frac{d^2y}{dx^2}
}
\]

---

If:

\[
\frac{dy}{dx}=f'(x)
\]

then:

\[
\boxed{
\frac{d^2y}{dx^2}
=

\frac{d}{dx}(f'(x))
}
\]

---

Example:

\[
y=x^3
\]

First derivative:

\[
\frac{dy}{dx}=3x^2
\]

Second derivative:

\[
\boxed{
\frac{d^2y}{dx^2}=6x
}
\]

---

# Important Formula Sheet

## First Principle

\[
\boxed{
f'(x)=
\lim_{h\to0}
\frac{f(x+h)-f(x)}h
}
\]

---

## Power Rule

\[
\boxed{
\frac{d}{dx}(x^n)=nx^{n-1}
}
\]

---

## Product Rule

\[
\boxed{
(uv)'=u'v+uv'
}
\]

---

## Quotient Rule

\[
\boxed{
\left(\frac uv\right)'
=

\frac{vu'-uv'}{v^2}
}
\]

---

## Chain Rule

\[
\boxed{
\frac{dy}{dx}
=

\frac{dy}{du}\frac{du}{dx}
}
\]

---

## Parametric Derivative

\[
\boxed{
\frac{dy}{dx}
=

\frac{dy/dt}{dx/dt}
}
\]

---

## Second Derivative

\[
\boxed{
\frac{d^2y}{dx^2}
}
\]

---

# Solved Examples

---

## Example 1

Differentiate:

\[
y=x^4
\]

Using power rule:

\[
\frac{dy}{dx}=4x^3
\]

Answer:

\[
\boxed{4x^3}
\]

---

## Example 2

Differentiate:

\[
y=\sin x+x^2
\]

Solution:

\[
\frac{dy}{dx}
=

\cos x+2x
\]

Answer:

\[
\boxed{\cos x+2x}
\]

---

## Example 3

Differentiate:

\[
y=(x^2+3)^2
\]

Using chain rule:

\[
=2(x^2+3)(2x)
\]

Answer:

\[
\boxed{
4x(x^2+3)
}
\]

---

# Common Mistakes

- Forgetting power rule exponent reduction.
- Applying product rule incorrectly.
- Missing chain rule in composite functions.
- Differentiating y as constant during implicit differentiation.
- Confusing derivative and second derivative.
- Forgetting parameter differentiation formula.
- Making sign errors in trigonometric derivatives.

---

# Chapter Summary

- Derivative measures rate of change.
- First principle defines the derivative mathematically.
- Differentiation rules simplify calculations.
- Chain rule helps differentiate composite functions.
- Implicit differentiation handles equations involving both x and y.
- Parametric differentiation is used when variables depend on another parameter.
- Second derivatives represent change of the rate of change.

\[
\boxed{
\text{Differentiation is the mathematics of change.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 2

