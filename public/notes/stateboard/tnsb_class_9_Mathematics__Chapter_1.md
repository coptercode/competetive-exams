# Chapter 1: Set Language

> **Subject:** Mathematics  
> **Class:** 9  
> **Chapter:** Set Language

---

# Introduction

A set is one of the basic concepts in mathematics. It helps us group objects with common properties and perform operations on collections of objects.

This chapter covers:

- Definition of sets
- Set notation
- Types of sets
- Set operations
- Properties of set operations
- De Morgan's laws
- Cardinality of sets

---

# PART A: INTRODUCTION TO SETS

---

# 1. Set

## Definition

A set is a well-defined collection of distinct objects.

The objects in a set are called **elements** or **members**.

---

Example:

Set of vowels:

\[
A=\{a,e,i,o,u\}
\]

Here:

Elements of A are:

\[
a,e,i,o,u
\]

---

# 2. Representation of Sets

Sets can be represented in two ways:

1. Roster form
2. Set-builder form

---

# 3. Roster Form

## Definition

A set is represented by listing all its elements inside curly brackets.

---

Example:

\[
A=\{2,4,6,8\}
\]

---

# 4. Set-builder Form

## Definition

A set is represented by stating the common property of its elements.

---

Example:

\[
A=\{x:x\text{ is an even number less than }10\}
\]

---

# 5. Symbols Used in Sets

| Symbol | Meaning            |
| ------ | ------------------ |
| ∈      | Belongs to         |
| ∉      | Does not belong to |
| ⊂      | Subset             |
| ∪      | Union              |
| ∩      | Intersection       |
| ∅      | Empty set          |

---

Example:

If:

\[
A=\{1,2,3\}
\]

Then:

\[
2\in A
\]

and

\[
5\notin A
\]

---

# PART B: TYPES OF SETS

---

# 6. Empty Set

## Definition

A set having no elements is called an empty set.

---

Symbol:

\[
\boxed{\emptyset}
\]

---

Example:

\[
A=\{x:x\text{ is a natural number between 1 and 2}\}
\]

No such number exists.

Therefore:

\[
A=\emptyset
\]

---

# 7. Singleton Set

## Definition

A set containing only one element is called a singleton set.

---

Example:

\[
A=\{5\}
\]

---

# 8. Finite Set

## Definition

A set containing a limited number of elements is called a finite set.

---

Example:

\[
A=\{1,2,3,4\}
\]

---

# 9. Infinite Set

## Definition

A set containing unlimited elements is called an infinite set.

---

Example:

Natural numbers:

\[
N=\{1,2,3,4,...\}
\]

---

# 10. Equal Sets

## Definition

Two sets are equal if they contain exactly the same elements.

---

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

# 11. Universal Set

## Definition

The set containing all objects under consideration is called the universal set.

---

Symbol:

\[
\boxed{U}
\]

---

Example:

If considering numbers from 1 to 10:

\[
U=\{1,2,3,...,10\}
\]

---

# 12. Subset

## Definition

A set A is called a subset of B if every element of A is also an element of B.

---

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

# 13. Proper Subset

A subset that is not equal to the original set is called a proper subset.

---

Example:

\[
\{1,2\}\subset\{1,2,3\}
\]

---

# 14. Power Set

## Definition

The set containing all possible subsets of a set is called its power set.

---

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

Subsets:

\[
\emptyset,\{1\},\{2\},\{1,2\}
\]

Therefore:

\[
P(A)=
\{\emptyset,\{1\},\{2\},\{1,2\}\}
\]

---

Number of subsets:

\[
\boxed{
2^n
}
\]

where n = number of elements.

---

# PART C: SET OPERATIONS

---

# 15. Union of Sets

## Definition

The union of two sets contains all elements from both sets.

---

Symbol:

\[
\boxed{\cup}
\]

---

Formula:

\[
A\cup B
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
A\cup B=\{1,2,3,4,5\}
\]

---

# 16. Intersection of Sets

## Definition

The intersection of two sets contains only common elements.

---

Symbol:

\[
\boxed{\cap}
\]

---

Example:

\[
A\cap B=\{3\}
\]

---

# 17. Difference of Sets

## Definition

Elements present in one set but not in another set.

---

Formula:

\[
A-B
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

# 18. Complement of a Set

## Definition

The complement of a set contains elements of the universal set that are not in the given set.

---

Formula:

\[
\boxed{
A'=U-A
}
\]

---

Example:

\[
U=\{1,2,3,4,5\}
\]

\[
A=\{1,2\}
\]

Then:

\[
A'=\{3,4,5\}
\]

---

# PART D: PROPERTIES OF SET OPERATIONS

---

# 19. Commutative Property

For union:

\[
\boxed{
A\cup B=B\cup A
}
\]

For intersection:

\[
\boxed{
A\cap B=B\cap A
}
\]

---

# 20. Associative Property

Union:

\[
(A\cup B)\cup C
=

A\cup(B\cup C)
\]

---

Intersection:

\[
(A\cap B)\cap C
=

A\cap(B\cap C)
\]

---

# 21. Distributive Property

Union over intersection:

\[
A\cup(B\cap C)
=

(A\cup B)\cap(A\cup C)
\]

---

Intersection over union:

\[
A\cap(B\cup C)
=

(A\cap B)\cup(A\cap C)
\]

---

# PART E: DE MORGAN'S LAWS

---

# 22. De Morgan's First Law

\[
\boxed{
(A\cup B)'=A'\cap B'
}
\]

---

Meaning:

Complement of union equals intersection of complements.

---

# 23. De Morgan's Second Law

\[
\boxed{
(A\cap B)'=A'\cup B'
}
\]

---

Meaning:

Complement of intersection equals union of complements.

---

# PART F: CARDINALITY OF SETS

---

# 24. Cardinality

## Definition

The number of elements in a set is called its cardinality.

---

Symbol:

\[
\boxed{n(A)}
\]

---

Example:

\[
A=\{1,2,3,4\}
\]

Therefore:

\[
n(A)=4
\]

---

# 25. Formula for Union of Two Sets

\[
\boxed{
n(A\cup B)
=

n(A)+n(B)-n(A\cap B)
}
\]

---

# Example

Given:

\[
n(A)=20
\]

\[
n(B)=15
\]

\[
n(A\cap B)=5
\]

Find:

\[
n(A\cup B)
\]

Solution:

\[
=20+15-5
\]

\[
\boxed{30}
\]

---

# Important Formula Sheet

## Number of subsets

\[
\boxed{
2^n
}
\]

---

## Complement

\[
\boxed{
A'=U-A
}
\]

---

## Union Cardinality

\[
\boxed{
n(A\cup B)
=

n(A)+n(B)-n(A\cap B)
}
\]

---

## De Morgan's Laws

\[
\boxed{
(A\cup B)'=A'\cap B'
}
\]

\[
\boxed{
(A\cap B)'=A'\cup B'
}
\]

---

# Common Mistakes

- Forgetting that sets contain distinct elements.
- Confusing union and intersection.
- Forgetting subtraction of common elements in cardinality formula.
- Mixing subset and element symbols.
- Forgetting empty set is a subset of every set.

---

# Chapter Summary

- A set is a collection of well-defined objects.
- Sets can be represented using roster and set-builder forms.
- Different types of sets include empty, finite, infinite and subsets.
- Set operations combine or compare sets.
- De Morgan's laws connect union, intersection and complements.
- Cardinality gives the number of elements in a set.

\[
\boxed{
\text{Set language provides the foundation for modern mathematics.}
}
\]

# Tamil Nadu State Board Class 9 Mathematics

