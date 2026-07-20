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

