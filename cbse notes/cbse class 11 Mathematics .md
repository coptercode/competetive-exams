# CBSE Class 11 Mathematics

# Chapter 1: Sets

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Sets

---

# Introduction

The concept of **sets** forms the foundation of modern mathematics. A set is a well-defined collection of distinct objects, called **elements** or **members**. Sets are widely used in mathematics, science, computer science, statistics, and everyday life for organizing and analyzing information. This chapter introduces the representation of sets, different types of sets, operations on sets, Venn diagrams, complements, and De Morgan's Laws.

---

# 1. Sets

A **set** is a well-defined collection of distinct objects.

### Examples

- Set of vowels in the English alphabet

```
A = {a, e, i, o, u}
```

- Set of even natural numbers less than 10

```
B = {2, 4, 6, 8}
```

---

## Elements of a Set

The objects contained in a set are called **elements**.

Example:

```
A = {2, 4, 6}

4 ∈ A

7 ∉ A
```

Where:

- **∈** means "belongs to".
- **∉** means "does not belong to".

---

# 2. Representation of Sets

Sets can be represented in two forms.

---

## (A) Roster Form (Tabular Form)

In this method, all elements are listed within braces.

### Example

```
A = {1, 2, 3, 4, 5}
```

```
B = {Monday, Tuesday, Wednesday}
```

---

## (B) Set-Builder Form

In this method, elements are described using a property.

### General Form

```
A = {x : x satisfies a given property}
```

### Examples

Even numbers less than 10

```
A = {x : x is an even natural number and x < 10}
```

Natural numbers less than 6

```
B = {x : x ∈ N, x < 6}
```

---

## Conversion Between Forms

### Example

Roster Form

```
A = {2,4,6,8}
```

Set-Builder Form

```
A = {x : x is an even natural number less than 10}
```

---

# 3. Types of Sets

---

## (A) Empty (Null) Set

A set having no elements.

### Symbol

```
∅
```

Example

```
A = {x : x is a natural number less than 1}
```

Hence,

```
A = ∅
```

---

## (B) Singleton Set

A set containing only one element.

Example

```
A = {5}
```

---

## (C) Finite Set

A set having a limited number of elements.

Example

```
A = {1,2,3,4}
```

---

## (D) Infinite Set

A set having infinitely many elements.

Example

```
N = {1,2,3,4,...}
```

---

## (E) Equal Sets

Two sets are equal if they contain exactly the same elements.

Example

```
A = {1,2,3}

B = {3,2,1}

A = B
```

---

## (F) Equivalent Sets

Two sets are equivalent if they contain the same number of elements.

Example

```
A = {1,2,3}

B = {a,b,c}
```

Both contain three elements.

---

## (G) Subset

A set **A** is called a subset of **B** if every element of **A** belongs to **B**.

### Symbol

```
A ⊆ B
```

Example

```
A = {1,2}

B = {1,2,3,4}

A ⊆ B
```

---

## Proper Subset

If

```
A ⊆ B

and

A ≠ B
```

then

```
A ⊂ B
```

Example

```
{1,2} ⊂ {1,2,3}
```

---

## Universal Set

The set containing all elements under consideration.

### Symbol

```
U
```

Example

```
U = {1,2,3,4,5,6}
```

---

# 4. Cardinal Number of a Set

The number of elements in a set is called its **cardinal number**.

### Symbol

```
n(A)
```

Example

```
A = {2,4,6,8}

n(A)=4
```

---

# 5. Power Set

The **power set** of a set is the set of all subsets of the given set.

### Symbol

```
P(A)
```

Example

```
A={1,2}
```

Power Set

```
P(A)=
{
∅,
{1},
{2},
{1,2}
}
```

---

## Number of Subsets

If

```
n(A)=n
```

then

```
Number of subsets = 2ⁿ
```

Example

A set having 4 elements has

```
2⁴ =16 subsets
```

---

# 6. Venn Diagrams

A **Venn diagram** is a pictorial representation of sets using closed curves inside a rectangle representing the universal set.

---

## Single Set

```
+------------------+

      ( A )

+------------------+
```

---

## Two Sets

```
+---------------------------+

      ( A )
       \ /
        X
       / \
     ( B )

+---------------------------+
```

The common region represents

```
A ∩ B
```

---

# 7. Operations on Sets

---

## (A) Union of Sets

The **union** of two sets consists of all elements belonging to either set.

### Symbol

```
A ∪ B
```

Example

```
A={1,2,3}

B={3,4,5}

A∪B={1,2,3,4,5}
```

---

## Properties of Union

```
A∪B=B∪A
```

```
(A∪B)∪C=A∪(B∪C)
```

```
A∪A=A
```

```
A∪∅=A
```

---

## (B) Intersection of Sets

The **intersection** consists of common elements.

### Symbol

```
A ∩ B
```

Example

```
A={1,2,3}

B={3,4,5}

A∩B={3}
```

---

## Properties

```
A∩B=B∩A
```

```
(A∩B)∩C=A∩(B∩C)
```

```
A∩A=A
```

```
A∩∅=∅
```

---

## (C) Difference of Sets

The difference

```
A−B
```

contains elements belonging to **A** but not to **B**.

Example

```
A={1,2,3,4}

B={3,4,5}

A−B={1,2}
```

Similarly,

```
B−A={5}
```

---

# 8. Complement of a Set

The complement of a set consists of elements in the universal set that do not belong to the given set.

### Symbol

```
A'
```

or

```
Aᶜ
```

Example

```
U={1,2,3,4,5,6}

A={1,2,3}
```

Then

```
A'={4,5,6}
```

---

## Properties

```
(A')'=A
```

```
U'=∅
```

```
∅'=U
```

```
A∪A'=U
```

```
A∩A'=∅
```

---

# 9. De Morgan's Laws

These laws relate complements with union and intersection.

---

## First Law

```
(A∪B)'=A'∩B'
```

---

## Second Law

```
(A∩B)'=A'∪B'
```

---

## Verification by Venn Diagram

These identities can be verified by shading appropriate regions in Venn diagrams.

---

# 10. Important Properties of Sets

## Commutative Laws

```
A∪B=B∪A
```

```
A∩B=B∩A
```

---

## Associative Laws

```
(A∪B)∪C=A∪(B∪C)
```

```
(A∩B)∩C=A∩(B∩C)
```

---

## Distributive Laws

```
A∪(B∩C)

=

(A∪B)

∩

(A∪C)
```

```
A∩(B∪C)

=

(A∩B)

∪

(A∩C)
```

---

## Identity Laws

```
A∪∅=A
```

```
A∩U=A
```

---

## Domination Laws

```
A∪U=U
```

```
A∩∅=∅
```

---

## Idempotent Laws

```
A∪A=A
```

```
A∩A=A
```

---

# Solved Examples

### Example 1

Write the set of prime numbers less than 10 in roster form.

**Solution**

Prime numbers less than 10 are

```
{2,3,5,7}
```

---

### Example 2

Convert

```
{x : x is a multiple of 5 less than 25}
```

into roster form.

**Solution**

```
{5,10,15,20}
```

---

### Example 3

If

```
A={1,2,3}

B={3,4,5}
```

find

```
A∪B
```

**Solution**

```
A∪B={1,2,3,4,5}
```

---

### Example 4

Find

```
A∩B
```

for

```
A={2,4,6}

B={4,5,6,7}
```

**Solution**

Common elements are

```
{4,6}
```

---

### Example 5

If

```
U={1,2,3,4,5,6}

A={2,3,5}
```

find

```
A'
```

**Solution**

```
A'={1,4,6}
```

---

### Example 6

A set contains five elements.

Find the number of subsets.

**Solution**

Using

```
2ⁿ
```

where

```
n=5
```

```
2⁵=32
```

**Answer:** **32 subsets**

---

# Common Mistakes

- Confusing **∈ (belongs to)** with **⊆ (subset of)**.
- Assuming every subset is a proper subset.
- Forgetting that the **empty set is a subset of every set**.
- Confusing **union** with **intersection**.
- Writing duplicate elements in a set.
- Forgetting that the order of elements in a set does not matter.
- Using the wrong universal set while finding complements.
- Applying De Morgan's Laws incorrectly.

---

# Formula Sheet

### Number of Subsets

```
2ⁿ
```

---

### Union

```
A∪B
```

---

### Intersection

```
A∩B
```

---

### Difference

```
A−B
```

---

### Complement

```
A'
```

or

```
Aᶜ
```

---

### De Morgan's First Law

```
(A∪B)'=A'∩B'
```

---

### De Morgan's Second Law

```
(A∩B)'=A'∪B'
```

---

### Cardinal Number

```
n(A)
```

---

### Power Set

```
P(A)
```

---

# Chapter Summary

- A **set** is a well-defined collection of distinct objects called elements.
- Sets can be represented using the **roster form** and the **set-builder form**.
- Common types of sets include **empty, singleton, finite, infinite, equal, equivalent, subsets,** and the **universal set**.
- The **power set** contains all subsets of a set, and a set with **n** elements has **2ⁿ** subsets.
- **Venn diagrams** provide a visual representation of relationships between sets.
- The basic operations on sets are **union, intersection, difference,** and **complement**.
- **De Morgan's Laws** relate complements with unions and intersections and are fundamental in set theory and logic.
- Understanding sets and their operations forms the basis for advanced topics in mathematics, including relations, functions, probability, and statistics.

# CBSE Class 11 Mathematics

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

# Chapter 3: Trigonometric Functions

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Trigonometric Functions

---

# Introduction

**Trigonometry** is the branch of mathematics that studies the relationship between the angles and sides of triangles. In Class 11, trigonometric functions are extended from acute angles to angles of any magnitude using the unit circle. This chapter covers the measurement of angles in degrees and radians, trigonometric functions, their graphs, identities, compound and multiple angles, sum-to-product transformations, and solutions of trigonometric equations.

---

# 1. Measurement of Angles

Angles can be measured in two units:

- Degree (°)
- Radian (rad)

---

## Degree Measure

A complete revolution is divided into **360 equal parts**.

```
1 Revolution = 360°
```

---

## Radian Measure

A **radian** is the angle subtended at the centre of a circle by an arc whose length is equal to the radius of the circle.

```
1 Revolution = 2π radians
```

---

## Conversion Between Degrees and Radians

### Degrees to Radians

```
Radians = Degrees × π/180
```

### Radians to Degrees

```
Degrees = Radians × 180/π
```

---

## Important Conversions

| Degrees | Radians |
| ------: | ------: |
|      0° |       0 |
|     30° |     π/6 |
|     45° |     π/4 |
|     60° |     π/3 |
|     90° |     π/2 |
|    180° |       π |
|    270° |    3π/2 |
|    360° |      2π |

---

# 2. Trigonometric Functions

For an angle **θ**,

```
sin θ = Perpendicular / Hypotenuse
```

```
cos θ = Base / Hypotenuse
```

```
tan θ = Perpendicular / Base
```

```
cot θ = Base / Perpendicular
```

```
sec θ = Hypotenuse / Base
```

```
cosec θ = Hypotenuse / Perpendicular
```

---

# 3. Trigonometric Functions on the Unit Circle

For a point

```
P(x,y)
```

on the unit circle,

```
x = cos θ
```

```
y = sin θ
```

Hence,

```
tan θ = y/x
```

---

# 4. Signs of Trigonometric Functions

The sign of trigonometric functions depends on the quadrant.

---

## ASTC Rule

```
           II        I

          (+)sin   All +

           III      IV

      (+)tan      (+)cos
```

---

## Sign Table

| Quadrant | Positive Functions |
| -------- | ------------------ |
| I        | All                |
| II       | sin, cosec         |
| III      | tan, cot           |
| IV       | cos, sec           |

---

# 5. Domain and Range of Trigonometric Functions

| Function | Domain           | Range            |
| -------- | ---------------- | ---------------- |
| sin x    | All real numbers | [-1,1]           |
| cos x    | All real numbers | [-1,1]           |
| tan x    | x ≠ (2n+1)π/2    | All real numbers |
| cot x    | x ≠ nπ           | All real numbers |
| sec x    | x ≠ (2n+1)π/2    | (-∞,-1] ∪ [1,∞)  |
| cosec x  | x ≠ nπ           | (-∞,-1] ∪ [1,∞)  |

where

```
n ∈ Z
```

---

# 6. Graphs of Trigonometric Functions

---

## Graph of sin x

```
y

1      /¯\      /¯\
      /   \    /   \
0 ___/     \__/     \____ x
     0     π   2π
```

---

## Graph of cos x

```
y

1  ¯\______/¯\______
0      \__/      \__
     0    π     2π
```

---

## Graph of tan x

```
y

     /
    /
---/----|----/----
  /      |   /
 /       |  /
```

Vertical asymptotes at

```
(2n+1)π/2
```

---

# 7. Fundamental Trigonometric Identities

### Identity 1

```
sin²θ + cos²θ = 1
```

---

### Identity 2

```
1 + tan²θ = sec²θ
```

---

### Identity 3

```
1 + cot²θ = cosec²θ
```

---

# 8. Trigonometric Identities for Compound Angles

---

## Sine of Sum

```
sin(A+B)

=

sinA cosB

+

cosA sinB
```

---

## Sine of Difference

```
sin(A−B)

=

sinA cosB

−

cosA sinB
```

---

## Cosine of Sum

```
cos(A+B)

=

cosA cosB

−

sinA sinB
```

---

## Cosine of Difference

```
cos(A−B)

=

cosA cosB

+

sinA sinB
```

---

## Tangent of Sum

```
tan(A+B)

=

(tanA+tanB)

/

(1−tanA tanB)
```

---

## Tangent of Difference

```
tan(A−B)

=

(tanA−tanB)

/

(1+tanA tanB)
```

---

# 9. Multiple Angle Formulae

---

## Double Angle Formulae

### Sine

```
sin2A

=

2sinA cosA
```

---

### Cosine

```
cos2A

=

cos²A−sin²A
```

Also,

```
cos2A

=

2cos²A−1
```

```
cos2A

=

1−2sin²A
```

---

### Tangent

```
tan2A

=

2tanA

/

(1−tan²A)
```

---

## Triple Angle Formulae

### Sine

```
sin3A

=

3sinA−4sin³A
```

---

### Cosine

```
cos3A

=

4cos³A−3cosA
```

---

### Tangent

```
tan3A

=

(3tanA−tan³A)

/

(1−3tan²A)
```

---

# 10. Sum-to-Product Formulae

---

### Sine + Sine

```
sinA+sinB

=

2sin[(A+B)/2]

cos[(A−B)/2]
```

---

### Sine − Sine

```
sinA−sinB

=

2cos[(A+B)/2]

sin[(A−B)/2]
```

---

### Cosine + Cosine

```
cosA+cosB

=

2cos[(A+B)/2]

cos[(A−B)/2]
```

---

### Cosine − Cosine

```
cosA−cosB

=

−2sin[(A+B)/2]

sin[(A−B)/2]
```

---

# 11. Principal Values

The **principal value** is the value of the inverse trigonometric function lying in its principal branch.

For Class 11 trigonometric equations, principal values are often used while finding general solutions.

---

# 12. General Solutions of Standard Trigonometric Equations

---

## For

```
sinθ = sinα
```

General solution

```
θ = nπ + (−1)ⁿα
```

---

## For

```
cosθ = cosα
```

General solution

```
θ = 2nπ ± α
```

---

## For

```
tanθ = tanα
```

General solution

```
θ = nπ + α
```

where

```
n ∈ Z
```

---

# 13. Principal Solutions

Principal solutions are the solutions lying within one complete revolution.

Usually,

```
0 ≤ θ < 2π
```

or

```
0° ≤ θ < 360°
```

---

# Solved Examples

### Example 1

Convert

```
150°
```

into radians.

**Solution**

Using

```
Radians = Degrees × π/180
```

```
150 × π/180

=

5π/6
```

**Answer:** **5π/6**

---

### Example 2

Convert

```
7π/6
```

into degrees.

**Solution**

```
7π/6 × 180/π

=210°
```

---

### Example 3

Evaluate

```
sin²45° + cos²45°
```

**Solution**

Using

```
sin²θ+cos²θ=1
```

Answer

```
1
```

---

### Example 4

Find

```
sin75°
```

**Solution**

```
sin(45°+30°)

=

sin45°cos30°

+

cos45°sin30°
```

```
=

√2/2 × √3/2

+

√2/2 × 1/2
```

```
=

(√6+√2)/4
```

---

### Example 5

Solve

```
tanθ=1
```

**Solution**

Principal solution

```
45°
```

General solution

```
θ=nπ+π/4
```

---

### Example 6

Find

```
cos60°
```

using the double angle formula.

**Solution**

Using

```
cos2A

=

2cos²A−1
```

Take

```
A=30°
```

```
cos60°

=

2(√3/2)²−1

=

2×3/4−1

=

1/2
```

---

# Common Mistakes

- Mixing **degrees** and **radians** in calculations.
- Forgetting the signs of trigonometric functions in different quadrants.
- Using incorrect compound angle identities.
- Confusing **double-angle** and **triple-angle** formulae.
- Forgetting the restrictions in the domains of **tan x**, **cot x**, **sec x**, and **cosec x**.
- Writing only the principal solution instead of the general solution.
- Applying **sin(A + B)** and **cos(A + B)** identities interchangeably.
- Incorrectly determining the principal values of inverse trigonometric functions.

---

# Formula Sheet

### Degree–Radian Conversion

```
Radians = Degrees × π/180
```

```
Degrees = Radians × 180/π
```

---

### Fundamental Identities

```
sin²θ + cos²θ = 1
```

```
1 + tan²θ = sec²θ
```

```
1 + cot²θ = cosec²θ
```

---

### Compound Angles

```
sin(A±B)=sinAcosB±cosAsinB
```

```
cos(A±B)=cosAcosB∓sinAsinB
```

```
tan(A±B)

=

(tanA±tanB)

/

(1∓tanAtanB)
```

---

### Double Angles

```
sin2A=2sinAcosA
```

```
cos2A=2cos²A−1
```

```
cos2A=1−2sin²A
```

```
tan2A

=

2tanA

/

(1−tan²A)
```

---

### Triple Angles

```
sin3A=3sinA−4sin³A
```

```
cos3A=4cos³A−3cosA
```

```
tan3A

=

(3tanA−tan³A)

/

(1−3tan²A)
```

---

### General Solutions

```
sinθ=sinα

⇒

θ=nπ+(−1)ⁿα
```

```
cosθ=cosα

⇒

θ=2nπ±α
```

```
tanθ=tanα

⇒

θ=nπ+α
```

---

# Chapter Summary

- Angles can be measured in **degrees** or **radians**, with **π radians = 180°**.
- The six trigonometric functions are defined using the **unit circle**, extending their applicability to all real angles.
- The **ASTC rule** helps determine the signs of trigonometric functions in different quadrants.
- Each trigonometric function has a specific **domain, range,** and characteristic graph.
- Important identities include the **Pythagorean identities**, **compound angle**, **double-angle**, **triple-angle**, and **sum-to-product** formulae.
- **General solutions** describe all possible solutions of trigonometric equations, while **principal solutions** are restricted to one complete revolution.
- Mastery of trigonometric identities and equations is essential for higher studies in calculus, coordinate geometry, physics, and engineering.

# CBSE Class 11 Mathematics

# Chapter 4: Complex Numbers and Quadratic Equations

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Complex Numbers and Quadratic Equations

---

# Introduction

The set of **real numbers** is not sufficient to solve all algebraic equations. For example, the equation

```
x² + 1 = 0
```

has no real solution because no real number has a square equal to **−1**. To overcome this limitation, mathematicians introduced **complex numbers** by defining the imaginary unit **i**, where

```
i² = −1
```

Complex numbers are widely used in mathematics, physics, engineering, electronics, signal processing, and quantum mechanics. This chapter introduces complex numbers, their algebraic operations, modulus, conjugate, Argand plane, polar form, and the solution of quadratic equations with complex roots.

---

# 1. Need for Complex Numbers

Consider the equation

```
x² + 1 = 0
```

Then,

```
x² = −1
```

Since no real number satisfies this equation, we define the imaginary unit:

```
i = √−1
```

Therefore,

```
i² = −1
```

Using **i**, the solutions become

```
x = ±i
```

---

# 2. Imaginary Unit

The **imaginary unit** is denoted by

```
i
```

where

```
i² = −1
```

---

## Powers of i

| Power | Value |
| ----: | :---: |
|    i¹ |   i   |
|    i² |  −1   |
|    i³ |  −i   |
|    i⁴ |   1   |
|    i⁵ |   i   |

The powers repeat after every four terms.

---

# 3. Complex Numbers

A **complex number** is a number of the form

```
z = a + ib
```

where

- **a** = Real part
- **b** = Imaginary part

### Notation

```
Re(z) = a
```

```
Im(z) = b
```

---

## Examples

```
3 + 2i
```

```
−5 + i
```

```
7 − 4i
```

```
2
```

(Real number)

```
5i
```

(Pure imaginary number)

---

# 4. Types of Complex Numbers

---

## (A) Purely Real Number

Imaginary part is zero.

Example

```
5 + 0i
```

---

## (B) Purely Imaginary Number

Real part is zero.

Example

```
4i
```

---

## (C) General Complex Number

Both real and imaginary parts are present.

Example

```
6 − 3i
```

---

# 5. Equality of Complex Numbers

Two complex numbers are equal if their corresponding real and imaginary parts are equal.

If

```
a + ib = c + id
```

then

```
a = c
```

and

```
b = d
```

---

# 6. Algebraic Operations on Complex Numbers

Let

```
z₁ = a + ib
```

```
z₂ = c + id
```

---

## (A) Addition

```
z₁ + z₂

=

(a + c)

+

i(b + d)
```

---

### Example

```
(3 + 2i)

+

(4 + 5i)

=

7 + 7i
```

---

## (B) Subtraction

```
z₁ − z₂

=

(a − c)

+

i(b − d)
```

---

### Example

```
(6 + 4i)

−

(2 + i)

=

4 + 3i
```

---

## (C) Multiplication

Multiply as ordinary algebra and use

```
i² = −1
```

### Formula

```
(a + ib)(c + id)

=

(ac − bd)

+

i(ad + bc)
```

---

### Example

```
(2 + 3i)

(1 + 4i)

=

2 + 8i + 3i + 12i²

=

2 + 11i −12

=

−10 +11i
```

---

## (D) Division

Multiply numerator and denominator by the conjugate of the denominator.

### Formula

```
(a + ib)

/

(c + id)

=

[(a + ib)(c − id)]

/

(c² + d²)
```

---

### Example

```
(3 + i)

/

(1 − i)
```

Multiply numerator and denominator by

```
1 + i
```

```
=

(3 + i)(1 + i)

/

2
```

```
=

(2 + 4i)

/

2
```

```
=

1 + 2i
```

---

# 7. Conjugate of a Complex Number

The **conjugate** of

```
a + ib
```

is

```
a − ib
```

### Symbol

```
z̄
```

---

## Examples

```
5 + 3i

→

5 − 3i
```

```
−2 − i

→

−2 + i
```

---

## Properties of Conjugates

```
z × z̄

=

a² + b²
```

---

```
z + z̄

=

2a
```

---

```
z − z̄

=

2ib
```

---

# 8. Modulus of a Complex Number

The **modulus** represents the distance of the complex number from the origin in the Argand plane.

### Symbol

```
|z|
```

---

### Formula

For

```
z = a + ib
```

```
|z|

=

√(a²+b²)
```

---

### Example

Find the modulus of

```
3 + 4i
```

```
|z|

=

√(9+16)

=

5
```

---

## Properties

```
|z| ≥ 0
```

---

```
|z|

=

|z̄|
```

---

```
|z₁z₂|

=

|z₁||z₂|
```

---

# 9. Argand Plane

The **Argand Plane** is used to represent complex numbers graphically.

---

## Axes

- Horizontal axis → Real axis
- Vertical axis → Imaginary axis

---

### Diagram

```
Imaginary Axis

↑

|

|       • (a,b)

|

------------------------→ Real Axis
```

The point

```
(a,b)
```

represents

```
a + ib
```

---

# 10. Polar Form of a Complex Number

A complex number can be represented using its modulus and argument.

If

```
z = a + ib
```

then

```
z

=

r(cosθ + isinθ)
```

where

```
r = |z|
```

and

```
θ = argument of z
```

---

## Argument

The **argument** is the angle made by the line joining the point to the origin with the positive real axis.

### Symbol

```
arg(z)
```

---

# 11. Quadratic Equations

A quadratic equation is an equation of degree 2.

### General Form

```
ax² + bx + c = 0
```

where

```
a ≠ 0
```

---

# 12. Nature of Roots

The nature of roots depends on the **discriminant**.

### Formula

```
D = b² − 4ac
```

---

## Case 1

```
D > 0
```

Two distinct real roots.

---

## Case 2

```
D = 0
```

Equal real roots.

---

## Case 3

```
D < 0
```

Complex conjugate roots.

---

# 13. Quadratic Formula

The roots of

```
ax² + bx + c = 0
```

are

```
x

=

[−b ± √(b²−4ac)]

/

2a
```

---

## Complex Roots

If

```
D < 0
```

then

```
√−k

=

i√k
```

---

### Example

Solve

```
x² + 4x + 5 = 0
```

Using

```
D = 16 −20

=−4
```

```
x

=

(−4 ±2i)

/

2

=

−2 ± i
```

---

# Solved Examples

### Example 1

Simplify

```
i⁷
```

**Solution**

Since powers repeat every 4,

```
7 ÷4

remainder 3
```

Therefore,

```
i⁷=i³

=−i
```

---

### Example 2

Add

```
(5+2i)

+

(3−4i)
```

**Solution**

```
8−2i
```

---

### Example 3

Find the conjugate and modulus of

```
6−8i
```

**Solution**

Conjugate

```
6+8i
```

Modulus

```
√(36+64)

=10
```

---

### Example 4

Represent

```
3+2i
```

on the Argand plane.

**Solution**

Plot the point

```
(3,2)
```

where **3** is on the real axis and **2** is on the imaginary axis.

---

### Example 5

Solve

```
x²+2x+5=0
```

**Solution**

```
D=4−20

=−16
```

```
x

=

−1±2i
```

---

### Example 6

Find the modulus of

```
−5+12i
```

**Solution**

```
|z|

=

√(25+144)

=

13
```

---

# Common Mistakes

- Forgetting that **i² = −1**, not **1**.
- Incorrectly multiplying complex numbers without replacing **i²** by **−1**.
- Confusing the **conjugate** with the **negative** of a complex number.
- Forgetting to multiply both numerator and denominator by the conjugate while dividing complex numbers.
- Using the wrong sign while calculating the discriminant.
- Assuming all quadratic equations have real roots.
- Confusing the **modulus** with the **argument** of a complex number.
- Plotting the imaginary part on the horizontal axis instead of the vertical axis in the Argand plane.

---

# Formula Sheet

### Imaginary Unit

```
i² = −1
```

---

### Complex Number

```
z=a+ib
```

---

### Addition

```
(a+ib)+(c+id)

=(a+c)+i(b+d)
```

---

### Multiplication

```
(a+ib)(c+id)

=(ac−bd)+i(ad+bc)
```

---

### Conjugate

```
z̄=a−ib
```

---

### Modulus

```
|z|

=

√(a²+b²)
```

---

### Polar Form

```
z

=

r(cosθ+isinθ)
```

---

### Discriminant

```
D=b²−4ac
```

---

### Quadratic Formula

```
x

=

[−b±√(b²−4ac)]

/

2a
```

---

# Chapter Summary

- The **imaginary unit** **i**, defined by **i² = −1**, extends the real number system to the **complex number system**.
- A **complex number** is written as **a + ib**, where **a** is the real part and **b** is the imaginary part.
- Complex numbers can be **added, subtracted, multiplied,** and **divided** using algebraic rules and the identity **i² = −1**.
- The **conjugate** of a complex number changes the sign of its imaginary part, while the **modulus** gives its distance from the origin in the **Argand plane**.
- Complex numbers can also be represented in **polar form** using their modulus and argument.
- The **discriminant** determines the nature of the roots of a quadratic equation.
- When the discriminant is negative, the quadratic equation has **complex conjugate roots**.
- Complex numbers provide a complete system for solving all quadratic equations and are widely used in higher mathematics, physics, and engineering.

# CBSE Class 11 Mathematics

# Chapter 5: Linear Inequalities

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Linear Inequalities

---

# Introduction

An **inequality** compares two algebraic expressions using symbols such as **<, >, ≤,** and **≥**. A **linear inequality** is an inequality involving a linear expression in one or more variables. Linear inequalities are widely used in economics, engineering, business, optimization, and resource allocation problems. This chapter deals with solving linear inequalities in one and two variables, graphical representation, feasible regions, and applications through word problems.

---

# 1. Inequalities

An **inequality** is a mathematical statement showing that two quantities are not necessarily equal.

### Symbols Used

| Symbol | Meaning                  |
| ------ | ------------------------ |
| <      | Less than                |
| >      | Greater than             |
| ≤      | Less than or equal to    |
| ≥      | Greater than or equal to |
| ≠      | Not equal to             |

### Examples

```
x > 5
```

```
2x + 3 ≤ 7
```

```
3y - 4 > 8
```

---

# 2. Linear Inequality

A **linear inequality** is an inequality involving a linear expression.

### General Form

```
ax + b > 0
```

or

```
ax + b ≥ 0
```

where

```
a ≠ 0
```

---

## Examples

```
3x + 2 > 8
```

```
5x - 7 ≤ 18
```

```
2x + 9 ≥ 13
```

---

# 3. Rules for Solving Linear Inequalities

The rules are similar to solving linear equations with one important difference.

---

## Rule 1

Adding or subtracting the same number from both sides does **not** change the inequality.

Example

```
x + 4 > 8
```

Subtract 4

```
x > 4
```

---

## Rule 2

Multiplying or dividing both sides by a **positive number** does not change the inequality.

Example

```
2x > 8
```

Divide by 2

```
x > 4
```

---

## Rule 3

Multiplying or dividing both sides by a **negative number** reverses the inequality sign.

Example

```
−2x > 8
```

Divide by −2

```
x < −4
```

---

# 4. Solution of Linear Inequalities in One Variable

---

## Example 1

Solve

```
3x + 5 > 14
```

### Solution

```
3x > 9
```

```
x > 3
```

---

## Example 2

Solve

```
4x − 7 ≤ 13
```

### Solution

```
4x ≤ 20
```

```
x ≤ 5
```

---

## Example 3

Solve

```
−3x + 6 ≥ 0
```

### Solution

```
−3x ≥ −6
```

Divide by −3 and reverse the sign.

```
x ≤ 2
```

---

# 5. Representation on the Number Line

Solutions of linear inequalities are represented graphically on a number line.

---

## Open Circle

Used when the endpoint is **not included**.

Example

```
x > 2

←────────○════════════→
         2
```

---

## Closed Circle

Used when the endpoint is **included**.

Example

```
x ≥ 2

←────────●════════════→
         2
```

---

## Example

```
x < 5

←════════○────────────→
         5
```

---

# 6. Linear Inequalities in Two Variables

A linear inequality in two variables is of the form

```
ax + by > c
```

or

```
ax + by ≥ c
```

where

```
a and b are not both zero.
```

---

## Examples

```
2x + y > 5
```

```
x − 3y ≤ 9
```

```
4x + 2y ≥ 8
```

---

# 7. Graphical Representation of Linear Inequalities

### Step 1

Replace the inequality by an equation.

Example

```
x + y = 4
```

Draw the corresponding straight line.

---

### Step 2

Choose a test point.

Usually

```
(0,0)
```

---

### Step 3

Substitute the test point.

If the inequality is satisfied,

shade the region containing the test point.

Otherwise,

shade the opposite region.

---

## Solid and Dotted Lines

### Solid Line

Used for

```
≤

or

≥
```

because the boundary is included.

---

### Dotted Line

Used for

```
<

or

>
```

because the boundary is excluded.

---

# 8. System of Linear Inequalities

A **system of linear inequalities** consists of two or more inequalities considered together.

Example

```
x ≥ 0
```

```
y ≥ 0
```

```
x + y ≤ 6
```

---

# 9. Feasible Region

The **feasible region** is the common region satisfying **all** inequalities simultaneously.

---

## Illustration

```
y

↑

|\
| \
|  \
|   \
|____\________→ x
```

The shaded triangular region represents the feasible region.

---

# 10. Word Problems

Many practical situations can be expressed using linear inequalities.

---

## Example

A student should study **at least 4 hours** daily.

Let

```
x
```

be the number of study hours.

Then

```
x ≥ 4
```

---

## Example

A vehicle can carry **not more than 600 kg**.

Let

```
w
```

be the load.

Then

```
w ≤ 600
```

---

# 11. Applications of Linear Inequalities

Linear inequalities are used in:

- Production planning
- Resource allocation
- Budget management
- Business optimization
- Transportation
- Engineering design
- Economics
- Linear programming

---

# Solved Examples

### Example 1

Solve

```
5x + 10 > 25
```

**Solution**

```
5x > 15
```

```
x > 3
```

---

### Example 2

Solve

```
2x − 7 ≤ 9
```

**Solution**

```
2x ≤ 16
```

```
x ≤ 8
```

---

### Example 3

Solve

```
−4x + 12 > 0
```

**Solution**

```
−4x > −12
```

Divide by −4.

Reverse the sign.

```
x < 3
```

---

### Example 4

Represent

```
x ≥ −2
```

on the number line.

**Solution**

```
←──────●════════════→
      −2
```

The closed circle indicates that **−2 is included**.

---

### Example 5

Represent

```
x + y > 5
```

graphically.

**Solution**

1. Draw the line

```
x + y = 5
```

2. Since

```
(0,0)
```

does not satisfy the inequality,

shade the region **above** the line.

Use a **dotted boundary** because the line is not included.

---

### Example 6

A school bus can carry **at most 40 students**.

Let

```
x
```

be the number of students.

Write the inequality.

**Solution**

```
x ≤ 40
```

---

# Common Mistakes

- Forgetting to **reverse the inequality sign** when multiplying or dividing by a negative number.
- Using a **solid line** instead of a **dotted line** for strict inequalities.
- Choosing the wrong region while shading the graph.
- Ignoring the boundary conditions for **≤** and **≥**.
- Making arithmetic errors while solving inequalities.
- Confusing **equations** with **inequalities**.
- Forgetting to check whether the chosen test point satisfies the inequality.
- Assuming every point on the boundary belongs to the solution region.

---

# Formula Sheet

### General Linear Inequality

```
ax + b > 0
```

or

```
ax + b ≥ 0
```

---

### Linear Inequality in Two Variables

```
ax + by > c
```

```
ax + by ≥ c
```

---

### Important Rule

If both sides are multiplied or divided by a **negative number**,

```
>

becomes

<
```

and

```
≥

becomes

≤
```

---

### Number Line Representation

Open circle

```
<
```

```
>
```

Closed circle

```
≤
```

```
≥
```

---

### Graphical Representation

- Solid line → Boundary included (**≤, ≥**)
- Dotted line → Boundary excluded (**<, >**)

---

### Feasible Region

The common region satisfying **all** given inequalities.

---

# Chapter Summary

- An **inequality** compares two expressions using the symbols **<, >, ≤,** and **≥**.
- A **linear inequality** contains a linear expression in one or more variables.
- While solving inequalities, the inequality sign **reverses** when multiplying or dividing by a negative number.
- Solutions of inequalities in one variable are represented on a **number line** using open or closed circles.
- Linear inequalities in two variables are represented graphically by dividing the plane into two half-planes.
- The **feasible region** is the common region satisfying all the given inequalities in a system.
- Linear inequalities are extensively used in optimization, economics, business planning, engineering, and operations research.
- Understanding graphical solutions is essential for advanced topics such as **Linear Programming** in higher classes.

# CBSE Class 11 Mathematics

# Chapter 6: Permutations and Combinations

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Permutations and Combinations

---

# Introduction

Many real-life situations involve arranging or selecting objects. For example, arranging books on a shelf, assigning seats to students, selecting a committee, or creating passwords. The branch of mathematics that deals with **counting arrangements and selections** is called **Combinatorics**.

This chapter introduces the **Fundamental Principle of Counting**, **factorials**, **permutations**, and **combinations**, along with their formulas and applications to practical problems involving arrangements and selections.

---

# 1. Fundamental Principle of Counting

The Fundamental Principle of Counting helps determine the total number of possible outcomes of an event.

There are two basic counting principles:

- Multiplication Rule
- Addition Rule

---

## (A) Multiplication Rule

If one operation can be performed in **m** ways and another independent operation in **n** ways, then both operations together can be performed in

```
m × n
```

ways.

### Example

A shirt can be chosen in **4** ways and a pair of trousers in **3** ways.

Total outfits

```
4 × 3 = 12
```

---

## (B) Addition Rule

If one event can occur in **m** ways and another mutually exclusive event in **n** ways, then the total number of ways is

```
m + n
```

### Example

A student may choose either one of **5** science books or one of **4** mathematics books.

Total choices

```
5 + 4 = 9
```

---

# 2. Factorial Notation

The factorial of a positive integer **n** is the product of all positive integers from **1** to **n**.

### Definition

```
n! = n(n−1)(n−2)...3×2×1
```

---

## Examples

```
1! = 1
```

```
2! = 2
```

```
3! = 6
```

```
4! = 24
```

```
5! = 120
```

---

## Zero Factorial

By definition,

```
0! = 1
```

---

## Important Factorial Properties

```
n! = n(n−1)!
```

```
(n+1)! = (n+1)n!
```

```
n! / (n−r)!
=
n(n−1)...(n−r+1)
```

---

# 3. Permutations

A **permutation** is an **arrangement** of objects where the **order is important**.

---

## Permutation Formula

The number of permutations of **r** objects chosen from **n** distinct objects is

```
ⁿPᵣ = n! / (n−r)!
```

where

```
n ≥ r
```

---

## Special Cases

### Arrangement of All Objects

```
ⁿPₙ = n!
```

---

### One Object

```
ⁿP₁ = n
```

---

# 4. Permutations with Repetition

If repetition of objects is allowed, then the number of arrangements of **r** objects selected from **n** distinct objects is

```
nʳ
```

### Example

Number of 3-digit passwords using digits 0–9 (repetition allowed)

```
10³ = 1000
```

---

# 5. Circular Permutations

When objects are arranged in a circle, rotations are considered identical.

### Formula

For **n** distinct objects,

```
(n−1)!
```

arrangements are possible.

### Example

Arrange 5 persons around a round table.

```
(5−1)!

= 4!

= 24
```

---

# 6. Permutations of Identical Objects

If among **n** objects,

- **p** are identical,
- **q** are identical,
- **r** are identical,

then the number of distinct arrangements is

```
n!

/

(p!q!r!...)
```

### Example

Arrange the letters of

```
LEVEL
```

Total letters = 5

Repeated letters

```
L = 2

E = 2

V = 1
```

Number of arrangements

```
5!

/

(2!2!)

=30
```

---

# 7. Combinations

A **combination** is a **selection** of objects where the **order does not matter**.

---

## Combination Formula

The number of combinations of **r** objects selected from **n** distinct objects is

```
ⁿCᵣ

=

n!

/

r!(n−r)!
```

---

## Relationship Between Permutations and Combinations

```
ⁿPᵣ

=

ⁿCᵣ × r!
```

---

# 8. Properties of Combinations

---

## Property 1

```
ⁿC₀ = 1
```

---

## Property 2

```
ⁿCₙ = 1
```

---

## Property 3

```
ⁿC₁ = n
```

---

## Property 4 (Symmetry)

```
ⁿCᵣ

=

ⁿC₍ₙ₋ᵣ₎
```

---

## Property 5 (Pascal's Identity)

```
ⁿCᵣ

+

ⁿC₍ᵣ₋₁₎

=

ⁿ⁺¹Cᵣ
```

---

# 9. Difference Between Permutations and Combinations

| Permutations             | Combinations                 |
| ------------------------ | ---------------------------- |
| Order matters            | Order does not matter        |
| Arrangement              | Selection                    |
| Formula: ⁿPᵣ = n!/(n−r)! | Formula: ⁿCᵣ = n!/[r!(n−r)!] |

---

# 10. Restricted Arrangements

Sometimes arrangements are made under given conditions.

---

## Example 1

Arrange the letters of

```
CAT
```

such that **C** is always first.

Remaining letters

```
A,T
```

can be arranged in

```
2! = 2
```

ways.

---

## Example 2

Arrange 5 students in a row if two specified students always sit together.

Treat the two students as one unit.

Now arrange

```
4 units
```

```
4!
```

Within the pair,

```
2!
```

Hence,

```
4! ×2!

=48
```

---

# 11. Practical Applications

Permutations and combinations are used in:

- Password generation
- Lottery systems
- Team selection
- Seating arrangements
- Tournament scheduling
- Cryptography
- Probability
- Computer science

---

# Solved Examples

### Example 1

Find

```
5!
```

**Solution**

```
5!

=5×4×3×2×1

=120
```

---

### Example 2

Find

```
⁷P₃
```

**Solution**

```
7!

/

4!

```

```
=7×6×5

=210
```

---

### Example 3

Find

```
⁸C₂
```

**Solution**

```
8!

/

2!6!

```

```
=8×7

/

2

=28
```

---

### Example 4

How many committees of 3 members can be formed from 8 people?

**Solution**

```
⁸C₃

=

8!

/

3!5!

```

```
=56
```

---

### Example 5

In how many ways can the letters of

```
BOOK
```

be arranged?

**Solution**

Letters

```
B,O,O,K
```

Repeated

```
O=2
```

Number of arrangements

```
4!

/

2!

=12
```

---

### Example 6

How many ways can 6 people sit around a circular table?

**Solution**

Circular permutations

```
(6−1)!

=5!

=120
```

---

# Common Mistakes

- Confusing **permutations** with **combinations**.
- Forgetting that **order matters** in permutations.
- Using **nPr** instead of **nCr** for selection problems.
- Forgetting that **0! = 1**.
- Ignoring repeated objects while arranging letters of a word.
- Using **n!** instead of **(n−1)!** for circular arrangements.
- Incorrect cancellation while simplifying factorials.
- Forgetting the restrictions given in arrangement problems.

---

# Formula Sheet

### Factorial

```
n!

=n(n−1)!
```

---

### Zero Factorial

```
0!=1
```

---

### Permutations

```
ⁿPᵣ

=

n!

/

(n−r)!
```

---

### Arrangement of All Objects

```
ⁿPₙ=n!
```

---

### Permutations with Repetition

```
nʳ
```

---

### Circular Permutations

```
(n−1)!
```

---

### Permutations of Identical Objects

```
n!

/

(p!q!r!...)
```

---

### Combinations

```
ⁿCᵣ

=

n!

/

r!(n−r)!
```

---

### Relationship

```
ⁿPᵣ

=

ⁿCᵣ×r!
```

---

### Symmetry Property

```
ⁿCᵣ

=

ⁿC₍ₙ₋ᵣ₎
```

---

### Pascal's Identity

```
ⁿCᵣ

+

ⁿC₍ᵣ₋₁₎

=

ⁿ⁺¹Cᵣ
```

---

# Chapter Summary

- The **Fundamental Principle of Counting** consists of the **multiplication rule** and the **addition rule**, which help count the number of possible outcomes.
- The **factorial** of a positive integer is the product of all positive integers up to that number, with **0! = 1**.
- A **permutation** is an arrangement of objects in which the **order matters**.
- A **combination** is a selection of objects in which the **order does not matter**.
- Special cases include **circular permutations**, **permutations with repetition**, and **arrangements of identical objects**.
- Important identities such as **ⁿPᵣ = ⁿCᵣ × r!** and **ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎** simplify many counting problems.
- Permutations and combinations form the foundation for advanced topics in **probability**, **statistics**, **computer science**, and **combinatorics**.

# CBSE Class 11 Mathematics

# Chapter 7: Binomial Theorem

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Binomial Theorem

---

# Introduction

The **Binomial Theorem** provides a systematic method for expanding expressions of the form

```
(a + b)ⁿ
```

where **n** is a positive integer. Instead of repeated multiplication, the theorem gives a direct formula involving **binomial coefficients**. It has applications in algebra, probability, calculus, numerical analysis, and computer science.

This chapter introduces the Binomial Theorem, **Pascal's Triangle**, the **general term**, the **middle term(s)**, and numerical applications of binomial expansions.

---

# 1. Historical Background

The Binomial Theorem was studied by mathematicians in ancient India, Persia, and China.

Important contributors include:

- Pingala
- Halayudha
- Al-Karaji
- Omar Khayyam
- Isaac Newton (extended the theorem to non-integral powers)

The triangular arrangement of binomial coefficients is known as **Pascal's Triangle**, although it was known in many civilizations before Pascal.

---

# 2. Binomial Expression

A **binomial** is an algebraic expression containing two terms.

### Examples

```
x + y
```

```
2a − b
```

```
3x + 5
```

---

# 3. Binomial Theorem

For any positive integer

```
n
```

the expansion of

```
(a+b)ⁿ
```

is

```
(a+b)ⁿ

=

ⁿC₀aⁿ

+

ⁿC₁aⁿ⁻¹b

+

ⁿC₂aⁿ⁻²b²

+ ...

+

ⁿCₙbⁿ
```

---

## General Expansion

```
(a+b)ⁿ

=

Σ

ⁿCᵣ

aⁿ⁻ʳbʳ
```

where

```
r = 0,1,2,...,n
```

---

# 4. Binomial Coefficients

The numbers

```
ⁿC₀

ⁿC₁

ⁿC₂

...
```

are called **binomial coefficients**.

### Formula

```
ⁿCᵣ

=

n!

/

r!(n−r)!
```

---

## Properties

### First and Last Coefficients

```
ⁿC₀=1
```

```
ⁿCₙ=1
```

---

### Symmetry Property

```
ⁿCᵣ

=

ⁿC₍ₙ₋ᵣ₎
```

---

### Pascal's Identity

```
ⁿCᵣ

+

ⁿC₍ᵣ₋₁₎

=

ⁿ⁺¹Cᵣ
```

---

# 5. Pascal's Triangle

The coefficients of the binomial expansion can be obtained using Pascal's Triangle.

```
                1

              1   1

            1   2   1

          1   3   3   1

        1   4   6   4   1

      1   5  10  10   5   1

    1   6  15  20  15   6   1
```

Each number is obtained by adding the two numbers directly above it.

---

# 6. Expansion of Small Powers

### (a + b)²

```
a²

+

2ab

+

b²
```

---

### (a + b)³

```
a³

+

3a²b

+

3ab²

+

b³
```

---

### (a − b)²

```
a²

−

2ab

+

b²
```

---

### (a − b)³

```
a³

−

3a²b

+

3ab²

−

b³
```

---

# 7. General Term

The **general term** of the expansion is useful when only one particular term is required.

---

## Formula

The

```
(r+1)th
```

term is

```
Tᵣ₊₁

=

ⁿCᵣ

aⁿ⁻ʳbʳ
```

where

```
r=0,1,2,...,n
```

---

## Example

Find the fourth term of

```
(x+2)⁵
```

Here

```
n=5
```

Fourth term

```
r=3
```

```
T₄

=

⁵C₃

x²

2³
```

```
=10×8x²

=80x²
```

---

# 8. Middle Term(s)

The number of terms in the expansion is

```
n+1
```

---

## Case 1

If

```
n
```

is even,

there is **one middle term**.

Middle term

```
[(n/2)+1]th
```

---

## Case 2

If

```
n
```

is odd,

there are **two middle terms**.

They are

```
[(n+1)/2]th

and

[(n+3)/2]th
```

---

## Example

Expansion of

```
(a+b)⁶
```

contains

```
7 terms
```

Middle term

```
4th term
```

---

## Example

Expansion of

```
(a+b)⁵
```

contains

```
6 terms
```

Middle terms

```
3rd

and

4th
```

---

# 9. Important Binomial Identities

### Sum of Coefficients

Substitute

```
a=1

b=1
```

```
(1+1)ⁿ

=2ⁿ
```

Hence,

```
ⁿC₀

+

ⁿC₁

+...

+

ⁿCₙ

=

2ⁿ
```

---

### Alternating Sum

Substitute

```
a=1

b=−1
```

```
(1−1)ⁿ=0
```

Therefore,

```
ⁿC₀

−

ⁿC₁

+

ⁿC₂

−...

=0
```

for

```
n≥1
```

---

# 10. Numerical Expansions

---

## Example

Expand

```
(x+1)⁴
```

Using the theorem,

```
x⁴

+

4x³

+

6x²

+

4x

+

1
```

---

## Example

Expand

```
(2x−3)³
```

```
8x³

−

36x²

+

54x

−

27
```

---

# 11. Applications of Binomial Theorem

The Binomial Theorem is used in:

- Algebraic expansions
- Approximation techniques
- Probability
- Statistics
- Calculus
- Numerical methods
- Computer algorithms
- Engineering computations

---

# Solved Examples

### Example 1

Expand

```
(a+b)²
```

**Solution**

```
a²

+

2ab

+

b²
```

---

### Example 2

Expand

```
(x+2)³
```

**Solution**

```
x³

+

6x²

+

12x

+

8
```

---

### Example 3

Find the coefficient of

```
x²
```

in

```
(x+3)⁴
```

**Solution**

General term

```
Tᵣ₊₁

=

⁴Cᵣ

x⁴⁻ʳ

3ʳ
```

For

```
x²
```

```
4−r=2
```

```
r=2
```

Coefficient

```
⁴C₂×3²

=6×9

=54
```

---

### Example 4

Find the fifth term of

```
(a+b)⁸
```

**Solution**

Fifth term

```
r=4
```

```
T₅

=

⁸C₄

a⁴b⁴
```

```
=70a⁴b⁴
```

---

### Example 5

How many terms are present in

```
(x+y)¹⁰
```

**Solution**

Number of terms

```
10+1

=11
```

---

### Example 6

Find the sum of coefficients of

```
(2x+1)⁵
```

**Solution**

Put

```
x=1
```

```
(2+1)⁵

=3⁵

=243
```

---

# Common Mistakes

- Confusing the exponent **n** with the term number **r**.
- Using the wrong formula for the general term.
- Forgetting that the first term corresponds to **r = 0**.
- Incorrectly calculating binomial coefficients.
- Missing negative signs while expanding **(a − b)ⁿ**.
- Confusing the coefficient of a term with the term itself.
- Incorrectly identifying the middle term(s).
- Forgetting to simplify factorial expressions before calculation.

---

# Formula Sheet

### Binomial Theorem

```
(a+b)ⁿ

=

Σ

ⁿCᵣ

aⁿ⁻ʳbʳ
```

---

### Binomial Coefficient

```
ⁿCᵣ

=

n!

/

r!(n−r)!
```

---

### General Term

```
Tᵣ₊₁

=

ⁿCᵣ

aⁿ⁻ʳbʳ
```

---

### Number of Terms

```
n+1
```

---

### Middle Term (n Even)

```
[(n/2)+1]th
```

---

### Middle Terms (n Odd)

```
[(n+1)/2]th

and

[(n+3)/2]th
```

---

### Symmetry Property

```
ⁿCᵣ

=

ⁿC₍ₙ₋ᵣ₎
```

---

### Sum of Coefficients

```
2ⁿ
```

---

### Alternating Sum

```
0
```

for

```
n≥1
```

---

# Chapter Summary

- A **binomial** is an algebraic expression consisting of two terms.
- The **Binomial Theorem** provides a direct formula for expanding **(a + b)ⁿ**, where **n** is a positive integer.
- The coefficients in the expansion are called **binomial coefficients** and are given by **ⁿCᵣ = n! / [r!(n − r)!]**.
- **Pascal's Triangle** provides a convenient way to obtain binomial coefficients.
- The **general term** allows any specific term in the expansion to be found without expanding the entire expression.
- The number of terms in the expansion is **n + 1**, and the position of the middle term(s) depends on whether **n** is even or odd.
- Useful identities include the **sum of coefficients** and the **alternating sum of coefficients**.
- The Binomial Theorem has extensive applications in algebra, probability, statistics, calculus, and scientific computations.

# CBSE Class 11 Mathematics

# Chapter 8: Sequences and Series

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Sequences and Series

---

# Introduction

A **sequence** is an ordered list of numbers arranged according to a specific rule, while a **series** is the sum of the terms of a sequence. Sequences and series are widely used in mathematics, finance, physics, engineering, and computer science. This chapter covers **Arithmetic Progressions (AP)**, **Geometric Progressions (GP)**, **Arithmetic Mean (AM)**, **Geometric Mean (GM)**, and the important relationship between **AM and GM**.

---

# 1. Sequence

A **sequence** is an ordered arrangement of numbers that follows a definite rule.

### Examples

```
2, 4, 6, 8, 10, ...
```

```
5, 10, 20, 40, ...
```

Each number is called a **term** of the sequence.

---

# 2. Series

A **series** is the sum of the terms of a sequence.

### Example

Sequence

```
2,4,6,8
```

Series

```
2+4+6+8=20
```

---

# 3. Arithmetic Progression (AP)

An **Arithmetic Progression (AP)** is a sequence in which the difference between consecutive terms is constant.

### General Form

```
a,

a+d,

a+2d,

a+3d,...
```

where

- **a** = first term
- **d** = common difference

---

## Common Difference

```
d

=

Second term

−

First term
```

### Example

```
3,7,11,15,...
```

```
d=4
```

---

# 4. nth Term of an AP

The **nth term** of an AP is

```
aₙ

=

a+(n−1)d
```

---

## Example

Find the 10th term of

```
2,5,8,...
```

Here

```
a=2

d=3
```

```
a₁₀

=

2+9×3

=29
```

---

# 5. Sum of First n Terms of an AP

### Formula 1

```
Sₙ

=

n/2

[2a+(n−1)d]
```

---

### Formula 2

If the last term is

```
l
```

then

```
Sₙ

=

n/2(a+l)
```

---

## Example

Find the sum of the first 20 natural numbers.

```
a=1

d=1

n=20
```

```
S₂₀

=

20/2

(1+20)

=210
```

---

# 6. Arithmetic Mean (AM)

If a number is inserted between two numbers so that they form an AP, the inserted number is called the **Arithmetic Mean (AM)**.

---

## Formula

Between

```
a

and

b
```

AM is

```
(a+b)/2
```

---

## Example

Find the AM between

```
8

and

20
```

```
AM

=

(8+20)/2

=14
```

---

# 7. Geometric Progression (GP)

A **Geometric Progression (GP)** is a sequence in which each term is obtained by multiplying the previous term by a fixed constant called the **common ratio**.

### General Form

```
a,

ar,

ar²,

ar³,...
```

where

- **a** = first term
- **r** = common ratio

---

## Common Ratio

```
r

=

Second term

/

First term
```

---

## Example

```
3,6,12,24,...
```

```
r=2
```

---

# 8. nth Term of a GP

The **nth term** is

```
aₙ

=

arⁿ⁻¹
```

---

## Example

Find the 6th term of

```
2,4,8,...
```

```
a=2

r=2
```

```
a₆

=

2×2⁵

=64
```

---

# 9. Sum of First n Terms of a GP

---

## Formula

If

```
r≠1
```

then

```
Sₙ

=

a(rⁿ−1)

/

(r−1)
```

or equivalently,

```
Sₙ

=

a(1−rⁿ)

/

(1−r)
```

Both forms are correct.

---

## Example

Find the sum of

```
2,4,8,16
```

```
a=2

r=2

n=4
```

```
S₄

=

2(2⁴−1)

/

1

=30
```

---

# 10. Sum of an Infinite GP

If

```
|r|<1
```

then the sum of infinitely many terms exists.

### Formula

```
S∞

=

a

/

(1−r)
```

---

## Example

```
1

+

1/2

+

1/4

+

1/8+...
```

```
a=1

r=1/2
```

```
S∞

=

1

/

1−1/2

=2
```

---

# 11. Geometric Mean (GM)

If one number is inserted between two positive numbers so that the three numbers form a GP, then the inserted number is called the **Geometric Mean (GM)**.

---

## Formula

Between

```
a

and

b
```

GM is

```
√ab
```

---

## Example

Find the GM between

```
9

and

25
```

```
GM

=

√225

=15
```

---

# 12. Relationship Between AM and GM

For two positive numbers

```
a

and

b
```

```
AM

≥

GM
```

That is,

```
(a+b)/2

≥

√ab
```

Equality occurs only when

```
a=b
```

---

## Illustration

Let

```
a=4

b=9
```

```
AM

=

13/2

=6.5
```

```
GM

=

6
```

Therefore,

```
6.5>6
```

---

# 13. Difference Between AP and GP

| Arithmetic Progression     | Geometric Progression            |
| -------------------------- | -------------------------------- |
| Constant difference        | Constant ratio                   |
| Terms obtained by addition | Terms obtained by multiplication |
| nth term: a+(n−1)d         | nth term: arⁿ⁻¹                  |
| Sum uses linear formula    | Sum uses exponential formula     |

---

# 14. Applications of Sequences and Series

Sequences and series are used in:

- Banking and finance
- Compound interest
- Population growth
- Radioactive decay
- Computer algorithms
- Physics
- Economics
- Engineering

---

# Solved Examples

### Example 1

Find the 15th term of the AP

```
4,7,10,...
```

**Solution**

```
a=4

d=3
```

```
a₁₅

=

4+14×3

=46
```

---

### Example 2

Find the sum of the first 25 terms of

```
2,5,8,...
```

**Solution**

```
a=2

d=3

n=25
```

```
S₂₅

=

25/2

[4+72]

=

25×38

=950
```

---

### Example 3

Find the 7th term of the GP

```
5,10,20,...
```

**Solution**

```
a=5

r=2
```

```
a₇

=

5×2⁶

=320
```

---

### Example 4

Find the sum of the first 5 terms of

```
3,6,12,...
```

**Solution**

```
a=3

r=2
```

```
S₅

=

3(32−1)

=93
```

---

### Example 5

Find the GM between

```
16

and

81
```

**Solution**

```
GM

=

√1296

=36
```

---

### Example 6

Find the sum of the infinite GP

```
5

+

5/2

+

5/4+...
```

**Solution**

```
a=5

r=1/2
```

```
S∞

=

5

/

1−1/2

=10
```

---

# Common Mistakes

- Confusing the **common difference** of an AP with the **common ratio** of a GP.
- Using the AP formula for a GP or vice versa.
- Forgetting that the infinite GP formula is valid only when

```
|r|<1
```

- Using an incorrect value of **n−1** while finding the nth term.
- Confusing **Arithmetic Mean** with **Geometric Mean**.
- Forgetting to identify the first term correctly.
- Using the wrong formula for the sum of an AP when the last term is given.
- Ignoring the condition **AM = GM only when the two numbers are equal**.

---

# Formula Sheet

### Arithmetic Progression

**nth Term**

```
aₙ

=

a+(n−1)d
```

---

**Sum of First n Terms**

```
Sₙ

=

n/2

[2a+(n−1)d]
```

---

**Alternative Formula**

```
Sₙ

=

n/2(a+l)
```

---

### Arithmetic Mean

```
AM

=

(a+b)/2
```

---

### Geometric Progression

**nth Term**

```
aₙ

=

arⁿ⁻¹
```

---

**Sum of First n Terms**

```
Sₙ

=

a(rⁿ−1)

/

(r−1)
```

or

```
Sₙ

=

a(1−rⁿ)

/

(1−r)
```

---

**Sum of Infinite GP**

```
S∞

=

a

/

(1−r)

(|r|<1)
```

---

### Geometric Mean

```
GM

=

√ab
```

---

### AM–GM Inequality

```
(a+b)/2

≥

√ab
```

Equality holds when

```
a=b
```

---

# Chapter Summary

- A **sequence** is an ordered list of numbers, while a **series** is the sum of the terms of a sequence.
- An **Arithmetic Progression (AP)** has a constant **common difference**, and its nth term and sum are determined using standard formulas.
- An **Arithmetic Mean (AM)** is the number inserted between two numbers to form an AP.
- A **Geometric Progression (GP)** has a constant **common ratio**, and its nth term and sum are obtained using exponential formulas.
- The **sum of an infinite GP** exists only when **|r| < 1**.
- A **Geometric Mean (GM)** is the number inserted between two positive numbers to form a GP.
- The important inequality **AM ≥ GM** states that the arithmetic mean is always greater than or equal to the geometric mean, with equality only when the two numbers are equal.
- Sequences and series are essential tools in mathematics and have wide-ranging applications in science, engineering, economics, and finance.

# CBSE Class 11 Mathematics

# Chapter 9: Straight Lines

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Straight Lines

---

# Introduction

A **straight line** is one of the most fundamental objects in coordinate geometry. It is determined by two distinct points and extends infinitely in both directions. The study of straight lines involves finding their equations, slopes, angles, distances, and relationships such as parallelism and perpendicularity. These concepts are widely used in geometry, engineering, architecture, physics, and computer graphics.

---

# 1. Coordinate Plane

The Cartesian plane consists of two perpendicular axes.

- **X-axis (Horizontal)**
- **Y-axis (Vertical)**

The point where they intersect is called the **Origin**.

```
           Y

           ↑

 II        |       I

-----------O------------→ X

 III       |      IV

           ↓
```

A point is represented by

```
(x, y)
```

---

# 2. Distance Between Two Points

Let

```
A(x₁,y₁)

and

B(x₂,y₂)
```

The distance between them is

```
AB

=

√[(x₂−x₁)²+(y₂−y₁)²]
```

---

## Example

Find the distance between

```
(2,3)

and

(6,6)
```

```
AB

=

√[(6−2)²+(6−3)²]

=

√(16+9)

=5
```

---

# 3. Section Formula

If a point

```
P
```

divides the line joining

```
A(x₁,y₁)

and

B(x₂,y₂)
```

internally in the ratio

```
m:n
```

then

```
P

=

(

(mx₂+nx₁)/(m+n),

(my₂+ny₁)/(m+n)

)
```

---

## Midpoint Formula

When

```
m=n=1
```

```
M

=

(

(x₁+x₂)/2,

(y₁+y₂)/2

)
```

---

# 4. Slope of a Line

The **slope** measures the inclination of a line with the positive x-axis.

### Formula

```
m

=

(y₂−y₁)

/

(x₂−x₁)
```

---

## Interpretation

|     Slope | Nature of Line  |
| --------: | --------------- |
|  Positive | Rising line     |
|  Negative | Falling line    |
|      Zero | Horizontal line |
| Undefined | Vertical line   |

---

# 5. Angle of Inclination

The angle made by a line with the positive x-axis is called the **angle of inclination**.

### Formula

```
m

=

tanθ
```

where

```
0°≤θ<180°
```

---

# 6. Angle Between Two Lines

Let the slopes be

```
m₁

and

m₂
```

The angle between them is

```
tanθ

=

(m₂−m₁)

/

(1+m₁m₂)
```

When taking the magnitude of the acute angle,

```
tanθ

=

|(m₂−m₁)/(1+m₁m₂)|
```

---

# 7. Parallel Lines

Two lines are parallel if their slopes are equal.

### Condition

```
m₁=m₂
```

---

# 8. Perpendicular Lines

Two lines are perpendicular if the product of their slopes is

```
−1
```

### Condition

```
m₁m₂=−1
```

---

# 9. Equation of a Straight Line

A straight line can be represented in several forms.

---

## (A) Point-Slope Form

If a line passes through

```
(x₁,y₁)
```

with slope

```
m
```

then

```
y−y₁

=

m(x−x₁)
```

---

## Example

Through

```
(2,3)
```

with slope

```
4
```

```
y−3

=

4(x−2)
```

---

## (B) Two-Point Form

If a line passes through

```
(x₁,y₁)

and

(x₂,y₂)
```

then

```
(y−y₁)

/

(y₂−y₁)

=

(x−x₁)

/

(x₂−x₁)
```

---

## (C) Slope-Intercept Form

If the slope is

```
m
```

and the y-intercept is

```
c
```

then

```
y

=

mx+c
```

---

## Example

```
y=2x+5
```

Slope

```
2
```

Intercept

```
5
```

---

## (D) Intercept Form

If a line cuts the axes at

```
a

and

b
```

then

```
x/a

+

y/b

=1
```

---

## Example

If the x-intercept is

```
4
```

and the y-intercept is

```
2
```

then

```
x/4

+

y/2

=1
```

---

## (E) Normal Form

If

```
p
```

is the perpendicular distance from the origin and

```
α
```

is the angle made by the perpendicular with the x-axis,

then

```
xcosα

+

ysinα

=p
```

---

# 10. General Equation of a Line

The general equation of a straight line is

```
Ax+By+C=0
```

where

```
A

and

B

are not simultaneously zero.
```

---

## Finding Slope

From

```
Ax+By+C=0
```

```
Slope

m

=

−A/B
```

provided

```
B≠0
```

---

# 11. Converting Between Forms

Example

```
2x+3y−6=0
```

Convert to slope-intercept form.

```
3y

=

−2x+6
```

```
y

=

−2x/3

+2
```

Hence,

```
m

=

−2/3
```

---

# 12. Distance of a Point from a Line

If the point is

```
(x₁,y₁)
```

and the line is

```
Ax+By+C=0
```

then the perpendicular distance is

```
d

=

|Ax₁+By₁+C|

/

√(A²+B²)
```

---

## Example

Find the distance of

```
(2,1)
```

from

```
3x+4y−10=0
```

```
d

=

|6+4−10|

/

5

=0
```

The point lies on the line.

---

# 13. Distance Between Two Parallel Lines

Let the parallel lines be

```
Ax+By+C₁=0
```

and

```
Ax+By+C₂=0
```

Then

```
Distance

=

|C₂−C₁|

/

√(A²+B²)
```

---

## Example

Find the distance between

```
2x+3y−6=0
```

and

```
2x+3y+9=0
```

```
Distance

=

15

/

√13
```

---

# 14. Applications of Straight Lines

Straight lines are used in:

- Coordinate geometry
- Engineering drawings
- Computer graphics
- Navigation
- Surveying
- Physics
- Architecture
- Robotics

---

# Solved Examples

### Example 1

Find the slope of the line passing through

```
(2,5)

and

(6,9)
```

**Solution**

```
m

=

(9−5)

/

(6−2)

=1
```

---

### Example 2

Find the equation of the line passing through

```
(3,4)
```

with slope

```
2
```

**Solution**

```
y−4

=

2(x−3)
```

```
y

=

2x−2
```

---

### Example 3

Determine whether the lines having slopes

```
3

and

3
```

are parallel.

**Solution**

Since

```
m₁=m₂
```

the lines are **parallel**.

---

### Example 4

Determine whether the lines with slopes

```
2

and

−1/2
```

are perpendicular.

**Solution**

```
2×(−1/2)

=−1
```

Hence, the lines are **perpendicular**.

---

### Example 5

Find the midpoint of

```
(4,6)

and

(8,10)
```

**Solution**

```
(

6,

8

)
```

---

### Example 6

Find the distance between the parallel lines

```
x+y−4=0
```

and

```
x+y+3=0
```

**Solution**

```
Distance

=

|3−(−4)|

/

√2

=

7/√2
```

---

# Common Mistakes

- Confusing the **slope** with the **y-intercept**.
- Using the wrong formula for the angle between two lines.
- Forgetting that vertical lines have **undefined slope**.
- Applying the midpoint formula instead of the section formula.
- Forgetting the absolute value while calculating distances.
- Using the distance formula for non-parallel lines.
- Incorrectly identifying the intercepts in the intercept form.
- Missing the negative sign while finding the slope from the general equation.

---

# Formula Sheet

### Distance Between Two Points

```
√[(x₂−x₁)²+(y₂−y₁)²]
```

---

### Section Formula

```
(

(mx₂+nx₁)/(m+n),

(my₂+ny₁)/(m+n)

)
```

---

### Midpoint Formula

```
(

(x₁+x₂)/2,

(y₁+y₂)/2

)
```

---

### Slope

```
m

=

(y₂−y₁)

/

(x₂−x₁)
```

---

### Angle of Inclination

```
m=tanθ
```

---

### Angle Between Two Lines

```
tanθ

=

|(m₂−m₁)/(1+m₁m₂)|
```

---

### Point-Slope Form

```
y−y₁

=

m(x−x₁)
```

---

### Two-Point Form

```
(y−y₁)/(y₂−y₁)

=

(x−x₁)/(x₂−x₁)
```

---

### Slope-Intercept Form

```
y=mx+c
```

---

### Intercept Form

```
x/a+y/b=1
```

---

### Normal Form

```
xcosα+ysinα=p
```

---

### General Form

```
Ax+By+C=0
```

---

### Distance of a Point from a Line

```
|Ax₁+By₁+C|

/

√(A²+B²)
```

---

### Distance Between Parallel Lines

```
|C₂−C₁|

/

√(A²+B²)
```

---

# Chapter Summary

- A **straight line** is uniquely determined by two distinct points in the Cartesian plane.
- The **slope** measures the inclination of a line and is equal to the tangent of its angle of inclination.
- Two lines are **parallel** if their slopes are equal, and **perpendicular** if the product of their slopes is **−1**.
- A straight line can be represented in various forms, including the **point-slope**, **two-point**, **slope-intercept**, **intercept**, **normal**, and **general** forms.
- The **distance formula**, **section formula**, and **midpoint formula** are essential tools for coordinate geometry.
- The **perpendicular distance** of a point from a line and the **distance between parallel lines** are important applications of the general equation of a line.
- Straight lines form the basis for studying higher topics in coordinate geometry such as circles, conic sections, vectors, and analytical geometry.

# CBSE Class 11 Mathematics

# Chapter 10: Conic Sections

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Conic Sections

---

# Introduction

**Conic Sections** are curves obtained by cutting a double right circular cone with a plane. Depending on the angle at which the plane intersects the cone, different curves are formed, namely the **circle, parabola, ellipse,** and **hyperbola**. These curves have important applications in astronomy, engineering, architecture, optics, satellite communication, and physics.

This chapter introduces the formation of conic sections, their standard equations, and important geometric properties such as the **focus, directrix, vertex, eccentricity,** and **latus rectum**.

---

# 1. Conic Sections

A **conic section** is the curve obtained when a plane cuts a double right circular cone.

### Types of Conic Sections

- Circle
- Parabola
- Ellipse
- Hyperbola

---

# 2. Formation of Conic Sections

### (A) Circle

The plane is **perpendicular** to the axis of the cone.

```
      /\
     /  \
----(----)----
     \  /
      \/
```

---

### (B) Ellipse

The plane cuts the cone at an angle less than the angle of the generator.

```
      /\
     /  \
   /------\
    \    /
     \  /
      \/
```

---

### (C) Parabola

The plane is parallel to one of the generators of the cone.

```
      /\
     / |
    /--|
    \  |
     \ |
      \/
```

---

### (D) Hyperbola

The plane cuts both nappes (halves) of the cone.

```
     \    /
      \  /
-------\/-------
-------/\-------
      /  \
     /    \
```

---

# 3. Circle

A **circle** is the set of all points in a plane at a fixed distance from a fixed point.

The fixed point is called the **centre**.

The fixed distance is called the **radius**.

---

## Standard Equation

If the centre is

```
(0,0)
```

and radius is

```
r
```

then

```
x²+y²=r²
```

---

## General Equation

```
x²+y²+2gx+2fy+c=0
```

---

## Centre

```
(−g,−f)
```

---

## Radius

```
√(g²+f²−c)
```

---

# 4. Parabola

A **parabola** is the set of all points whose distance from a fixed point (**focus**) is equal to its perpendicular distance from a fixed line (**directrix**).

---

## Standard Equation

```
y²=4ax
```

---

## Important Elements

### Vertex

```
(0,0)
```

---

### Focus

```
(a,0)
```

---

### Directrix

```
x=−a
```

---

### Axis

```
x-axis
```

---

### Length of Latus Rectum

```
4a
```

---

## Other Standard Forms

### Left Opening

```
y²=−4ax
```

---

### Upward Opening

```
x²=4ay
```

---

### Downward Opening

```
x²=−4ay
```

---

# 5. Ellipse

An **ellipse** is the set of all points such that the sum of the distances from two fixed points (**foci**) remains constant.

---

## Standard Equation

```
x²/a²

+

y²/b²

=1
```

where

```
a>b
```

---

## Vertices

```
(±a,0)
```

---

## Foci

```
(±c,0)
```

where

```
c²=a²−b²
```

---

## Eccentricity

```
e=c/a
```

For an ellipse,

```
0<e<1
```

---

## Directrices

```
x=±a/e
```

---

## Length of Latus Rectum

```
2b²/a
```

---

# 6. Hyperbola

A **hyperbola** is the set of all points for which the absolute difference of the distances from two fixed points (**foci**) remains constant.

---

## Standard Equation

```
x²/a²

−

y²/b²

=1
```

---

## Vertices

```
(±a,0)
```

---

## Foci

```
(±c,0)
```

where

```
c²=a²+b²
```

---

## Eccentricity

```
e=c/a
```

For a hyperbola,

```
e>1
```

---

## Directrices

```
x=±a/e
```

---

## Length of Latus Rectum

```
2b²/a
```

---

# 7. Focus, Directrix and Eccentricity

| Conic     | Focus         | Directrix    | Eccentricity |
| --------- | ------------- | ------------ | ------------ |
| Circle    | Centre itself | No directrix | 0            |
| Parabola  | One           | One          | 1            |
| Ellipse   | Two           | Two          | 0 < e < 1    |
| Hyperbola | Two           | Two          | e > 1        |

---

# 8. Comparison of Conic Sections

| Property       | Circle   | Parabola | Ellipse  | Hyperbola |
| -------------- | -------- | -------- | -------- | --------- |
| Number of Foci | 1        | 1        | 2        | 2         |
| Eccentricity   | 0        | 1        | <1       | >1        |
| Closed Curve   | Yes      | No       | Yes      | No        |
| Symmetry       | Infinite | One axis | Two axes | Two axes  |

---

# 9. Applications of Conic Sections

### Circle

- Wheels
- Clocks
- Gears
- Circular tracks

---

### Parabola

- Satellite dishes
- Car headlights
- Reflecting telescopes
- Suspension bridges

---

### Ellipse

- Planetary orbits
- Whispering galleries
- Optical systems

---

### Hyperbola

- Navigation
- Radio positioning
- Cooling towers
- Astronomy

---

# Solved Examples

### Example 1

Find the radius of the circle

```
x²+y²=49
```

**Solution**

```
r²=49
```

```
r=7
```

---

### Example 2

Find the focus of

```
y²=20x
```

**Solution**

Compare with

```
y²=4ax
```

```
4a=20
```

```
a=5
```

Focus

```
(5,0)
```

---

### Example 3

Find the eccentricity of the ellipse

```
x²/25+y²/9=1
```

**Solution**

```
a²=25

b²=9
```

```
c²=25−9

=16
```

```
c=4
```

```
e=4/5
```

---

### Example 4

Find the foci of

```
x²/16−y²/9=1
```

**Solution**

```
a²=16

b²=9
```

```
c²=25
```

```
c=5
```

Foci

```
(±5,0)
```

---

### Example 5

Find the length of the latus rectum of

```
y²=12x
```

**Solution**

```
4a=12
```

```
a=3
```

Length

```
4a

=12
```

---

### Example 6

Find the centre and radius of

```
x²+y²−6x+8y−11=0
```

**Solution**

Compare with

```
x²+y²+2gx+2fy+c=0
```

```
g=−3

f=4

c=−11
```

Centre

```
(3,−4)
```

Radius

```
√(9+16+11)

=6
```

---

# Common Mistakes

- Confusing the equations of the **ellipse** and the **hyperbola**.
- Forgetting that **c² = a² − b²** for an ellipse and **c² = a² + b²** for a hyperbola.
- Using the wrong formula for eccentricity.
- Mixing up the **focus** and the **vertex** of a parabola.
- Forgetting that the eccentricity of a parabola is always **1**.
- Using the wrong standard equation when the parabola opens vertically instead of horizontally.
- Confusing the centre of a circle with its focus.
- Incorrectly identifying the length of the latus rectum.

---

# Formula Sheet

## Circle

**Standard Equation**

```
x²+y²=r²
```

---

**General Equation**

```
x²+y²+2gx+2fy+c=0
```

---

**Centre**

```
(−g,−f)
```

---

**Radius**

```
√(g²+f²−c)
```

---

## Parabola

**Standard Equation**

```
y²=4ax
```

---

**Focus**

```
(a,0)
```

---

**Directrix**

```
x=−a
```

---

**Length of Latus Rectum**

```
4a
```

---

## Ellipse

**Standard Equation**

```
x²/a²+y²/b²=1
```

---

**Relation**

```
c²=a²−b²
```

---

**Eccentricity**

```
e=c/a
```

---

**Length of Latus Rectum**

```
2b²/a
```

---

## Hyperbola

**Standard Equation**

```
x²/a²−y²/b²=1
```

---

**Relation**

```
c²=a²+b²
```

---

**Eccentricity**

```
e=c/a
```

---

**Length of Latus Rectum**

```
2b²/a
```

---

# Chapter Summary

- **Conic sections** are curves obtained by intersecting a plane with a double right circular cone.
- The four conic sections are **circle, parabola, ellipse,** and **hyperbola**, each having unique geometric properties.
- A **circle** is defined by all points equidistant from a fixed centre.
- A **parabola** consists of points equidistant from a **focus** and a **directrix**, and its eccentricity is **1**.
- An **ellipse** is formed when the sum of the distances from two foci is constant, with eccentricity satisfying **0 < e < 1**.
- A **hyperbola** is formed when the difference of the distances from two foci is constant, with eccentricity **greater than 1**.
- The concepts of **focus, directrix, vertex, eccentricity,** and **latus rectum** are fundamental to understanding conic sections.
- Conic sections have extensive applications in astronomy, optics, architecture, communication systems, and engineering.

# CBSE Class 11 Mathematics

# Chapter 11: Introduction to Three-Dimensional Geometry

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Introduction to Three-Dimensional Geometry

---

# Introduction

In coordinate geometry, points are usually represented on a **two-dimensional (2D) plane** using two coordinates. However, many real-life objects exist in **three-dimensional (3D) space**, requiring three coordinates to specify their positions.

**Three-Dimensional Geometry (3D Geometry)** extends the Cartesian coordinate system by introducing a third axis. It is widely used in engineering, architecture, robotics, computer graphics, astronomy, physics, and navigation.

This chapter introduces the three coordinate axes, coordinate planes, octants, coordinates of a point, distance formula, section formula, and centroid of a triangle in 3D space.

---

# 1. Three-Dimensional Coordinate System

A point in space is represented using three mutually perpendicular axes.

- X-axis
- Y-axis
- Z-axis

These axes intersect at the **Origin**.

```
                Z
                ↑
                |
                |
                O────────→ X
               /
              /
             ↓
            Y
```

---

# 2. Coordinate Axes

## X-axis

Represents the horizontal direction.

---

## Y-axis

Represents the direction perpendicular to the X-axis in the horizontal plane.

---

## Z-axis

Represents the vertical direction.

---

# 3. Coordinate Planes

The three coordinate planes divide the space into eight regions called **octants**.

---

## (A) XY-plane

Equation

```
z = 0
```

---

## (B) YZ-plane

Equation

```
x = 0
```

---

## (C) ZX-plane

Equation

```
y = 0
```

---

## Diagram

```
             Z

             |

      ZX     |     YZ

-------------O------------ X

             |

            XY
```

---

# 4. Coordinates of a Point

A point in space is written as

```
(x, y, z)
```

where

- **x** = distance from YZ-plane
- **y** = distance from ZX-plane
- **z** = distance from XY-plane

---

## Examples

```
(2,3,5)
```

```
(-4,1,6)
```

```
(5,-2,-7)
```

---

# 5. Origin

The point where all three coordinate axes intersect.

Coordinates

```
(0,0,0)
```

---

# 6. Octants

The three coordinate planes divide space into **eight octants**.

---

## First Octant

All coordinates are positive.

```
(+,+,+)
```

---

## Sign Combinations

| Octant | Signs   |
| ------ | ------- |
| I      | (+,+,+) |
| II     | (-,+,+) |
| III    | (-,-,+) |
| IV     | (+,-,+) |
| V      | (+,+,-) |
| VI     | (-,+,-) |
| VII    | (-,-,-) |
| VIII   | (+,-,-) |

---

# 7. Distance Between Two Points

Let

```
A(x₁,y₁,z₁)

and

B(x₂,y₂,z₂)
```

The distance between them is

```
AB

=

√[(x₂−x₁)²

+

(y₂−y₁)²

+

(z₂−z₁)²]
```

---

## Example

Find the distance between

```
(1,2,3)

and

(4,6,7)
```

**Solution**

```
AB

=

√[(3)²+(4)²+(4)²]
```

```
=

√41
```

---

# 8. Distance from the Origin

If the point is

```
(x,y,z)
```

then its distance from the origin is

```
√(x²+y²+z²)
```

---

## Example

Find the distance of

```
(3,4,12)
```

from the origin.

```
√(9+16+144)

=

√169

=13
```

---

# 9. Section Formula

Suppose point

```
P
```

divides the line joining

```
A(x₁,y₁,z₁)

and

B(x₂,y₂,z₂)
```

internally in the ratio

```
m:n
```

Then

```
P

=

(

(mx₂+nx₁)/(m+n),

(my₂+ny₁)/(m+n),

(mz₂+nz₁)/(m+n)

)
```

---

# 10. Midpoint Formula

If

```
m=n=1
```

then the midpoint is

```
(

(x₁+x₂)/2,

(y₁+y₂)/2,

(z₁+z₂)/2

)
```

---

## Example

Find the midpoint of

```
(2,4,6)

and

(6,8,10)
```

**Solution**

```
(

4,

6,

8

)
```

---

# 11. Centroid of a Triangle

The **centroid** is the point where the three medians of a triangle intersect.

Suppose the vertices are

```
A(x₁,y₁,z₁)

B(x₂,y₂,z₂)

C(x₃,y₃,z₃)
```

Then the centroid is

```
(

(x₁+x₂+x₃)/3,

(y₁+y₂+y₃)/3,

(z₁+z₂+z₃)/3

)
```

---

## Example

Find the centroid of the triangle having vertices

```
(0,0,0)

(3,6,9)

(6,3,0)
```

**Solution**

```
(

3,

3,

3

)
```

---

# 12. Important Observations

- Every point in space has three coordinates.
- The order of coordinates is important.

```
(x,y,z)

≠

(y,x,z)
```

- The origin has coordinates

```
(0,0,0)
```

- Points lying on

XY-plane satisfy

```
z=0
```

- Points lying on

YZ-plane satisfy

```
x=0
```

- Points lying on

ZX-plane satisfy

```
y=0
```

---

# 13. Applications of 3D Geometry

Three-dimensional geometry is used in:

- Architecture
- Civil Engineering
- Mechanical Engineering
- Robotics
- Computer Graphics
- Animation
- Satellite Navigation
- Astronomy
- Physics
- Gaming

---

# Solved Examples

### Example 1

Find the distance between

```
(2,3,4)

and

(5,7,8)
```

**Solution**

```
AB

=

√[(5−2)²+(7−3)²+(8−4)²]
```

```
=

√(9+16+16)
```

```
=

√41
```

---

### Example 2

Find the distance of

```
(6,8,24)
```

from the origin.

**Solution**

```
√(36+64+576)
```

```
=

√676

=26
```

---

### Example 3

Find the midpoint of

```
(4,6,8)

and

(8,10,12)
```

**Solution**

```
(

6,

8,

10

)
```

---

### Example 4

Find the point dividing the line joining

```
(1,2,3)

and

(5,6,7)
```

internally in the ratio

```
1:1
```

**Solution**

Since the ratio is

```
1:1
```

the point is the midpoint.

```
(

3,

4,

5

)
```

---

### Example 5

Find the centroid of the triangle whose vertices are

```
(1,2,3)

(4,5,6)

(7,8,9)
```

**Solution**

```
(

4,

5,

6

)
```

---

### Example 6

Determine the octant of the point

```
(−3,4,5)
```

**Solution**

Signs

```
(−,+,+)
```

Hence, the point lies in the

**Second Octant**.

---

# Common Mistakes

- Interchanging the order of coordinates while plotting a point.
- Using the 2D distance formula instead of the 3D distance formula.
- Forgetting the square of the **z-coordinate** in the distance formula.
- Confusing coordinate planes with coordinate axes.
- Applying the midpoint formula instead of the section formula.
- Incorrectly identifying the octant based on the signs of the coordinates.
- Forgetting that points on the **XY-plane** have **z = 0**.
- Making arithmetic errors while finding the centroid.

---

# Formula Sheet

## Distance Between Two Points

```
√[(x₂−x₁)²

+

(y₂−y₁)²

+

(z₂−z₁)²]
```

---

## Distance from Origin

```
√(x²+y²+z²)
```

---

## Section Formula

```
(

(mx₂+nx₁)/(m+n),

(my₂+ny₁)/(m+n),

(mz₂+nz₁)/(m+n)

)
```

---

## Midpoint Formula

```
(

(x₁+x₂)/2,

(y₁+y₂)/2,

(z₁+z₂)/2

)
```

---

## Centroid of Triangle

```
(

(x₁+x₂+x₃)/3,

(y₁+y₂+y₃)/3,

(z₁+z₂+z₃)/3

)
```

---

## Coordinate Planes

```
XY-plane

z=0
```

```
YZ-plane

x=0
```

```
ZX-plane

y=0
```

---

# Chapter Summary

- The **three-dimensional coordinate system** uses three mutually perpendicular axes: **X-axis, Y-axis,** and **Z-axis**.
- A point in space is represented by an ordered triplet **(x, y, z)**.
- The three coordinate planes (**XY, YZ,** and **ZX**) divide space into **eight octants**, each identified by the signs of the coordinates.
- The **distance formula** in 3D extends the two-dimensional distance formula by including the difference in the z-coordinates.
- The **section formula** and **midpoint formula** help determine points that divide a line segment in a given ratio.
- The **centroid** of a triangle is obtained by taking the average of the coordinates of its three vertices.
- Three-dimensional geometry forms the basis for advanced topics such as vectors, planes, lines in space, and analytical geometry, with applications in engineering, science, and computer graphics.

# CBSE Class 11 Mathematics

# Chapter 12: Limits and Derivatives

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Limits and Derivatives

---

# Introduction

**Calculus** is one of the most important branches of mathematics. It deals with the study of **change** and **motion**. The concepts of **limits** and **derivatives** form the foundation of calculus and are extensively used in mathematics, physics, engineering, economics, and computer science.

A **limit** describes the value that a function approaches as the input approaches a particular value. A **derivative** measures the rate at which one quantity changes with respect to another and represents the slope of the tangent to a curve at a given point.

---

# 1. Limits

A **limit** is the value that a function approaches as the independent variable approaches a particular value.

If

```
f(x)
```

approaches

```
L
```

as

```
x → a
```

then we write

```
lim f(x) = L
x→a
```

---

## Example

```
lim (2x+3)
x→2
```

Substituting

```
x=2
```

gives

```
2(2)+3

=7
```

Therefore,

```
lim (2x+3)=7
x→2
```

---

# 2. Left-Hand Limit (LHL)

The **Left-Hand Limit** is the value approached by the function as

```
x
```

approaches

```
a
```

from the left side.

Notation

```
lim f(x)
x→a⁻
```

---

# 3. Right-Hand Limit (RHL)

The **Right-Hand Limit** is the value approached by the function as

```
x
```

approaches

```
a
```

from the right side.

Notation

```
lim f(x)
x→a⁺
```

---

# 4. Existence of a Limit

A limit exists only if

```
LHL = RHL
```

That is,

```
lim f(x)

=

lim f(x)
x→a⁻      x→a⁺
```

---

## Example

For

```
f(x)=|x|
```

at

```
x=0
```

```
LHL=0

RHL=0
```

Hence,

```
Limit exists.
```

---

# 5. Standard Limits

The following limits are very important.

### (i)

```
lim (sinx/x)

=1
x→0
```

---

### (ii)

```
lim (tanx/x)

=1
x→0
```

---

### (iii)

```
lim ((1−cosx)/x)

=0
x→0
```

---

### (iv)

```
lim ((1−cosx)/x²)

=1/2
x→0
```

---

### (v)

```
lim ((eˣ−1)/x)

=1
x→0
```

---

### (vi)

```
lim ((aˣ−1)/x)

=lna
x→0
```

where

```
a>0
```

---

# 6. Algebra of Limits

If

```
lim f(x)=L

and

lim g(x)=M
```

then

---

## Sum Rule

```
lim[f(x)+g(x)]

=L+M
```

---

## Difference Rule

```
lim[f(x)−g(x)]

=L−M
```

---

## Product Rule

```
lim[f(x)g(x)]

=LM
```

---

## Quotient Rule

```
lim[f(x)/g(x)]

=L/M
```

provided

```
M≠0
```

---

# 7. Derivative

The **derivative** of a function measures its **instantaneous rate of change**.

Geometrically, it represents the **slope of the tangent** to the curve.

---

## Definition

If

```
y=f(x)
```

then the derivative is

```
dy/dx

=

lim

[f(x+h)−f(x)]

/

h

h→0
```

---

## Alternative Notations

```
f'(x)
```

```
dy/dx
```

```
Dₓy
```

---

# 8. Derivative from First Principles

The derivative is obtained using the limit definition.

### Example

Find the derivative of

```
f(x)=x²
```

Using first principles,

```
f(x+h)

=(x+h)²
```

```
=x²+2xh+h²
```

```
f(x+h)−f(x)

=2xh+h²
```

```
Divide by h

=2x+h
```

Taking limit,

```
h→0
```

```
Derivative

=2x
```

---

# 9. Derivatives of Standard Functions

| Function | Derivative |
| -------- | ---------- |
| c        | 0          |
| x        | 1          |
| x²       | 2x         |
| x³       | 3x²        |
| xⁿ       | nxⁿ⁻¹      |
| sin x    | cos x      |
| cos x    | −sin x     |
| tan x    | sec²x      |
| eˣ       | eˣ         |
| aˣ       | aˣ ln a    |
| ln x     | 1/x        |

---

# 10. Differentiability

A function is **differentiable** at a point if its derivative exists there.

For differentiability,

- The function must be continuous.
- Left-hand derivative must equal right-hand derivative.

---

# 11. Relationship Between Continuity and Differentiability

```
Differentiable

⇒

Continuous
```

However,

```
Continuous

⇏

Differentiable
```

A continuous function may not be differentiable.

Example

```
f(x)=|x|
```

is continuous at

```
x=0
```

but not differentiable there because the left-hand and right-hand derivatives are different.

---

# 12. Geometrical Interpretation

The derivative at a point represents the **slope of the tangent** to the curve.

```
        Tangent

          /

         /

--------●------------

      Curve
```

- Positive derivative → Increasing function
- Negative derivative → Decreasing function
- Zero derivative → Horizontal tangent

---

# 13. Applications of Derivatives

Derivatives are used in:

- Finding slopes of curves
- Velocity and acceleration
- Optimization problems
- Economics
- Engineering
- Physics
- Computer graphics
- Machine learning

---

# Solved Examples

### Example 1

Evaluate

```
lim (3x+5)
x→2
```

**Solution**

```
=3(2)+5

=11
```

---

### Example 2

Evaluate

```
lim (sinx/x)
x→0
```

**Solution**

Using the standard limit,

```
=1
```

---

### Example 3

Find the derivative of

```
f(x)=x³
```

**Solution**

Using the power rule,

```
f'(x)

=3x²
```

---

### Example 4

Find the derivative of

```
sinx
```

**Solution**

```
d/dx(sinx)

=cosx
```

---

### Example 5

Find the derivative of

```
5x⁴
```

**Solution**

```
=20x³
```

---

### Example 6

Determine whether

```
f(x)=|x|
```

is differentiable at

```
x=0
```

**Solution**

Left-hand derivative

```
=−1
```

Right-hand derivative

```
=1
```

Since they are not equal,

```
The function is not differentiable.
```

---

# Common Mistakes

- Confusing **limits** with the actual value of a function.
- Forgetting to check whether **LHL = RHL** before concluding that a limit exists.
- Incorrectly applying standard limits.
- Forgetting that derivatives are defined using **limits**.
- Using the power rule incorrectly.
- Ignoring the chain of algebraic simplification while applying first principles.
- Assuming every continuous function is differentiable.
- Forgetting that the derivative of a constant is **zero**.

---

# Formula Sheet

## Limit Notation

```
lim f(x)
x→a
```

---

## Standard Limits

```
lim (sinx/x)

=1
x→0
```

```
lim (tanx/x)

=1
x→0
```

```
lim ((1−cosx)/x²)

=1/2
x→0
```

```
lim ((eˣ−1)/x)

=1
x→0
```

---

## Derivative Definition

```
dy/dx

=

lim

[f(x+h)−f(x)]

/

h

h→0
```

---

## Power Rule

```
d/dx(xⁿ)

=nxⁿ⁻¹
```

---

## Standard Derivatives

```
d/dx(c)

=0
```

```
d/dx(x)

=1
```

```
d/dx(sinx)

=cosx
```

```
d/dx(cosx)

=−sinx
```

```
d/dx(tanx)

=sec²x
```

```
d/dx(eˣ)

=eˣ
```

```
d/dx(lnx)

=1/x
```

---

# Chapter Summary

- A **limit** describes the value a function approaches as the independent variable approaches a specified point.
- A limit exists only when the **left-hand limit (LHL)** and the **right-hand limit (RHL)** are equal.
- Several **standard limits**, especially trigonometric and exponential limits, are fundamental tools in calculus.
- A **derivative** measures the **instantaneous rate of change** of a function and represents the **slope of the tangent** to its graph.
- The derivative is defined using the **first principle**, which is based on the concept of limits.
- Standard derivative formulas simplify the differentiation of common algebraic, trigonometric, exponential, and logarithmic functions.
- Every **differentiable** function is **continuous**, but the converse is not always true.
- Limits and derivatives provide the foundation for advanced calculus and have numerous applications in mathematics, science, engineering, economics, and technology.

# CBSE Class 11 Mathematics

# Chapter 13: Statistics

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Statistics

---

# Introduction

**Statistics** is the branch of mathematics that deals with the **collection, organization, presentation, analysis, and interpretation of data**. It helps in drawing meaningful conclusions from numerical information and plays an important role in economics, business, science, medicine, education, engineering, and social sciences.

In this chapter, we study methods of organizing data and calculating important statistical measures such as **mean**, **median**, and **mode**, with special emphasis on grouped data.

---

# 1. Data

**Data** refers to a collection of facts, observations, or measurements gathered for analysis.

### Examples

- Marks of students
- Heights of plants
- Daily temperatures
- Population of cities
- Monthly rainfall

---

## Types of Data

### (A) Primary Data

Data collected directly by the investigator for a specific purpose.

**Examples**

- Survey responses
- Experimental observations
- Classroom test scores collected by a teacher

---

### (B) Secondary Data

Data collected by someone else and used for analysis.

**Examples**

- Census reports
- Government publications
- Newspapers
- Research journals

---

# 2. Presentation of Data

Data can be presented in different forms.

### (A) Ungrouped Data

Individual observations are listed separately.

**Example**

```
12, 15, 18, 20, 25
```

---

### (B) Grouped Data

Data is organized into class intervals.

| Class Interval | Frequency |
| -------------- | --------: |
| 0–10           |         4 |
| 10–20          |         8 |
| 20–30          |        10 |
| 30–40          |         6 |

---

# 3. Frequency Distribution

A **frequency distribution** shows how many observations fall into each class interval.

### Terms Used

- Class Interval
- Lower Limit
- Upper Limit
- Class Width
- Frequency
- Cumulative Frequency
- Class Mark (Midpoint)

---

## Class Mark

The class mark is the midpoint of a class interval.

### Formula

```
Class Mark

=

(Lower Limit + Upper Limit)

/

2
```

---

## Example

For the class interval

```
20–30
```

```
Class Mark

=

20+30

/

2

=25
```

---

# 4. Measures of Central Tendency

A measure of central tendency represents the central or typical value of a dataset.

The three important measures are:

- Mean
- Median
- Mode

---

# 5. Arithmetic Mean

The **Arithmetic Mean** is the average of all observations.

---

## (A) Mean of Ungrouped Data

### Formula

```
Mean

=

Σx

/

n
```

where

- Σx = Sum of observations
- n = Number of observations

---

## Example

Find the mean of

```
5,7,9,11
```

```
Mean

=

32/4

=8
```

---

# 6. Mean of Grouped Data

For grouped data,

```
Mean

=

Σfx

/

Σf
```

where

- f = Frequency
- x = Class mark

---

## Step-Deviation Method

This method simplifies calculations when class intervals are equal.

### Formula

```
Mean

=

A

+

(Σfu/Σf)×h
```

where

- A = Assumed Mean
- h = Class width
- u = (x − A)/h

---

# 7. Median

The **Median** is the middle value of the data when arranged in ascending or descending order.

---

## Median of Ungrouped Data

### If n is Odd

```
Median

=

(n+1)/2 th observation
```

---

### If n is Even

```
Median

=

Average of

n/2 th

and

(n/2+1) th observations
```

---

# 8. Median of Grouped Data

### Formula

```
Median

=

l

+

[(N/2−cf)/f]

×h
```

where

- l = Lower boundary of median class
- N = Total frequency
- cf = Cumulative frequency before the median class
- f = Frequency of the median class
- h = Class width

---

# 9. Mode

The **Mode** is the value that occurs most frequently.

For grouped data,

### Formula

```
Mode

=

l

+

[(f₁−f₀)

/

(2f₁−f₀−f₂)]

×h
```

where

- l = Lower boundary of modal class
- f₁ = Frequency of modal class
- f₀ = Frequency of preceding class
- f₂ = Frequency of succeeding class
- h = Class width

---

# 10. Empirical Relationship

For a moderately symmetrical distribution,

```
Mode

=

3 Median

−

2 Mean
```

or

```
Mean

−

Mode

=

3(Mean−Median)
```

---

# 11. Graphical Representation of Data

Statistics uses graphs to represent data visually.

Common graphs include:

- Histogram
- Frequency Polygon
- Frequency Curve
- Ogive (Cumulative Frequency Curve)

---

## Histogram

A histogram consists of adjoining rectangles whose heights are proportional to the frequencies.

```
Frequency

|

|      ████

|   ████████

| ███████████

+---------------------------->

      Class Intervals
```

---

## Frequency Polygon

A frequency polygon is obtained by joining the midpoints of the tops of histogram rectangles.

---

## Ogive

An ogive is a cumulative frequency curve used to determine the median graphically.

---

# 12. Comparison of Mean, Median and Mode

| Mean                       | Median              | Mode                 |
| -------------------------- | ------------------- | -------------------- |
| Arithmetic average         | Middle value        | Most frequent value  |
| Uses all observations      | Depends on position | Depends on frequency |
| Affected by extreme values | Less affected       | Not much affected    |

---

# 13. Applications of Statistics

Statistics is used in:

- Economics
- Banking
- Insurance
- Education
- Medical research
- Weather forecasting
- Business management
- Sports analysis
- Agriculture
- Government planning

---

# Solved Examples

### Example 1

Find the mean of

```
12,15,18,25
```

**Solution**

```
Mean

=

70/4

=17.5
```

---

### Example 2

Find the median of

```
4,6,8,10,12
```

**Solution**

There are

```
5
```

observations.

Median

```
3rd observation

=8
```

---

### Example 3

Find the mode of

```
3,5,5,5,6,7
```

**Solution**

The most frequent value is

```
5
```

Hence,

```
Mode=5
```

---

### Example 4

Find the class mark of

```
40–50
```

**Solution**

```
(40+50)/2

=45
```

---

### Example 5

The mean of five numbers is

```
18
```

Find their total.

**Solution**

```
Total

=

18×5

=90
```

---

### Example 6

If

```
Mean=25

Median=24
```

find the mode.

**Solution**

Using

```
Mode

=

3 Median

−

2 Mean
```

```
Mode

=

72−50

=22
```

---

# Common Mistakes

- Forgetting to arrange data before finding the median.
- Confusing **frequency** with **cumulative frequency**.
- Using class limits instead of **class boundaries** in the median and mode formulas.
- Calculating the class mark incorrectly.
- Applying the grouped-data formulas to ungrouped data.
- Ignoring the frequencies while calculating the mean.
- Using the empirical relationship for highly skewed distributions, where it may not be appropriate.
- Making arithmetic errors while computing cumulative frequencies.

---

# Formula Sheet

## Mean (Ungrouped)

```
Mean

=

Σx

/

n
```

---

## Mean (Grouped)

```
Mean

=

Σfx

/

Σf
```

---

## Step-Deviation Method

```
Mean

=

A

+

(Σfu/Σf)×h
```

---

## Class Mark

```
(Lower Limit+Upper Limit)

/

2
```

---

## Median (Grouped)

```
Median

=

l

+

[(N/2−cf)/f]

×h
```

---

## Mode (Grouped)

```
Mode

=

l

+

[(f₁−f₀)

/

(2f₁−f₀−f₂)]

×h
```

---

## Empirical Relationship

```
Mode

=

3 Median

−

2 Mean
```

---

# Chapter Summary

- **Statistics** deals with the collection, organization, presentation, analysis, and interpretation of data.
- Data may be **primary** or **secondary**, and can be presented in **grouped** or **ungrouped** form.
- A **frequency distribution** organizes data into class intervals with corresponding frequencies.
- The **Arithmetic Mean** represents the average value of the observations and can be calculated using direct or step-deviation methods.
- The **Median** is the middle value of an ordered dataset and is useful when data contains extreme values.
- The **Mode** is the most frequently occurring observation and is particularly useful for identifying the most common value in a dataset.
- The empirical relation **Mode = 3 Median − 2 Mean** provides a useful approximation for moderately symmetrical distributions.
- Graphical representations such as **histograms**, **frequency polygons**, and **ogives** help visualize and interpret data effectively.
- Statistics has widespread applications in science, business, economics, medicine, education, and public policy.

# CBSE Class 11 Mathematics

# Chapter 14: Probability

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Probability

---

# Introduction

**Probability** is the branch of mathematics that deals with the likelihood or chance of occurrence of an event. It provides a numerical measure of uncertainty and is widely used in statistics, economics, finance, engineering, medicine, artificial intelligence, weather forecasting, and everyday decision-making.

In this chapter, we study **random experiments**, **sample space**, **events**, **axioms of probability**, and important results related to the addition of probabilities.

---

# 1. Random Experiment

A **random experiment** is an experiment whose exact outcome cannot be predicted in advance, although all possible outcomes are known.

### Examples

- Tossing a coin
- Rolling a die
- Drawing a card from a deck
- Selecting a student at random
- Spinning a wheel

---

# 2. Trial and Outcome

### Trial

A **trial** is one performance of a random experiment.

### Outcome

The result obtained from a trial is called an **outcome**.

### Example

Experiment:

```
Rolling a die
```

Possible outcomes

```
1,2,3,4,5,6
```

---

# 3. Sample Space

The **sample space** is the set of all possible outcomes of a random experiment.

It is denoted by

```
S
```

### Examples

#### Tossing a Coin

```
S={H,T}
```

---

#### Tossing Two Coins

```
S={HH,HT,TH,TT}
```

---

#### Rolling a Die

```
S={1,2,3,4,5,6}
```

---

# 4. Event

An **event** is any subset of the sample space.

If

```
S={1,2,3,4,5,6}
```

then

```
E={2,4,6}
```

is the event of obtaining an even number.

---

# 5. Types of Events

---

## (A) Simple (Elementary) Event

An event containing only one outcome.

Example

```
{4}
```

---

## (B) Compound Event

An event containing more than one outcome.

Example

```
{2,4,6}
```

---

## (C) Sure Event

An event that always occurs.

```
P(S)=1
```

---

## (D) Impossible Event

An event that never occurs.

```
∅
```

```
P(∅)=0
```

---

## (E) Complementary Event

If

```
A
```

is an event,

its complement is

```
A'
```

or

```
Aᶜ
```

representing the event that

```
A
```

does not occur.

---

# 6. Algebra of Events

### Union

```
A∪B
```

Represents

```
A

or

B

or both
```

---

### Intersection

```
A∩B
```

Represents

```
Both

A

and

B
```

---

### Difference

```
A−B
```

Represents outcomes in

```
A

but not in

B
```

---

### Complement

```
A'
```

Represents outcomes not belonging to

```
A
```

---

# 7. Axiomatic Approach to Probability

Probability satisfies the following axioms.

---

## Axiom 1

For every event

```
A
```

```
P(A)≥0
```

---

## Axiom 2

The probability of the sample space is

```
P(S)=1
```

---

## Axiom 3

If

```
A

and

B
```

are mutually exclusive events,

then

```
P(A∪B)

=

P(A)+P(B)
```

---

# 8. Probability of an Event

If all outcomes are equally likely,

```
P(E)

=

Number of favourable outcomes

/

Total number of outcomes
```

---

## Example

Find the probability of obtaining an even number on a die.

Sample space

```
{1,2,3,4,5,6}
```

Favourable outcomes

```
{2,4,6}
```

```
P(E)

=

3/6

=1/2
```

---

# 9. Properties of Probability

---

## Property 1

```
0≤P(A)≤1
```

---

## Property 2

```
P(∅)=0
```

---

## Property 3

```
P(S)=1
```

---

## Property 4

```
P(A')

=

1−P(A)
```

---

## Property 5

If

```
A⊆B
```

then

```
P(A)

≤

P(B)
```

---

# 10. Addition Theorem of Probability

For any two events

```
A

and

B
```

```
P(A∪B)

=

P(A)

+

P(B)

−

P(A∩B)
```

---

## Special Case

If

```
A

and

B
```

are mutually exclusive,

```
P(A∩B)=0
```

Therefore,

```
P(A∪B)

=

P(A)

+

P(B)
```

---

# 11. Equally Likely Events

Two or more events are equally likely if each has the same probability.

### Example

Rolling a fair die

Each outcome has probability

```
1/6
```

---

# 12. Mutually Exclusive Events

Two events are **mutually exclusive** if they cannot occur simultaneously.

Example

On a die,

```
A={2}
```

```
B={5}
```

Both cannot occur in one roll.

---

# 13. Exhaustive Events

A set of events is exhaustive if together they include every possible outcome.

Example

Coin toss

```
{H,T}
```

---

# 14. Applications of Probability

Probability is used in:

- Insurance
- Banking
- Artificial Intelligence
- Machine Learning
- Medical diagnosis
- Weather forecasting
- Genetics
- Risk analysis
- Sports analytics
- Decision making

---

# Solved Examples

### Example 1

Find the probability of getting a head on tossing a coin.

**Solution**

Sample space

```
{H,T}
```

Favourable outcomes

```
{H}
```

```
P(H)

=

1/2
```

---

### Example 2

Find the probability of getting a prime number on a die.

**Solution**

Prime numbers

```
2,3,5
```

```
P

=

3/6

=1/2
```

---

### Example 3

A card is drawn from a standard deck of 52 cards. Find the probability of drawing an Ace.

**Solution**

Number of Aces

```
4
```

```
P

=

4/52

=1/13
```

---

### Example 4

If

```
P(A)=0.65
```

find

```
P(A')
```

**Solution**

```
P(A')

=

1−0.65

=0.35
```

---

### Example 5

If

```
P(A)=0.4

P(B)=0.3

P(A∩B)=0.1
```

find

```
P(A∪B)
```

**Solution**

```
0.4+0.3−0.1

=0.6
```

---

### Example 6

A die is rolled once. Find the probability of getting a number greater than 4.

**Solution**

Favourable outcomes

```
5,6
```

```
P

=

2/6

=1/3
```

---

# Common Mistakes

- Confusing the **sample space** with an **event**.
- Forgetting that the probability of an impossible event is **0**.
- Forgetting that the probability of a sure event is **1**.
- Using the addition theorem without subtracting the intersection for overlapping events.
- Assuming events are mutually exclusive when they are not.
- Counting favourable outcomes incorrectly.
- Forgetting to simplify probability fractions.
- Confusing complementary events with mutually exclusive events.

---

# Formula Sheet

## Probability

```
P(E)

=

Number of favourable outcomes

/

Total number of outcomes
```

---

## Complement Rule

```
P(A')

=

1−P(A)
```

---

## Addition Theorem

```
P(A∪B)

=

P(A)

+

P(B)

−

P(A∩B)
```

---

## Mutually Exclusive Events

```
P(A∪B)

=

P(A)

+

P(B)
```

---

## Probability Limits

```
0≤P(A)≤1
```

---

## Impossible Event

```
P(∅)=0
```

---

## Sure Event

```
P(S)=1
```

---

# Chapter Summary

- A **random experiment** is an experiment whose outcome cannot be predicted with certainty.
- The **sample space** is the set of all possible outcomes, while an **event** is any subset of the sample space.
- Events may be **simple**, **compound**, **sure**, **impossible**, **mutually exclusive**, **complementary**, or **exhaustive**.
- The **axiomatic approach** defines probability using three fundamental axioms, ensuring that every probability lies between **0 and 1**.
- For equally likely outcomes, the probability of an event is the ratio of favourable outcomes to the total number of outcomes.
- The **complement rule** and the **addition theorem** are essential tools for solving probability problems.
- Probability provides a mathematical framework for analyzing uncertainty and supports decision-making in science, engineering, economics, medicine, artificial intelligence, and everyday life.
