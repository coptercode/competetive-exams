# Chapter 5: Binomial Theorem, Sequences and Series

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 1  
> **Chapter:** Binomial Theorem, Sequences and Series

---

# Introduction

This chapter deals with expansion of algebraic expressions and patterns formed by numbers.

Topics covered:

- Binomial theorem
- General and middle terms
- Arithmetic progression (AP)
- Geometric progression (GP)
- Arithmetic-geometric series
- Infinite series
- Binomial approximations

Applications:

- Algebraic expansion
- Probability
- Calculus
- Mathematical modelling

---

# PART A: BINOMIAL THEOREM

---

# 1. Binomial Expression

## Definition

An expression containing two terms connected by addition or subtraction is called a binomial.

Example:

\[
(a+b)
\]

\[
(x-y)
\]

---

# 2. Binomial Expansion

For positive integer n:

\[
\boxed{
(a+b)^n
=

^nC_0a^n +
^nC_1a^{n-1}b +
^nC_2a^{n-2}b^2
+...+
^nC_nb^n
}
\]

---

# 3. Binomial Theorem

The general form:

\[
\boxed{
(a+b)^n
=

\sum_{r=0}^{n}
^nC_r a^{n-r}b^r
}
\]

where:

\[
r=0,1,2,...,n
\]

---

# 4. Binomial Coefficients

The coefficients are:

\[
^nC_0,^nC_1,^nC_2,...,^nC_n
\]

---

Example:

Expansion of:

\[
(a+b)^3
\]

\[
=a^3+3a^2b+3ab^2+b^3
\]

Coefficients:

\[
1,3,3,1
\]

---

# 5. Pascal's Triangle

Binomial coefficients can be arranged as:

\[
\begin{array}{c}
1\\
1\quad1\\
1\quad2\quad1\\
1\quad3\quad3\quad1\\
1\quad4\quad6\quad4\quad1
\end{array}
\]

---

# 6. Properties of Binomial Coefficients

---

## Property 1

\[
\boxed{
^nC_r=^nC_{n-r}
}
\]

---

## Property 2

\[
\boxed{
^nC_0=^nC_n=1
}
\]

---

## Property 3

\[
\boxed{
^nC_r+^nC_{r+1}=^{n+1}C_{r+1}
}
\]

---

# 7. General Term

The \((r+1)^{th}\) term in expansion:

\[
(a+b)^n
\]

is:

\[
\boxed{
T_{r+1}=^nC_ra^{n-r}b^r
}
\]

---

# 8. Middle Term

Number of terms in:

\[
(a+b)^n
\]

is:

\[
\boxed{n+1}
\]

---

## Case 1: n is even

There is one middle term.

Middle term:

\[
\boxed{
T_{\frac n2+1}
}
\]

---

## Case 2: n is odd

There are two middle terms.

They are:

\[
\boxed{
T_{\frac{n+1}{2}}
}
\]

and

\[
\boxed{
T_{\frac{n+3}{2}}
}
\]

---

# PART B: SEQUENCES

---

# 9. Sequence

## Definition

A sequence is an ordered list of numbers following a particular rule.

Example:

\[
2,4,6,8,...
\]

---

Terms are represented as:

\[
a_1,a_2,a_3,...
\]

---

# PART C: ARITHMETIC PROGRESSION

---

# 10. Arithmetic Progression (AP)

## Definition

A sequence in which the difference between consecutive terms is constant is called an arithmetic progression.

---

Example:

\[
2,5,8,11,...
\]

Common difference:

\[
d=3
\]

---

# 11. General Term of AP

If first term:

\[
a
\]

and common difference:

\[
d
\]

then:

\[
\boxed{
a_n=a+(n-1)d
}
\]

---

# 12. Sum of n Terms of AP

\[
\boxed{
S_n=
\frac n2[2a+(n-1)d]
}
\]

---

Another form:

\[
\boxed{
S_n=\frac n2(a+l)
}
\]

where:

l = last term

---

# 13. Properties of AP

If:

\[
a,b,c
\]

are consecutive terms of AP:

\[
\boxed{
2b=a+c
}
\]

---

# PART D: GEOMETRIC PROGRESSION

---

# 14. Geometric Progression (GP)

## Definition

A sequence in which the ratio between consecutive terms is constant is called geometric progression.

---

Example:

\[
2,4,8,16,...
\]

Common ratio:

\[
r=2
\]

---

# 15. General Term of GP

\[
\boxed{
a_n=ar^{n-1}
}
\]

---

where:

- a = first term
- r = common ratio

---

# 16. Sum of n Terms of GP

For:

\[
r\neq1
\]

\[
\boxed{
S_n=
\frac{a(r^n-1)}{r-1}
}
\]

---

Alternative:

\[
\boxed{
S_n=
\frac{a(1-r^n)}{1-r}
}
\]

---

# 17. Infinite GP

An infinite GP has a finite sum when:

\[
\boxed{|r|<1}
\]

---

Formula:

\[
\boxed{
S_\infty=
\frac a{1-r}
}
\]

---

Example:

\[
1+\frac12+\frac14+...
\]

Here:

\[
a=1,\quad r=\frac12
\]

Therefore:

\[
S_\infty=
\frac1{1-\frac12}
\]

\[
=2
\]

---

# PART E: ARITHMETIC-GEOMETRIC SERIES

---

# 18. Arithmetic-Geometric Progression

A sequence formed by multiplying AP terms with GP terms is called arithmetic-geometric progression.

---

Example:

\[
1,2x,3x^2,4x^3,...
\]

---

General term:

\[
\boxed{
T_n=n ar^{n-1}
}
\]

---

# PART F: BINOMIAL APPROXIMATION

---

# 19. Approximation Formula

For small x:

\[
\boxed{
(1+x)^n
\approx
1+nx
}
\]

when:

\[
|x|\ll1
\]

---

More accurate form:

\[
(1+x)^n
=

1+nx+
\frac{n(n-1)}2x^2+...
\]

---

# Important Formula Sheet

## Binomial Theorem

\[
\boxed{
(a+b)^n=
\sum_{r=0}^n
^nC_ra^{n-r}b^r
}
\]

---

## General Term

\[
\boxed{
T_{r+1}=^nC_ra^{n-r}b^r
}
\]

---

## AP nth Term

\[
\boxed{
a_n=a+(n-1)d
}
\]

---

## AP Sum

\[
\boxed{
S_n=\frac n2[2a+(n-1)d]
}
\]

---

## GP nth Term

\[
\boxed{
a_n=ar^{n-1}
}
\]

---

## GP Sum

\[
\boxed{
S_n=
\frac{a(r^n-1)}{r-1}
}
\]

---

## Infinite GP

\[
\boxed{
S_\infty=\frac a{1-r}
}
\]

---

# Solved Examples

---

## Example 1

Find coefficient of \(x^2\) in:

\[
(1+x)^5
\]

General term:

\[
T_{r+1}=^5C_rx^r
\]

For \(x^2\):

\[
r=2
\]

Coefficient:

\[
^5C_2
\]

\[
=\frac{5!}{2!3!}
\]

\[
\boxed{10}
\]

---

## Example 2

Find 10th term of AP:

\[
3,7,11,...
\]

Here:

\[
a=3,d=4
\]

\[
a_{10}=3+9(4)
\]

\[
\boxed{39}
\]

---

## Example 3

Find sum of infinite GP:

\[
4+2+1+\frac12+...
\]

Here:

\[
a=4,r=\frac12
\]

\[
S_\infty=
\frac4{1-\frac12}
\]

\[
\boxed{8}
\]

---

# Common Mistakes

- Forgetting that binomial theorem applies for positive integers.
- Mixing the general term index \(r\) and term number.
- Confusing AP common difference with GP common ratio.
- Using infinite GP formula when \(|r|\geq1\).
- Forgetting the middle term position.
- Making sign errors in \((a-b)^n\).
- Using approximation when x is not small.

---

# Chapter Summary

- Binomial theorem expands powers of binomial expressions.
- General term helps find specific terms and coefficients.
- AP deals with constant differences.
- GP deals with constant ratios.
- Infinite GP has a finite sum only when \(|r|<1\).
- Binomial approximations simplify calculations for small values.

\[
\boxed{
\text{Patterns and expansions reveal hidden mathematical structures.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 1

