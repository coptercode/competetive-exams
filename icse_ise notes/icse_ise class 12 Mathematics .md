# ISC Class 12 Mathematics

# Chapter 1: Relations and Functions

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Relations and Functions

(Topics covered from uploaded ISC Class 12 Mathematics outline: equivalence relations, bijective mappings, composite functions, inverse functions, binary operations) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Relations and Functions** form the foundation of mathematical mappings. They describe how elements of one set are connected to elements of another set.

This chapter deals with:

- Relations between sets
- Types of relations
- Equivalence relations
- Functions and their classifications
- Composite functions
- Inverse functions
- Binary operations

These concepts are essential for **calculus, algebra, probability, computer science, and mathematical modelling**.

---

# 1. Sets and Ordered Pairs

## Set

A collection of well-defined objects is called a set.

Example:

```
A = {1,2,3,4}
```

---

# Ordered Pair

An ordered pair is represented as:

```
(a,b)
```

where:

- a → First component
- b → Second component

---

# Equality of Ordered Pairs

Two ordered pairs are equal if:

```
(a,b) = (c,d)
```

when:

```
a = c and b = d
```

---

# Cartesian Product of Sets

## Definition

The Cartesian product of two sets A and B is the set of all ordered pairs where the first element belongs to A and the second belongs to B.

---

# Formula

```
A × B = {(a,b): a∈A, b∈B}
```

---

# Example

Let:

```
A = {1,2}

B = {a,b}
```

Then:

```
A × B = {(1,a),(1,b),(2,a),(2,b)}
```

---

# Number of Elements

If:

```
n(A)=m

n(B)=n
```

Then:

```
n(A×B)=mn
```

---

# 2. Relation

## Definition

A relation from set A to set B is a subset of the Cartesian product:

```
R ⊆ A×B
```

---

# Domain, Codomain and Range

## Domain

The set of first elements of ordered pairs.

Example:

```
R={(1,a),(2,b),(3,c)}
```

Domain:

```
{1,2,3}
```

---

## Codomain

The complete second set.

---

## Range

The set of actual second elements appearing in the relation.

Range:

```
{a,b,c}
```

---

# 3. Types of Relations

---

# Empty Relation

A relation containing no ordered pairs.

```
R = φ
```

---

# Universal Relation

A relation containing all possible ordered pairs.

```
R=A×A
```

---

# Identity Relation

Every element is related to itself.

```
R={(a,a):a∈A}
```

Example:

```
A={1,2,3}

R={(1,1),(2,2),(3,3)}
```

---

# Inverse Relation

If:

```
(a,b)∈R
```

then:

```
(b,a)∈R⁻¹
```

---

# 4. Properties of Relations

A relation R on set A can have the following properties:

---

# Reflexive Relation

## Definition

A relation is reflexive if every element is related to itself.

Condition:

```
(a,a)∈R
```

for all:

```
a∈A
```

---

Example:

```
A={1,2,3}

R={(1,1),(2,2),(3,3)}
```

---

# Symmetric Relation

## Definition

A relation is symmetric if:

```
(a,b)∈R ⇒ (b,a)∈R
```

---

Example:

If:

```
(2,3)∈R
```

then:

```
(3,2)∈R
```

---

# Transitive Relation

## Definition

A relation is transitive if:

```
(a,b)∈R and (b,c)∈R

⇒

(a,c)∈R
```

---

Example:

If:

```
2>1

and

3>2
```

then:

```
3>1
```

---

# 5. Equivalence Relation

## Definition

A relation is called an equivalence relation if it is:

1. Reflexive
2. Symmetric
3. Transitive

---

# Example

Relation:

```
aRb if a-b is divisible by 2
```

is an equivalence relation.

---

# Equivalence Class

The set of all elements related to an element is called its equivalence class.

---

# Example

For integers:

```
[0]={..., -4,-2,0,2,4,...}
```

---

# Properties of Equivalence Classes

- Every element belongs to one equivalence class.
- Different classes do not overlap.
- They form partitions of the set.

---

# 6. Function

## Definition

A function is a special relation where every element of the domain has exactly one image in the codomain.

---

# Representation

```
f:A→B
```

means function from A to B.

---

# Conditions for Function

For every:

```
a∈A
```

there exists exactly one:

```
b∈B
```

such that:

```
f(a)=b
```

---

# Types of Functions

---

# One-One Function (Injective)

## Definition

Different elements of domain have different images.

Condition:

```
f(a)=f(b)

⇒

a=b
```

---

Example:

```
f(x)=2x
```

---

# Many-One Function

Different elements have the same image.

Example:

```
f(x)=x²
```

because:

```
f(2)=4

f(-2)=4
```

---

# Onto Function (Surjective)

## Definition

Every element of codomain has at least one pre-image.

Condition:

```
Range = Codomain
```

---

# Into Function

Range is a proper subset of codomain.

---

# Bijective Function

A function that is both:

- One-one
- Onto

---

# Important Result

Only bijective functions have inverses.

---

# 7. Composite Functions

## Definition

Combining two functions to form a new function.

---

If:

```
f:A→B

g:B→C
```

then:

```
gof:A→C
```

---

# Formula

```
(gof)(x)=g(f(x))
```

---

# Example

Let:

```
f(x)=x+2

g(x)=x²
```

Then:

```
(gof)(x)

= g(x+2)

= (x+2)²
```

---

# Properties

Generally:

```
fog ≠ gof
```

Composition is not commutative.

---

# 8. Inverse Function

## Definition

The inverse function reverses the mapping.

If:

```
f:A→B
```

then:

```
f⁻¹:B→A
```

---

# Condition

A function has an inverse only if it is bijective.

---

# Steps to Find Inverse

Example:

```
y=2x+3
```

Step 1:

Exchange x and y:

```
x=2y+3
```

Step 2:

Solve for y:

```
y=(x-3)/2
```

Therefore:

```
f⁻¹(x)=(x-3)/2
```

---

# Properties of Inverse Function

```
f(f⁻¹(x))=x
```

and

```
f⁻¹(f(x))=x
```

---

# 9. Binary Operations

## Definition

A binary operation on set A is a rule that combines two elements of A to produce another element of A.

---

# Representation

```
*:A×A→A
```

---

# Example

Addition on integers:

```
a*b=a+b
```

---

# Properties of Binary Operations

---

# Closure Property

If:

```
a,b∈A
```

then:

```
a*b∈A
```

---

# Commutative Property

```
a*b=b*a
```

---

# Associative Property

```
(a*b)*c=a*(b*c)
```

---

# Identity Element

An element e such that:

```
a*e=e*a=a
```

---

# Inverse Element

For element a:

```
a*a⁻¹=e
```

---

# ASCII Flowchart

```
          RELATIONS & FUNCTIONS
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
    Relations  Functions  Binary Ops
        │         │
        ▼         ▼
   Equivalence  Types
     Relation      │
        │          ▼
        ▼      Inverse
  Equivalence      │
     Class         ▼
              Composite
```

---

# Important Formulae

| Concept            | Formula          |
| ------------------ | ---------------- |
| Cartesian Product  | A×B={(a,b)}      |
| Number of Elements | n(A×B)=n(A)n(B)  |
| Function           | f:A→B            |
| Composite Function | (gof)(x)=g(f(x)) |
| Inverse Property   | f(f⁻¹(x))=x      |
| One-One Condition  | f(a)=f(b)⇒a=b    |
| Onto Condition     | Range=Codomain   |

---

# Solved Examples

## Example 1

Find Cartesian product:

```
A={1,2}

B={3,4}
```

Solution:

```
A×B={(1,3),(1,4),(2,3),(2,4)}
```

---

## Example 2

Check whether relation is reflexive:

```
R={(1,1),(2,2),(3,3)}
```

Solution:

All elements relate to themselves.

Therefore:

```
R is reflexive.
```

---

## Example 3

Find composite function.

Given:

```
f(x)=x+1

g(x)=2x
```

Solution:

```
(gof)(x)=g(x+1)

=2(x+1)

=2x+2
```

---

## Example 4

Find inverse:

```
f(x)=3x+2
```

Solution:

```
y=3x+2

x=3y+2

y=(x-2)/3
```

Therefore:

```
f⁻¹(x)=(x-2)/3
```

---

## Example 5

Check commutativity:

```
a*b=a+b
```

Solution:

```
a*b=a+b

b*a=b+a
```

Since:

```
a+b=b+a
```

Operation is commutative.

---

# Common Mistakes

- Confusing relation with function.
- Forgetting that every function is a relation but every relation is not a function.
- Checking only one condition for equivalence relation.
- Finding inverse without checking bijectivity.
- Assuming composite functions are commutative.
- Confusing range and codomain.

---

# Exam Tips

- Practice proving equivalence relations.
- Memorize conditions for injective, surjective, and bijective functions.
- Solve composite function problems carefully.
- Practice inverse function derivations.
- Learn binary operation properties with examples.

---

# Quick Revision

- Relation:

```
R⊆A×B
```

- Function:

```
Every input has exactly one output.
```

- Equivalence relation:

```
Reflexive + Symmetric + Transitive
```

- Bijective function:

```
One-one + Onto
```

- Composite:

```
(gof)(x)=g(f(x))
```

- Inverse exists only for bijective functions.

- Binary operation:

```
*:A×A→A
```

---

# Chapter Summary

- **Relations** describe connections between elements of sets, while **functions** represent special relations where each input has exactly one output.
- Relations can be classified as **reflexive, symmetric, transitive, and equivalence relations**.
- Functions are categorized into **injective, surjective, and bijective mappings**, with bijective functions having unique inverse functions.
- **Composite functions** combine multiple mappings, while **inverse functions** reverse the original mapping.
- **Binary operations** study algebraic structures through properties like closure, associativity, commutativity, identity, and inverse.
- These concepts form the foundation for advanced topics including **calculus, linear algebra, probability, computer science, and abstract mathematics**.

# ISC Class 12 Mathematics

# Chapter 2: Inverse Trigonometric Functions

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Inverse Trigonometric Functions

(Topics covered from uploaded ISC Class 12 Mathematics outline: principal value branches, inverse trigonometric identities, sum and difference identities, equation solving, and trigonometric substitutions) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Inverse Trigonometric Functions** are functions that give the angle corresponding to a given trigonometric ratio.

If:

```
sin θ = x
```

then:

```
θ = sin⁻¹x
```

The inverse function gives the value of the angle.

This chapter focuses on:

- Definition of inverse trigonometric functions
- Principal values
- Domains and ranges
- Basic identities
- Addition and subtraction formulas
- Solving inverse trigonometric equations

---

# 1. Basic Concept of Inverse Functions

If:

```
f(x)=y
```

then inverse function is:

```
f⁻¹(y)=x
```

---

# Example

Given:

```
sin 30° = 1/2
```

Therefore:

```
sin⁻¹(1/2)=30°
```

---

# Important Note

Trigonometric functions are not one-one over their complete domains.

Therefore, their domains are restricted to define inverses.

---

# 2. Principal Value

## Definition

The unique value of angle chosen from a restricted interval is called the **principal value**.

---

# Principal Value Branches

## 1. Sine Function

For:

```
y = sin⁻¹x
```

Domain:

```
[-1,1]
```

Range:

```
[-π/2, π/2]
```

---

## 2. Cosine Function

For:

```
y = cos⁻¹x
```

Domain:

```
[-1,1]
```

Range:

```
[0,π]
```

---

## 3. Tangent Function

For:

```
y = tan⁻¹x
```

Domain:

```
(-∞,∞)
```

Range:

```
(-π/2,π/2)
```

---

## 4. Cotangent Function

```
y = cot⁻¹x
```

Domain:

```
(-∞,∞)
```

Range:

```
(0,π)
```

---

## 5. Secant Function

```
y = sec⁻¹x
```

Domain:

```
(-∞,-1]∪[1,∞)
```

Range:

```
[0,π]-{π/2}
```

---

## 6. Cosecant Function

```
y = cosec⁻¹x
```

Domain:

```
(-∞,-1]∪[1,∞)
```

Range:

```
[-π/2,π/2]-{0}
```

---

# 3. Graphs of Inverse Trigonometric Functions

## sin⁻¹x

```
Range:
-π/2 ≤ y ≤ π/2
```

---

## cos⁻¹x

```
Range:
0 ≤ y ≤ π
```

---

## tan⁻¹x

```
Range:
-π/2 < y < π/2
```

---

# 4. Basic Inverse Trigonometric Values

| Function  | Value |
| --------- | ----- |
| sin⁻¹(0)  | 0     |
| sin⁻¹(1)  | π/2   |
| sin⁻¹(-1) | -π/2  |
| cos⁻¹(1)  | 0     |
| cos⁻¹(0)  | π/2   |
| cos⁻¹(-1) | π     |
| tan⁻¹(0)  | 0     |
| tan⁻¹(1)  | π/4   |

---

# 5. Important Identities

---

# Identity 1

```
sin⁻¹x + cos⁻¹x = π/2
```

---

# Identity 2

```
tan⁻¹x + cot⁻¹x = π/2
```

---

# Identity 3

```
sec⁻¹x = cos⁻¹(1/x)
```

---

# Identity 4

```
cosec⁻¹x = sin⁻¹(1/x)
```

---

# 6. Negative Angle Properties

---

## Sine

```
sin⁻¹(-x) = -sin⁻¹x
```

---

## Tangent

```
tan⁻¹(-x)= -tan⁻¹x
```

---

## Cosine

```
cos⁻¹(-x)=π-cos⁻¹x
```

---

# 7. Addition Formulae

---

# Tangent Addition Formula

```
tan⁻¹x + tan⁻¹y

=

tan⁻¹((x+y)/(1-xy))
```

when:

```
xy<1
```

---

# Tangent Subtraction Formula

```
tan⁻¹x - tan⁻¹y

=

tan⁻¹((x-y)/(1+xy))
```

---

# Example

Simplify:

```
tan⁻¹(1/2)+tan⁻¹(1/3)
```

Solution:

Using formula:

```
=tan⁻¹((1/2+1/3)/(1-1/6))
```

```
=tan⁻¹((5/6)/(5/6))
```

```
=tan⁻¹(1)
```

Therefore:

```
=π/4
```

---

# 8. Double Angle Formula

```
2tan⁻¹x

=

tan⁻¹(2x/(1-x²))
```

---

# 9. Converting Trigonometric Equations

Inverse equations can be solved by converting them into normal trigonometric equations.

---

# Example

Solve:

```
sin⁻¹x = π/6
```

Taking sine:

```
x = sin π/6
```

Therefore:

```
x=1/2
```

---

# 10. Important Results

---

## Result 1

```
sin⁻¹(sin x)=x
```

only when:

```
-π/2 ≤ x ≤ π/2
```

---

## Result 2

```
cos⁻¹(cos x)=x
```

only when:

```
0≤x≤π
```

---

## Result 3

```
tan⁻¹(tan x)=x
```

only when:

```
-π/2<x<π/2
```

---

# 11. Trigonometric Substitution

Used to simplify algebraic expressions.

---

# Substitution 1

If:

```
x=sinθ
```

then:

```
√(1-x²)=cosθ
```

---

# Substitution 2

If:

```
x=tanθ
```

then:

```
√(1+x²)=secθ
```

---

# Applications

- Integration.
- Calculus.
- Coordinate geometry.
- Engineering mathematics.

---

# ASCII Flowchart

```
       INVERSE TRIGONOMETRIC FUNCTIONS
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
 Principal      Identities    Equations
 Values             │
        │           ▼
        ▼      Addition Formula
  Domain &
   Range
        │
        ▼
 Substitution
```

---

# Important Formulae

| Concept         | Formula             |
| --------------- | ------------------- |
| sin⁻¹x + cos⁻¹x | π/2                 |
| tan⁻¹x + cot⁻¹x | π/2                 |
| tan Addition    | tan⁻¹((x+y)/(1-xy)) |
| tan Subtraction | tan⁻¹((x-y)/(1+xy)) |
| Double Angle    | tan⁻¹(2x/(1-x²))    |
| sec⁻¹x          | cos⁻¹(1/x)          |
| cosec⁻¹x        | sin⁻¹(1/x)          |

---

# Solved Examples

## Example 1

Find:

```
sin⁻¹(1/2)
```

Solution:

We know:

```
sin 30°=1/2
```

Therefore:

```
sin⁻¹(1/2)=π/6
```

Answer:

```
π/6
```

---

## Example 2

Simplify:

```
cos⁻¹(1/2)
```

Solution:

```
cos 60°=1/2
```

Therefore:

```
=π/3
```

---

## Example 3

Evaluate:

```
tan⁻¹1 + tan⁻¹1
```

Solution:

```
=π/4+π/4
```

```
=π/2
```

---

## Example 4

Prove:

```
sin⁻¹x+cos⁻¹x=π/2
```

Solution:

Let:

```
θ=sin⁻¹x
```

Then:

```
sinθ=x
```

Therefore:

```
cos(π/2-θ)=x
```

Hence:

```
cos⁻¹x=π/2-θ
```

Therefore:

```
sin⁻¹x+cos⁻¹x=π/2
```

---

## Example 5

Find:

```
tan⁻¹(1/2)+tan⁻¹(1/3)
```

Solution:

Using formula:

```
=tan⁻¹((1/2+1/3)/(1-1/6))
```

```
=tan⁻¹1
```

Answer:

```
π/4
```

---

# Common Mistakes

- Forgetting principal value ranges.
- Treating inverse functions as reciprocal functions.
- Using identities without checking domain.
- Ignoring quadrant conditions.
- Confusing:

```
sin⁻¹x ≠ 1/sinx
```

---

# Exam Tips

- Memorize domain and range of all inverse functions.
- Practice proving inverse trigonometric identities.
- Learn tangent addition and subtraction formulas.
- Solve problems involving principal values.
- Carefully check angle ranges before simplifying.

---

# Quick Revision

- Inverse functions give angles from ratios.
- Principal values restrict the range.
-

```
sin⁻¹x+cos⁻¹x=π/2
```

-

```
tan⁻¹x+cot⁻¹x=π/2
```

-

```
tan⁻¹x±tan⁻¹y
```

use addition formulas.

- Inverse functions exist only for restricted domains.

---

# Chapter Summary

- **Inverse trigonometric functions** provide the inverse relationship between trigonometric ratios and angles.
- Since trigonometric functions are periodic, suitable restrictions are applied to define unique **principal values**.
- Important identities such as **sin⁻¹x + cos⁻¹x = π/2** simplify complex expressions.
- Addition and subtraction formulas of **tan⁻¹x** are widely used in solving algebraic and trigonometric equations.
- These concepts are essential for higher mathematics, especially **calculus, integration, geometry, physics, and engineering applications**.

# ISC Class 12 Mathematics

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

# Chapter 4: Continuity, Differentiability and Differentiation

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Continuity, Differentiability and Differentiation

(Topics covered from uploaded ISC Class 12 Mathematics outline: piecewise continuity, implicit differentiation, parametric differentiation, logarithmic differentiation, second-order derivatives, and Mean Value Theorems) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Continuity and Differentiability** are fundamental concepts of calculus. They describe how functions behave and how smoothly they change.

This chapter deals with:

- Limits and continuity
- Differentiability of functions
- Derivative rules
- Implicit differentiation
- Parametric differentiation
- Logarithmic differentiation
- Second-order derivatives
- Mean Value Theorems

These concepts are essential for **physics, engineering, economics, statistics, and optimization problems**.

---

# 1. Limits

## Definition

The limit of a function describes the value that a function approaches as the variable approaches a particular point.

---

# Notation

```
lim f(x)=L
x→a
```

Means:

As x approaches a, f(x) approaches L.

---

# Left-Hand Limit (LHL)

Limit when x approaches from the left side.

```
lim f(x)
x→a⁻
```

---

# Right-Hand Limit (RHL)

Limit when x approaches from the right side.

```
lim f(x)
x→a⁺
```

---

# Existence of Limit

A limit exists if:

```
LHL = RHL
```

---

# Important Limit Results

## 1.

```
lim sinx/x = 1
x→0
```

---

## 2.

```
lim (1−cosx)/x² = 1/2
x→0
```

---

## 3.

```
lim (eˣ−1)/x = 1
x→0
```

---

# 2. Continuity

## Definition

A function is continuous at x=a if:

```
lim f(x)=f(a)
x→a
```

---

# Conditions for Continuity

A function is continuous if:

### 1.

Left limit exists

```
LHL
```

### 2.

Right limit exists

```
RHL
```

### 3.

Both are equal to function value

```
LHL=RHL=f(a)
```

---

# Types of Discontinuity

---

## Removable Discontinuity

The limit exists but function value is different.

---

## Jump Discontinuity

Left and right limits are different.

---

## Infinite Discontinuity

Function approaches infinity.

---

# 3. Continuity of Piecewise Functions

For a piecewise function:

```
f(x)=
{
expression 1, x<a

expression 2, x≥a
}
```

Check:

```
LHL = RHL = f(a)
```

---

# Example

Find k for continuity:

```
f(x)=
{
kx+1 , x<2

5 , x≥2
}
```

At x=2:

LHL:

```
2k+1
```

RHL:

```
5
```

Therefore:

```
2k+1=5
```

```
k=2
```

---

# 4. Differentiability

## Definition

A function is differentiable if its derivative exists at every point.

---

# Derivative Definition

```
f'(x)=lim [f(x+h)-f(x)]/h
h→0
```

---

# Relation Between Continuity and Differentiability

```
Differentiability ⇒ Continuity
```

But:

```
Continuity ⇏ Differentiability
```

---

# Example

```
f(x)=|x|
```

is continuous but not differentiable at x=0.

---

# 5. Basic Differentiation Rules

---

# Constant Rule

```
d(c)/dx = 0
```

---

# Power Rule

```
d(xⁿ)/dx = nxⁿ⁻¹
```

---

# Sum Rule

```
d(u+v)/dx=u'+v'
```

---

# Product Rule

For:

```
y=uv
```

Derivative:

```
dy/dx=u(dv/dx)+v(du/dx)
```

---

# Quotient Rule

For:

```
y=u/v
```

Derivative:

```
dy/dx=(vdu/dx−udv/dx)/v²
```

---

# Chain Rule

For:

```
y=f(g(x))
```

```
dy/dx=f'(g(x))g'(x)
```

---

# 6. Derivatives of Standard Functions

---

## Trigonometric Functions

```
d(sinx)/dx=cosx
```

```
d(cosx)/dx=-sinx
```

```
d(tanx)/dx=sec²x
```

---

## Exponential Functions

```
d(eˣ)/dx=eˣ
```

---

## Logarithmic Functions

```
d(logx)/dx=1/x
```

---

# 7. Implicit Differentiation

## Definition

When x and y are mixed together and y cannot be separated easily, implicit differentiation is used.

---

# Example

Given:

```
x²+y²=25
```

Differentiate:

```
2x+2y(dy/dx)=0
```

Therefore:

```
dy/dx=-x/y
```

---

# 8. Parametric Differentiation

If:

```
x=f(t)

y=g(t)
```

then:

```
dy/dx=(dy/dt)/(dx/dt)
```

---

# Example

Given:

```
x=t²

y=t³
```

Then:

```
dx/dt=2t

dy/dt=3t²
```

Therefore:

```
dy/dx=3t/2
```

---

# 9. Logarithmic Differentiation

Used for functions where variable appears in both base and power.

Example:

```
y=xˣ
```

Taking log:

```
logy=xlogx
```

Differentiate:

```
1/y dy/dx=logx+1
```

Therefore:

```
dy/dx=xˣ(logx+1)
```

---

# Applications

- Exponential functions.
- Products of powers.
- Complex algebraic functions.

---

# 10. Second Order Derivative

## Definition

The derivative of the first derivative is called the second derivative.

---

# Notation

```
d²y/dx²
```

---

# Example

If:

```
y=x³
```

First derivative:

```
dy/dx=3x²
```

Second derivative:

```
d²y/dx²=6x
```

---

# Applications

- Acceleration calculations.
- Maxima and minima.
- Curve analysis.

---

# 11. Rolle's Theorem

## Statement

If a function satisfies:

1. Continuous on [a,b]
2. Differentiable on (a,b)
3. f(a)=f(b)

Then there exists at least one point c where:

```
f'(c)=0
```

---

# Graphically

```
      •
     / \
----/---\----
   a     b

At c:

slope = 0
```

---

# 12. Lagrange's Mean Value Theorem

## Statement

If a function is continuous on [a,b] and differentiable on (a,b), then:

There exists c such that:

```
f'(c)=
[f(b)-f(a)]/(b-a)
```

---

# Geometrical Meaning

At some point:

```
Tangent slope = Chord slope
```

---

# Difference Between Rolle's and Lagrange's Theorem

| Rolle's Theorem | Lagrange's Theorem |
| --------------- | ------------------ |
| f(a)=f(b)       | No such condition  |
| f'(c)=0         | f'(c)=slope        |
| Special case    | General theorem    |

---

# ASCII Flowchart

```
       CONTINUITY & DIFFERENTIABILITY
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
     Limits    Continuity   Derivatives
       │            │            │
       ▼            ▼            ▼
 Piecewise     Differentiability  Rules
       │
       ▼
 Mean Value Theorems
       │
       ▼
 Applications
```

---

# Important Formulae

| Concept               | Formula                 |
| --------------------- | ----------------------- |
| Limit Definition      | lim f(x)=L              |
| Continuity            | lim f(x)=f(a)           |
| Derivative            | lim[f(x+h)-f(x)]/h      |
| Power Rule            | nxⁿ⁻¹                   |
| Product Rule          | uv'+vu'                 |
| Quotient Rule         | (vu'-uv')/v²            |
| Chain Rule            | f'(g(x))g'(x)           |
| Parametric Derivative | dy/dx=(dy/dt)/(dx/dt)   |
| Second Derivative     | d²y/dx²                 |
| Rolle's Theorem       | f'(c)=0                 |
| Lagrange MVT          | f'(c)=[f(b)-f(a)]/(b-a) |

---

# Solved Examples

## Example 1

Check continuity:

```
f(x)=x²
```

at x=2.

Solution:

```
lim x²=x²
x→2
```

```
=4
```

Function value:

```
f(2)=4
```

Therefore:

```
Continuous at x=2
```

---

## Example 2

Differentiate:

```
y=x³+5x²
```

Solution:

```
dy/dx=3x²+10x
```

---

## Example 3

Find derivative:

```
y=sinx cosx
```

Using product rule:

```
dy/dx=
sinx(-sinx)+cosx(cosx)
```

Therefore:

```
=cos²x−sin²x
```

---

## Example 4

Find dy/dx:

```
x²+y²=16
```

Solution:

```
2x+2y dy/dx=0
```

Therefore:

```
dy/dx=-x/y
```

---

## Example 5

Verify Rolle's theorem for:

```
f(x)=x²−4x+3
```

on [1,3].

Since:

```
f(1)=0
```

and:

```
f(3)=0
```

Conditions satisfied.

Derivative:

```
f'(x)=2x−4
```

For Rolle:

```
2c−4=0
```

Therefore:

```
c=2
```

---

# Common Mistakes

- Confusing continuity with differentiability.
- Forgetting domain restrictions.
- Applying product rule incorrectly.
- Missing dy/dx terms in implicit differentiation.
- Using MVT without checking conditions.
- Forgetting chain rule.

---

# Exam Tips

- Practice continuity problems involving piecewise functions.
- Memorize derivative formulas.
- Practice implicit and logarithmic differentiation.
- Learn conditions of Rolle's and Lagrange's theorem.
- Solve problems on second-order derivatives.

---

# Quick Revision

- Continuity:

```
lim f(x)=f(a)
```

- Differentiability means derivative exists.
- Differentiability always implies continuity.
- Chain rule:

```
dy/dx=f'(g(x))g'(x)
```

- Parametric:

```
dy/dx=(dy/dt)/(dx/dt)
```

- Rolle:

```
f'(c)=0
```

- Lagrange:

```
f'(c)= [f(b)-f(a)]/(b-a)
```

---

# Chapter Summary

- **Continuity** describes whether a function has no breaks, while **differentiability** measures the rate of change of a function.
- Differentiation provides tools for finding slopes, rates, and changing quantities.
- Advanced techniques such as **implicit differentiation, parametric differentiation, and logarithmic differentiation** help solve complex functions.
- **Second-order derivatives** describe changing rates and are important in physics and optimization.
- **Mean Value Theorems** connect derivatives with average rates of change and form the foundation of advanced calculus.
- These concepts are widely applied in **engineering, economics, physics, data science, and mathematical modelling**.

# ISC Class 12 Mathematics

# Chapter 5: Applications of Derivatives

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Applications of Derivatives

(Topics covered from uploaded ISC Class 12 Mathematics outline: increasing/decreasing functions, maxima and minima, optimization problems, and rate of change applications) :contentReference[oaicite:0]{index=0}

---

# Introduction

The **derivative** of a function represents the rate at which one quantity changes with respect to another.

Applications of derivatives help us understand:

- Increasing and decreasing behaviour of functions
- Maximum and minimum values
- Tangents and normals
- Optimization problems
- Rates of change

These concepts are widely used in:

- Engineering
- Physics
- Economics
- Business optimization
- Data science

---

# 1. Rate of Change

## Definition

The derivative represents the instantaneous rate of change of one variable with respect to another.

---

If:

```
y=f(x)
```

then rate of change of y with respect to x is:

```
dy/dx
```

---

# Example

If distance:

```
s=f(t)
```

then:

Velocity:

```
v=ds/dt
```

Acceleration:

```
a=d²s/dt²
```

---

# 2. Geometrical Meaning of Derivative

The derivative at a point gives the:

**Slope of tangent to the curve at that point.**

---

Formula:

```
Slope = dy/dx
```

---

# Tangent

A line touching a curve at one point.

---

# Normal

A line perpendicular to tangent.

---

# Relation Between Tangent and Normal

If tangent slope:

```
m
```

then normal slope:

```
-1/m
```

---

# Equation of Tangent

At point:

```
(x₁,y₁)
```

Formula:

```
y-y₁=m(x-x₁)
```

where:

```
m=dy/dx
```

---

# Equation of Normal

```
y-y₁=-1/m(x-x₁)
```

---

# 3. Increasing and Decreasing Functions

A function may increase or decrease depending on the sign of its derivative.

---

# Increasing Function

A function is increasing if:

```
f'(x)>0
```

---

Meaning:

As x increases, y increases.

---

# Decreasing Function

A function is decreasing if:

```
f'(x)<0
```

---

Meaning:

As x increases, y decreases.

---

# Constant Function

If:

```
f'(x)=0
```

---

# Example

Given:

```
f(x)=x²
```

Derivative:

```
f'(x)=2x
```

For:

```
x>0
```

```
f'(x)>0
```

Function increases.

For:

```
x<0
```

```
f'(x)<0
```

Function decreases.

---

# 4. Critical Points

## Definition

Points where:

```
f'(x)=0
```

or derivative does not exist.

---

These points are candidates for:

- Maximum
- Minimum

---

# Example

For:

```
f(x)=x²-4x+3
```

Derivative:

```
f'(x)=2x-4
```

Put:

```
2x-4=0
```

Therefore:

```
x=2
```

Critical point:

```
x=2
```

---

# 5. Maxima and Minima

---

# Maximum Value

The highest value of a function in a given interval.

---

# Minimum Value

The lowest value of a function in a given interval.

---

# Local Maximum

Maximum value near a particular point.

---

# Local Minimum

Minimum value near a particular point.

---

# 6. First Derivative Test

Used to determine maxima and minima.

---

Steps:

### Step 1

Find:

```
f'(x)
```

---

### Step 2

Solve:

```
f'(x)=0
```

---

### Step 3

Check sign change.

---

# Conditions

## Maximum

Derivative changes:

```
+  →  -
```

---

## Minimum

Derivative changes:

```
-  →  +
```

---

# Example

Find maximum/minimum:

```
f(x)=x²-4x+3
```

Derivative:

```
f'(x)=2x-4
```

Critical point:

```
x=2
```

Second derivative:

```
f''(x)=2
```

Since:

```
f''(x)>0
```

Minimum exists.

Value:

```
f(2)=4-8+3
```

```
=-1
```

Minimum value:

```
-1
```

---

# 7. Second Derivative Test

If:

```
f'(x)=0
```

then examine:

```
f''(x)
```

---

# Conditions

## Maximum

```
f''(x)<0
```

---

## Minimum

```
f''(x)>0
```

---

## No conclusion

```
f''(x)=0
```

---

# 8. Optimization Problems

## Definition

Finding the maximum or minimum value of a quantity under given conditions.

---

# Steps

### Step 1

Define variables.

---

### Step 2

Create equation.

---

### Step 3

Differentiate.

---

### Step 4

Find critical points.

---

### Step 5

Check maximum/minimum.

---

# Example Applications

- Maximum area.
- Minimum cost.
- Maximum profit.
- Minimum distance.

---

# 9. Approximation Using Differentials

For small changes:

```
dy=f'(x)dx
```

---

# Approximate Change

```
Δy≈dy
```

---

# Example

Find approximate change in:

```
√x
```

when x changes slightly.

---

# 10. Rolle's Theorem Application

If:

```
f'(c)=0
```

then c may represent:

- Maximum point
- Minimum point

---

# 11. Mean Value Theorem Application

Derivative gives average rate of change.

Formula:

```
f'(c)=
[f(b)-f(a)]/(b-a)
```

---

# 12. Derivatives in Economics

---

# Cost Function

```
C(x)
```

Marginal cost:

```
MC=dC/dx
```

---

# Revenue Function

```
R(x)
```

Marginal revenue:

```
MR=dR/dx
```

---

# Profit Function

```
P=R-C
```

Maximum profit occurs when:

```
dP/dx=0
```

---

# 13. Motion Applications

If:

Position:

```
s(t)
```

Velocity:

```
v=ds/dt
```

Acceleration:

```
a=dv/dt
```

---

# 14. Linear Approximation

For small changes:

```
f(x+Δx)

≈

f(x)+f'(x)Δx
```

---

# ASCII Flowchart

```
        APPLICATIONS OF DERIVATIVES
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
   Rate Change  Increasing   Max-Min
       │            │            │
       ▼            ▼            ▼
 Velocity      f'(x)>0     Optimization
       │
       ▼
 Tangent & Normal
```

---

# Important Formulae

| Concept              | Formula      |
| -------------------- | ------------ |
| Rate of Change       | dy/dx        |
| Tangent Slope        | m=dy/dx      |
| Tangent Equation     | y-y₁=m(x-x₁) |
| Normal Slope         | -1/m         |
| Increasing           | f'(x)>0      |
| Decreasing           | f'(x)<0      |
| Critical Point       | f'(x)=0      |
| Maximum              | f''(x)<0     |
| Minimum              | f''(x)>0     |
| Differential         | dy=f'(x)dx   |
| Linear Approximation | f(x)+f'(x)Δx |

---

# Solved Examples

## Example 1

Find whether:

```
f(x)=x³
```

is increasing.

Solution:

Derivative:

```
f'(x)=3x²
```

Since:

```
3x²≥0
```

Function is increasing.

---

## Example 2

Find maximum/minimum of:

```
f(x)=x²+6x+5
```

Derivative:

```
f'(x)=2x+6
```

Put:

```
2x+6=0
```

```
x=-3
```

Second derivative:

```
f''(x)=2
```

Since positive:

Minimum.

Value:

```
f(-3)=9-18+5
```

```
=-4
```

Minimum value:

```
-4
```

---

## Example 3

Find tangent to:

```
y=x²
```

at x=2.

Derivative:

```
dy/dx=2x
```

Slope:

```
m=4
```

Point:

```
(2,4)
```

Equation:

```
y-4=4(x-2)
```

---

## Example 4

A particle moves:

```
s=t³-6t²+9t
```

Find velocity.

Solution:

```
v=ds/dt
```

```
v=3t²-12t+9
```

---

## Example 5

Find approximate change in:

```
y=x²
```

when x changes from 5 to 5.1.

Solution:

```
dy=2x dx
```

```
=2(5)(0.1)
```

```
=1
```

Approximate change:

```
1
```

---

# Common Mistakes

- Forgetting to check derivative sign.
- Confusing maximum with minimum.
- Using second derivative test incorrectly.
- Forgetting critical points where derivative does not exist.
- Incorrect tangent slope calculation.
- Not checking domain restrictions.

---

# Exam Tips

- Practice increasing/decreasing interval problems.
- Memorize maximum and minimum conditions.
- Solve optimization problems step-by-step.
- Practice tangent and normal equations.
- Learn applications of derivatives in physics and economics.

---

# Quick Revision

- Derivative gives rate of change.
- Tangent slope:

```
m=dy/dx
```

- Increasing:

```
f'(x)>0
```

- Decreasing:

```
f'(x)<0
```

- Maximum:

```
f''(x)<0
```

- Minimum:

```
f''(x)>0
```

- Critical point:

```
f'(x)=0
```

---

# Chapter Summary

- **Applications of Derivatives** explain how derivatives are used to study real-world changes.
- Derivatives help determine **rates of change, slopes of curves, tangent and normal equations**.
- The sign of the first derivative identifies whether a function is increasing or decreasing.
- Maximum and minimum concepts help solve optimization problems in mathematics and real-life situations.
- Derivatives are widely applied in **physics (motion), economics (profit/cost), engineering design, and scientific modelling**.

# ISC Class 12 Mathematics

# Chapter 6: Indefinite Integrals

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Indefinite Integrals

(Topics covered from uploaded ISC Class 12 Mathematics outline: integration techniques including substitution, integration by parts, partial fractions, and standard integral forms) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Integration** is the reverse process of differentiation. It is used to find the original function when its derivative is known.

If:

```
dy/dx = f(x)
```

then:

```
y = ∫f(x)dx
```

is called the integral of f(x).

---

# 1. Integration

## Definition

Integration is the process of finding a function whose derivative is given.

---

# Symbol

```
∫
```

is called the integration symbol.

---

# General Form

```
∫f(x)dx = F(x)+C
```

where:

- F(x) = Integral function
- C = Constant of integration

---

# Example

Since:

```
d/dx(x²)=2x
```

Therefore:

```
∫2x dx=x²+C
```

---

# 2. Indefinite Integral

## Definition

An integral without limits is called an indefinite integral.

---

Example:

```
∫x²dx
```

Solution:

```
=x³/3+C
```

---

# Difference Between Differentiation and Integration

| Differentiation  | Integration             |
| ---------------- | ----------------------- |
| Finds derivative | Finds original function |
| Decreases power  | Increases power         |
| No constant      | Includes constant C     |

---

# 3. Basic Properties of Integration

---

# Property 1

Integration of sum:

```
∫(f(x)+g(x))dx

=

∫f(x)dx+∫g(x)dx
```

---

# Property 2

Constant multiplication:

```
∫kf(x)dx

=

k∫f(x)dx
```

---

# Property 3

Difference:

```
∫(f(x)-g(x))dx

=

∫f(x)dx-∫g(x)dx
```

---

# 4. Standard Integrals

---

# Algebraic Functions

## Power Rule

```
∫xⁿdx = xⁿ⁺¹/(n+1)+C
```

where:

```
n≠-1
```

---

Example:

```
∫x³dx
```

Solution:

```
=x⁴/4+C
```

---

# 5. Trigonometric Integrals

---

## 1.

```
∫sinx dx=-cosx+C
```

---

## 2.

```
∫cosx dx=sinx+C
```

---

## 3.

```
∫sec²x dx=tanx+C
```

---

## 4.

```
∫cosec²x dx=-cotx+C
```

---

## 5.

```
∫secx tanx dx=secx+C
```

---

## 6.

```
∫cosecx cotx dx=-cosecx+C
```

---

# 6. Exponential Integrals

---

## 1.

```
∫eˣdx=eˣ+C
```

---

## 2.

```
∫aˣdx=aˣ/loga+C
```

---

# 7. Logarithmic Integral

```
∫1/x dx=log|x|+C
```

---

# 8. Substitution Method

## Definition

Used when one function is inside another function.

---

If:

```
u=g(x)
```

then:

```
∫f(g(x))g'(x)dx

=

∫f(u)du
```

---

# Example

Find:

```
∫2x(x²+1)³dx
```

Let:

```
u=x²+1
```

Then:

```
du=2xdx
```

Integral becomes:

```
∫u³du
```

```
=u⁴/4+C
```

Therefore:

```
=(x²+1)⁴/4+C
```

---

# 9. Integration by Parts

Used for integration of products.

---

# Formula

```
∫u dv = uv - ∫v du
```

---

# LIATE Rule

To choose u:

1. Logarithmic
2. Inverse trigonometric
3. Algebraic
4. Trigonometric
5. Exponential

---

# Example

Find:

```
∫x eˣ dx
```

Take:

```
u=x

dv=eˣdx
```

Then:

```
du=dx

v=eˣ
```

Using formula:

```
=x eˣ-∫eˣdx
```

```
=eˣ(x-1)+C
```

---

# 10. Integration by Partial Fractions

Used for rational functions:

```
P(x)/Q(x)
```

---

# Types

## Case 1

Different linear factors:

```
1/(x-a)(x-b)
```

---

## Case 2

Repeated factors:

```
1/(x-a)²
```

---

## Case 3

Quadratic factors:

```
1/(x²+a²)
```

---

# Example

Resolve:

```
1/(x²-1)
```

Factor:

```
(x-1)(x+1)
```

Then:

```
A/(x-1)+B/(x+1)
```

---

# 11. Important Standard Results

---

## Formula 1

```
∫dx/(x²+a²)

=

1/a tan⁻¹(x/a)+C
```

---

## Formula 2

```
∫dx/√(a²-x²)

=

sin⁻¹(x/a)+C
```

---

## Formula 3

```
∫dx/(a²-x²)

=

1/2a log|(a+x)/(a-x)|+C
```

---

# 12. Integration of Trigonometric Functions

---

## Formula

```
sin²x=(1-cos2x)/2
```

---

```
cos²x=(1+cos2x)/2
```

---

# Example

Find:

```
∫sin²x dx
```

Using identity:

```
=∫(1-cos2x)/2 dx
```

Therefore:

```
=x/2-sin2x/4+C
```

---

# 13. Definite vs Indefinite Integral

| Indefinite     | Definite              |
| -------------- | --------------------- |
| No limits      | Has limits            |
| Gives function | Gives numerical value |
| Contains C     | No constant           |

---

# 14. Applications of Indefinite Integrals

- Finding displacement from velocity.
- Finding velocity from acceleration.
- Area calculation.
- Solving differential equations.
- Physics modelling.

---

# ASCII Flowchart

```
             INDEFINITE INTEGRALS
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
    Standard     Methods     Properties
    Formulae        │
        │           ▼
        ▼      Substitution
 Integration        │
        │           ▼
        ▼      By Parts
    Applications
```

---

# Important Formulae

| Integral     | Result            |
| ------------ | ----------------- |
| ∫xⁿdx        | xⁿ⁺¹/(n+1)+C      |
| ∫1/x dx      | log               | x   | +C  |
| ∫eˣdx        | eˣ+C              |
| ∫sinx dx     | -cosx+C           |
| ∫cosx dx     | sinx+C            |
| ∫sec²x dx    | tanx+C            |
| ∫dx/(x²+a²)  | (1/a)tan⁻¹(x/a)+C |
| ∫dx/√(a²-x²) | sin⁻¹(x/a)+C      |
| ∫u dv        | uv-∫vdu           |

---

# Solved Examples

## Example 1

Find:

```
∫x⁴dx
```

Solution:

Using power rule:

```
=x⁵/5+C
```

Answer:

```
x⁵/5+C
```

---

## Example 2

Find:

```
∫cosx dx
```

Solution:

```
=sinx+C
```

---

## Example 3

Find:

```
∫2x/(x²+1)dx
```

Let:

```
u=x²+1
```

Then:

```
du=2xdx
```

Therefore:

```
=∫du/u
```

```
=log|u|+C
```

Answer:

```
log(x²+1)+C
```

---

## Example 4

Find:

```
∫xeˣdx
```

Using integration by parts:

```
=eˣ(x-1)+C
```

---

## Example 5

Find:

```
∫1/(1+x²)dx
```

Using formula:

```
=tan⁻¹x+C
```

---

# Common Mistakes

- Forgetting constant of integration.
- Applying power rule for n = -1.
- Choosing wrong substitution.
- Incorrect use of integration by parts.
- Missing absolute value in logarithmic integrals.
- Confusing differentiation and integration formulas.

---

# Exam Tips

- Memorize standard integrals.
- Practice substitution problems.
- Learn LIATE rule for integration by parts.
- Practice partial fraction decomposition.
- Always verify answers by differentiation.

---

# Quick Revision

- Integration is reverse differentiation.
- General form:

```
∫f(x)dx=F(x)+C
```

- Power rule:

```
∫xⁿdx=xⁿ⁺¹/(n+1)+C
```

- By parts:

```
∫u dv=uv-∫vdu
```

- Substitution simplifies composite functions.
- Partial fractions solve rational functions.

---

# Chapter Summary

- **Indefinite integration** is the reverse process of differentiation and is used to find original functions.
- Integration follows specific rules and standard formulas for algebraic, trigonometric, exponential, and logarithmic functions.
- Advanced techniques such as **substitution, integration by parts, and partial fractions** help solve complex integrals.
- Integration is a fundamental tool for finding **areas, displacement, velocity, and mathematical models**.
- These concepts form the basis for advanced calculus, physics, engineering, economics, and applied mathematics.

# ISC Class 12 Mathematics

# Chapter 7: Definite Integrals

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Definite Integrals

(Topics covered from uploaded ISC Class 12 Mathematics outline: properties of definite integrals, Fundamental Theorem of Calculus, evaluation methods, and applications in area calculation) :contentReference[oaicite:0]{index=0}

---

# Introduction

A **definite integral** is an integral with specified upper and lower limits. It represents the accumulated value of a function over a fixed interval.

Unlike indefinite integrals, definite integrals give a **numerical value** and do not contain the constant of integration.

---

# 1. Definition of Definite Integral

If:

```
F'(x)=f(x)
```

then:

```
∫ᵃᵇ f(x)dx = F(b)-F(a)
```

where:

- a = Lower limit
- b = Upper limit

---

# Notation

```
∫ᵃᵇ f(x)dx
```

means:

"The integral of f(x) from x=a to x=b."

---

# Example

Evaluate:

```
∫₀² x dx
```

Solution:

Integral:

```
x²/2
```

Applying limits:

```
=[x²/2]₀²
```

```
=4/2-0
```

```
=2
```

Answer:

```
2
```

---

# 2. Fundamental Theorem of Calculus

## Statement

The definite integral of a function can be calculated using its antiderivative.

---

Formula:

```
∫ᵃᵇ f(x)dx=F(b)-F(a)
```

where:

```
F'(x)=f(x)
```

---

# 3. Properties of Definite Integrals

---

# Property 1

Limits are equal:

```
∫ᵃᵃ f(x)dx=0
```

---

# Property 2

Changing limits changes sign:

```
∫ᵃᵇ f(x)dx
=
-∫ᵇᵃ f(x)dx
```

---

# Property 3

Splitting an integral:

```
∫ᵃᵇ f(x)dx

=

∫ᵃᶜ f(x)dx
+
∫ᶜᵇ f(x)dx
```

---

# Property 4

If:

```
f(x)=g(x)
```

then:

```
∫ᵃᵇf(x)dx
=
∫ᵃᵇg(x)dx
```

---

# Property 5

Constant multiplication:

```
∫ᵃᵇ kf(x)dx

=

k∫ᵃᵇ f(x)dx
```

---

# 4. Definite Integral of Even and Odd Functions

---

# Even Function

A function is even if:

```
f(-x)=f(x)
```

Example:

```
x²
```

---

Property:

```
∫₋ᵃᵃ f(x)dx

=

2∫₀ᵃ f(x)dx
```

---

# Odd Function

A function is odd if:

```
f(-x)=-f(x)
```

Example:

```
x³
```

---

Property:

```
∫₋ᵃᵃ f(x)dx=0
```

---

# 5. Evaluation of Definite Integrals

---

# Method 1: Direct Integration

Steps:

1. Find antiderivative.
2. Apply upper limit.
3. Apply lower limit.
4. Subtract.

---

Example:

Evaluate:

```
∫₁² x²dx
```

Solution:

Integral:

```
x³/3
```

Applying limits:

```
=[x³/3]₁²
```

```
=8/3-1/3
```

Answer:

```
7/3
```

---

# Method 2: Substitution Method

Used when variable substitution simplifies the integral.

---

Example:

```
∫₀¹ 2x(x²+1)²dx
```

Let:

```
u=x²+1
```

Then:

```
du=2xdx
```

Integral becomes:

```
∫u²du
```

---

# Method 3: Integration by Parts

Formula:

```
∫u dv=uv-∫vdu
```

---

# 6. Fundamental Properties of Definite Integrals

---

## Property:

If:

```
I=∫₀ᵃ f(x)dx
```

Then:

```
I=∫₀ᵃ f(a-x)dx
```

---

# Useful Result

```
∫₀ᵃ f(x)dx

=

∫₀ᵃ f(a-x)dx
```

---

# 7. Change of Variable in Definite Integral

If:

```
x=g(t)
```

then:

```
dx=g'(t)dt
```

Limits must also be changed.

---

Example:

```
∫₀¹ 2x dx
```

Let:

```
u=x²
```

Then:

```
du=2xdx
```

Limits:

When:

```
x=0,u=0
```

When:

```
x=1,u=1
```

Therefore:

```
∫₀¹du=1
```

---

# 8. Area Under Curves

Definite integrals are used to calculate area.

---

# Area Under Curve

If:

```
y=f(x)
```

between:

```
x=a and x=b
```

then:

```
Area=∫ᵃᵇ f(x)dx
```

---

# Conditions

If curve lies above x-axis:

```
Area = positive integral
```

If below x-axis:

```
Area = - integral
```

---

# 9. Area Between Two Curves

If:

Upper curve:

```
y=f(x)
```

Lower curve:

```
y=g(x)
```

then:

```
Area
=
∫ᵃᵇ[f(x)-g(x)]dx
```

---

# Example

Area between:

```
y=x²
```

and

```
y=x
```

from 0 to 1:

```
Area=∫₀¹(x-x²)dx
```

---

# 10. Applications of Definite Integrals

---

## Physics

Distance:

```
s=∫vdt
```

---

Work:

```
W=∫Fdx
```

---

## Economics

Total cost:

```
C=∫MC dx
```

---

## Geometry

Area calculation.

---

# ASCII Flowchart

```
            DEFINITE INTEGRALS
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
    Properties  Evaluation    Applications
       │            │             │
       ▼            ▼             ▼
   Symmetry    Substitution    Area
       │
       ▼
 Fundamental Theorem
```

---

# Important Formulae

| Concept             | Formula    |
| ------------------- | ---------- |
| Definite Integral   | ∫ᵃᵇf(x)dx  |
| Fundamental Theorem | F(b)-F(a)  |
| Limit Change        | ∫ᵃᵇ=-∫ᵇᵃ   |
| Same Limits         | ∫ᵃᵃ=0      |
| Even Function       | 2∫₀ᵃf(x)dx |
| Odd Function        | 0          |
| Area                | ∫ᵃᵇf(x)dx  |
| Area Between Curves | ∫ᵃᵇ(f-g)dx |

---

# Solved Examples

## Example 1

Evaluate:

```
∫₀³ x²dx
```

Solution:

```
=[x³/3]₀³
```

```
=27/3
```

Answer:

```
9
```

---

## Example 2

Evaluate:

```
∫₀π sinx dx
```

Solution:

Integral:

```
-cosx
```

Applying limits:

```
=[-cosx]₀π
```

```
=1-(-1)
```

Answer:

```
2
```

---

## Example 3

Evaluate:

```
∫₋¹¹ x³dx
```

Since:

```
x³
```

is an odd function:

```
Integral=0
```

Answer:

```
0
```

---

## Example 4

Find area under:

```
y=x
```

from:

```
0 to 2
```

Solution:

```
Area=∫₀²x dx
```

```
=[x²/2]₀²
```

```
=2
```

Answer:

```
2 square units
```

---

## Example 5

Evaluate:

```
∫₀¹ eˣdx
```

Solution:

Integral:

```
eˣ
```

Applying limits:

```
=e¹-e⁰
```

Answer:

```
e-1
```

---

# Common Mistakes

- Forgetting to apply upper and lower limits.
- Adding constant C in definite integrals.
- Changing limits incorrectly during substitution.
- Ignoring negative area.
- Confusing even and odd function properties.
- Incorrect sign while reversing limits.

---

# Exam Tips

- Memorize properties of definite integrals.
- Practice symmetry-based problems.
- Learn Fundamental Theorem of Calculus.
- Practice area problems.
- Be careful while changing limits.
- Always draw graphs for area questions.

---

# Quick Revision

- Definite integral gives a numerical value.

Formula:

```
∫ᵃᵇf(x)dx=F(b)-F(a)
```

- No constant C.
- Reversing limits changes sign.
- Odd function:

```
∫₋ᵃᵃf(x)dx=0
```

- Even function:

```
2∫₀ᵃf(x)dx
```

- Area:

```
∫upper-lower
```

---

# Chapter Summary

- **Definite integrals** calculate accumulated quantities over a fixed interval.
- The **Fundamental Theorem of Calculus** connects differentiation and integration.
- Properties of definite integrals simplify complex calculations using symmetry and transformations.
- Definite integrals are widely used to calculate **areas, displacement, work, cost, and other accumulated quantities**.
- This chapter forms the foundation for advanced calculus, physics, engineering, economics, and mathematical modelling.

# ISC Class 12 Mathematics

# Chapter 8: Differential Equations

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Differential Equations

(Topics covered from uploaded ISC Class 12 Mathematics outline: order and degree, formation of differential equations, solving first-order equations, variable separation, homogeneous equations, and linear differential equations) :contentReference[oaicite:0]{index=0}

---

# Introduction

A **differential equation** is an equation involving a dependent variable, independent variable, and derivatives of the dependent variable.

Differential equations are used to represent changing quantities in:

- Physics
- Engineering
- Biology
- Economics
- Population studies
- Weather modelling

---

# 1. Differential Equation

## Definition

An equation containing derivatives of a dependent variable with respect to an independent variable is called a differential equation.

---

# Example

```
dy/dx = 3x²
```

is a differential equation.

---

# 2. Order of Differential Equation

## Definition

The order of a differential equation is the highest order derivative present in the equation.

---

# Examples

## First Order

```
dy/dx + y = 0
```

Highest derivative:

```
dy/dx
```

Order = 1

---

## Second Order

```
d²y/dx² + dy/dx = x
```

Order = 2

---

## Third Order

```
d³y/dx³ = y
```

Order = 3

---

# 3. Degree of Differential Equation

## Definition

The degree is the highest power of the highest order derivative after removing radicals and fractions involving derivatives.

---

# Example

```
(d²y/dx²)² + dy/dx = x
```

Order:

```
2
```

Degree:

```
2
```

---

# Example

```
√(d²y/dx²)+x=0
```

Not a polynomial in derivatives.

Degree is not defined.

---

# 4. Formation of Differential Equations

## Definition

Formation means obtaining a differential equation from a given family of curves.

---

# Steps

1. Write the given equation.
2. Differentiate with respect to x.
3. Eliminate arbitrary constants.
4. Obtain differential equation.

---

# Example

Given:

```
y=mx+c
```

Differentiate:

```
dy/dx=m
```

Substitute:

```
y=x(dy/dx)+c
```

Differentiate again:

```
d²y/dx²=0
```

Differential equation:

```
d²y/dx²=0
```

---

# 5. Solution of Differential Equation

## Definition

A solution is a relation between variables that satisfies the differential equation.

---

# Types of Solutions

## General Solution

Contains arbitrary constants.

Example:

```
y=x²+C
```

---

## Particular Solution

Obtained after applying initial conditions.

---

# 6. Variable Separable Differential Equations

## Definition

A differential equation where variables can be separated is called variable separable.

---

# General Form

```
dy/dx=f(x)g(y)
```

Separating:

```
dy/g(y)=f(x)dx
```

---

# Example

Solve:

```
dy/dx=x/y
```

Separate:

```
y dy=x dx
```

Integrate:

```
∫y dy=∫x dx
```

```
y²/2=x²/2+C
```

Therefore:

```
y²=x²+C
```

---

# 7. Homogeneous Differential Equation

## Definition

A differential equation is homogeneous if it can be written as:

```
dy/dx=f(y/x)
```

---

# Substitution

Put:

```
y=vx
```

Differentiate:

```
dy/dx=v+x dv/dx
```

---

# Example Form

```
dy/dx=(x+y)/(x-y)
```

Since RHS depends on:

```
y/x
```

It is homogeneous.

---

# 8. Linear Differential Equation

## Definition

A first-order linear differential equation is of the form:

```
dy/dx + Py = Q
```

where:

- P and Q are functions of x.

---

# Solution Method

Using integrating factor (I.F.):

```
I.F.=e∫Pdx
```

Solution:

```
y(I.F.)=∫Q(I.F.)dx+C
```

---

# Example

Solve:

```
dy/dx+y=x
```

Here:

```
P=1
```

Integrating factor:

```
I.F.=eˣ
```

Solution:

```
yeˣ=∫xeˣdx+C
```

---

# 9. Integrating Factor

## Definition

The factor used to solve a linear differential equation is called the integrating factor.

---

Formula:

```
I.F.=e∫Pdx
```

---

# 10. Applications of Differential Equations

---

# Population Growth

Growth model:

```
dP/dt=kP
```

Solution:

```
P=P₀eᵏᵗ
```

---

# Radioactive Decay

Decay equation:

```
dN/dt=-kN
```

Solution:

```
N=N₀e⁻ᵏᵗ
```

---

# Motion

Velocity:

```
dv/dt=a
```

---

# Cooling Law

Newton's cooling law:

```
dT/dt=k(T-Ts)
```

---

# ASCII Flowchart

```
          DIFFERENTIAL EQUATIONS
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
   Order/Degree Formation    Solution
                      │
                      ▼
              First Order Equations
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
 Variable       Homogeneous      Linear
 Separation     Equation        Equation
```

---

# Important Formulae

| Concept                  | Formula            |
| ------------------------ | ------------------ |
| Order                    | Highest derivative |
| Linear Equation          | dy/dx+Py=Q         |
| Integrating Factor       | e∫Pdx              |
| Variable Separation      | dy/g(y)=f(x)dx     |
| Homogeneous Substitution | y=vx               |
| Population Growth        | dP/dt=kP           |
| Radioactive Decay        | dN/dt=-kN          |

---

# Solved Examples

## Example 1

Find order and degree:

```
(d²y/dx²)³ + dy/dx = x
```

Solution:

Highest derivative:

```
d²y/dx²
```

Order:

```
2
```

Degree:

```
3
```

---

## Example 2

Solve:

```
dy/dx=2x
```

Solution:

Integrate:

```
∫dy=∫2x dx
```

Therefore:

```
y=x²+C
```

---

## Example 3

Solve:

```
dy/dx=x/y
```

Solution:

Separate:

```
y dy=x dx
```

Integrate:

```
y²/2=x²/2+C
```

Answer:

```
y²=x²+C
```

---

## Example 4

Find integrating factor:

```
dy/dx+3y=x
```

Here:

```
P=3
```

Therefore:

```
I.F.=e³ˣ
```

---

## Example 5

Solve:

```
dy/dx+y=0
```

Solution:

Separate:

```
dy/y=-dx
```

Integrate:

```
log y=-x+C
```

Therefore:

```
y=Ce⁻ˣ
```

---

# Common Mistakes

- Confusing order and degree.
- Forgetting arbitrary constant C.
- Separating variables incorrectly.
- Applying integrating factor wrongly.
- Not converting homogeneous equations using y=vx.
- Ignoring initial conditions.

---

# Exam Tips

- Practice identifying order and degree.
- Learn all first-order differential equation methods.
- Memorize integrating factor formula.
- Practice variable separation problems.
- Understand applications like growth and decay models.

---

# Quick Revision

- Differential equation contains derivatives.
- Order = highest derivative.
- Degree = power of highest derivative.
- Variable separation:

```
dy/g(y)=f(x)dx
```

- Homogeneous:

```
y=vx
```

- Linear:

```
dy/dx+Py=Q
```

- Integrating factor:

```
e∫Pdx
```

---

# Chapter Summary

- **Differential equations** describe relationships involving changing quantities and their rates of change.
- The concepts of **order, degree, and formation** help classify differential equations.
- First-order differential equations can be solved using methods such as **variable separation, homogeneous substitution, and linear differential equation techniques**.
- Integrating factors provide a systematic method for solving linear equations.
- Differential equations are widely used in **physics, engineering, economics, biology, population modelling, and scientific research**.

# ISC Class 12 Mathematics

# Chapter 9: Probability

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Probability

(Topics covered from uploaded ISC Class 12 Mathematics outline: conditional probability, Bayes' theorem, random variables, probability distributions, and expected values) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Probability** is the branch of mathematics that deals with the measurement of uncertainty and chance.

It helps predict the likelihood of events occurring.

Applications:

- Statistics
- Artificial intelligence
- Data science
- Finance
- Weather prediction
- Risk analysis

---

# 1. Random Experiment

## Definition

An experiment whose outcome cannot be predicted with certainty is called a random experiment.

---

# Examples

- Tossing a coin.
- Rolling a dice.
- Selecting a card.

---

# 2. Sample Space

## Definition

The set of all possible outcomes of a random experiment is called the sample space.

---

# Symbol

```
S
```

---

# Example

For a coin toss:

```
S={H,T}
```

For dice:

```
S={1,2,3,4,5,6}
```

---

# 3. Event

## Definition

An event is a subset of the sample space.

---

# Types of Events

---

## Simple Event

Contains only one outcome.

Example:

Getting 3 on a dice.

```
E={3}
```

---

## Compound Event

Contains more than one outcome.

Example:

Getting an even number:

```
E={2,4,6}
```

---

# 4. Probability of an Event

## Classical Definition

If all outcomes are equally likely:

\[
P(E)=\frac{Number\ of\ favourable\ outcomes}{Total\ number\ of\ outcomes}
\]

---

# Formula

```
P(E)=n(E)/n(S)
```

where:

- n(E) = favourable outcomes
- n(S) = total outcomes

---

# Range of Probability

```
0 ≤ P(E) ≤ 1
```

---

# Important Results

Impossible event:

```
P(E)=0
```

Certain event:

```
P(E)=1
```

---

# 5. Complementary Event

## Definition

The event that does not occur is called the complement of the event.

---

# Symbol

```
E'
```

---

# Formula

```
P(E')=1-P(E)
```

---

# Example

If:

```
P(E)=0.4
```

then:

```
P(E')=1-0.4
```

```
=0.6
```

---

# 6. Addition Theorem of Probability

For two events A and B:

\[
P(A∪B)=P(A)+P(B)-P(A∩B)
\]

---

# Mutually Exclusive Events

Two events are mutually exclusive if they cannot occur together.

---

Condition:

```
A∩B=φ
```

---

Then:

```
P(A∪B)=P(A)+P(B)
```

---

# 7. Conditional Probability

## Definition

The probability of occurrence of event A when event B has already occurred.

---

# Formula

\[
P(A|B)=\frac{P(A∩B)}{P(B)}
\]

where:

```
P(B)≠0
```

---

# Example

A card is drawn.

Find probability of getting an ace if card is known to be a face card.

---

# 8. Multiplication Theorem

From conditional probability:

\[
P(A∩B)=P(A)P(B|A)
\]

or

\[
P(A∩B)=P(B)P(A|B)
\]

---

# Independent Events

Two events are independent if occurrence of one does not affect the other.

---

Condition:

\[
P(A∩B)=P(A)P(B)
\]

---

# Example

Two coin tosses.

The result of first toss does not affect second toss.

---

# 9. Bayes' Theorem

## Definition

Bayes' theorem is used to find the probability of causes when the outcome is known.

---

# Formula

\[
P(A_i|B)=
\frac{P(A_i)P(B|A_i)}
{\sum P(A_i)P(B|A_i)}
\]

---

# Terms

- P(Aᵢ) → Prior probability
- P(B|Aᵢ) → Conditional probability
- P(Aᵢ|B) → Posterior probability

---

# Applications

- Medical diagnosis
- Machine learning
- Spam filtering
- Prediction systems

---

# 10. Random Variable

## Definition

A variable whose value depends on the outcome of a random experiment is called a random variable.

---

# Types

## Discrete Random Variable

Has countable values.

Example:

Number of heads in coin tosses.

---

## Continuous Random Variable

Has continuous values.

Example:

Height, weight, temperature.

---

# 11. Probability Distribution

## Definition

A table showing values of a random variable and their probabilities.

---

# Conditions

For a discrete distribution:

### 1.

```
P(X)≥0
```

### 2.

\[
ΣP(X)=1
\]

---

# Example

| X    | 0   | 1   | 2   |
| ---- | --- | --- | --- |
| P(X) | 1/4 | 1/2 | 1/4 |

---

# 12. Mean of Random Variable

The expected value of a random variable is called mean.

---

# Formula

\[
E(X)=ΣxP(x)
\]

---

# Example

| X    | 1   | 2   |
| ---- | --- | --- |
| P(X) | 0.5 | 0.5 |

Mean:

\[
E(X)=1(0.5)+2(0.5)
\]

\[
=1.5
\]

---

# 13. Variance

## Definition

Variance measures the spread of probability distribution.

---

# Formula

\[
Var(X)=E(X^2)-[E(X)]^2
\]

---

# Standard Deviation

\[
σ=\sqrt{Var(X)}
\]

---

# 14. Bernoulli Trials

## Definition

A sequence of independent trials having only two possible outcomes:

- Success
- Failure

---

# Conditions

1. Fixed number of trials.
2. Independent trials.
3. Same probability of success.

---

# 15. Binomial Distribution

## Definition

Probability distribution for number of successes in n independent Bernoulli trials.

---

# Formula

\[
P(X=r)=
^nC_r p^r q^{n-r}
\]

where:

- p = probability of success
- q = probability of failure

and:

```
q=1-p
```

---

# Mean

\[
μ=np
\]

---

# Variance

\[
σ²=npq
\]

---

# Example

A coin is tossed 3 times.

Probability of getting 2 heads:

```
n=3
r=2
p=1/2
q=1/2
```

\[
P(X=2)=^3C_2(1/2)^2(1/2)^1
\]

\[
=3/8
\]

---

# ASCII Flowchart

```
              PROBABILITY
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
   Events      Conditional    Random
                  Probability  Variable
      │             │             │
      ▼             ▼             ▼
 Addition       Bayes        Distribution
 Theorem        Theorem           │
                                  ▼
                              Expectation
```

---

# Important Formulae

| Concept                 | Formula                 |
| ----------------------- | ----------------------- |
| Probability             | P(E)=n(E)/n(S)          |
| Complement              | P(E')=1-P(E)            |
| Addition Theorem        | P(A∪B)=P(A)+P(B)-P(A∩B) |
| Conditional Probability | P(A                     | B)=P(A∩B)/P(B) |
| Multiplication          | P(A∩B)=P(A)P(B          | A)             |
| Independent Events      | P(A∩B)=P(A)P(B)         |
| Bayes Theorem           | P(Aᵢ                    | B)=P(Aᵢ)P(B    | Aᵢ)/Σ |
| Mean                    | E(X)=ΣxP(x)             |
| Variance                | E(X²)-E(X)²             |
| Binomial                | ⁿCᵣpʳqⁿ⁻ʳ               |

---

# Solved Examples

## Example 1

A dice is thrown once. Find probability of getting an even number.

Sample space:

```
S={1,2,3,4,5,6}
```

Even outcomes:

```
{2,4,6}
```

Therefore:

\[
P(E)=3/6
\]

Answer:

```
1/2
```

---

## Example 2

If:

```
P(A)=0.5
```

Find:

```
P(A')
```

Solution:

\[
P(A')=1-0.5
\]

Answer:

```
0.5
```

---

## Example 3

Two coins are tossed. Find probability of two heads.

Sample space:

```
{HH,HT,TH,TT}
```

Favourable:

```
HH
```

Probability:

```
1/4
```

---

## Example 4

Find mean of distribution:

| X    | 1   | 2   | 3   |
| ---- | --- | --- | --- |
| P(X) | 0.2 | 0.5 | 0.3 |

Solution:

\[
E(X)=1(0.2)+2(0.5)+3(0.3)
\]

\[
=2.1
\]

---

## Example 5

Find probability of exactly 3 heads in 5 tosses.

\[
P(X=3)=^5C_3(1/2)^3(1/2)^2
\]

\[
=10/32
\]

Answer:

```
5/16
```

---

# Common Mistakes

- Confusing mutually exclusive and independent events.
- Forgetting complement formula.
- Incorrect use of Bayes theorem.
- Probability values exceeding 1.
- Forgetting total probability equals 1.
- Incorrect binomial parameters.

---

# Exam Tips

- Practice conditional probability problems.
- Memorize Bayes theorem formula.
- Understand difference between independent and mutually exclusive events.
- Practice random variable tables.
- Solve binomial distribution questions.
- Learn expectation and variance formulas.

---

# Quick Revision

- Probability:

```
0≤P(E)≤1
```

- Complement:

```
P(E')=1-P(E)
```

- Conditional:

```
P(A|B)=P(A∩B)/P(B)
```

- Bayes theorem finds reverse probability.
- Mean:

```
E(X)=ΣxP(x)
```

- Variance:

```
E(X²)-E(X)²
```

- Binomial:

```
ⁿCᵣpʳqⁿ⁻ʳ
```

---

# Chapter Summary

- **Probability** provides a mathematical measure of uncertainty and chance.
- Conditional probability helps calculate probabilities when additional information is available.
- **Bayes' theorem** allows updating probabilities based on new evidence and is widely used in prediction systems.
- Random variables and probability distributions help represent uncertain outcomes mathematically.
- Expected value and variance describe the average behaviour and spread of distributions.
- Probability concepts are fundamental in **statistics, artificial intelligence, finance, machine learning, and scientific analysis**.

# ISC Class 12 Mathematics

# Chapter 10: Vectors

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Vectors

(Topics covered from uploaded ISC Class 12 Mathematics outline: vector operations, scalar and vector products, geometric applications, and vector equations) :contentReference[oaicite:0]{index=0}

---

# Introduction

A **vector** is a quantity that has both **magnitude and direction**.

Vectors are used to represent physical quantities such as:

- Displacement
- Velocity
- Force
- Acceleration
- Momentum

This chapter deals with:

- Types of vectors
- Vector algebra
- Addition and subtraction
- Scalar product
- Vector product
- Applications in geometry

---

# 1. Scalar and Vector Quantities

## Scalar Quantity

A quantity having only magnitude is called a scalar.

Examples:

- Mass
- Time
- Temperature
- Distance
- Energy

---

## Vector Quantity

A quantity having both magnitude and direction.

Examples:

- Force
- Velocity
- Displacement
- Acceleration

---

# Difference Between Scalar and Vector

| Scalar              | Vector                  |
| ------------------- | ----------------------- |
| Only magnitude      | Magnitude and direction |
| Added algebraically | Added using vector laws |
| Example: Mass       | Example: Force          |

---

# 2. Representation of Vectors

A vector is represented by:

\[
\vec{a}
\]

or

\[
\overrightarrow{AB}
\]

where:

- A = Initial point
- B = Terminal point

---

# Magnitude of Vector

For vector:

\[
\vec{a}=a_1i+a_2j+a_3k
\]

Magnitude:

\[
|\vec{a}|=\sqrt{a_1^2+a_2^2+a_3^2}
\]

---

# Unit Vector

A vector having magnitude 1 is called a unit vector.

---

Formula:

\[
\hat{a}=\frac{\vec{a}}{|\vec{a}|}
\]

---

# 3. Types of Vectors

---

## Zero Vector

A vector having zero magnitude.

\[
\vec{0}
\]

---

## Unit Vector

Magnitude equal to 1.

---

## Equal Vectors

Vectors having:

- Same magnitude
- Same direction

---

## Negative Vector

A vector having same magnitude but opposite direction.

---

## Parallel Vectors

Vectors having same or opposite direction.

---

## Collinear Vectors

Vectors lying along the same line.

---

# 4. Position Vector

The vector representing the position of a point with respect to origin.

If:

\[
P(x,y,z)
\]

then:

\[
\vec{OP}=xi+yj+zk
\]

---

# 5. Addition of Vectors

## Triangle Law

If two vectors are represented by two sides of a triangle, their resultant is represented by the third side.

---

Formula:

\[
\vec{R}=\vec{A}+\vec{B}
\]

---

# Parallelogram Law

The diagonal of the parallelogram represents the resultant vector.

---

Magnitude:

\[
R=\sqrt{A^2+B^2+2AB\cos\theta}
\]

---

# 6. Subtraction of Vectors

\[
\vec{A}-\vec{B}
\]

is written as:

\[
\vec{A}+(-\vec{B})
\]

---

# 7. Resolution of Vectors

A vector can be resolved into components.

For vector A:

Horizontal component:

\[
A_x=A\cos\theta
\]

Vertical component:

\[
A_y=A\sin\theta
\]

---

# Vector Form

\[
\vec{A}=A_xi+A_yj
\]

---

# 8. Direction Cosines

If a vector makes angles:

\[
\alpha,\beta,\gamma
\]

with x, y, z axes:

then:

\[
l=\cos\alpha
\]

\[
m=\cos\beta
\]

\[
n=\cos\gamma
\]

---

Relation:

\[
l^2+m^2+n^2=1
\]

---

# 9. Scalar Product (Dot Product)

## Definition

The scalar product of two vectors gives a scalar quantity.

---

Formula:

\[
\vec{A}\cdot\vec{B}=AB\cos\theta
\]

---

In component form:

\[
\vec{A}\cdot\vec{B}
=

A_xB_x+A_yB_y+A_zB_z
\]

---

# Properties

## Commutative

\[
A\cdot B=B\cdot A
\]

---

## Distributive

\[
A\cdot(B+C)=A\cdot B+A\cdot C
\]

---

# Applications

- Finding angle between vectors.
- Work done by force.

---

# Work Done

\[
W=\vec{F}\cdot\vec{s}
\]

or

\[
W=Fs\cos\theta
\]

---

# 10. Vector Product (Cross Product)

## Definition

The vector product produces a vector perpendicular to both vectors.

---

Formula:

\[
\vec{A}\times\vec{B}
=

AB\sin\theta \hat{n}
\]

where:

\[
\hat{n}
\]

is perpendicular direction.

---

# Magnitude

\[
|\vec{A}\times\vec{B}|=AB\sin\theta
\]

---

# Properties

## Anti-Commutative

\[
A\times B=-(B\times A)
\]

---

## Distributive

\[
A\times(B+C)
=

A\times B+A\times C
\]

---

# Applications

- Torque
- Angular momentum
- Area calculation

---

# Torque

\[
\vec{\tau}
=

\vec{r}\times\vec{F}
\]

---

# 11. Scalar Triple Product

## Definition

Product involving three vectors.

---

Formula:

\[
A\cdot(B\times C)
\]

---

# Geometrical Meaning

Represents volume of parallelepiped.

---

Volume:

\[
V=|A\cdot(B\times C)|
\]

---

# 12. Vector Triple Product

Formula:

\[
A\times(B\times C)
\]

---

Result:

\[
=B(A\cdot C)-C(A\cdot B)
\]

---

# 13. Equation of Line in Vector Form

A line passing through point with position vector:

\[
\vec{a}
\]

and parallel to vector:

\[
\vec{b}
\]

is:

\[
\vec{r}=\vec{a}+\lambda\vec{b}
\]

---

where:

- λ = parameter

---

# 14. Angle Between Two Vectors

Formula:

\[
\cos\theta=
\frac{A\cdot B}{|A||B|}
\]

---

# Conditions

Parallel vectors:

\[
\theta=0^\circ
\]

Perpendicular vectors:

\[
\theta=90^\circ
\]

---

# 15. Projection of Vector

Projection of A on B:

\[
=\frac{A\cdot B}{|B|}
\]

---

# ASCII Flowchart

```
                VECTORS
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
 Representation  Addition    Products
      │            │             │
      ▼            ▼             ▼
 Unit Vector   Resultant    Dot/Cross
      │                          │
      ▼                          ▼
 Applications              Geometry
```

---

# Important Formulae

| Concept           | Formula          |
| ----------------- | ---------------- |
| Magnitude         | √(a²+b²+c²)      |
| Unit Vector       | a/               | a   |     |
| Addition          | A+B              |
| Resultant         | √(A²+B²+2ABcosθ) |
| Dot Product       | ABcosθ           |
| Cross Product     | ABsinθ           |
| Work Done         | F·s              |
| Torque            | r×F              |
| Direction Cosines | l²+m²+n²=1       |
| Line Equation     | r=a+λb           |
| Triple Product    | A·(B×C)          |

---

# Solved Examples

## Example 1

Find magnitude of:

\[
\vec{A}=3i+4j
\]

Solution:

\[
|\vec A|=\sqrt{3^2+4^2}
\]

\[
=\sqrt{25}
\]

Answer:

\[
5
\]

---

## Example 2

Find dot product:

\[
A=2i+3j
\]

\[
B=4i+5j
\]

Solution:

\[
A\cdot B
=

(2)(4)+(3)(5)
\]

\[
=8+15
\]

Answer:

\[
23
\]

---

## Example 3

Find angle between vectors:

\[
A=i+j
\]

\[
B=i-j
\]

Dot product:

\[
A\cdot B=1-1=0
\]

Therefore:

\[
\cos\theta=0
\]

Answer:

\[
\theta=90^\circ
\]

---

## Example 4

Find cross product:

\[
i\times j
\]

Answer:

\[
k
\]

---

## Example 5

Find work done:

Force:

\[
F=10N
\]

Displacement:

\[
s=5m
\]

Angle:

\[
60^\circ
\]

Solution:

\[
W=Fs\cos60
\]

\[
=10(5)(1/2)
\]

Answer:

\[
25J
\]

---

# Common Mistakes

- Confusing scalar and vector quantities.
- Forgetting direction of cross product.
- Using dot product formula for cross product.
- Ignoring unit vectors.
- Incorrect magnitude calculation.
- Forgetting angle between vectors.

---

# Exam Tips

- Memorize dot and cross product formulas.
- Practice vector addition problems.
- Learn geometric interpretation of products.
- Practice angle and projection problems.
- Remember:

\[
A\cdot B \neq A\times B
\]

---

# Quick Revision

- Vector has magnitude and direction.
- Magnitude:

\[
|\vec A|=\sqrt{x^2+y^2+z^2}
\]

- Dot product:

\[
A\cdot B=AB\cos\theta
\]

- Cross product:

\[
A\times B=AB\sin\theta
\]

- Work:

\[
W=F\cdot s
\]

- Torque:

\[
\tau=r\times F
\]

- Line equation:

\[
r=a+\lambda b
\]

---

# Chapter Summary

- **Vectors** represent physical quantities having both magnitude and direction.
- Vector algebra includes addition, subtraction, scalar products, and vector products.
- The **dot product** is used for finding angles and work done, while the **cross product** is used for torque, angular momentum, and area calculations.
- Vector equations help represent lines and geometric relationships in three-dimensional space.
- Vectors are essential in **physics, engineering, computer graphics, robotics, navigation systems, and advanced mathematics**.

# ISC Class 12 Mathematics

# Chapter 11: Three-Dimensional Geometry

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Three-Dimensional Geometry

(Topics covered from uploaded ISC Class 12 Mathematics outline: direction cosines, direction ratios, equations of lines and planes, angles, distances, and geometric relationships in 3D space) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Three-Dimensional Geometry** deals with geometry in space having three dimensions:

- Length
- Breadth
- Height

Unlike two-dimensional geometry, points in space are represented using three coordinates:

\[
(x,y,z)
\]

Applications:

- Engineering design
- Computer graphics
- Robotics
- Physics
- Navigation systems
- Architecture

---

# 1. Coordinate System in 3D

A point in three-dimensional space is represented as:

\[
P(x,y,z)
\]

where:

- x → distance along x-axis
- y → distance along y-axis
- z → distance along z-axis

---

# Distance Between Two Points

For points:

\[
P(x_1,y_1,z_1)
\]

and

\[
Q(x_2,y_2,z_2)
\]

Distance:

\[
PQ=
\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}
\]

---

# Example

Find distance between:

\[
(1,2,3)
\]

and

\[
(4,6,8)
\]

Solution:

\[
d=\sqrt{(4-1)^2+(6-2)^2+(8-3)^2}
\]

\[
=\sqrt{9+16+25}
\]

\[
=\sqrt{50}
\]

Answer:

\[
5\sqrt2
\]

---

# 2. Section Formula in 3D

If point P divides the line joining:

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
P=
\left(
\frac{mx_2+nx_1}{m+n},
\frac{my_2+ny_1}{m+n},
\frac{mz_2+nz_1}{m+n}
\right)
\]

---

# Midpoint Formula

For midpoint:

\[
m=n
\]

Therefore:

\[
P=
\left(
\frac{x_1+x_2}{2},
\frac{y_1+y_2}{2},
\frac{z_1+z_2}{2}
\right)
\]

---

# 3. Direction Ratios (DRs)

## Definition

Numbers proportional to the direction cosines of a line are called direction ratios.

Represented as:

\[
a,b,c
\]

---

# Relation Between DR and DC

If direction ratios are:

\[
a,b,c
\]

then direction cosines:

\[
l=\frac{a}{\sqrt{a^2+b^2+c^2}}
\]

\[
m=\frac{b}{\sqrt{a^2+b^2+c^2}}
\]

\[
n=\frac{c}{\sqrt{a^2+b^2+c^2}}
\]

---

# 4. Direction Cosines

If a line makes angles:

\[
\alpha,\beta,\gamma
\]

with x,y,z axes:

Then:

\[
l=\cos\alpha
\]

\[
m=\cos\beta
\]

\[
n=\cos\gamma
\]

---

# Important Relation

\[
l^2+m^2+n^2=1
\]

---

# 5. Equation of a Line in 3D

A line passing through point:

\[
(x_1,y_1,z_1)
\]

and having direction ratios:

\[
a,b,c
\]

is:

---

# Vector Form

\[
\vec r=\vec a+\lambda \vec b
\]

---

# Cartesian Form

\[
\frac{x-x_1}{a}
=

\frac{y-y_1}{b}
=

\frac{z-z_1}{c}
\]

---

# Example

Find equation of line passing through:

\[
(1,2,3)
\]

with DR:

\[
2,3,4
\]

Solution:

\[
\frac{x-1}{2}
=

\frac{y-2}{3}
=

\frac{z-3}{4}
\]

---

# 6. Angle Between Two Lines

If two lines have direction ratios:

\[
a_1,b_1,c_1
\]

and

\[
a_2,b_2,c_2
\]

then:

\[
\cos\theta=
\frac{
a_1a_2+b_1b_2+c_1c_2
}
{
\sqrt{a_1^2+b_1^2+c_1^2}
\sqrt{a_2^2+b_2^2+c_2^2}
}
\]

---

# Parallel Lines

Direction ratios are proportional:

\[
\frac{a_1}{a_2}
=

\frac{b_1}{b_2}
=

\frac{c_1}{c_2}
\]

---

# Perpendicular Lines

Angle:

\[
\theta=90^\circ
\]

Therefore:

\[
a_1a_2+b_1b_2+c_1c_2=0
\]

---

# 7. Shortest Distance Between Two Lines

For two skew lines:

\[
\vec r=\vec a_1+\lambda\vec b_1
\]

and

\[
\vec r=\vec a_2+\mu\vec b_2
\]

Shortest distance:

\[
D=
\frac{
|(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)|
}
{
|\vec b_1\times\vec b_2|
}
\]

---

# 8. Plane in 3D

## Definition

A plane is a flat surface extending infinitely in three dimensions.

---

# General Equation

\[
ax+by+cz+d=0
\]

where:

\[
a,b,c
\]

are normal vector components.

---

# 9. Plane Through a Point

Plane passing through:

\[
(x_1,y_1,z_1)
\]

with normal vector:

\[
a,b,c
\]

is:

\[
a(x-x_1)+b(y-y_1)+c(z-z_1)=0
\]

---

# 10. Angle Between Two Planes

For planes:

\[
a_1x+b_1y+c_1z+d_1=0
\]

and

\[
a_2x+b_2y+c_2z+d_2=0
\]

Angle:

\[
\cos\theta=
\frac{
a_1a_2+b_1b_2+c_1c_2
}
{
\sqrt{a_1^2+b_1^2+c_1^2}
\sqrt{a_2^2+b_2^2+c_2^2}
}
\]

---

# 11. Distance of Point from Plane

Distance of point:

\[
(x_1,y_1,z_1)
\]

from plane:

\[
ax+by+cz+d=0
\]

is:

\[
D=
\frac{
|ax_1+by_1+cz_1+d|
}
{
\sqrt{a^2+b^2+c^2}
}
\]

---

# 12. Distance Between Two Parallel Planes

For planes:

\[
ax+by+cz+d_1=0
\]

and:

\[
ax+by+cz+d_2=0
\]

Distance:

\[
D=
\frac{|d_1-d_2|}
{\sqrt{a^2+b^2+c^2}}
\]

---

# ASCII Flowchart

```
          THREE DIMENSIONAL GEOMETRY
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
 Coordinates     Lines          Planes
       │             │             │
       ▼             ▼             ▼
 Distance      Direction      Equation
 Formulae      Ratios          of Plane
                     │
                     ▼
              Angles & Distance
```

---

# Important Formulae

| Concept                 | Formula                            |
| ----------------------- | ---------------------------------- |
| Distance                | √((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)      |
| Direction Cosines       | l²+m²+n²=1                         |
| Line Equation           | (x-x₁)/a=(y-y₁)/b=(z-z₁)/c         |
| Angle Between Lines     | cosθ=(a₁a₂+b₁b₂+c₁c₂)/(√Σa₁²√Σa₂²) |
| Plane Equation          | ax+by+cz+d=0                       |
| Point-Plane Distance    |                                    | ax₁+by₁+cz₁+d | /√(a²+b²+c²) |
| Parallel Plane Distance |                                    | d₁-d₂         | /√(a²+b²+c²) |

---

# Solved Examples

## Example 1

Find distance between:

\[
(2,3,4)
\]

and:

\[
(5,7,8)
\]

Solution:

\[
d=\sqrt{3^2+4^2+4^2}
\]

\[
=\sqrt{41}
\]

---

## Example 2

Find direction cosines of:

\[
2i+3j+6k
\]

Magnitude:

\[
=\sqrt{4+9+36}
\]

\[
=7
\]

Therefore:

\[
l=\frac27
\]

\[
m=\frac37
\]

\[
n=\frac67
\]

---

## Example 3

Find equation of line through:

\[
(1,1,1)
\]

with DR:

\[
2,2,3
\]

Solution:

\[
\frac{x-1}{2}
=

\frac{y-1}{2}
=

\frac{z-1}{3}
\]

---

## Example 4

Find distance of point:

\[
(1,2,3)
\]

from plane:

\[
x+y+z=6
\]

Solution:

\[
D=
\frac{|1+2+3-6|}
{\sqrt3}
\]

\[
=0
\]

Point lies on plane.

---

## Example 5

Find angle between vectors:

\[
i+j+k
\]

and:

\[
i-j+k
\]

Dot product:

\[
1-1+1=1
\]

Magnitude:

\[
\sqrt3\times\sqrt3=3
\]

Therefore:

\[
\cos\theta=\frac13
\]

---

# Common Mistakes

- Confusing direction ratios and direction cosines.
- Forgetting normalization while finding cosines.
- Incorrect distance formula.
- Mixing line and plane equations.
- Sign errors in angle calculations.
- Forgetting normal vector in plane equations.

---

# Exam Tips

- Memorize all standard 3D formulas.
- Practice line equation problems.
- Understand relationship between DRs and DCs.
- Practice point-plane distance problems.
- Draw diagrams whenever possible.
- Carefully calculate square roots and signs.

---

# Quick Revision

- Point:

\[
(x,y,z)
\]

- Distance:

\[
\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}
\]

- Line:

\[
\frac{x-x_1}{a}
=

\frac{y-y_1}{b}
=

\frac{z-z_1}{c}
\]

- Plane:

\[
ax+by+cz+d=0
\]

- Direction cosines:

\[
l^2+m^2+n^2=1
\]

- Point-plane distance:

\[
\frac{|ax+by+cz+d|}
{\sqrt{a^2+b^2+c^2}}
\]

---

# Chapter Summary

- **Three-Dimensional Geometry** extends coordinate geometry into space using three coordinates.
- Direction ratios and direction cosines describe the orientation of lines in space.
- Line equations help represent straight paths, while plane equations describe flat surfaces.
- Concepts like **angles, shortest distances, and point-plane distances** solve complex spatial geometry problems.
- 3D geometry has major applications in **engineering, architecture, computer graphics, robotics, physics, and navigation systems**.

# ISC Class 12 Mathematics

# Chapter 12: Linear Programming

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Linear Programming

(Topics covered from uploaded ISC Class 12 Mathematics outline: formulation of linear programming problems, feasible regions, graphical solutions, and optimization of objective functions) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Linear Programming (LP)** is a mathematical technique used to find the best possible solution under given constraints.

The objective may be:

- Maximization of profit
- Minimization of cost
- Maximum production
- Minimum resource usage

Applications:

- Business planning
- Manufacturing
- Transportation
- Economics
- Resource allocation

---

# 1. Basic Terms of Linear Programming

---

# Linear Programming Problem (LPP)

A problem involving:

1. Linear objective function
2. Linear constraints
3. Non-negative variables

is called a Linear Programming Problem.

---

# 2. Decision Variables

## Definition

The variables whose values are to be determined for optimizing the objective are called decision variables.

---

Example:

Let:

```
x = number of chairs produced

y = number of tables produced
```

---

# 3. Objective Function

## Definition

The function that has to be maximized or minimized is called the objective function.

---

General form:

\[
Z=ax+by
\]

where:

- Z = objective value
- x,y = decision variables

---

Example:

Maximum profit:

\[
Z=50x+40y
\]

---

# 4. Constraints

## Definition

The limitations or restrictions in an LPP are called constraints.

---

Example:

If available labour is limited:

\[
2x+3y\leq100
\]

---

# Types of Constraints

## Less Than or Equal To

\[
ax+by\leq c
\]

---

## Greater Than or Equal To

\[
ax+by\geq c
\]

---

## Equality Constraint

\[
ax+by=c
\]

---

# 5. Non-Negativity Restrictions

Since quantities cannot be negative:

\[
x\geq0
\]

\[
y\geq0
\]

---

# 6. Formulation of Linear Programming Problem

Steps:

---

## Step 1

Identify decision variables.

---

## Step 2

Form objective function.

---

## Step 3

Write constraints.

---

## Step 4

Add non-negativity conditions.

---

# Example

A company produces two products A and B.

Profit:

Product A = ₹40

Product B = ₹30

Let:

\[
x=A
\]

\[
y=B
\]

Objective:

\[
Maximize Z=40x+30y
\]

---

# 7. Graphical Method

The graphical method is used for solving LPPs with two variables.

---

# Steps

### Step 1

Convert inequalities into equations.

---

### Step 2

Draw lines on graph.

---

### Step 3

Identify feasible region.

---

### Step 4

Find corner points.

---

### Step 5

Calculate objective function value.

---

### Step 6

Choose maximum or minimum value.

---

# 8. Feasible Region

## Definition

The common region satisfying all constraints is called the feasible region.

---

# Types

## Bounded Region

A closed finite region.

---

## Unbounded Region

An open infinite region.

---

# 9. Feasible Solution

Any point inside or on the boundary of feasible region satisfying all constraints is called a feasible solution.

---

# 10. Optimal Solution

The feasible solution giving maximum or minimum value of objective function is called optimal solution.

---

# 11. Corner Point Method

According to the fundamental theorem:

The optimum value of an objective function occurs at one of the corner points of the feasible region.

---

# Procedure

If corner points are:

\[
(x_1,y_1)
\]

\[
(x_2,y_2)
\]

\[
(x_3,y_3)
\]

Calculate:

\[
Z=ax+by
\]

at each point.

Choose:

- Highest value → Maximum
- Lowest value → Minimum

---

# 12. Graphical Representation

Example constraints:

\[
x+y\leq5
\]

\[
x\geq0
\]

\[
y\geq0
\]

Graph:

```
        y
        |
      5 |\
        | \
        |  \
        |   \
        |____\_____x
             5
```

The shaded area is the feasible region.

---

# 13. Maximization Problem

## Definition

Finding the maximum value of objective function.

Example:

Maximum profit:

\[
Max Z=5x+3y
\]

---

# 14. Minimization Problem

## Definition

Finding the minimum value of objective function.

Example:

Minimum cost:

\[
Min Z=4x+6y
\]

---

# 15. Special Cases in Linear Programming

---

# Multiple Optimal Solutions

When the objective function has same value at multiple points.

---

# Infeasible Solution

When no common feasible region exists.

---

# Unbounded Solution

When objective function can increase indefinitely.

---

# Redundant Constraint

A constraint that does not affect feasible region.

---

# 16. Applications of Linear Programming

---

## Production Planning

Determining optimum production quantity.

---

## Transportation

Finding minimum transportation cost.

---

## Agriculture

Optimizing crop production.

---

## Finance

Maximizing investment returns.

---

# ASCII Flowchart

```
            LINEAR PROGRAMMING
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
   Variables    Constraints Objective
        │           │           │
        └───────────┼───────────┘
                    ▼
            Feasible Region
                    │
                    ▼
             Corner Points
                    │
                    ▼
           Optimal Solution
```

---

# Important Formulae

| Concept            | Formula              |
| ------------------ | -------------------- |
| Objective Function | Z=ax+by              |
| Constraint         | ax+by≤c              |
| Non-negativity     | x≥0,y≥0              |
| Maximum            | Highest Z value      |
| Minimum            | Lowest Z value       |
| Feasible Region    | Common solution area |

---

# Solved Examples

## Example 1

Maximize:

\[
Z=3x+2y
\]

Subject to:

\[
x+y\leq4
\]

\[
x\geq0,y\geq0
\]

Corner points:

```
(0,0)

(4,0)

(0,4)
```

Calculate:

At (0,0):

\[
Z=0
\]

At (4,0):

\[
Z=12
\]

At (0,4):

\[
Z=8
\]

Maximum value:

\[
Z=12
\]

at:

\[
(4,0)
\]

---

## Example 2

Minimize:

\[
Z=2x+y
\]

Constraints:

\[
x+y\geq5
\]

\[
x,y\geq0
\]

Check corner points and select minimum Z value.

---

## Example 3

Identify objective function:

Profit:

Chair = ₹50

Table = ₹100

Let:

Chair = x

Table = y

Therefore:

\[
Z=50x+100y
\]

---

## Example 4

Write non-negativity constraints.

Answer:

\[
x\geq0
\]

\[
y\geq0
\]

---

## Example 5

A factory has:

Labour constraint:

\[
2x+y\leq100
\]

Material constraint:

\[
x+3y\leq90
\]

Objective:

\[
Max Z=40x+50y
\]

---

# Common Mistakes

- Forgetting non-negativity conditions.
- Incorrectly drawing inequality lines.
- Choosing wrong feasible region.
- Missing corner points.
- Confusing maximum and minimum problems.
- Not checking all vertices.

---

# Exam Tips

- Always define variables first.
- Convert inequalities carefully.
- Draw accurate graphs.
- Mark all corner points.
- Evaluate objective function at every corner.
- Remember optimum occurs at corner points.

---

# Quick Revision

- LPP contains:

```
Variables + Constraints + Objective Function
```

- Objective:

\[
Z=ax+by
\]

- Restrictions:

\[
ax+by\leq c
\]

- Solution method:

```
Graph → Feasible Region → Corner Points → Optimal Value
```

---

# Chapter Summary

- **Linear Programming** is a mathematical optimization technique used to find the best solution under limited resources.
- It involves defining decision variables, creating objective functions, and applying constraints.
- The graphical method solves two-variable problems by identifying feasible regions and testing corner points.
- The optimal solution is obtained by maximizing or minimizing the objective function.
- Linear programming is widely used in **business, economics, production planning, transportation, finance, and resource management**.

# ISC Class 12 Mathematics

# Chapter 13: Application of Calculus in Commerce

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Application of Calculus in Commerce

(Topics covered from uploaded ISC Class 12 Mathematics outline: applications of derivatives and integration in economics, marginal cost, marginal revenue, profit maximization, and business models) :contentReference[oaicite:0]{index=0}

---

# Introduction

Calculus is widely used in **commerce and economics** to analyze changing quantities.

It helps businesses determine:

- Maximum profit
- Minimum cost
- Revenue optimization
- Marginal changes
- Growth patterns

Important calculus concepts used:

- Differentiation
- Integration
- Maxima and minima

---

# 1. Basic Economic Functions

In commerce, different quantities are represented as functions of output.

Let:

```
x = number of units produced
```

---

# Cost Function

The total cost of producing x units is called the cost function.

Representation:

\[
C(x)
\]

It includes:

- Fixed cost
- Variable cost

---

# Revenue Function

The income obtained by selling x units is called revenue.

Representation:

\[
R(x)
\]

Formula:

\[
Revenue = Price \times Quantity
\]

---

# Profit Function

Profit is the difference between revenue and cost.

Formula:

\[
P(x)=R(x)-C(x)
\]

---

# 2. Marginal Cost (MC)

## Definition

Marginal cost is the additional cost of producing one extra unit.

It is the derivative of cost function.

---

Formula:

\[
MC=\frac{dC}{dx}
\]

---

# Example

Given:

\[
C(x)=x^2+5x+100
\]

Marginal cost:

\[
MC=\frac{dC}{dx}
\]

\[
MC=2x+5
\]

---

# 3. Marginal Revenue (MR)

## Definition

Marginal revenue is the additional revenue obtained by selling one extra unit.

---

Formula:

\[
MR=\frac{dR}{dx}
\]

---

# Example

Given:

\[
R(x)=50x-x^2
\]

Marginal revenue:

\[
MR=50-2x
\]

---

# 4. Marginal Profit

Profit function:

\[
P(x)=R(x)-C(x)
\]

Differentiating:

\[
\frac{dP}{dx}
=

\frac{dR}{dx}
-

\frac{dC}{dx}
\]

Therefore:

\[
MP=MR-MC
\]

---

# Important Result

Maximum profit occurs when:

\[
MR=MC
\]

---

# 5. Break-Even Point

## Definition

The point where total revenue equals total cost is called the break-even point.

---

Condition:

\[
R(x)=C(x)
\]

or:

\[
P(x)=0
\]

---

At break-even:

- No profit
- No loss

---

# Example

If:

\[
R(x)=100x
\]

and:

\[
C(x)=50x+500
\]

Break-even:

\[
100x=50x+500
\]

\[
50x=500
\]

\[
x=10
\]

---

# 6. Profit Maximization

## Definition

Finding the production level where profit is maximum.

---

# Steps

### Step 1

Find profit function:

\[
P(x)=R(x)-C(x)
\]

---

### Step 2

Differentiate:

\[
P'(x)=0
\]

---

### Step 3

Check second derivative:

\[
P''(x)<0
\]

For maximum profit.

---

# Example

Given:

\[
R(x)=100x-x^2
\]

\[
C(x)=20x+100
\]

Profit:

\[
P(x)=100x-x^2-20x-100
\]

\[
P(x)=80x-x^2-100
\]

Derivative:

\[
P'(x)=80-2x
\]

Put:

\[
80-2x=0
\]

\[
x=40
\]

Second derivative:

\[
P''(x)=-2
\]

Since:

\[
P''(x)<0
\]

Profit is maximum at:

\[
x=40
\]

---

# 7. Average Cost

## Definition

Average cost is the cost per unit of production.

---

Formula:

\[
AC=\frac{C(x)}{x}
\]

---

# Example

If:

\[
C(x)=1000+50x
\]

then:

\[
AC=
\frac{1000+50x}{x}
\]

---

# 8. Average Revenue

Average revenue is revenue per unit.

Formula:

\[
AR=\frac{R(x)}{x}
\]

---

# 9. Demand Function

## Definition

The relationship between price and quantity demanded.

Representation:

\[
p=f(x)
\]

where:

- p = price
- x = quantity demanded

---

# Revenue Using Demand Function

\[
R=xp
\]

---

Example:

If:

\[
p=100-2x
\]

then:

\[
R=x(100-2x)
\]

\[
R=100x-2x^2
\]

---

# 10. Elasticity of Demand

## Definition

Elasticity measures the responsiveness of demand to price changes.

---

Formula:

\[
E=
-\frac{p}{x}\frac{dx}{dp}
\]

---

# Types

## Elastic Demand

\[
E>1
\]

Demand changes greatly with price.

---

## Inelastic Demand

\[
E<1
\]

Demand changes slightly with price.

---

## Unit Elastic

\[
E=1
\]

---

# 11. Integration in Commerce

Integration is used to find total values from marginal values.

---

# Total Cost from Marginal Cost

If:

\[
MC=\frac{dC}{dx}
\]

then:

\[
C=\int MC\,dx
\]

---

# Total Revenue from Marginal Revenue

If:

\[
MR=\frac{dR}{dx}
\]

then:

\[
R=\int MR\,dx
\]

---

# Example

Given:

\[
MC=2x+5
\]

Find cost function.

Solution:

\[
C=\int(2x+5)dx
\]

\[
C=x^2+5x+k
\]

---

# 12. Optimization Applications

Calculus helps businesses optimize:

---

## Maximum Profit

Condition:

\[
MR=MC
\]

---

## Minimum Cost

Condition:

\[
C'(x)=0
\]

and:

\[
C''(x)>0
\]

---

## Maximum Revenue

Condition:

\[
R'(x)=0
\]

and:

\[
R''(x)<0
\]

---

# ASCII Flowchart

```
          CALCULUS IN COMMERCE
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
      Cost       Revenue      Profit
        │           │           │
        ▼           ▼           ▼
   Marginal C   Marginal R   Optimize
        │           │           │
        └───────────┼───────────┘
                    ▼
             Maximum/Minimum
```

---

# Important Formulae

| Concept          | Formula  |
| ---------------- | -------- |
| Cost Function    | C(x)     |
| Revenue Function | R(x)     |
| Profit Function  | P=R-C    |
| Marginal Cost    | MC=dC/dx |
| Marginal Revenue | MR=dR/dx |
| Marginal Profit  | MP=MR-MC |
| Average Cost     | AC=C/x   |
| Average Revenue  | AR=R/x   |
| Break Even       | R=C      |
| Maximum Profit   | MR=MC    |
| Total Cost       | C=∫MC dx |
| Total Revenue    | R=∫MR dx |

---

# Solved Examples

## Example 1

Find marginal cost:

\[
C=x^2+10x+50
\]

Solution:

\[
MC=\frac{dC}{dx}
\]

\[
MC=2x+10
\]

---

## Example 2

Find profit function:

\[
R=200x-2x^2
\]

\[
C=50x+100
\]

Solution:

\[
P=R-C
\]

\[
P=200x-2x^2-50x-100
\]

\[
P=150x-2x^2-100
\]

---

## Example 3

Find break-even point:

\[
R=100x
\]

\[
C=50x+200
\]

At break-even:

\[
100x=50x+200
\]

\[
x=4
\]

---

## Example 4

Find marginal revenue:

\[
R=500x-x^2
\]

Solution:

\[
MR=\frac{dR}{dx}
\]

\[
MR=500-2x
\]

---

## Example 5

Find maximum revenue:

\[
R=100x-x^2
\]

Derivative:

\[
R'=100-2x
\]

Put:

\[
100-2x=0
\]

\[
x=50
\]

Second derivative:

\[
R''=-2
\]

Therefore maximum revenue occurs at:

\[
x=50
\]

---

# Common Mistakes

- Confusing revenue and profit functions.
- Forgetting:

\[
P=R-C
\]

- Using MC instead of total cost.
- Forgetting second derivative test.
- Incorrect differentiation.
- Ignoring business constraints.

---

# Exam Tips

- Memorize economic formulas.
- Practice profit maximization problems.
- Understand relation:

\[
MR=MC
\]

- Practice break-even questions.
- Learn how integration converts marginal values into total values.
- Always verify maximum/minimum conditions.

---

# Quick Revision

- Cost:

\[
C(x)
\]

- Revenue:

\[
R(x)
\]

- Profit:

\[
P=R-C
\]

- Marginal Cost:

\[
MC=C'(x)
\]

- Marginal Revenue:

\[
MR=R'(x)
\]

- Maximum Profit:

\[
MR=MC
\]

- Break-even:

\[
R=C
\]

---

# Chapter Summary

- **Calculus in Commerce** applies differentiation and integration to solve economic and business problems.
- Derivatives are used to calculate **marginal cost, marginal revenue, marginal profit, and optimization points**.
- Integration helps recover total cost and revenue from marginal values.
- Maximum profit occurs when **marginal revenue equals marginal cost**.
- These concepts are widely applied in **business decisions, economics, finance, production planning, and market analysis**.

# ISC Class 12 Mathematics

# Chapter 14: Application of Calculus in Commerce (Advanced Revision)

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Application of Calculus in Commerce

---

# Introduction

Calculus is an important mathematical tool used in **commerce, economics, and business decision-making**.

It helps analyse:

- Cost of production
- Revenue generation
- Profit maximization
- Marginal changes
- Business optimization

The two main calculus tools used are:

1. **Differentiation**
2. **Integration**

---

# 1. Cost Function

## Definition

The total expenditure required to produce a certain number of units is called the **cost function**.

Representation:

\[
C(x)
\]

where:

- x = number of units produced
- C(x) = total cost

---

# Types of Cost

## Fixed Cost

Cost that does not change with production.

Examples:

- Rent
- Insurance
- Salaries

---

## Variable Cost

Cost that changes with production.

Examples:

- Raw materials
- Labour cost

---

# Total Cost

\[
C(x)=Fixed\ Cost+Variable\ Cost
\]

---

# 2. Average Cost

## Definition

Average cost is the cost per unit produced.

Formula:

\[
AC=\frac{C(x)}{x}
\]

---

# Example

Given:

\[
C(x)=1000+20x
\]

Average cost:

\[
AC=\frac{1000+20x}{x}
\]

---

# 3. Marginal Cost

## Definition

The additional cost required to produce one extra unit is called marginal cost.

Formula:

\[
MC=\frac{dC}{dx}
\]

---

# Example

Given:

\[
C(x)=x^2+5x+200
\]

Differentiate:

\[
MC=2x+5
\]

---

# 4. Revenue Function

## Definition

The total income obtained from selling products is called revenue.

Formula:

\[
R(x)=Price \times Quantity
\]

---

# Demand Function

If price depends on quantity:

\[
p=f(x)
\]

then:

\[
R=xp
\]

---

# Example

Given:

\[
p=50-x
\]

Revenue:

\[
R=x(50-x)
\]

\[
R=50x-x^2
\]

---

# 5. Average Revenue

Average revenue is revenue earned per unit.

Formula:

\[
AR=\frac{R(x)}{x}
\]

---

# 6. Marginal Revenue

## Definition

The additional revenue obtained by selling one extra unit.

Formula:

\[
MR=\frac{dR}{dx}
\]

---

# Example

Given:

\[
R=100x-x^2
\]

Marginal revenue:

\[
MR=100-2x
\]

---

# 7. Profit Function

Profit is calculated as:

\[
Profit=Revenue-Cost
\]

Therefore:

\[
P(x)=R(x)-C(x)
\]

---

# Marginal Profit

\[
MP=\frac{dP}{dx}
\]

Since:

\[
P=R-C
\]

Therefore:

\[
MP=MR-MC
\]

---

# 8. Profit Maximization

The main objective of business is to maximize profit.

---

# Conditions for Maximum Profit

## First Condition

\[
\frac{dP}{dx}=0
\]

or:

\[
MR=MC
\]

---

## Second Condition

\[
\frac{d^2P}{dx^2}<0
\]

---

# Example

Given:

\[
R=200x-x^2
\]

\[
C=50x+100
\]

Profit:

\[
P=200x-x^2-50x-100
\]

\[
P=150x-x^2-100
\]

Differentiate:

\[
P'=150-2x
\]

Put:

\[
150-2x=0
\]

\[
x=75
\]

Second derivative:

\[
P''=-2
\]

Since:

\[
P''<0
\]

Profit is maximum at:

\[
x=75
\]

---

# 9. Minimum Cost

Businesses often aim to reduce production cost.

---

Conditions:

\[
C'(x)=0
\]

and

\[
C''(x)>0
\]

---

# 10. Break-Even Analysis

## Definition

The point where total revenue equals total cost.

Condition:

\[
R(x)=C(x)
\]

At this point:

\[
Profit=0
\]

---

# Example

Given:

\[
R=100x
\]

\[
C=60x+400
\]

Break-even:

\[
100x=60x+400
\]

\[
40x=400
\]

\[
x=10
\]

---

# 11. Marginal Analysis

Marginal analysis studies the effect of producing one additional unit.

---

# Important Relationships

## If:

\[
MR>MC
\]

Production should increase.

---

## If:

\[
MR<MC
\]

Production should decrease.

---

## If:

\[
MR=MC
\]

Profit is maximum.

---

# 12. Elasticity of Demand

## Definition

Elasticity measures how demand changes due to price changes.

Formula:

\[
E=
-\frac{p}{x}\frac{dx}{dp}
\]

---

# Types

## Elastic Demand

\[
E>1
\]

Large change in demand.

---

## Inelastic Demand

\[
E<1
\]

Small change in demand.

---

## Unit Elastic Demand

\[
E=1
\]

---

# 13. Integration Applications in Commerce

Integration helps calculate total values from marginal values.

---

# Total Cost

If:

\[
MC=\frac{dC}{dx}
\]

Then:

\[
C=\int MC\,dx
\]

---

# Total Revenue

If:

\[
MR=\frac{dR}{dx}
\]

Then:

\[
R=\int MR\,dx
\]

---

# Example

Given:

\[
MC=4x+10
\]

Find cost.

Solution:

\[
C=\int(4x+10)dx
\]

\[
C=2x^2+10x+k
\]

---

# 14. Optimization in Business

Calculus helps optimize:

---

## Maximum Profit

\[
MR=MC
\]

---

## Maximum Revenue

\[
R'(x)=0
\]

and:

\[
R''(x)<0
\]

---

## Minimum Cost

\[
C'(x)=0
\]

and:

\[
C''(x)>0
\]

---

# ASCII Flowchart

```
          CALCULUS IN COMMERCE
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
     Cost      Revenue    Profit
       │          │          │
       ▼          ▼          ▼
   Marginal C  Marginal R  Optimization
       │          │          │
       └──────────┼──────────┘
                  ▼
          Maximum / Minimum
```

---

# Important Formula Sheet

| Quantity         | Formula |
| ---------------- | ------- |
| Cost Function    | C(x)    |
| Revenue Function | R(x)    |
| Profit           | P=R-C   |
| Average Cost     | C/x     |
| Average Revenue  | R/x     |
| Marginal Cost    | dC/dx   |
| Marginal Revenue | dR/dx   |
| Marginal Profit  | dP/dx   |
| Break-even       | R=C     |
| Maximum Profit   | MR=MC   |
| Total Cost       | ∫MC dx  |
| Total Revenue    | ∫MR dx  |

---

# Solved Problems

## Example 1

Find marginal cost:

\[
C=x^3+5x^2+10
\]

Solution:

\[
MC=\frac{dC}{dx}
\]

\[
MC=3x^2+10x
\]

---

## Example 2

Find profit:

\[
R=300x-2x^2
\]

\[
C=50x+100
\]

Solution:

\[
P=R-C
\]

\[
P=300x-2x^2-50x-100
\]

\[
P=250x-2x^2-100
\]

---

## Example 3

Find maximum profit production:

\[
P=250x-2x^2-100
\]

Derivative:

\[
P'=250-4x
\]

\[
250-4x=0
\]

\[
x=62.5
\]

Second derivative:

\[
P''=-4
\]

Therefore maximum profit occurs at:

\[
x=62.5
\]

---

# Common Mistakes

- Confusing revenue with profit.
- Forgetting:

\[
P=R-C
\]

- Using average cost instead of marginal cost.
- Not applying second derivative test.
- Incorrect differentiation.
- Ignoring business conditions.

---

# Exam Tips

- Memorize all commerce calculus formulas.
- Practice profit maximization problems.
- Understand the meaning of MC and MR.
- Always verify maximum/minimum conditions.
- Practice break-even questions.
- Relate mathematical answers to business meaning.

---

# Quick Revision

\[
P=R-C
\]

\[
MC=\frac{dC}{dx}
\]

\[
MR=\frac{dR}{dx}
\]

\[
MP=MR-MC
\]

Maximum profit:

\[
MR=MC
\]

Break-even:

\[
R=C
\]

Integration:

\[
Total=\int Marginal
\]

---

# Chapter Summary

- Calculus provides powerful methods for solving business and economic problems.
- Differentiation helps calculate marginal quantities such as **marginal cost, marginal revenue, and marginal profit**.
- Integration helps determine total cost and revenue from marginal values.
- Optimization techniques identify maximum profit, minimum cost, and ideal production levels.
- These concepts are essential in **commerce, economics, finance, business analytics, and decision-making systems**.
