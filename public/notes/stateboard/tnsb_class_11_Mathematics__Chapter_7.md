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

