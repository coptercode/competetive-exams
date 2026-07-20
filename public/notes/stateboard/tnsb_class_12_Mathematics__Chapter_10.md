# Chapter 10: Ordinary Differential Equations

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 2  
> **Chapter:** Ordinary Differential Equations

---

# Introduction

A differential equation is an equation involving:

- Dependent variables
- Independent variables
- Derivatives

Differential equations are used to model:

- Population growth
- Motion
- Electricity
- Heat transfer
- Physical systems

---

# 1. Definition of Differential Equation

An equation involving derivatives of a dependent variable with respect to an independent variable is called a differential equation.

Example:

\[
\boxed{
\frac{dy}{dx}=x+y
}
\]

---

# 2. Ordinary Differential Equation (ODE)

## Definition

A differential equation involving derivatives with respect to only one independent variable is called an ordinary differential equation.

Example:

\[
\frac{dy}{dx}+y=x
\]

---

# 3. Order of Differential Equation

## Definition

The order of a differential equation is the highest order derivative present in the equation.

---

Examples:

### Example 1

\[
\frac{dy}{dx}+y=0
\]

Highest derivative:

\[
\frac{dy}{dx}
\]

Order:

\[
\boxed{1}
\]

---

### Example 2

\[
\frac{d^2y}{dx^2}+3\frac{dy}{dx}+y=0
\]

Highest derivative:

\[
\frac{d^2y}{dx^2}
\]

Order:

\[
\boxed{2}
\]

---

# 4. Degree of Differential Equation

## Definition

The degree is the power of the highest order derivative after removing fractions and radicals.

---

Example:

\[
\left(\frac{d^2y}{dx^2}\right)^3+
\frac{dy}{dx}=0
\]

Order:

\[
2
\]

Degree:

\[
\boxed{3}
\]

---

# 5. Formation of Differential Equations

A differential equation can be formed by eliminating arbitrary constants from a given equation.

---

# Example

Given:

\[
y=mx+c
\]

There are two arbitrary constants:

m and c

Differentiate:

\[
\frac{dy}{dx}=m
\]

Differentiate again:

\[
\frac{d^2y}{dx^2}=0
\]

This is the differential equation.

---

# 6. General Solution

## Definition

A solution containing arbitrary constants equal to the order of the differential equation is called the general solution.

Example:

\[
y=Ce^x
\]

where C is arbitrary constant.

---

# 7. Particular Solution

## Definition

A solution obtained by assigning specific values to arbitrary constants is called a particular solution.

---

Example:

General solution:

\[
y=Ce^x
\]

If:

\[
C=2
\]

then:

\[
y=2e^x
\]

is a particular solution.

---

# 8. Variable Separable Differential Equations

## Form

\[
\boxed{
\frac{dy}{dx}=f(x)g(y)
}
\]

---

Variables can be separated:

\[
\frac{dy}{g(y)}
=

f(x)dx
\]

---

Integrate both sides:

\[
\boxed{
\int\frac{dy}{g(y)}
=

\int f(x)dx+C
}
\]

---

# Example

Solve:

\[
\frac{dy}{dx}=xy
\]

Separate:

\[
\frac{dy}{y}=x dx
\]

Integrate:

\[
\int\frac{dy}{y}
=

\int xdx
\]

\[
\ln y=\frac{x^2}{2}+C
\]

Therefore:

\[
\boxed{
y=Ce^{x^2/2}
}
\]

---

# 9. Homogeneous Differential Equations

## Definition

A differential equation is homogeneous if it can be written as:

\[
\boxed{
\frac{dy}{dx}=F\left(\frac yx\right)
}
\]

---

# Substitution

Put:

\[
\boxed{
y=vx
}
\]

Differentiate:

\[
\frac{dy}{dx}
=

v+x\frac{dv}{dx}
\]

---

Then substitute and solve.

---

# Example

Given:

\[
\frac{dy}{dx}=\frac{x+y}{x}
\]

Rewrite:

\[
=\frac{1+y/x}{1}
\]

Put:

\[
y=vx
\]

Then:

\[
\frac{dy}{dx}=v+x\frac{dv}{dx}
\]

Solve after substitution.

---

# 10. Linear Differential Equations

## Standard Form

\[
\boxed{
\frac{dy}{dx}+Py=Q
}
\]

where:

- P = function of x
- Q = function of x

---

# Solution Method

Using integrating factor (I.F.)

\[
\boxed{
I.F.=e^{\int Pdx}
}
\]

---

Solution:

\[
\boxed{
y(I.F.)=\int Q(I.F.)dx+C
}
\]

---

# 11. Finding Integrating Factor

For:

\[
\frac{dy}{dx}+Py=Q
\]

Integrating factor:

\[
\boxed{
e^{\int Pdx}
}
\]

---

# Example

Solve:

\[
\frac{dy}{dx}+y=x
\]

Here:

\[
P=1
\]

Integrating factor:

\[
I.F.=e^{\int1dx}
\]

\[
=e^x
\]

Multiply equation by:

\[
e^x
\]

\[
e^x\frac{dy}{dx}+e^xy=xe^x
\]

Left side:

\[
\frac{d}{dx}(ye^x)
\]

Therefore:

\[
ye^x=\int xe^xdx+C
\]

---

# 12. Applications of Differential Equations

Differential equations are used in:

---

## Population Growth

\[
\frac{dP}{dt}=kP
\]

---

## Radioactive Decay

\[
\frac{dN}{dt}=-\lambda N
\]

---

## Newton's Law of Cooling

\[
\frac{dT}{dt}=k(T-T_s)
\]

---

# Comparison Tables

## General vs Particular Solution

| General Solution               | Particular Solution         |
| ------------------------------ | --------------------------- |
| Contains arbitrary constants   | Constants have fixed values |
| Represents family of solutions | Represents one solution     |

---

## Homogeneous vs Linear Differential Equation

| Homogeneous               | Linear                  |
| ------------------------- | ----------------------- |
| Uses \(y/x\) substitution | Uses integrating factor |
| Variables are transformed | Standard form required  |
| First order usually       | First order             |

---

# Important Formula Sheet

## Variable Separation

\[
\int\frac{dy}{g(y)}
=

\int f(x)dx+C
\]

---

## Homogeneous Substitution

\[
y=vx
\]

---

## Linear Equation

\[
\frac{dy}{dx}+Py=Q
\]

---

## Integrating Factor

\[
\boxed{
I.F.=e^{\int Pdx}
}
\]

---

## Linear Solution

\[
\boxed{
y(I.F.)=\int Q(I.F.)dx+C
}
\]

---

# Solved Examples

## Example 1

Find order and degree:

\[
\left(\frac{d^3y}{dx^3}\right)^2
+\frac{dy}{dx}=0
\]

Highest derivative:

\[
\frac{d^3y}{dx^3}
\]

Order:

\[
\boxed{3}
\]

Degree:

\[
\boxed{2}
\]

---

## Example 2

Solve:

\[
\frac{dy}{dx}=2x
\]

Integrate:

\[
y=\int2xdx
\]

\[
\boxed{
y=x^2+C
}
\]

---

## Example 3

Find integrating factor:

\[
\frac{dy}{dx}+3y=x
\]

Here:

\[
P=3
\]

Therefore:

\[
I.F.=e^{\int3dx}
\]

\[
\boxed{
I.F.=e^{3x}
}
\]

---

# Common Mistakes

- Confusing order and degree.
- Forgetting to add constant C after integration.
- Using wrong substitution in homogeneous equations.
- Forgetting integrating factor in linear equations.
- Not separating variables correctly.
- Mixing general and particular solutions.
- Ignoring initial conditions.

---

# Chapter Summary

- Differential equations describe relationships involving derivatives.
- Order is the highest derivative present.
- Degree is the power of the highest derivative.
- Variable separable equations are solved by separating variables.
- Homogeneous equations use:

\[
y=vx
\]

- Linear equations are solved using integrating factors:

\[
I.F.=e^{\int Pdx}
\]

- Differential equations are essential tools for modelling real-world systems.

\[
\boxed{
\frac{dy}{dx}+Py=Q
}
\]

is the standard linear first-order differential equation.

# Tamil Nadu State Board Class 12 Mathematics Volume 2

