# Tamil Nadu State Board Class 12 Mathematics Volume 1

# Chapter 1: Applications of Matrices and Determinants

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 1  
> **Chapter:** Applications of Matrices and Determinants

---

# Introduction

Matrices and determinants are powerful mathematical tools used to solve systems of linear equations, find inverses of matrices, and study transformations.

Applications include:

- Solving simultaneous equations
- Finding unknown variables
- Computer graphics
- Engineering calculations
- Economics and statistics

---

# 1. Adjoint of a Matrix

## Definition

The adjoint (or adjugate) of a square matrix is the transpose of its cofactor matrix.

If A is a square matrix:

\[
\boxed{
adj(A)=(C_{ij})^T
}
\]

where \(C_{ij}\) are cofactors of elements of A.

---

# 2. Cofactor of an Element

For a matrix element \(a_{ij}\):

\[
\boxed{
C_{ij}=(-1)^{i+j}M_{ij}
}
\]

where:

- \(M_{ij}\) = minor of the element
- \(C_{ij}\) = cofactor

---

# Sign Pattern of Cofactors

\[
\begin{bmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{bmatrix}
\]

---

# Example

For matrix:

\[
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
\]

Cofactor matrix:

\[
\begin{bmatrix}
d&-c\\
-b&a
\end{bmatrix}
\]

Therefore:

\[
\boxed{
adj(A)=
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}
}
\]

---

# 3. Properties of Adjoint

For square matrix A:

## Property 1

\[
\boxed{
A(adjA)=|A|I
}
\]

---

## Property 2

\[
\boxed{
(adjA)A=|A|I
}
\]

---

## Property 3

\[
\boxed{
adj(AB)=adj(B)adj(A)
}
\]

---

# 4. Inverse of a Matrix

## Definition

The inverse of a square matrix A is another matrix \(A^{-1}\) such that:

\[
\boxed{
AA^{-1}=A^{-1}A=I
}
\]

---

# Formula for Inverse

If:

\[
|A|\neq0
\]

then:

\[
\boxed{
A^{-1}=
\frac{1}{|A|}
adj(A)
}
\]

---

# Condition for Existence of Inverse

A matrix has an inverse only if:

\[
\boxed{|A|\neq0}
\]

Such a matrix is called:

\[
\boxed{\text{Non-singular matrix}}
\]

---

# Singular Matrix

If:

\[
|A|=0
\]

then the matrix has no inverse.

---

# 5. Properties of Inverse Matrix

---

## Property 1

\[
\boxed{
(A^{-1})^{-1}=A
}
\]

---

## Property 2

\[
\boxed{
(AB)^{-1}=B^{-1}A^{-1}
}
\]

---

## Property 3

\[
\boxed{
(A^T)^{-1}=(A^{-1})^T
}
\]

---

## Property 4

\[
\boxed{
|A^{-1}|=\frac1{|A|}
}
\]

---

# 6. Solving System of Linear Equations Using Matrix Inverse Method

Consider:

\[
AX=B
\]

where:

\[
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
\]

\[
X=
\begin{bmatrix}
x\\
y
\end{bmatrix}
\]

\[
B=
\begin{bmatrix}
e\\
f
\end{bmatrix}
\]

---

Multiplying by \(A^{-1}\):

\[
A^{-1}AX=A^{-1}B
\]

Since:

\[
A^{-1}A=I
\]

Therefore:

\[
\boxed{
X=A^{-1}B
}
\]

---

# Example

Solve:

\[
2x+y=5
\]

\[
x-y=1
\]

Matrix form:

\[
\begin{bmatrix}
2&1\\
1&-1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=

\begin{bmatrix}
5\\
1
\end{bmatrix}
\]

Find inverse and multiply:

\[
X=A^{-1}B
\]

Result:

\[
\boxed{x=2,\ y=1}
\]

---

# 7. Rank of a Matrix

## Definition

The rank of a matrix is the maximum number of linearly independent rows or columns.

Symbol:

\[
\boxed{rank(A)}
\]

---

# Methods to Find Rank

1. Determinant method
2. Row echelon form method

---

# 8. Row Echelon Form

A matrix is in row echelon form when:

1. All zero rows are at the bottom.
2. Leading entries move to the right as we move downward.
3. Every leading entry is non-zero.

Example:

\[
\begin{bmatrix}
1&2&3\\
0&4&5\\
0&0&6
\end{bmatrix}
\]

---

# Rank Using Row Echelon Form

The number of non-zero rows gives the rank.

Example:

\[
\begin{bmatrix}
1&2&3\\
0&4&5\\
0&0&0
\end{bmatrix}
\]

Number of non-zero rows:

\[
\boxed{Rank=2}
\]

---

# 9. Consistency of Linear Equations

A system of equations can be:

1. Consistent
2. Inconsistent

---

# Augmented Matrix

For:

\[
AX=B
\]

Augmented matrix:

\[
[A|B]
\]

---

# Conditions for Consistency

---

## Case 1: Unique Solution

\[
\boxed{
Rank(A)=Rank([A|B])=n
}
\]

where n = number of unknowns.

---

## Case 2: Infinite Solutions

\[
\boxed{
Rank(A)=Rank([A|B])<n
}
\]

---

## Case 3: No Solution

\[
\boxed{
Rank(A)\neq Rank([A|B])
}
\]

---

# 10. Cramer's Rule

## Definition

A method of solving simultaneous linear equations using determinants.

---

For equations:

\[
a_1x+b_1y=c_1
\]

\[
a_2x+b_2y=c_2
\]

---

Coefficient determinant:

\[
D=
\begin{vmatrix}
a_1&b_1\\
a_2&b_2
\end{vmatrix}
\]

---

For x:

\[
D_x=
\begin{vmatrix}
c_1&b_1\\
c_2&b_2
\end{vmatrix}
\]

---

For y:

\[
D_y=
\begin{vmatrix}
a_1&c_1\\
a_2&c_2
\end{vmatrix}
\]

---

Solutions:

\[
\boxed{
x=\frac{D_x}{D}
}
\]

\[
\boxed{
y=\frac{D_y}{D}
}
\]

---

# 11. Gauss Elimination Method

## Definition

A method of solving equations by converting the augmented matrix into upper triangular form.

---

Steps:

### Step 1

Write augmented matrix.

---

### Step 2

Apply elementary row operations.

Operations:

1. Interchange rows

\[
R_i\leftrightarrow R_j
\]

2. Multiply row by constant

\[
R_i\rightarrow kR_i
\]

3. Add multiple of one row to another

\[
R_i\rightarrow R_i+kR_j
\]

---

### Step 3

Use back substitution.

---

# Example

Equations:

\[
x+y=5
\]

\[
2x-y=1
\]

Augmented matrix:

\[
\begin{bmatrix}
1&1&|5\\
2&-1&|1
\end{bmatrix}
\]

After elimination:

\[
x=2,\ y=3
\]

---

# Comparison Tables

## Cramer's Rule vs Gauss Elimination

| Cramer's Rule                 | Gauss Method               |
| ----------------------------- | -------------------------- |
| Uses determinants             | Uses row operations        |
| Suitable for small systems    | Suitable for large systems |
| Requires non-zero determinant | Works with rank analysis   |

---

## Singular vs Non-Singular Matrix

| Singular        | Non-Singular     |
| --------------- | ---------------- |
| Determinant = 0 | Determinant ≠ 0  |
| No inverse      | Has inverse      |
| Dependent rows  | Independent rows |

---

# Important Formula Sheet

## Adjoint

\[
adj(A)=\text{Transpose of cofactor matrix}
\]

---

## Inverse

\[
A^{-1}=\frac{adj(A)}{|A|}
\]

---

## Inverse Condition

\[
|A|\neq0
\]

---

## Matrix Equation

\[
AX=B
\]

Solution:

\[
X=A^{-1}B
\]

---

## Rank Consistency

Unique solution:

\[
R(A)=R(A|B)=n
\]

---

Infinite solutions:

\[
R(A)=R(A|B)<n
\]

---

No solution:

\[
R(A)\neq R(A|B)
\]

---

# Solved Examples

## Example 1

Find inverse of:

\[
A=
\begin{bmatrix}
2&1\\
5&3
\end{bmatrix}
\]

Determinant:

\[
|A|=6-5=1
\]

Adjoint:

\[
adj(A)=
\begin{bmatrix}
3&-1\\
-5&2
\end{bmatrix}
\]

Therefore:

\[
\boxed{
A^{-1}
=

\begin{bmatrix}
3&-1\\
-5&2
\end{bmatrix}
}
\]

---

## Example 2

What is the rank of:

\[
\begin{bmatrix}
1&2\\
0&5
\end{bmatrix}
\]

Both rows are non-zero.

Therefore:

\[
\boxed{Rank=2}
\]

---

## Example 3

When does a matrix inverse exist?

Answer:

\[
\boxed{|A|\neq0}
\]

---

# Common Mistakes

- Forgetting to transpose the cofactor matrix while finding adjoint.
- Using inverse formula when determinant is zero.
- Changing order in inverse multiplication:

\[
(AB)^{-1}\neq A^{-1}B^{-1}
\]

Correct:

\[
(AB)^{-1}=B^{-1}A^{-1}
\]

- Confusing rank with determinant.
- Making sign errors in cofactors.
- Forgetting augmented matrix in consistency tests.
- Using Cramer's rule when determinant is zero.

---

# Chapter Summary

- Matrices simplify solving simultaneous equations.
- Adjoint helps find the inverse of a matrix.
- A matrix has an inverse only when its determinant is non-zero.
- Rank determines the nature of solutions.
- Cramer's rule solves equations using determinants.
- Gauss elimination solves equations through row transformations.
- Matrix methods are widely used in science, engineering, and computing.

\[
\boxed{
A^{-1}=\frac{adj(A)}{|A|}
}
\]

# Tamil Nadu State Board Class 12 Mathematics Volume 1

# Chapter 2: Complex Numbers

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 1  
> **Chapter:** Complex Numbers

---

# Introduction

Complex numbers extend the concept of real numbers by introducing the imaginary unit.

They are used in:

- Algebra
- Geometry
- Engineering
- Electrical circuits
- Signal processing

---

# 1. Definition of Complex Number

A number of the form:

\[
\boxed{
z=a+ib
}
\]

is called a complex number.

where:

- \(a\) = real part
- \(b\) = imaginary part
- \(i=\sqrt{-1}\)

---

# Parts of a Complex Number

For:

\[
z=a+ib
\]

## Real Part

\[
\boxed{
Re(z)=a
}
\]

---

## Imaginary Part

\[
\boxed{
Im(z)=b
}
\]

---

# 2. Properties of Imaginary Unit

\[
\boxed{i^2=-1}
\]

Powers of i:

\[
i^1=i
\]

\[
i^2=-1
\]

\[
i^3=-i
\]

\[
i^4=1
\]

The cycle repeats every 4 powers.

---

# 3. Types of Complex Numbers

---

# A. Purely Real Number

Imaginary part is zero.

\[
z=a+0i
\]

Example:

\[
5
\]

---

# B. Purely Imaginary Number

Real part is zero.

\[
z=ib
\]

Example:

\[
3i
\]

---

# C. Zero Complex Number

Both parts are zero.

\[
z=0+0i
\]

---

# D. Equal Complex Numbers

Two complex numbers are equal if their real and imaginary parts are equal.

If:

\[
a+ib=c+id
\]

then:

\[
\boxed{a=c,\ b=d}
\]

---

# 4. Algebra of Complex Numbers

Let:

\[
z_1=a+ib
\]

\[
z_2=c+id
\]

---

# Addition

\[
z_1+z_2=(a+c)+i(b+d)
\]

---

# Subtraction

\[
z_1-z_2=(a-c)+i(b-d)
\]

---

# Multiplication

\[
(a+ib)(c+id)
\]

\[
=ac+iad+ibc+i^2bd
\]

Since:

\[
i^2=-1
\]

\[
\boxed{
=(ac-bd)+i(ad+bc)
}
\]

---

# Division of Complex Numbers

To divide:

\[
\frac{a+ib}{c+id}
\]

multiply numerator and denominator by conjugate of denominator.

---

\[
=

\frac{(a+ib)(c-id)}
{(c+id)(c-id)}
\]

---

Denominator:

\[
c^2+d^2
\]

---

Result:

\[
\boxed{
\frac{a+ib}{c+id}
=

\frac{(ac+bd)+i(bc-ad)}
{c^2+d^2}
}
\]

---

# 5. Conjugate of a Complex Number

## Definition

The conjugate of:

\[
z=a+ib
\]

is:

\[
\boxed{
\bar z=a-ib
}
\]

---

# Properties of Conjugates

---

## Property 1

\[
\boxed{
z+\bar z=2a
}
\]

---

## Property 2

\[
\boxed{
z-\bar z=2ib
}
\]

---

## Property 3

\[
\boxed{
z\bar z=a^2+b^2
}
\]

---

# 6. Modulus of Complex Number

## Definition

The distance of a complex number from origin in the complex plane is called modulus.

---

For:

\[
z=a+ib
\]

\[
\boxed{
|z|=\sqrt{a^2+b^2}
}
\]

---

# Properties of Modulus

---

\[
\boxed{
|z|\geq0
}
\]

---

\[
\boxed{
|z_1z_2|=|z_1||z_2|
}
\]

---

\[
\boxed{
\left|\frac{z_1}{z_2}\right|
=

\frac{|z_1|}{|z_2|}
}
\]

---

# 7. Geometrical Representation of Complex Numbers

Complex numbers can be represented on the Argand plane.

---

Axes:

Horizontal axis:

\[
\boxed{\text{Real axis}}
\]

Vertical axis:

\[
\boxed{\text{Imaginary axis}}
\]

---

A complex number:

\[
z=a+ib
\]

is represented by point:

\[
(a,b)
\]

---

# 8. Argument of a Complex Number

## Definition

The angle made by the line joining point z to origin with positive real axis is called argument.

Symbol:

\[
\arg(z)
\]

---

For:

\[
z=a+ib
\]

\[
\boxed{
\tan\theta=\frac ba
}
\]

---

# Principal Argument

The unique value of argument lying between:

\[
\boxed{-\pi<\theta\leq\pi}
\]

is called principal argument.

---

# 9. Polar Form of Complex Number

A complex number can be written as:

\[
\boxed{
z=r(\cos\theta+i\sin\theta)
}
\]

where:

\[
r=|z|
\]

and:

\[
\theta=\arg(z)
\]

---

# 10. Euler Form

Using Euler's theorem:

\[
\boxed{
e^{i\theta}=\cos\theta+i\sin\theta
}
\]

Therefore:

\[
\boxed{
z=re^{i\theta}
}
\]

---

# Relation Between Cartesian and Polar Form

Cartesian:

\[
z=a+ib
\]

Polar:

\[
z=r(\cos\theta+i\sin\theta)
\]

where:

\[
a=r\cos\theta
\]

\[
b=r\sin\theta
\]

---

# 11. De Moivre's Theorem

## Statement

For any integer n:

\[
\boxed{
(\cos\theta+i\sin\theta)^n
=

\cos n\theta+i\sin n\theta
}
\]

---

# Application 1: Powers of Complex Numbers

If:

\[
z=r(\cos\theta+i\sin\theta)
\]

then:

\[
\boxed{
z^n=r^n(\cos n\theta+i\sin n\theta)
}
\]

---

# Application 2: Roots of Complex Numbers

The nth roots of:

\[
z=r(\cos\theta+i\sin\theta)
\]

are:

\[
\boxed{
z_k=
r^{1/n}
\left[
\cos\frac{\theta+2k\pi}{n}
+i\sin\frac{\theta+2k\pi}{n}
\right]
}
\]

where:

\[
k=0,1,2,...,n-1
\]

---

# 12. Roots of Unity

Equation:

\[
z^n=1
\]

---

Since:

\[
1=\cos2k\pi+i\sin2k\pi
\]

roots are:

\[
\boxed{
z_k=
\cos\frac{2k\pi}{n}
+i\sin\frac{2k\pi}{n}
}
\]

where:

\[
k=0,1,...,n-1
\]

---

# Properties of Roots of Unity

1. There are n roots.
2. They lie equally spaced on a circle.
3. Sum of roots:

\[
\boxed{0}
\]

for \(n>1\).

---

# 13. Geometrical Meaning

Multiplication by a complex number causes:

- Change in magnitude
- Rotation in the Argand plane

---

If:

\[
z=re^{i\theta}
\]

then:

- r changes length
- θ changes direction

---

# Comparison Tables

## Real vs Complex Numbers

| Real Numbers               | Complex Numbers             |
| -------------------------- | --------------------------- |
| No imaginary part          | Contains imaginary part     |
| Represented on number line | Represented on Argand plane |
| Example: 5                 | Example: 5+3i               |

---

## Cartesian vs Polar Form

| Cartesian Form    | Polar Form                    |
| ----------------- | ----------------------------- |
| \(a+ib\)          | \(r(\cos\theta+i\sin\theta)\) |
| Uses coordinates  | Uses modulus and argument     |
| Easy for addition | Easy for multiplication       |

---

# Important Formula Sheet

## Complex Number

\[
z=a+ib
\]

---

## Modulus

\[
|z|=\sqrt{a^2+b^2}
\]

---

## Conjugate

\[
\bar z=a-ib
\]

---

## Polar Form

\[
z=r(\cos\theta+i\sin\theta)
\]

---

## Euler Form

\[
z=re^{i\theta}
\]

---

## De Moivre Theorem

\[
(\cos\theta+i\sin\theta)^n
=

\cos n\theta+i\sin n\theta
\]

---

## nth Roots

\[
z_k=
r^{1/n}
\left[
\cos\frac{\theta+2k\pi}{n}
+i\sin\frac{\theta+2k\pi}{n}
\right]
\]

---

# Solved Examples

## Example 1

Find modulus of:

\[
z=3+4i
\]

Formula:

\[
|z|=\sqrt{a^2+b^2}
\]

\[
=\sqrt{3^2+4^2}
\]

\[
=\sqrt{25}
\]

\[
\boxed{|z|=5}
\]

---

## Example 2

Find conjugate of:

\[
z=5-7i
\]

Change sign of imaginary part:

\[
\boxed{\bar z=5+7i}
\]

---

## Example 3

Convert:

\[
z=1+i
\]

into polar form.

Modulus:

\[
r=\sqrt{1^2+1^2}
\]

\[
r=\sqrt2
\]

Argument:

\[
\tan\theta=1
\]

\[
\theta=\frac\pi4
\]

Therefore:

\[
\boxed{
z=\sqrt2
(\cos\frac\pi4+i\sin\frac\pi4)
}
\]

---

## Example 4

Find:

\[
(1+i)^2
\]

\[
=1+2i+i^2
\]

\[
=1+2i-1
\]

\[
\boxed{=2i}
\]

---

## Example 5

Find fourth roots of unity.

Equation:

\[
z^4=1
\]

Roots:

\[
\boxed{
1,\ i,\ -1,\ -i
}
\]

---

# Common Mistakes

- Forgetting:

\[
i^2=-1
\]

- Confusing modulus with argument.
- Using wrong quadrant while finding argument.
- Forgetting conjugate changes only imaginary sign.
- Applying De Moivre theorem without converting to polar form.
- Missing all roots when solving \(z^n=1\).
- Confusing Euler form with exponential growth.

---

# Chapter Summary

- Complex numbers extend real numbers using \(i=\sqrt{-1}\).
- Every complex number has real and imaginary parts.
- Complex numbers can be represented geometrically on the Argand plane.
- Modulus gives distance from origin.
- Polar and Euler forms simplify multiplication and powers.
- De Moivre's theorem helps find powers and roots.
- Roots of unity are equally spaced points on a circle.

\[
\boxed{
z=r(\cos\theta+i\sin\theta)=re^{i\theta}
}
\]

# Tamil Nadu State Board Class 12 Mathematics Volume 1

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

# Chapter 4: Inverse Trigonometric Functions

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 1  
> **Chapter:** Inverse Trigonometric Functions

---

# Introduction

Trigonometric functions relate angles with ratios of sides of a triangle.

Inverse trigonometric functions help us find the angle when the trigonometric ratio is known.

Examples:

\[
\sin^{-1}x,\quad \cos^{-1}x,\quad \tan^{-1}x
\]

---

# 1. Inverse Function Concept

If:

\[
f(x)=y
\]

then inverse function:

\[
\boxed{
f^{-1}(y)=x
}
\]

---

For trigonometric functions:

\[
\sin\theta=x
\]

then:

\[
\boxed{
\theta=\sin^{-1}x
}
\]

---

# 2. Need for Principal Values

Trigonometric functions are many-to-one functions.

Example:

\[
\sin30^\circ=\sin150^\circ
\]

Therefore, to define inverse functions, we restrict the domain.

The restricted range is called:

\[
\boxed{\text{Principal value range}}
\]

---

# 3. Inverse Sine Function

\[
\boxed{
y=\sin^{-1}x
}
\]

means:

\[
\sin y=x
\]

---

## Domain

\[
\boxed{
-1\leq x\leq1
}
\]

---

## Range

\[
\boxed{
-\frac{\pi}{2}\leq y\leq\frac{\pi}{2}
}
\]

---

# Important Values

\[
\sin^{-1}(0)=0
\]

\[
\sin^{-1}(1)=\frac{\pi}{2}
\]

\[
\sin^{-1}(-1)=-\frac{\pi}{2}
\]

---

# 4. Inverse Cosine Function

\[
\boxed{
y=\cos^{-1}x
}
\]

means:

\[
\cos y=x
\]

---

## Domain

\[
\boxed{
-1\leq x\leq1
}
\]

---

## Range

\[
\boxed{
0\leq y\leq\pi
}
\]

---

# Important Values

\[
\cos^{-1}(1)=0
\]

\[
\cos^{-1}(0)=\frac{\pi}{2}
\]

\[
\cos^{-1}(-1)=\pi
\]

---

# 5. Inverse Tangent Function

\[
\boxed{
y=\tan^{-1}x
}
\]

means:

\[
\tan y=x
\]

---

## Domain

\[
\boxed{
-\infty<x<\infty
}
\]

---

## Range

\[
\boxed{
-\frac{\pi}{2}<y<\frac{\pi}{2}
}
\]

---

# Important Values

\[
\tan^{-1}(0)=0
\]

\[
\tan^{-1}(1)=\frac{\pi}{4}
\]

\[
\tan^{-1}(\sqrt3)=\frac{\pi}{3}
\]

---

# 6. Graphs of Inverse Trigonometric Functions

---

# Graph of \(y=\sin^{-1}x\)

Features:

- Increasing function
- Domain:

\[
[-1,1]
\]

- Range:

\[
[-\pi/2,\pi/2]
\]

---

# Graph of \(y=\cos^{-1}x\)

Features:

- Decreasing function
- Domain:

\[
[-1,1]
\]

- Range:

\[
[0,\pi]
\]

---

# Graph of \(y=\tan^{-1}x\)

Features:

- Increasing function
- Domain:

\[
(-\infty,\infty)
\]

- Range:

\[
(-\pi/2,\pi/2)
\]

---

# 7. Basic Identities of Inverse Trigonometric Functions

---

# Identity 1

\[
\boxed{
\sin^{-1}x+\cos^{-1}x=\frac{\pi}{2}
}
\]

---

# Identity 2

\[
\boxed{
\tan^{-1}x+\cot^{-1}x=\frac{\pi}{2}
}
\]

---

# Identity 3

\[
\boxed{
\sec^{-1}x+\csc^{-1}x=\frac{\pi}{2}
}
\]

---

# 8. Negative Argument Properties

---

## Sine

\[
\boxed{
\sin^{-1}(-x)
=

-\sin^{-1}x
}
\]

---

## Tangent

\[
\boxed{
\tan^{-1}(-x)
=

-\tan^{-1}x
}
\]

---

## Cosine

\[
\boxed{
\cos^{-1}(-x)
=

\pi-\cos^{-1}x
}
\]

---

# 9. Addition Formulae

---

# Formula for Tangent

\[
\boxed{
\tan^{-1}x+\tan^{-1}y
=

\tan^{-1}
\left(
\frac{x+y}{1-xy}
\right)
}
\]

when \(xy<1\).

---

# Difference Formula

\[
\boxed{
\tan^{-1}x-\tan^{-1}y
=

\tan^{-1}
\left(
\frac{x-y}{1+xy}
\right)
}
\]

---

# 10. Important Results

---

## Result 1

\[
\boxed{
\tan^{-1}1=\frac{\pi}{4}
}
\]

---

## Result 2

\[
\boxed{
\tan^{-1}0=0
}
\]

---

## Result 3

\[
\boxed{
\tan^{-1}\sqrt3=\frac{\pi}{3}
}
\]

---

## Result 4

\[
\boxed{
\tan^{-1}\frac1{\sqrt3}
=

\frac{\pi}{6}
}
\]

---

# 11. Simplification of Inverse Expressions

Example:

\[
\sin(\sin^{-1}x)
\]

Since:

\[
\sin^{-1}x=\theta
\]

Therefore:

\[
\sin\theta=x
\]

Hence:

\[
\boxed{
\sin(\sin^{-1}x)=x
}
\]

---

Similarly:

\[
\boxed{
\tan(\tan^{-1}x)=x
}
\]

---

# 12. Composition of Inverse Functions

---

\[
\boxed{
f(f^{-1}(x))=x
}
\]

and:

\[
\boxed{
f^{-1}(f(x))=x
}
\]

within the permitted domain.

---

# Comparison Tables

## Inverse Functions

| Function       | Domain           | Range              |
| -------------- | ---------------- | ------------------ |
| \(\sin^{-1}x\) | [-1,1]           | \([-\pi/2,\pi/2]\) |
| \(\cos^{-1}x\) | [-1,1]           | \([0,\pi]\)        |
| \(\tan^{-1}x\) | All real numbers | \((-\pi/2,\pi/2)\) |

---

# Important Formula Sheet

## Sine-Cosine Relation

\[
\sin^{-1}x+\cos^{-1}x=\frac{\pi}{2}
\]

---

## Tangent-Cotangent Relation

\[
\tan^{-1}x+\cot^{-1}x=\frac{\pi}{2}
\]

---

## Negative Properties

\[
\sin^{-1}(-x)=-\sin^{-1}x
\]

\[
\tan^{-1}(-x)=-\tan^{-1}x
\]

\[
\cos^{-1}(-x)=\pi-\cos^{-1}x
\]

---

## Addition Formula

\[
\tan^{-1}x+\tan^{-1}y
=

\tan^{-1}
\frac{x+y}{1-xy}
\]

---

# Solved Examples

## Example 1

Find:

\[
\sin^{-1}\frac12
\]

We know:

\[
\sin30^\circ=\frac12
\]

Therefore:

\[
\boxed{
\sin^{-1}\frac12=\frac{\pi}{6}
}
\]

---

## Example 2

Find:

\[
\cos^{-1}(-1)
\]

Since:

\[
\cos\pi=-1
\]

Therefore:

\[
\boxed{
\cos^{-1}(-1)=\pi
}
\]

---

## Example 3

Simplify:

\[
\tan^{-1}1+\tan^{-1}1
\]

\[
=\frac\pi4+\frac\pi4
\]

\[
\boxed{
=\frac\pi2
}
\]

---

## Example 4

Prove:

\[
\sin^{-1}x+\cos^{-1}x=\frac\pi2
\]

Let:

\[
\sin^{-1}x=\theta
\]

Then:

\[
\sin\theta=x
\]

Also:

\[
\cos(\frac\pi2-\theta)=x
\]

Therefore:

\[
\cos^{-1}x=\frac\pi2-\theta
\]

Hence:

\[
\boxed{
\sin^{-1}x+\cos^{-1}x=\frac\pi2
}
\]

---

# Common Mistakes

- Forgetting principal value ranges.
- Treating inverse functions as reciprocal functions.

Wrong:

\[
\sin^{-1}x\neq\frac1{\sin x}
\]

- Using wrong quadrant while evaluating angles.
- Forgetting the special range of cosine inverse.
- Applying tangent addition formula without checking conditions.
- Confusing degrees and radians.
- Ignoring domain restrictions.

---

# Chapter Summary

- Inverse trigonometric functions give angles corresponding to trigonometric ratios.
- Principal values make inverse functions single-valued.
- Important inverse functions:

\[
\sin^{-1}x,\cos^{-1}x,\tan^{-1}x
\]

- Their domains and ranges must always be remembered.
- Inverse trigonometric identities simplify complicated expressions.
- Tangent inverse addition and subtraction formulas are important for problem solving.

\[
\boxed{
\sin^{-1}x+\cos^{-1}x=\frac{\pi}{2}
}
\]

# Tamil Nadu State Board Class 12 Mathematics Volume 1

# Chapter 5: Two-Dimensional Analytical Geometry-II

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 1  
> **Chapter:** Two-Dimensional Analytical Geometry-II

---

# Introduction

Analytical geometry studies geometric figures using algebraic equations.

This chapter focuses on **conic sections**:

1. Parabola
2. Ellipse
3. Hyperbola

and their:

- Standard equations
- Properties
- Tangents
- Normals

---

# 1. Conic Sections

## Definition

A conic section is a curve obtained by intersecting a cone with a plane.

The main conics are:

- Circle
- Parabola
- Ellipse
- Hyperbola

---

# 2. Eccentricity

## Definition

Eccentricity describes the shape of a conic.

Symbol:

\[
\boxed{e}
\]

---

General definition:

\[
\boxed{
e=\frac{\text{Distance from focus}}
{\text{Distance from directrix}}
}
\]

---

# Values of Eccentricity

| Conic     | Eccentricity |
| --------- | ------------ |
| Circle    | \(e=0\)      |
| Ellipse   | \(0<e<1\)    |
| Parabola  | \(e=1\)      |
| Hyperbola | \(e>1\)      |

---

# PART A: PARABOLA

---

# 3. Definition of Parabola

A parabola is the locus of a point moving such that its distance from a fixed point equals its distance from a fixed line.

Fixed point:

\[
\boxed{\text{Focus}}
\]

Fixed line:

\[
\boxed{\text{Directrix}}
\]

---

# 4. Standard Equation of Parabola

---

## Parabola Opening Right

\[
\boxed{
y^2=4ax
}
\]

---

Important points:

Vertex:

\[
(0,0)
\]

Focus:

\[
(a,0)
\]

Directrix:

\[
x=-a
\]

Axis:

x-axis

---

## Parabola Opening Left

\[
\boxed{
y^2=-4ax
}
\]

Focus:

\[
(-a,0)
\]

---

## Parabola Opening Upward

\[
\boxed{
x^2=4ay
}
\]

Focus:

\[
(0,a)
\]

---

## Parabola Opening Downward

\[
\boxed{
x^2=-4ay
}
\]

Focus:

\[
(0,-a)
\]

---

# 5. Length of Latus Rectum

For parabola:

\[
\boxed{
4a
}
\]

---

# 6. Tangent to Parabola

For:

\[
y^2=4ax
\]

the tangent at point:

\[
(at^2,2at)
\]

is:

\[
\boxed{
ty=x+at^2
}
\]

---

# 7. Normal to Parabola

Equation of normal:

\[
\boxed{
y=-tx+2at+at^3
}
\]

---

# PART B: ELLIPSE

---

# 8. Definition of Ellipse

An ellipse is the locus of a point such that the sum of distances from two fixed points remains constant.

Fixed points:

\[
\boxed{\text{Foci}}
\]

---

# 9. Standard Equation of Ellipse

Major axis along x-axis:

\[
\boxed{
\frac{x^2}{a^2} +
\frac{y^2}{b^2}
=1
}
\]

where:

\[
a>b
\]

---

# Important Terms

Centre:

\[
(0,0)
\]

Vertices:

\[
(\pm a,0)
\]

Foci:

\[
(\pm c,0)
\]

---

Relation:

\[
\boxed{
c^2=a^2-b^2
}
\]

---

Eccentricity:

\[
\boxed{
e=\frac ca
}
\]

---

# 10. Ellipse with Major Axis Along y-axis

Equation:

\[
\boxed{
\frac{x^2}{b^2} +
\frac{y^2}{a^2}
=1
}
\]

---

# 11. Lengths of Axes

Major axis:

\[
\boxed{2a}
\]

Minor axis:

\[
\boxed{2b}
\]

---

# 12. Tangent to Ellipse

For:

\[
\frac{x^2}{a^2} +
\frac{y^2}{b^2}=1
\]

tangent at:

\[
(x_1,y_1)
\]

is:

\[
\boxed{
\frac{xx_1}{a^2} +
\frac{yy_1}{b^2}
=1
}
\]

---

# 13. Normal to Ellipse

Equation:

\[
\boxed{
y-y_1=
-\frac{a^2y_1}{b^2x_1}
(x-x_1)
}
\]

---

# PART C: HYPERBOLA

---

# 14. Definition of Hyperbola

A hyperbola is the locus of a point where the difference of distances from two fixed points is constant.

---

# 15. Standard Equation of Hyperbola

Transverse axis along x-axis:

\[
\boxed{
\frac{x^2}{a^2}
-

\frac{y^2}{b^2}
=1
}
\]

---

Centre:

\[
(0,0)
\]

Vertices:

\[
(\pm a,0)
\]

Foci:

\[
(\pm c,0)
\]

---

Relation:

\[
\boxed{
c^2=a^2+b^2
}
\]

---

# 16. Eccentricity of Hyperbola

\[
\boxed{
e=\frac ca
}
\]

Since:

\[
c>a
\]

therefore:

\[
\boxed{e>1}
\]

---

# 17. Asymptotes of Hyperbola

For:

\[
\frac{x^2}{a^2}
-

\frac{y^2}{b^2}
=1
\]

asymptotes:

\[
\boxed{
y=\pm\frac ba x
}
\]

---

# 18. Tangent to Hyperbola

At:

\[
(x_1,y_1)
\]

tangent:

\[
\boxed{
\frac{xx_1}{a^2}
-

\frac{yy_1}{b^2}
=1
}
\]

---

# 19. Normal to Hyperbola

Normal equation:

\[
\boxed{
y-y_1=
\frac{a^2y_1}{b^2x_1}
(x-x_1)
}
\]

---

# Comparison Table

| Property     | Parabola   | Ellipse      | Hyperbola  |
| ------------ | ---------- | ------------ | ---------- |
| Eccentricity | 1          | <1           | >1         |
| Focus        | One        | Two          | Two        |
| Directrix    | One        | Two          | Two        |
| Shape        | Open curve | Closed curve | Open curve |

---

# Important Formula Sheet

## Parabola

\[
y^2=4ax
\]

Focus:

\[
(a,0)
\]

Directrix:

\[
x=-a
\]

Tangent:

\[
ty=x+at^2
\]

---

## Ellipse

\[
\frac{x^2}{a^2} +
\frac{y^2}{b^2}=1
\]

\[
c^2=a^2-b^2
\]

\[
e=\frac ca
\]

Tangent:

\[
\frac{xx_1}{a^2} +
\frac{yy_1}{b^2}=1
\]

---

## Hyperbola

\[
\frac{x^2}{a^2}
-

\frac{y^2}{b^2}=1
\]

\[
c^2=a^2+b^2
\]

\[
e=\frac ca
\]

Asymptotes:

\[
y=\pm\frac ba x
\]

---

# Solved Examples

## Example 1

Find focus of:

\[
y^2=12x
\]

Compare:

\[
y^2=4ax
\]

Therefore:

\[
4a=12
\]

\[
a=3
\]

Focus:

\[
\boxed{(3,0)}
\]

---

## Example 2

Find eccentricity of ellipse:

\[
a=5,\ b=4
\]

Formula:

\[
c^2=a^2-b^2
\]

\[
=25-16
\]

\[
c=3
\]

Therefore:

\[
e=\frac ca
\]

\[
\boxed{e=\frac35}
\]

---

## Example 3

Find asymptotes of:

\[
\frac{x^2}{9}-\frac{y^2}{4}=1
\]

Here:

\[
a=3,\ b=2
\]

Formula:

\[
y=\pm\frac ba x
\]

Therefore:

\[
\boxed{
y=\pm\frac23x
}
\]

---

## Example 4

Find eccentricity of parabola.

For parabola:

\[
\boxed{e=1}
\]

---

# Common Mistakes

- Confusing ellipse and hyperbola equations.
- Forgetting the sign difference:

Ellipse:

\[
+\,+
\]

Hyperbola:

\[
+\,-
\]

- Mixing focus and vertex coordinates.
- Forgetting relation:

\[
c^2=a^2-b^2
\]

for ellipse.

- Using ellipse relation for hyperbola.
- Forgetting tangent formulas.
- Confusing eccentricity values.

---

# Chapter Summary

- Conic sections are curves obtained from cutting a cone.
- Eccentricity determines the type of conic.
- Parabola has:

\[
e=1
\]

- Ellipse has:

\[
0<e<1
\]

- Hyperbola has:

\[
e>1
\]

- Standard equations, tangents, and normals are essential for problem solving.

\[
\boxed{\text{Conics connect geometry with algebra through equations.}}
\]

# Tamil Nadu State Board Class 12 Mathematics Volume 1

# Chapter 6: Vector Algebra

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 1  
> **Chapter:** Vector Algebra

---

# Introduction

Vector algebra deals with quantities having both magnitude and direction.

Vectors are widely used in:

- Physics
- Engineering
- Geometry
- Mechanics
- Computer graphics

---

# 1. Scalars and Vectors

---

# Scalar Quantity

A quantity having only magnitude is called a scalar.

Examples:

- Mass
- Temperature
- Time
- Distance

---

# Vector Quantity

A quantity having both magnitude and direction is called a vector.

Examples:

- Displacement
- Velocity
- Force
- Acceleration

---

# 2. Representation of Vectors

A vector is represented by:

\[
\vec{a}
\]

or:

\[
\overrightarrow{AB}
\]

where:

- A = initial point
- B = terminal point

---

# 3. Magnitude of a Vector

For:

\[
\vec a=a_1\hat i+a_2\hat j+a_3\hat k
\]

magnitude:

\[
\boxed{
|\vec a|
=

\sqrt{a_1^2+a_2^2+a_3^2}
}
\]

---

# 4. Unit Vector

## Definition

A vector having magnitude one is called a unit vector.

---

For vector:

\[
\vec a
\]

unit vector:

\[
\boxed{
\hat a=\frac{\vec a}{|\vec a|}
}
\]

---

# 5. Position Vector

The vector representing the position of a point from origin is called position vector.

For point:

\[
P(x,y,z)
\]

position vector:

\[
\boxed{
\vec r=x\hat i+y\hat j+z\hat k
}
\]

---

# 6. Addition of Vectors

If:

\[
\vec a=a_1\hat i+a_2\hat j+a_3\hat k
\]

and:

\[
\vec b=b_1\hat i+b_2\hat j+b_3\hat k
\]

then:

\[
\boxed{
\vec a+\vec b
=

(a_1+b_1)\hat i+
(a_2+b_2)\hat j+
(a_3+b_3)\hat k
}
\]

---

# Properties of Vector Addition

## Commutative Property

\[
\boxed{
\vec a+\vec b=\vec b+\vec a
}
\]

---

## Associative Property

\[
\boxed{
(\vec a+\vec b)+\vec c
=

\vec a+(\vec b+\vec c)
}
\]

---

# 7. Section Formula Using Vectors

If point P divides AB internally in ratio:

\[
m:n
\]

then:

\[
\boxed{
\vec p=
\frac{m\vec b+n\vec a}{m+n}
}
\]

---

# 8. Dot Product (Scalar Product)

## Definition

The dot product of two vectors gives a scalar quantity.

---

For vectors:

\[
\vec a,\vec b
\]

\[
\boxed{
\vec a\cdot\vec b
=

|\vec a||\vec b|\cos\theta
}
\]

where θ is angle between vectors.

---

# In Component Form

If:

\[
\vec a=a_1\hat i+a_2\hat j+a_3\hat k
\]

\[
\vec b=b_1\hat i+b_2\hat j+b_3\hat k
\]

then:

\[
\boxed{
\vec a\cdot\vec b
=

a_1b_1+a_2b_2+a_3b_3
}
\]

---

# Properties of Dot Product

---

## Commutative

\[
\boxed{
\vec a\cdot\vec b
=

\vec b\cdot\vec a
}
\]

---

## Distributive

\[
\boxed{
\vec a\cdot(\vec b+\vec c)
=

\vec a\cdot\vec b+
\vec a\cdot\vec c
}
\]

---

# 9. Angle Between Two Vectors

Using:

\[
\vec a\cdot\vec b
=

|\vec a||\vec b|\cos\theta
\]

Therefore:

\[
\boxed{
\cos\theta=
\frac{\vec a\cdot\vec b}
{|\vec a||\vec b|}
}
\]

---

# 10. Applications of Dot Product

---

## Projection of Vector

Projection of:

\[
\vec a
\]

on:

\[
\vec b
\]

is:

\[
\boxed{
\frac{\vec a\cdot\vec b}{|\vec b|}
}
\]

---

## Work Done

Physics application:

\[
\boxed{
W=\vec F\cdot\vec s
}
\]

---

# 11. Cross Product (Vector Product)

## Definition

The cross product of two vectors produces a vector perpendicular to both.

---

Formula:

\[
\boxed{
\vec a\times\vec b
=

|\vec a||\vec b|\sin\theta\hat n
}
\]

where:

\[
\hat n
\]

is unit vector perpendicular to both.

---

# Direction

Given by:

\[
\boxed{\text{Right Hand Rule}}
\]

---

# Component Form

\[
\vec a\times\vec b
=

\begin{vmatrix}
\hat i&\hat j&\hat k\\
a_1&a_2&a_3\\
b_1&b_2&b_3
\end{vmatrix}
\]

---

# Properties of Cross Product

---

## Anti-Commutative

\[
\boxed{
\vec a\times\vec b
=

-\vec b\times\vec a
}
\]

---

## Distributive

\[
\boxed{
\vec a\times(\vec b+\vec c)
=

\vec a\times\vec b+
\vec a\times\vec c
}
\]

---

# 12. Area Using Cross Product

---

# Area of Parallelogram

If two sides are:

\[
\vec a,\vec b
\]

then:

\[
\boxed{
A=|\vec a\times\vec b|
}
\]

---

# Area of Triangle

\[
\boxed{
A=
\frac12|\vec a\times\vec b|
}
\]

---

# 13. Scalar Triple Product

## Definition

The scalar triple product of three vectors is:

\[
\boxed{
\vec a\cdot(\vec b\times\vec c)
}
\]

---

# Geometrical Meaning

It gives the volume of a parallelepiped.

\[
\boxed{
V=
|\vec a\cdot(\vec b\times\vec c)|
}
\]

---

# Condition for Coplanarity

Three vectors are coplanar if:

\[
\boxed{
\vec a\cdot(\vec b\times\vec c)=0
}
\]

---

# 14. Vector Triple Product

Formula:

\[
\boxed{
\vec a\times(\vec b\times\vec c)
=

\vec b(\vec a\cdot\vec c)
-

\vec c(\vec a\cdot\vec b)
}
\]

---

# 15. Equation of a Line in Vector Form

A line passing through point with position vector:

\[
\vec a
\]

and parallel to vector:

\[
\vec b
\]

is:

\[
\boxed{
\vec r=\vec a+\lambda\vec b
}
\]

where:

\[
\lambda
\]

is a scalar parameter.

---

# 16. Cartesian Equation of Line

From:

\[
\vec r=\vec a+\lambda\vec b
\]

we get:

\[
\boxed{
\frac{x-x_1}{a}
=

\frac{y-y_1}{b}
=

\frac{z-z_1}{c}
}
\]

---

# 17. Equation of Plane

A plane passing through point:

\[
\vec a
\]

with normal vector:

\[
\vec n
\]

is:

\[
\boxed{
(\vec r-\vec a)\cdot\vec n=0
}
\]

---

# 18. Cartesian Equation of Plane

\[
\boxed{
ax+by+cz=d
}
\]

where:

\[
(a,b,c)
\]

is normal vector.

---

# Comparison Tables

## Dot Product vs Cross Product

| Dot Product      | Cross Product    |
| ---------------- | ---------------- |
| Gives scalar     | Gives vector     |
| Uses cos θ       | Uses sin θ       |
| Commutative      | Anti-commutative |
| Work calculation | Area calculation |

---

## Scalar vs Vector

| Scalar         | Vector                |
| -------------- | --------------------- |
| Only magnitude | Magnitude + direction |
| Temperature    | Force                 |
| Mass           | Velocity              |

---

# Important Formula Sheet

## Magnitude

\[
|\vec a|
=

\sqrt{a_1^2+a_2^2+a_3^2}
\]

---

## Unit Vector

\[
\hat a=\frac{\vec a}{|\vec a|}
\]

---

## Dot Product

\[
\vec a\cdot\vec b
=

|\vec a||\vec b|\cos\theta
\]

---

## Cross Product

\[
\vec a\times\vec b
=

|\vec a||\vec b|\sin\theta\hat n
\]

---

## Scalar Triple Product

\[
\vec a\cdot(\vec b\times\vec c)
\]

---

## Volume

\[
V=
|\vec a\cdot(\vec b\times\vec c)|
\]

---

## Line Equation

\[
\vec r=\vec a+\lambda\vec b
\]

---

## Plane Equation

\[
(\vec r-\vec a)\cdot\vec n=0
\]

---

# Solved Examples

## Example 1

Find magnitude of:

\[
\vec a=3\hat i+4\hat j
\]

Formula:

\[
|\vec a|
=

\sqrt{3^2+4^2}
\]

\[
=\sqrt{25}
\]

\[
\boxed{|\vec a|=5}
\]

---

## Example 2

Find dot product:

\[
\vec a=2\hat i+3\hat j
\]

\[
\vec b=4\hat i+5\hat j
\]

\[
\vec a\cdot\vec b
=

(2)(4)+(3)(5)
\]

\[
=8+15
\]

\[
\boxed{23}
\]

---

## Example 3

Find angle between perpendicular vectors.

If:

\[
\vec a\cdot\vec b=0
\]

then:

\[
\cos\theta=0
\]

Therefore:

\[
\boxed{\theta=90^\circ}
\]

---

## Example 4

Find volume if:

\[
\vec a,\vec b,\vec c
\]

are given.

Formula:

\[
\boxed{
V=
|\vec a\cdot(\vec b\times\vec c)|
}
\]

---

# Common Mistakes

- Confusing dot product and cross product.
- Forgetting direction in cross product.
- Using cosine instead of sine in cross product.
- Forgetting magnitude in vector formulas.
- Mixing scalar triple product with vector triple product.
- Forgetting that zero scalar triple product means coplanarity.
- Making sign errors in determinant expansion.

---

# Chapter Summary

- Vectors represent quantities with magnitude and direction.
- Dot product gives a scalar and is used for angle and projection.
- Cross product gives a vector and is used for area calculations.
- Triple products help find volume and coplanarity.
- Vector equations simplify lines and planes in three dimensions.

\[
\boxed{
\vec a\cdot(\vec b\times\vec c)
}
\]

represents the volume of a parallelepiped.
