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

