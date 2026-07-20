# Chapter 2: Relations and Functions

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Relations and Functions

---

# Introduction

The concepts of **relations** and **functions** are fundamental in mathematics. A **relation** describes a connection between elements of two sets, while a **function** is a special type of relation in which every element of the first set is associated with exactly one element of the second set. These concepts are widely used in algebra, calculus, statistics, computer science, and many real-life applications.

---

# 1. Ordered Pair

An **ordered pair** consists of two elements written in a specific order.

### General Form

```
(a, b)
```

Where:

- **a** is the first element.
- **b** is the second element.

### Important Property

```
(a, b) ≠ (b, a)
```

unless

```
a = b
```

### Examples

```
(2, 5)
```

```
(A, B)
```

---

# 2. Cartesian Product of Sets

The **Cartesian product** of two sets **A** and **B** is the set of all ordered pairs whose first element belongs to **A** and second element belongs to **B**.

### Symbol

```
A × B
```

### Definition

```
A × B = {(a, b) : a ∈ A and b ∈ B}
```

---

## Example

Let

```
A = {1, 2}
```

```
B = {x, y}
```

Then,

```
A × B = {(1,x), (1,y), (2,x), (2,y)}
```

---

## Number of Elements

If

```
n(A) = m
```

and

```
n(B) = n
```

then

```
n(A × B) = mn
```

---

# 3. Relation

A **relation** from set **A** to set **B** is any subset of the Cartesian product **A × B**.

### Symbol

```
R ⊆ A × B
```

---

## Example

Let

```
A = {1,2,3}
```

```
B = {2,4,6}
```

A relation is

```
R = {(1,2), (2,4), (3,6)}
```

---

# 4. Domain, Co-domain, and Range

---

## Domain

The **domain** is the set of all first elements of the ordered pairs.

### Example

```
R = {(1,2), (2,4), (3,6)}
```

Domain

```
{1,2,3}
```

---

## Co-domain

The **co-domain** is the entire second set.

Example

```
B = {2,4,6,8}
```

Co-domain

```
{2,4,6,8}
```

---

## Range

The **range** is the set of actual second elements corresponding to the first elements.

Example

```
R = {(1,2), (2,4), (3,6)}
```

Range

```
{2,4,6}
```

---

## Difference Between Co-domain and Range

| Co-domain                   | Range                         |
| --------------------------- | ----------------------------- |
| Entire target set           | Actual output values          |
| May contain unused elements | Contains only values obtained |

---

# 5. Function

A **function** is a relation in which **every element of the domain is associated with exactly one element of the co-domain**.

### Symbol

```
f : A → B
```

---

## Conditions for a Function

- Every input has an output.
- Every input has only one output.
- Different inputs may have the same output.

---

## Example of a Function

```
A = {1,2,3}

B = {2,4,6}
```

```
f = {(1,2), (2,4), (3,6)}
```

This is a function.

---

## Not a Function

```
(2,5)

(2,8)
```

Input **2** has two outputs.

Hence, it is **not** a function.

---

# 6. Standard Real Functions

---

## (A) Identity Function

Maps every element to itself.

### Definition

```
f(x)=x
```

### Domain

```
R
```

### Range

```
R
```

---

## (B) Constant Function

Every input has the same output.

### Definition

```
f(x)=c
```

where **c** is constant.

### Example

```
f(x)=5
```

---

## (C) Polynomial Function

A function of the form

```
f(x)=a₀+a₁x+a₂x²+...
```

### Examples

```
x²+3x+2
```

```
2x³−5x+7
```

---

## (D) Rational Function

Ratio of two polynomial functions.

### General Form

```
P(x)/Q(x)
```

where

```
Q(x)≠0
```

### Example

```
(x+2)/(x−1)
```

---

## (E) Modulus Function

### Definition

```
f(x)=|x|
```

Meaning

```
|x|

=

x

if x≥0
```

```
|x|

=

−x

if x<0
```

---

### Domain

```
R
```

### Range

```
x≥0
```

---

## (F) Signum Function

### Definition

```
          1,   x>0

sgn(x)=   0,   x=0

         -1,   x<0
```

---

### Domain

```
R
```

### Range

```
{-1,0,1}
```

---

## (G) Greatest Integer Function

The greatest integer less than or equal to **x**.

### Symbol

```
⌊x⌋
```

---

### Examples

```
⌊3.7⌋=3
```

```
⌊−2.4⌋=−3
```

---

# 7. Graphs of Standard Functions

---

## Identity Function

```
y

|

|      /

|     /

|    /

|___/________ x
```

Straight line through the origin.

---

## Constant Function

```
y

|

|-----------

|

|____________ x
```

Horizontal line.

---

## Modulus Function

```
      |

     / \

    /   \

___/_____\____ x
```

V-shaped graph.

---

## Signum Function

```
1  •••••

0      •

-1 •••••
```

Three discrete levels.

---

## Greatest Integer Function

```
____

    |____

        |____
```

Step-shaped graph.

---

# 8. Operations on Functions

Let

```
f(x)

and

g(x)
```

be two functions.

---

## Sum

```
(f+g)(x)

=

f(x)+g(x)
```

---

## Difference

```
(f−g)(x)

=

f(x)−g(x)
```

---

## Product

```
(fg)(x)

=

f(x)g(x)
```

---

## Quotient

```
(f/g)(x)

=

f(x)/g(x)
```

provided

```
g(x)≠0
```

---

# 9. Domain of Composite Operations

The domain of

```
f/g
```

consists of all values where

- both functions are defined.
- denominator is not zero.

---

# 10. Important Notes

- Every function is a relation.
- Every relation is **not** a function.
- Range is always a subset of the co-domain.
- Cartesian products are generally **not commutative**.

```
A×B ≠ B×A
```

---

# Solved Examples

### Example 1

Find

```
A×B
```

if

```
A={1,2}

B={a,b}
```

**Solution**

```
A×B

=

{(1,a),(1,b),(2,a),(2,b)}
```

---

### Example 2

Find the number of elements in

```
A×B
```

if

```
n(A)=5

n(B)=4
```

**Solution**

```
5×4=20
```

**Answer:** **20**

---

### Example 3

Find the domain and range of

```
R={(1,2),(2,4),(3,6)}
```

**Solution**

Domain

```
{1,2,3}
```

Range

```
{2,4,6}
```

---

### Example 4

Is

```
{(1,2),(2,3),(2,4)}
```

a function?

**Solution**

No.

Input **2** has two outputs.

Hence, it is **not** a function.

---

### Example 5

If

```
f(x)=x²

g(x)=2x
```

find

```
(f+g)(x)
```

**Solution**

```
x²+2x
```

---

### Example 6

Evaluate

```
⌊−5.8⌋
```

**Solution**

The greatest integer less than or equal to

```
−5.8
```

is

```
−6
```

---

# Common Mistakes

- Confusing **domain** with **range**.
- Assuming every relation is a function.
- Forgetting that one input cannot have two different outputs in a function.
- Writing **A × B = B × A**, which is generally incorrect.
- Confusing the **modulus function** with the **greatest integer function**.
- Forgetting that the denominator cannot be zero while finding the quotient of functions.
- Assuming the range and co-domain are always the same.
- Incorrectly evaluating the greatest integer of negative numbers (e.g., ⌊−2.4⌋ = −3, not −2).

---

# Formula Sheet

### Cartesian Product

```
A×B={(a,b):a∈A,b∈B}
```

---

### Number of Ordered Pairs

```
n(A×B)=n(A)×n(B)
```

---

### Identity Function

```
f(x)=x
```

---

### Constant Function

```
f(x)=c
```

---

### Modulus Function

```
|x|

=

x

if x≥0
```

```
|x|

=

−x

if x<0
```

---

### Signum Function

```
sgn(x)

=

1

if x>0
```

```
=

0

if x=0
```

```
=

−1

if x<0
```

---

### Sum of Functions

```
(f+g)(x)=f(x)+g(x)
```

---

### Difference of Functions

```
(f−g)(x)=f(x)−g(x)
```

---

### Product of Functions

```
(fg)(x)=f(x)g(x)
```

---

### Quotient of Functions

```
(f/g)(x)=f(x)/g(x)
```

where

```
g(x)≠0
```

---

# Chapter Summary

- An **ordered pair** consists of two elements arranged in a specific order, and generally **(a, b) ≠ (b, a)**.
- The **Cartesian product** of two sets is the set of all possible ordered pairs formed from their elements.
- A **relation** is any subset of the Cartesian product of two sets.
- Every relation has a **domain**, **co-domain**, and **range**, with the range always being a subset of the co-domain.
- A **function** is a special relation in which every element of the domain has **exactly one** image in the co-domain.
- Important standard real functions include the **identity, constant, polynomial, rational, modulus, signum,** and **greatest integer functions**.
- Functions can be combined using **addition, subtraction, multiplication,** and **division**, provided the denominator is non-zero in quotient operations.
- Relations and functions are fundamental concepts that form the basis for higher mathematics, including calculus, coordinate geometry, and mathematical modelling.

# CBSE Class 11 Mathematics

