# Chapter 1: Sets, Relations and Functions

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 1  
> **Chapter:** Sets, Relations and Functions

---

# Introduction

Sets, relations and functions form the foundation of modern mathematics.

This chapter covers:

- Sets and their operations
- Subsets and power sets
- Cartesian products
- Relations
- Equivalence relations
- Functions and their types

Applications:

- Algebra
- Probability
- Calculus
- Computer science
- Data analysis

---

# PART A: SETS

---

# 1. Set

## Definition

A well-defined collection of distinct objects is called a set.

The objects of a set are called:

\[
\boxed{\text{Elements or Members}}
\]

---

Example:

\[
A=\{1,2,3,4\}
\]

Here:

\[
1,2,3,4
\]

are elements of set A.

---

# 2. Representation of Sets

Sets can be represented in two ways:

---

# 1. Roster Form

Elements are listed inside braces.

Example:

\[
A=\{2,4,6,8\}
\]

---

# 2. Set Builder Form

Elements are described by a property.

Example:

\[
A=\{x:x \text{ is an even number less than }10\}
\]

---

# 3. Types of Sets

---

# Empty Set

A set containing no elements.

Symbol:

\[
\boxed{\phi}
\]

Example:

\[
\{x:x^2+1=0,\ x\in R\}
\]

---

# Singleton Set

A set containing only one element.

Example:

\[
\{5\}
\]

---

# Finite Set

A set having a limited number of elements.

Example:

\[
\{1,2,3,4\}
\]

---

# Infinite Set

A set having unlimited elements.

Example:

\[
N=\{1,2,3,\ldots\}
\]

---

# Equal Sets

Two sets having exactly the same elements.

Example:

\[
A=\{1,2,3\}
\]

\[
B=\{3,2,1\}
\]

Therefore:

\[
\boxed{A=B}
\]

---

# Equivalent Sets

Sets having the same number of elements.

Example:

\[
A=\{1,2,3\}
\]

\[
B=\{a,b,c\}
\]

Both have:

\[
n(A)=n(B)=3
\]

---

# PART B: SUBSETS

---

# 4. Subset

## Definition

If every element of set A is also an element of set B, then A is called a subset of B.

Symbol:

\[
\boxed{A\subseteq B}
\]

---

Example:

\[
A=\{1,2\}
\]

\[
B=\{1,2,3,4\}
\]

Therefore:

\[
A\subseteq B
\]

---

# 5. Proper Subset

If:

\[
A\subseteq B
\]

and

\[
A\neq B
\]

then A is a proper subset of B.

Symbol:

\[
\boxed{A\subset B}
\]

---

# 6. Number of Subsets

For a set containing n elements:

Total number of subsets:

\[
\boxed{2^n}
\]

---

Number of proper subsets:

\[
\boxed{2^n-1}
\]

---

Example:

If:

\[
n(A)=3
\]

Number of subsets:

\[
2^3=8
\]

---

# 7. Power Set

## Definition

The set containing all subsets of a set is called power set.

Symbol:

\[
\boxed{P(A)}
\]

---

Example:

If:

\[
A=\{1,2\}
\]

Then:

\[
P(A)=
\{\phi,\{1\},\{2\},\{1,2\}\}
\]

---

Number of elements in power set:

\[
\boxed{n(P(A))=2^n}
\]

---

# PART C: OPERATIONS ON SETS

---

# 8. Union of Sets

## Definition

The set containing all elements from both sets is called union.

Symbol:

\[
\boxed{A\cup B}
\]

---

Example:

\[
A=\{1,2,3\}
\]

\[
B=\{3,4,5\}
\]

Then:

\[
A\cup B=
\{1,2,3,4,5\}
\]

---

# 9. Intersection of Sets

## Definition

The set containing common elements of two sets.

Symbol:

\[
\boxed{A\cap B}
\]

---

Example:

\[
A\cap B=\{3\}
\]

---

# 10. Difference of Sets

Elements of A not present in B:

\[
\boxed{A-B}
\]

---

Example:

\[
A=\{1,2,3\}
\]

\[
B=\{2,3,4\}
\]

Then:

\[
A-B=\{1\}
\]

---

# 11. Complement of a Set

Elements in universal set but not in A.

Symbol:

\[
\boxed{A'}
\]

---

Formula:

\[
A'=U-A
\]

---

# 12. De Morgan's Laws

---

First Law:

\[
\boxed{
(A\cup B)'=A'\cap B'
}
\]

---

Second Law:

\[
\boxed{
(A\cap B)'=A'\cup B'
}
\]

---

# PART D: CARTESIAN PRODUCT

---

# 13. Ordered Pair

A pair of elements written in a fixed order is called an ordered pair.

Example:

\[
(a,b)
\]

---

Important:

\[
(a,b)\neq(b,a)
\]

unless:

\[
a=b
\]

---

# 14. Cartesian Product

## Definition

The set of all ordered pairs formed from two sets A and B is called Cartesian product.

Symbol:

\[
\boxed{A\times B}
\]

---

Example:

\[
A=\{1,2\}
\]

\[
B=\{a,b\}
\]

Then:

\[
A\times B
=

\{
(1,a),(1,b),(2,a),(2,b)
\}
\]

---

Number of elements:

\[
\boxed{
n(A\times B)=n(A)\times n(B)
}
\]

---

# PART E: RELATIONS

---

# 15. Relation

## Definition

A relation from set A to set B is a subset of:

\[
A\times B
\]

---

Example:

\[
R=\{(1,a),(2,b)\}
\]

is a relation from A to B.

---

# 16. Types of Relations

---

# Empty Relation

No ordered pairs.

\[
R=\phi
\]

---

# Universal Relation

Contains all ordered pairs.

\[
R=A\times A
\]

---

# Identity Relation

Every element is related to itself.

\[
R=\{(a,a):a\in A\}
\]

---

# 17. Properties of Relations

A relation on set A may be:

---

# Reflexive Relation

Every element relates to itself.

\[
(a,a)\in R
\]

---

# Symmetric Relation

If:

\[
(a,b)\in R
\]

then:

\[
(b,a)\in R
\]

---

# Transitive Relation

If:

\[
(a,b)\in R
\]

and

\[
(b,c)\in R
\]

then:

\[
(a,c)\in R
\]

---

# PART F: EQUIVALENCE RELATION

---

# 18. Equivalence Relation

A relation is called an equivalence relation if it is:

1. Reflexive
2. Symmetric
3. Transitive

---

Example:

Relation of equality.

---

# 19. Equivalence Class

The set of all elements related to an element is called its equivalence class.

---

Example:

For relation:

\[
aRb \iff a-b \text{ is divisible by }3
\]

Equivalence classes:

\[
[0],[1],[2]
\]

---

# PART G: FUNCTIONS

---

# 20. Function

## Definition

A relation from set A to set B in which every element of A has exactly one image in B is called a function.

Notation:

\[
\boxed{
f:A\rightarrow B
}
\]

---

# 21. Domain, Codomain and Range

---

Domain:

Set of input values.

---

Codomain:

Target set.

---

Range:

Actual output values.

---

# 22. Types of Functions

---

# One-One Function (Injective)

Different elements have different images.

Condition:

\[
f(a)=f(b)\Rightarrow a=b
\]

---

# Many-One Function

Different elements may have same image.

---

# Onto Function (Surjective)

Every element of codomain has a pre-image.

Range:

\[
=\text{Codomain}
\]

---

# Into Function

Range is a proper subset of codomain.

---

# Bijective Function

A function which is both:

- One-one
- Onto

---

# 23. Composite Function

If:

\[
f:A\rightarrow B
\]

and

\[
g:B\rightarrow C
\]

then:

\[
\boxed{
(g\circ f)(x)=g(f(x))
}
\]

---

# Important Formula Sheet

## Number of Subsets

\[
\boxed{2^n}
\]

---

## Power Set

\[
\boxed{n(P(A))=2^n}
\]

---

## Cartesian Product

\[
\boxed{
n(A\times B)=n(A)n(B)
}
\]

---

## De Morgan's Laws

\[
(A\cup B)'=A'\cap B'
\]

\[
(A\cap B)'=A'\cup B'
\]

---

## Composite Function

\[
\boxed{
(g\circ f)(x)=g(f(x))
}
\]

---

# Solved Examples

## Example 1

Find number of subsets of:

\[
A=\{1,2,3,4\}
\]

Here:

\[
n=4
\]

Number of subsets:

\[
2^4
\]

\[
\boxed{16}
\]

---

## Example 2

If:

\[
A=\{1,2\}
\]

\[
B=\{a,b,c\}
\]

Find:

\[
n(A\times B)
\]

Solution:

\[
n(A)n(B)
\]

\[
=2\times3
\]

\[
\boxed{6}
\]

---

## Example 3

Check whether relation equality is an equivalence relation.

Equality is:

- Reflexive ✓
- Symmetric ✓
- Transitive ✓

Therefore:

\[
\boxed{\text{Equivalence relation}}
\]

---

# Common Mistakes

- Confusing subset and element notation.
- Forgetting empty set is a subset of every set.
- Mixing union and intersection.
- Treating ordered pairs as unordered.
- Forgetting Cartesian product order matters.
- Confusing codomain and range.
- Checking only one property for equivalence relation.

---

# Chapter Summary

- Sets are collections of well-defined objects.
- Subsets describe relationships between sets.
- Power sets contain all possible subsets.
- Cartesian products create ordered pairs.
- Relations are subsets of Cartesian products.
- Equivalence relations satisfy reflexive, symmetric and transitive properties.
- Functions assign exactly one output to each input.

\[
\boxed{
\text{Sets form the foundation of relations and functions.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 1

