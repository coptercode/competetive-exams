# Chapter 1: Sets and Relations

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Sets and Relations

---

# Introduction

**Sets** form the foundation of modern mathematics. Almost every branch of mathematics—including algebra, geometry, probability, functions, and calculus—is built upon the concept of sets. **Relations** describe how elements of one set are connected to elements of another (or the same) set. This chapter introduces **set operations, Venn diagrams, Cartesian products, relations, domain and range, power sets, and cardinality**.

---

# 1. Set

## Definition

A **set** is a **well-defined collection of distinct objects**, called **elements** or **members**.

---

## Examples

```
A = {1, 2, 3, 4}

B = {a, e, i, o, u}

C = {Prime numbers less than 10}
= {2, 3, 5, 7}
```

---

## Representation of Sets

### (i) Roster Form

List all elements inside braces.

```
A = {2, 4, 6, 8}
```

---

### (ii) Set Builder Form

Describe elements using a rule.

```
A = {x : x is an even natural number less than 10}
```

---

# 2. Types of Sets

---

## Empty (Null) Set

A set containing **no elements**.

Notation

```
∅

or

{}
```

Example

```
A = {Months having 32 days}
```

---

## Singleton Set

Contains only one element.

Example

```
A = {0}
```

---

## Finite Set

Contains a limited number of elements.

Example

```
{1,2,3,4,5}
```

---

## Infinite Set

Contains infinitely many elements.

Example

```
N = {1,2,3,...}
```

---

## Equal Sets

Two sets having exactly the same elements.

Example

```
A = {1,2,3}

B = {3,2,1}

A = B
```

---

## Equivalent Sets

Sets having the same number of elements.

Example

```
A = {1,2,3}

B = {a,b,c}
```

---

## Universal Set

Contains all objects under discussion.

Notation

```
U
```

---

# 3. Subsets

## Definition

A set **A** is a subset of **B** if every element of A belongs to B.

Notation

```
A ⊆ B
```

---

## Proper Subset

```
A ⊂ B
```

Means

```
A ⊆ B

and

A ≠ B
```

---

## Improper Subset

Every set is an improper subset of itself.

---

# 4. Number of Subsets

If a set contains **n elements**

```
Total subsets = 2ⁿ
```

---

### Example

```
A = {a,b,c}

n = 3

Number of subsets

= 2³

= 8
```

---

# 5. Power Set

## Definition

The **Power Set** of a set **A** is the collection of **all subsets** of A.

Notation

```
P(A)
```

---

### Example

```
A = {1,2}

P(A)

=

{

∅,

{1},

{2},

{1,2}

}
```

---

## Number of Elements in Power Set

```
n(P(A))

=

2ⁿ
```

---

# 6. Cardinality

## Definition

The **cardinality** of a set is the number of elements present in it.

Notation

```
n(A)

or

|A|
```

---

### Example

```
A={2,4,6}

|A|=3
```

---

# 7. Operations on Sets

---

## (i) Union

### Definition

The union of two sets contains all elements present in either set.

Notation

```
A ∪ B
```

---

### Formula

```
A ∪ B

=

{x : x∈A or x∈B}
```

---

### Example

```
A={1,2,3}

B={3,4,5}

A∪B

=

{1,2,3,4,5}
```

---

## (ii) Intersection

### Definition

Contains only common elements.

Notation

```
A ∩ B
```

---

### Example

```
A={1,2,3}

B={2,3,4}

A∩B

=

{2,3}
```

---

## (iii) Difference

### Definition

Elements belonging to one set but not the other.

Notation

```
A−B
```

---

### Example

```
A={1,2,3}

B={2,3,4}

A−B

=

{1}
```

---

## (iv) Complement

### Definition

Elements in the universal set but not in A.

Notation

```
A'
```

or

```
Aᶜ
```

---

### Formula

```
A'

=

U−A
```

---

## (v) Symmetric Difference

### Definition

Elements belonging to either set but **not both**.

Notation

```
A Δ B
```

---

### Formula

```
(A−B)

∪

(B−A)
```

---

# Difference Between Union and Intersection

| Union                 | Intersection         |
| --------------------- | -------------------- |
| Combines all elements | Only common elements |
| Symbol: ∪             | Symbol: ∩            |
| OR operation          | AND operation        |

---

# 8. Venn Diagrams

A **Venn Diagram** is a pictorial representation of sets using closed curves inside a rectangle representing the universal set.

---

## Types

- Union
- Intersection
- Difference
- Complement
- Symmetric Difference

---

## Example

```
 _____________
|             |
|   (A∩B)     |
|  ○────○     |
|             |
|_____________|
```

---

# 9. Cartesian Product

## Definition

The **Cartesian Product** of two sets A and B is the set of all ordered pairs.

Notation

```
A × B
```

---

### Formula

```
A×B

=

{(a,b):a∈A,b∈B}
```

---

### Example

```
A={1,2}

B={x,y}

A×B

=

{

(1,x),

(1,y),

(2,x),

(2,y)

}
```

---

## Number of Ordered Pairs

```
n(A×B)

=

n(A)

×

n(B)
```

---

# Difference Between A×B and B×A

| A×B                  | B×A                  |
| -------------------- | -------------------- |
| First element from A | First element from B |
| Usually different    | Usually different    |

---

# 10. Relations

## Definition

A **Relation** from set A to set B is any subset of the Cartesian product A × B.

---

### Example

```
A={1,2}

B={2,4}

R={(1,2),(2,4)}
```

---

# Domain and Range

## Domain

Set of first elements.

---

## Range

Set of second elements.

---

### Example

```
R={(1,3),(2,5),(4,6)}

Domain={1,2,4}

Range={3,5,6}
```

---

# Types of Relations

---

## Reflexive Relation

Every element is related to itself.

```
(a,a)

∈R
```

for every element.

---

## Symmetric Relation

If

```
(a,b)

∈R
```

then

```
(b,a)

∈R
```

---

## Transitive Relation

If

```
(a,b)

∈R

and

(b,c)

∈R
```

then

```
(a,c)

∈R
```

---

## Equivalence Relation

A relation that is

- Reflexive
- Symmetric
- Transitive

simultaneously.

---

# Flowchart

```
                SETS
                  │
      ┌───────────┼───────────┐
      ▼           ▼           ▼
 Types      Operations   Power Set
                  │
                  ▼
         Union • Intersection
                  │
                  ▼
 Difference • Complement
                  │
                  ▼
 Cartesian Product
                  │
                  ▼
             Relations
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
   Reflexive  Symmetric  Transitive
                  │
                  ▼
         Equivalence Relation
```

---

# Important Formulae

| Concept              | Formula                           |
| -------------------- | --------------------------------- |
| Number of Subsets    | **2ⁿ**                            |
| Cardinality          | **n(A)** or **                    | A   | **  |
| Complement           | **A' = U − A**                    |
| Cartesian Product    | **n(A×B) = n(A) × n(B)**          |
| Symmetric Difference | **A Δ B = (A−B) ∪ (B−A)**         |
| Inclusion–Exclusion  | **n(A∪B) = n(A) + n(B) − n(A∩B)** |

---

# Laws of Set Algebra

## Commutative Laws

```
A ∪ B = B ∪ A

A ∩ B = B ∩ A
```

---

## Associative Laws

```
(A ∪ B) ∪ C = A ∪ (B ∪ C)

(A ∩ B) ∩ C = A ∩ (B ∩ C)
```

---

## Distributive Laws

```
A ∩ (B ∪ C)

=

(A ∩ B)

∪

(A ∩ C)
```

```
A ∪ (B ∩ C)

=

(A ∪ B)

∩

(A ∪ C)
```

---

## De Morgan's Laws

```
(A ∪ B)' = A' ∩ B'
```

```
(A ∩ B)' = A' ∪ B'
```

---

# Applications

- Database management systems.
- Probability and statistics.
- Computer programming and data structures.
- Artificial Intelligence.
- Logic design.
- Digital electronics.
- Network theory.
- Graph theory.
- Classification problems.
- Mathematical modeling.

---

# Solved Examples

## Example 1

### Question

If

```
A={1,2}

B={2,3}
```

Find

```
A∪B
```

### Solution

Combine all distinct elements.

### Answer

```
{1,2,3}
```

---

## Example 2

### Question

Find the number of subsets of

```
A={a,b,c,d}
```

### Solution

```
n=4

Subsets

=2⁴

=16
```

### Answer

```
16
```

---

## Example 3

### Question

Find

```
A×B
```

where

```
A={1,2}

B={x,y}
```

### Solution

Form all possible ordered pairs.

### Answer

```
{

(1,x),

(1,y),

(2,x),

(2,y)

}
```

---

## Example 4

### Question

State whether the relation

```
R={(1,1),(2,2),(3,3)}
```

is reflexive on

```
A={1,2,3}
```

### Solution

Every element is related to itself.

### Answer

**Yes, it is a reflexive relation.**

---

## Example 5

### Question

If

```
n(A)=20

n(B)=15

n(A∩B)=5
```

Find

```
n(A∪B)
```

### Solution

```
n(A∪B)

=

20+15−5

=

30
```

### Answer

```
30
```

---

# Common Mistakes

- Confusing **subset (⊆)** with **proper subset (⊂)**.
- Treating **ordered pairs** in Cartesian products as unordered.
- Forgetting that **A×B ≠ B×A** in general.
- Mixing up **union** and **intersection** symbols.
- Ignoring the universal set while finding complements.
- Forgetting to remove duplicate elements in a union.
- Assuming every relation is an equivalence relation without checking reflexivity, symmetry, and transitivity.

---

# Exam Tips

- Memorize all standard set symbols and notation.
- Draw neat Venn diagrams for set operation questions.
- Verify each property separately when proving relations.
- Use the Inclusion–Exclusion Principle carefully in cardinality problems.
- Write ordered pairs in the correct order for Cartesian products.

---

# Quick Revision

- Set → Well-defined collection of distinct objects.
- Subsets → **2ⁿ** for a set with **n** elements.
- Power Set → Collection of all subsets.
- Cardinality → Number of elements in a set.
- Union → **A ∪ B**
- Intersection → **A ∩ B**
- Difference → **A − B**
- Complement → **A' = U − A**
- Cartesian Product → Ordered pairs.
- Relation → Subset of **A × B**.
- Domain → First elements.
- Range → Second elements.
- Equivalence Relation → Reflexive + Symmetric + Transitive.

---

# Chapter Summary

- A **set** is a well-defined collection of distinct elements and forms the basis of modern mathematics.
- Set operations such as **union, intersection, difference, complement, and symmetric difference** help compare and combine sets, while **Venn diagrams** provide a visual representation.
- The **power set** contains all subsets of a set, and the number of subsets of a set with **n** elements is **2ⁿ**.
- The **Cartesian product** forms ordered pairs from two sets and is fundamental in defining **relations**.
- A **relation** is a subset of a Cartesian product, with its **domain** consisting of first elements and its **range** consisting of second elements.
- Relations can be classified as **reflexive, symmetric, transitive**, and **equivalence relations**, each having specific mathematical properties.
- Mastery of sets and relations is essential for advanced topics such as **functions, probability, coordinate geometry, calculus, logic, computer science, and discrete mathematics**.

# ISC Class 11 Mathematics

