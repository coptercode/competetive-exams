# Chapter 7: Definite Integrals

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Definite Integrals

(Topics covered from uploaded ISC Class 12 Mathematics outline: properties of definite integrals, Fundamental Theorem of Calculus, evaluation methods, and applications in area calculation) :contentReference[oaicite:0]{index=0}

---

# Introduction

A **definite integral** is an integral with specified upper and lower limits. It represents the accumulated value of a function over a fixed interval.

Unlike indefinite integrals, definite integrals give a **numerical value** and do not contain the constant of integration.

---

# 1. Definition of Definite Integral

If:

```
F'(x)=f(x)
```

then:

```
∫ᵃᵇ f(x)dx = F(b)-F(a)
```

where:

- a = Lower limit
- b = Upper limit

---

# Notation

```
∫ᵃᵇ f(x)dx
```

means:

"The integral of f(x) from x=a to x=b."

---

# Example

Evaluate:

```
∫₀² x dx
```

Solution:

Integral:

```
x²/2
```

Applying limits:

```
=[x²/2]₀²
```

```
=4/2-0
```

```
=2
```

Answer:

```
2
```

---

# 2. Fundamental Theorem of Calculus

## Statement

The definite integral of a function can be calculated using its antiderivative.

---

Formula:

```
∫ᵃᵇ f(x)dx=F(b)-F(a)
```

where:

```
F'(x)=f(x)
```

---

# 3. Properties of Definite Integrals

---

# Property 1

Limits are equal:

```
∫ᵃᵃ f(x)dx=0
```

---

# Property 2

Changing limits changes sign:

```
∫ᵃᵇ f(x)dx
=
-∫ᵇᵃ f(x)dx
```

---

# Property 3

Splitting an integral:

```
∫ᵃᵇ f(x)dx

=

∫ᵃᶜ f(x)dx
+
∫ᶜᵇ f(x)dx
```

---

# Property 4

If:

```
f(x)=g(x)
```

then:

```
∫ᵃᵇf(x)dx
=
∫ᵃᵇg(x)dx
```

---

# Property 5

Constant multiplication:

```
∫ᵃᵇ kf(x)dx

=

k∫ᵃᵇ f(x)dx
```

---

# 4. Definite Integral of Even and Odd Functions

---

# Even Function

A function is even if:

```
f(-x)=f(x)
```

Example:

```
x²
```

---

Property:

```
∫₋ᵃᵃ f(x)dx

=

2∫₀ᵃ f(x)dx
```

---

# Odd Function

A function is odd if:

```
f(-x)=-f(x)
```

Example:

```
x³
```

---

Property:

```
∫₋ᵃᵃ f(x)dx=0
```

---

# 5. Evaluation of Definite Integrals

---

# Method 1: Direct Integration

Steps:

1. Find antiderivative.
2. Apply upper limit.
3. Apply lower limit.
4. Subtract.

---

Example:

Evaluate:

```
∫₁² x²dx
```

Solution:

Integral:

```
x³/3
```

Applying limits:

```
=[x³/3]₁²
```

```
=8/3-1/3
```

Answer:

```
7/3
```

---

# Method 2: Substitution Method

Used when variable substitution simplifies the integral.

---

Example:

```
∫₀¹ 2x(x²+1)²dx
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
∫u²du
```

---

# Method 3: Integration by Parts

Formula:

```
∫u dv=uv-∫vdu
```

---

# 6. Fundamental Properties of Definite Integrals

---

## Property:

If:

```
I=∫₀ᵃ f(x)dx
```

Then:

```
I=∫₀ᵃ f(a-x)dx
```

---

# Useful Result

```
∫₀ᵃ f(x)dx

=

∫₀ᵃ f(a-x)dx
```

---

# 7. Change of Variable in Definite Integral

If:

```
x=g(t)
```

then:

```
dx=g'(t)dt
```

Limits must also be changed.

---

Example:

```
∫₀¹ 2x dx
```

Let:

```
u=x²
```

Then:

```
du=2xdx
```

Limits:

When:

```
x=0,u=0
```

When:

```
x=1,u=1
```

Therefore:

```
∫₀¹du=1
```

---

# 8. Area Under Curves

Definite integrals are used to calculate area.

---

# Area Under Curve

If:

```
y=f(x)
```

between:

```
x=a and x=b
```

then:

```
Area=∫ᵃᵇ f(x)dx
```

---

# Conditions

If curve lies above x-axis:

```
Area = positive integral
```

If below x-axis:

```
Area = - integral
```

---

# 9. Area Between Two Curves

If:

Upper curve:

```
y=f(x)
```

Lower curve:

```
y=g(x)
```

then:

```
Area
=
∫ᵃᵇ[f(x)-g(x)]dx
```

---

# Example

Area between:

```
y=x²
```

and

```
y=x
```

from 0 to 1:

```
Area=∫₀¹(x-x²)dx
```

---

# 10. Applications of Definite Integrals

---

## Physics

Distance:

```
s=∫vdt
```

---

Work:

```
W=∫Fdx
```

---

## Economics

Total cost:

```
C=∫MC dx
```

---

## Geometry

Area calculation.

---

# ASCII Flowchart

```
            DEFINITE INTEGRALS
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
    Properties  Evaluation    Applications
       │            │             │
       ▼            ▼             ▼
   Symmetry    Substitution    Area
       │
       ▼
 Fundamental Theorem
```

---

# Important Formulae

| Concept             | Formula    |
| ------------------- | ---------- |
| Definite Integral   | ∫ᵃᵇf(x)dx  |
| Fundamental Theorem | F(b)-F(a)  |
| Limit Change        | ∫ᵃᵇ=-∫ᵇᵃ   |
| Same Limits         | ∫ᵃᵃ=0      |
| Even Function       | 2∫₀ᵃf(x)dx |
| Odd Function        | 0          |
| Area                | ∫ᵃᵇf(x)dx  |
| Area Between Curves | ∫ᵃᵇ(f-g)dx |

---

# Solved Examples

## Example 1

Evaluate:

```
∫₀³ x²dx
```

Solution:

```
=[x³/3]₀³
```

```
=27/3
```

Answer:

```
9
```

---

## Example 2

Evaluate:

```
∫₀π sinx dx
```

Solution:

Integral:

```
-cosx
```

Applying limits:

```
=[-cosx]₀π
```

```
=1-(-1)
```

Answer:

```
2
```

---

## Example 3

Evaluate:

```
∫₋¹¹ x³dx
```

Since:

```
x³
```

is an odd function:

```
Integral=0
```

Answer:

```
0
```

---

## Example 4

Find area under:

```
y=x
```

from:

```
0 to 2
```

Solution:

```
Area=∫₀²x dx
```

```
=[x²/2]₀²
```

```
=2
```

Answer:

```
2 square units
```

---

## Example 5

Evaluate:

```
∫₀¹ eˣdx
```

Solution:

Integral:

```
eˣ
```

Applying limits:

```
=e¹-e⁰
```

Answer:

```
e-1
```

---

# Common Mistakes

- Forgetting to apply upper and lower limits.
- Adding constant C in definite integrals.
- Changing limits incorrectly during substitution.
- Ignoring negative area.
- Confusing even and odd function properties.
- Incorrect sign while reversing limits.

---

# Exam Tips

- Memorize properties of definite integrals.
- Practice symmetry-based problems.
- Learn Fundamental Theorem of Calculus.
- Practice area problems.
- Be careful while changing limits.
- Always draw graphs for area questions.

---

# Quick Revision

- Definite integral gives a numerical value.

Formula:

```
∫ᵃᵇf(x)dx=F(b)-F(a)
```

- No constant C.
- Reversing limits changes sign.
- Odd function:

```
∫₋ᵃᵃf(x)dx=0
```

- Even function:

```
2∫₀ᵃf(x)dx
```

- Area:

```
∫upper-lower
```

---

# Chapter Summary

- **Definite integrals** calculate accumulated quantities over a fixed interval.
- The **Fundamental Theorem of Calculus** connects differentiation and integration.
- Properties of definite integrals simplify complex calculations using symmetry and transformations.
- Definite integrals are widely used to calculate **areas, displacement, work, cost, and other accumulated quantities**.
- This chapter forms the foundation for advanced calculus, physics, engineering, economics, and mathematical modelling.

# ISC Class 12 Mathematics

