# Chapter 11: Integral Calculus

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 2  
> **Chapter:** Integral Calculus

---

# Introduction

Integral calculus is the branch of calculus that deals with finding the accumulated quantity from a given rate of change.

Integration is the reverse process of differentiation.

This chapter covers:

- Anti-derivatives
- Indefinite integrals
- Standard integration formulas
- Substitution method
- Integration by parts
- Partial fraction integration
- Definite integrals
- Fundamental theorem of calculus
- Area calculation

Applications:

- Finding areas
- Volumes
- Physics calculations
- Engineering problems

---

# PART A: ANTI-DERIVATIVES

---

# 1. Integration

## Definition

Integration is the process of finding the original function when its derivative is given.

Symbol:

\[
\boxed{\int}
\]

---

If:

\[
\frac{d}{dx}(F(x))=f(x)
\]

then:

\[
\boxed{
\int f(x)dx=F(x)+C
}
\]

---

# 2. Anti-Derivative

The function whose derivative gives the original function is called an anti-derivative.

---

Example:

Since:

\[
\frac{d}{dx}(x^2)=2x
\]

therefore:

\[
\boxed{
\int2x\,dx=x^2+C
}
\]

---

# PART B: INDEFINITE INTEGRALS

---

# 3. Indefinite Integral

An integral without limits is called an indefinite integral.

General form:

\[
\boxed{
\int f(x)dx=F(x)+C
}
\]

where:

C = constant of integration

---

# 4. Basic Properties of Integration

---

## Property 1

\[
\boxed{
\int kf(x)dx
=

k\int f(x)dx
}
\]

---

## Property 2

\[
\boxed{
\int[f(x)+g(x)]dx
=

\int f(x)dx+\int g(x)dx
}
\]

---

# PART C: STANDARD INTEGRALS

---

# 5. Algebraic Functions

---

\[
\boxed{
\int x^n dx=
\frac{x^{n+1}}{n+1}+C
}
\]

where:

\[
n\neq -1
\]

---

Example:

\[
\int x^3dx
\]

\[
=

\frac{x^4}{4}+C
\]

---

# 6. Important Standard Results

---

## Integral of Constant

\[
\boxed{
\int kdx=kx+C
}
\]

---

## Integral of \(e^x\)

\[
\boxed{
\int e^xdx=e^x+C
}
\]

---

## Integral of \(\frac1x\)

\[
\boxed{
\int\frac1x dx=\log|x|+C
}
\]

---

## Integral of \(\sin x\)

\[
\boxed{
\int\sin xdx=-\cos x+C
}
\]

---

## Integral of \(\cos x\)

\[
\boxed{
\int\cos xdx=\sin x+C
}
\]

---

## Integral of \(\sec^2x\)

\[
\boxed{
\int\sec^2x dx=\tan x+C
}
\]

---

## Integral of \(\cosec^2x\)

\[
\boxed{
\int\cosec^2x dx=-\cot x+C
}
\]

---

# PART D: METHODS OF INTEGRATION

---

# 7. Integration by Substitution

## Concept

Used when an integral contains a function and its derivative.

---

If:

\[
u=g(x)
\]

then:

\[
\boxed{
du=g'(x)dx
}
\]

---

Example:

\[
\int2x(x^2+1)^5dx
\]

Let:

\[
u=x^2+1
\]

Then:

\[
du=2xdx
\]

Integral becomes:

\[
\int u^5du
\]

\[
=

\frac{u^6}{6}+C
\]

Therefore:

\[
\boxed{
\frac{(x^2+1)^6}{6}+C
}
\]

---

# 8. Integration by Parts

Used for product of two functions.

Formula:

\[
\boxed{
\int uv\,dx
=

u\int vdx-\int
\left(\frac{du}{dx}\int vdx\right)dx
}
\]

---

Shortcut:

Choose:

L - Logarithmic  
I - Inverse trigonometric  
A - Algebraic  
T - Trigonometric  
E - Exponential

(LIATTE rule)

---

Example:

\[
\int x e^x dx
\]

Take:

\[
u=x
\]

\[
dv=e^xdx
\]

Then:

\[
du=dx
\]

\[
v=e^x
\]

Therefore:

\[
=xe^x-\int e^xdx
\]

\[
\boxed{
=e^x(x-1)+C
}
\]

---

# 9. Integration Using Partial Fractions

Used for rational functions:

\[
\frac{P(x)}{Q(x)}
\]

---

Example:

\[
\frac1{x(x+1)}
\]

can be written as:

\[
\frac A{x}+\frac B{x+1}
\]

Then integrate separately.

---

# PART E: DEFINITE INTEGRALS

---

# 10. Definite Integral

An integral with limits is called a definite integral.

Form:

\[
\boxed{
\int_a^b f(x)dx
}
\]

where:

- a = lower limit
- b = upper limit

---

# 11. Fundamental Theorem of Calculus

If:

\[
F'(x)=f(x)
\]

then:

\[
\boxed{
\int_a^b f(x)dx
=

F(b)-F(a)
}
\]

---

# 12. Properties of Definite Integrals

---

## Property 1

\[
\boxed{
\int_a^a f(x)dx=0
}
\]

---

## Property 2

\[
\boxed{
\int_a^b f(x)dx
=

-\int_b^a f(x)dx
}
\]

---

## Property 3

\[
\boxed{
\int_a^b f(x)dx
=

\int_a^c f(x)dx+
\int_c^b f(x)dx
}
\]

---

# PART F: AREA USING INTEGRATION

---

# 13. Area Under a Curve

For:

\[
y=f(x)
\]

between:

\[
x=a
\]

and:

\[
x=b
\]

Area:

\[
\boxed{
A=\int_a^b f(x)dx
}
\]

---

# 14. Area Between Two Curves

If:

Upper curve:

\[
y=f(x)
\]

Lower curve:

\[
y=g(x)
\]

then:

\[
\boxed{
A=
\int_a^b[f(x)-g(x)]dx
}
\]

---

# Important Formula Sheet

## Basic Integral

\[
\boxed{
\int x^ndx=
\frac{x^{n+1}}{n+1}+C
}
\]

---

## Exponential

\[
\boxed{
\int e^xdx=e^x+C
}
\]

---

## Logarithmic

\[
\boxed{
\int\frac1xdx=\log|x|+C
}
\]

---

## Trigonometric

\[
\boxed{
\int\sin xdx=-\cos x+C
}
\]

\[
\boxed{
\int\cos xdx=\sin x+C
}
\]

---

## Integration by Parts

\[
\boxed{
\int uv dx=u\int vdx-\int vdu
}
\]

---

## Definite Integral

\[
\boxed{
\int_a^bf(x)dx=F(b)-F(a)
}
\]

---

# Solved Examples

---

## Example 1

Evaluate:

\[
\int x^2dx
\]

Solution:

\[
=

\frac{x^3}{3}+C
\]

Answer:

\[
\boxed{
\frac{x^3}{3}+C
}
\]

---

## Example 2

Evaluate:

\[
\int_0^1x^2dx
\]

Solution:

\[
=

\left[\frac{x^3}{3}\right]_0^1
\]

\[
=

\frac13-0
\]

Answer:

\[
\boxed{\frac13}
\]

---

## Example 3

Find:

\[
\int\cos xdx
\]

Answer:

\[
\boxed{\sin x+C}
\]

---

# Common Mistakes

- Forgetting constant of integration C.
- Using power rule when \(n=-1\).
- Confusing differentiation and integration formulas.
- Applying integration by parts incorrectly.
- Forgetting limits in definite integrals.
- Making sign errors in trigonometric integrals.
- Forgetting upper limit minus lower limit.

---

# Chapter Summary

- Integration is the reverse process of differentiation.
- Indefinite integrals include an arbitrary constant.
- Different methods simplify different types of integrals.
- Definite integrals calculate exact accumulated values.
- Integration is widely used for area and physical applications.

\[
\boxed{
\text{Integration measures accumulation and total change.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 2

