# Tamil Nadu State Board Class 11 Mathematics Volume 2

# Chapter 7: Matrices and Determinants

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 2  
> **Chapter:** Matrices and Determinants

---

# Introduction

Matrices and determinants are important tools in algebra used to represent and solve systems of equations.

This chapter covers:

- Matrix representation
- Types of matrices
- Matrix operations
- Transpose
- Symmetric matrices
- Determinants
- Adjoint and inverse matrices
- Solving equations using matrices

Applications:

- Computer graphics
- Physics
- Engineering
- Statistics
- Economics

---

# PART A: MATRICES

---

# 1. Matrix

## Definition

A rectangular arrangement of numbers or variables in rows and columns is called a matrix.

A matrix is represented as:

\[
\boxed{A=[a_{ij}]}
\]

where:

- i represents row number
- j represents column number

---

Example:

\[
A=
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}
\]

---

# 2. Order of a Matrix

If a matrix has:

m rows and n columns,

then its order is:

\[
\boxed{m\times n}
\]

---

Example:

\[
\begin{bmatrix}
1&2&3\\
4&5&6
\end{bmatrix}
\]

has:

2 rows and 3 columns.

Order:

\[
\boxed{2\times3}
\]

---

# PART B: TYPES OF MATRICES

---

# 3. Row Matrix

A matrix having only one row.

Example:

\[
\boxed{
[1\quad2\quad3]
}
\]

---

# 4. Column Matrix

A matrix having only one column.

Example:

\[
\boxed{
\begin{bmatrix}
1\\
2\\
3
\end{bmatrix}
}
\]

---

# 5. Square Matrix

A matrix having equal number of rows and columns.

Example:

\[
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}
\]

Order:

\[
2\times2
\]

---

# 6. Zero Matrix

All elements are zero.

Example:

\[
\begin{bmatrix}
0&0\\
0&0
\end{bmatrix}
\]

---

# 7. Diagonal Matrix

A square matrix in which all non-diagonal elements are zero.

Example:

\[
\begin{bmatrix}
2&0\\
0&5
\end{bmatrix}
\]

---

# 8. Scalar Matrix

A diagonal matrix having equal diagonal elements.

Example:

\[
\begin{bmatrix}
3&0\\
0&3
\end{bmatrix}
\]

---

# 9. Identity Matrix

A scalar matrix with diagonal elements equal to 1.

Symbol:

\[
\boxed{I}
\]

Example:

\[
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
\]

---

# PART C: MATRIX OPERATIONS

---

# 10. Equality of Matrices

Two matrices are equal if:

1. Same order
2. Corresponding elements are equal

---

# 11. Addition of Matrices

Matrices can be added only if they have the same order.

Example:

\[
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix} +
\begin{bmatrix}
5&6\\
7&8
\end{bmatrix}
\]

\[
=

\begin{bmatrix}
6&8\\
10&12
\end{bmatrix}
\]

---

# 12. Scalar Multiplication

Multiplying every element by a scalar.

Example:

\[
3
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}
\]

\[
=

\begin{bmatrix}
3&6\\
9&12
\end{bmatrix}
\]

---

# 13. Multiplication of Matrices

If:

\[
A_{m\times n}
\]

and:

\[
B_{n\times p}
\]

then:

\[
AB
\]

exists and has order:

\[
\boxed{m\times p}
\]

---

Important:

\[
\boxed{AB\neq BA}
\]

in general.

---

# PART D: TRANSPOSE OF A MATRIX

---

# 14. Transpose

## Definition

Interchanging rows and columns of a matrix is called transpose.

Symbol:

\[
\boxed{A^T}
\]

---

Example:

\[
A=
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}
\]

Then:

\[
A^T=
\begin{bmatrix}
1&3\\
2&4
\end{bmatrix}
\]

---

# Properties of Transpose

---

## Property 1

\[
\boxed{
(A^T)^T=A
}
\]

---

## Property 2

\[
\boxed{
(A+B)^T=A^T+B^T
}
\]

---

## Property 3

\[
\boxed{
(AB)^T=B^TA^T
}
\]

---

# 15. Symmetric Matrix

A square matrix is symmetric if:

\[
\boxed{
A^T=A
}
\]

---

Example:

\[
\begin{bmatrix}
2&3\\
3&5
\end{bmatrix}
\]

---

# 16. Skew-Symmetric Matrix

A square matrix is skew-symmetric if:

\[
\boxed{
A^T=-A
}
\]

---

Properties:

Diagonal elements are always zero.

---

# PART E: DETERMINANTS

---

# 17. Determinant

## Definition

A determinant is a scalar value associated with a square matrix.

Symbol:

\[
\boxed{|A|}
\]

---

For a 2×2 matrix:

\[
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
\]

Determinant:

\[
\boxed{
|A|=ad-bc
}
\]

---

# 18. Determinant of 3×3 Matrix

For:

\[
\begin{vmatrix}
a&b&c\\
d&e&f\\
g&h&i
\end{vmatrix}
\]

Expansion:

\[
\boxed{
a(ei-fh)-b(di-fg)+c(dh-eg)
}
\]

---

# PART F: PROPERTIES OF DETERMINANTS

---

# Property 1

Interchanging two rows changes sign.

\[
\boxed{
|A|\rightarrow-|A|
}
\]

---

# Property 2

If two rows are identical:

\[
\boxed{|A|=0}
\]

---

# Property 3

A common factor can be taken outside.

---

# Property 4

Adding a multiple of one row to another does not change determinant.

---

# 19. Area of Triangle Using Determinant

For points:

\[
(x_1,y_1),
(x_2,y_2),
(x_3,y_3)
\]

Area:

\[
\boxed{
\frac12
\begin{vmatrix}
x_1&y_1&1\\
x_2&y_2&1\\
x_3&y_3&1
\end{vmatrix}
}
\]

---

# PART G: SINGULAR AND NON-SINGULAR MATRICES

---

# 20. Singular Matrix

A square matrix is singular if:

\[
\boxed{
|A|=0
}
\]

---

# 21. Non-Singular Matrix

A square matrix is non-singular if:

\[
\boxed{
|A|\neq0
}
\]

---

# PART H: ADJOINT AND INVERSE

---

# 22. Minor

The determinant obtained by deleting a row and column is called minor.

---

# 23. Cofactor

Cofactor:

\[
\boxed{
C_{ij}=(-1)^{i+j}M_{ij}
}
\]

---

# 24. Adjoint of Matrix

Adjoint is transpose of cofactor matrix.

\[
\boxed{
adj(A)=C^T
}
\]

---

# 25. Inverse of Matrix

For non-singular matrix:

\[
\boxed{
A^{-1}
=

\frac{adj(A)}{|A|}
}
\]

---

# PART I: SOLVING SYSTEM OF EQUATIONS

---

For equations:

\[
AX=B
\]

Solution:

\[
\boxed{
X=A^{-1}B
}
\]

---

# Important Formula Sheet

## Matrix Order

\[
\boxed{m\times n}
\]

---

## Determinant of 2×2 Matrix

\[
\boxed{|A|=ad-bc}
\]

---

## Symmetric Matrix

\[
\boxed{A^T=A}
\]

---

## Skew Symmetric Matrix

\[
\boxed{A^T=-A}
\]

---

## Inverse

\[
\boxed{
A^{-1}
=

\frac{adj(A)}{|A|}
}
\]

---

## Singular Condition

\[
\boxed{|A|=0}
\]

---

# Solved Examples

---

## Example 1

Find determinant:

\[
\begin{vmatrix}
2&3\\
4&5
\end{vmatrix}
\]

Solution:

\[
=2(5)-3(4)
\]

\[
=10-12
\]

\[
\boxed{-2}
\]

---

## Example 2

Find transpose:

\[
A=
\begin{bmatrix}
1&2&3\\
4&5&6
\end{bmatrix}
\]

Transpose:

\[
\boxed{
\begin{bmatrix}
1&4\\
2&5\\
3&6
\end{bmatrix}
}
\]

---

## Example 3

Check whether:

\[
\begin{bmatrix}
1&2\\
2&3
\end{bmatrix}
\]

is symmetric.

Transpose:

\[
\begin{bmatrix}
1&2\\
2&3
\end{bmatrix}
\]

Since:

\[
A^T=A
\]

Answer:

\[
\boxed{\text{Symmetric matrix}}
\]

---

# Common Mistakes

- Adding matrices of different orders.
- Assuming matrix multiplication is commutative.
- Forgetting transpose reverses multiplication order.
- Using inverse formula for singular matrices.
- Confusing determinant and matrix.
- Forgetting determinant changes sign after row interchange.
- Making errors in 3×3 determinant expansion.

---

# Chapter Summary

- Matrices represent numbers in rows and columns.
- Matrix operations help solve algebraic problems.
- Determinants provide scalar values associated with square matrices.
- Adjoint and inverse matrices solve systems of equations.
- Symmetric matrices satisfy:

\[
A^T=A
\]

- Singular matrices have zero determinant.

\[
\boxed{
\text{Matrices provide a powerful language for solving mathematical systems.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 2

# Chapter 8: Vector Algebra

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 2  
> **Chapter:** Vector Algebra

---

# Introduction

Vector algebra deals with quantities having both magnitude and direction.

This chapter covers:

- Representation of vectors
- Types of vectors
- Vector addition and subtraction
- Section formula
- Direction cosines
- Scalar product
- Vector product
- Applications of vectors

Applications:

- Physics
- Engineering
- Mechanics
- Geometry
- Computer graphics

---

# PART A: VECTORS

---

# 1. Scalar Quantity

## Definition

A quantity having only magnitude is called a scalar quantity.

Examples:

- Mass
- Temperature
- Time
- Distance

---

# 2. Vector Quantity

## Definition

A quantity having both magnitude and direction is called a vector quantity.

Examples:

- Displacement
- Velocity
- Force
- Acceleration

---

# 3. Representation of Vector

A vector is represented by a directed line segment.

If:

\[
\vec{AB}
\]

then:

- A = initial point
- B = terminal point

Magnitude:

\[
\boxed{|\vec{AB}|}
\]

---

# 4. Types of Vectors

---

# Zero Vector

A vector having zero magnitude.

Symbol:

\[
\boxed{\vec{0}}
\]

---

# Unit Vector

A vector having magnitude 1.

Formula:

\[
\boxed{
\hat{a}=\frac{\vec a}{|\vec a|}
}
\]

---

# Equal Vectors

Two vectors having:

- Same magnitude
- Same direction

are equal vectors.

---

# Negative Vector

A vector having same magnitude but opposite direction.

\[
\boxed{
\vec a=-(-\vec a)
}
\]

---

# Parallel Vectors

Vectors acting in the same or opposite direction.

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
\vec{OP}=x\hat i+y\hat j+z\hat k
}
\]

---

# PART B: VECTOR ADDITION

---

# 6. Addition of Vectors

Vectors can be added using:

1. Triangle law
2. Parallelogram law

---

# Triangle Law

If two vectors are represented by two sides of a triangle in order, their resultant is represented by the third side.

---

# Component Form

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

# 7. Magnitude of Vector

For:

\[
\vec a=x\hat i+y\hat j+z\hat k
\]

magnitude:

\[
\boxed{
|\vec a|=
\sqrt{x^2+y^2+z^2}
}
\]

---

# PART C: SECTION FORMULA

---

# 8. Internal Division Formula

If a point divides the line joining:

\[
A(x_1,y_1,z_1)
\]

and

\[
B(x_2,y_2,z_2)
\]

in ratio:

\[
m:n
\]

then:

\[
\boxed{
P=
\left(
\frac{mx_2+nx_1}{m+n},
\frac{my_2+ny_1}{m+n},
\frac{mz_2+nz_1}{m+n}
\right)
}
\]

---

# PART D: DIRECTION COSINES

---

# 9. Direction Cosines

The cosines of angles made by a line with positive x, y and z axes are called direction cosines.

They are represented by:

\[
\boxed{l,m,n}
\]

---

# Relation

\[
\boxed{
l^2+m^2+n^2=1
}
\]

---

# 10. Direction Ratios

Numbers proportional to direction cosines are called direction ratios.

If direction ratios are:

\[
a,b,c
\]

then:

\[
\boxed{
l=\frac a{\sqrt{a^2+b^2+c^2}}
}
\]

\[
\boxed{
m=\frac b{\sqrt{a^2+b^2+c^2}}
}
\]

\[
\boxed{
n=\frac c{\sqrt{a^2+b^2+c^2}}
}
\]

---

# PART E: SCALAR PRODUCT

---

# 11. Dot Product

## Definition

The scalar product of two vectors is the product of their magnitudes and cosine of angle between them.

---

Formula:

\[
\boxed{
\vec a\cdot\vec b
=

|\vec a||\vec b|\cos\theta
}
\]

---

# Component Form

If:

\[
\vec a=a_1i+a_2j+a_3k
\]

\[
\vec b=b_1i+b_2j+b_3k
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

# 12. Angle Between Two Vectors

\[
\boxed{
\cos\theta
=

\frac{\vec a\cdot\vec b}
{|\vec a||\vec b|}
}
\]

---

# 13. Projection of Vector

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

# 14. Work Done

Work done by force:

\[
\boxed{
W=\vec F\cdot\vec s
}
\]

where:

- F = force
- s = displacement

---

# PART F: VECTOR PRODUCT

---

# 15. Cross Product

## Definition

The vector product of two vectors gives a vector perpendicular to both vectors.

---

Formula:

\[
\boxed{
\vec a\times\vec b
=

|\vec a||\vec b|\sin\theta\hat n
}
\]

---

# Direction

Given by:

\[
\boxed{\text{Right hand rule}}
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

-(\vec b\times\vec a)
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

# 16. Area Using Cross Product

---

## Area of Parallelogram

\[
\boxed{
|\vec a\times\vec b|
}
\]

---

## Area of Triangle

\[
\boxed{
\frac12|\vec a\times\vec b|
}
\]

---

# 17. Torque Vector

Torque is the turning effect of force.

Formula:

\[
\boxed{
\vec\tau=\vec r\times\vec F
}
\]

where:

- r = position vector
- F = force

---

# Important Formula Sheet

## Magnitude

\[
\boxed{
|\vec a|=\sqrt{x^2+y^2+z^2}
}
\]

---

## Unit Vector

\[
\boxed{
\hat a=\frac{\vec a}{|\vec a|}
}
\]

---

## Dot Product

\[
\boxed{
\vec a\cdot\vec b
=

|\vec a||\vec b|\cos\theta
}
\]

---

## Angle Between Vectors

\[
\boxed{
\cos\theta=
\frac{\vec a\cdot\vec b}
{|\vec a||\vec b|}
}
\]

---

## Cross Product

\[
\boxed{
\vec a\times\vec b
=

|\vec a||\vec b|\sin\theta\hat n
}
\]

---

## Area of Triangle

\[
\boxed{
\frac12|\vec a\times\vec b|
}
\]

---

## Torque

\[
\boxed{
\vec\tau=\vec r\times\vec F
}
\]

---

# Solved Examples

---

## Example 1

Find magnitude of:

\[
\vec a=3i+4j
\]

Solution:

\[
|\vec a|
=

\sqrt{3^2+4^2}
\]

\[
=\sqrt{25}
\]

\[
\boxed{5}
\]

---

## Example 2

Find dot product:

\[
\vec a=i+2j+3k
\]

\[
\vec b=2i+j+k
\]

Solution:

\[
\vec a\cdot\vec b
=

(1)(2)+(2)(1)+(3)(1)
\]

\[
=7
\]

Answer:

\[
\boxed{7}
\]

---

## Example 3

If two vectors are perpendicular:

\[
\theta=90^\circ
\]

Then:

\[
\vec a\cdot\vec b
=

|\vec a||\vec b|\cos90^\circ
\]

\[
\boxed{0}
\]

---

# Common Mistakes

- Confusing scalar and vector quantities.
- Forgetting unit vector has magnitude 1.
- Mixing dot product and cross product formulas.
- Forgetting cross product gives a vector.
- Using wrong direction in cross product.
- Forgetting:

\[
l^2+m^2+n^2=1
\]

for direction cosines.

- Confusing area formulas for parallelogram and triangle.

---

# Chapter Summary

- Vectors represent quantities with magnitude and direction.
- Vector addition combines vector quantities.
- Dot product produces a scalar quantity.
- Cross product produces a vector quantity.
- Direction cosines describe vector orientation.
- Vectors help solve geometric and physical problems.

\[
\boxed{
\text{Vectors provide a mathematical language for direction and magnitude.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 2

# Chapter 9: Differential Calculus – Limits and Continuity

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 2  
> **Chapter:** Differential Calculus – Limits and Continuity

---

# Introduction

Differential calculus studies the behaviour of functions when the input changes slightly.

This chapter introduces:

- Limits
- One-sided limits
- Limit laws
- Standard limits
- Continuity of functions

Applications:

- Physics
- Engineering
- Economics
- Rate of change problems

---

# PART A: LIMITS

---

# 1. Limit of a Function

## Definition

If the value of a function approaches a definite value as x approaches a particular point, that value is called the limit.

Notation:

\[
\boxed{
\lim_{x\to a}f(x)=L
}
\]

Meaning:

As:

\[
x\rightarrow a
\]

the value of:

\[
f(x)
\]

approaches:

\[
L
\]

---

# 2. Concept of Limit

Example:

\[
f(x)=x+2
\]

Find:

\[
\lim_{x\to3}(x+2)
\]

Substitute:

\[
=3+2
\]

Therefore:

\[
\boxed{5}
\]

---

# 3. Left Hand Limit (LHL)

## Definition

The value approached by a function when x approaches a point from the left side is called the left-hand limit.

Notation:

\[
\boxed{
\lim_{x\to a^-}f(x)
}
\]

---

# 4. Right Hand Limit (RHL)

## Definition

The value approached by a function when x approaches a point from the right side is called the right-hand limit.

Notation:

\[
\boxed{
\lim_{x\to a^+}f(x)
}
\]

---

# 5. Existence of Limit

A limit exists only when:

\[
\boxed{
LHL=RHL
}
\]

If:

\[
LHL\neq RHL
\]

then the limit does not exist.

---

# PART B: LAWS OF LIMITS

---

# 6. Limit of Sum

\[
\boxed{
\lim_{x\to a}[f(x)+g(x)]
=

\lim f(x)+\lim g(x)
}
\]

---

# 7. Limit of Difference

\[
\boxed{
\lim[f(x)-g(x)]
=

\lim f(x)-\lim g(x)
}
\]

---

# 8. Limit of Product

\[
\boxed{
\lim[f(x)g(x)]
=

(\lim f(x))(\lim g(x))
}
\]

---

# 9. Limit of Quotient

\[
\boxed{
\lim\frac{f(x)}{g(x)}
=

\frac{\lim f(x)}
{\lim g(x)}
}
\]

provided:

\[
\lim g(x)\neq0
\]

---

# PART C: STANDARD ALGEBRAIC LIMITS

---

# 10. Important Limits

---

## Limit 1

\[
\boxed{
\lim_{x\to0}\frac{\sin x}{x}=1
}
\]

---

## Limit 2

\[
\boxed{
\lim_{x\to0}\frac{\tan x}{x}=1
}
\]

---

## Limit 3

\[
\boxed{
\lim_{x\to0}\frac{1-\cos x}{x^2}
=

\frac12
}
\]

---

# 11. Algebraic Limit

Example:

Find:

\[
\lim_{x\to2}(x^2+3x+1)
\]

Substitute:

\[
=2^2+3(2)+1
\]

\[
=4+6+1
\]

\[
\boxed{11}
\]

---

# 12. Factorisation Method

Used when direct substitution gives:

\[
\frac00
\]

form.

---

Example:

\[
\lim_{x\to2}
\frac{x^2-4}{x-2}
\]

Factor numerator:

\[
x^2-4=(x-2)(x+2)
\]

Cancel:

\[
=x+2
\]

Substitute:

\[
=4
\]

Answer:

\[
\boxed4
\]

---

# PART D: TRIGONOMETRIC LIMITS

---

# 13. Important Trigonometric Results

---

\[
\boxed{
\lim_{x\to0}\frac{\sin ax}{x}=a
}
\]

---

\[
\boxed{
\lim_{x\to0}\frac{\sin ax}{\sin bx}
=

\frac ab
}
\]

---

\[
\boxed{
\lim_{x\to0}\frac{\tan ax}{\tan bx}
=

\frac ab
}
\]

---

# 14. Exponential Limits

Important result:

\[
\boxed{
\lim_{x\to0}\frac{e^x-1}{x}=1
}
\]

---

# 15. Logarithmic Limits

Important result:

\[
\boxed{
\lim_{x\to0}
\frac{\log(1+x)}x=1
}
\]

---

# PART E: CONTINUITY

---

# 16. Continuity

## Definition

A function is continuous at a point if its limit at that point equals the function value.

For:

\[
x=a
\]

the function is continuous if:

\[
\boxed{
\lim_{x\to a}f(x)=f(a)
}
\]

---

# Conditions for Continuity

A function f(x) is continuous at x=a if:

---

## Condition 1

Function value exists:

\[
f(a)
\]

exists.

---

## Condition 2

Limit exists:

\[
\lim_{x\to a}f(x)
\]

exists.

---

## Condition 3

Both are equal:

\[
\boxed{
\lim_{x\to a}f(x)=f(a)
}
\]

---

# 17. Continuity in an Interval

A function is continuous in an interval if it is continuous at every point in that interval.

---

# Types of Discontinuity

---

# 18. Removable Discontinuity

A discontinuity that can be removed by redefining the function.

Example:

A missing point in a graph.

---

# 19. Jump Discontinuity

When:

\[
LHL\neq RHL
\]

---

# 20. Infinite Discontinuity

When function approaches infinity near a point.

Example:

\[
\frac1{x}
\]

at:

\[
x=0
\]

---

# PART F: CONTINUITY OF IMPORTANT FUNCTIONS

---

# 21. Polynomial Functions

All polynomial functions are continuous everywhere.

Examples:

\[
x^2+3x+1
\]

---

# 22. Rational Functions

Continuous where denominator is not zero.

Example:

\[
\frac{x+1}{x-2}
\]

Not continuous at:

\[
x=2
\]

---

# 23. Trigonometric Functions

Functions like:

\[
\sin x,\cos x
\]

are continuous for all real values.

---

# Important Formula Sheet

## Limit Definition

\[
\boxed{
\lim_{x\to a}f(x)=L
}
\]

---

## Limit Exists

\[
\boxed{
LHL=RHL
}
\]

---

## Standard Limit

\[
\boxed{
\lim_{x\to0}
\frac{\sin x}{x}=1
}
\]

---

\[
\boxed{
\lim_{x\to0}
\frac{1-\cos x}{x^2}
=\frac12
}
\]

---

## Continuity Condition

\[
\boxed{
\lim_{x\to a}f(x)=f(a)
}
\]

---

# Solved Examples

---

## Example 1

Find:

\[
\lim_{x\to5}(2x+3)
\]

Solution:

\[
=2(5)+3
\]

\[
=13
\]

Answer:

\[
\boxed{13}
\]

---

## Example 2

Evaluate:

\[
\lim_{x\to0}
\frac{\sin3x}{x}
\]

Using:

\[
\lim_{x\to0}\frac{\sin ax}{x}=a
\]

Answer:

\[
\boxed{3}
\]

---

## Example 3

Check continuity of:

\[
f(x)=x^2
\]

at:

\[
x=2
\]

Limit:

\[
\lim_{x\to2}x^2=4
\]

Function value:

\[
f(2)=4
\]

Since:

\[
\lim f(x)=f(2)
\]

\[
\boxed{\text{Continuous}}
\]

---

# Common Mistakes

- Confusing LHL and RHL.
- Forgetting limit exists only when both sides are equal.
- Using trigonometric limits without angles in radians.
- Cancelling terms incorrectly.
- Forgetting denominator condition in quotient limits.
- Confusing continuity and differentiability.
- Ignoring discontinuity points of rational functions.

---

# Chapter Summary

- Limits describe the behaviour of functions near a point.
- One-sided limits study approach from left and right.
- Standard limits simplify difficult calculations.
- Continuity requires the limit and function value to be equal.
- Discontinuities occur when these conditions fail.

\[
\boxed{
\text{Limits form the foundation of differential calculus.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 2

# Chapter 10: Differential Calculus – Differentiability

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 2  
> **Chapter:** Differential Calculus – Differentiability

---

# Introduction

Differentiation is a branch of calculus that studies the rate of change of a function.

It helps to find:

- Slope of curves
- Instantaneous velocity
- Maximum and minimum values
- Growth and decay rates

This chapter covers:

- Derivative from first principles
- Geometrical meaning of derivative
- Rules of differentiation
- Chain rule
- Implicit differentiation
- Parametric differentiation
- Second-order derivatives

---

# PART A: DERIVATIVE

---

# 1. Derivative

## Definition

The derivative of a function represents the rate of change of one quantity with respect to another.

Notation:

\[
\boxed{
\frac{dy}{dx}
}
\]

or

\[
\boxed{f'(x)}
\]

---

# 2. Derivative from First Principles

If:

\[
y=f(x)
\]

then derivative is defined as:

\[
\boxed{
f'(x)=
\lim_{h\to0}
\frac{f(x+h)-f(x)}{h}
}
\]

---

# 3. Geometrical Meaning of Derivative

The derivative represents the slope of the tangent to the curve at a point.

For a curve:

\[
y=f(x)
\]

slope of tangent:

\[
\boxed{
m=\frac{dy}{dx}
}
\]

---

# 4. Physical Meaning

Derivative represents rate of change.

Example:

Velocity:

\[
\boxed{
v=\frac{ds}{dt}
}
\]

Acceleration:

\[
\boxed{
a=\frac{dv}{dt}
}
\]

---

# PART B: BASIC DERIVATIVES

---

# 5. Derivative of Constant

If:

\[
y=c
\]

then:

\[
\boxed{
\frac{dy}{dx}=0
}
\]

---

# 6. Derivative of x

\[
\boxed{
\frac{d}{dx}(x)=1
}
\]

---

# 7. Power Rule

If:

\[
y=x^n
\]

then:

\[
\boxed{
\frac{dy}{dx}=nx^{n-1}
}
\]

---

Example:

\[
\frac{d}{dx}(x^3)
\]

\[
=3x^2
\]

---

# 8. Derivative of Sum

If:

\[
y=u+v
\]

then:

\[
\boxed{
\frac{dy}{dx}
=

\frac{du}{dx} +
\frac{dv}{dx}
}
\]

---

# PART C: RULES OF DIFFERENTIATION

---

# 9. Product Rule

If:

\[
y=uv
\]

then:

\[
\boxed{
\frac{dy}{dx}
=

u\frac{dv}{dx} +
v\frac{du}{dx}
}
\]

---

Example:

\[
y=x^2\sin x
\]

Derivative:

\[
=

x^2\cos x+2x\sin x
\]

---

# 10. Quotient Rule

If:

\[
y=\frac uv
\]

then:

\[
\boxed{
\frac{dy}{dx}
=

\frac{
v\frac{du}{dx}
-u\frac{dv}{dx}
}
{v^2}
}
\]

---

# 11. Chain Rule

Used for composite functions.

If:

\[
y=f(g(x))
\]

then:

\[
\boxed{
\frac{dy}{dx}
=

\frac{dy}{du}
\frac{du}{dx}
}
\]

---

Example:

\[
y=(x^2+1)^5
\]

Let:

\[
u=x^2+1
\]

Then:

\[
\frac{dy}{dx}
=

5u^4(2x)
\]

Therefore:

\[
\boxed{
10x(x^2+1)^4
}
\]

---

# PART D: DERIVATIVES OF IMPORTANT FUNCTIONS

---

# 12. Trigonometric Functions

---

\[
\boxed{
\frac{d}{dx}(\sin x)=\cos x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\cos x)=-\sin x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\tan x)=\sec^2x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\cot x)=-\csc^2x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\sec x)=\sec x\tan x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\cosec x)
=

-\cosec x\cot x
}
\]

---

# 13. Exponential Functions

---

\[
\boxed{
\frac{d}{dx}(e^x)=e^x
}
\]

---

\[
\boxed{
\frac{d}{dx}(a^x)=a^x\log a
}
\]

---

# 14. Logarithmic Functions

---

\[
\boxed{
\frac{d}{dx}(\log x)=\frac1x
}
\]

---

\[
\boxed{
\frac{d}{dx}(\ln x)=\frac1x
}
\]

---

# PART E: IMPLICIT DIFFERENTIATION

---

# 15. Implicit Function

When y is not directly expressed in terms of x, the function is implicit.

Example:

\[
x^2+y^2=a^2
\]

---

Differentiate both sides:

\[
2x+2y\frac{dy}{dx}=0
\]

Therefore:

\[
\boxed{
\frac{dy}{dx}
=

-\frac xy
}
\]

---

# PART F: PARAMETRIC DIFFERENTIATION

---

# 16. Parametric Equations

If:

\[
x=f(t)
\]

and:

\[
y=g(t)
\]

then:

\[
\boxed{
\frac{dy}{dx}
=

\frac{dy/dt}{dx/dt}
}
\]

---

Example:

\[
x=t^2,\quad y=t^3
\]

Then:

\[
\frac{dx}{dt}=2t
\]

\[
\frac{dy}{dt}=3t^2
\]

Therefore:

\[
\frac{dy}{dx}
=

\frac{3t^2}{2t}
\]

\[
\boxed{
=\frac{3t}{2}
}
\]

---

# PART G: SECOND ORDER DERIVATIVES

---

# 17. Second Derivative

The derivative of the first derivative is called second derivative.

Notation:

\[
\boxed{
\frac{d^2y}{dx^2}
}
\]

---

If:

\[
\frac{dy}{dx}=f'(x)
\]

then:

\[
\boxed{
\frac{d^2y}{dx^2}
=

\frac{d}{dx}(f'(x))
}
\]

---

Example:

\[
y=x^3
\]

First derivative:

\[
\frac{dy}{dx}=3x^2
\]

Second derivative:

\[
\boxed{
\frac{d^2y}{dx^2}=6x
}
\]

---

# Important Formula Sheet

## First Principle

\[
\boxed{
f'(x)=
\lim_{h\to0}
\frac{f(x+h)-f(x)}h
}
\]

---

## Power Rule

\[
\boxed{
\frac{d}{dx}(x^n)=nx^{n-1}
}
\]

---

## Product Rule

\[
\boxed{
(uv)'=u'v+uv'
}
\]

---

## Quotient Rule

\[
\boxed{
\left(\frac uv\right)'
=

\frac{vu'-uv'}{v^2}
}
\]

---

## Chain Rule

\[
\boxed{
\frac{dy}{dx}
=

\frac{dy}{du}\frac{du}{dx}
}
\]

---

## Parametric Derivative

\[
\boxed{
\frac{dy}{dx}
=

\frac{dy/dt}{dx/dt}
}
\]

---

## Second Derivative

\[
\boxed{
\frac{d^2y}{dx^2}
}
\]

---

# Solved Examples

---

## Example 1

Differentiate:

\[
y=x^4
\]

Using power rule:

\[
\frac{dy}{dx}=4x^3
\]

Answer:

\[
\boxed{4x^3}
\]

---

## Example 2

Differentiate:

\[
y=\sin x+x^2
\]

Solution:

\[
\frac{dy}{dx}
=

\cos x+2x
\]

Answer:

\[
\boxed{\cos x+2x}
\]

---

## Example 3

Differentiate:

\[
y=(x^2+3)^2
\]

Using chain rule:

\[
=2(x^2+3)(2x)
\]

Answer:

\[
\boxed{
4x(x^2+3)
}
\]

---

# Common Mistakes

- Forgetting power rule exponent reduction.
- Applying product rule incorrectly.
- Missing chain rule in composite functions.
- Differentiating y as constant during implicit differentiation.
- Confusing derivative and second derivative.
- Forgetting parameter differentiation formula.
- Making sign errors in trigonometric derivatives.

---

# Chapter Summary

- Derivative measures rate of change.
- First principle defines the derivative mathematically.
- Differentiation rules simplify calculations.
- Chain rule helps differentiate composite functions.
- Implicit differentiation handles equations involving both x and y.
- Parametric differentiation is used when variables depend on another parameter.
- Second derivatives represent change of the rate of change.

\[
\boxed{
\text{Differentiation is the mathematics of change.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 2

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

# Chapter 12: Introduction to Probability Theory

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 2  
> **Chapter:** Introduction to Probability Theory

---

# Introduction

Probability is the branch of mathematics that studies the chance of occurrence of events.

It helps us measure uncertainty and predict outcomes.

This chapter covers:

- Random experiments
- Sample spaces
- Events
- Classical probability
- Addition theorem
- Conditional probability
- Multiplication theorem
- Independent events
- Total probability theorem
- Bayes theorem

Applications:

- Statistics
- Data science
- Artificial intelligence
- Finance
- Scientific predictions

---

# PART A: BASIC CONCEPTS OF PROBABILITY

---

# 1. Random Experiment

## Definition

An experiment whose outcome cannot be predicted with certainty is called a random experiment.

---

Examples:

- Tossing a coin
- Rolling a die
- Drawing a card

---

# 2. Outcome

A possible result of a random experiment is called an outcome.

---

Example:

Rolling a die:

Possible outcomes:

\[
1,2,3,4,5,6
\]

---

# 3. Sample Space

## Definition

The set of all possible outcomes of a random experiment is called the sample space.

Symbol:

\[
\boxed{S}
\]

---

Example:

For tossing a coin:

\[
\boxed{
S=\{H,T\}
}
\]

---

For rolling a die:

\[
\boxed{
S=\{1,2,3,4,5,6\}
}
\]

---

# 4. Event

## Definition

A subset of the sample space is called an event.

Symbol:

\[
\boxed{E}
\]

---

Example:

Rolling an even number:

\[
E=\{2,4,6\}
\]

---

# Types of Events

---

# 5. Impossible Event

An event that cannot occur.

Probability:

\[
\boxed{P(E)=0}
\]

---

Example:

Getting 7 on a standard die.

---

# 6. Sure Event

An event that always occurs.

Probability:

\[
\boxed{P(E)=1}
\]

---

Example:

Getting a number between 1 and 6 when rolling a die.

---

# 7. Complementary Event

If E is an event, its complement is:

\[
\boxed{E'}
\]

---

Probability:

\[
\boxed{
P(E')=1-P(E)
}
\]

---

# PART B: CLASSICAL PROBABILITY

---

# 8. Probability of an Event

If all outcomes are equally likely:

\[
\boxed{
P(E)=
\frac{\text{Number of favourable outcomes}}
{\text{Total number of outcomes}}
}
\]

---

Range of Probability:

\[
\boxed{
0\leq P(E)\leq1
}
\]

---

# Example

A die is thrown once.

Find probability of getting an even number.

Sample space:

\[
S=\{1,2,3,4,5,6\}
\]

Total outcomes:

\[
6
\]

Favourable outcomes:

\[
\{2,4,6\}
\]

Number:

\[
3
\]

Therefore:

\[
P(E)=\frac36
\]

\[
\boxed{\frac12}
\]

---

# PART C: ADDITION THEOREM

---

# 9. Addition of Events

For two events A and B:

\[
\boxed{
P(A\cup B)
=

P(A)+P(B)-P(A\cap B)
}
\]

---

Where:

- \(A\cup B\) = occurrence of A or B
- \(A\cap B\) = occurrence of both A and B

---

# 10. Mutually Exclusive Events

Two events are mutually exclusive if they cannot occur together.

Condition:

\[
\boxed{
A\cap B=\phi
}
\]

---

Addition theorem becomes:

\[
\boxed{
P(A\cup B)=P(A)+P(B)
}
\]

---

Example:

In a die throw:

A = getting 2

B = getting 5

Both cannot occur together.

---

# PART D: CONDITIONAL PROBABILITY

---

# 11. Conditional Probability

## Definition

The probability of an event occurring when another event has already occurred is called conditional probability.

Notation:

\[
\boxed{
P(A|B)
}
\]

(read as probability of A given B)

---

Formula:

\[
\boxed{
P(A|B)
=

\frac{P(A\cap B)}
{P(B)}
}
\]

where:

\[
P(B)\neq0
\]

---

# Example

If:

\[
P(A\cap B)=0.2
\]

and:

\[
P(B)=0.5
\]

then:

\[
P(A|B)
=

\frac{0.2}{0.5}
\]

\[
\boxed{0.4}
\]

---

# PART E: MULTIPLICATION THEOREM

---

# 12. Multiplication Rule

For two events:

\[
\boxed{
P(A\cap B)
=

P(A)P(B|A)
}
\]

---

Also:

\[
\boxed{
P(A\cap B)
=

P(B)P(A|B)
}
\]

---

# PART F: INDEPENDENT EVENTS

---

# 13. Independent Events

Two events are independent if occurrence of one does not affect the other.

---

Condition:

\[
\boxed{
P(A\cap B)=P(A)P(B)
}
\]

---

Example:

Two coin tosses.

The first toss does not affect the second toss.

---

# PART G: TOTAL PROBABILITY THEOREM

---

# 14. Partition of Sample Space

A collection of events:

\[
B_1,B_2,...,B_n
\]

is a partition if:

1. Events are mutually exclusive.
2. Their union is the entire sample space.

---

# 15. Total Probability Theorem

If:

\[
B_1,B_2,...,B_n
\]

form a partition of sample space, then:

\[
\boxed{
P(A)
=

\sum_{i=1}^{n}
P(B_i)P(A|B_i)
}
\]

---

For three events:

\[
\boxed{
P(A)
=

P(B_1)P(A|B_1) +
P(B_2)P(A|B_2) +
P(B_3)P(A|B_3)
}
\]

---

# PART H: BAYES THEOREM

---

# 16. Bayes Theorem

## Definition

Bayes theorem calculates the probability of a cause when an event has already occurred.

---

Formula:

\[
\boxed{
P(B_i|A)
=

\frac{
P(B_i)P(A|B_i)
}
{
\sum P(B_j)P(A|B_j)
}
}
\]

---

# 17. Simple Bayes Problem Method

Steps:

1. Identify possible causes.
2. Find prior probabilities.
3. Find conditional probabilities.
4. Apply Bayes formula.

---

# Example

Three machines produce items:

Machine A:

\[
40\%
\]

Machine B:

\[
35\%
\]

Machine C:

\[
25\%
\]

A defective item is selected.

Find probability it came from Machine A.

Given:

\[
P(D|A)=0.02
\]

\[
P(D|B)=0.03
\]

\[
P(D|C)=0.05
\]

---

Using Bayes theorem:

\[
P(A|D)
=

\frac{P(A)P(D|A)}
{P(A)P(D|A)+P(B)P(D|B)+P(C)P(D|C)}
\]

---

# Important Formula Sheet

## Probability

\[
\boxed{
P(E)=
\frac{\text{Favourable outcomes}}
{\text{Total outcomes}}
}
\]

---

## Complement

\[
\boxed{
P(E')=1-P(E)
}
\]

---

## Addition Theorem

\[
\boxed{
P(A\cup B)
=

P(A)+P(B)-P(A\cap B)
}
\]

---

## Conditional Probability

\[
\boxed{
P(A|B)
=

\frac{P(A\cap B)}
{P(B)}
}
\]

---

## Multiplication Theorem

\[
\boxed{
P(A\cap B)
=

P(A)P(B|A)
}
\]

---

## Independent Events

\[
\boxed{
P(A\cap B)=P(A)P(B)
}
\]

---

## Bayes Theorem

\[
\boxed{
P(B_i|A)
=

\frac{
P(B_i)P(A|B_i)
}
{\sum P(B_j)P(A|B_j)}
}
\]

---

# Solved Examples

---

## Example 1

A coin is tossed once.

Find probability of getting head.

Sample space:

\[
S=\{H,T\}
\]

Favourable outcomes:

\[
1
\]

Total outcomes:

\[
2
\]

Therefore:

\[
\boxed{
P(H)=\frac12
}
\]

---

## Example 2

Two dice are thrown.

Find probability of getting sum 7.

Total outcomes:

\[
36
\]

Favourable pairs:

\[
(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)
\]

Number:

\[
6
\]

Probability:

\[
\frac6{36}
\]

\[
\boxed{\frac16}
\]

---

## Example 3

If:

\[
P(A)=0.4
\]

and:

\[
P(B)=0.5
\]

and A, B are independent:

\[
P(A\cap B)
=

0.4\times0.5
\]

\[
\boxed{0.2}
\]

---

# Common Mistakes

- Confusing sample space and event.
- Forgetting probability range:

\[
0\leq P(E)\leq1
\]

- Using addition theorem for independent events incorrectly.
- Forgetting subtraction of intersection term.
- Mixing conditional probability order:

\[
P(A|B)\neq P(B|A)
\]

- Applying Bayes theorem without identifying prior probabilities.
- Forgetting mutually exclusive events have:

\[
P(A\cap B)=0
\]

---

# Chapter Summary

- Probability measures uncertainty.
- Sample space contains all possible outcomes.
- Events are subsets of sample spaces.
- Conditional probability considers previous information.
- Independent events do not affect each other.
- Total probability combines different possible causes.
- Bayes theorem finds reverse probabilities.

\[
\boxed{
\text{Probability transforms uncertainty into mathematical prediction.}
}
\]
