# Chapter 8: Matrices

> **Board:** ICSE
> **Class:** 10
> **Subject:** Mathematics
> **Chapter:** Matrices

---

# Introduction

A **Matrix** is a rectangular arrangement of numbers, variables, or algebraic expressions arranged in rows and columns. Matrices are widely used in mathematics, computer science, engineering, economics, graphics, and data analysis. They simplify solving systems of equations and handling large sets of numerical data.

---

# 1. Matrix

## Definition

A **Matrix** is a rectangular array of elements arranged in rows and columns and enclosed within brackets.

---

## Representation

A matrix is usually represented by capital letters such as

```
A, B, C, M, N
```

Example

```
      [2   5]
A  =  [4   7]
```

---

# 2. Order of a Matrix

## Definition

The **Order** of a matrix is determined by the number of **rows** and **columns**.

---

## Formula

```
Order = m × n
```

where

- **m** = Number of rows
- **n** = Number of columns

---

## Example

```
[3   2   1]
[5   7   4]
```

Rows

```
2
```

Columns

```
3
```

Order

```
2 × 3
```

---

# 3. Types of Matrices

## Row Matrix

A matrix having only one row.

Example

```
[2   5   7]
```

Order

```
1 × 3
```

---

## Column Matrix

A matrix having only one column.

Example

```
[4]
[8]
[1]
```

Order

```
3 × 1
```

---

## Square Matrix

A matrix having the same number of rows and columns.

Example

```
[2   5]
[7   1]
```

Order

```
2 × 2
```

---

## Zero (Null) Matrix

A matrix in which every element is zero.

Example

```
[0   0]
[0   0]
```

---

## Diagonal Matrix

A square matrix in which all non-diagonal elements are zero.

Example

```
[3   0]
[0   5]
```

---

## Identity (Unit) Matrix

A square matrix having

- 1 on the principal diagonal
- 0 elsewhere

Example

```
[1   0]
[0   1]
```

Represented by

```
I
```

---

# 4. Equality of Matrices

Two matrices are equal if

- Their orders are the same.
- Their corresponding elements are equal.

---

## Example

```
A = [2   4]

    [5   7]
```

```
B = [2   4]

    [5   7]
```

Therefore,

```
A = B
```

---

# 5. Addition of Matrices

Matrices can be added only if they have the same order.

---

## Formula

If

```
A = [aᵢⱼ]

B = [bᵢⱼ]
```

then

```
A + B

=

[aᵢⱼ + bᵢⱼ]
```

---

## Example

```
A

=

[2   3]

[4   5]
```

```
B

=

[1   6]

[3   2]
```

```
A+B

=

[3   9]

[7   7]
```

---

# 6. Subtraction of Matrices

Matrices of the same order can be subtracted.

---

## Formula

```
A−B

=

[aᵢⱼ−bᵢⱼ]
```

---

## Example

```
A

=

[8   5]

[7   4]
```

```
B

=

[2   3]

[5   1]
```

```
A−B

=

[6   2]

[2   3]
```

---

# 7. Scalar Multiplication

A scalar is an ordinary number.

Each element of the matrix is multiplied by the scalar.

---

## Formula

```
kA

=

[k × aᵢⱼ]
```

---

## Example

```
A

=

[2   4]

[1   3]
```

Find

```
3A
```

```
3A

=

[6   12]

[3    9]
```

---

# 8. Matrix Multiplication

Matrices can be multiplied only if

```
Number of columns of first matrix

=

Number of rows of second matrix
```

---

## Rule

If

```
A

=

m × n
```

and

```
B

=

n × p
```

then

```
AB

exists

and

AB

=

m × p
```

---

## Example

```
A

=

[2   1]

[3   4]
```

```
B

=

[5   2]

[1   3]
```

Multiply

```
AB
```

```
AB

=

[(2×5)+(1×1)    (2×2)+(1×3)]

[(3×5)+(4×1)    (3×2)+(4×3)]
```

```
AB

=

[11   7]

[19  18]
```

---

## Note

In general,

```
AB ≠ BA
```

Matrix multiplication is **not commutative**.

---

# 9. Solving Matrix Equations

Unknown matrices can be determined using matrix operations.

---

## Example

If

```
X

+

[2   4]

[1   5]

=

[8   7]

[6   9]
```

Find

```
X
```

### Solution

Subtract the matrices.

```
X

=

[6   3]

[5   4]
```

---

# Properties of Matrix Operations

## Addition

- Commutative

```
A+B=B+A
```

- Associative

```
(A+B)+C=A+(B+C)
```

---

## Multiplication

- Associative

```
(AB)C=A(BC)
```

- Distributive

```
A(B+C)=AB+AC
```

---

## Identity Matrix

```
AI=IA=A
```

---

# Applications of Matrices

Matrices are used in

- Computer Graphics
- Robotics
- Artificial Intelligence
- Data Science
- Engineering
- Economics
- Cryptography
- Physics
- Network Analysis

---

# Solved Examples

## Example 1

### Question

Find the order of

```
[2   5   6]

[7   4   8]
```

### Solution

Rows

```
2
```

Columns

```
3
```

### Answer

```
2 × 3
```

---

## Example 2

### Question

Add

```
[3   2]

[5   1]
```

and

```
[4   6]

[2   3]
```

### Solution

```
[7   8]

[7   4]
```

### Answer

```
[7   8]

[7   4]
```

---

## Example 3

### Question

Multiply

```
2
```

with

```
[4   7]

[1   3]
```

### Solution

```
[8   14]

[2    6]
```

### Answer

```
[8   14]

[2    6]
```

---

## Example 4

### Question

Find

```
A−B
```

where

```
A

=

[9   6]

[4   7]
```

and

```
B

=

[2   5]

[1   3]
```

### Solution

```
[7   1]

[3   4]
```

### Answer

```
[7   1]

[3   4]
```

---

## Example 5

### Question

State whether matrix multiplication is commutative.

### Solution

In general,

```
AB ≠ BA
```

### Answer

```
No
```

---

# Common Mistakes

- Adding or subtracting matrices of **different orders**.
- Multiplying matrices without checking the compatibility condition (**columns of the first = rows of the second**).
- Assuming **AB = BA** for all matrices.
- Confusing the **order** of a matrix with the number of elements.
- Multiplying corresponding elements instead of using the row-by-column rule.
- Incorrectly identifying an identity matrix.
- Forgetting to multiply every element during scalar multiplication.
- Making arithmetic errors while performing matrix operations.

---

# Formula Sheet

| Formula / Rule                            | Description                     |
| ----------------------------------------- | ------------------------------- |
| **Order = m × n**                         | Matrix Order                    |
| **A + B = [aᵢⱼ + bᵢⱼ]**                   | Matrix Addition                 |
| **A − B = [aᵢⱼ − bᵢⱼ]**                   | Matrix Subtraction              |
| **kA = [k × aᵢⱼ]**                        | Scalar Multiplication           |
| **AB exists if columns of A = rows of B** | Matrix Multiplication Condition |
| **Order of AB = m × p**                   | Product Matrix Order            |
| **AI = IA = A**                           | Identity Matrix Property        |
| **AB ≠ BA (Generally)**                   | Non-Commutative Property        |

---

# Chapter Summary

- A **Matrix** is a rectangular arrangement of numbers in rows and columns.
- The **order** of a matrix is expressed as **m × n**, where **m** is the number of rows and **n** is the number of columns.
- Matrices of the same order can be **added** or **subtracted** by performing operations on corresponding elements.
- In **scalar multiplication**, every element of the matrix is multiplied by the given constant.
- Matrix multiplication is possible only when the **number of columns of the first matrix equals the number of rows of the second matrix**.
- Matrix multiplication is **associative** and **distributive**, but **not commutative** in general.
- The **Identity Matrix** acts like the number 1 in ordinary multiplication, satisfying **AI = IA = A**.
- Matrices have wide applications in computer science, engineering, artificial intelligence, data science, economics, and many other fields.

# ICSE Class 10 Mathematics

