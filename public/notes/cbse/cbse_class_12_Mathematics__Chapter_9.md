# Chapter 9: Differential Equations

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Differential Equations

> **Note:** This chapter introduces differential equations, their formation, order and degree, general and particular solutions, methods of solving first-order first-degree differential equations, variable separable equations, homogeneous equations, and linear differential equations.

---

# Introduction

A **differential equation** is an equation involving one or more derivatives of an unknown function. Differential equations are widely used to describe natural phenomena such as population growth, radioactive decay, motion of objects, electric circuits, heat transfer, and many engineering and scientific processes.

In CBSE Class 12, the focus is on **first-order first-degree differential equations** and their solution methods.

---

# 1. Differential Equation

## Definition

A **differential equation** is an equation involving an independent variable, a dependent variable, and one or more derivatives of the dependent variable.

General form

```

F(x, y, dy/dx, d²y/dx², ...) = 0

```

where

- **x** = Independent variable
- **y** = Dependent variable

---

## Examples

```

dy/dx = 3x²

```

```

d²y/dx² + y = 0

```

```

(x²+1)dy/dx = y

```

---

# 2. Order of a Differential Equation

## Definition

The **order** of a differential equation is the order of the highest derivative present in the equation.

---

## Examples

### Example 1

```

dy/dx + y = 0

```

Highest derivative

```

dy/dx

```

Order

```

1

```

---

### Example 2

```

d²y/dx² + 3dy/dx + y = 0

```

Highest derivative

```

d²y/dx²

```

Order

```

2

```

---

# 3. Degree of a Differential Equation

## Definition

The **degree** of a differential equation is the power of the highest-order derivative after the equation has been made free from radicals and fractions involving derivatives.

---

## Examples

### Example 1

```

(dy/dx)² + y = 0

```

Order

```

1

```

Degree

```

2

```

---

### Example 2

```

d²y/dx² + y = 0

```

Order

```

2

```

Degree

```

1

```

---

## Conditions for Degree

The degree is defined only when:

- The equation is polynomial in derivatives.
- There are no radicals or fractional powers of derivatives.

---

# 4. Solution of a Differential Equation

## Definition

A function that satisfies the differential equation is called its **solution**.

---

## General Solution

Contains one or more arbitrary constants.

Example

Given

```

dy/dx = 2x

```

Integrating,

```

y = x² + C

```

---

## Particular Solution

Obtained after applying given initial or boundary conditions.

Example

If

```

y = 5

```

when

```

x = 2

```

then

```

5 = 4 + C

```

```

C = 1

```

Therefore,

```

y = x² + 1

```

---

# 5. Formation of Differential Equations

A differential equation is formed by eliminating arbitrary constants from a family of curves.

---

## Steps

1. Differentiate the given equation.
2. Eliminate the arbitrary constant(s).
3. Obtain the required differential equation.

---

## Example

Given

```

y = x² + C

```

Differentiate.

```

dy/dx = 2x

```

Hence,

```

dy/dx = 2x

```

is the required differential equation.

---

# 6. First-Order First-Degree Differential Equations

General form

```

dy/dx = f(x, y)

```

These are the equations mainly studied in Class 12.

---

# 7. Variable Separable Differential Equations

## Standard Form

```

dy/dx = f(x)g(y)

```

---

## Method of Solution

Separate the variables.

```

dy/g(y) = f(x) dx

```

Integrate both sides.

```

∫dy/g(y)

=

∫f(x)dx

```

---

## Example

Solve

```

dy/dx = xy

```

Solution

Separate variables.

```

dy/y = x dx

```

Integrate.

```

ln|y|

=

x²/2 + C

```

Therefore,

```

y = Ce^(x²/2)

```

---

# 8. Homogeneous Differential Equations

## Standard Form

```

dy/dx = F(y/x)

```

or

```

F(x,y)

```

where the numerator and denominator are homogeneous functions of the same degree.

---

## Substitution

Take

```

y = vx

```

Then

```

dy/dx = v + x(dv/dx)

```

Substitute into the equation and solve by separation of variables.

---

# 9. Linear Differential Equations

## Standard Form

```

dy/dx + Py = Q

```

where

- **P** and **Q** are functions of **x** or constants.

---

# 10. Integrating Factor (I.F.)

## Formula

```

I.F.

=

e^(∫P dx)

```

---

## Solution Formula

Multiply both sides by the integrating factor.

```

d/dx

(y × I.F.)

=

Q × I.F.

```

Integrate.

```

y × I.F.

=

∫Q(I.F.)dx + C

```

---

# 11. Exact Differential Equations (Basic Idea)

A differential equation of the form

```

M dx + N dy = 0

```

is **exact** if

```

∂M/∂y

=

∂N/∂x

```

This concept is introduced for higher studies and is not emphasized in the CBSE Class 12 syllabus.

---

# 12. Applications of Differential Equations

Differential equations are used in:

- Population growth
- Radioactive decay
- Newton's law of cooling
- Motion of particles
- Electric circuits
- Economics
- Biology
- Fluid mechanics

---

# 13. Verification of Solution

To verify a solution,

1. Differentiate the obtained function.
2. Substitute into the original differential equation.
3. Check whether both sides are equal.

---

# Comparison Tables

## General Solution vs Particular Solution

| General Solution | Particular Solution |
|------------------|---------------------|
| Contains arbitrary constants | Constants are determined |
| Represents a family of curves | Represents a single curve |

---

## Ordinary vs Partial Differential Equation

| Ordinary Differential Equation | Partial Differential Equation |
|--------------------------------|-------------------------------|
| Ordinary derivatives | Partial derivatives |
| One independent variable | Two or more independent variables |

---

## Variable Separable vs Linear Differential Equation

| Variable Separable | Linear |
|--------------------|--------|
| Variables can be separated | Uses integrating factor |
| Form: dy/dx = f(x)g(y) | Form: dy/dx + Py = Q |

---

# ASCII Diagrams

## General Solution

```

Family of Curves

/

/

/

/

Each curve

↓

Different value of C

```

---

## Variable Separation

```

dy/dx

↓

Separate Variables

↓

Integrate

↓

Solution

```

---

## Linear Differential Equation

```

dy/dx + Py = Q

↓

Integrating Factor

↓

General Solution

```

---

## Order of a Differential Equation

```

Highest Derivative

↓

Order

```

---

# Solved Examples

### Example 1

Find the order and degree of

```

(d²y/dx²)² + dy/dx = 0

```

**Solution**

Highest derivative

```

d²y/dx²

```

Order

```

2

```

Power of highest derivative

```

2

```

Degree

```

2

```

---

### Example 2

Form the differential equation of

```

y = x² + C

```

**Solution**

Differentiate.

```

dy/dx = 2x

```

Hence, the required differential equation is

```

dy/dx = 2x

```

---

### Example 3

Solve

```

dy/dx = 3x²

```

**Solution**

Integrate both sides.

```

∫dy

=

∫3x²dx

```

```

y

=

x³ + C

```

---

### Example 4

Solve

```

dy/dx = xy

```

**Solution**

Separate variables.

```

dy/y = x dx

```

Integrate.

```

ln|y|

=

x²/2 + C

```

Therefore,

```

y = Ce^(x²/2)

```

---

### Example 5

Solve

```

dy/dx + y = 0

```

**Solution**

This is a linear differential equation.

```

P=1

```

Integrating factor

```

e^∫1dx

=eˣ

```

Multiply throughout by

```

eˣ

```

```

d/dx

(yeˣ)=0

```

Integrating,

```

yeˣ=C

```

Hence,

```

y=Ce⁻ˣ

```

---

### Example 6

Find the particular solution of

```

dy/dx = 2x

```

given

```

y=5

when

x=2

```

**Solution**

General solution

```

y=x²+C

```

Using

```

5=4+C

```

```

C=1

```

Therefore,

```

y=x²+1

```

---

# Common Mistakes

- Confusing the **order** of a differential equation with its **degree**.
- Determining the degree before removing radicals or fractional powers involving derivatives.
- Forgetting to include the arbitrary constant while finding the general solution.
- Making errors while separating variables in variable separable equations.
- Using an incorrect integrating factor for linear differential equations.
- Forgetting to multiply the entire equation by the integrating factor before integrating.
- Failing to apply the given initial condition to obtain the particular solution.
- Not verifying the obtained solution by substituting it back into the original differential equation.

---

# Chapter Summary

- A **differential equation** is an equation involving derivatives of an unknown function.
- The **order** is determined by the highest-order derivative, while the **degree** is the power of the highest-order derivative after simplifying the equation.
- The **general solution** contains arbitrary constants, whereas the **particular solution** is obtained after applying initial or boundary conditions.
- Differential equations can be formed by eliminating arbitrary constants from a family of curves.
- **Variable separable differential equations** are solved by separating variables and integrating both sides.
- **Homogeneous differential equations** are solved using the substitution **y = vx**.
- **Linear differential equations** of the form **dy/dx + Py = Q** are solved using the **integrating factor**, **e^(∫P dx)**.
- Differential equations are widely used to model real-world phenomena in science, engineering, economics, biology, and physics.





# CBSE Class 12 Mathematics

