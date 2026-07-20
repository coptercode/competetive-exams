# Tamil Nadu State Board Class 11 Mathematics Volume 1

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

# Chapter 2: Basic Algebra

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 1  
> **Chapter:** Basic Algebra

---

# Introduction

Algebra is the branch of mathematics that deals with symbols, variables and equations.

This chapter covers:

- Real numbers
- Rational and irrational numbers
- Inequalities
- Absolute value
- Quadratic equations
- Roots and coefficients
- Partial fractions
- Logarithms

Applications:

- Equation solving
- Graphs
- Calculus
- Mathematical modelling

---

# PART A: REAL NUMBERS

---

# 1. Real Numbers

## Definition

All numbers that can be represented on a number line are called real numbers.

Symbol:

\[
\boxed{R}
\]

---

Real numbers consist of:

1. Rational numbers
2. Irrational numbers

---

# 2. Rational Numbers

## Definition

Numbers that can be expressed in the form:

\[
\boxed{\frac pq}
\]

where:

\[
p,q\in Z,\quad q\neq0
\]

are called rational numbers.

---

Examples:

\[
\frac12,\frac{-3}{4},5
\]

---

Decimal representation:

- Terminating decimals
- Recurring decimals

Examples:

\[
0.5
\]

\[
0.333...
\]

---

# 3. Irrational Numbers

## Definition

Numbers that cannot be expressed as:

\[
\frac pq
\]

are called irrational numbers.

---

Examples:

\[
\sqrt2,\sqrt3,\pi
\]

---

Decimal representation:

\[
\boxed{\text{Non-terminating and non-recurring}}
\]

---

# 4. Properties of Real Numbers

---

# Closure Property

For real numbers:

\[
a+b,\ a-b,\ ab
\]

are also real numbers.

---

# Commutative Property

Addition:

\[
a+b=b+a
\]

Multiplication:

\[
ab=ba
\]

---

# Associative Property

Addition:

\[
(a+b)+c=a+(b+c)
\]

Multiplication:

\[
(ab)c=a(bc)
\]

---

# Distributive Property

\[
\boxed{
a(b+c)=ab+ac
}
\]

---

# PART B: INEQUALITIES

---

# 5. Inequality

## Definition

A statement comparing two quantities using:

\[
<,\ >,\leq,\geq
\]

is called an inequality.

---

Examples:

\[
x+2>5
\]

\[
2x\leq8
\]

---

# 6. Types of Inequalities

---

## Linear Inequality

Highest power of variable is one.

Example:

\[
2x+3>7
\]

---

## Quadratic Inequality

Highest power is two.

Example:

\[
x^2-5x+6>0
\]

---

# 7. Rules for Solving Inequalities

---

## Addition Rule

Adding same number on both sides does not change inequality.

\[
a<b
\]

then:

\[
a+c<b+c
\]

---

## Multiplication Rule

If multiplied by positive number:

\[
a<b
\]

then:

\[
ac<bc
\]

---

If multiplied by negative number, inequality sign reverses:

\[
a<b
\]

then:

\[
-ac>-bc
\]

---

# PART C: ABSOLUTE VALUE

---

# 8. Absolute Value

## Definition

The distance of a number from zero on the number line is called absolute value.

Symbol:

\[
\boxed{|x|}
\]

---

Definition:

\[
|x|=
\begin{cases}
x,&x\geq0\\
-x,&x<0
\end{cases}
\]

---

Examples:

\[
|5|=5
\]

\[
|-5|=5
\]

---

# 9. Properties of Absolute Value

---

## Property 1

\[
\boxed{|x|\geq0}
\]

---

## Property 2

\[
|-x|=|x|
\]

---

## Property 3

\[
|xy|=|x||y|
\]

---

## Property 4

\[
\left|\frac xy\right|
=

\frac{|x|}{|y|}
\]

---

# Solving Absolute Value Equations

Example:

\[
|x|=5
\]

Solutions:

\[
x=5,-5
\]

---

# PART D: QUADRATIC EQUATIONS

---

# 10. Quadratic Equation

## Definition

An equation of the form:

\[
\boxed{
ax^2+bx+c=0
}
\]

where:

\[
a\neq0
\]

is called a quadratic equation.

---

# 11. Roots of Quadratic Equation

The values of x satisfying the equation are called roots.

---

Formula:

\[
\boxed{
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
}
\]

---

# 12. Discriminant

The expression:

\[
\boxed{
D=b^2-4ac
}
\]

is called discriminant.

---

It determines nature of roots.

---

## Case 1

\[
D>0
\]

Two distinct real roots.

---

## Case 2

\[
D=0
\]

Equal roots.

---

## Case 3

\[
D<0
\]

No real roots.

---

# 13. Relation Between Roots and Coefficients

For:

\[
ax^2+bx+c=0
\]

Roots:

\[
\alpha,\beta
\]

---

Sum of roots:

\[
\boxed{
\alpha+\beta=-\frac ba
}
\]

---

Product of roots:

\[
\boxed{
\alpha\beta=\frac ca
}
\]

---

# PART E: SIGN BEHAVIOUR OF ROOTS

---

For roots:

\[
\alpha,\beta
\]

---

If:

\[
\alpha+\beta>0
\]

and

\[
\alpha\beta>0
\]

both roots are positive.

---

If:

\[
\alpha+\beta<0
\]

and:

\[
\alpha\beta>0
\]

both roots are negative.

---

If:

\[
\alpha\beta<0
\]

roots have opposite signs.

---

# PART F: PARTIAL FRACTIONS

---

# 14. Partial Fractions

## Definition

The process of expressing a rational function as a sum of simpler fractions is called partial fraction decomposition.

---

Example:

\[
\frac{x+5}{(x+1)(x+2)}
\]

can be written as:

\[
\frac A{x+1}+\frac B{x+2}
\]

---

# Types of Partial Fractions

---

# Case 1: Distinct Linear Factors

Example:

\[
\frac{P(x)}
{(x-a)(x-b)}
\]

Form:

\[
\frac A{x-a}+\frac B{x-b}
\]

---

# Case 2: Repeated Linear Factors

Example:

\[
(x-a)^2
\]

Form:

\[
\frac A{x-a} +
\frac B{(x-a)^2}
\]

---

# Case 3: Quadratic Factors

Form:

\[
\frac{Ax+B}{x^2+a}
\]

---

# PART G: LOGARITHMS

---

# 15. Logarithm

## Definition

If:

\[
a^x=N
\]

then:

\[
\boxed{
\log_aN=x
}
\]

---

where:

- a = base
- N = number
- x = logarithm

---

# Conditions

\[
a>0
\]

\[
a\neq1
\]

\[
N>0
\]

---

# 16. Laws of Logarithms

---

# Product Law

\[
\boxed{
\log_a(MN)=\log_aM+\log_aN
}
\]

---

# Quotient Law

\[
\boxed{
\log_a\frac MN
=

\log_aM-\log_aN
}
\]

---

# Power Law

\[
\boxed{
\log_a(M^n)=n\log_aM
}
\]

---

# Change of Base Formula

\[
\boxed{
\log_ab=
\frac{\log_cb}{\log_ca}
}
\]

---

# Common Logarithms

Base:

\[
10
\]

Notation:

\[
\log x
\]

---

# Natural Logarithms

Base:

\[
e
\]

Notation:

\[
\ln x
\]

---

# Important Formula Sheet

## Quadratic Formula

\[
\boxed{
x=
\frac{-b\pm\sqrt{b^2-4ac}}
{2a}
}
\]

---

## Discriminant

\[
\boxed{
D=b^2-4ac
}
\]

---

## Sum of Roots

\[
\boxed{
\alpha+\beta=-\frac ba
}
\]

---

## Product of Roots

\[
\boxed{
\alpha\beta=\frac ca
}
\]

---

## Absolute Value

\[
|x|=
\begin{cases}
x,&x\geq0\\
-x,&x<0
\end{cases}
\]

---

## Log Laws

\[
\log(MN)=\log M+\log N
\]

\[
\log\frac MN=\log M-\log N
\]

\[
\log M^n=n\log M
\]

---

# Solved Examples

## Example 1

Find roots of:

\[
x^2-5x+6=0
\]

Factorising:

\[
(x-2)(x-3)=0
\]

Therefore:

\[
\boxed{x=2,3}
\]

---

## Example 2

Find sum of roots:

\[
2x^2+7x+3=0
\]

Formula:

\[
\alpha+\beta=-\frac ba
\]

\[
=-\frac72
\]

Answer:

\[
\boxed{-\frac72}
\]

---

## Example 3

Simplify:

\[
\log(ab)
\]

Using product law:

\[
\boxed{
\log a+\log b
}
\]

---

# Common Mistakes

- Confusing rational and irrational numbers.
- Forgetting inequality sign changes when multiplying by negative numbers.
- Using wrong discriminant condition.
- Forgetting \(a\neq0\) in quadratic equations.
- Mixing sum and product of roots formulas.
- Applying logarithm laws incorrectly.
- Forgetting log arguments must be positive.

---

# Chapter Summary

- Real numbers include rational and irrational numbers.
- Inequalities compare numerical quantities.
- Absolute value represents distance from zero.
- Quadratic equations are solved using roots and discriminants.
- Partial fractions simplify rational expressions.
- Logarithms convert exponential relationships into algebraic form.

\[
\boxed{
\text{Algebra provides the tools to solve mathematical relationships.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 1

# Chapter 3: Trigonometry

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 1  
> **Chapter:** Trigonometry

---

# Introduction

Trigonometry is the branch of mathematics that studies relationships between angles and sides of triangles.

This chapter covers:

- Measurement of angles
- Degree and radian systems
- Trigonometric functions
- Compound angle formulas
- Double and half-angle formulas
- Trigonometric equations
- Properties of triangles

Applications:

- Geometry
- Physics
- Engineering
- Astronomy
- Navigation

---

# PART A: MEASUREMENT OF ANGLES

---

# 1. Angle

## Definition

An angle is formed when a ray rotates about its initial point.

The point of rotation is called:

\[
\boxed{\text{Vertex}}
\]

---

# 2. Systems of Angle Measurement

There are three systems:

1. Sexagesimal system
2. Centisimal system
3. Circular system

---

# 3. Degree Measure

In sexagesimal system:

\[
\boxed{1\text{ revolution}=360^\circ}
\]

---

Conversions:

\[
1^\circ=60'
\]

\[
1'=60''
\]

---

# 4. Radian Measure

## Definition

The angle subtended at the centre of a circle by an arc equal to the radius is called one radian.

---

Formula:

\[
\boxed{
\theta=\frac{s}{r}
}
\]

where:

- s = arc length
- r = radius

---

# 5. Relation Between Degree and Radian

A complete revolution:

\[
360^\circ=2\pi\text{ radians}
\]

Therefore:

\[
\boxed{
180^\circ=\pi\text{ radians}
}
\]

---

Conversion formulas:

Degrees to radians:

\[
\boxed{
\theta^\circ\times\frac{\pi}{180}
}
\]

---

Radians to degrees:

\[
\boxed{
\theta\times\frac{180}{\pi}
}
\]

---

# PART B: TRIGONOMETRIC FUNCTIONS

---

# 6. Trigonometric Ratios

For a right triangle:

\[
\theta
\]

is an angle.

---

# Sine

\[
\boxed{
\sin\theta=\frac{\text{Opposite side}}{\text{Hypotenuse}}
}
\]

---

# Cosine

\[
\boxed{
\cos\theta=\frac{\text{Adjacent side}}{\text{Hypotenuse}}
}
\]

---

# Tangent

\[
\boxed{
\tan\theta=
\frac{\text{Opposite side}}
{\text{Adjacent side}}
}
\]

---

# Reciprocal Ratios

---

Cosecant:

\[
\boxed{
\csc\theta=\frac1{\sin\theta}
}
\]

---

Secant:

\[
\boxed{
\sec\theta=\frac1{\cos\theta}
}
\]

---

Cotangent:

\[
\boxed{
\cot\theta=\frac1{\tan\theta}
}
\]

---

# 7. Fundamental Identities

---

## Identity 1

\[
\boxed{
\sin^2\theta+\cos^2\theta=1
}
\]

---

## Identity 2

\[
\boxed{
1+\tan^2\theta=\sec^2\theta
}
\]

---

## Identity 3

\[
\boxed{
1+\cot^2\theta=\csc^2\theta
}
\]

---

# PART C: TRIGONOMETRIC FUNCTIONS OF GENERAL ANGLES

---

# 8. Signs in Different Quadrants

---

## First Quadrant

All positive:

\[
\boxed{All}
\]

---

## Second Quadrant

Only sine positive:

\[
\boxed{\sin\theta}
\]

---

## Third Quadrant

Only tangent positive:

\[
\boxed{\tan\theta}
\]

---

## Fourth Quadrant

Only cosine positive:

\[
\boxed{\cos\theta}
\]

---

Mnemonic:

\[
\boxed{ASTC}
\]

---

# 9. Trigonometric Values of Standard Angles

| Angle | 0°  | 30°  | 45°  | 60°  | 90° |
| ----- | --- | ---- | ---- | ---- | --- |
| sin   | 0   | 1/2  | √2/2 | √3/2 | 1   |
| cos   | 1   | √3/2 | √2/2 | 1/2  | 0   |
| tan   | 0   | 1/√3 | 1    | √3   | ∞   |

---

# PART D: COMPOUND ANGLES

---

# 10. Addition Formula

---

## Sine

\[
\boxed{
\sin(A+B)
=

\sin A\cos B+\cos A\sin B
}
\]

---

## Cosine

\[
\boxed{
\cos(A+B)
=

\cos A\cos B-\sin A\sin B
}
\]

---

## Tangent

\[
\boxed{
\tan(A+B)
=

\frac{\tan A+\tan B}
{1-\tan A\tan B}
}
\]

---

# 11. Difference Formula

---

## Sine

\[
\boxed{
\sin(A-B)
=

\sin A\cos B-\cos A\sin B
}
\]

---

## Cosine

\[
\boxed{
\cos(A-B)
=

\cos A\cos B+\sin A\sin B
}
\]

---

## Tangent

\[
\boxed{
\tan(A-B)
=

\frac{\tan A-\tan B}
{1+\tan A\tan B}
}
\]

---

# PART E: DOUBLE ANGLE FORMULAS

---

# 12. Sine Double Angle

\[
\boxed{
\sin2A=2\sin A\cos A
}
\]

---

# 13. Cosine Double Angle

\[
\boxed{
\cos2A=\cos^2A-\sin^2A
}
\]

Other forms:

\[
\boxed{
\cos2A=2\cos^2A-1
}
\]

\[
\boxed{
\cos2A=1-2\sin^2A
}
\]

---

# 14. Tangent Double Angle

\[
\boxed{
\tan2A=
\frac{2\tan A}
{1-\tan^2A}
}
\]

---

# PART F: HALF ANGLE FORMULAS

---

# 15. Sine Half Angle

\[
\boxed{
\sin\frac A2
=

\pm\sqrt{\frac{1-\cos A}{2}}
}
\]

---

# 16. Cosine Half Angle

\[
\boxed{
\cos\frac A2
=

\pm\sqrt{\frac{1+\cos A}{2}}
}
\]

---

# 17. Tangent Half Angle

\[
\boxed{
\tan\frac A2
=

\pm\sqrt{\frac{1-\cos A}{1+\cos A}}
}
\]

---

# PART G: TRIGONOMETRIC EQUATIONS

---

# 18. General Solutions

---

# Equation 1

\[
\sin x=\sin\alpha
\]

Solution:

\[
\boxed{
x=n\pi+(-1)^n\alpha
}
\]

---

# Equation 2

\[
\cos x=\cos\alpha
\]

Solution:

\[
\boxed{
x=2n\pi\pm\alpha
}
\]

---

# Equation 3

\[
\tan x=\tan\alpha
\]

Solution:

\[
\boxed{
x=n\pi+\alpha
}
\]

where:

\[
n\in Z
\]

---

# PART H: PROPERTIES OF TRIANGLES

---

# 19. Sine Rule

In any triangle:

\[
\boxed{
\frac a{\sin A}
=

\frac b{\sin B}
=

\frac c{\sin C}
}
\]

---

# 20. Cosine Rule

\[
\boxed{
a^2=b^2+c^2-2bc\cos A
}
\]

---

# 21. Area of Triangle

Using two sides and included angle:

\[
\boxed{
Area=
\frac12bc\sin A
}
\]

---

# Important Formula Sheet

## Degree-Radian Conversion

\[
180^\circ=\pi
\]

---

## Basic Identity

\[
\sin^2x+\cos^2x=1
\]

---

## Addition Formula

\[
\sin(A+B)
=

\sin A\cos B+\cos A\sin B
\]

---

## Double Angle

\[
\sin2A=2\sin A\cos A
\]

---

\[
\cos2A=1-2\sin^2A
\]

---

## General Solutions

\[
\sin x=\sin a
\]

\[
x=n\pi+(-1)^na
\]

---

\[
\cos x=\cos a
\]

\[
x=2n\pi\pm a
\]

---

\[
\tan x=\tan a
\]

\[
x=n\pi+a
\]

---

# Solved Examples

## Example 1

Convert:

\[
60^\circ
\]

into radians.

Solution:

\[
60\times\frac{\pi}{180}
\]

\[
\boxed{\frac{\pi}{3}}
\]

---

## Example 2

Find:

\[
\sin30^\circ
\]

From standard values:

\[
\boxed{\frac12}
\]

---

## Example 3

Simplify:

\[
\sin^245^\circ+\cos^245^\circ
\]

Using identity:

\[
\sin^2x+\cos^2x=1
\]

Answer:

\[
\boxed{1}
\]

---

# Common Mistakes

- Confusing degree and radian measures.
- Forgetting signs in quadrants.
- Mixing addition and subtraction formulas.
- Using wrong sign in half-angle formulas.
- Forgetting general solution contains integer n.
- Confusing sine rule and cosine rule.
- Using calculator in degree mode for radian questions.

---

# Chapter Summary

- Trigonometry studies relationships between angles and sides.
- Radians provide the natural measure of angles.
- Trigonometric identities simplify expressions.
- Compound angle formulas connect multiple angles.
- Double and half-angle formulas are derived from addition formulas.
- Trigonometric equations require general solutions.
- Sine and cosine rules solve non-right triangles.

\[
\boxed{
\text{Trigonometry connects angles, geometry and periodic functions.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 1

# Chapter 4: Combinatorics and Mathematical Induction

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 1  
> **Chapter:** Combinatorics and Mathematical Induction

---

# Introduction

Combinatorics is the branch of mathematics dealing with counting, arrangements and selections.

Mathematical induction is a method of proving mathematical statements for all natural numbers.

This chapter covers:

- Fundamental principles of counting
- Factorial notation
- Permutations
- Combinations
- Mathematical induction

Applications:

- Probability
- Computer algorithms
- Statistics
- Number theory

---

# PART A: PRINCIPLES OF COUNTING

---

# 1. Fundamental Principle of Counting

## Definition

If an event can occur in:

- m ways for one step
- n ways for another step

then both events together can occur in:

\[
\boxed{m\times n}
\]

ways.

---

# 2. Addition Principle

If two events cannot occur simultaneously and have:

- m ways
- n ways

then total ways:

\[
\boxed{m+n}
\]

---

Example:

A student can choose:

3 mathematics books or 5 physics books.

Total choices:

\[
3+5=8
\]

---

# 3. Multiplication Principle

If a task involves multiple independent steps:

\[
\boxed{
\text{Total ways = Product of choices}
}
\]

---

Example:

A shirt has 3 colours and a pant has 4 colours.

Total combinations:

\[
3\times4=12
\]

---

# PART B: FACTORIAL NOTATION

---

# 4. Factorial

## Definition

The product of all positive integers from 1 to n is called factorial.

Symbol:

\[
\boxed{n!}
\]

---

Formula:

\[
\boxed{
n!=n(n-1)(n-2)...3\times2\times1
}
\]

---

Examples:

\[
5!=5\times4\times3\times2\times1
\]

\[
\boxed{5!=120}
\]

---

Special value:

\[
\boxed{0!=1}
\]

---

# PART C: PERMUTATIONS

---

# 5. Permutation

## Definition

An arrangement of objects where order matters is called permutation.

---

Example:

Arranging A, B, C:

\[
ABC,\ ACB,\ BAC
\]

are different permutations.

---

# 6. Number of Permutations

The number of arrangements of n objects taken r at a time:

\[
\boxed{
^nP_r=\frac{n!}{(n-r)!}
}
\]

---

# Derivation

For r positions:

First position:

\[
n
\]

choices

Second position:

\[
n-1
\]

choices

Third position:

\[
n-2
\]

choices

Continuing:

\[
n(n-1)(n-2)...(n-r+1)
\]

Therefore:

\[
\boxed{
^nP_r=\frac{n!}{(n-r)!}
}
\]

---

# 7. Permutations When Objects Repeat

If n objects contain repetitions:

\[
\boxed{
\frac{n!}{p!q!r!}
}
\]

where:

p, q, r are repeated objects.

---

Example:

Number of arrangements of:

\[
MISS
\]

Letters:

M = 1

I = 1

S = 2

Number:

\[
\frac{4!}{2!}
\]

\[
=12
\]

---

# PART D: COMBINATIONS

---

# 8. Combination

## Definition

Selection of objects where order does not matter is called combination.

---

Example:

Choosing committee members.

---

# 9. Formula for Combination

Number of combinations of n objects taken r at a time:

\[
\boxed{
^nC_r=
\frac{n!}{r!(n-r)!}
}
\]

---

# Relation Between Permutation and Combination

\[
\boxed{
^nP_r=^nC_r\times r!
}
\]

---

# Important Properties of Combinations

---

## Property 1

\[
\boxed{
^nC_0=1
}
\]

---

## Property 2

\[
\boxed{
^nC_n=1
}
\]

---

## Property 3

Symmetry property:

\[
\boxed{
^nC_r=^nC_{n-r}
}
\]

---

# PART E: APPLICATIONS OF PERMUTATION AND COMBINATION

---

# 10. Arrangements in a Row

For n different objects:

\[
\boxed{n!}
\]

arrangements.

---

# 11. Circular Permutations

For n objects arranged in a circle:

\[
\boxed{(n-1)!}
\]

---

# 12. Selection Problems

When selecting objects:

Use:

\[
\boxed{^nC_r}
\]

because order does not matter.

---

# PART F: MATHEMATICAL INDUCTION

---

# 13. Principle of Mathematical Induction

## Definition

Mathematical induction is a method used to prove statements involving natural numbers.

---

It consists of two steps:

1. Base step
2. Induction step

---

# 14. Steps of Mathematical Induction

Suppose statement:

\[
P(n)
\]

is to be proved.

---

## Step 1: Base Case

Show that:

\[
P(1)
\]

is true.

---

## Step 2: Induction Hypothesis

Assume:

\[
P(k)
\]

is true.

---

## Step 3: Induction Step

Prove:

\[
P(k+1)
\]

is true.

---

Therefore:

\[
\boxed{
P(n)\text{ is true for all }n\in N
}
\]

---

# 15. Example of Induction Proof

Prove:

\[
1+2+3+...+n=
\frac{n(n+1)}2
\]

---

## Step 1: Base Case

For:

\[
n=1
\]

LHS:

\[
1
\]

RHS:

\[
\frac{1(2)}2=1
\]

True.

---

## Step 2: Assume for n=k

\[
1+2+...+k=
\frac{k(k+1)}2
\]

---

## Step 3: Prove for k+1

LHS:

\[
1+2+...+k+(k+1)
\]

Using induction hypothesis:

\[
=

\frac{k(k+1)}2+(k+1)
\]

Taking common factor:

\[
=

(k+1)\left(\frac k2+1\right)
\]

\[
=

\frac{(k+1)(k+2)}2
\]

Therefore:

\[
\boxed{
P(k+1)\text{ is true}
}
\]

Hence proved.

---

# PART G: DIVISIBILITY USING INDUCTION

---

Mathematical induction can prove statements like:

\[
2^n-1
\]

is divisible by a number.

---

Method:

1. Verify initial value.
2. Assume true for n=k.
3. Prove for n=k+1.

---

# Important Formula Sheet

## Factorial

\[
\boxed{
n!=n(n-1)!
}
\]

---

## Permutation

\[
\boxed{
^nP_r=\frac{n!}{(n-r)!}
}
\]

---

## Combination

\[
\boxed{
^nC_r=
\frac{n!}{r!(n-r)!}
}
\]

---

## Relation

\[
\boxed{
^nP_r=^nC_r r!
}
\]

---

## Circular Permutation

\[
\boxed{
(n-1)!
}
\]

---

# Solved Examples

---

## Example 1

Find:

\[
^5P_2
\]

Solution:

\[
^5P_2=
\frac{5!}{3!}
\]

\[
=5\times4
\]

\[
\boxed{20}
\]

---

## Example 2

Find:

\[
^6C_2
\]

Solution:

\[
^6C_2=
\frac{6!}{2!4!}
\]

\[
=

\frac{6\times5}{2}
\]

\[
\boxed{15}
\]

---

## Example 3

Number of arrangements of 5 different books:

\[
5!
\]

\[
\boxed{120}
\]

---

# Common Mistakes

- Confusing permutation and combination.
- Using \(nCr\) when order matters.
- Using \(nPr\) when only selection is required.
- Forgetting \(0!=1\).
- Missing repeated object correction.
- Skipping induction base step.
- Assuming induction without proving \(k+1\).

---

# Chapter Summary

- Counting principles help calculate possible outcomes.
- Factorials simplify arrangement calculations.
- Permutations deal with arrangements where order matters.
- Combinations deal with selections where order does not matter.
- Mathematical induction proves statements for all natural numbers.

\[
\boxed{
\text{Count carefully, arrange logically, prove systematically.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 1

# Chapter 5: Binomial Theorem, Sequences and Series

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 1  
> **Chapter:** Binomial Theorem, Sequences and Series

---

# Introduction

This chapter deals with expansion of algebraic expressions and patterns formed by numbers.

Topics covered:

- Binomial theorem
- General and middle terms
- Arithmetic progression (AP)
- Geometric progression (GP)
- Arithmetic-geometric series
- Infinite series
- Binomial approximations

Applications:

- Algebraic expansion
- Probability
- Calculus
- Mathematical modelling

---

# PART A: BINOMIAL THEOREM

---

# 1. Binomial Expression

## Definition

An expression containing two terms connected by addition or subtraction is called a binomial.

Example:

\[
(a+b)
\]

\[
(x-y)
\]

---

# 2. Binomial Expansion

For positive integer n:

\[
\boxed{
(a+b)^n
=

^nC_0a^n +
^nC_1a^{n-1}b +
^nC_2a^{n-2}b^2
+...+
^nC_nb^n
}
\]

---

# 3. Binomial Theorem

The general form:

\[
\boxed{
(a+b)^n
=

\sum_{r=0}^{n}
^nC_r a^{n-r}b^r
}
\]

where:

\[
r=0,1,2,...,n
\]

---

# 4. Binomial Coefficients

The coefficients are:

\[
^nC_0,^nC_1,^nC_2,...,^nC_n
\]

---

Example:

Expansion of:

\[
(a+b)^3
\]

\[
=a^3+3a^2b+3ab^2+b^3
\]

Coefficients:

\[
1,3,3,1
\]

---

# 5. Pascal's Triangle

Binomial coefficients can be arranged as:

\[
\begin{array}{c}
1\\
1\quad1\\
1\quad2\quad1\\
1\quad3\quad3\quad1\\
1\quad4\quad6\quad4\quad1
\end{array}
\]

---

# 6. Properties of Binomial Coefficients

---

## Property 1

\[
\boxed{
^nC_r=^nC_{n-r}
}
\]

---

## Property 2

\[
\boxed{
^nC_0=^nC_n=1
}
\]

---

## Property 3

\[
\boxed{
^nC_r+^nC_{r+1}=^{n+1}C_{r+1}
}
\]

---

# 7. General Term

The \((r+1)^{th}\) term in expansion:

\[
(a+b)^n
\]

is:

\[
\boxed{
T_{r+1}=^nC_ra^{n-r}b^r
}
\]

---

# 8. Middle Term

Number of terms in:

\[
(a+b)^n
\]

is:

\[
\boxed{n+1}
\]

---

## Case 1: n is even

There is one middle term.

Middle term:

\[
\boxed{
T_{\frac n2+1}
}
\]

---

## Case 2: n is odd

There are two middle terms.

They are:

\[
\boxed{
T_{\frac{n+1}{2}}
}
\]

and

\[
\boxed{
T_{\frac{n+3}{2}}
}
\]

---

# PART B: SEQUENCES

---

# 9. Sequence

## Definition

A sequence is an ordered list of numbers following a particular rule.

Example:

\[
2,4,6,8,...
\]

---

Terms are represented as:

\[
a_1,a_2,a_3,...
\]

---

# PART C: ARITHMETIC PROGRESSION

---

# 10. Arithmetic Progression (AP)

## Definition

A sequence in which the difference between consecutive terms is constant is called an arithmetic progression.

---

Example:

\[
2,5,8,11,...
\]

Common difference:

\[
d=3
\]

---

# 11. General Term of AP

If first term:

\[
a
\]

and common difference:

\[
d
\]

then:

\[
\boxed{
a_n=a+(n-1)d
}
\]

---

# 12. Sum of n Terms of AP

\[
\boxed{
S_n=
\frac n2[2a+(n-1)d]
}
\]

---

Another form:

\[
\boxed{
S_n=\frac n2(a+l)
}
\]

where:

l = last term

---

# 13. Properties of AP

If:

\[
a,b,c
\]

are consecutive terms of AP:

\[
\boxed{
2b=a+c
}
\]

---

# PART D: GEOMETRIC PROGRESSION

---

# 14. Geometric Progression (GP)

## Definition

A sequence in which the ratio between consecutive terms is constant is called geometric progression.

---

Example:

\[
2,4,8,16,...
\]

Common ratio:

\[
r=2
\]

---

# 15. General Term of GP

\[
\boxed{
a_n=ar^{n-1}
}
\]

---

where:

- a = first term
- r = common ratio

---

# 16. Sum of n Terms of GP

For:

\[
r\neq1
\]

\[
\boxed{
S_n=
\frac{a(r^n-1)}{r-1}
}
\]

---

Alternative:

\[
\boxed{
S_n=
\frac{a(1-r^n)}{1-r}
}
\]

---

# 17. Infinite GP

An infinite GP has a finite sum when:

\[
\boxed{|r|<1}
\]

---

Formula:

\[
\boxed{
S_\infty=
\frac a{1-r}
}
\]

---

Example:

\[
1+\frac12+\frac14+...
\]

Here:

\[
a=1,\quad r=\frac12
\]

Therefore:

\[
S_\infty=
\frac1{1-\frac12}
\]

\[
=2
\]

---

# PART E: ARITHMETIC-GEOMETRIC SERIES

---

# 18. Arithmetic-Geometric Progression

A sequence formed by multiplying AP terms with GP terms is called arithmetic-geometric progression.

---

Example:

\[
1,2x,3x^2,4x^3,...
\]

---

General term:

\[
\boxed{
T_n=n ar^{n-1}
}
\]

---

# PART F: BINOMIAL APPROXIMATION

---

# 19. Approximation Formula

For small x:

\[
\boxed{
(1+x)^n
\approx
1+nx
}
\]

when:

\[
|x|\ll1
\]

---

More accurate form:

\[
(1+x)^n
=

1+nx+
\frac{n(n-1)}2x^2+...
\]

---

# Important Formula Sheet

## Binomial Theorem

\[
\boxed{
(a+b)^n=
\sum_{r=0}^n
^nC_ra^{n-r}b^r
}
\]

---

## General Term

\[
\boxed{
T_{r+1}=^nC_ra^{n-r}b^r
}
\]

---

## AP nth Term

\[
\boxed{
a_n=a+(n-1)d
}
\]

---

## AP Sum

\[
\boxed{
S_n=\frac n2[2a+(n-1)d]
}
\]

---

## GP nth Term

\[
\boxed{
a_n=ar^{n-1}
}
\]

---

## GP Sum

\[
\boxed{
S_n=
\frac{a(r^n-1)}{r-1}
}
\]

---

## Infinite GP

\[
\boxed{
S_\infty=\frac a{1-r}
}
\]

---

# Solved Examples

---

## Example 1

Find coefficient of \(x^2\) in:

\[
(1+x)^5
\]

General term:

\[
T_{r+1}=^5C_rx^r
\]

For \(x^2\):

\[
r=2
\]

Coefficient:

\[
^5C_2
\]

\[
=\frac{5!}{2!3!}
\]

\[
\boxed{10}
\]

---

## Example 2

Find 10th term of AP:

\[
3,7,11,...
\]

Here:

\[
a=3,d=4
\]

\[
a_{10}=3+9(4)
\]

\[
\boxed{39}
\]

---

## Example 3

Find sum of infinite GP:

\[
4+2+1+\frac12+...
\]

Here:

\[
a=4,r=\frac12
\]

\[
S_\infty=
\frac4{1-\frac12}
\]

\[
\boxed{8}
\]

---

# Common Mistakes

- Forgetting that binomial theorem applies for positive integers.
- Mixing the general term index \(r\) and term number.
- Confusing AP common difference with GP common ratio.
- Using infinite GP formula when \(|r|\geq1\).
- Forgetting the middle term position.
- Making sign errors in \((a-b)^n\).
- Using approximation when x is not small.

---

# Chapter Summary

- Binomial theorem expands powers of binomial expressions.
- General term helps find specific terms and coefficients.
- AP deals with constant differences.
- GP deals with constant ratios.
- Infinite GP has a finite sum only when \(|r|<1\).
- Binomial approximations simplify calculations for small values.

\[
\boxed{
\text{Patterns and expansions reveal hidden mathematical structures.}
}
\]

# Tamil Nadu State Board Class 11 Mathematics Volume 1

# Chapter 6: Two Dimensional Analytical Geometry

> **Subject:** Mathematics  
> **Class:** 11  
> **Volume:** 1  
> **Chapter:** Two Dimensional Analytical Geometry

---

# Introduction

Analytical geometry connects algebra and geometry by representing geometric figures using equations.

This chapter covers:

- Locus of a point
- Straight lines
- Distance and angle formulas
- Different forms of line equations
- Pair of straight lines

Applications:

- Coordinate geometry
- Engineering
- Physics
- Computer graphics

---

# PART A: LOCUS OF A POINT

---

# 1. Coordinate System

A point in a plane is represented by:

\[
\boxed{(x,y)}
\]

where:

- x = abscissa
- y = ordinate

---

# 2. Locus

## Definition

The locus of a point is the path traced by a point moving under a given condition.

---

Examples:

- Circle
- Straight line
- Parabola

---

# 3. Equation of a Locus

The equation that satisfies all points on the locus is called the equation of the locus.

---

# Steps to Find Locus

1. Assume moving point:

\[
P(x,y)
\]

2. Translate given condition into equation.

3. Simplify to obtain locus equation.

---

# Example

Find locus of points equidistant from origin.

Distance from origin:

\[
\sqrt{x^2+y^2}
\]

For constant distance a:

\[
x^2+y^2=a^2
\]

This represents a circle.

---

# PART B: STRAIGHT LINES

---

# 4. Straight Line

## Definition

A straight line is the shortest distance between two points.

General equation:

\[
\boxed{
ax+by+c=0
}
\]

---

# 5. Slope of a Line

## Definition

The tangent of the angle made by the line with positive x-axis is called slope.

Symbol:

\[
\boxed{m}
\]

---

Formula:

\[
\boxed{
m=\tan\theta
}
\]

---

For two points:

\[
(x_1,y_1)
\]

and

\[
(x_2,y_2)
\]

Slope:

\[
\boxed{
m=
\frac{y_2-y_1}{x_2-x_1}
}
\]

---

# 6. Forms of Equation of a Straight Line

---

# 1. Slope-Intercept Form

\[
\boxed{
y=mx+c
}
\]

where:

- m = slope
- c = y-intercept

---

# 2. Point-Slope Form

Line passing through:

\[
(x_1,y_1)
\]

with slope m:

\[
\boxed{
y-y_1=m(x-x_1)
}
\]

---

# 3. Two Point Form

Line passing through:

\[
(x_1,y_1)
\]

and:

\[
(x_2,y_2)
\]

is:

\[
\boxed{
\frac{y-y_1}{y_2-y_1}
=

\frac{x-x_1}{x_2-x_1}
}
\]

---

# 4. Intercept Form

If line cuts:

x-axis at a

and y-axis at b:

\[
\boxed{
\frac xa+\frac yb=1
}
\]

---

# 5. Normal Form

\[
\boxed{
x\cos\alpha+y\sin\alpha=p
}
\]

where:

- p = perpendicular distance from origin

---

# PART C: ANGLE BETWEEN TWO LINES

---

# 7. Angle Between Lines

If two lines have slopes:

\[
m_1,m_2
\]

then:

\[
\boxed{
\tan\theta=
\left|
\frac{m_2-m_1}
{1+m_1m_2}
\right|
}
\]

---

# Conditions

---

## Parallel Lines

\[
\boxed{
m_1=m_2
}
\]

---

## Perpendicular Lines

\[
\boxed{
m_1m_2=-1
}
\]

---

# 8. Distance Formula

Distance between two points:

\[
(x_1,y_1)
\]

and:

\[
(x_2,y_2)
\]

is:

\[
\boxed{
d=
\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
}
\]

---

# 9. Section Formula

Point dividing line joining:

\[
(x_1,y_1)
\]

and:

\[
(x_2,y_2)
\]

in ratio:

\[
m:n
\]

is:

\[
\boxed{
\left(
\frac{mx_2+nx_1}{m+n},
\frac{my_2+ny_1}{m+n}
\right)
}
\]

---

# 10. Area of Triangle

For vertices:

\[
(x_1,y_1),(x_2,y_2),(x_3,y_3)
\]

Area:

\[
\boxed{
\frac12
\left|
x_1(y_2-y_3)
+x_2(y_3-y_1)
+x_3(y_1-y_2)
\right|
}
\]

---

# PART D: FAMILY OF STRAIGHT LINES

---

# 11. General Equation

A family of lines passing through intersection of:

\[
L_1=0
\]

and:

\[
L_2=0
\]

is:

\[
\boxed{
L_1+\lambda L_2=0
}
\]

---

# PART E: PAIR OF STRAIGHT LINES

---

# 12. Pair of Lines

A second-degree homogeneous equation represents a pair of straight lines passing through origin.

General form:

\[
\boxed{
ax^2+2hxy+by^2=0
}
\]

---

# 13. Condition for Pair of Straight Lines

The equation:

\[
ax^2+2hxy+by^2=0
\]

represents two real lines if:

\[
\boxed{
h^2\geq ab
}
\]

---

# 14. Angle Between Pair of Lines

For:

\[
ax^2+2hxy+by^2=0
\]

the angle between lines is:

\[
\boxed{
\tan\theta=
\frac{2\sqrt{h^2-ab}}
{a+b}
}
\]

---

# 15. Slopes of Pair of Lines

Put:

\[
y=mx
\]

in:

\[
ax^2+2hxy+by^2=0
\]

Then:

\[
\boxed{
bm^2+2hm+a=0
}
\]

gives slopes.

---

# PART F: IMPORTANT RESULTS

---

# Distance of Point from Line

Distance of:

\[
(x_1,y_1)
\]

from:

\[
ax+by+c=0
\]

is:

\[
\boxed{
d=
\frac{|ax_1+by_1+c|}
{\sqrt{a^2+b^2}}
}
\]

---

# Important Formula Sheet

## Distance Between Two Points

\[
\boxed{
d=
\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
}
\]

---

## Slope

\[
\boxed{
m=\frac{y_2-y_1}{x_2-x_1}
}
\]

---

## Line Equation

\[
\boxed{
y-y_1=m(x-x_1)
}
\]

---

## General Line

\[
\boxed{
ax+by+c=0
}
\]

---

## Angle Between Lines

\[
\boxed{
\tan\theta=
\left|
\frac{m_2-m_1}
{1+m_1m_2}
\right|
}
\]

---

## Pair of Lines

\[
\boxed{
ax^2+2hxy+by^2=0
}
\]

---

# Solved Examples

---

## Example 1

Find slope of line joining:

\[
(2,3),(5,9)
\]

Solution:

\[
m=
\frac{9-3}{5-2}
\]

\[
=

\frac63
\]

\[
\boxed{m=2}
\]

---

## Example 2

Find distance between:

\[
(1,2),(4,6)
\]

Formula:

\[
d=
\sqrt{(4-1)^2+(6-2)^2}
\]

\[
=\sqrt{9+16}
\]

\[
\boxed{d=5}
\]

---

## Example 3

Find equation of line with slope 3 through:

\[
(2,1)
\]

Using:

\[
y-y_1=m(x-x_1)
\]

\[
y-1=3(x-2)
\]

\[
\boxed{y=3x-5}
\]

---

# Common Mistakes

- Confusing slope with angle.
- Forgetting vertical lines have undefined slope.
- Mixing point-slope and two-point forms.
- Using wrong signs in distance formula.
- Forgetting absolute value in distance from line.
- Confusing pair of lines condition.
- Mixing line angle formula with pair of lines angle formula.

---

# Chapter Summary

- Locus represents the path of a moving point.
- Straight lines can be represented in multiple forms.
- Slope describes line inclination.
- Distance and section formulas solve coordinate problems.
- Pair of straight lines are represented by homogeneous second-degree equations.

\[
\boxed{
\text{Analytical geometry converts geometric ideas into equations.}
}
\]
