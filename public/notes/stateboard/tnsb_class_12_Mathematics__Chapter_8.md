# Chapter 8: Differentials and Partial Derivatives

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 2  
> **Chapter:** Differentials and Partial Derivatives

---

# Introduction

Differential calculus deals with small changes in variables and functions.

This chapter introduces:

- Differentials
- Linear approximation
- Error estimation
- Partial derivatives
- Chain rule
- Euler's theorem for homogeneous functions

These concepts are widely used in:

- Physics
- Engineering
- Economics
- Statistics
- Computer science

---

# PART A: DIFFERENTIALS

---

# 1. Differential of a Function

If:

\[
y=f(x)
\]

then the differential of y is:

\[
\boxed{
dy=f'(x)dx
}
\]

where:

- \(dx\) = small change in x
- \(dy\) = corresponding change in y

---

# 2. Difference and Differential

Actual change:

\[
\Delta y=f(x+\Delta x)-f(x)
\]

---

Differential change:

\[
\boxed{
dy=f'(x)dx
}
\]

For very small changes:

\[
\boxed{
\Delta y\approx dy
}
\]

---

# 3. Rules of Differentials

---

## Constant Function

If:

\[
y=c
\]

then:

\[
\boxed{
dy=0
}
\]

---

## Sum Rule

If:

\[
y=u+v
\]

then:

\[
\boxed{
dy=du+dv
}
\]

---

## Product Rule

If:

\[
y=uv
\]

then:

\[
\boxed{
dy=u\,dv+v\,du
}
\]

---

## Quotient Rule

If:

\[
y=\frac uv
\]

then:

\[
\boxed{
dy=
\frac{vdu-udv}{v^2}
}
\]

---

# 4. Linear Approximation

## Definition

Linear approximation estimates the value of a function near a known point using tangent line.

---

For:

\[
y=f(x)
\]

near:

\[
x=a
\]

the approximation is:

\[
\boxed{
f(x)\approx f(a)+f'(a)(x-a)
}
\]

---

# Example

Approximate:

\[
\sqrt{4.1}
\]

Take:

\[
f(x)=\sqrt{x}
\]

Near:

\[
a=4
\]

\[
f(4)=2
\]

Derivative:

\[
f'(x)=\frac1{2\sqrt{x}}
\]

\[
f'(4)=\frac14
\]

Therefore:

\[
f(4.1)\approx2+\frac14(0.1)
\]

\[
\boxed{
\sqrt{4.1}\approx2.025
}
\]

---

# 5. Errors and Approximations

The difference between actual and measured value is called error.

---

# Absolute Error

\[
\boxed{
\text{Absolute Error}
=

|\text{True value}-\text{Measured value}|
}
\]

---

# Relative Error

\[
\boxed{
\frac{\text{Absolute Error}}
{\text{True Value}}
}
\]

---

# Percentage Error

\[
\boxed{
\text{Percentage Error}
=

\text{Relative Error}\times100
}
\]

---

# 6. Error Using Differentials

If:

\[
y=f(x)
\]

then:

\[
\boxed{
\Delta y\approx dy=f'(x)dx
}
\]

---

Relative error:

\[
\boxed{
\frac{dy}{y}
}
\]

---

Percentage error:

\[
\boxed{
\frac{dy}{y}\times100
}
\]

---

# PART B: PARTIAL DERIVATIVES

---

# 7. Functions of Several Variables

A function containing more than one independent variable is called a function of several variables.

Example:

\[
z=f(x,y)
\]

---

Here:

- x and y are independent variables.
- z depends on both.

---

# 8. Partial Derivative

## Definition

The derivative of a function with respect to one variable while keeping other variables constant is called partial derivative.

Symbol:

\[
\boxed{
\frac{\partial z}{\partial x}
}
\]

---

# 9. Partial Derivative with Respect to x

For:

\[
z=x^2y+xy^2
\]

Treat y as constant.

\[
\frac{\partial z}{\partial x}
=

2xy+y^2
\]

---

# 10. Partial Derivative with Respect to y

Treat x as constant.

\[
\frac{\partial z}{\partial y}
=

x^2+2xy
\]

---

# 11. Second Order Partial Derivatives

First derivatives can be differentiated again.

---

Example:

\[
z=x^3y^2
\]

First derivative:

\[
\frac{\partial z}{\partial x}
=

3x^2y^2
\]

Second derivative:

\[
\boxed{
\frac{\partial^2z}{\partial x^2}
=

6xy^2
}
\]

---

# 12. Mixed Partial Derivatives

Differentiating with respect to different variables.

---

Example:

\[
\frac{\partial^2z}{\partial x\partial y}
\]

---

For continuous functions:

\[
\boxed{
\frac{\partial^2z}{\partial x\partial y}
=

\frac{\partial^2z}{\partial y\partial x}
}
\]

---

# 13. Chain Rule for Partial Derivatives

If:

\[
z=f(x,y)
\]

and:

\[
x=x(t),\quad y=y(t)
\]

then:

\[
\boxed{
\frac{dz}{dt}
=

\frac{\partial z}{\partial x}
\frac{dx}{dt} +
\frac{\partial z}{\partial y}
\frac{dy}{dt}
}
\]

---

# Example

Given:

\[
z=x^2+y^2
\]

where:

\[
x=t^2,\ y=t
\]

---

Partial derivatives:

\[
\frac{\partial z}{\partial x}=2x
\]

\[
\frac{\partial z}{\partial y}=2y
\]

---

Therefore:

\[
\frac{dz}{dt}
=

2x(2t)+2y(1)
\]

Substitute:

\[
x=t^2,y=t
\]

\[
\boxed{
\frac{dz}{dt}=4t^3+2t
}
\]

---

# 14. Homogeneous Functions

## Definition

A function is homogeneous if every term has the same total degree.

---

Example:

\[
f(x,y)=x^2+2xy+y^2
\]

Degree:

\[
2
\]

Therefore homogeneous of degree 2.

---

# 15. Euler's Theorem on Homogeneous Functions

## Statement

If:

\[
z=f(x,y)
\]

is homogeneous of degree n, then:

\[
\boxed{
x\frac{\partial z}{\partial x} +
y\frac{\partial z}{\partial y}
=

nz
}
\]

---

# Example

Verify Euler theorem for:

\[
z=x^2+y^2
\]

Degree:

\[
n=2
\]

---

Partial derivatives:

\[
\frac{\partial z}{\partial x}=2x
\]

\[
\frac{\partial z}{\partial y}=2y
\]

---

Left side:

\[
x(2x)+y(2y)
\]

\[
=2x^2+2y^2
\]

\[
=2(x^2+y^2)
\]

\[
=2z
\]

Hence proved.

---

# Comparison Tables

## Ordinary Derivative vs Partial Derivative

| Ordinary Derivative   | Partial Derivative            |
| --------------------- | ----------------------------- |
| One variable function | Several variable function     |
| Uses \(d/dx\)         | Uses \(\partial/\partial x\)  |
| All variables change  | Other variables kept constant |

---

## Actual Change vs Differential

| Actual Change  | Differential       |
| -------------- | ------------------ |
| Exact value    | Approximate value  |
| \(\Delta y\)   | \(dy\)             |
| Larger changes | Very small changes |

---

# Important Formula Sheet

## Differential

\[
dy=f'(x)dx
\]

---

## Linear Approximation

\[
f(x)\approx f(a)+f'(a)(x-a)
\]

---

## Error

\[
\frac{dy}{y}
\]

---

## Chain Rule

\[
\frac{dz}{dt}
=

\frac{\partial z}{\partial x}
\frac{dx}{dt} +
\frac{\partial z}{\partial y}
\frac{dy}{dt}
\]

---

## Euler's Theorem

\[
x\frac{\partial z}{\partial x} +
y\frac{\partial z}{\partial y}
=

nz
\]

---

# Solved Examples

## Example 1

Find differential of:

\[
y=x^3+2x
\]

Derivative:

\[
\frac{dy}{dx}=3x^2+2
\]

Therefore:

\[
\boxed{
dy=(3x^2+2)dx
}
\]

---

## Example 2

Find:

\[
\frac{\partial z}{\partial x}
\]

for:

\[
z=x^2y+3xy^2
\]

Keeping y constant:

\[
\boxed{
\frac{\partial z}{\partial x}=2xy+3y^2
}
\]

---

## Example 3

Find percentage error in area:

\[
A=\pi r^2
\]

Differentiate:

\[
dA=2\pi r\,dr
\]

Relative error:

\[
\frac{dA}{A}
=

\frac{2dr}{r}
\]

Percentage error:

\[
\boxed{
\frac{2dr}{r}\times100
}
\]

---

# Common Mistakes

- Confusing \(dy\) with actual change \(\Delta y\).
- Forgetting to keep other variables constant in partial derivatives.
- Using ordinary derivatives instead of partial derivatives.
- Applying Euler's theorem without checking homogeneity.
- Forgetting degree of homogeneous function.
- Making errors in chain rule.

---

# Chapter Summary

- Differentials estimate small changes in variables.
- Linear approximation uses tangent lines to estimate function values.
- Error calculations use differentials for approximation.
- Partial derivatives measure change with respect to one variable.
- Chain rule connects dependent variables.
- Euler's theorem applies to homogeneous functions.

\[
\boxed{
dy=f'(x)dx
}
\]

and

\[
\boxed{
x\frac{\partial z}{\partial x}
+y\frac{\partial z}{\partial y}=nz
}
\]

# Tamil Nadu State Board Class 12 Mathematics Volume 2

