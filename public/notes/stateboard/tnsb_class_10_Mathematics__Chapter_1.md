# Chapter 1: Relations and Functions

> **Subject:** Mathematics  
> **Class:** 10  
> **Chapter:** Relations and Functions

---

# Introduction

Relations and functions describe the connection between two sets of objects.

They are widely used in:

- Algebra
- Coordinate geometry
- Calculus
- Real-life mathematical modelling

This chapter covers:

- Cartesian product
- Relations
- Domain and range
- Functions
- Types of functions
- Special functions
- Composite functions
- Inverse functions

---

# PART A: SETS AND CARTESIAN PRODUCT

---

# 1. Ordered Pair

## Definition

A pair of elements written in a specific order is called an ordered pair.

It is written as:

\[
\boxed{(a,b)}
\]

where:

- a = first element
- b = second element

---

Important property:

\[
\boxed{
(a,b)\neq(b,a)
}
\]

unless:

\[
a=b
\]

---

Example:

\[
(2,5)\neq(5,2)
\]

---

# 2. Cartesian Product

## Definition

The Cartesian product of two sets A and B is the set of all ordered pairs where the first element belongs to A and the second element belongs to B.

It is represented as:

\[
\boxed{A\times B}
\]

---

Formula:

If:

\[
n(A)=m
\]

and

\[
n(B)=n
\]

then:

\[
\boxed{
n(A\times B)=mn
}
\]

---

Example:

Let:

\[
A=\{1,2\}
\]

\[
B=\{a,b\}
\]

Then:

\[
A\times B
\]

=

\[
\{(1,a),(1,b),(2,a),(2,b)\}
\]

---

# 3. Properties of Cartesian Product

---

## Property 1

Generally:

\[
\boxed{
A\times B\neq B\times A
}
\]

---

## Property 2

If:

\[
A=\phi
\]

or

\[
B=\phi
\]

then:

\[
\boxed{
A\times B=\phi
}
\]

---

# PART B: RELATIONS

---

# 4. Relation

## Definition

A relation is a connection between elements of two sets.

A relation from set A to set B is a subset of:

\[
\boxed{
A\times B
}
\]

---

Example:

Let:

\[
A=\{1,2,3\}
\]

\[
B=\{2,4,6\}
\]

Relation:

\[
R=\{(1,2),(2,4),(3,6)\}
\]

---

# 5. Domain of a Relation

## Definition

The set of all first elements of ordered pairs is called the domain.

---

Example:

\[
R=\{(1,2),(2,4),(3,6)\}
\]

Domain:

\[
\boxed{
\{1,2,3\}
}
\]

---

# 6. Range of a Relation

## Definition

The set of all second elements of ordered pairs is called the range.

---

Example:

\[
R=\{(1,2),(2,4),(3,6)\}
\]

Range:

\[
\boxed{
\{2,4,6\}
}
\]

---

# PART C: FUNCTIONS

---

# 7. Function

## Definition

A function is a special type of relation where every element of the domain has exactly one image in the range.

---

Representation:

\[
\boxed{
f:A\rightarrow B
}
\]

---

Meaning:

Function f maps elements of A to B.

---

# 8. Conditions for a Function

A relation is a function if:

1. Every input has an output.
2. One input cannot have more than one output.

---

Example:

\[
\{(1,2),(2,4),(3,6)\}
\]

is a function.

---

Not a function:

\[
\{(1,2),(1,5)\}
\]

because input 1 has two outputs.

---

# 9. Vertical Line Test

## Definition

A graph represents a function if every vertical line cuts the graph at only one point.

---

If a vertical line cuts the graph twice:

\[
\boxed{\text{Not a function}}
\]

---

# PART D: TYPES OF FUNCTIONS

---

# 10. One-One Function (Injective)

## Definition

A function in which different elements of the domain have different images.

---

Condition:

If:

\[
f(a)=f(b)
\]

then:

\[
\boxed{a=b}
\]

---

Example:

\[
f(x)=2x
\]

---

# 11. Many-One Function

## Definition

A function where two or more elements of domain have the same image.

---

Example:

\[
f(x)=x^2
\]

because:

\[
f(2)=4
\]

and

\[
f(-2)=4
\]

---

# 12. Onto Function (Surjective)

## Definition

A function where every element of the codomain has at least one pre-image.

---

Range = Codomain

---

# 13. Into Function

## Definition

A function where some elements of codomain do not have pre-images.

---

Range:

\[
\subset
\]

Codomain

---

# 14. Bijective Function

A function that is both:

- One-one
- Onto

is called bijective.

---

Properties:

- Inverse function exists.
- Every element has unique image.

---

# PART E: SPECIAL FUNCTIONS

---

# 15. Linear Function

General form:

\[
\boxed{
f(x)=ax+b
}
\]

where:

\[
a\neq0
\]

---

Graph:

Straight line

---

Example:

\[
f(x)=2x+3
\]

---

# 16. Quadratic Function

General form:

\[
\boxed{
f(x)=ax^2+bx+c
}
\]

---

Graph:

Parabola

---

Example:

\[
f(x)=x^2+2x+1
\]

---

# 17. Cubic Function

General form:

\[
\boxed{
f(x)=ax^3+bx^2+cx+d
}
\]

---

Graph:

Cubic curve

---

Example:

\[
f(x)=x^3
\]

---

# 18. Reciprocal Function

General form:

\[
\boxed{
f(x)=\frac1x
}
\]

---

Domain:

\[
x\neq0
\]

---

Graph:

Hyperbola

---

# PART F: COMPOSITION OF FUNCTIONS

---

# 19. Composite Function

## Definition

Combining two functions to form a new function is called composition of functions.

---

Notation:

\[
\boxed{
(f\circ g)(x)
}
\]

---

Meaning:

First apply g, then apply f.

---

Formula:

\[
\boxed{
(f\circ g)(x)=f(g(x))
}
\]

---

Example:

Let:

\[
f(x)=x+2
\]

\[
g(x)=3x
\]

Then:

\[
(f\circ g)(x)
\]

\[
=f(3x)
\]

\[
=3x+2
\]

---

# PART G: INVERSE FUNCTIONS

---

# 20. Inverse Function

## Definition

The function that reverses the operation of another function is called inverse function.

---

Notation:

\[
\boxed{
f^{-1}(x)
}
\]

---

Condition:

Only bijective functions have inverses.

---

# 21. Finding Inverse Function

Steps:

1. Replace:

\[
f(x)=y
\]

2. Interchange x and y.

3. Solve for y.

4. Replace y by:

\[
f^{-1}(x)
\]

---

Example:

\[
f(x)=2x+3
\]

Let:

\[
y=2x+3
\]

Interchange:

\[
x=2y+3
\]

\[
x-3=2y
\]

\[
y=\frac{x-3}{2}
\]

Therefore:

\[
\boxed{
f^{-1}(x)=\frac{x-3}{2}
}
\]

---

# Important Formula Sheet

## Cartesian Product

\[
\boxed{
n(A\times B)=n(A)n(B)
}
\]

---

## Composite Function

\[
\boxed{
(f\circ g)(x)=f(g(x))
}
\]

---

## Linear Function

\[
\boxed{
f(x)=ax+b
}
\]

---

## Quadratic Function

\[
\boxed{
f(x)=ax^2+bx+c
}
\]

---

## Reciprocal Function

\[
\boxed{
f(x)=\frac1x
}
\]

---

# Solved Examples

---

## Example 1

Find:

\[
A\times B
\]

where:

\[
A=\{1,2\}
\]

\[
B=\{3,4\}
\]

Solution:

\[
A\times B
\]

\[
=\{(1,3),(1,4),(2,3),(2,4)\}
\]

---

## Example 2

Find domain and range:

\[
R=\{(2,5),(3,7),(4,9)\}
\]

Domain:

\[
\boxed{\{2,3,4\}}
\]

Range:

\[
\boxed{\{5,7,9\}}
\]

---

## Example 3

Find inverse of:

\[
f(x)=x+5
\]

Solution:

\[
y=x+5
\]

Interchange:

\[
x=y+5
\]

\[
y=x-5
\]

Therefore:

\[
\boxed{
f^{-1}(x)=x-5
}
\]

---

# Common Mistakes

- Confusing relation and function.
- Forgetting ordered pairs have fixed order.
- Assuming every relation is a function.
- Forgetting inverse exists only for bijective functions.
- Mixing domain and range.
- Applying composition in the wrong order.

---

# Chapter Summary

- Cartesian product creates ordered pairs from two sets.
- Relations are subsets of Cartesian products.
- Functions assign exactly one output to each input.
- Functions can be classified as one-one, onto and bijective.
- Linear, quadratic, cubic and reciprocal functions have different graphs.
- Composite functions combine two functions.
- Inverse functions reverse the operation of a function.

\[
\boxed{
\text{Relations describe connections, while functions describe unique mappings.}
}
\]

# Tamil Nadu State Board Class 10 Mathematics

