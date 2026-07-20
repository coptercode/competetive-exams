# Chapter 6: Indefinite Integrals

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Indefinite Integrals

(Topics covered from uploaded ISC Class 12 Mathematics outline: integration techniques including substitution, integration by parts, partial fractions, and standard integral forms) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Integration** is the reverse process of differentiation. It is used to find the original function when its derivative is known.

If:

```
dy/dx = f(x)
```

then:

```
y = ∫f(x)dx
```

is called the integral of f(x).

---

# 1. Integration

## Definition

Integration is the process of finding a function whose derivative is given.

---

# Symbol

```
∫
```

is called the integration symbol.

---

# General Form

```
∫f(x)dx = F(x)+C
```

where:

- F(x) = Integral function
- C = Constant of integration

---

# Example

Since:

```
d/dx(x²)=2x
```

Therefore:

```
∫2x dx=x²+C
```

---

# 2. Indefinite Integral

## Definition

An integral without limits is called an indefinite integral.

---

Example:

```
∫x²dx
```

Solution:

```
=x³/3+C
```

---

# Difference Between Differentiation and Integration

| Differentiation  | Integration             |
| ---------------- | ----------------------- |
| Finds derivative | Finds original function |
| Decreases power  | Increases power         |
| No constant      | Includes constant C     |

---

# 3. Basic Properties of Integration

---

# Property 1

Integration of sum:

```
∫(f(x)+g(x))dx

=

∫f(x)dx+∫g(x)dx
```

---

# Property 2

Constant multiplication:

```
∫kf(x)dx

=

k∫f(x)dx
```

---

# Property 3

Difference:

```
∫(f(x)-g(x))dx

=

∫f(x)dx-∫g(x)dx
```

---

# 4. Standard Integrals

---

# Algebraic Functions

## Power Rule

```
∫xⁿdx = xⁿ⁺¹/(n+1)+C
```

where:

```
n≠-1
```

---

Example:

```
∫x³dx
```

Solution:

```
=x⁴/4+C
```

---

# 5. Trigonometric Integrals

---

## 1.

```
∫sinx dx=-cosx+C
```

---

## 2.

```
∫cosx dx=sinx+C
```

---

## 3.

```
∫sec²x dx=tanx+C
```

---

## 4.

```
∫cosec²x dx=-cotx+C
```

---

## 5.

```
∫secx tanx dx=secx+C
```

---

## 6.

```
∫cosecx cotx dx=-cosecx+C
```

---

# 6. Exponential Integrals

---

## 1.

```
∫eˣdx=eˣ+C
```

---

## 2.

```
∫aˣdx=aˣ/loga+C
```

---

# 7. Logarithmic Integral

```
∫1/x dx=log|x|+C
```

---

# 8. Substitution Method

## Definition

Used when one function is inside another function.

---

If:

```
u=g(x)
```

then:

```
∫f(g(x))g'(x)dx

=

∫f(u)du
```

---

# Example

Find:

```
∫2x(x²+1)³dx
```

Let:

```
u=x²+1
```

Then:

```
du=2xdx
```

Integral becomes:

```
∫u³du
```

```
=u⁴/4+C
```

Therefore:

```
=(x²+1)⁴/4+C
```

---

# 9. Integration by Parts

Used for integration of products.

---

# Formula

```
∫u dv = uv - ∫v du
```

---

# LIATE Rule

To choose u:

1. Logarithmic
2. Inverse trigonometric
3. Algebraic
4. Trigonometric
5. Exponential

---

# Example

Find:

```
∫x eˣ dx
```

Take:

```
u=x

dv=eˣdx
```

Then:

```
du=dx

v=eˣ
```

Using formula:

```
=x eˣ-∫eˣdx
```

```
=eˣ(x-1)+C
```

---

# 10. Integration by Partial Fractions

Used for rational functions:

```
P(x)/Q(x)
```

---

# Types

## Case 1

Different linear factors:

```
1/(x-a)(x-b)
```

---

## Case 2

Repeated factors:

```
1/(x-a)²
```

---

## Case 3

Quadratic factors:

```
1/(x²+a²)
```

---

# Example

Resolve:

```
1/(x²-1)
```

Factor:

```
(x-1)(x+1)
```

Then:

```
A/(x-1)+B/(x+1)
```

---

# 11. Important Standard Results

---

## Formula 1

```
∫dx/(x²+a²)

=

1/a tan⁻¹(x/a)+C
```

---

## Formula 2

```
∫dx/√(a²-x²)

=

sin⁻¹(x/a)+C
```

---

## Formula 3

```
∫dx/(a²-x²)

=

1/2a log|(a+x)/(a-x)|+C
```

---

# 12. Integration of Trigonometric Functions

---

## Formula

```
sin²x=(1-cos2x)/2
```

---

```
cos²x=(1+cos2x)/2
```

---

# Example

Find:

```
∫sin²x dx
```

Using identity:

```
=∫(1-cos2x)/2 dx
```

Therefore:

```
=x/2-sin2x/4+C
```

---

# 13. Definite vs Indefinite Integral

| Indefinite     | Definite              |
| -------------- | --------------------- |
| No limits      | Has limits            |
| Gives function | Gives numerical value |
| Contains C     | No constant           |

---

# 14. Applications of Indefinite Integrals

- Finding displacement from velocity.
- Finding velocity from acceleration.
- Area calculation.
- Solving differential equations.
- Physics modelling.

---

# ASCII Flowchart

```
             INDEFINITE INTEGRALS
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
    Standard     Methods     Properties
    Formulae        │
        │           ▼
        ▼      Substitution
 Integration        │
        │           ▼
        ▼      By Parts
    Applications
```

---

# Important Formulae

| Integral     | Result            |
| ------------ | ----------------- |
| ∫xⁿdx        | xⁿ⁺¹/(n+1)+C      |
| ∫1/x dx      | log               | x   | +C  |
| ∫eˣdx        | eˣ+C              |
| ∫sinx dx     | -cosx+C           |
| ∫cosx dx     | sinx+C            |
| ∫sec²x dx    | tanx+C            |
| ∫dx/(x²+a²)  | (1/a)tan⁻¹(x/a)+C |
| ∫dx/√(a²-x²) | sin⁻¹(x/a)+C      |
| ∫u dv        | uv-∫vdu           |

---

# Solved Examples

## Example 1

Find:

```
∫x⁴dx
```

Solution:

Using power rule:

```
=x⁵/5+C
```

Answer:

```
x⁵/5+C
```

---

## Example 2

Find:

```
∫cosx dx
```

Solution:

```
=sinx+C
```

---

## Example 3

Find:

```
∫2x/(x²+1)dx
```

Let:

```
u=x²+1
```

Then:

```
du=2xdx
```

Therefore:

```
=∫du/u
```

```
=log|u|+C
```

Answer:

```
log(x²+1)+C
```

---

## Example 4

Find:

```
∫xeˣdx
```

Using integration by parts:

```
=eˣ(x-1)+C
```

---

## Example 5

Find:

```
∫1/(1+x²)dx
```

Using formula:

```
=tan⁻¹x+C
```

---

# Common Mistakes

- Forgetting constant of integration.
- Applying power rule for n = -1.
- Choosing wrong substitution.
- Incorrect use of integration by parts.
- Missing absolute value in logarithmic integrals.
- Confusing differentiation and integration formulas.

---

# Exam Tips

- Memorize standard integrals.
- Practice substitution problems.
- Learn LIATE rule for integration by parts.
- Practice partial fraction decomposition.
- Always verify answers by differentiation.

---

# Quick Revision

- Integration is reverse differentiation.
- General form:

```
∫f(x)dx=F(x)+C
```

- Power rule:

```
∫xⁿdx=xⁿ⁺¹/(n+1)+C
```

- By parts:

```
∫u dv=uv-∫vdu
```

- Substitution simplifies composite functions.
- Partial fractions solve rational functions.

---

# Chapter Summary

- **Indefinite integration** is the reverse process of differentiation and is used to find original functions.
- Integration follows specific rules and standard formulas for algebraic, trigonometric, exponential, and logarithmic functions.
- Advanced techniques such as **substitution, integration by parts, and partial fractions** help solve complex integrals.
- Integration is a fundamental tool for finding **areas, displacement, velocity, and mathematical models**.
- These concepts form the basis for advanced calculus, physics, engineering, economics, and applied mathematics.

# ISC Class 12 Mathematics

