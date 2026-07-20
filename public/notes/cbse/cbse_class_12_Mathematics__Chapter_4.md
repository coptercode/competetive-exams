# Chapter 4: Determinants

> **Board:** CBSE  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Determinants

> **Note:** This chapter introduces determinants of square matrices, their properties, minors, cofactors, adjoints, inverses of matrices, applications in finding the area of a triangle, and solving systems of linear equations using the matrix inversion method.

---

# Introduction

A **determinant** is a numerical value associated with a square matrix. It provides useful information about the matrix, such as whether the matrix is invertible, and is widely used in solving systems of linear equations, finding areas, and studying transformations.

Only **square matrices** have determinants.

---

# 1. Determinant

## Definition

The determinant of a square matrix is a scalar quantity obtained from its elements according to a specific rule.

Notation

For a matrix

```
A
```

its determinant is written as

```
|A|

or

det(A)
```

---

## Determinant of a 1 × 1 Matrix

If

```
A = [a]
```

then

```
|A| = a
```

---

# 2. Determinant of a 2 × 2 Matrix

If

```
A =
⎡a  b⎤
⎣c  d⎦
```

then

```
|A| = ad − bc
```

---

## Example

```
A =
⎡3  2⎤
⎣5  4⎦
```

```
|A|

= (3 × 4) − (2 × 5)

= 12 − 10

= 2
```

---

# 3. Determinant of a 3 × 3 Matrix

If

```
A =
⎡a  b  c⎤
⎢d  e  f⎥
⎣g  h  i⎦
```

then

```
|A|

= a(ei − fh)

− b(di − fg)

+ c(dh − eg)
```

This method is called **expansion along the first row**.

Expansion may also be carried out along any row or column.

---

# 4. Minors

## Definition

The **minor** of an element is the determinant obtained by deleting the row and column containing that element.

Notation

```
Mij
```

---

## Example

For

```
A =
⎡1 2 3⎤
⎢4 5 6⎥
⎣7 8 9⎦
```

Minor of

```
a₁₁
```

```
M₁₁

=
|5 6|
|8 9|

= (5×9) − (6×8)

= 45 − 48

= -3
```

---

# 5. Cofactors

## Definition

The cofactor of an element is obtained by multiplying its minor by

```
(-1)^(i+j)
```

Notation

```
Aij
```

Formula

```
Aij

=

(-1)^(i+j) Mij
```

---

## Sign Pattern

```
+   −   +

−   +   −

+   −   +
```

---

# 6. Properties of Determinants

---

## Property 1

The determinant of the identity matrix is

```
1
```

---

## Property 2

Interchanging any two rows (or columns) changes the sign of the determinant.

---

## Property 3

If two rows (or columns) are identical,

```
|A| = 0
```

---

## Property 4

If one row (or column) is a multiple of another,

```
|A| = 0
```

---

## Property 5

If all elements of a row (or column) are zero,

```
|A| = 0
```

---

## Property 6

Multiplying one row by a constant

```
k
```

multiplies the determinant by

```
k
```

---

## Property 7

The determinant remains unchanged if a multiple of one row is added to another row.

---

## Property 8

```
|Aᵀ|

=

|A|
```

---

## Property 9

```
|AB|

=

|A||B|
```

---

# 7. Singular and Non-Singular Matrices

## Singular Matrix

A square matrix whose determinant is zero.

```
|A| = 0
```

Inverse does not exist.

---

## Non-Singular Matrix

A square matrix whose determinant is non-zero.

```
|A| ≠ 0
```

Inverse exists.

---

# 8. Adjoint of a Matrix

## Definition

The transpose of the cofactor matrix is called the **adjoint** (or adjugate) of a matrix.

Notation

```
adj(A)
```

---

## Formula

```
adj(A)

=

(Cofactor Matrix)ᵀ
```

---

# 9. Inverse of a Matrix

If

```
|A| ≠ 0
```

then

```
A⁻¹

=

adj(A)/|A|
```

---

## Inverse of a 2 × 2 Matrix

If

```
A =
⎡a  b⎤
⎣c  d⎦
```

then

```
A⁻¹

=

1/(ad−bc)

⎡ d  -b⎤
⎣-c   a⎦
```

provided

```
ad−bc ≠ 0
```

---

# 10. Verification of Inverse

A matrix is verified as the inverse if

```
AA⁻¹

=

I
```

and

```
A⁻¹A

=

I
```

---

# 11. Area of a Triangle Using Determinants

If the vertices are

```
(x₁,y₁)

(x₂,y₂)

(x₃,y₃)
```

then

```
Area

=

1/2

×

| x₁  y₁  1 |

| x₂  y₂  1 |

| x₃  y₃  1 |
```

Take the absolute value.

---

## Condition for Collinearity

If

```
Area = 0
```

then the three points are collinear.

---

# 12. System of Linear Equations

Consider

```
a₁x+b₁y=c₁

a₂x+b₂y=c₂
```

Matrix form

```
AX=B
```

where

```
A

=

Coefficient Matrix
```

---

# 13. Matrix Method for Solving Equations

If

```
AX=B
```

and

```
A⁻¹
```

exists,

then

```
X=A⁻¹B
```

This is called the **Matrix Inversion Method**.

---

# 14. Solving Three Variable Systems

For

```
3 × 3
```

systems,

```
AX=B
```

where

```
A
```

is

```
3 × 3
```

If

```
|A|≠0
```

then

```
X=A⁻¹B
```

---

# Comparison Tables

## Singular vs Non-Singular Matrix

| Singular   | Non-Singular   |
| ---------- | -------------- |
| \|A\| = 0  | \|A\| ≠ 0      |
| No inverse | Inverse exists |

---

## Minor vs Cofactor

| Minor                                       | Cofactor                       |
| ------------------------------------------- | ------------------------------ |
| Determinant after deleting a row and column | Minor multiplied by (-1)^(i+j) |
| Denoted by Mᵢⱼ                              | Denoted by Aᵢⱼ                 |

---

## Matrix vs Determinant

| Matrix             | Determinant                      |
| ------------------ | -------------------------------- |
| Rectangular array  | Numerical value                  |
| May be rectangular | Defined only for square matrices |

---

## Adjoint vs Inverse

| Adjoint                        | Inverse                  |
| ------------------------------ | ------------------------ |
| Transpose of cofactor matrix   | adj(A)/\|A\|             |
| Exists for every square matrix | Exists only if \|A\| ≠ 0 |

---

# ASCII Diagrams

## Sign Pattern of Cofactors

```
+   -   +

-   +   -

+   -   +
```

---

## Minor of an Element

```
Delete Row

↓

Delete Column

↓

Remaining Determinant
```

---

## Matrix Inversion Method

```
AX = B

↓

Multiply by A⁻¹

↓

X = A⁻¹B
```

---

## Triangle for Area

```
A(x₁,y₁)

   *

  / \

 /   \

*-----*

B     C
```

---

# Solved Examples

### Example 1

Find the determinant of

```
A =
⎡4  3⎤
⎣2  5⎦
```

**Solution**

Using

```
|A| = ad − bc
```

```
= (4 × 5) − (3 × 2)

= 20 − 6

= 14
```

---

### Example 2

Find the minor of

```
a₁₁
```

for

```
A =
⎡1 2 3⎤
⎢4 5 6⎥
⎣7 8 9⎦
```

**Solution**

Delete the first row and first column.

```
|5 6|
|8 9|
```

```
= 45 − 48

= -3
```

Therefore,

```
M₁₁ = -3
```

---

### Example 3

Find the cofactor of

```
a₁₂
```

using the matrix in Example 2.

**Solution**

The minor of

```
a₁₂
```

is

```
|4 6|
|7 9|

= 36 − 42

= -6
```

Since

```
(-1)^(1+2)

= -1
```

```
A₁₂

= (-1)(-6)

= 6
```

---

### Example 4

Find the inverse of

```
A =
⎡2 1⎤
⎣3 2⎦
```

**Solution**

Determinant

```
|A|

= (2×2) − (1×3)

= 1
```

Hence,

```
A⁻¹

=

⎡ 2  -1⎤
⎣-3   2⎦
```

---

### Example 5

Find the area of the triangle with vertices

```
(0,0)

(4,0)

(0,3)
```

**Solution**

```
Area

=

1/2

×

|0 0 1|
|4 0 1|
|0 3 1|
```

Evaluating,

```
Area

=

6 square units
```

---

### Example 6

Solve

```
x+y=5

2x+y=8
```

using the matrix method.

**Solution**

Coefficient matrix

```
A =
⎡1 1⎤
⎣2 1⎦
```

```
|A|

= -1 ≠ 0
```

Hence,

```
A⁻¹

=

⎡-1  1⎤
⎣ 2 -1⎦
```

Now,

```
X=A⁻¹B
```

```
=
⎡-1 1⎤
⎣ 2-1⎦

×

⎡5⎤
⎣8⎦
```

```
=
⎡3⎤
⎣2⎦
```

Therefore,

```
x = 3

y = 2
```

---

# Common Mistakes

- Trying to find the determinant of a **non-square matrix**.
- Using the incorrect sign pattern while calculating **cofactors**.
- Confusing **minors** with **cofactors**.
- Forgetting that the inverse of a matrix exists only when **|A| ≠ 0**.
- Making arithmetic errors while expanding a **3 × 3 determinant**.
- Ignoring the absolute value when calculating the **area of a triangle**.
- Multiplying matrices incorrectly while using the **matrix inversion method**.
- Forgetting to verify the inverse by checking **AA⁻¹ = I**.

---

# Chapter Summary

- A **determinant** is a scalar value associated with a square matrix and is denoted by **|A|**.
- Determinants are defined only for **square matrices** and help determine whether a matrix is invertible.
- **Minors** and **cofactors** are essential in computing determinants, adjoints, and inverses of matrices.
- The **adjoint** of a matrix is the transpose of its cofactor matrix.
- A square matrix is **invertible** if and only if its determinant is **non-zero**, and its inverse is given by **A⁻¹ = adj(A)/|A|**.
- Determinants are used to calculate the **area of a triangle**, and three points are collinear if the area is zero.
- Systems of linear equations can be expressed in the matrix form **AX = B** and solved using the **matrix inversion method**, provided the coefficient matrix is non-singular.
- Understanding determinants forms the foundation for advanced topics in linear algebra, geometry, and systems of equations.

# CBSE Class 12 Mathematics

