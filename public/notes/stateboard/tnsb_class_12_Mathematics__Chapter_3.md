# Chapter 3: Theory of Equations

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 1  
> **Chapter:** Theory of Equations

---

# Introduction

Theory of equations deals with finding and analysing the roots of polynomial equations and studying the relationship between roots and coefficients.

It is useful in:

- Algebra
- Engineering mathematics
- Polynomial analysis
- Numerical methods

---

# 1. Polynomial Equation

A polynomial equation is of the form:

\[
\boxed{
a_nx^n+a_{n-1}x^{n-1}+...+a_1x+a_0=0
}
\]

where:

- \(a_n\neq0\)
- n = degree of equation

---

# 2. Roots of an Equation

## Definition

The values of x that satisfy the equation are called roots or zeros of the equation.

Example:

\[
x^2-5x+6=0
\]

Factors:

\[
(x-2)(x-3)=0
\]

Roots:

\[
\boxed{x=2,3}
\]

---

# 3. Quadratic Equation

General form:

\[
\boxed{
ax^2+bx+c=0
}
\]

---

Roots:

\[
\boxed{
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
}
\]

---

# Nature of Roots

The discriminant:

\[
\boxed{
D=b^2-4ac
}
\]

determines roots.

---

## Case 1: Two Real and Different Roots

\[
D>0
\]

---

## Case 2: Equal Roots

\[
D=0
\]

---

## Case 3: Complex Roots

\[
D<0
\]

---

# 4. Relation Between Roots and Coefficients

(Vieta's Formulas)

For:

\[
ax^2+bx+c=0
\]

Let roots be:

\[
\alpha,\beta
\]

---

## Sum of Roots

\[
\boxed{
\alpha+\beta=-\frac ba
}
\]

---

## Product of Roots

\[
\boxed{
\alpha\beta=\frac ca
}
\]

---

# Example

Equation:

\[
2x^2-5x+3=0
\]

Here:

\[
a=2,\ b=-5,\ c=3
\]

Sum:

\[
\alpha+\beta=
-\frac{-5}{2}
\]

\[
=\frac52
\]

Product:

\[
\alpha\beta=\frac32
\]

---

# 5. Cubic Equation

General form:

\[
\boxed{
ax^3+bx^2+cx+d=0
}
\]

Let roots be:

\[
\alpha,\beta,\gamma
\]

---

# Vieta's Relations

## Sum of Roots

\[
\boxed{
\alpha+\beta+\gamma=-\frac ba
}
\]

---

## Sum of Products of Roots Taken Two at a Time

\[
\boxed{
\alpha\beta+\beta\gamma+\gamma\alpha=\frac ca
}
\]

---

## Product of Roots

\[
\boxed{
\alpha\beta\gamma=-\frac da
}
\]

---

# 6. Formation of Polynomial Equation

If roots are known:

\[
\alpha,\beta
\]

The equation is:

\[
\boxed{
x^2-(\alpha+\beta)x+\alpha\beta=0
}
\]

---

For three roots:

\[
\alpha,\beta,\gamma
\]

Equation:

\[
\boxed{
x^3-(\alpha+\beta+\gamma)x^2
+(\alpha\beta+\beta\gamma+\gamma\alpha)x
-\alpha\beta\gamma=0
}
\]

---

# 7. Transformation of Roots

New equations can be formed when roots are modified.

---

# Case 1: New Roots = α + k, β + k

Original roots:

\[
\alpha,\beta
\]

New roots:

\[
\alpha+k,\beta+k
\]

Replace:

\[
x=y-k
\]

in original equation.

---

# Case 2: New Roots = kα, kβ

Replace:

\[
x=\frac yk
\]

---

# Case 3: Reciprocal Roots

New roots:

\[
\frac1\alpha,\frac1\beta
\]

For:

\[
ax^2+bx+c=0
\]

new equation:

\[
\boxed{
cx^2+bx+a=0
}
\]

---

# 8. Descartes' Rule of Signs

## Statement

The number of positive real roots of a polynomial equation is equal to the number of sign changes in the polynomial or less than it by an even number.

---

Example:

\[
f(x)=x^3-6x^2+11x-6
\]

Signs:

\[
+,-,+,-
\]

Number of sign changes:

\[
3
\]

Therefore positive roots may be:

\[
3 \text{ or }1
\]

---

# Negative Roots

Replace x by -x.

Number of sign changes gives possible negative roots.

---

# 9. Rational Root Theorem

## Statement

For polynomial:

\[
a_nx^n+...+a_0=0
\]

possible rational roots are:

\[
\boxed{
\pm\frac{\text{Factors of constant term}}
{\text{Factors of leading coefficient}}
}
\]

---

Example:

\[
2x^3-3x^2-8x+12=0
\]

Possible roots:

Factors of 12:

\[
\pm1,\pm2,\pm3,\pm4,\pm6,\pm12
\]

Factors of 2:

\[
\pm1,\pm2
\]

Possible rational roots:

\[
\pm\frac12,\pm1,\pm2,\pm3,\pm4,\pm6,\pm12
\]

---

# 10. Complex Roots

If a polynomial has real coefficients and:

\[
a+ib
\]

is a root, then:

\[
\boxed{
a-ib
}
\]

is also a root.

---

This is called:

\[
\boxed{\text{Complex Conjugate Root Theorem}}
\]

---

# 11. Fundamental Theorem of Algebra

## Statement

A polynomial equation of degree n has exactly n roots in the complex number system.

---

Example:

A quadratic equation has:

\[
2
\]

roots.

A cubic equation has:

\[
3
\]

roots.

---

# 12. Symmetric Functions of Roots

Expressions involving roots can be simplified using Vieta's formulas.

Example:

If:

\[
\alpha+\beta=s
\]

and:

\[
\alpha\beta=p
\]

then:

\[
\alpha^2+\beta^2
\]

can be found:

\[
=(\alpha+\beta)^2-2\alpha\beta
\]

\[
\boxed{
=s^2-2p
}
\]

---

# Important Formula Sheet

## Quadratic Equation

\[
ax^2+bx+c=0
\]

---

## Roots

\[
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
\]

---

## Sum of Roots

\[
\alpha+\beta=-\frac ba
\]

---

## Product of Roots

\[
\alpha\beta=\frac ca
\]

---

## Cubic Relations

\[
\alpha+\beta+\gamma=-\frac ba
\]

\[
\alpha\beta+\beta\gamma+\gamma\alpha=\frac ca
\]

\[
\alpha\beta\gamma=-\frac da
\]

---

## Rational Roots

\[
\pm\frac{\text{constant factors}}
{\text{leading coefficient factors}}
\]

---

# Solved Examples

## Example 1

Find the sum and product of roots of:

\[
3x^2-7x+2=0
\]

Here:

\[
a=3,b=-7,c=2
\]

Sum:

\[
\alpha+\beta=-\frac{-7}{3}
\]

\[
\boxed{\frac73}
\]

Product:

\[
\alpha\beta=\frac23
\]

---

## Example 2

Form the equation whose roots are 2 and 5.

Sum:

\[
2+5=7
\]

Product:

\[
2\times5=10
\]

Equation:

\[
x^2-7x+10=0
\]

\[
\boxed{(x-2)(x-5)=0}
\]

---

## Example 3

Find possible positive roots using Descartes rule:

\[
x^4-3x^3+2x^2+x-5
\]

Signs:

\[
+,-,+,+,-
\]

Changes:

\[
3
\]

Possible positive roots:

\[
\boxed{3\text{ or }1}
\]

---

## Example 4

If \(2+i\) is a root of a polynomial with real coefficients, find another root.

By conjugate theorem:

\[
\boxed{2-i}
\]

---

# Common Mistakes

- Forgetting signs in Vieta's formulas.
- Confusing coefficient of x with constant term.
- Applying Descartes rule incorrectly.
- Forgetting complex roots occur in conjugate pairs.
- Missing the degree of the equation while counting roots.
- Using rational root theorem incorrectly.
- Confusing roots and coefficients.

---

# Chapter Summary

- Theory of equations studies polynomial roots and their properties.
- Vieta's formulas connect roots with coefficients.
- Quadratic and cubic equations have standard root relationships.
- Descartes rule predicts possible positive and negative roots.
- Rational root theorem helps identify possible rational solutions.
- Complex roots of real equations occur in conjugate pairs.
- Every nth degree polynomial has n complex roots.

\[
\boxed{\text{Roots determine the equation, and coefficients determine root relationships.}}
\]

# Tamil Nadu State Board Class 12 Mathematics Volume 1

