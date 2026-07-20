# Chapter 7: Integrals

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Integrals

> **Note:** This chapter introduces integration as the inverse process of differentiation, indefinite and definite integrals, standard integration formulas, methods of integration, the Fundamental Theorem of Calculus, and properties of definite integrals.

---

# Introduction

Integration is one of the two fundamental operations of calculus, the other being differentiation. While differentiation determines the rate of change of a function, **integration** helps determine the original function when its derivative is known and is also used to calculate areas, volumes, work, and many physical quantities.

There are two main types of integrals:

- **Indefinite Integrals**
- **Definite Integrals**

---

# 1. Integration

## Definition

Integration is the inverse process of differentiation.

If

```

dF(x)/dx = f(x)

```

then

```

∫f(x) dx = F(x) + C

```

where

- **F(x)** = Antiderivative (Primitive)
- **C** = Constant of Integration

---

## Integral Sign

The symbol

```

∫

```

was introduced by **Gottfried Wilhelm Leibniz**.

---

# 2. Indefinite Integral

## Definition

The indefinite integral of a function is the family of all its antiderivatives.

Notation

```

∫f(x) dx

```

General form

```

∫f(x) dx = F(x) + C

```

---

## Constant of Integration

Since

```

d/dx (C) = 0

```

every indefinite integral must include an arbitrary constant.

---

# 3. Basic Standard Integrals

| Function | Integral |
|----------|----------|
| xⁿ (n ≠ -1) | xⁿ⁺¹/(n+1) + C |
| 1/x | ln|x| + C |
| eˣ | eˣ + C |
| aˣ | aˣ/ln(a) + C |
| sin x | -cos x + C |
| cos x | sin x + C |
| sec²x | tan x + C |
| cosec²x | -cot x + C |
| sec x tan x | sec x + C |
| cosec x cot x | -cosec x + C |
| 1/(1+x²) | tan⁻¹x + C |
| 1/√(1-x²) | sin⁻¹x + C |

---

# 4. Properties of Indefinite Integrals

## Property 1

```

∫[f(x)+g(x)]dx

=

∫f(x)dx

-

∫g(x)dx

```

---

## Property 2

```

∫k f(x)dx

=

k∫f(x)dx

```

where

```

k

```

is a constant.

---

# 5. Integration by Substitution

## Formula

If

```

t=g(x)

```

then

```

∫f(g(x))g'(x)dx

=

∫f(t)dt

```

---

## Steps

1. Choose a suitable substitution.
2. Differentiate the substitution.
3. Replace variables.
4. Integrate.
5. Substitute back.

---

## Example

```

∫2x(x²+1)⁵dx

```

Let

```

t=x²+1

```

Then

```

dt=2xdx

```

Therefore,

```

∫t⁵dt

=

t⁶/6+C

```

Hence,

```

(x²+1)⁶/6+C

```

---

# 6. Integration by Parts

## Formula

```

∫u dv

=

uv−∫v du

```

---

## ILATE Rule

To choose

```

u

```

prefer the following order:

- I → Inverse Trigonometric
- L → Logarithmic
- A → Algebraic
- T → Trigonometric
- E → Exponential

---

## Example

```

∫x eˣdx

```

Take

```

u=x

dv=eˣdx

```

Then

```

du=dx

v=eˣ

```

Hence,

```

xeˣ−eˣ+C

```

or

```

eˣ(x−1)+C

```

---

# 7. Integration by Partial Fractions

Used for rational functions.

General procedure

1. Factorize the denominator.
2. Express the fraction in partial fractions.
3. Integrate each term separately.

---

## Example

```

1/(x²−1)

=

1/2(x−1)

−

1/2(x+1)

```

Integrate each term independently.

---

# 8. Definite Integral

## Definition

A definite integral has fixed upper and lower limits.

Notation

```

∫ₐᵇf(x)dx

```

---

## Formula

If

```

F'(x)=f(x)

```

then

```

∫ₐᵇf(x)dx

=

F(b)

−

F(a)

```

This is known as the **Fundamental Theorem of Calculus**.

---

# 9. Fundamental Theorem of Calculus

## Statement

If

```

F'(x)=f(x)

```

then

```

∫ₐᵇf(x)dx

=

F(b)-F(a)

```

---

# 10. Properties of Definite Integrals

---

## Property 1

```

∫ₐᵃf(x)dx

=

0

```

---

## Property 2

```

∫ₐᵇf(x)dx

=

−∫ᵇₐf(x)dx

```

---

## Property 3

```

∫ₐᵇf(x)dx

-

∫ᵇ𝚌f(x)dx

=

∫ₐ𝚌f(x)dx

```

---

## Property 4

```

∫ₐᵇf(x)dx

=

∫ₐᵇf(a+b−x)dx

```

---

## Property 5

If

```

f(x)

```

is even,

```

∫₋ₐᵃf(x)dx

=

2∫₀ᵃf(x)dx

```

---

## Property 6

If

```

f(x)

```

is odd,

```

∫₋ₐᵃf(x)dx

=

0

```

---

# 11. Even and Odd Functions

## Even Function

```

f(-x)=f(x)

```

Examples

- x²
- cos x

---

## Odd Function

```

f(-x)=-f(x)

```

Examples

- x³
- sin x

---

# 12. Important Definite Integrals

```

∫₀π sinx dx

=

2

```

---

```

∫₀π cosx dx

=

0

```

---

```

∫₀π/2 sinx dx

=

1

```

---

```

∫₀π/2 cosx dx

=

1

```

---

# 13. Applications of Definite Integrals

- Area under curves
- Area between curves
- Volume calculations
- Average value of functions
- Physics and engineering applications

---

# Comparison Tables

## Indefinite vs Definite Integral

| Indefinite Integral | Definite Integral |
|---------------------|-------------------|
| No limits | Has limits |
| Result is a function | Result is a number |
| Contains +C | No constant of integration |

---

## Differentiation vs Integration

| Differentiation | Integration |
|-----------------|-------------|
| Finds rate of change | Finds accumulated quantity |
| Reduces degree | Increases degree (generally) |
| No arbitrary constant | Includes arbitrary constant (indefinite) |

---

## Integration by Substitution vs Integration by Parts

| Substitution | By Parts |
|--------------|----------|
| Variable transformation | Product of functions |
| Simplifies composite functions | Simplifies products |

---

# ASCII Diagrams

## Area Under a Curve

```

y

│ /

│ /

│ /

│***/***_____ x

Area = Integral

```

---

## Definite Integral

```

a b

│---------│

Area under curve

```

---

## Integration by Parts

```

∫u dv

↓

uv

↓

−∫v du

```

---

## Substitution Method

```

x

↓

t=g(x)

↓

Simpler Integral

```

---

# Solved Examples

### Example 1

Evaluate

```

∫x³dx

```

**Solution**

Using

```

∫xⁿdx

=

xⁿ⁺¹/(n+1)+C

```

```

∫x³dx

=

x⁴/4+C

```

---

### Example 2

Evaluate

```

∫(2x+3)dx

```

**Solution**

```

=x²+3x+C

```

---

### Example 3

Evaluate

```

∫2x(x²+4)³dx

```

**Solution**

Let

```

t=x²+4

```

Then

```

dt=2xdx

```

Therefore,

```

∫t³dt

=

t⁴/4+C

```

Hence,

```

(x²+4)⁴/4+C

```

---

### Example 4

Evaluate

```

∫xeˣdx

```

**Solution**

Using integration by parts,

```

=xeˣ−eˣ+C

```

or

```

=eˣ(x−1)+C

```

---

### Example 5

Evaluate

```

∫₀²3x²dx

```

**Solution**

```

=x³│₀²

```

```

=8−0

```

```

=8

```

---

### Example 6

Evaluate

```

∫₋₂²x³dx

```

**Solution**

Since

```

x³

```

is an odd function,

```

∫₋₂²x³dx

=

0

```

---

# Common Mistakes

- Forgetting to include the **constant of integration (+C)** in indefinite integrals.
- Applying the power rule to **1/x**; remember that **∫1/x dx = ln|x| + C**, not **x⁰/0**.
- Choosing an unsuitable substitution, making the integral more complicated.
- Ignoring the **ILATE rule** while selecting **u** in integration by parts.
- Forgetting to substitute back the original variable after using substitution.
- Adding **+C** to definite integrals; definite integrals evaluate to numerical values and do **not** include an arbitrary constant.
- Applying properties of even and odd functions without verifying the symmetry of the interval.
- Making sign errors while evaluating **F(b) − F(a)** in definite integrals.

---

# Chapter Summary

- **Integration** is the inverse process of differentiation and is used to determine antiderivatives and accumulated quantities.
- An **indefinite integral** represents a family of functions and always includes an arbitrary constant **C**.
- A **definite integral** represents the accumulated value of a function over a specified interval and evaluates to a numerical value.
- Standard integration formulas provide antiderivatives for algebraic, trigonometric, exponential, logarithmic, and inverse trigonometric functions.
- The main methods of integration are **substitution**, **integration by parts**, and **partial fractions**.
- The **Fundamental Theorem of Calculus** connects differentiation and integration through the relation **∫ₐᵇf(x)dx = F(b) − F(a)**.
- Properties of definite integrals, especially those involving **even** and **odd** functions, simplify many calculations.
- Integration forms the basis for finding areas, volumes, average values, and solving numerous problems in mathematics, physics, engineering, and economics.






# CBSE Class 12 Mathematics

