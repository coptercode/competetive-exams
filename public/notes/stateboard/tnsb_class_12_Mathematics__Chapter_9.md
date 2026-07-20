# Chapter 9: Applications of Integration

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 2  
> **Chapter:** Applications of Integration

---

# Introduction

Integration is the inverse process of differentiation.

Applications of integration help us to find:

- Area under curves
- Area between two curves
- Volume of solids
- Surface measurements

---

# PART A: DEFINITE INTEGRALS

---

# 1. Definite Integral

## Definition

A definite integral is an integral with fixed limits.

It is written as:

\[
\boxed{
\int_a^b f(x)\,dx
}
\]

where:

- a = lower limit
- b = upper limit

---

# 2. Fundamental Theorem of Calculus

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

# 3. Properties of Definite Integrals

---

# Property 1

\[
\boxed{
\int_a^b f(x)dx
=

-\int_b^a f(x)dx
}
\]

---

# Property 2

\[
\boxed{
\int_a^a f(x)dx=0
}
\]

---

# Property 3

If:

\[
a<b<c
\]

then:

\[
\boxed{
\int_a^c f(x)dx
=

\int_a^b f(x)dx+
\int_b^c f(x)dx
}
\]

---

# Property 4

For symmetric limits:

\[
\boxed{
\int_{-a}^{a}f(x)dx
=

2\int_0^a f(x)dx
}
\]

when f(x) is even.

---

# Property 5

If f(x) is odd:

\[
\boxed{
\int_{-a}^{a}f(x)dx=0
}
\]

---

# 4. Even and Odd Functions

---

# Even Function

A function is even if:

\[
\boxed{
f(-x)=f(x)
}
\]

Example:

\[
x^2
\]

---

# Odd Function

A function is odd if:

\[
\boxed{
f(-x)=-f(x)
}
\]

Example:

\[
x^3
\]

---

# 5. Change of Variable in Definite Integration

If:

\[
x=g(t)
\]

then:

\[
dx=g'(t)dt
\]

Limits must also be changed.

---

# Example

Evaluate:

\[
\int_0^1 2x\,dx
\]

Integration:

\[
=x^2
\]

Limits:

\[
[0,1]
\]

Therefore:

\[
=1^2-0^2
\]

\[
\boxed{=1}
\]

---

# PART B: AREA USING INTEGRATION

---

# 6. Area Under a Curve

If a curve:

\[
y=f(x)
\]

lies above x-axis from:

\[
x=a\text{ to }x=b
\]

then:

\[
\boxed{
A=\int_a^b f(x)dx
}
\]

---

# 7. Area Between Two Curves

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

# 8. Area with Respect to y-axis

If curves are written as:

\[
x=f(y)
\]

then:

\[
\boxed{
A=
\int_c^d[x_{right}-x_{left}]dy
}
\]

---

# 9. Area Bounded by Straight Lines

For a line:

\[
y=mx+c
\]

area is found using:

\[
\boxed{
A=\int y\,dx
}
\]

---

# 10. Area of Circle

For circle:

\[
x^2+y^2=a^2
\]

Upper half:

\[
y=\sqrt{a^2-x^2}
\]

Area:

\[
A=
2\int_{-a}^{a}\sqrt{a^2-x^2}dx
\]

Result:

\[
\boxed{
A=\pi a^2
}
\]

---

# 11. Area of Parabola

For:

\[
y^2=4ax
\]

the area enclosed by latus rectum and parabola:

\[
\boxed{
\frac{8a^2}{3}
}
\]

---

# PART C: VOLUME OF SOLIDS

---

# 12. Volume of Solid of Revolution

When a curve rotates about an axis, it forms a solid.

---

# 13. Rotation About x-axis

If:

\[
y=f(x)
\]

rotates about x-axis:

\[
\boxed{
V=
\pi\int_a^b y^2dx
}
\]

---

# 14. Rotation About y-axis

Using disks:

\[
\boxed{
V=
\pi\int_c^d x^2dy
}
\]

---

# 15. Volume by Shell Method

When rotating about y-axis:

\[
\boxed{
V=
2\pi\int_a^b xydx
}
\]

---

# 16. Volume of Sphere

For radius:

\[
a
\]

Using integration:

\[
\boxed{
V=\frac43\pi a^3
}
\]

---

# 17. Volume of Cone

For radius r and height h:

\[
\boxed{
V=\frac13\pi r^2h
}
\]

---

# Comparison Tables

## Differentiation vs Integration

| Differentiation        | Integration                |
| ---------------------- | -------------------------- |
| Finds rate of change   | Finds accumulated quantity |
| Gives slope            | Gives area/volume          |
| Reverse of integration | Reverse of differentiation |

---

## Definite vs Indefinite Integral

| Definite Integral     | Indefinite Integral            |
| --------------------- | ------------------------------ |
| Has limits            | No limits                      |
| Gives numerical value | Gives function                 |
| Represents area       | Represents family of functions |

---

# Important Formula Sheet

## Fundamental Theorem

\[
\int_a^bf(x)dx=F(b)-F(a)
\]

---

## Area Under Curve

\[
A=\int_a^bf(x)dx
\]

---

## Area Between Curves

\[
A=\int_a^b(f(x)-g(x))dx
\]

---

## Volume About x-axis

\[
V=\pi\int_a^by^2dx
\]

---

## Volume About y-axis

\[
V=\pi\int_c^dx^2dy
\]

---

## Shell Method

\[
V=2\pi\int_a^b xydx
\]

---

# Solved Examples

## Example 1

Find area under:

\[
y=x^2
\]

from:

\[
0\leq x\leq2
\]

Solution:

\[
A=\int_0^2x^2dx
\]

\[
=\left[\frac{x^3}{3}\right]_0^2
\]

\[
=\frac83
\]

\[
\boxed{A=\frac83}
\]

---

## Example 2

Find:

\[
\int_0^\pi\sin x dx
\]

Integration:

\[
=-\cos x
\]

Limits:

\[
[-\cos x]_0^\pi
\]

\[
=1-(-1)
\]

\[
\boxed{=2}
\]

---

## Example 3

Find volume formed by rotating:

\[
y=x
\]

from:

\[
0\text{ to }1
\]

about x-axis.

Formula:

\[
V=\pi\int_0^1x^2dx
\]

\[
=\pi\left[\frac{x^3}{3}\right]_0^1
\]

\[
\boxed{
V=\frac{\pi}{3}
}
\]

---

# Common Mistakes

- Forgetting to subtract lower curve from upper curve.
- Using wrong limits.
- Confusing area and volume formulas.
- Forgetting square of radius in volume calculations.
- Ignoring negative areas below x-axis.
- Changing limits incorrectly during substitution.
- Using dx instead of dy for horizontal integration.

---

# Chapter Summary

- Definite integrals calculate accumulated quantities.
- The Fundamental Theorem connects differentiation and integration.
- Integration is used to find areas between curves.
- Areas can be calculated using vertical or horizontal strips.
- Rotation of curves produces solids whose volumes can be found using integration.

\[
\boxed{
\text{Integration converts curves into measurable areas and volumes.}
}
\]

# Tamil Nadu State Board Class 12 Mathematics Volume 2

