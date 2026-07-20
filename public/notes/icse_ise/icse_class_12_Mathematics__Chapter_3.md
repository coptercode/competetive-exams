# Chapter 3: Matrices and Determinants

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Matrices and Determinants

(Topics covered from uploaded ISC Class 12 Mathematics outline: matrix operations, determinants, adjoint and inverse, Cramer's rule, and elementary row transformations) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Matrices and Determinants** are important tools used to represent and solve systems of linear equations.

They have wide applications in:

- Engineering
- Computer graphics
- Economics
- Physics
- Data science
- Cryptography

This chapter covers:

- Types of matrices
- Matrix operations
- Properties of determinants
- Inverse of matrices
- Solving equations using matrices

---

# 1. Matrix

## Definition

A matrix is a rectangular arrangement of numbers or elements in rows and columns.

A matrix is represented as:

```
A = [aᵢⱼ]
```

where:

- i → row number
- j → column number

---

# Order of Matrix

If a matrix has:

```
m rows

and

n columns
```

then its order is:

```
m × n
```

---

# Example

```
A = |1 2 3|
    |4 5 6|
```

Rows = 2

Columns = 3

Order:

```
2 × 3
```

---

# 2. Types of Matrices

---

# Row Matrix

A matrix having only one row.

Example:

```
[1 2 3]
```

Order:

```
1×3
```

---

# Column Matrix

A matrix having only one column.

Example:

```
|1|
|2|
|3|
```

Order:

```
3×1
```

---

# Rectangular Matrix

Number of rows ≠ number of columns.

Example:

```
2×3 matrix
```

---

# Square Matrix

Number of rows = number of columns.

Example:

```
2×2
```

---

# Zero Matrix

All elements are zero.

Example:

```
|0 0|
|0 0|
```

---

# Diagonal Matrix

A square matrix where non-diagonal elements are zero.

Example:

```
|2 0|
|0 5|
```

---

# Identity Matrix

Diagonal elements are 1.

Example:

```
I=

|1 0|
|0 1|
```

---

# Scalar Matrix

Diagonal elements are equal.

Example:

```
|3 0|
|0 3|
```

---

# Symmetric Matrix

A matrix satisfying:

```
Aᵀ=A
```

---

# Skew Symmetric Matrix

A matrix satisfying:

```
Aᵀ=-A
```

---

# 3. Equality of Matrices

Two matrices are equal if:

1. Same order
2. Corresponding elements are equal

---

Example:

```
A=B
```

if:

```
aᵢⱼ=bᵢⱼ
```

---

# 4. Operations on Matrices

---

# Addition of Matrices

Two matrices can be added only if they have the same order.

Formula:

```
(A+B)ᵢⱼ=aᵢⱼ+bᵢⱼ
```

---

Example:

```
|1 2| + |3 4|

=|4 6|
```

---

# Subtraction

```
A-B=A+(-B)
```

---

# Scalar Multiplication

Each element is multiplied by a constant.

Example:

```
2|1 2|

=|2 4|
```

---

# 5. Multiplication of Matrices

Matrix multiplication is possible when:

```
Number of columns of first matrix

=

Number of rows of second matrix
```

---

If:

```
A = m×n

B = n×p
```

Then:

```
AB = m×p
```

---

# Important Property

Matrix multiplication is not commutative:

```
AB ≠ BA
```

---

# Associative Property

```
(AB)C=A(BC)
```

---

# Distributive Property

```
A(B+C)=AB+AC
```

---

# 6. Transpose of Matrix

## Definition

Interchanging rows and columns is called transpose.

---

If:

```
A=[aᵢⱼ]
```

then:

```
Aᵀ=[aⱼᵢ]
```

---

# Properties

```
(Aᵀ)ᵀ=A
```

---

```
(A+B)ᵀ=Aᵀ+Bᵀ
```

---

```
(AB)ᵀ=BᵀAᵀ
```

---

# 7. Determinant

## Definition

A determinant is a scalar value associated with a square matrix.

Represented as:

```
|A|
```

---

# Determinant of 2×2 Matrix

For:

```
A=
|a b|
|c d|
```

Then:

```
|A|=ad-bc
```

---

# Example

```
|2 3|
|4 5|
```

Determinant:

```
=2×5-3×4

=10-12

=-2
```

---

# 8. Properties of Determinants

---

## Property 1

Interchanging two rows changes the sign.

```
|A| → -|A|
```

---

## Property 2

If two rows are identical:

```
|A|=0
```

---

## Property 3

A common factor can be taken outside.

---

## Property 4

Adding a multiple of one row to another does not change determinant.

---

# 9. Minors and Cofactors

---

# Minor

The minor Mᵢⱼ is obtained by deleting the ith row and jth column.

---

# Cofactor

Formula:

```
Cᵢⱼ=(-1)ⁱ⁺ʲ Mᵢⱼ
```

---

# Cofactor Matrix

Matrix containing all cofactors.

---

# 10. Adjoint of Matrix

## Definition

Transpose of cofactor matrix is called adjoint.

Formula:

```
adj(A)=Cᵀ
```

---

# 11. Inverse of Matrix

## Definition

The inverse of matrix A is:

```
A⁻¹
```

such that:

```
AA⁻¹=I
```

---

# Formula

```
A⁻¹ = adj(A)/|A|
```

---

# Condition

Inverse exists only when:

```
|A|≠0
```

---

# Example

For:

```
A=
|a b|
|c d|
```

Inverse:

```
A⁻¹=

1/(ad-bc)

| d -b|
|-c  a|
```

---

# 12. Solving Linear Equations Using Matrices

System:

```
ax+by=c

dx+ey=f
```

can be written as:

```
AX=B
```

where:

```
X=A⁻¹B
```

---

# 13. Cramer's Rule

For equations:

```
ax+by=c

dx+ey=f
```

---

Solutions:

```
x=Dx/D

y=Dy/D
```

where:

- D = determinant of coefficient matrix
- Dx = determinant replacing x column
- Dy = determinant replacing y column

---

# 14. Elementary Row Transformations

Used to find inverse matrices.

---

# Types

## Row Switching

```
Ri ↔ Rj
```

---

## Multiplying Row

```
Ri → kRi
```

---

## Adding Rows

```
Ri → Ri+kRj
```

---

# 15. Applications of Matrices

- Solving simultaneous equations.
- Computer graphics.
- Image transformations.
- Cryptography.
- Economic modelling.
- Engineering calculations.

---

# ASCII Flowchart

```
             MATRICES
                │
     ┌──────────┼──────────┐
     ▼          ▼          ▼
  Types     Operations Determinants
     │          │          │
     ▼          ▼          ▼
 Inverse    Multiplication Cofactors
     │
     ▼
 Linear Equations
     │
     ▼
 Applications
```

---

# Important Formulae

| Concept         | Formula        |
| --------------- | -------------- |
| Matrix Order    | m×n            |
| Determinant     | ad−bc          |
| Transpose       | Aᵀ             |
| Inverse         | A⁻¹=adj(A)/    | A   |     |
| Identity        | AA⁻¹=I         |
| Cofactor        | Cᵢⱼ=(-1)ⁱ⁺ʲMᵢⱼ |
| Matrix Equation | AX=B           |
| Solution        | X=A⁻¹B         |

---

# Solved Examples

## Example 1

Find determinant:

```
|3 2|
|1 4|
```

Solution:

```
=3×4-2×1

=12-2

=10
```

Answer:

```
10
```

---

## Example 2

Find inverse:

```
A=
|2 1|
|5 3|
```

Determinant:

```
=6-5=1
```

Therefore:

```
A⁻¹=

|3 -1|
|-5 2|
```

---

## Example 3

Find transpose:

```
A=

|1 2|
|3 4|
```

Transpose:

```
Aᵀ=

|1 3|
|2 4|
```

---

## Example 4

Check multiplication order:

A:

```
2×3
```

B:

```
3×4
```

Therefore:

```
AB = 2×4
```

---

## Example 5

Solve:

```
2x+y=5

x+y=3
```

Subtract equations:

```
x=2
```

Then:

```
y=1
```

Answer:

```
x=2,y=1
```

---

# Common Mistakes

- Multiplying matrices in wrong order.
- Assuming AB = BA.
- Forgetting determinant condition for inverse.
- Incorrect cofactor signs.
- Confusing transpose with inverse.
- Adding matrices of different orders.

---

# Exam Tips

- Memorize determinant properties.
- Practice inverse calculation using adjoint method.
- Learn Cramer's rule steps.
- Practice matrix multiplication carefully.
- Remember:

```
AB ≠ BA
```

- Revise all matrix transformation rules.

---

# Quick Revision

- Matrix → rectangular arrangement of numbers.
- Order = rows × columns.
- Determinant exists only for square matrices.
- Inverse:

```
A⁻¹=adj(A)/|A|
```

- Matrix multiplication:

```
AB ≠ BA
```

- Cramer's rule solves simultaneous equations.
- Elementary transformations help find inverses.

---

# Chapter Summary

- **Matrices** provide a compact representation of mathematical data and linear equations.
- Matrix operations such as addition, multiplication, and transpose follow specific algebraic rules.
- **Determinants** help determine matrix properties and are used to find inverses.
- The **adjoint method** and **elementary row transformations** are important techniques for calculating inverse matrices.
- **Cramer's rule and matrix equations** provide efficient methods for solving simultaneous linear equations.
- Matrices and determinants are fundamental tools in **engineering, computer science, economics, physics, graphics, and data analysis**.

# ISC Class 12 Mathematics

