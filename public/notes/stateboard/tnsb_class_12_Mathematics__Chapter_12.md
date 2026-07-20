# Chapter 12: Discrete Mathematics

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 2  
> **Chapter:** Discrete Mathematics

---

# Introduction

Discrete Mathematics deals with mathematical structures that are **countable and distinct**.

It is widely used in:

- Computer science
- Logic circuits
- Programming
- Information theory
- Decision making

Main topics:

1. Binary operations
2. Mathematical logic

---

# PART A: BINARY OPERATIONS

---

# 1. Binary Operation

## Definition

A binary operation on a set A is a rule that combines any two elements of A to produce another element of A.

If:

\[
*:A\times A\rightarrow A
\]

then * is a binary operation on A.

---

# Example

Set:

\[
A=\{1,2,3\}
\]

Operation:

\[
a*b=a+b
\]

If:

\[
1*2=3
\]

Since 3 belongs to A, it is closed.

---

# 2. Properties of Binary Operations

A binary operation may have:

1. Closure property
2. Associative property
3. Commutative property
4. Identity element
5. Inverse element

---

# 3. Closure Property

## Definition

A binary operation is closed if the result of the operation always belongs to the same set.

---

For:

\[
a,b\in A
\]

if:

\[
\boxed{
a*b\in A
}
\]

then operation is closed.

---

# Example

For integers:

Addition:

\[
2+3=5
\]

Since:

\[
5\in Z
\]

addition is closed.

---

# 4. Commutative Property

## Definition

An operation is commutative if changing the order does not change the result.

---

Condition:

\[
\boxed{
a*b=b*a
}
\]

---

Example:

Addition:

\[
3+5=5+3
\]

---

# 5. Associative Property

## Definition

An operation is associative if grouping does not affect the result.

---

Condition:

\[
\boxed{
(a*b)*c=a*(b*c)
}
\]

---

Example:

Addition:

\[
(2+3)+4
\]

\[
=2+(3+4)
\]

---

# 6. Identity Element

## Definition

An element e is called identity if:

\[
\boxed{
a*e=e*a=a
}
\]

for every element a.

---

# Examples

## Addition

Identity:

\[
\boxed{0}
\]

because:

\[
a+0=a
\]

---

## Multiplication

Identity:

\[
\boxed{1}
\]

because:

\[
a\times1=a
\]

---

# 7. Inverse Element

## Definition

An element b is inverse of a if:

\[
\boxed{
a*b=b*a=e
}
\]

where e is identity element.

---

# Example

For addition:

Inverse of a:

\[
\boxed{-a}
\]

because:

\[
a+(-a)=0
\]

---

# 8. Algebraic Structure

---

# Semigroup

A set with a binary operation satisfying:

\[
\boxed{\text{Closure + Associativity}}
\]

---

# Monoid

A semigroup with identity element.

\[
\boxed{
\text{Closure + Associativity + Identity}
}
\]

---

# Group

A monoid where every element has an inverse.

\[
\boxed{
\text{Closure + Associativity + Identity + Inverse}
}
\]

---

# Abelian Group

A group that also satisfies commutative property.

\[
\boxed{
a*b=b*a
}
\]

---

# PART B: MATHEMATICAL LOGIC

---

# 9. Proposition

## Definition

A statement that is either true or false, but not both, is called a proposition.

---

Examples:

True:

\[
2+3=5
\]

False:

\[
5<2
\]

---

# 10. Truth Value

The truth value of a proposition is:

True:

\[
\boxed{T}
\]

False:

\[
\boxed{F}
\]

---

# 11. Logical Connectives

Statements can be combined using logical operators.

Main operators:

1. NOT
2. AND
3. OR
4. Implication
5. Biconditional

---

# 12. Negation (NOT)

Symbol:

\[
\boxed{\neg p}
\]

Meaning:

"not p"

---

Truth Table:

| p   | ¬p  |
| --- | --- |
| T   | F   |
| F   | T   |

---

# 13. Conjunction (AND)

Symbol:

\[
\boxed{p\land q}
\]

True only when both p and q are true.

---

Truth Table:

| p   | q   | p∧q |
| --- | --- | --- |
| T   | T   | T   |
| T   | F   | F   |
| F   | T   | F   |
| F   | F   | F   |

---

# 14. Disjunction (OR)

Symbol:

\[
\boxed{p\lor q}
\]

True if at least one statement is true.

---

Truth Table:

| p   | q   | p∨q |
| --- | --- | --- |
| T   | T   | T   |
| T   | F   | T   |
| F   | T   | T   |
| F   | F   | F   |

---

# 15. Implication

Symbol:

\[
\boxed{p\rightarrow q}
\]

Meaning:

"If p then q"

---

Truth Table:

| p   | q   | p→q |
| --- | --- | --- |
| T   | T   | T   |
| T   | F   | F   |
| F   | T   | T   |
| F   | F   | T   |

---

# 16. Biconditional

Symbol:

\[
\boxed{p\leftrightarrow q}
\]

Meaning:

"p if and only if q"

---

True when both have same truth value.

---

Truth Table:

| p   | q   | p↔q |
| --- | --- | --- |
| T   | T   | T   |
| T   | F   | F   |
| F   | T   | F   |
| F   | F   | T   |

---

# 17. Tautology

## Definition

A proposition that is always true is called a tautology.

---

Example:

\[
\boxed{
p\lor\neg p
}
\]

Truth table:

| p   | ¬p  | p∨¬p |
| --- | --- | ---- |
| T   | F   | T    |
| F   | T   | T    |

---

# 18. Contradiction

## Definition

A proposition that is always false is called a contradiction.

---

Example:

\[
\boxed{
p\land\neg p
}
\]

---

# 19. Logical Equivalence

Two statements are logically equivalent if they have the same truth values.

Symbol:

\[
\boxed{
p\equiv q
}
\]

---

# Important Logical Laws

---

# Identity Laws

\[
\boxed{
p\land T=p
}
\]

\[
\boxed{
p\lor F=p
}
\]

---

# Domination Laws

\[
\boxed{
p\lor T=T
}
\]

\[
\boxed{
p\land F=F
}
\]

---

# Idempotent Laws

\[
\boxed{
p\lor p=p
}
\]

\[
\boxed{
p\land p=p
}
\]

---

# Complement Laws

\[
\boxed{
p\lor\neg p=T
}
\]

\[
\boxed{
p\land\neg p=F
}
\]

---

# De Morgan's Laws

## First Law

\[
\boxed{
\neg(p\land q)=\neg p\lor\neg q
}
\]

---

## Second Law

\[
\boxed{
\neg(p\lor q)=\neg p\land\neg q
}
\]

---

# Comparison Tables

## Group vs Abelian Group

| Group                         | Abelian Group       |
| ----------------------------- | ------------------- |
| Has inverse                   | Has inverse         |
| May not be commutative        | Must be commutative |
| \(a*b\) may not equal \(b*a\) | \(a*b=b*a\)         |

---

## Tautology vs Contradiction

| Tautology         | Contradiction     |
| ----------------- | ----------------- |
| Always true       | Always false      |
| Truth value T     | Truth value F     |
| Example: \(p∨¬p\) | Example: \(p∧¬p\) |

---

# Important Formula Sheet

## Binary Operation

\[
*:A\times A\rightarrow A
\]

---

## Associativity

\[
(a*b)*c=a*(b*c)
\]

---

## Commutativity

\[
a*b=b*a
\]

---

## Identity

\[
a*e=e*a=a
\]

---

## Inverse

\[
a*a^{-1}=e
\]

---

## De Morgan's Laws

\[
\neg(p\land q)=\neg p\lor\neg q
\]

\[
\neg(p\lor q)=\neg p\land\neg q
\]

---

# Solved Examples

## Example 1

Check whether subtraction is commutative.

Take:

\[
5-3=2
\]

but:

\[
3-5=-2
\]

Therefore:

\[
\boxed{\text{subtraction is not commutative}}
\]

---

## Example 2

Find identity element for multiplication.

Need:

\[
a*e=a
\]

For multiplication:

\[
a\times1=a
\]

Therefore:

\[
\boxed{e=1}
\]

---

## Example 3

Show:

\[
p\lor\neg p
\]

is a tautology.

| p   | ¬p  | p∨¬p |
| --- | --- | ---- |
| T   | F   | T    |
| F   | T   | T    |

Since output is always true:

\[
\boxed{\text{Tautology}}
\]

---

## Example 4

Find inverse of 5 under addition.

Identity:

\[
0
\]

Need:

\[
5+x=0
\]

Therefore:

\[
\boxed{x=-5}
\]

---

# Common Mistakes

- Forgetting closure condition in binary operations.
- Confusing identity and inverse.
- Assuming every operation is commutative.
- Mixing logical AND and OR truth tables.
- Forgetting implication is false only when:

\[
T\rightarrow F
\]

- Confusing tautology with contradiction.
- Applying De Morgan's laws incorrectly.

---

# Chapter Summary

- Binary operations combine two elements of a set and return another element of the same set.
- Operations may have properties like associativity, commutativity, identity, and inverse.
- Groups are important algebraic structures.
- Mathematical logic uses propositions and truth tables.
- Tautologies are always true statements.
- Contradictions are always false statements.
- Logical equivalences simplify complex statements.

\[
\boxed{
\text{Logic provides the foundation for mathematical reasoning and computer science.}
}
\]
