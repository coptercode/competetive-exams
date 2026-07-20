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

