# Chapter 3: Matrices

> **Board:** CBSE  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Matrices

> **Note:** This chapter introduces matrices, their types, algebraic operations, matrix multiplication, transpose, symmetric and skew-symmetric matrices, invertible matrices, and the existence of matrix inverses.

---

# Introduction

A **matrix** is a rectangular arrangement of numbers, symbols, or algebraic expressions in rows and columns. Matrices provide a compact way of representing and solving systems of linear equations and are extensively used in mathematics, computer graphics, physics, economics, statistics, and engineering.

---

# 1. Matrix

## Definition

A **matrix** is a rectangular array of elements arranged in rows and columns.

General form

```
      ⎡a₁₁  a₁₂  ...  a₁ₙ⎤
      ⎢a₂₁  a₂₂  ...  a₂ₙ⎥
A =   ⎢ .    .        . ⎥
      ⎣aₘ₁  aₘ₂  ...  aₘₙ⎦
```

where

- **m** = Number of rows
- **n** = Number of columns

---

## Notation

A matrix is denoted by capital letters.

Example

```
      ⎡2  3⎤
A =   ⎣5  1⎦
```

---

# 2. Order of a Matrix

The **order** of a matrix is

```
Number of Rows × Number of Columns
```

Notation

```
m × n
```

---

## Examples

```
⎡1 2⎤

⎣3 4⎦
```

Order

```
2 × 2
```

---

```
⎡1 2 3⎤
```

Order

```
1 × 3
```

---

# 3. Equality of Matrices

Two matrices are equal if

- Their orders are the same.
- Corresponding elements are equal.

Mathematically,

```
A = B

⇔

aᵢⱼ = bᵢⱼ
```

for every

```
i, j
```

---

# 4. Types of Matrices

---

## (A) Row Matrix

Contains only one row.

Example

```
[2 5 7]
```

Order

```
1 × 3
```

---

## (B) Column Matrix

Contains only one column.

Example

```
⎡2⎤

⎢5⎥

⎣7⎦
```

Order

```
3 × 1
```

---

## (C) Rectangular Matrix

Number of rows ≠ Number of columns.

Example

```
2 × 3
```

---

## (D) Square Matrix

Number of rows = Number of columns.

Example

```
3 × 3
```

---

## (E) Zero (Null) Matrix

Every element is zero.

Example

```
⎡0 0⎤

⎣0 0⎦
```

---

## (F) Diagonal Matrix

All non-diagonal elements are zero.

Example

```
⎡2 0 0⎤

⎢0 5 0⎥

⎣0 0 7⎦
```

---

## (G) Scalar Matrix

A diagonal matrix with all diagonal elements equal.

Example

```
⎡4 0 0⎤

⎢0 4 0⎥

⎣0 0 4⎦
```

---

## (H) Identity (Unit) Matrix

A scalar matrix with diagonal elements equal to 1.

Notation

```
I
```

Example

```
⎡1 0 0⎤

⎢0 1 0⎥

⎣0 0 1⎦
```

---

## (I) Upper Triangular Matrix

Elements below the principal diagonal are zero.

Example

```
⎡2 3 4⎤

⎢0 5 6⎥

⎣0 0 8⎦
```

---

## (J) Lower Triangular Matrix

Elements above the principal diagonal are zero.

Example

```
⎡2 0 0⎤

⎢5 3 0⎥

⎣7 6 8⎦
```

---

# 5. Matrix Addition

Two matrices can be added only if they have the same order.

If

```
A = [aᵢⱼ]

B = [bᵢⱼ]
```

then

```
A + B = [aᵢⱼ + bᵢⱼ]
```

---

## Properties

- Commutative

```
A + B = B + A
```

- Associative

```
(A+B)+C=A+(B+C)
```

- Identity

```
A+O=A
```

where

```
O
```

is the zero matrix.

---

# 6. Matrix Subtraction

Defined as

```
A−B=A+(-B)
```

The matrices must have the same order.

---

# 7. Scalar Multiplication

If

```
k
```

is a scalar,

then

```
kA
```

is obtained by multiplying every element of

```
A
```

by

```
k
```

---

# 8. Matrix Multiplication

## Condition

If

```
A

is

m×n
```

and

```
B

is

n×p
```

then

```
AB

exists

and

is

m×p
```

---

## Formula

Each element is obtained by multiplying corresponding row and column entries.

```
cᵢⱼ

=

Σaᵢₖbₖⱼ
```

---

## Example

```
A=

⎡1 2⎤

⎣3 4⎦
```

```
B=

⎡5 6⎤

⎣7 8⎦
```

```
AB=

⎡19 22⎤

⎣43 50⎦
```

---

# 9. Properties of Matrix Multiplication

## Associative

```
(AB)C=A(BC)
```

---

## Distributive

```
A(B+C)=AB+AC
```

---

## Identity Property

```
AI=IA=A
```

---

## Not Commutative

Generally,

```
AB≠BA
```

This is one of the most important properties.

---

## Zero Product

```
AB=O
```

does **not** necessarily imply

```
A=O

or

B=O
```

---

# 10. Transpose of a Matrix

## Definition

The transpose of a matrix is obtained by interchanging its rows and columns.

Notation

```
Aᵀ
```

If

```
A=[aᵢⱼ]
```

then

```
Aᵀ=[aⱼᵢ]
```

---

## Example

```
A=

⎡1 2 3⎤

⎣4 5 6⎦
```

```
Aᵀ=

⎡1 4⎤

⎢2 5⎥

⎣3 6⎦
```

---

# 11. Properties of Transpose

```
(Aᵀ)ᵀ=A
```

---

```
(A+B)ᵀ=Aᵀ+Bᵀ
```

---

```
(kA)ᵀ=kAᵀ
```

---

```
(AB)ᵀ=BᵀAᵀ
```

---

# 12. Symmetric Matrix

## Definition

A square matrix satisfying

```
Aᵀ=A
```

is called symmetric.

---

## Example

```
⎡2 3⎤

⎣3 5⎦
```

---

# 13. Skew-Symmetric Matrix

## Definition

A square matrix satisfying

```
Aᵀ=-A
```

is called skew-symmetric.

---

## Characteristics

Diagonal elements are always

```
0
```

---

## Example

```
⎡0  4⎤

⎣-4 0⎦
```

---

# 14. Decomposition of a Square Matrix

Any square matrix can be expressed as

```
A

=

½(A+Aᵀ)

+

½(A−Aᵀ)
```

where

- First part → Symmetric
- Second part → Skew-symmetric

---

# 15. Invertible Matrix

## Definition

A square matrix

```
A
```

is invertible if there exists another matrix

```
A⁻¹
```

such that

```
AA⁻¹=A⁻¹A=I
```

---

## Non-Singular Matrix

If

```
|A|≠0
```

then

```
A
```

is invertible.

---

## Singular Matrix

If

```
|A|=0
```

then inverse does not exist.

---

# 16. Unique Inverse

If the inverse exists, then it is **unique**.

Proof

Suppose

```
B

and

C
```

are inverses of

```
A
```

Then

```
B=BI
```

```
=B(AC)
```

```
=(BA)C
```

```
=IC
```

```
=C
```

Hence,

```
B=C
```

Therefore, the inverse is unique.

---

# Comparison Tables

## Square vs Rectangular Matrix

| Square Matrix      | Rectangular Matrix      |
| ------------------ | ----------------------- |
| Rows = Columns     | Rows ≠ Columns          |
| Determinant exists | Determinant not defined |

---

## Symmetric vs Skew-Symmetric Matrix

| Symmetric                         | Skew-Symmetric             |
| --------------------------------- | -------------------------- |
| Aᵀ = A                            | Aᵀ = -A                    |
| Diagonal elements may be non-zero | Diagonal elements are zero |

---

## Singular vs Non-Singular Matrix

| Singular   | Non-Singular   |
| ---------- | -------------- |
| \|A\| = 0  | \|A\| ≠ 0      |
| No inverse | Inverse exists |

---

## Matrix Addition vs Matrix Multiplication

| Addition            | Multiplication                    |
| ------------------- | --------------------------------- |
| Same order required | Columns of first = Rows of second |
| Commutative         | Not generally commutative         |

---

# ASCII Diagrams

## Matrix

```
Rows →

⎡a₁₁ a₁₂ a₁₃⎤

⎢a₂₁ a₂₂ a₂₃⎥

⎣a₃₁ a₃₂ a₃₃⎦

      ↑

   Columns
```

---

## Identity Matrix

```
⎡1 0 0⎤

⎢0 1 0⎥

⎣0 0 1⎦
```

---

## Transpose

```
A

1 2 3

4 5 6

↓

Aᵀ

1 4

2 5

3 6
```

---

## Matrix Multiplication

```
(Row)

×

(Column)

↓

Single Element
```

---

# Solved Examples

### Example 1

Find the order of

```
⎡1 2 3⎤

⎢4 5 6⎥
```

**Solution**

Rows

```
2
```

Columns

```
3
```

Therefore,

```
Order = 2×3
```

---

### Example 2

Add

```
A=

⎡1 2⎤

⎣3 4⎦
```

and

```
B=

⎡5 6⎤

⎣7 8⎦
```

**Solution**

```
A+B

=

⎡6 8⎤

⎣10 12⎦
```

---

### Example 3

Find

```
2A
```

if

```
A=

⎡3 1⎤

⎣2 5⎦
```

**Solution**

Multiply every element by

```
2
```

```
2A=

⎡6 2⎤

⎣4 10⎦
```

---

### Example 4

Find the transpose of

```
⎡2 5 7⎤

⎣1 3 9⎦
```

**Solution**

```
Aᵀ=

⎡2 1⎤

⎢5 3⎥

⎣7 9⎦
```

---

### Example 5

Show that

```
AB≠BA
```

for

```
A=

⎡1 2⎤

⎣0 1⎦
```

```
B=

⎡2 0⎤

⎣1 3⎦
```

**Solution**

```
AB=

⎡4 6⎤

⎣1 3⎦
```

```
BA=

⎡2 4⎤

⎣1 5⎦
```

Since

```
AB≠BA
```

matrix multiplication is **not commutative**.

---

### Example 6

Determine whether

```
A=

⎡2 3⎤

⎣3 5⎦
```

is symmetric.

**Solution**

```
Aᵀ=

⎡2 3⎤

⎣3 5⎦
```

Since

```
Aᵀ=A
```

the matrix is **symmetric**.

---

# Common Mistakes

- Confusing the **order** of a matrix with the number of elements.
- Adding or subtracting matrices of **different orders**, which is not defined.
- Assuming **matrix multiplication is commutative**; in general, **AB ≠ BA**.
- Ignoring the compatibility condition for matrix multiplication (**columns of the first matrix must equal rows of the second**).
- Forgetting to reverse the order while taking the transpose of a product: **(AB)ᵀ = BᵀAᵀ**.
- Assuming every square matrix is invertible; only **non-singular matrices** (with non-zero determinant) have inverses.
- Confusing **symmetric** and **skew-symmetric** matrices.
- Forgetting that the diagonal elements of a **skew-symmetric matrix** are always zero.

---

# Chapter Summary

- A **matrix** is a rectangular arrangement of elements in rows and columns.
- The **order** of a matrix is expressed as the number of rows × the number of columns.
- Matrices can be classified as **row**, **column**, **square**, **rectangular**, **zero**, **diagonal**, **scalar**, **identity**, **upper triangular**, and **lower triangular** matrices.
- Matrix operations include **addition**, **subtraction**, **scalar multiplication**, and **matrix multiplication**.
- Matrix multiplication is **associative** and **distributive**, but **not commutative**.
- The **transpose** of a matrix is obtained by interchanging rows and columns and satisfies several important algebraic properties.
- A **symmetric matrix** satisfies **Aᵀ = A**, whereas a **skew-symmetric matrix** satisfies **Aᵀ = -A**.
- Every square matrix can be uniquely expressed as the sum of a symmetric matrix and a skew-symmetric matrix.
- A square matrix is **invertible** if its determinant is non-zero, and the inverse, when it exists, is **unique**.
- Matrices form the foundation for solving systems of linear equations, studying transformations, and understanding advanced topics in algebra and applied mathematics.

# CBSE Class 12 Mathematics

