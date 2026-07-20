# Chapter 2: Numbers and Sequences

> **Subject:** Mathematics  
> **Class:** 10  
> **Chapter:** Numbers and Sequences

---

# Introduction

Numbers and sequences form the foundation of mathematics.

This chapter covers:

- Euclid Division Lemma
- Euclid's algorithm
- Fundamental theorem of arithmetic
- Modular arithmetic
- Arithmetic progression (AP)
- Geometric progression (GP)

---

# PART A: EUCLID DIVISION LEMMA

---

# 1. Euclid Division Lemma

## Statement

For any two positive integers **a** and **b**, there exist unique integers **q** and **r** such that:

\[
\boxed{
a=bq+r
}
\]

where:

\[
\boxed{
0\leq r<b
}
\]

---

Where:

- a = dividend
- b = divisor
- q = quotient
- r = remainder

---

# Example

Divide 17 by 5.

\[
17=5(3)+2
\]

Here:

Dividend:

\[
17
\]

Divisor:

\[
5
\]

Quotient:

\[
3
\]

Remainder:

\[
2
\]

---

# PART B: EUCLID'S ALGORITHM

---

# 2. Euclid's Algorithm

## Definition

A method to find the HCF (Highest Common Factor) of two numbers using repeated division is called Euclid's algorithm.

---

Steps:

1. Divide larger number by smaller number.
2. Continue division using divisor and remainder.
3. The last non-zero remainder is the HCF.

---

# Example

Find HCF of 225 and 135.

Using Euclid's algorithm:

\[
225=135(1)+90
\]

\[
135=90(1)+45
\]

\[
90=45(2)+0
\]

Last non-zero remainder:

\[
\boxed{45}
\]

Therefore:

\[
\boxed{HCF=45}
\]

---

# PART C: FUNDAMENTAL THEOREM OF ARITHMETIC

---

# 3. Fundamental Theorem of Arithmetic

## Statement

Every composite number can be expressed uniquely as a product of prime numbers.

---

Example:

\[
60
\]

Prime factorisation:

\[
\boxed{
60=2^2\times3\times5
}
\]

---

# Applications

Used to find:

- HCF
- LCM
- Irrationality proofs

---

# 4. HCF and LCM Using Prime Factorisation

---

## HCF

Take common prime factors with smallest powers.

Example:

\[
12=2^2\times3
\]

\[
18=2\times3^2
\]

HCF:

\[
\boxed{
2\times3=6
}
\]

---

## LCM

Take all prime factors with highest powers.

LCM:

\[
\boxed{
2^2\times3^2=36
}
\]

---

# PART D: MODULAR ARITHMETIC

---

# 5. Congruence Modulo

## Definition

Two integers are congruent modulo n if they leave the same remainder when divided by n.

---

Notation:

\[
\boxed{
a\equiv b\pmod n
}
\]

---

Meaning:

\[
n|(a-b)
\]

---

# Example

Check:

\[
17\equiv5\pmod6
\]

Difference:

\[
17-5=12
\]

Since:

\[
6|12
\]

Therefore:

\[
\boxed{
17\equiv5\pmod6
}
\]

---

# 6. Properties of Modular Arithmetic

---

## Addition

If:

\[
a\equiv b\pmod n
\]

and

\[
c\equiv d\pmod n
\]

then:

\[
\boxed{
a+c\equiv b+d\pmod n
}
\]

---

## Subtraction

\[
\boxed{
a-c\equiv b-d\pmod n
}
\]

---

## Multiplication

\[
\boxed{
ac\equiv bd\pmod n
}
\]

---

# Applications

- Clock arithmetic
- Computer science
- Cryptography

---

# PART E: ARITHMETIC PROGRESSION (AP)

---

# 7. Arithmetic Progression

## Definition

A sequence in which the difference between consecutive terms is constant is called an arithmetic progression.

---

General form:

\[
\boxed{
a,\ a+d,\ a+2d,\ a+3d,...
}
\]

---

Where:

a = first term

d = common difference

---

# 8. Common Difference

Formula:

\[
\boxed{
d=a_2-a_1
}
\]

---

Example:

\[
2,5,8,11,...
\]

Difference:

\[
d=5-2=3
\]

---

# 9. nth Term of AP

Formula:

\[
\boxed{
a_n=a+(n-1)d
}
\]

---

Where:

\[
a_n=\text{nth term}
\]

---

# Example

Find 10th term of:

\[
3,7,11,...
\]

Given:

\[
a=3
\]

\[
d=4
\]

\[
n=10
\]

Using:

\[
a_n=a+(n-1)d
\]

\[
=3+9(4)
\]

\[
=39
\]

Answer:

\[
\boxed{39}
\]

---

# 10. Sum of First n Terms of AP

Formula:

\[
\boxed{
S_n=\frac n2[2a+(n-1)d]
}
\]

---

Alternative formula:

\[
\boxed{
S_n=\frac n2(a+l)
}
\]

where:

l = last term

---

# PART F: GEOMETRIC PROGRESSION (GP)

---

# 11. Geometric Progression

## Definition

A sequence in which the ratio between consecutive terms is constant is called geometric progression.

---

General form:

\[
\boxed{
a,ar,ar^2,ar^3,...
}
\]

---

Where:

a = first term

r = common ratio

---

# 12. Common Ratio

Formula:

\[
\boxed{
r=\frac{a_2}{a_1}
}
\]

---

Example:

\[
2,6,18,54,...
\]

Ratio:

\[
r=\frac62=3
\]

---

# 13. nth Term of GP

Formula:

\[
\boxed{
a_n=ar^{n-1}
}
\]

---

# Example

Find 5th term:

\[
2,4,8,...
\]

Given:

\[
a=2
\]

\[
r=2
\]

\[
n=5
\]

\[
a_5=2(2)^4
\]

\[
=32
\]

Answer:

\[
\boxed{32}
\]

---

# 14. Sum of First n Terms of GP

Formula:

\[
\boxed{
S_n=
\frac{a(r^n-1)}
{r-1}
}
\]

when:

\[
r\neq1
\]

---

Alternative:

\[
\boxed{
S_n=
\frac{a(1-r^n)}
{1-r}
}
\]

---

# Important Formula Sheet

## Euclid Division Lemma

\[
\boxed{
a=bq+r
}
\]

---

## HCF × LCM

\[
\boxed{
HCF\times LCM=
Product\ of\ two\ numbers
}
\]

---

## AP nth term

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

## GP nth term

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
\frac{a(r^n-1)}
{r-1}
}
\]

---

# Solved Examples

---

## Example 1

Find HCF of 96 and 404.

Using Euclid:

\[
404=96(4)+20
\]

\[
96=20(4)+16
\]

\[
20=16(1)+4
\]

\[
16=4(4)+0
\]

Therefore:

\[
\boxed{HCF=4}
\]

---

## Example 2

Find 20th term of AP:

\[
5,8,11,...
\]

Given:

\[
a=5
\]

\[
d=3
\]

\[
n=20
\]

\[
a_{20}=5+19(3)
\]

\[
\boxed{62}
\]

---

## Example 3

Find common ratio:

\[
3,9,27,81
\]

\[
r=\frac93
\]

\[
\boxed{r=3}
\]

---

# Common Mistakes

- Forgetting remainder condition in Euclid lemma.
- Mixing HCF and LCM prime powers.
- Using AP formula for GP problems.
- Confusing common difference and common ratio.
- Forgetting \(n-1\) in nth term formulas.
- Using wrong GP sum formula when \(r<1\).

---

# Chapter Summary

- Euclid's algorithm helps find HCF efficiently.
- Fundamental theorem explains prime factorisation.
- Modular arithmetic deals with remainders.
- AP has a constant difference.
- GP has a constant ratio.
- Sequence formulas help find terms and sums quickly.

\[
\boxed{
\text{Sequences reveal patterns and relationships among numbers.}
}
\]

# Tamil Nadu State Board Class 10 Mathematics

