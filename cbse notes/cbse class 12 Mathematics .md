# CBSE Class 12 Mathematics

# Chapter 1: Relations and Functions

> **Board:** CBSE  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Relations and Functions

> **Note:** This chapter introduces different types of relations and functions, equivalence relations, one-one, onto and bijective functions, and the composition and inverse of functions.

---

# Introduction

Relations and functions are fundamental concepts in mathematics. A **relation** describes a connection between elements of two sets, whereas a **function** is a special type of relation in which every element of the first set has exactly one image in the second set.

These concepts are widely used in algebra, calculus, computer science, economics, and engineering.

---

# 1. Cartesian Product

## Definition

The **Cartesian Product** of two non-empty sets **A** and **B** is the set of all ordered pairs whose first element belongs to **A** and the second element belongs to **B**.

Notation

```
A × B
```

Definition

```
A × B = {(a,b) | a ∈ A and b ∈ B}
```

---

## Number of Elements

If

```
n(A)=m

n(B)=n
```

then

```
n(A×B)=mn
```

---

## Example

Let

```
A={1,2}

B={a,b}
```

Then

```
A×B={(1,a),(1,b),(2,a),(2,b)}
```

---

# 2. Relation

## Definition

A **relation** from set **A** to set **B** is any subset of

```
A × B
```

If

```
R ⊆ A × B
```

then

```
R
```

is a relation.

---

## Domain

The set of all first elements of ordered pairs.

---

## Codomain

The target set.

---

## Range

The set of all second elements actually related.

---

# 3. Types of Relations

Suppose

```
R
```

is a relation on set

```
A
```

---

## (A) Empty Relation

Contains no ordered pair.

```
R = ∅
```

---

## (B) Universal Relation

Contains every ordered pair.

```
R = A × A
```

---

## (C) Identity Relation

```
R={(a,a):a∈A}
```

Example

```
{(1,1),(2,2),(3,3)}
```

---

## (D) Inverse Relation

If

```
(a,b)∈R
```

then

```
(b,a)∈R⁻¹
```

---

# 4. Reflexive Relation

## Definition

A relation is **reflexive** if every element is related to itself.

Condition

```
(a,a)∈R

for every

a∈A
```

---

## Example

```
A={1,2}

R={(1,1),(2,2),(1,2)}
```

Reflexive ✓

---

# 5. Symmetric Relation

## Definition

A relation is symmetric if

```
(a,b)∈R

⇒

(b,a)∈R
```

---

## Example

```
{(1,2),(2,1)}
```

Symmetric ✓

---

# 6. Transitive Relation

## Definition

A relation is transitive if

```
(a,b)∈R

and

(b,c)∈R

⇒

(a,c)∈R
```

---

## Example

```
(1,2)

(2,3)

(1,3)
```

Transitive ✓

---

# 7. Equivalence Relation

## Definition

A relation is an **equivalence relation** if it is

- Reflexive
- Symmetric
- Transitive

---

## Example

Relation

```
aRb

if

a−b

is divisible by 3
```

This is

- Reflexive ✓
- Symmetric ✓
- Transitive ✓

Hence,

```
R
```

is an equivalence relation.

---

## Steps to Prove an Equivalence Relation

1. Check reflexivity.
2. Check symmetry.
3. Check transitivity.
4. Conclude only if all three properties hold.

---

# 8. Function

## Definition

A function is a relation in which every element of the domain has exactly one image.

Notation

```
f:A→B
```

```
a → f(a)
```

---

## Conditions

Every element of the domain must

- Have an image.
- Have only one image.

---

## Example

```
f(x)=2x+1
```

---

# 9. Domain, Codomain and Range

Suppose

```
f:A→B
```

Then

Domain

```
A
```

Codomain

```
B
```

Range

```
{f(x):x∈A}
```

---

# 10. Types of Functions

---

## (A) One-One Function (Injective)

## Definition

Different elements of the domain have different images.

Condition

```
f(a)=f(b)

⇒

a=b
```

---

## Example

```
f(x)=3x
```

One-One ✓

---

## Test

Assume

```
f(a)=f(b)
```

Show

```
a=b
```

---

# 11. Many-One Function

Two or more elements have the same image.

Example

```
f(x)=x²
```

over real numbers.

```
2

and

−2
```

have the same image.

---

# 12. Onto Function (Surjective)

## Definition

Every element of the codomain has at least one pre-image.

Condition

```
Range

=

Codomain
```

---

## Example

```
f:R→R

f(x)=x³
```

Onto ✓

---

# 13. Into Function

Range is a proper subset of codomain.

Example

```
f:R→R

f(x)=x²
```

Negative numbers are not obtained.

Hence

Into.

---

# 14. Bijective Function

## Definition

A function which is both

- One-One
- Onto

---

## Importance

Only bijective functions possess inverse functions.

---

# 15. Invertible Function

Suppose

```
f:A→B
```

If there exists

```
g:B→A
```

such that

```
g(f(x))

=

x
```

and

```
f(g(y))

=

y
```

then

```
g=f⁻¹
```

---

## Condition for Inverse

A function must be

```
Bijective
```

---

# 16. Composition of Functions

Suppose

```
f:A→B

g:B→C
```

Then

```
(g∘f)(x)

=

g(f(x))
```

---

## Example

```
f(x)=2x

g(x)=x+5
```

Then

```
(g∘f)(x)

=

2x+5
```

---

# 17. Identity Function

Defined as

```
I(x)=x
```

for every element.

---

# 18. Constant Function

All elements have the same image.

Example

```
f(x)=7
```

---

# 19. Equality of Functions

Two functions are equal if

- Domains are equal.
- Codomains are equal.
- Function values are equal for every input.

---

# Comparison Tables

## Relation vs Function

| Relation                         | Function                                   |
| -------------------------------- | ------------------------------------------ |
| Subset of Cartesian product      | Special relation                           |
| One element may have many images | Exactly one image for every domain element |
| May not satisfy uniqueness       | Always satisfies uniqueness                |

---

## One-One vs Many-One

| One-One              | Many-One            |
| -------------------- | ------------------- |
| Distinct images      | Same image possible |
| Invertible (if onto) | Not invertible      |

---

## Onto vs Into

| Onto                                 | Into                             |
| ------------------------------------ | -------------------------------- |
| Range = Codomain                     | Range ⊂ Codomain                 |
| Every codomain element has pre-image | Some codomain elements have none |

---

## Injective vs Surjective vs Bijective

| Injective       | Surjective    | Bijective             |
| --------------- | ------------- | --------------------- |
| One-One         | Onto          | Both One-One and Onto |
| Distinct images | Full coverage | Invertible            |

---

## Types of Relations

| Relation    | Condition                          |
| ----------- | ---------------------------------- |
| Reflexive   | (a,a) belongs to R                 |
| Symmetric   | (a,b) ⇒ (b,a)                      |
| Transitive  | (a,b),(b,c) ⇒ (a,c)                |
| Equivalence | Reflexive + Symmetric + Transitive |

---

# ASCII Diagrams

## Function

```
A            B

1 ─────► a

2 ─────► b

3 ─────► c
```

---

## One-One Function

```
1 ─────► A

2 ─────► B

3 ─────► C
```

---

## Many-One Function

```
1 ─────► A

2 ─────► A

3 ─────► B
```

---

## Onto Function

```
Domain        Codomain

1 ─────► A

2 ─────► B

3 ─────► C

(All elements covered)
```

---

## Into Function

```
Domain       Codomain

1 ─────► A

2 ─────► B

          C

(C not mapped)
```

---

# Solved Examples

### Example 1

Find the Cartesian product of

```
A={1,2}

B={a,b}
```

**Solution**

```
A×B

={(1,a),(1,b),(2,a),(2,b)}
```

Number of elements

```
2×2=4
```

---

### Example 2

Determine whether

```
R={(1,1),(2,2),(3,3)}
```

on

```
A={1,2,3}
```

is reflexive.

**Solution**

Each element is related to itself.

```
(1,1)

(2,2)

(3,3)
```

Hence,

```
R
```

is **reflexive**.

---

### Example 3

Show that

```
f(x)=3x+2
```

is one-one.

**Solution**

Assume

```
f(a)=f(b)
```

Then

```
3a+2

=

3b+2
```

```
3a=3b
```

```
a=b
```

Hence,

```
f
```

is **injective (one-one)**.

---

### Example 4

Find

```
(g∘f)(x)
```

if

```
f(x)=x²

g(x)=x+1
```

**Solution**

```
(g∘f)(x)

=

g(x²)

=

x²+1
```

---

### Example 5

Determine whether

```
f:R→R

f(x)=x²
```

is onto.

**Solution**

Negative real numbers are not images of any real number.

Therefore,

```
Range

≠

Codomain
```

Hence,

```
f
```

is **not onto**.

---

### Example 6

Find the inverse of

```
f(x)=2x+5
```

**Solution**

Let

```
y=2x+5
```

Interchange variables.

```
x=2y+5
```

Solve for

```
y
```

```
y=(x−5)/2
```

Therefore,

```
f⁻¹(x)

=

(x−5)/2
```

---

# Common Mistakes

- Confusing a **relation** with a **function**; every function is a relation, but not every relation is a function.
- Forgetting that **each domain element must have exactly one image** in a function.
- Assuming a one-one function is automatically onto; these are independent properties.
- Incorrectly identifying an **into** function as an **onto** function without checking whether every element of the codomain has a pre-image.
- Omitting one of the three properties (**reflexive**, **symmetric**, or **transitive**) while proving an equivalence relation.
- Finding the inverse of a function that is **not bijective**.
- Forgetting to interchange **x** and **y** while determining the inverse of a function.
- Ignoring the domain and codomain when checking the equality of two functions.

---

# Chapter Summary

- The **Cartesian product** of two sets is the set of all ordered pairs formed from the elements of the two sets.
- A **relation** is any subset of the Cartesian product, while a **function** is a relation in which every element of the domain has exactly one image.
- Important types of relations include **reflexive**, **symmetric**, **transitive**, and **equivalence relations**.
- Functions are classified as **one-one (injective)**, **many-one**, **onto (surjective)**, **into**, and **bijective** based on the mapping between domain and codomain.
- A **bijective function** is both one-one and onto, and only such functions possess an inverse.
- The **inverse of a function** reverses the mapping of the original function and satisfies **f⁻¹(f(x)) = x**.
- The **composition of functions** combines two functions into a new function and is represented by **(g ∘ f)(x) = g(f(x))**.
- Understanding relations and functions provides the foundation for higher topics such as calculus, matrices, vector spaces, and advanced algebra.

# CBSE Class 12 Mathematics

# Chapter 2: Inverse Trigonometric Functions

> **Board:** CBSE  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Inverse Trigonometric Functions

> **Note:** This chapter introduces inverse trigonometric functions, their principal value branches, domains, ranges, graphs, properties, identities, and simplification of inverse trigonometric expressions.

---

# Introduction

Trigonometric functions such as **sin x**, **cos x**, and **tan x** are not one-one over their entire domains. Therefore, they do not possess inverses unless their domains are suitably restricted.

The restricted inverse functions are called **Inverse Trigonometric Functions**. They are widely used in calculus, coordinate geometry, physics, engineering, and signal processing.

---

# 1. Inverse of a Function

## Definition

If a function

```
f : A → B
```

is **bijective**, then its inverse exists.

The inverse function is denoted by

```
f⁻¹ : B → A
```

such that

```
f(f⁻¹(x)) = x
```

and

```
f⁻¹(f(x)) = x
```

---

## Condition for Existence

A function must be

- One-One (Injective)
- Onto (Surjective)

Hence,

```
Bijective
```

---

# 2. Why Trigonometric Functions Need Restriction

Functions like

```
sin x
```

repeat their values.

Example

```
sin 30°

=

sin 150°

=

1/2
```

Hence,

```
sin x
```

is not one-one over all real numbers.

Therefore, its domain is restricted before defining the inverse.

---

# 3. Principal Value Branch

## Definition

The restricted interval on which a trigonometric function becomes one-one is called its **principal value branch**.

The inverse function returns values only from this interval.

---

# 4. Inverse Sine Function

Notation

```
sin⁻¹x

or

arcsin x
```

---

## Domain

```
[-1,1]
```

---

## Range (Principal Value)

```
[-π/2, π/2]
```

---

## Definition

```
y = sin⁻¹x

⇔

sin y = x
```

where

```
−π/2 ≤ y ≤ π/2
```

---

# 5. Inverse Cosine Function

Notation

```
cos⁻¹x
```

---

## Domain

```
[-1,1]
```

---

## Range

```
[0,π]
```

---

Definition

```
y = cos⁻¹x

⇔

cos y = x
```

---

# 6. Inverse Tangent Function

Notation

```
tan⁻¹x
```

---

## Domain

```
(-∞,∞)
```

---

## Range

```
(-π/2,π/2)
```

---

Definition

```
y = tan⁻¹x

⇔

tan y = x
```

---

# 7. Inverse Cotangent Function

Notation

```
cot⁻¹x
```

---

## Domain

```
(-∞,∞)
```

---

## Range

```
(0,π)
```

---

# 8. Inverse Secant Function

Notation

```
sec⁻¹x
```

---

## Domain

```
(-∞,-1]

∪

[1,∞)
```

---

## Range

```
[0,π]

excluding

π/2
```

---

# 9. Inverse Cosecant Function

Notation

```
cosec⁻¹x
```

---

## Domain

```
(-∞,-1]

∪

[1,∞)
```

---

## Range

```
[-π/2,π/2]

excluding

0
```

---

# 10. Principal Values Table

| Function | Domain        | Principal Value Range |
| -------- | ------------- | --------------------- |
| sin⁻¹x   | [-1,1]        | [-π/2, π/2]           |
| cos⁻¹x   | [-1,1]        | [0, π]                |
| tan⁻¹x   | ℝ             | (-π/2, π/2)           |
| cot⁻¹x   | ℝ             | (0, π)                |
| sec⁻¹x   | (-∞,-1]∪[1,∞) | [0,π], y≠π/2          |
| cosec⁻¹x | (-∞,-1]∪[1,∞) | [-π/2,π/2], y≠0       |

---

# 11. Standard Values

| x    | sin⁻¹x | cos⁻¹x |
| ---- | ------ | ------ |
| 0    | 0      | π/2    |
| 1/2  | π/6    | π/3    |
| √2/2 | π/4    | π/4    |
| √3/2 | π/3    | π/6    |
| 1    | π/2    | 0      |
| -1   | -π/2   | π      |

---

## Tangent Values

| x    | tan⁻¹x |
| ---- | ------ |
| 0    | 0      |
| 1    | π/4    |
| -1   | -π/4   |
| √3   | π/3    |
| 1/√3 | π/6    |

---

# 12. Graphs of Inverse Functions

## Graph of y = sin⁻¹x

```
y

π/2 │        •

     │      /

     │    /

 0 ──┼───•

     │ /

-π/2│•

     └──────────── x

      -1   0   1
```

---

## Graph of y = cos⁻¹x

```
π │•

   │ \

   │  \

π/2│   •

   │     \

0  │       •

   └──────────

   -1 0 1
```

---

## Graph of y = tan⁻¹x

```
π/2 ─────────

      /

    /

0──•

  /

/

-π/2────────
```

---

# 13. Important Identities

## Identity 1

```
sin(sin⁻¹x)

=

x
```

---

## Identity 2

```
cos(cos⁻¹x)

=

x
```

---

## Identity 3

```
tan(tan⁻¹x)

=

x
```

---

## Identity 4

```
sin⁻¹x

+

cos⁻¹x

=

π/2
```

---

## Identity 5

```
tan⁻¹x

+

cot⁻¹x

=

π/2
```

---

## Identity 6

```
sec⁻¹x

=

cos⁻¹(1/x)
```

for

```
|x|≥1
```

---

## Identity 7

```
cosec⁻¹x

=

sin⁻¹(1/x)
```

---

# 14. Properties

## Property 1

```
sin⁻¹(-x)

=

-sin⁻¹x
```

Odd function

---

## Property 2

```
tan⁻¹(-x)

=

-tan⁻¹x
```

Odd function

---

## Property 3

```
cos⁻¹(-x)

=

π-cos⁻¹x
```

---

## Property 4

```
cot⁻¹(-x)

=

π-cot⁻¹x
```

---

# 15. Simplification of Expressions

Example

```
sin(sin⁻¹x)

=x
```

---

Example

```
cos(cos⁻¹x)

=x
```

---

Example

```
tan(tan⁻¹x)

=x
```

---

Example

```
sin⁻¹(1)

=

π/2
```

---

Example

```
cos⁻¹(0)

=

π/2
```

---

# 16. Composite Functions

Example

```
sin(cos⁻¹x)
```

Let

```
θ=cos⁻¹x
```

Then

```
cosθ=x
```

Using Pythagoras,

```
sinθ

=

√(1−x²)
```

Hence,

```
sin(cos⁻¹x)

=

√(1−x²)
```

---

Similarly,

```
cos(sin⁻¹x)

=

√(1−x²)
```

---

Also,

```
tan(sin⁻¹x)

=

x/√(1−x²)
```

---

And,

```
sin(tan⁻¹x)

=

x/√(1+x²)
```

---

# 17. General Strategy for Solving Problems

1. Identify the inverse function.
2. Check the domain restrictions.
3. Use the principal value range.
4. Apply standard identities if possible.
5. Simplify using right triangle relations when required.

---

# Comparison Tables

## Trigonometric vs Inverse Trigonometric Functions

| Trigonometric         | Inverse Trigonometric |
| --------------------- | --------------------- |
| Input is angle        | Input is ratio        |
| Output is ratio       | Output is angle       |
| Example: sin30° = 1/2 | sin⁻¹(1/2) = 30°      |

---

## sin⁻¹x vs cos⁻¹x

| sin⁻¹x            | cos⁻¹x       |
| ----------------- | ------------ |
| Range: [-π/2,π/2] | Range: [0,π] |
| Increasing        | Decreasing   |

---

## tan⁻¹x vs cot⁻¹x

| tan⁻¹x            | cot⁻¹x       |
| ----------------- | ------------ |
| Range: (-π/2,π/2) | Range: (0,π) |
| Increasing        | Decreasing   |

---

# ASCII Diagrams

## Principal Triangle for sin⁻¹x

```
      |
      |\
 √1-x²| \
      |  \
      |θ__\
        x
```

---

## Principal Triangle for tan⁻¹x

```
      x
      |
      |\
      | \
      |__\
       1
```

---

## Domain of sin⁻¹x

```
<====●===========●====>

    -1          1
```

---

## Range of sin⁻¹x

```
<====●===========●====>

 -π/2          π/2
```

---

# Solved Examples

### Example 1

Find

```
sin⁻¹(1/2)
```

**Solution**

From the standard values,

```
sin(π/6)

=

1/2
```

Therefore,

```
sin⁻¹(1/2)

=

π/6
```

---

### Example 2

Evaluate

```
cos⁻¹(-1)
```

**Solution**

Since

```
cosπ=-1
```

and

```
π

lies in

[0,π]
```

Therefore,

```
cos⁻¹(-1)

=

π
```

---

### Example 3

Simplify

```
sin(cos⁻¹x)
```

**Solution**

Let

```
θ=cos⁻¹x
```

Then

```
cosθ=x
```

Therefore,

```
sinθ

=

√(1−x²)
```

Hence,

```
sin(cos⁻¹x)

=

√(1−x²)
```

---

### Example 4

Evaluate

```
sin⁻¹(1)

+

cos⁻¹(1)
```

**Solution**

```
sin⁻¹(1)

=

π/2
```

```
cos⁻¹(1)

=

0
```

Hence,

```
π/2+0

=

π/2
```

---

### Example 5

Evaluate

```
tan⁻¹(1)

+

cot⁻¹(1)
```

**Solution**

Using the identity,

```
tan⁻¹x

+

cot⁻¹x

=

π/2
```

Therefore,

```
π/2
```

---

### Example 6

Simplify

```
cos(sin⁻¹x)
```

**Solution**

Let

```
θ=sin⁻¹x
```

Then

```
sinθ=x
```

Using

```
sin²θ+cos²θ=1
```

```
cosθ

=

√(1−x²)
```

Hence,

```
cos(sin⁻¹x)

=

√(1−x²)
```

---

# Common Mistakes

- Confusing **sin⁻¹x** with **1/sin x**; **sin⁻¹x** denotes the inverse sine function, not the reciprocal.
- Ignoring the **principal value range** while evaluating inverse trigonometric functions.
- Using angles outside the principal branch as answers.
- Forgetting to check the **domain** before evaluating expressions such as **sin⁻¹x** or **cos⁻¹x**.
- Applying identities like **sin(sin⁻¹x) = x** correctly but assuming **sin⁻¹(sin x) = x** for all values of **x**; this is only true within the principal value range.
- Using the wrong sign while simplifying expressions like **sin(cos⁻¹x)**; the positive square root is taken because the angle lies in the principal value range.
- Mixing up the ranges of **tan⁻¹x** and **cot⁻¹x**.

---

# Chapter Summary

- **Inverse trigonometric functions** are defined by restricting the domains of trigonometric functions so that they become one-one.
- The **principal value branch** determines the unique angle returned by each inverse trigonometric function.
- Each inverse trigonometric function has a specific **domain** and **range** that must always be respected.
- Standard values and identities such as **sin⁻¹x + cos⁻¹x = π/2** and **tan⁻¹x + cot⁻¹x = π/2** simplify many calculations.
- Composite expressions like **sin(cos⁻¹x)** and **cos(sin⁻¹x)** can be simplified using right triangles and the Pythagorean identity.
- Graphs of inverse trigonometric functions help visualize their domains, ranges, and principal values.
- A clear understanding of inverse trigonometric functions is essential for differentiation, integration, coordinate geometry, and higher mathematics.

# CBSE Class 12 Mathematics

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

# Chapter 5: Continuity and Differentiability

> **Board:** CBSE  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Continuity and Differentiability

> **Note:** This chapter explains the concepts of continuity and differentiability of functions, derivatives of inverse trigonometric, exponential and logarithmic functions, implicit differentiation, logarithmic differentiation, the Chain Rule, and second-order derivatives.

---

# Introduction

The concepts of **continuity** and **differentiability** are fundamental in calculus. Continuity describes whether a function has any breaks or jumps, while differentiability determines whether the function has a well-defined tangent at every point.

These concepts are extensively used in physics, engineering, economics, optimization, and higher mathematics.

---

# 1. Continuity of a Function

## Definition

A function **f(x)** is said to be **continuous** at a point

```
x = a
```

if all the following conditions are satisfied:

1.

```
f(a)
```

exists.

2.

```
lim (x→a⁻) f(x)
```

exists.

3.

```
lim (x→a⁺) f(x)
```

exists.

4.

```
lim (x→a⁻) f(x)

=

lim (x→a⁺) f(x)

=

f(a)
```

---

## Symbolically

```
lim (x→a) f(x)

=

f(a)
```

---

# 2. Types of Discontinuity

---

## (A) Removable Discontinuity

Occurs when

```
LHL = RHL
```

but

```
f(a)
```

is either undefined or has a different value.

---

## (B) Jump Discontinuity

Occurs when

```
LHL ≠ RHL
```

---

## (C) Infinite Discontinuity

Occurs when one or both limits become infinite.

---

## (D) Oscillatory Discontinuity

Occurs when the limit does not exist due to oscillation.

Example

```
sin(1/x)
```

at

```
x = 0
```

---

# 3. Continuity of Standard Functions

The following functions are continuous on their domains:

- Polynomial functions
- Rational functions (where denominator ≠ 0)
- Trigonometric functions
- Inverse trigonometric functions (on their domains)
- Exponential functions
- Logarithmic functions (for x > 0)

---

# 4. Differentiability

## Definition

A function is **differentiable** at

```
x = a
```

if

```
lim (h→0)

[f(a+h)-f(a)]/h
```

exists.

This limit is called the derivative.

Notation

```
f'(a)

or

dy/dx
```

---

## Relation Between Continuity and Differentiability

If a function is differentiable at a point, then it is continuous at that point.

However,

> **Every differentiable function is continuous, but every continuous function is not necessarily differentiable.**

Example

```
f(x)=|x|
```

is continuous but not differentiable at

```
x=0
```

---

# 5. Derivative of Composite Functions (Chain Rule)

## Statement

If

```
y=f(u)

and

u=g(x)
```

then

```
dy/dx

=

(dy/du)

×

(du/dx)
```

---

## Example

Find the derivative of

```
y=(3x+1)⁵
```

Solution

```
dy/dx

=

5(3x+1)⁴ × 3

=

15(3x+1)⁴
```

---

# 6. Derivatives of Inverse Trigonometric Functions

| Function | Derivative      |
| -------- | --------------- |
| sin⁻¹x   | 1/√(1−x²)       |
| cos⁻¹x   | -1/√(1−x²)      |
| tan⁻¹x   | 1/(1+x²)        |
| cot⁻¹x   | -1/(1+x²)       |
| sec⁻¹x   | 1/\|x\|√(x²−1)  |
| cosec⁻¹x | -1/\|x\|√(x²−1) |

Valid on their respective domains.

---

# 7. Derivatives of Exponential Functions

## Natural Exponential Function

```
d/dx (eˣ)

=

eˣ
```

---

## General Exponential Function

```
d/dx (aˣ)

=

aˣ ln(a)
```

where

```
a>0

and

a≠1
```

---

# 8. Derivatives of Logarithmic Functions

## Natural Logarithm

```
d/dx (ln x)

=

1/x
```

for

```
x>0
```

---

## General Logarithm

```
d/dx (logₐx)

=

1/(x ln a)
```

---

# 9. Implicit Differentiation

## Definition

When a function is not explicitly given in the form

```
y=f(x)
```

the derivative is found by differentiating both sides with respect to

```
x
```

while treating

```
y
```

as a function of

````
x
```.

---

## Example

Given

````

x²+y²=25

```

Differentiate both sides.

```

2x+2y(dy/dx)=0

```

Therefore,

```

dy/dx

=

−x/y

```

---

# 10. Logarithmic Differentiation

## Definition

This method is useful when variables appear in both the base and exponent.

General form

```

y=u(x)^v(x)

```

Take logarithm on both sides.

```

ln y

=

v ln u

```

Differentiate implicitly.

---

## Example

Find the derivative of

```

y=xˣ

```

Solution

Take logarithm.

```

ln y=xlnx

```

Differentiate.

```

1/y

(dy/dx)

=

lnx+1

```

Hence,

```

dy/dx

=

xˣ(lnx+1)

```

---

# 11. Parametric Differentiation

If

```

x=f(t)

y=g(t)

```

then

```

dy/dx

=

(dy/dt)/(dx/dt)

```

provided

```

dx/dt ≠0

```

---

# 12. Second-Order Derivative

## Definition

The derivative of the first derivative is called the second derivative.

Notation

```

d²y/dx²

```

---

## Formula

If

```

y=f(x)

```

then

```

d²y/dx²

=

d/dx

(dy/dx)

```

---

## Example

Given

```

y=x³

```

First derivative

```

dy/dx=3x²

```

Second derivative

```

d²y/dx²

=6x

```

---

# 13. Differentiability of Special Functions

---

## Modulus Function

```

|x|

```

Continuous everywhere.

Not differentiable at

```

x=0

```

---

## Greatest Integer Function

Discontinuous at every integer.

Hence,

not differentiable there.

---

# 14. Important Standard Derivatives

| Function | Derivative |
|----------|------------|
| xⁿ | nxⁿ⁻¹ |
| sin x | cos x |
| cos x | -sin x |
| tan x | sec²x |
| cot x | -cosec²x |
| sec x | sec x tan x |
| cosec x | -cosec x cot x |
| eˣ | eˣ |
| ln x | 1/x |

---

# Comparison Tables

## Continuity vs Differentiability

| Continuity | Differentiability |
|------------|-------------------|
| No break in graph | Tangent exists |
| Depends on limits | Depends on derivative |
| Necessary for differentiability | Stronger condition |

---

## Explicit vs Implicit Functions

| Explicit | Implicit |
|----------|----------|
| y=f(x) | F(x,y)=0 |
| Differentiate directly | Differentiate both variables |

---

## Ordinary vs Logarithmic Differentiation

| Ordinary | Logarithmic |
|-----------|-------------|
| Used for simple functions | Used for variable exponents |
| Direct differentiation | Apply logarithm first |

---

# ASCII Diagrams

## Continuous Function

```

      •

    /

/

/

```

(No break)

---

## Jump Discontinuity

```

•

|

|

      •

```

---

## Cusp (Not Differentiable)

```

\

\

>

/

/

```

---

## Chain Rule

```

x

↓

u

↓

y

```

---

# Solved Examples

### Example 1

Check whether

```

f(x)=x²

```

is continuous at

```

x=2

```

**Solution**

```

lim(x→2)x²

=4

```

and

```

f(2)=4

```

Since

```

Limit

=

Function Value

```

the function is **continuous** at

```

x=2

```

---

### Example 2

Differentiate

```

y=sin⁻¹x

```

**Solution**

Using the standard derivative,

```

dy/dx

=

1/√(1−x²)

```

---

### Example 3

Find

```

d/dx(e³ˣ)

```

**Solution**

Using the Chain Rule,

```

d/dx(e³ˣ)

=

3e³ˣ

```

---

### Example 4

Find the derivative of

```

y=ln(x²+1)

```

**Solution**

Using the Chain Rule,

```

dy/dx

=

1/(x²+1)

×

2x

```

```

=

2x/(x²+1)

```

---

### Example 5

Differentiate implicitly

```

x²+y²=16

```

**Solution**

Differentiate both sides.

```

2x+2y(dy/dx)=0

```

Hence,

```

dy/dx

=

−x/y

```

---

### Example 6

Find the second derivative of

```

y=x⁴

```

**Solution**

First derivative,

```

dy/dx

=4x³

```

Second derivative,

```

d²y/dx²

=12x²

```

---

# Common Mistakes

- Assuming that every **continuous function** is also **differentiable**.
- Forgetting to verify all conditions for continuity before concluding that a function is continuous.
- Ignoring the **Chain Rule** while differentiating composite functions.
- Omitting the factor **dy/dx** during **implicit differentiation**.
- Applying logarithmic differentiation to simple expressions where ordinary differentiation is sufficient.
- Forgetting the absolute value in the derivatives of **sec⁻¹x** and **cosec⁻¹x**.
- Confusing **first-order** and **second-order** derivatives.
- Differentiating logarithmic functions without checking that their domains satisfy the required conditions (e.g., **x > 0** for **ln x**).

---

# Chapter Summary

- A function is **continuous** at a point if its limit exists and equals the function value at that point.
- A function is **differentiable** if its derivative exists; differentiability always implies continuity, but the converse is not true.
- Standard functions such as polynomials, exponential functions, logarithmic functions, and trigonometric functions are continuous on their respective domains.
- The **Chain Rule** is used to differentiate composite functions.
- Standard derivative formulas for **inverse trigonometric**, **exponential**, and **logarithmic** functions are fundamental tools in calculus.
- **Implicit differentiation** is used when a function is not given explicitly in terms of one variable.
- **Logarithmic differentiation** simplifies the differentiation of functions with variable exponents.
- The **second-order derivative** measures the rate of change of the first derivative and is useful in curve analysis and applications.
- Continuity and differentiability form the theoretical basis for applications of derivatives, optimization, integration, and differential equations.





# CBSE Class 12 Mathematics

# Chapter 6: Applications of Derivatives

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Applications of Derivatives

> **Note:** This chapter explains the applications of derivatives in determining the rate of change of quantities, increasing and decreasing functions, maxima and minima, tangents and normals, and solving optimization problems.

---

# Introduction

The derivative measures the **instantaneous rate of change** of a function with respect to its independent variable. Beyond finding slopes, derivatives have numerous practical applications in science, engineering, economics, biology, and optimization.

The major applications include:

- Rate of change
- Tangents and normals
- Monotonicity (increasing/decreasing)
- Local and absolute maxima/minima
- Optimization problems

---

# 1. Rate of Change of Quantities

## Definition

If a quantity **y** depends on another quantity **x**, then

```

dy/dx

```

represents the **instantaneous rate of change** of **y** with respect to **x**.

---

## Examples

- Velocity = Rate of change of displacement.
- Acceleration = Rate of change of velocity.
- Growth of population.
- Cost and revenue analysis.
- Expansion of a metal rod.

---

## Formula

If

```

y = f(x)

```

then

```

Rate of Change

=

dy/dx

```

---

# 2. Increasing and Decreasing Functions

## Increasing Function

A function is **increasing** in an interval if

```

f'(x) > 0

```

for every

```

x

```

in the interval.

Graphically,

```

     /

/

/

```

---

## Decreasing Function

A function is **decreasing** if

```

f'(x) < 0

```

Graphically,

```

\

\

\

```

---

## Constant Function

If

```

f'(x)=0

```

throughout an interval, the function is constant there.

---

# 3. Critical (Stationary) Points

## Definition

A point

```

x = a

```

is called a **critical point** if

```

f'(a)=0

```

or

```

f'(a)

```

does not exist.

Critical points are candidates for maxima or minima.

---

# 4. First Derivative Test

## Procedure

### Step 1

Find

```

f'(x)

```

---

### Step 2

Find critical points by solving

```

f'(x)=0

```

---

### Step 3

Study the sign of

```

f'(x)

```

before and after each critical point.

---

## Conclusion

| Change in f'(x) | Nature |
|-----------------|--------|
| + to - | Local Maximum |
| - to + | Local Minimum |
| No sign change | Neither maximum nor minimum |

---

# 5. Second Derivative Test

Suppose

```

f'(a)=0

```

---

## Case 1

If

```

f''(a)>0

```

then

```

Local Minimum

```

---

## Case 2

If

```

f''(a)<0

```

then

```

Local Maximum

```

---

## Case 3

If

```

f''(a)=0

```

the test is inconclusive.

Use the first derivative test or higher derivatives.

---

# 6. Local and Absolute Extrema

---

## Local Maximum

A function has a local maximum at

```

x=a

```

if

```

f(a)

```

is greater than nearby values.

---

## Local Minimum

A function has a local minimum if

```

f(a)

```

is smaller than nearby values.

---

## Absolute Maximum

Largest value of the function over its entire domain or specified interval.

---

## Absolute Minimum

Smallest value of the function over its entire domain or specified interval.

---

# 7. Tangent to a Curve

## Definition

A tangent is a straight line that touches a curve at a point and has the same slope there.

---

## Slope

For

```

y=f(x)

```

at

```

(x₁,y₁)

```

Slope

```

m

=

f'(x₁)

```

---

## Equation of Tangent

```

y-y₁

=

m(x-x₁)

```

---

# 8. Normal to a Curve

## Definition

The normal is the line perpendicular to the tangent at the point of contact.

---

## Slope of Normal

```

mₙ

=

−1/m

```

provided

```

m≠0

```

---

## Equation

```

y-y₁

=

−1/m

(x-x₁)

```

---

# 9. Approximation Using Derivatives

If

```

y=f(x)

```

then for a small change

```

Δx

```

the approximate change is

```

Δy

≈

dy

=

f'(x)Δx

```

---

## Applications

- Measurement errors
- Engineering approximations
- Scientific calculations

---

# 10. Optimization Problems

## Definition

Optimization means finding the **maximum** or **minimum** value of a quantity.

---

## General Steps

1. Draw a diagram if necessary.
2. Identify the quantity to optimize.
3. Express it as a function of one variable.
4. Differentiate.
5. Set

```

f'(x)=0

```

6. Verify using the first or second derivative test.
7. State the answer with units.

---

# 11. Optimization of Geometric Figures

Typical problems include:

- Maximum area of a rectangle.
- Maximum volume of a box.
- Minimum surface area.
- Minimum perimeter.
- Largest enclosed area.

---

# 12. Optimization in Daily Life

Applications include:

- Designing containers.
- Minimizing production cost.
- Maximizing profit.
- Minimizing travel time.
- Efficient packaging.

---

# 13. Monotonicity Table

| Value of f'(x) | Nature of Function |
|---------------:|--------------------|
| f'(x) > 0 | Increasing |
| f'(x) < 0 | Decreasing |
| f'(x) = 0 | Stationary point |

---

# 14. Important Observations

- Derivative gives slope.
- Positive slope → Increasing function.
- Negative slope → Decreasing function.
- Zero derivative indicates a stationary point.
- Every maximum/minimum occurs at a critical point, but every critical point is **not** necessarily a maximum or minimum.

---

# Comparison Tables

## Increasing vs Decreasing Function

| Increasing | Decreasing |
|-------------|------------|
| f'(x) > 0 | f'(x) < 0 |
| Graph rises | Graph falls |

---

## Tangent vs Normal

| Tangent | Normal |
|----------|--------|
| Touches the curve | Perpendicular to tangent |
| Slope = f'(x) | Slope = -1/f'(x) |

---

## Local vs Absolute Extrema

| Local | Absolute |
|--------|----------|
| Compared with nearby points | Compared with all points in the domain |
| May not be the greatest/smallest overall | Greatest or smallest overall value |

---

## First Derivative Test vs Second Derivative Test

| First Derivative Test | Second Derivative Test |
|-----------------------|------------------------|
| Uses sign change of f'(x) | Uses value of f''(x) |
| Applicable in all cases | Inconclusive when f''(a) = 0 |

---

# ASCII Diagrams

## Increasing Function

```

y

│ /

│ /

│ /

└────────── x

```

---

## Decreasing Function

```

y

│\

│ \

│ \

└────────── x

```

---

## Local Maximum

```

      ▲

     / \

__**/ \_**_

```

---

## Local Minimum

```

---

    \

     \/

     /\

```

---

## Tangent and Normal

```

        Normal

          |

          |

---------•---------

       Tangent

```

---

# Solved Examples

### Example 1

Find the intervals in which

```

f(x)=x²

```

is increasing or decreasing.

**Solution**

Differentiate.

```

f'(x)=2x

```

For

```

x<0

```

```

f'(x)<0

```

Hence, the function is **decreasing**.

For

```

x>0

```

```

f'(x)>0

```

Hence, the function is **increasing**.

---

### Example 2

Find the critical points of

```

f(x)=x³−3x

```

**Solution**

```

f'(x)

=

3x²−3

```

Set

```

3x²−3=0

```

```

x²=1

```

```

x=±1

```

Critical points are

```

x=-1

and

x=1

```

---

### Example 3

Find the local extrema of

```

f(x)=x²−4x+3

```

**Solution**

```

f'(x)

=

2x−4

```

Set

```

2x−4=0

```

```

x=2

```

Second derivative

```

f''(x)=2>0

```

Hence,

```

x=2

```

is a **local minimum**.

Minimum value

```

f(2)

=

4−8+3

=

−1

```

---

### Example 4

Find the equation of the tangent to

```

y=x²

```

at

```

(1,1)

```

**Solution**

```

dy/dx

=

2x

```

At

```

x=1

```

Slope

```

m=2

```

Equation

```

y−1

=

2(x−1)

```

Simplifying,

```

y

=

2x−1

```

---

### Example 5

Find the equation of the normal to

```

y=x²

```

at

```

(1,1)

```

**Solution**

Slope of tangent

```

2

```

Slope of normal

```

−1/2

```

Equation

```

y−1

=

−1/2(x−1)

```

---

### Example 6

A rectangle has a perimeter of

```

40 m

```

Find the maximum possible area.

**Solution**

Let

```

Length=x

```

Then

```

Breadth

=

20−x

```

Area

```

A=x(20−x)

=

20x−x²

```

Differentiate.

```

A'

=

20−2x

```

Set

```

20−2x=0

```

```

x=10

```

Second derivative

```

A''=-2<0

```

Hence, the area is maximum.

Maximum area

```

=10×10

=100 m²

```

---

# Common Mistakes

- Assuming every point where **f'(x)=0** is automatically a maximum or minimum.
- Forgetting to check the sign of the first derivative or the value of the second derivative after finding critical points.
- Mixing up the conditions for **increasing** and **decreasing** functions.
- Using the slope of the tangent instead of the slope of the normal.
- Ignoring domain restrictions while finding absolute maxima or minima on a closed interval.
- Making algebraic errors while expressing optimization problems in terms of a single variable.
- Forgetting to verify whether the obtained critical point actually satisfies the required maximum or minimum condition.
- Omitting units in optimization problems involving physical quantities.

---

# Chapter Summary

- The **derivative** represents the instantaneous rate of change of a function and is widely used to analyze physical and mathematical quantities.
- A function is **increasing** where **f'(x) > 0** and **decreasing** where **f'(x) < 0**.
- **Critical points** occur where the first derivative is zero or undefined and are candidates for local extrema.
- The **First Derivative Test** determines maxima and minima by examining the sign change of the derivative, while the **Second Derivative Test** uses the sign of the second derivative.
- The equations of the **tangent** and **normal** depend on the derivative at the point of contact.
- Derivatives provide useful approximations for small changes using **dy ≈ f'(x) dx**.
- **Optimization problems** involve expressing a quantity as a function of one variable, differentiating it, locating critical points, and verifying the required maximum or minimum.
- Applications of derivatives are fundamental in science, engineering, economics, business, and many real-life decision-making problems.





# CBSE Class 12 Mathematics

# Chapter 7: Integrals

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Integrals

> **Note:** This chapter introduces integration as the inverse process of differentiation, indefinite and definite integrals, standard integration formulas, methods of integration, the Fundamental Theorem of Calculus, and properties of definite integrals.

---

# Introduction

Integration is one of the two fundamental operations of calculus, the other being differentiation. While differentiation determines the rate of change of a function, **integration** helps determine the original function when its derivative is known and is also used to calculate areas, volumes, work, and many physical quantities.

There are two main types of integrals:

- **Indefinite Integrals**
- **Definite Integrals**

---

# 1. Integration

## Definition

Integration is the inverse process of differentiation.

If

```

dF(x)/dx = f(x)

```

then

```

∫f(x) dx = F(x) + C

```

where

- **F(x)** = Antiderivative (Primitive)
- **C** = Constant of Integration

---

## Integral Sign

The symbol

```

∫

```

was introduced by **Gottfried Wilhelm Leibniz**.

---

# 2. Indefinite Integral

## Definition

The indefinite integral of a function is the family of all its antiderivatives.

Notation

```

∫f(x) dx

```

General form

```

∫f(x) dx = F(x) + C

```

---

## Constant of Integration

Since

```

d/dx (C) = 0

```

every indefinite integral must include an arbitrary constant.

---

# 3. Basic Standard Integrals

| Function | Integral |
|----------|----------|
| xⁿ (n ≠ -1) | xⁿ⁺¹/(n+1) + C |
| 1/x | ln|x| + C |
| eˣ | eˣ + C |
| aˣ | aˣ/ln(a) + C |
| sin x | -cos x + C |
| cos x | sin x + C |
| sec²x | tan x + C |
| cosec²x | -cot x + C |
| sec x tan x | sec x + C |
| cosec x cot x | -cosec x + C |
| 1/(1+x²) | tan⁻¹x + C |
| 1/√(1-x²) | sin⁻¹x + C |

---

# 4. Properties of Indefinite Integrals

## Property 1

```

∫[f(x)+g(x)]dx

=

∫f(x)dx

-

∫g(x)dx

```

---

## Property 2

```

∫k f(x)dx

=

k∫f(x)dx

```

where

```

k

```

is a constant.

---

# 5. Integration by Substitution

## Formula

If

```

t=g(x)

```

then

```

∫f(g(x))g'(x)dx

=

∫f(t)dt

```

---

## Steps

1. Choose a suitable substitution.
2. Differentiate the substitution.
3. Replace variables.
4. Integrate.
5. Substitute back.

---

## Example

```

∫2x(x²+1)⁵dx

```

Let

```

t=x²+1

```

Then

```

dt=2xdx

```

Therefore,

```

∫t⁵dt

=

t⁶/6+C

```

Hence,

```

(x²+1)⁶/6+C

```

---

# 6. Integration by Parts

## Formula

```

∫u dv

=

uv−∫v du

```

---

## ILATE Rule

To choose

```

u

```

prefer the following order:

- I → Inverse Trigonometric
- L → Logarithmic
- A → Algebraic
- T → Trigonometric
- E → Exponential

---

## Example

```

∫x eˣdx

```

Take

```

u=x

dv=eˣdx

```

Then

```

du=dx

v=eˣ

```

Hence,

```

xeˣ−eˣ+C

```

or

```

eˣ(x−1)+C

```

---

# 7. Integration by Partial Fractions

Used for rational functions.

General procedure

1. Factorize the denominator.
2. Express the fraction in partial fractions.
3. Integrate each term separately.

---

## Example

```

1/(x²−1)

=

1/2(x−1)

−

1/2(x+1)

```

Integrate each term independently.

---

# 8. Definite Integral

## Definition

A definite integral has fixed upper and lower limits.

Notation

```

∫ₐᵇf(x)dx

```

---

## Formula

If

```

F'(x)=f(x)

```

then

```

∫ₐᵇf(x)dx

=

F(b)

−

F(a)

```

This is known as the **Fundamental Theorem of Calculus**.

---

# 9. Fundamental Theorem of Calculus

## Statement

If

```

F'(x)=f(x)

```

then

```

∫ₐᵇf(x)dx

=

F(b)-F(a)

```

---

# 10. Properties of Definite Integrals

---

## Property 1

```

∫ₐᵃf(x)dx

=

0

```

---

## Property 2

```

∫ₐᵇf(x)dx

=

−∫ᵇₐf(x)dx

```

---

## Property 3

```

∫ₐᵇf(x)dx

-

∫ᵇ𝚌f(x)dx

=

∫ₐ𝚌f(x)dx

```

---

## Property 4

```

∫ₐᵇf(x)dx

=

∫ₐᵇf(a+b−x)dx

```

---

## Property 5

If

```

f(x)

```

is even,

```

∫₋ₐᵃf(x)dx

=

2∫₀ᵃf(x)dx

```

---

## Property 6

If

```

f(x)

```

is odd,

```

∫₋ₐᵃf(x)dx

=

0

```

---

# 11. Even and Odd Functions

## Even Function

```

f(-x)=f(x)

```

Examples

- x²
- cos x

---

## Odd Function

```

f(-x)=-f(x)

```

Examples

- x³
- sin x

---

# 12. Important Definite Integrals

```

∫₀π sinx dx

=

2

```

---

```

∫₀π cosx dx

=

0

```

---

```

∫₀π/2 sinx dx

=

1

```

---

```

∫₀π/2 cosx dx

=

1

```

---

# 13. Applications of Definite Integrals

- Area under curves
- Area between curves
- Volume calculations
- Average value of functions
- Physics and engineering applications

---

# Comparison Tables

## Indefinite vs Definite Integral

| Indefinite Integral | Definite Integral |
|---------------------|-------------------|
| No limits | Has limits |
| Result is a function | Result is a number |
| Contains +C | No constant of integration |

---

## Differentiation vs Integration

| Differentiation | Integration |
|-----------------|-------------|
| Finds rate of change | Finds accumulated quantity |
| Reduces degree | Increases degree (generally) |
| No arbitrary constant | Includes arbitrary constant (indefinite) |

---

## Integration by Substitution vs Integration by Parts

| Substitution | By Parts |
|--------------|----------|
| Variable transformation | Product of functions |
| Simplifies composite functions | Simplifies products |

---

# ASCII Diagrams

## Area Under a Curve

```

y

│ /

│ /

│ /

│***/***_____ x

Area = Integral

```

---

## Definite Integral

```

a b

│---------│

Area under curve

```

---

## Integration by Parts

```

∫u dv

↓

uv

↓

−∫v du

```

---

## Substitution Method

```

x

↓

t=g(x)

↓

Simpler Integral

```

---

# Solved Examples

### Example 1

Evaluate

```

∫x³dx

```

**Solution**

Using

```

∫xⁿdx

=

xⁿ⁺¹/(n+1)+C

```

```

∫x³dx

=

x⁴/4+C

```

---

### Example 2

Evaluate

```

∫(2x+3)dx

```

**Solution**

```

=x²+3x+C

```

---

### Example 3

Evaluate

```

∫2x(x²+4)³dx

```

**Solution**

Let

```

t=x²+4

```

Then

```

dt=2xdx

```

Therefore,

```

∫t³dt

=

t⁴/4+C

```

Hence,

```

(x²+4)⁴/4+C

```

---

### Example 4

Evaluate

```

∫xeˣdx

```

**Solution**

Using integration by parts,

```

=xeˣ−eˣ+C

```

or

```

=eˣ(x−1)+C

```

---

### Example 5

Evaluate

```

∫₀²3x²dx

```

**Solution**

```

=x³│₀²

```

```

=8−0

```

```

=8

```

---

### Example 6

Evaluate

```

∫₋₂²x³dx

```

**Solution**

Since

```

x³

```

is an odd function,

```

∫₋₂²x³dx

=

0

```

---

# Common Mistakes

- Forgetting to include the **constant of integration (+C)** in indefinite integrals.
- Applying the power rule to **1/x**; remember that **∫1/x dx = ln|x| + C**, not **x⁰/0**.
- Choosing an unsuitable substitution, making the integral more complicated.
- Ignoring the **ILATE rule** while selecting **u** in integration by parts.
- Forgetting to substitute back the original variable after using substitution.
- Adding **+C** to definite integrals; definite integrals evaluate to numerical values and do **not** include an arbitrary constant.
- Applying properties of even and odd functions without verifying the symmetry of the interval.
- Making sign errors while evaluating **F(b) − F(a)** in definite integrals.

---

# Chapter Summary

- **Integration** is the inverse process of differentiation and is used to determine antiderivatives and accumulated quantities.
- An **indefinite integral** represents a family of functions and always includes an arbitrary constant **C**.
- A **definite integral** represents the accumulated value of a function over a specified interval and evaluates to a numerical value.
- Standard integration formulas provide antiderivatives for algebraic, trigonometric, exponential, logarithmic, and inverse trigonometric functions.
- The main methods of integration are **substitution**, **integration by parts**, and **partial fractions**.
- The **Fundamental Theorem of Calculus** connects differentiation and integration through the relation **∫ₐᵇf(x)dx = F(b) − F(a)**.
- Properties of definite integrals, especially those involving **even** and **odd** functions, simplify many calculations.
- Integration forms the basis for finding areas, volumes, average values, and solving numerous problems in mathematics, physics, engineering, and economics.






# CBSE Class 12 Mathematics

# Chapter 8: Applications of Integrals

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Applications of Integrals

> **Note:** This chapter explains the geometric applications of definite integrals, particularly in finding the area under a curve, the area between curves, and the area bounded by curves and coordinate axes.

---

# Introduction

Definite integrals have several important applications in geometry and science. One of the most significant applications is finding the **area enclosed by curves**. Integration allows the calculation of areas of regions with curved boundaries that cannot be determined using elementary geometric formulas.

This chapter focuses on:

- Area under a curve
- Area bounded by a curve and coordinate axes
- Area between two curves
- Choosing the appropriate variable of integration

---

# 1. Area Under a Curve

## Definition

The area enclosed by a curve

```

y = f(x)

```

the x-axis, and the vertical lines

```

x = a

and

x = b

```

is given by

```

Area

=

∫ₐᵇ f(x) dx

```

provided

```

f(x) ≥ 0

```

throughout the interval.

---

## Geometrical Interpretation

The definite integral represents the accumulated area of infinitely thin vertical strips.

---

# 2. Area Below the x-axis

If

```

f(x) < 0

```

on the interval

```

[a, b]

```

then

```

∫ₐᵇ f(x) dx

```

is negative.

The actual area is

```

Area

=

−∫ₐᵇ f(x) dx

```

or equivalently,

```

Area

=

∫ₐᵇ |f(x)| dx

```

---

# 3. Area Between a Curve and the x-axis

The general formula is

```

Area

=

∫ₐᵇ |f(x)| dx

```

The interval should be divided wherever the curve crosses the x-axis.

---

## Steps

1. Find the points where

```

f(x)=0

```

2. Split the interval at these points.
3. Integrate separately over each interval.
4. Add the positive areas.

---

# 4. Area Between Two Curves

Suppose

```

y=f(x)

and

y=g(x)

```

where

```

f(x) ≥ g(x)

```

on

```

[a,b]

```

Then

```

Area

=

∫ₐᵇ [f(x)-g(x)] dx

```

---

## Important Rule

Always subtract

```

Upper Curve

−

Lower Curve

```

---

# 5. Area with Respect to the y-axis

If the curves are expressed as

```

x=f(y)

and

x=g(y)

```

then

```

Area

=

∫𝚌ᵈ [Right Curve−Left Curve] dy

```

where

```

y=c

to

y=d

```

---

# 6. Choosing the Variable of Integration

Choose

```

dx

```

when

- Curves are given as

```

y=f(x)

```

- Vertical strips are convenient.

Choose

```

dy

```

when

- Curves are given as

```

x=f(y)

```

- Horizontal strips are convenient.

---

# 7. Area Between a Curve and the y-axis

If

```

x=f(y)

```

then

```

Area

=

∫𝚌ᵈ f(y) dy

```

provided

```

f(y) ≥ 0

```

---

# 8. Symmetry in Area Problems

---

## Symmetry about the y-axis

If

```

f(x)

```

is an even function,

```

Area

=

2∫₀ᵃ f(x) dx

```

---

## Symmetry about the Origin

If

```

f(x)

```

is odd,

```

∫₋ₐᵃ f(x) dx

=

0

```

However, the **area** is not zero because area is always non-negative.

---

# 9. Area of Simple Regions

---

## Area under

```

y=x

```

from

```

0

to

a

```

```

Area

=

∫₀ᵃ x dx

=

a²/2

```

---

## Area under

```

y=x²

```

from

```

0

to

a

```

```

Area

=

∫₀ᵃ x²dx

=

a³/3

```

---

# 10. Area Enclosed by a Parabola

For example,

```

y²=4ax

```

and the line

```

x=a

```

Express

```

x

```

in terms of

```

y

```

and integrate with respect to

```

y

```

over the appropriate limits.

---

# 11. Area Enclosed by a Circle

For the circle

```

x²+y²=r²

```

Upper semicircle

```

y=√(r²−x²)

```

Lower semicircle

```

y=−√(r²−x²)

```

Entire area

```

Area

=

∫₋ᵣʳ

2√(r²−x²)

dx

```

which evaluates to

```

πr²

```

---

# 12. Applications of Area

Applications include:

- Land surveying
- Architecture
- Civil engineering
- Design of bridges
- Estimation of agricultural fields
- Computer graphics
- Physics

---

# Comparison Tables

## Definite Integral vs Area

| Definite Integral | Area |
|-------------------|------|
| May be positive, negative, or zero | Always non-negative |
| Represents signed area | Represents actual enclosed region |

---

## Area with dx vs Area with dy

| dx | dy |
|----|----|
| Vertical strips | Horizontal strips |
| Integrate with respect to x | Integrate with respect to y |
| Upper − Lower | Right − Left |

---

## Area Under Curve vs Area Between Curves

| Under Curve | Between Curves |
|--------------|----------------|
| One function | Two functions |
| Area with x-axis | Difference of functions |

---

# ASCII Diagrams

## Area Under a Curve

```

y

│ *

│ * |

│ * |

│ * |

└──────────── x

Area = ∫f(x)dx

```

---

## Area Between Two Curves

```

Upper Curve

---

\\\\ Area ////

---

Lower Curve

```

---

## Vertical Strip

```

Curve

|

|▌

|▌

|▌

+------------

dx

```

---

## Horizontal Strip

```

────────► dy

█████████

```

---

# Solved Examples

### Example 1

Find the area under

```

y=x²

```

from

```

x=0

to

x=2

```

**Solution**

```

Area

=

∫₀²x²dx

```

```

=

[x³/3]₀²

```

```

=

8/3 square units

```

---

### Example 2

Find the area under

```

y=3x+1

```

from

```

x=0

to

x=4

```

**Solution**

```

Area

=

∫₀⁴(3x+1)dx

```

```

=

[(3x²/2)+x]₀⁴

```

```

=

24+4

=

28 square units

```

---

### Example 3

Find the area between

```

y=x

and

y=x²

```

**Solution**

Points of intersection

```

x=x²

```

```

x(x−1)=0

```

```

x=0,1

```

Upper curve

```

y=x

```

Area

```

=

∫₀¹(x−x²)dx

```

```

=

[x²/2−x³/3]₀¹

```

```

=

1/2−1/3

=

1/6 square unit

```

---

### Example 4

Find the area under

```

y=sinx

```

from

```

0

to

π

```

**Solution**

```

Area

=

∫₀πsinx dx

```

```

=

[-cosx]₀π

```

```

=

2 square units

```

---

### Example 5

Find the area under

```

y=x

```

from

```

0

to

5

```

**Solution**

```

Area

=

∫₀⁵x dx

```

```

=

[x²/2]₀⁵

```

```

=

25/2 square units

```

---

### Example 6

Find the area enclosed by

```

y=4

and

y=x²

```

**Solution**

Intersection points

```

x²=4

```

```

x=±2

```

Area

```

=

∫₋₂²(4−x²)dx

```

Using symmetry,

```

=

2∫₀²(4−x²)dx

```

```

=

2[4x−x³/3]₀²

```

```

=

2(8−8/3)

```

```

=

32/3 square units

```

---

# Common Mistakes

- Treating the value of a **definite integral** as the actual area even when the curve lies below the x-axis.
- Forgetting to use the absolute value or split the interval when the curve crosses the x-axis.
- Subtracting the curves in the wrong order; always use **Upper Curve − Lower Curve** (or **Right Curve − Left Curve** when integrating with respect to **y**).
- Choosing **dx** when **dy** would simplify the calculation, or vice versa.
- Forgetting to determine the points of intersection before setting the limits of integration.
- Ignoring symmetry, which can simplify calculations significantly.
- Making arithmetic errors while evaluating definite integrals at the upper and lower limits.
- Omitting square units in the final answer for area.

---

# Chapter Summary

- The **definite integral** provides a powerful method for calculating areas enclosed by curves.
- The area under a curve above the x-axis is given by **∫ₐᵇf(x)dx**, while the actual area is **∫ₐᵇ|f(x)|dx** when the curve crosses or lies below the x-axis.
- The area between two curves is calculated as **∫(Upper Curve − Lower Curve)dx** or **∫(Right Curve − Left Curve)dy**, depending on the chosen variable of integration.
- The choice between **dx** and **dy** depends on the orientation of the strips and the form of the equations.
- Symmetry about the coordinate axes often simplifies area calculations.
- Definite integrals are widely used in geometry, engineering, architecture, surveying, physics, and many other scientific applications to determine areas enclosed by irregular boundaries.








# CBSE Class 12 Mathematics

# Chapter 9: Differential Equations

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Differential Equations

> **Note:** This chapter introduces differential equations, their formation, order and degree, general and particular solutions, methods of solving first-order first-degree differential equations, variable separable equations, homogeneous equations, and linear differential equations.

---

# Introduction

A **differential equation** is an equation involving one or more derivatives of an unknown function. Differential equations are widely used to describe natural phenomena such as population growth, radioactive decay, motion of objects, electric circuits, heat transfer, and many engineering and scientific processes.

In CBSE Class 12, the focus is on **first-order first-degree differential equations** and their solution methods.

---

# 1. Differential Equation

## Definition

A **differential equation** is an equation involving an independent variable, a dependent variable, and one or more derivatives of the dependent variable.

General form

```

F(x, y, dy/dx, d²y/dx², ...) = 0

```

where

- **x** = Independent variable
- **y** = Dependent variable

---

## Examples

```

dy/dx = 3x²

```

```

d²y/dx² + y = 0

```

```

(x²+1)dy/dx = y

```

---

# 2. Order of a Differential Equation

## Definition

The **order** of a differential equation is the order of the highest derivative present in the equation.

---

## Examples

### Example 1

```

dy/dx + y = 0

```

Highest derivative

```

dy/dx

```

Order

```

1

```

---

### Example 2

```

d²y/dx² + 3dy/dx + y = 0

```

Highest derivative

```

d²y/dx²

```

Order

```

2

```

---

# 3. Degree of a Differential Equation

## Definition

The **degree** of a differential equation is the power of the highest-order derivative after the equation has been made free from radicals and fractions involving derivatives.

---

## Examples

### Example 1

```

(dy/dx)² + y = 0

```

Order

```

1

```

Degree

```

2

```

---

### Example 2

```

d²y/dx² + y = 0

```

Order

```

2

```

Degree

```

1

```

---

## Conditions for Degree

The degree is defined only when:

- The equation is polynomial in derivatives.
- There are no radicals or fractional powers of derivatives.

---

# 4. Solution of a Differential Equation

## Definition

A function that satisfies the differential equation is called its **solution**.

---

## General Solution

Contains one or more arbitrary constants.

Example

Given

```

dy/dx = 2x

```

Integrating,

```

y = x² + C

```

---

## Particular Solution

Obtained after applying given initial or boundary conditions.

Example

If

```

y = 5

```

when

```

x = 2

```

then

```

5 = 4 + C

```

```

C = 1

```

Therefore,

```

y = x² + 1

```

---

# 5. Formation of Differential Equations

A differential equation is formed by eliminating arbitrary constants from a family of curves.

---

## Steps

1. Differentiate the given equation.
2. Eliminate the arbitrary constant(s).
3. Obtain the required differential equation.

---

## Example

Given

```

y = x² + C

```

Differentiate.

```

dy/dx = 2x

```

Hence,

```

dy/dx = 2x

```

is the required differential equation.

---

# 6. First-Order First-Degree Differential Equations

General form

```

dy/dx = f(x, y)

```

These are the equations mainly studied in Class 12.

---

# 7. Variable Separable Differential Equations

## Standard Form

```

dy/dx = f(x)g(y)

```

---

## Method of Solution

Separate the variables.

```

dy/g(y) = f(x) dx

```

Integrate both sides.

```

∫dy/g(y)

=

∫f(x)dx

```

---

## Example

Solve

```

dy/dx = xy

```

Solution

Separate variables.

```

dy/y = x dx

```

Integrate.

```

ln|y|

=

x²/2 + C

```

Therefore,

```

y = Ce^(x²/2)

```

---

# 8. Homogeneous Differential Equations

## Standard Form

```

dy/dx = F(y/x)

```

or

```

F(x,y)

```

where the numerator and denominator are homogeneous functions of the same degree.

---

## Substitution

Take

```

y = vx

```

Then

```

dy/dx = v + x(dv/dx)

```

Substitute into the equation and solve by separation of variables.

---

# 9. Linear Differential Equations

## Standard Form

```

dy/dx + Py = Q

```

where

- **P** and **Q** are functions of **x** or constants.

---

# 10. Integrating Factor (I.F.)

## Formula

```

I.F.

=

e^(∫P dx)

```

---

## Solution Formula

Multiply both sides by the integrating factor.

```

d/dx

(y × I.F.)

=

Q × I.F.

```

Integrate.

```

y × I.F.

=

∫Q(I.F.)dx + C

```

---

# 11. Exact Differential Equations (Basic Idea)

A differential equation of the form

```

M dx + N dy = 0

```

is **exact** if

```

∂M/∂y

=

∂N/∂x

```

This concept is introduced for higher studies and is not emphasized in the CBSE Class 12 syllabus.

---

# 12. Applications of Differential Equations

Differential equations are used in:

- Population growth
- Radioactive decay
- Newton's law of cooling
- Motion of particles
- Electric circuits
- Economics
- Biology
- Fluid mechanics

---

# 13. Verification of Solution

To verify a solution,

1. Differentiate the obtained function.
2. Substitute into the original differential equation.
3. Check whether both sides are equal.

---

# Comparison Tables

## General Solution vs Particular Solution

| General Solution | Particular Solution |
|------------------|---------------------|
| Contains arbitrary constants | Constants are determined |
| Represents a family of curves | Represents a single curve |

---

## Ordinary vs Partial Differential Equation

| Ordinary Differential Equation | Partial Differential Equation |
|--------------------------------|-------------------------------|
| Ordinary derivatives | Partial derivatives |
| One independent variable | Two or more independent variables |

---

## Variable Separable vs Linear Differential Equation

| Variable Separable | Linear |
|--------------------|--------|
| Variables can be separated | Uses integrating factor |
| Form: dy/dx = f(x)g(y) | Form: dy/dx + Py = Q |

---

# ASCII Diagrams

## General Solution

```

Family of Curves

/

/

/

/

Each curve

↓

Different value of C

```

---

## Variable Separation

```

dy/dx

↓

Separate Variables

↓

Integrate

↓

Solution

```

---

## Linear Differential Equation

```

dy/dx + Py = Q

↓

Integrating Factor

↓

General Solution

```

---

## Order of a Differential Equation

```

Highest Derivative

↓

Order

```

---

# Solved Examples

### Example 1

Find the order and degree of

```

(d²y/dx²)² + dy/dx = 0

```

**Solution**

Highest derivative

```

d²y/dx²

```

Order

```

2

```

Power of highest derivative

```

2

```

Degree

```

2

```

---

### Example 2

Form the differential equation of

```

y = x² + C

```

**Solution**

Differentiate.

```

dy/dx = 2x

```

Hence, the required differential equation is

```

dy/dx = 2x

```

---

### Example 3

Solve

```

dy/dx = 3x²

```

**Solution**

Integrate both sides.

```

∫dy

=

∫3x²dx

```

```

y

=

x³ + C

```

---

### Example 4

Solve

```

dy/dx = xy

```

**Solution**

Separate variables.

```

dy/y = x dx

```

Integrate.

```

ln|y|

=

x²/2 + C

```

Therefore,

```

y = Ce^(x²/2)

```

---

### Example 5

Solve

```

dy/dx + y = 0

```

**Solution**

This is a linear differential equation.

```

P=1

```

Integrating factor

```

e^∫1dx

=eˣ

```

Multiply throughout by

```

eˣ

```

```

d/dx

(yeˣ)=0

```

Integrating,

```

yeˣ=C

```

Hence,

```

y=Ce⁻ˣ

```

---

### Example 6

Find the particular solution of

```

dy/dx = 2x

```

given

```

y=5

when

x=2

```

**Solution**

General solution

```

y=x²+C

```

Using

```

5=4+C

```

```

C=1

```

Therefore,

```

y=x²+1

```

---

# Common Mistakes

- Confusing the **order** of a differential equation with its **degree**.
- Determining the degree before removing radicals or fractional powers involving derivatives.
- Forgetting to include the arbitrary constant while finding the general solution.
- Making errors while separating variables in variable separable equations.
- Using an incorrect integrating factor for linear differential equations.
- Forgetting to multiply the entire equation by the integrating factor before integrating.
- Failing to apply the given initial condition to obtain the particular solution.
- Not verifying the obtained solution by substituting it back into the original differential equation.

---

# Chapter Summary

- A **differential equation** is an equation involving derivatives of an unknown function.
- The **order** is determined by the highest-order derivative, while the **degree** is the power of the highest-order derivative after simplifying the equation.
- The **general solution** contains arbitrary constants, whereas the **particular solution** is obtained after applying initial or boundary conditions.
- Differential equations can be formed by eliminating arbitrary constants from a family of curves.
- **Variable separable differential equations** are solved by separating variables and integrating both sides.
- **Homogeneous differential equations** are solved using the substitution **y = vx**.
- **Linear differential equations** of the form **dy/dx + Py = Q** are solved using the **integrating factor**, **e^(∫P dx)**.
- Differential equations are widely used to model real-world phenomena in science, engineering, economics, biology, and physics.





# CBSE Class 12 Mathematics

# Chapter 10: Vector Algebra

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Vector Algebra

> **Note:** This chapter introduces vectors, their algebraic operations, scalar (dot) product, vector (cross) product, scalar triple product, vector triple product, and their geometric interpretations and applications.

---

# Introduction

A **vector** is a quantity that has both **magnitude** and **direction**. Unlike scalars, which are completely described by magnitude alone, vectors require both magnitude and direction for their complete description.

Vector algebra is widely used in mathematics, physics, engineering, computer graphics, navigation, and mechanics.

Examples of vector quantities include:

- Displacement
- Velocity
- Acceleration
- Force
- Momentum

Examples of scalar quantities include:

- Mass
- Time
- Temperature
- Energy
- Distance

---

# 1. Vector

## Definition

A **vector** is a quantity having both magnitude and direction.

It is represented by

```

→A

or

A

```

---

## Representation

A vector is represented by a directed line segment.

```

A ●────────► B

```

The vector from

```

A

to

B

```

is written as

```

→AB

```

---

# 2. Magnitude of a Vector

If

```

A = ai + bj + ck

```

then

```

|A|

=

√(a²+b²+c²)

```

---

## Unit Vector

A vector whose magnitude is

```

1

```

is called a **unit vector**.

Notation

```

Â

or

A/|A|

```

Formula

```

Unit Vector

=

A/|A|

```

---

# 3. Position Vector

The vector joining the origin to a point

```

P(x,y,z)

```

is called the **position vector**.

```

OP

=

xi+yj+zk

```

---

# 4. Types of Vectors

---

## (A) Zero Vector

Magnitude

```

0

```

Representation

```

0

```

---

## (B) Unit Vector

Magnitude

```

1

```

---

## (C) Equal Vectors

Same magnitude and same direction.

---

## (D) Negative Vectors

Same magnitude but opposite direction.

---

## (E) Parallel (Like) Vectors

Same direction.

---

## (F) Anti-parallel (Unlike) Vectors

Opposite directions.

---

## (G) Collinear Vectors

Vectors lying along the same or parallel lines.

---

## (H) Coplanar Vectors

Vectors lying in the same plane.

---

# 5. Addition of Vectors

If

```

A=a₁i+b₁j+c₁k

B=a₂i+b₂j+c₂k

```

then

```

A+B

=

(a₁+a₂)i

-

(b₁+b₂)j

-

(c₁+c₂)k

```

---

## Properties

- Commutative
- Associative
- Identity element is the zero vector

---

# 6. Subtraction of Vectors

```

A−B

=

A+(-B)

```

---

# 7. Scalar Multiplication

If

```

k

```

is a scalar,

```

kA

```

changes the magnitude by

```

|k|

```

and reverses the direction if

```

k<0

```

---

# 8. Components of a Vector

Any vector in space may be written as

```

A

=

ai+bj+ck

```

where

```

i,j,k

```

are unit vectors along the

- x-axis
- y-axis
- z-axis

respectively.

---

# 9. Section Formula (Vector Form)

If point

```

P

```

divides

```

AB

```

internally in the ratio

```

m:n

```

then

```

OP

=

(mOB+nOA)/(m+n)

```

---

# 10. Scalar (Dot) Product

## Definition

The scalar product of vectors

```

A

and

B

```

is

```

A·B

=

|A||B|cosθ

```

where

```

θ

```

is the angle between them.

---

## Component Form

If

```

A=ai+bj+ck

B=di+ej+fk

```

then

```

A·B

=

ad+be+cf

```

---

## Properties

### Commutative

```

A·B=B·A

```

---

### Distributive

```

A·(B+C)

=

A·B+A·C

```

---

### Dot Product with Itself

```

A·A

=

|A|²

```

---

## Angle Between Two Vectors

```

cosθ

=

(A·B)/(|A||B|)

```

---

## Orthogonal Vectors

If

```

A·B=0

```

then

```

A

⊥

B

```

---

# 11. Projection of One Vector on Another

Projection of

```

A

```

on

```

B

```

is

```

(A·B)/|B|

```

Vector projection is

```

[(A·B)/|B|²]B

```

---

# 12. Vector (Cross) Product

## Definition

```

A×B

=

|A||B|sinθ n̂

```

where

```

n̂

```

is the unit vector perpendicular to both vectors.

---

## Component Form

```

A×B

=

| i j k |

| a b c |

| d e f |

```

---

## Magnitude

```

|A×B|

=

|A||B|sinθ

```

---

## Properties

### Not Commutative

```

A×B

=

−B×A

```

---

### Distributive

```

A×(B+C)

=

A×B+A×C

```

---

### Parallel Vectors

```

A×B

=

0

```

---

### Perpendicular Vectors

```

|A×B|

=

|A||B|

```

---

# 13. Area Using Cross Product

## Area of Parallelogram

```

|A×B|

```

---

## Area of Triangle

```

½|A×B|

```

---

# 14. Scalar Triple Product

## Definition

```

A·(B×C)

```

---

## Value

```

A·(B×C)

=

Determinant

|

a₁ b₁ c₁|

|a₂ b₂ c₂|

|a₃ b₃ c₃|

```

---

## Geometrical Meaning

Volume of the parallelepiped formed by the three vectors.

---

## Coplanarity

Vectors are coplanar if

```

A·(B×C)=0

```

---

# 15. Vector Triple Product

## Formula

```

A×(B×C)

=

(A·C)B

−

(A·B)C

```

This is known as the **vector triple product identity**.

---

# 16. Important Vector Identities

```

i·i=j·j=k·k=1

```

---

```

i·j=j·k=k·i=0

```

---

```

i×i=j×j=k×k=0

```

---

```

i×j=k

```

---

```

j×k=i

```

---

```

k×i=j

```

---

```

j×i=-k

```

---

```

k×j=-i

```

---

```

i×k=-j

```

---

# Comparison Tables

## Scalar vs Vector

| Scalar | Vector |
|---------|--------|
| Magnitude only | Magnitude and direction |
| Examples: Mass, Time | Examples: Force, Velocity |

---

## Dot Product vs Cross Product

| Dot Product | Cross Product |
|-------------|---------------|
| Result is a scalar | Result is a vector |
| Uses cosθ | Uses sinθ |
| Commutative | Anti-commutative |

---

## Parallel vs Perpendicular Vectors

| Parallel | Perpendicular |
|-----------|---------------|
| Cross product = 0 | Dot product = 0 |
| Angle = 0° or 180° | Angle = 90° |

---

## Parallelogram vs Triangle Area

| Figure | Area |
|---------|------|
| Parallelogram | \|A × B\| |
| Triangle | ½\|A × B\| |

---

# ASCII Diagrams

## Vector

```

A ●────────► B

Direction →

```

---

## Addition of Vectors

```

A →

      B →

Result

────────────►

```

---

## Dot Product

```

A

\ θ

\

► B

```

---

## Cross Product

```

      ↑

      |

A ────┼────► B

Perpendicular

```

---

# Solved Examples

### Example 1

Find the magnitude of

```

A=3i+4j

```

**Solution**

```

|A|

=

√(3²+4²)

```

```

=

√25

=

5

```

---

### Example 2

Find the unit vector in the direction of

```

2i−j+2k

```

**Solution**

Magnitude

```

√(4+1+4)

=

3

```

Hence,

```

Unit Vector

=

(2i−j+2k)/3

```

---

### Example 3

Find the dot product of

```

A=2i+j

B=i+3j

```

**Solution**

```

A·B

=

2×1+1×3

=

5

```

---

### Example 4

Find the angle between

```

i

and

j

```

**Solution**

```

i·j

=

0

```

Therefore,

```

cosθ=0

```

Hence,

```

θ=90°

```

---

### Example 5

Find

```

i×j

```

**Solution**

Using the standard identities,

```

i×j=k

```

---

### Example 6

Find the area of the triangle formed by

```

A=i

and

B=j

```

**Solution**

```

|i×j|

=

1

```

Therefore,

```

Area

=

1/2

```

square unit.

---

# Common Mistakes

- Confusing **scalar quantities** with **vector quantities**.
- Forgetting to normalize a vector when finding the **unit vector**.
- Using **sin θ** instead of **cos θ** while calculating the **dot product**, or vice versa for the **cross product**.
- Assuming the cross product is commutative; in fact, **A × B = −(B × A)**.
- Forgetting that the **dot product** is a scalar and the **cross product** is a vector.
- Making sign errors while expanding the determinant for the cross product.
- Forgetting that **A · B = 0** implies perpendicular vectors, whereas **A × B = 0** implies parallel vectors.
- Using the area formula for a parallelogram instead of a triangle without dividing by **2**.

---

# Chapter Summary

- A **vector** is a quantity having both magnitude and direction, while a **scalar** has magnitude only.
- Vectors can be represented in component form as **ai + bj + ck**, and their magnitude is **√(a² + b² + c²)**.
- Basic vector operations include **addition**, **subtraction**, and **scalar multiplication**.
- The **dot product** produces a scalar and is useful for finding angles, projections, and testing perpendicularity.
- The **cross product** produces a vector perpendicular to the given vectors and is used to calculate areas and determine parallelism.
- The **scalar triple product** gives the volume of a parallelepiped and is used to test coplanarity.
- The **vector triple product** satisfies the identity **A × (B × C) = (A · C)B − (A · B)C**.
- Vector algebra provides a powerful mathematical framework for solving problems in geometry, mechanics, physics, engineering, and computer graphics.







# CBSE Class 12 Mathematics

# Chapter 11: Three Dimensional Geometry

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Three Dimensional Geometry

> **Note:** This chapter introduces three-dimensional coordinate geometry, direction cosines and direction ratios, equations of lines and planes, angles between lines and planes, and the shortest distance between two lines.

---

# Introduction

Three-dimensional (3D) geometry extends the concepts of two-dimensional coordinate geometry to space. Every point in space is represented by three coordinates

```

(x, y, z)

```

measured with respect to three mutually perpendicular coordinate axes.

Three-dimensional geometry has applications in engineering, architecture, computer graphics, navigation, robotics, astronomy, and physics.

---

# 1. Coordinate Axes in Three Dimensions

Three mutually perpendicular axes intersect at the origin.

- x-axis
- y-axis
- z-axis

The point of intersection is called the **origin**.

Notation

```

O(0,0,0)

```

---

## Coordinate of a Point

Any point is represented as

```

P(x,y,z)

```

where

- x = x-coordinate
- y = y-coordinate
- z = z-coordinate

---

# 2. Distance Between Two Points

Let

```

P(x₁,y₁,z₁)

and

Q(x₂,y₂,z₂)

```

Then

```

PQ

=

√[(x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²]

```

---

## Midpoint Formula

The midpoint of

```

PQ

```

is

```

((x₁+x₂)/2,

(y₁+y₂)/2,

(z₁+z₂)/2)

```

---

# 3. Direction Cosines (d.c.'s)

## Definition

The cosines of the angles made by a line with the positive x, y, and z axes are called **direction cosines**.

Notation

```

l, m, n

```

where

```

l = cos α

m = cos β

n = cos γ

```

---

## Fundamental Relation

```

l²+m²+n²=1

```

---

# 4. Direction Ratios (d.r.'s)

## Definition

Any three numbers proportional to the direction cosines are called **direction ratios**.

Notation

```

a,b,c

```

---

## Relation Between d.c.'s and d.r.'s

If

```

a,b,c

```

are direction ratios,

then

```

l

=

a/√(a²+b²+c²)

```

```

m

=

b/√(a²+b²+c²)

```

```

n

=

c/√(a²+b²+c²)

```

---

# 5. Equation of a Line

---

## Vector Form

If a line passes through the point

```

A(x₁,y₁,z₁)

```

and has direction vector

```

ai+bj+ck

```

then

```

r

=

a

-

λb

```

where

- **r** = Position vector of any point on the line
- **a** = Position vector of the given point
- **b** = Direction vector
- **λ** = Parameter

---

## Cartesian Form

```

(x−x₁)/a

=

(y−y₁)/b

=

(z−z₁)/c

```

---

# 6. Angle Between Two Lines

Let the direction ratios be

```

a₁,b₁,c₁

and

a₂,b₂,c₂

```

Then

```

cosθ

=

(a₁a₂+b₁b₂+c₁c₂)

/

√(a₁²+b₁²+c₁²)

√(a₂²+b₂²+c₂²)

```

---

## Parallel Lines

```

a₁/a₂

=

b₁/b₂

=

c₁/c₂

```

---

## Perpendicular Lines

```

a₁a₂+b₁b₂+c₁c₂

=

0

```

---

# 7. Equation of a Plane

## General Equation

```

ax+by+cz+d=0

```

where

```

a,b,c

```

are the direction ratios of the normal to the plane.

---

## Vector Form

```

(r−a)·n=0

```

where

- **a** = Position vector of a point on the plane
- **n** = Normal vector

---

# 8. Plane Passing Through a Point

If the plane passes through

```

(x₁,y₁,z₁)

```

with normal vector

```

a,b,c

```

then

```

a(x−x₁)

-

b(y−y₁)

-

c(z−z₁)

=

0

```

---

# 9. Intercept Form of a Plane

If the intercepts on the coordinate axes are

```

a,b,c

```

then

```

x/a+y/b+z/c=1

```

---

# 10. Distance of a Point from a Plane

For point

```

(x₁,y₁,z₁)

```

and plane

```

ax+by+cz+d=0

```

Distance

```

=

|ax₁+by₁+cz₁+d|

/

√(a²+b²+c²)

```

---

# 11. Angle Between Two Planes

Suppose the planes are

```

a₁x+b₁y+c₁z+d₁=0

```

and

```

a₂x+b₂y+c₂z+d₂=0

```

Then

```

cosθ

=

(a₁a₂+b₁b₂+c₁c₂)

/

√(a₁²+b₁²+c₁²)

√(a₂²+b₂²+c₂²)

```

---

## Parallel Planes

```

a₁/a₂

=

b₁/b₂

=

c₁/c₂

```

---

## Perpendicular Planes

```

a₁a₂+b₁b₂+c₁c₂

=

0

```

---

# 12. Angle Between a Line and a Plane

If

```

θ

```

is the angle between the line and the normal to the plane,

then the angle

```

φ

```

between the line and the plane is

```

φ

=

90°−θ

```

or

```

sinφ

=

|al+bm+cn|

/

√(a²+b²+c²)

```

where

```

l,m,n

```

are the direction cosines of the line.

---

# 13. Shortest Distance Between Two Skew Lines

For two skew lines,

the shortest distance is the length of the common perpendicular joining them.

The vector formula is

```

Shortest Distance

=

|(a₂−a₁)·(b₁×b₂)|

/

|b₁×b₂|

```

where

- **a₁**, **a₂** are position vectors of points on the lines.
- **b₁**, **b₂** are direction vectors.

---

# 14. Coplanarity of Two Lines

Two lines are coplanar if

```

(a₂−a₁)·(b₁×b₂)

=

0

```

---

# Comparison Tables

## Direction Cosines vs Direction Ratios

| Direction Cosines | Direction Ratios |
|-------------------|------------------|
| Cosines of angles with coordinate axes | Numbers proportional to direction cosines |
| l² + m² + n² = 1 | No such restriction |

---

## Line vs Plane

| Line | Plane |
|------|-------|
| One-dimensional | Two-dimensional |
| Requires a point and direction | Requires a point and a normal |

---

## Parallel vs Perpendicular Planes

| Parallel | Perpendicular |
|-----------|---------------|
| Normals are proportional | Dot product of normals is zero |

---

## Parallel vs Skew Lines

| Parallel Lines | Skew Lines |
|----------------|------------|
| Never intersect and are coplanar | Never intersect and are non-coplanar |

---

# ASCII Diagrams

## Coordinate Axes

```

          z
          ↑
          │
          │
          O────────→ y
         /
        /
       x

```

---

## Line in Space

```

      •
     /
    /

/
•

```

---

## Plane

```

┌─────────────┐

│ │

│ Plane │

│ │

└─────────────┘

```

---

## Point to Plane Distance

```

        •

        |

        |

──────────────

Plane

```

---

# Solved Examples

### Example 1

Find the distance between

```

P(1,2,3)

and

Q(4,6,3)

```

**Solution**

Using the distance formula,

```

PQ

=

√[(4−1)²+(6−2)²+(3−3)²]

```

```

=

√(9+16)

```

```

=

5 units

```

---

### Example 2

Find the midpoint of

```

(2,4,6)

and

(4,8,10)

```

**Solution**

```

Midpoint

=

(3,6,8)

```

---

### Example 3

Find the direction cosines of direction ratios

```

2,3,6

```

**Solution**

Magnitude

```

√(4+9+36)

=

7

```

Therefore,

```

l=2/7

m=3/7

n=6/7

```

---

### Example 4

Find the angle between the lines having direction ratios

```

(1,0,0)

and

(0,1,0)

```

**Solution**

Dot product

```

=0

```

Therefore,

```

cosθ=0

```

Hence,

```

θ=90°

```

---

### Example 5

Find the distance of the point

```

(1,2,3)

```

from the plane

```

x+y+z−6=0

```

**Solution**

Using the formula,

```

Distance

=

|1+2+3−6|

/

√3

```

```

=

0

```

The point lies on the plane.

---

### Example 6

Find the equation of the plane passing through

```

(1,2,3)

```

with normal vector

```

(2,1,−1)

```

**Solution**

Using

```

a(x−x₁)

-

b(y−y₁)

-

c(z−z₁)

=

0

```

```

2(x−1)

-

(y−2)

−

(z−3)

=

0

```

Simplifying,

```

2x+y−z−1=0

```

---

# Common Mistakes

- Confusing **direction ratios** with **direction cosines**; direction cosines always satisfy **l² + m² + n² = 1**.
- Using incorrect signs while applying the distance formula in three dimensions.
- Forgetting to normalize direction ratios when direction cosines are required.
- Mixing up the equations of a **line** and a **plane**.
- Using the direction vector of a line instead of the normal vector while writing the equation of a plane.
- Forgetting the absolute value while calculating the distance of a point from a plane.
- Assuming two non-intersecting lines are always parallel; they may be **skew lines**.
- Making arithmetic errors while computing dot products and cross products in angle and distance calculations.

---

# Chapter Summary

- Three-dimensional geometry extends coordinate geometry to space using the **x**, **y**, and **z** axes.
- The **distance formula** and **midpoint formula** are direct extensions of their two-dimensional counterparts.
- **Direction cosines** describe the orientation of a line with respect to the coordinate axes, while **direction ratios** are numbers proportional to them.
- A line can be represented in **vector form** and **Cartesian form** using a point and a direction vector.
- A plane is represented by the equation **ax + by + cz + d = 0**, where **(a, b, c)** is the normal vector.
- Dot products are used to determine angles between lines and between planes.
- The distance from a point to a plane and the shortest distance between skew lines are important applications of vector algebra in three dimensions.
- Three-dimensional geometry is fundamental in engineering, architecture, navigation, robotics, computer graphics, and advanced mathematics.





# CBSE Class 12 Mathematics

# Chapter 12: Linear Programming

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Linear Programming

> **Note:** This chapter introduces Linear Programming Problems (LPPs), feasible regions, objective functions, optimization, graphical methods of solution, and applications in business, economics, and engineering.

---

# Introduction

**Linear Programming (LP)** is a mathematical technique used to determine the **best possible solution** (maximum or minimum) for a linear objective function, subject to a given set of linear constraints.

Linear Programming is widely used in:

- Business
- Economics
- Agriculture
- Manufacturing
- Transportation
- Production planning
- Resource allocation

The solutions help in maximizing profit or minimizing cost while satisfying all given restrictions.

---

# 1. Linear Programming Problem (LPP)

## Definition

A **Linear Programming Problem (LPP)** is a mathematical problem in which a **linear objective function** is optimized (maximized or minimized) subject to a set of **linear constraints**.

---

## Components of an LPP

Every LPP consists of:

- Decision variables
- Objective function
- Constraints
- Non-negativity restrictions

---

# 2. Decision Variables

## Definition

The unknown quantities whose values are to be determined are called **decision variables**.

Usually represented by

```

x

and

y

```

---

## Example

Let

```

x

```

= Number of chairs manufactured

```

y

```

= Number of tables manufactured

---

# 3. Objective Function

## Definition

The function that is to be maximized or minimized.

General form

```

Z = ax + by

```

where

- **a**, **b** are constants.

---

## Examples

### Maximization

```

Maximize

Z = 5x + 4y

```

---

### Minimization

```

Minimize

Z = 2x + 7y

```

---

# 4. Constraints

## Definition

The restrictions imposed on the decision variables.

General form

```

ax + by ≤ c

```

or

```

ax + by ≥ c

```

or

```

ax + by = c

```

---

## Examples

```

2x + y ≤ 20

```

```

x + 3y ≤ 30

```

---

# 5. Non-Negativity Restrictions

Decision variables cannot be negative.

Hence,

```

x ≥ 0

y ≥ 0

```

---

# 6. Feasible Solution

## Definition

A solution satisfying **all** the constraints and non-negativity restrictions.

---

## Example

If

```

x=2

y=3

```

satisfy every inequality,

then

```

(2,3)

```

is a feasible solution.

---

# 7. Feasible Region

## Definition

The common region satisfying all constraints simultaneously is called the **feasible region**.

---

## Characteristics

- May be bounded.
- May be unbounded.
- May consist of a single point.
- May be empty.

---

# 8. Convex Set

## Definition

A set is called **convex** if the line segment joining any two points in the set lies completely inside the set.

---

## Illustration

```

●────────●

Entire line inside region

```

---

# 9. Convex Polygon

The feasible region obtained in graphical LPP is generally a convex polygon.

Its corner points are called **vertices**.

---

# 10. Corner Point Theorem

## Statement

If an optimal solution exists, it occurs at one of the corner points (vertices) of the feasible region.

---

## Procedure

1. Find all vertices.
2. Evaluate the objective function at each vertex.
3. Choose the largest (or smallest) value.

---

# 11. Bounded and Unbounded Regions

---

## Bounded Region

A closed region having finite area.

Example

```

□

```

---

## Unbounded Region

A region extending indefinitely.

Example

```

↗

```

---

# 12. Graphical Method of Solving LPP

## Step 1

Identify decision variables.

---

## Step 2

Write the objective function.

---

## Step 3

Write all constraints.

---

## Step 4

Plot each constraint as an equation.

---

## Step 5

Identify the feasible region.

---

## Step 6

Find all corner points.

---

## Step 7

Evaluate the objective function at every corner point.

---

## Step 8

Select the maximum or minimum value.

---

# 13. Multiple Optimal Solutions

If the objective function is parallel to one side of the feasible region,

then every point on that side gives the same optimal value.

---

# 14. Infeasible Region

If no common region satisfies all constraints,

then the LPP has **no feasible solution**.

---

# 15. Applications of Linear Programming

Linear Programming is used in:

- Production planning
- Transportation
- Inventory management
- Scheduling
- Advertising
- Agriculture
- Diet planning
- Finance
- Resource allocation
- Manufacturing

---

# 16. Important Observations

- Objective function must be linear.
- Constraints must be linear.
- Decision variables are non-negative.
- The feasible region is always convex.
- The optimal solution occurs at a corner point.

---

# Comparison Tables

## Objective Function vs Constraints

| Objective Function | Constraints |
|--------------------|-------------|
| To be optimized | Restrictions |
| Single equation | One or more inequalities/equations |

---

## Feasible Solution vs Optimal Solution

| Feasible Solution | Optimal Solution |
|-------------------|------------------|
| Satisfies all constraints | Gives the maximum or minimum objective value |
| May not be the best | Best feasible solution |

---

## Bounded vs Unbounded Region

| Bounded | Unbounded |
|----------|-----------|
| Finite area | Infinite extent |
| Closed region | Open in one or more directions |

---

## Maximization vs Minimization

| Maximization | Minimization |
|--------------|--------------|
| Largest value of Z | Smallest value of Z |
| Profit-oriented | Cost-oriented |

---

# ASCII Diagrams

## Feasible Region

```

──────────

\ /

\______/

Feasible Region

```

---

## Convex Set

```

●────────●

Entire line lies inside

```

---

## Corner Points

```

●────●

│ │

●────●

Vertices

```

---

## Graphical Method

```

Constraints

↓

Feasible Region

↓

Corner Points

↓

Objective Function

↓

Optimal Solution

```

---

# Solved Examples

### Example 1

Maximize

```

Z = 3x + 2y

```

subject to

```

x ≥ 0

y ≥ 0

```

**Solution**

Without additional constraints, the feasible region is **unbounded**.

Hence, no finite maximum exists.

---

### Example 2

State the objective function in the following problem:

Profit from product A is ₹50 and from product B is ₹80.

**Solution**

Let

```

x

```

= Number of product A

```

y

```

= Number of product B

Objective function

```

Maximize

Z = 50x + 80y

```

---

### Example 3

Determine whether the point

```

(2,3)

```

satisfies

```

x + y ≤ 6

x ≥ 0

y ≥ 0

```

**Solution**

```

2 + 3 = 5 ≤ 6

```

Also,

```

2 ≥ 0

3 ≥ 0

```

Therefore,

```

(2,3)

```

is a feasible solution.

---

### Example 4

Identify whether the set

```

x ≥ 0

y ≥ 0

```

is bounded.

**Solution**

The region extends infinitely in the first quadrant.

Hence,

the region is **unbounded**.

---

### Example 5

A feasible region has corner points

```

(0,0)

(4,0)

(4,3)

(0,5)

```

Find the maximum value of

```

Z = 2x + y

```

**Solution**

Evaluate the objective function at each corner point.

| Point | Z = 2x + y |
|------|------------:|
| (0,0) | 0 |
| (4,0) | 8 |
| (4,3) | 11 |
| (0,5) | 5 |

Maximum value

```

Z = 11

```

at

```

(4,3)

```

---

### Example 6

State the non-negativity restrictions if the decision variables are

```

x

and

y

```

**Solution**

The restrictions are

```

x ≥ 0

y ≥ 0

```

---

# Common Mistakes

- Writing a **non-linear** objective function or non-linear constraints; all equations and inequalities in an LPP must be linear.
- Forgetting the **non-negativity restrictions** (**x ≥ 0**, **y ≥ 0**).
- Shading the wrong side of a constraint while drawing the feasible region.
- Assuming every feasible solution is an optimal solution.
- Failing to evaluate the objective function at **all** corner points of the feasible region.
- Ignoring the possibility of **multiple optimal solutions**, **unbounded solutions**, or **no feasible solution**.
- Making arithmetic errors while calculating the coordinates of intersection points.
- Selecting a point outside the feasible region as the final answer.

---

# Chapter Summary

- A **Linear Programming Problem (LPP)** aims to maximize or minimize a **linear objective function** subject to a set of **linear constraints**.
- The main components of an LPP are **decision variables**, **objective function**, **constraints**, and **non-negativity restrictions**.
- A **feasible solution** satisfies all constraints, while the **feasible region** is the common region satisfying every constraint simultaneously.
- The feasible region obtained graphically is a **convex set**, usually in the form of a **convex polygon**.
- According to the **Corner Point Theorem**, if an optimal solution exists, it occurs at one of the vertices of the feasible region.
- LPPs may have **unique**, **multiple**, **unbounded**, or **no feasible** optimal solutions depending on the constraints.
- The graphical method provides a systematic procedure for solving two-variable linear programming problems.
- Linear Programming has extensive applications in production planning, transportation, finance, business, engineering, agriculture, and resource optimization.







# CBSE Class 12 Mathematics

# Chapter 13: Probability

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Probability

> **Note:** This chapter covers conditional probability, multiplication theorem, independent events, total probability theorem, Bayes' theorem, random variables, probability distributions, mathematical expectation, variance, and Bernoulli trials.

---

# Introduction

Probability is the branch of mathematics that deals with uncertainty and the likelihood of events. In Class 12, probability is extended to include **conditional probability**, **Bayes' theorem**, **random variables**, **probability distributions**, and **mathematical expectation**, which have applications in statistics, economics, medicine, engineering, artificial intelligence, and data science.

---

# 1. Basic Terminology

## Random Experiment

An experiment whose outcome cannot be predicted with certainty.

### Examples

- Tossing a coin
- Rolling a die
- Drawing a card

---

## Sample Space

The set of all possible outcomes.

Notation

```

S

```

Example

For a die,

```

S = {1,2,3,4,5,6}

```

---

## Event

A subset of the sample space.

Notation

```

A, B, C

```

---

# 2. Conditional Probability

## Definition

The probability of occurrence of an event

```

A

```

given that another event

```

B

```

has already occurred.

Notation

```

P(A|B)

```

---

## Formula

```

P(A|B)

=

P(A∩B)

/P(B)

```

provided

```

P(B) ≠ 0

```

Similarly,

```

P(B|A)

=

P(A∩B)

/P(A)

```

---

# 3. Multiplication Theorem of Probability

From conditional probability,

```

P(A∩B)

=

P(B)P(A|B)

```

or

```

P(A∩B)

=

P(A)P(B|A)

```

---

## For Three Events

```

P(A∩B∩C)

=

P(A)

P(B|A)

P(C|A∩B)

```

---

# 4. Independent Events

## Definition

Two events

```

A

and

B

```

are independent if

```

P(A|B)

=

P(A)

```

or equivalently,

```

P(A∩B)

=

P(A)P(B)

```

---

## Properties

- Occurrence of one event does not affect the other.
- Independent events are not necessarily mutually exclusive.

---

# 5. Dependent Events

Two events are dependent if

```

P(A|B)

≠

P(A)

```

---

# 6. Total Probability Theorem

Suppose

```

A₁,A₂,...,Aₙ

```

form a partition of the sample space.

Then

```

P(B)

=

P(A₁)P(B|A₁)

-

P(A₂)P(B|A₂)

- ...

-

P(Aₙ)P(B|Aₙ)

```

---

# 7. Bayes' Theorem

## Statement

If

```

A₁,A₂,...,Aₙ

```

form a partition of the sample space and

```

P(B)>0

```

then

```

P(Aᵢ|B)

=

P(Aᵢ)P(B|Aᵢ)

/

ΣP(Aⱼ)P(B|Aⱼ)

```

---

## For Two Events

```

P(A|B)

=

P(A)P(B|A)

/

P(B)

```

where

```

P(B)

=

P(A)P(B|A)

-

P(A')P(B|A')

```

---

# 8. Random Variable

## Definition

A variable whose value depends on the outcome of a random experiment.

Usually denoted by

```

X

```

---

## Types

### Discrete Random Variable

Takes countable values.

Examples

- Number of heads in three coin tosses.
- Number on a die.

---

### Continuous Random Variable

Takes values over an interval.

Examples

- Height
- Weight
- Temperature

(Only discrete random variables are included in the CBSE syllabus.)

---

# 9. Probability Distribution

## Definition

A table showing all possible values of a random variable and their corresponding probabilities.

---

## Conditions

```

0 ≤ P(X=x) ≤ 1

```

and

```

ΣP(X=x)

=

1

```

---

## Example

| X | 0 | 1 | 2 |
|---|---:|---:|---:|
| P(X) | 0.2 | 0.5 | 0.3 |

---

# 10. Mean (Mathematical Expectation)

## Definition

The expected value of a random variable.

Notation

```

E(X)

```

---

## Formula

```

E(X)

=

ΣxP(x)

```

---

## Interpretation

The expectation represents the long-term average outcome if the experiment is repeated many times.

---

# 11. Variance

## Definition

Variance measures the spread of a probability distribution.

Notation

```

Var(X)

```

---

## Formula

```

Var(X)

=

E(X²)

−

[E(X)]²

```

where

```

E(X²)

=

Σx²P(x)

```

---

# 12. Standard Deviation

## Formula

```

σ

=

√Var(X)

```

---

# 13. Bernoulli Trials

## Definition

Repeated random experiments satisfying:

- Only two outcomes:
  - Success
  - Failure
- Probability of success remains constant.
- Trials are independent.

---

## Probability of Success

```

p

```

---

## Probability of Failure

```

q

=

1−p

```

---

# 14. Bernoulli Distribution

If a random variable

```

X

```

takes values

```

0

and

1

```

then

| X | Probability |
|---|-------------|
| 0 | q |
| 1 | p |

where

```

p+q=1

```

---

## Mean

```

E(X)=p

```

---

## Variance

```

Var(X)=pq

```

---

# 15. Important Probability Formulae

```

P(A')

=

1−P(A)

```

---

```

P(A∪B)

=

P(A)

-

P(B)

−

P(A∩B)

```

---

For mutually exclusive events,

```

P(A∩B)=0

```

Hence,

```

P(A∪B)

=

P(A)+P(B)

```

---

For independent events,

```

P(A∩B)

=

P(A)P(B)

```

---

# Comparison Tables

## Independent vs Dependent Events

| Independent Events | Dependent Events |
|--------------------|------------------|
| One event does not affect the other | One event affects the other |
| P(A∩B)=P(A)P(B) | Product rule does not apply directly |

---

## Conditional Probability vs Simple Probability

| Conditional Probability | Simple Probability |
|-------------------------|--------------------|
| Depends on another event | Independent of conditions |
| Uses P(A\|B) | Uses P(A) |

---

## Discrete vs Continuous Random Variable

| Discrete | Continuous |
|-----------|------------|
| Countable values | Infinite values in an interval |
| Included in CBSE syllabus | Basic idea only |

---

## Mean vs Variance

| Mean | Variance |
|------|----------|
| Average value | Measure of dispersion |
| E(X) | Var(X) |

---

# ASCII Diagrams

## Conditional Probability

```

Sample Space

+------------------+

| B |

| +------+ |

| |A∩B | |

| +------+ |

+------------------+

```

---

## Probability Distribution

```

Probability

│

│ *

│ * *

│ * *

└────────────── X

```

---

## Bernoulli Trial

```

Trial

↓

Success (p)

or

Failure (q)

```

---

## Bayes' Theorem

```

Prior

↓

Evidence

↓

Posterior Probability

```

---

# Solved Examples

### Example 1

A card is drawn from a standard deck of 52 cards. Find the probability that it is a king given that it is a face card.

**Solution**

Face cards

```

= 12

```

Kings

```

= 4

```

Therefore,

```

P(King|Face)

=

4/12

=

1/3

```

---

### Example 2

If

```

P(A)=0.5

P(B)=0.4

```

and

```

A

and

B

```

are independent, find

```

P(A∩B)

```

**Solution**

```

P(A∩B)

=

0.5×0.4

=

0.2

```

---

### Example 3

A random variable has the following distribution.

| X | 1 | 2 | 3 |
|---|---:|---:|---:|
| P(X) | 0.2 | 0.5 | 0.3 |

Find

```

E(X)

```

**Solution**

```

E(X)

=

1(0.2)

-

2(0.5)

-

3(0.3)

```

```

=

0.2+1+0.9

=

2.1

```

---

### Example 4

Using the distribution in Example 3, find

```

Var(X)

```

**Solution**

First,

```

E(X²)

=

1²(0.2)

-

2²(0.5)

-

3²(0.3)

```

```

=

0.2+2+2.7

=

4.9

```

Now,

```

Var(X)

=

4.9−(2.1)²

```

```

=

4.9−4.41

=

0.49

```

---

### Example 5

A Bernoulli trial has

```

p=0.7

```

Find

```

q

```

**Solution**

```

q

=

1−0.7

=

0.3

```

---

### Example 6

If

```

P(A)=0.6

and

P(B|A)=0.5

```

find

```

P(A∩B)

```

**Solution**

Using the multiplication theorem,

```

P(A∩B)

=

P(A)P(B|A)

```

```

=

0.6×0.5

=

0.3

```

---

# Common Mistakes

- Confusing **conditional probability** with ordinary probability.
- Applying the multiplication rule for **independent events** to dependent events.
- Forgetting to verify that the probabilities in a probability distribution add up to **1**.
- Using **E(X)** instead of **E(X²)** while calculating variance.
- Assuming mutually exclusive events are independent; in general, they are **not** independent.
- Ignoring the denominator while applying **Bayes' theorem**.
- Forgetting that in Bernoulli trials **p + q = 1**.
- Making arithmetic errors while computing expectation and variance.

---

# Chapter Summary

- **Conditional probability** measures the probability of an event when another event has already occurred.
- The **Multiplication Theorem** relates conditional probability to the probability of simultaneous occurrence of events.
- Two events are **independent** if the occurrence of one does not affect the probability of the other.
- The **Total Probability Theorem** expresses the probability of an event in terms of a partition of the sample space.
- **Bayes' theorem** updates probabilities based on new information and is widely used in statistics, machine learning, and decision-making.
- A **random variable** assigns numerical values to the outcomes of a random experiment, and its behavior is described by a **probability distribution**.
- The **mathematical expectation** gives the average value of a random variable, while **variance** and **standard deviation** measure the spread of the distribution.
- **Bernoulli trials** involve repeated independent experiments with two possible outcomes, forming the foundation for many advanced probability models.
```
