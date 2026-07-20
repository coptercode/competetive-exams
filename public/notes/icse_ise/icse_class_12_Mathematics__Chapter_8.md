# Chapter 8: Differential Equations

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Differential Equations

(Topics covered from uploaded ISC Class 12 Mathematics outline: order and degree, formation of differential equations, solving first-order equations, variable separation, homogeneous equations, and linear differential equations) :contentReference[oaicite:0]{index=0}

---

# Introduction

A **differential equation** is an equation involving a dependent variable, independent variable, and derivatives of the dependent variable.

Differential equations are used to represent changing quantities in:

- Physics
- Engineering
- Biology
- Economics
- Population studies
- Weather modelling

---

# 1. Differential Equation

## Definition

An equation containing derivatives of a dependent variable with respect to an independent variable is called a differential equation.

---

# Example

```
dy/dx = 3x²
```

is a differential equation.

---

# 2. Order of Differential Equation

## Definition

The order of a differential equation is the highest order derivative present in the equation.

---

# Examples

## First Order

```
dy/dx + y = 0
```

Highest derivative:

```
dy/dx
```

Order = 1

---

## Second Order

```
d²y/dx² + dy/dx = x
```

Order = 2

---

## Third Order

```
d³y/dx³ = y
```

Order = 3

---

# 3. Degree of Differential Equation

## Definition

The degree is the highest power of the highest order derivative after removing radicals and fractions involving derivatives.

---

# Example

```
(d²y/dx²)² + dy/dx = x
```

Order:

```
2
```

Degree:

```
2
```

---

# Example

```
√(d²y/dx²)+x=0
```

Not a polynomial in derivatives.

Degree is not defined.

---

# 4. Formation of Differential Equations

## Definition

Formation means obtaining a differential equation from a given family of curves.

---

# Steps

1. Write the given equation.
2. Differentiate with respect to x.
3. Eliminate arbitrary constants.
4. Obtain differential equation.

---

# Example

Given:

```
y=mx+c
```

Differentiate:

```
dy/dx=m
```

Substitute:

```
y=x(dy/dx)+c
```

Differentiate again:

```
d²y/dx²=0
```

Differential equation:

```
d²y/dx²=0
```

---

# 5. Solution of Differential Equation

## Definition

A solution is a relation between variables that satisfies the differential equation.

---

# Types of Solutions

## General Solution

Contains arbitrary constants.

Example:

```
y=x²+C
```

---

## Particular Solution

Obtained after applying initial conditions.

---

# 6. Variable Separable Differential Equations

## Definition

A differential equation where variables can be separated is called variable separable.

---

# General Form

```
dy/dx=f(x)g(y)
```

Separating:

```
dy/g(y)=f(x)dx
```

---

# Example

Solve:

```
dy/dx=x/y
```

Separate:

```
y dy=x dx
```

Integrate:

```
∫y dy=∫x dx
```

```
y²/2=x²/2+C
```

Therefore:

```
y²=x²+C
```

---

# 7. Homogeneous Differential Equation

## Definition

A differential equation is homogeneous if it can be written as:

```
dy/dx=f(y/x)
```

---

# Substitution

Put:

```
y=vx
```

Differentiate:

```
dy/dx=v+x dv/dx
```

---

# Example Form

```
dy/dx=(x+y)/(x-y)
```

Since RHS depends on:

```
y/x
```

It is homogeneous.

---

# 8. Linear Differential Equation

## Definition

A first-order linear differential equation is of the form:

```
dy/dx + Py = Q
```

where:

- P and Q are functions of x.

---

# Solution Method

Using integrating factor (I.F.):

```
I.F.=e∫Pdx
```

Solution:

```
y(I.F.)=∫Q(I.F.)dx+C
```

---

# Example

Solve:

```
dy/dx+y=x
```

Here:

```
P=1
```

Integrating factor:

```
I.F.=eˣ
```

Solution:

```
yeˣ=∫xeˣdx+C
```

---

# 9. Integrating Factor

## Definition

The factor used to solve a linear differential equation is called the integrating factor.

---

Formula:

```
I.F.=e∫Pdx
```

---

# 10. Applications of Differential Equations

---

# Population Growth

Growth model:

```
dP/dt=kP
```

Solution:

```
P=P₀eᵏᵗ
```

---

# Radioactive Decay

Decay equation:

```
dN/dt=-kN
```

Solution:

```
N=N₀e⁻ᵏᵗ
```

---

# Motion

Velocity:

```
dv/dt=a
```

---

# Cooling Law

Newton's cooling law:

```
dT/dt=k(T-Ts)
```

---

# ASCII Flowchart

```
          DIFFERENTIAL EQUATIONS
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
   Order/Degree Formation    Solution
                      │
                      ▼
              First Order Equations
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
 Variable       Homogeneous      Linear
 Separation     Equation        Equation
```

---

# Important Formulae

| Concept                  | Formula            |
| ------------------------ | ------------------ |
| Order                    | Highest derivative |
| Linear Equation          | dy/dx+Py=Q         |
| Integrating Factor       | e∫Pdx              |
| Variable Separation      | dy/g(y)=f(x)dx     |
| Homogeneous Substitution | y=vx               |
| Population Growth        | dP/dt=kP           |
| Radioactive Decay        | dN/dt=-kN          |

---

# Solved Examples

## Example 1

Find order and degree:

```
(d²y/dx²)³ + dy/dx = x
```

Solution:

Highest derivative:

```
d²y/dx²
```

Order:

```
2
```

Degree:

```
3
```

---

## Example 2

Solve:

```
dy/dx=2x
```

Solution:

Integrate:

```
∫dy=∫2x dx
```

Therefore:

```
y=x²+C
```

---

## Example 3

Solve:

```
dy/dx=x/y
```

Solution:

Separate:

```
y dy=x dx
```

Integrate:

```
y²/2=x²/2+C
```

Answer:

```
y²=x²+C
```

---

## Example 4

Find integrating factor:

```
dy/dx+3y=x
```

Here:

```
P=3
```

Therefore:

```
I.F.=e³ˣ
```

---

## Example 5

Solve:

```
dy/dx+y=0
```

Solution:

Separate:

```
dy/y=-dx
```

Integrate:

```
log y=-x+C
```

Therefore:

```
y=Ce⁻ˣ
```

---

# Common Mistakes

- Confusing order and degree.
- Forgetting arbitrary constant C.
- Separating variables incorrectly.
- Applying integrating factor wrongly.
- Not converting homogeneous equations using y=vx.
- Ignoring initial conditions.

---

# Exam Tips

- Practice identifying order and degree.
- Learn all first-order differential equation methods.
- Memorize integrating factor formula.
- Practice variable separation problems.
- Understand applications like growth and decay models.

---

# Quick Revision

- Differential equation contains derivatives.
- Order = highest derivative.
- Degree = power of highest derivative.
- Variable separation:

```
dy/g(y)=f(x)dx
```

- Homogeneous:

```
y=vx
```

- Linear:

```
dy/dx+Py=Q
```

- Integrating factor:

```
e∫Pdx
```

---

# Chapter Summary

- **Differential equations** describe relationships involving changing quantities and their rates of change.
- The concepts of **order, degree, and formation** help classify differential equations.
- First-order differential equations can be solved using methods such as **variable separation, homogeneous substitution, and linear differential equation techniques**.
- Integrating factors provide a systematic method for solving linear equations.
- Differential equations are widely used in **physics, engineering, economics, biology, population modelling, and scientific research**.

# ISC Class 12 Mathematics

