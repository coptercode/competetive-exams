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

