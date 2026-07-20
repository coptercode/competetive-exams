# ISC Class 11 Mathematics

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

# Chapter 2: Functions

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Functions

---

# Introduction

A **function** is a special type of relation in which **every element of the domain is associated with exactly one element of the codomain**. Functions are widely used to describe relationships between variables in mathematics, physics, engineering, economics, computer science, and statistics. This chapter introduces **types of functions, domain and range, composite functions, inverse functions, and special real functions**.

---

# 1. Function

## Definition

A **function** is a relation from a set **A** (Domain) to a set **B** (Codomain) such that **every element of A has exactly one image in B**.

Notation

```
f : A → B
```

If an element **x ∈ A** is mapped to **y ∈ B**, then

```
y = f(x)
```

---

# 2. Parts of a Function

```
Domain ──► Function ──► Codomain
   x                      y
```

### Domain

The set of all possible input values.

---

### Codomain

The set of all possible output values.

---

### Range

The set of actual output values produced by the function.

```
Range ⊆ Codomain
```

---

# Example

```
f(x)=x²

Domain = R

Codomain = R

Range = [0,∞)
```

---

# 3. Domain of a Function

## Rules for Finding Domain

### (i) Polynomial Functions

Defined for all real numbers.

Example

```
f(x)=x³+2x−5

Domain=R
```

---

### (ii) Rational Functions

Denominator must not be zero.

Example

```
f(x)=1/(x−2)

Domain

=

R−{2}
```

---

### (iii) Square Root Functions

Expression inside the root must be non-negative.

Example

```
√(x−3)

x−3≥0

x≥3
```

---

### (iv) Logarithmic Functions

Argument must be positive.

Example

```
log(x−1)

x−1>0

x>1
```

---

# 4. Range of a Function

The **range** consists of all values actually obtained by substituting elements of the domain.

---

### Example

```
f(x)=x²

Range=[0,∞)
```

---

### Example

```
f(x)=sinx

Range=[−1,1]
```

---

# Difference Between Domain and Range

| Domain               | Range                     |
| -------------------- | ------------------------- |
| Input values         | Output values             |
| Independent variable | Dependent variable        |
| Chosen first         | Obtained after evaluation |

---

# 5. Types of Functions

---

## (i) One-One Function (Injective)

### Definition

Different inputs have different outputs.

```
x₁≠x₂

⇒

f(x₁)≠f(x₂)
```

---

### Example

```
f(x)=2x+3
```

---

## (ii) Many-One Function

Different inputs may have the same output.

---

### Example

```
f(x)=x²

1→1

−1→1
```

---

## (iii) Onto Function (Surjective)

Every element of the codomain has at least one pre-image.

```
Range

=

Codomain
```

---

## (iv) Into Function

Some elements of the codomain are not images of any element in the domain.

```
Range

⊂

Codomain
```

---

## (v) Bijective Function

A function that is both

- One-One
- Onto

Such functions always possess an inverse.

---

# Comparison of Types of Functions

| Function  | Property             |
| --------- | -------------------- |
| One-One   | Unique outputs       |
| Many-One  | Same output possible |
| Onto      | Range = Codomain     |
| Into      | Range ⊂ Codomain     |
| Bijective | One-One + Onto       |

---

# 6. Composite Functions

## Definition

If

```
f:A→B

g:B→C
```

then

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
g(f(x))

=

2x+5
```

---

Similarly,

```
f(g(x))

=

2(x+5)

=

2x+10
```

---

# Note

```
g(f(x))

≠

f(g(x))
```

in general.

---

# 7. Inverse Function

## Definition

If

```
f(x)=y
```

then

```
f⁻¹(y)=x
```

---

## Conditions

A function has an inverse **only if it is bijective**.

---

## Steps to Find Inverse

1. Replace

```
f(x)
```

by

```
y
```

2. Interchange

```
x

and

y
```

3. Solve for

```
y
```

4. Replace

```
y

by

f⁻¹(x)
```

---

## Example

Given

```
f(x)=2x+3
```

Solution

```
y=2x+3

x=2y+3

2y=x−3

y=(x−3)/2
```

Answer

```
f⁻¹(x)

=

(x−3)/2
```

---

# Identity Property

```
f(f⁻¹(x))

=

x
```

and

```
f⁻¹(f(x))

=

x
```

---

# 8. Special Real Functions

---

## (i) Modulus Function

Definition

```
|x|

=

{

x

if

x≥0

−x

if

x<0

}
```

---

### Graph

V-shaped graph.

---

### Range

```
[0,∞)
```

---

# (ii) Signum Function

Definition

```
sgn(x)

=

{

−1

x<0

0

x=0

1

x>0

}
```

---

### Range

```
{-1,0,1}
```

---

# (iii) Greatest Integer Function

Notation

```
[x]
```

---

Definition

Largest integer less than or equal to x.

---

Examples

```
[3.8]=3

[−2.1]=−3
```

---

# (iv) Fractional Part Function

Definition

```
{x}

=

x−[x]
```

---

Example

```
{4.8}

=

0.8
```

---

Range

```
0≤{x}<1
```

---

# Graph Summary

| Function | Shape             |
| -------- | ----------------- |
| x²       | U-shaped parabola |
|          | x                 |     | V-shape |
| sgn(x)   | Step graph        |
| [x]      | Staircase graph   |
| {x}      | Saw-tooth graph   |

---

# Flowchart

```
                FUNCTIONS
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
   Domain      Codomain      Range
                    │
                    ▼
          Types of Functions
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
 Injective      Surjective     Bijective
                    │
                    ▼
         Composite Functions
                    │
                    ▼
           Inverse Functions
                    │
                    ▼
         Special Real Functions
 │──────────┼──────────┼──────────│
 ▼          ▼          ▼          ▼
Modulus   Signum     GIF      Fractional Part
```

---

# Important Formulae

| Concept            | Formula                       |
| ------------------ | ----------------------------- |
| Composite Function | **(g∘f)(x)=g(f(x))**          |
| Inverse Property   | **f(f⁻¹(x))=x**               |
| Modulus            | **\|x\| = x (x≥0), -x (x<0)** |
| Fractional Part    | **{x}=x−[x]**                 |
| Range of sin x     | **[-1,1]**                    |
| Range of cos x     | **[-1,1]**                    |

---

# Applications

- Engineering models.
- Computer programming.
- Artificial Intelligence.
- Machine Learning.
- Economics.
- Physics.
- Signal processing.
- Cryptography.
- Data analysis.
- Statistics.

---

# Solved Examples

## Example 1

### Question

Find the domain of

```
f(x)=√(5−x)
```

### Solution

```
5−x≥0

x≤5
```

### Answer

```
(−∞,5]
```

---

## Example 2

### Question

Find

```
g(f(x))
```

if

```
f(x)=x+2

g(x)=3x
```

### Solution

```
g(f(x))

=

3(x+2)

=

3x+6
```

### Answer

```
3x+6
```

---

## Example 3

### Question

Find the inverse of

```
f(x)=5x−4
```

### Solution

```
y=5x−4

x=5y−4

5y=x+4

y=(x+4)/5
```

### Answer

```
f⁻¹(x)

=

(x+4)/5
```

---

## Example 4

### Question

Find

```
|−8|
```

### Solution

```
Absolute value

=

8
```

### Answer

```
8
```

---

## Example 5

### Question

Evaluate

```
[4.9]

and

{4.9}
```

### Solution

```
[4.9]=4

{4.9}

=

4.9−4

=

0.9
```

### Answer

```
4

and

0.9
```

---

# Common Mistakes

- Confusing **codomain** with **range**.
- Assuming every function has an inverse (only **bijective** functions do).
- Forgetting to exclude values that make the denominator zero.
- Ignoring domain restrictions for square root and logarithmic functions.
- Confusing the **Greatest Integer Function** with ordinary rounding.
- Assuming **g(f(x)) = f(g(x))** (not true in general).

---

# Exam Tips

- Always determine the **domain first** before solving function problems.
- Clearly distinguish between **one-one**, **onto**, and **bijective** functions.
- Follow the standard four-step procedure to find inverse functions.
- Sketch graphs of special functions for better understanding.
- Verify inverse functions using **f(f⁻¹(x)) = x**.

---

# Quick Revision

- Function → Every input has exactly one output.
- Domain → Set of valid inputs.
- Codomain → Set of possible outputs.
- Range → Set of actual outputs.
- Injective → Different inputs give different outputs.
- Surjective → Range = Codomain.
- Bijective → One-One + Onto.
- Composite Function → **g(f(x))**.
- Inverse Function → Exists only for bijective functions.
- Modulus → Always non-negative.
- Greatest Integer Function → Largest integer ≤ x.
- Fractional Part → **x − [x]**.

---

# Chapter Summary

- A **function** is a special relation in which each element of the **domain** is mapped to exactly one element of the **codomain**.
- The **domain** specifies all permissible input values, while the **range** consists of the actual outputs produced by the function.
- Functions are classified as **one-one (injective), many-one, onto (surjective), into, and bijective**, depending on how they map elements.
- **Composite functions** combine two or more functions, while **inverse functions** reverse the mapping of a bijective function.
- Special real functions—including the **modulus**, **signum**, **greatest integer**, and **fractional part** functions—have unique algebraic definitions and graphical representations.
- Functions are fundamental in modeling relationships across mathematics, science, engineering, economics, computer science, and data analysis, forming the basis for advanced topics such as calculus and differential equations.

# ISC Class 11 Mathematics

# Chapter 3: Mathematical Induction

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Mathematical Induction

---

# Introduction

**Mathematical Induction** is a proof technique used to establish the truth of mathematical statements involving **natural numbers**. It proves that if a statement is true for the first natural number and if its truth for one natural number implies its truth for the next, then the statement is true for all natural numbers. It is widely used in **algebra, number theory, sequences, inequalities, divisibility, and combinatorics**.

---

# 1. Principle of Mathematical Induction (PMI)

## Statement

To prove that a statement **P(n)** is true for all natural numbers **n ≥ 1**, the following two steps are required:

### Step 1: Base Case

Verify that the statement is true for

```
n = 1
```

---

### Step 2: Inductive Hypothesis

Assume that the statement is true for

```
n = k
```

That is,

```
P(k) is true.
```

---

### Step 3: Inductive Step

Using the assumption, prove that

```
P(k+1)
```

is also true.

---

### Conclusion

If both the base case and inductive step are true, then

```
P(n)

is true

for all

n ∈ N.
```

---

# Flow of Mathematical Induction

```
Verify P(1)
      │
      ▼
Assume P(k)
      │
      ▼
Prove P(k+1)
      │
      ▼
P(n) is true for all n
```

---

# 2. Structure of an Induction Proof

```
Statement

↓

Base Case

↓

Inductive Hypothesis

↓

Inductive Step

↓

Conclusion
```

---

# 3. Applications of Mathematical Induction

Mathematical induction is commonly used to prove:

- Algebraic identities.
- Summation formulae.
- Divisibility properties.
- Inequalities.
- Recurrence relations.
- Properties of sequences.
- Binomial identities.
- Matrix identities.

---

# 4. Summation Formulae

---

## Sum of First n Natural Numbers

```
1+2+3+...

+n

=

n(n+1)/2
```

---

## Sum of Squares

```
1²+2²+...

+n²

=

n(n+1)(2n+1)/6
```

---

## Sum of Cubes

```
1³+2³+...

+n³

=

[n(n+1)/2]²
```

---

## Sum of First n Odd Numbers

```
1+3+5+...

+(2n−1)

=

n²
```

---

## Sum of First n Even Numbers

```
2+4+6+...

+2n

=

n(n+1)
```

---

# 5. Divisibility Proofs

Mathematical induction is frequently used to prove that an expression is divisible by a given number.

---

## Example Pattern

Prove

```
2ⁿ−1

is divisible by

1

(Trivial)
```

More commonly,

```
7ⁿ−1

is divisible by

6
```

---

### General Steps

```
Base Case

↓

Assume divisibility

↓

Substitute for n=k

↓

Prove for k+1
```

---

# 6. Proof of Inequalities

Induction is also used to establish inequalities.

---

### Example

```
2ⁿ

≥

n+1

for all

n≥1
```

---

### Procedure

- Verify for n = 1.
- Assume true for n = k.
- Show true for n = k + 1.

---

# 7. Important Observations

- The inductive hypothesis is **assumed**, not proved.
- The assumption is used only to prove the next case.
- Both the base case and inductive step are essential.
- Missing either step makes the proof incomplete.

---

# Algorithm for Mathematical Induction

```
Start
  │
  ▼
Write Statement P(n)
  │
  ▼
Check Base Case
  │
  ▼
Assume P(k)
  │
  ▼
Use P(k)
  │
  ▼
Prove P(k+1)
  │
  ▼
Conclusion
```

---

# Difference Between Deduction and Induction

| Deduction            | Mathematical Induction            |
| -------------------- | --------------------------------- |
| General → Particular | Particular → General              |
| Uses known facts     | Uses proof steps                  |
| Gives direct result  | Proves for all natural numbers    |
| Used in logic        | Used in algebra and number theory |

---

# Flowchart

```
          MATHEMATICAL INDUCTION
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      Base Case      Inductive Hypothesis
          │                   │
          └─────────┬─────────┘
                    ▼
             Inductive Step
                    │
                    ▼
            Mathematical Proof
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
   Series      Divisibility   Inequalities
```

---

# Important Formulae

| Statement                | Formula            |
| ------------------------ | ------------------ |
| Sum of n Natural Numbers | **n(n+1)/2**       |
| Sum of Squares           | **n(n+1)(2n+1)/6** |
| Sum of Cubes             | **[n(n+1)/2]²**    |
| Sum of Odd Numbers       | **n²**             |
| Sum of Even Numbers      | **n(n+1)**         |

---

# Standard Induction Format

```
Given:

P(n)

↓

Step 1

Verify P(1)

↓

Step 2

Assume P(k)

↓

Step 3

Show P(k+1)

↓

Hence proved.
```

---

# Applications

- Number theory.
- Algebra.
- Binomial theorem.
- Matrix algebra.
- Computer algorithms.
- Recurrence relations.
- Combinatorics.
- Graph theory.
- Logic.
- Proof-based mathematics.

---

# Solved Examples

## Example 1

### Question

Prove that

```
1+2+...+n

=

n(n+1)/2
```

### Solution

**Base Case**

For

```
n=1
```

LHS

```
=1
```

RHS

```
=1(2)/2

=1
```

Hence true.

---

Assume

```
1+2+...

+k

=

k(k+1)/2
```

---

For

```
k+1
```

```
1+2+...

+k+(k+1)

=

k(k+1)/2+(k+1)

=

(k+1)(k+2)/2
```

Hence proved.

---

### Answer

The statement is true for all natural numbers.

---

## Example 2

### Question

Prove

```
1+3+5+...

+(2n−1)

=

n²
```

### Solution

Use mathematical induction.

After verifying the base case and proving the inductive step,

```
(k+1)²
```

is obtained.

### Answer

Hence,

```
1+3+...

+(2n−1)

=n²
```

---

## Example 3

### Question

Prove

```
2ⁿ

≥

n+1
```

for

```
n≥1
```

### Solution

Verify for

```
n=1
```

Assume true for

```
n=k
```

Then

```
2^(k+1)

=

2·2^k

≥

2(k+1)

>

k+2
```

Hence proved.

---

## Example 4

### Question

State the Principle of Mathematical Induction.

### Solution

It is the method used to prove statements involving natural numbers.

### Answer

If a statement is true for the first natural number and true for **k+1** whenever it is true for **k**, then it is true for all natural numbers.

---

## Example 5

### Question

What is the inductive hypothesis?

### Solution

It is the temporary assumption used during the proof.

### Answer

The assumption that the statement **P(k)** is true for an arbitrary natural number **k**.

---

# Common Mistakes

- Forgetting to verify the **base case**.
- Assuming **P(k+1)** instead of **P(k)**.
- Skipping algebraic simplification in the inductive step.
- Writing the conclusion without proving the inductive step.
- Treating the inductive hypothesis as the final proof.
- Making incorrect substitutions while replacing **k** with **k+1**.

---

# Exam Tips

- Always write the proof in the order:
  1. Statement
  2. Base Case
  3. Inductive Hypothesis
  4. Inductive Step
  5. Conclusion
- Clearly mention **"Assume P(k) is true."**
- Simplify expressions carefully while proving **P(k+1)**.
- Box the final result with **"Hence proved."**
- Memorize the standard summation formulas frequently used in induction problems.

---

# Quick Revision

- Mathematical Induction → Proof technique for natural numbers.
- Base Case → Verify **P(1)**.
- Inductive Hypothesis → Assume **P(k)**.
- Inductive Step → Prove **P(k+1)**.
- Sum of n Natural Numbers → **n(n+1)/2**.
- Sum of Squares → **n(n+1)(2n+1)/6**.
- Sum of Cubes → **[n(n+1)/2]²**.
- Sum of Odd Numbers → **n²**.
- Sum of Even Numbers → **n(n+1)**.

---

# Chapter Summary

- **Mathematical Induction** is a powerful proof technique used to establish the truth of statements involving natural numbers.
- Every induction proof consists of two essential parts: the **base case**, which verifies the statement for the first natural number, and the **inductive step**, which proves the statement for **k+1** assuming it is true for **k**.
- The method is widely applied to prove **summation formulas, divisibility properties, inequalities, algebraic identities, and recurrence relations**.
- Success in induction depends on correctly applying the **inductive hypothesis** and performing accurate algebraic manipulations.
- Mathematical induction is one of the most important proof techniques in higher mathematics and forms the basis for advanced topics in **number theory, combinatorics, discrete mathematics, and computer science**.

# ISC Class 11 Mathematics

# Chapter 4: Complex Numbers

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Complex Numbers

---

# Introduction

**Complex Numbers** extend the real number system by introducing the **imaginary unit**, denoted by **i**, where

```
i² = -1
```

Complex numbers are used to solve equations that have no real solutions, such as **x² + 1 = 0**. They have wide applications in **electrical engineering, quantum mechanics, signal processing, fluid dynamics, control systems, and applied mathematics**.

---

# 1. Complex Number

## Definition

A **Complex Number** is a number of the form

```
z = a + ib
```

where

- **a** = Real Part
- **b** = Imaginary Part
- **i = √(-1)**

---

## Notation

```
Re(z) = a

Im(z) = b
```

---

## Example

```
z = 5 + 3i

Re(z) = 5

Im(z) = 3
```

---

# 2. Imaginary Unit

## Definition

The imaginary unit is defined as

```
i = √(-1)
```

---

## Powers of i

| Power | Value |
| ----- | ----- |
| i¹    | i     |
| i²    | -1    |
| i³    | -i    |
| i⁴    | 1     |
| i⁵    | i     |

---

## Shortcut

Powers of **i** repeat every **4** terms.

```
iⁿ

↓

Find

n mod 4
```

---

# 3. Types of Complex Numbers

---

## Purely Real Number

Imaginary part is zero.

Example

```
7 + 0i
```

---

## Purely Imaginary Number

Real part is zero.

Example

```
5i
```

---

## Zero Complex Number

```
0 + 0i
```

---

## Equal Complex Numbers

Two complex numbers are equal if

```
Real parts are equal

and

Imaginary parts are equal.
```

---

# 4. Algebra of Complex Numbers

---

## Addition

```
(a+ib)

+

(c+id)

=

(a+c)

+

i(b+d)
```

---

## Subtraction

```
(a+ib)

−

(c+id)

=

(a−c)

+

i(b−d)
```

---

## Multiplication

```
(a+ib)

(c+id)

=

(ac−bd)

+

i(ad+bc)
```

---

## Division

```
(a+ib)

/

(c+id)

=

[(a+ib)(c−id)]

/

(c²+d²)
```

Multiply numerator and denominator by the **conjugate** of the denominator.

---

# 5. Conjugate of a Complex Number

## Definition

The conjugate of

```
z=a+ib
```

is

```
z̄=a−ib
```

---

## Properties

```
z + z̄ = 2a
```

```
z − z̄ = 2ib
```

```
z·z̄ = a²+b²
```

---

## Example

```
z=6−5i

z̄=6+5i
```

---

# 6. Modulus of a Complex Number

## Definition

The modulus represents the distance of the complex number from the origin.

Notation

```
|z|
```

---

## Formula

```
|z|

=

√(a²+b²)
```

---

## Example

```
z=3+4i

|z|

=

√(9+16)

=

5
```

---

## Properties

```
|z|

≥0
```

```
|z₁z₂|

=

|z₁||z₂|
```

```
|z/z₁|

=

|z|/|z₁|
```

---

# 7. Argand Plane

## Definition

The graphical representation of complex numbers.

---

## Axes

```
Horizontal → Real Axis

Vertical → Imaginary Axis
```

---

## Representation

```
Imaginary Axis

      ↑

      |

      • (a,b)

      |

------O----------------→ Real Axis
```

---

# 8. Polar Form

A complex number can be written as

```
z

=

r(cosθ+i sinθ)
```

where

```
r=|z|

θ=Argument
```

---

## Formulae

```
r

=

√(a²+b²)
```

```
tanθ

=

b/a
```

---

# 9. Argument of a Complex Number

## Definition

The angle made by the line joining the origin to the point representing the complex number.

Notation

```
Arg(z)
```

---

## Formula

```
θ

=

tan⁻¹(b/a)
```

Quadrant adjustments may be required depending on the signs of **a** and **b**.

---

# 10. Square Root of a Complex Number

Suppose

```
√(a+ib)

=

x+iy
```

Then,

```
(x+iy)²

=

a+ib
```

Compare the real and imaginary parts and solve simultaneously to obtain **x** and **y**.

---

# 11. Quadratic Equations with Complex Roots

If the discriminant

```
D=b²−4ac
```

is negative,

```
D<0
```

then the roots are

```
x

=

[-b±i√(-D)]

/

2a
```

---

## Example

Solve

```
x²+4=0
```

Solution

```
x²=-4

x=±2i
```

---

# Difference Between Real and Complex Numbers

| Real Number         | Complex Number          |
| ------------------- | ----------------------- |
| No imaginary part   | Contains imaginary part |
| Lies on number line | Lies on Argand plane    |
| Form: a             | Form: a + ib            |

---

# Difference Between Modulus and Argument

| Modulus              | Argument                       |
| -------------------- | ------------------------------ |
| Distance from origin | Angle with positive real axis  |
| Always non-negative  | Measured in radians or degrees |
| Denoted by \|z\|     | Denoted by Arg(z)              |

---

# Flowchart

```
             COMPLEX NUMBERS
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
     Algebra    Conjugate    Modulus
                    │
                    ▼
              Argand Plane
                    │
                    ▼
              Polar Form
                    │
                    ▼
             Square Roots
                    │
                    ▼
       Quadratic Equations
```

---

# Important Formulae

| Concept                | Formula                  |
| ---------------------- | ------------------------ |
| Complex Number         | **z = a + ib**           |
| Conjugate              | **z̄ = a − ib**           |
| Modulus                | **\|z\| = √(a² + b²)**   |
| Argument               | **θ = tan⁻¹(b/a)**       |
| Polar Form             | **z = r(cosθ + i sinθ)** |
| Product with Conjugate | **z·z̄ = a² + b²**        |
| Quadratic Roots        | **x = (-b ± i√(-D))/2a** |

---

# Applications

- Electrical engineering (AC circuits).
- Signal processing.
- Control systems.
- Quantum mechanics.
- Fluid dynamics.
- Electromagnetic theory.
- Computer graphics.
- Digital communication.
- Robotics.
- Artificial Intelligence.

---

# Solved Examples

## Example 1

### Question

Find the modulus of

```
z=5+12i
```

### Solution

```
|z|

=

√(25+144)

=

√169

=

13
```

### Answer

```
13
```

---

## Example 2

### Question

Find the conjugate of

```
4−7i
```

### Solution

Change the sign of the imaginary part.

### Answer

```
4+7i
```

---

## Example 3

### Question

Add

```
(3+2i)

and

(4−5i)
```

### Solution

```
=(3+4)

+

(2−5)i

=7−3i
```

### Answer

```
7−3i
```

---

## Example 4

### Question

Solve

```
x²+9=0
```

### Solution

```
x²=-9

x=±3i
```

### Answer

```
±3i
```

---

## Example 5

### Question

Express

```
z=1+i
```

in polar form.

### Solution

```
r=√2

θ=45°
```

### Answer

```
√2(cos45°+i sin45°)
```

---

# Common Mistakes

- Forgetting that **i² = -1**.
- Confusing the **modulus** with the **argument**.
- Not multiplying by the **conjugate** while dividing complex numbers.
- Ignoring quadrant corrections when finding the argument.
- Writing the conjugate incorrectly (only the sign of the imaginary part changes).
- Using the quadratic formula incorrectly when the discriminant is negative.

---

# Exam Tips

- Memorize the cyclic pattern of the powers of **i**.
- Simplify **iⁿ** using **n mod 4**.
- Always use the conjugate to simplify division.
- Draw the Argand plane when solving graphical questions.
- Practice converting between algebraic and polar forms.

---

# Quick Revision

- Complex Number → **a + ib**
- Imaginary Unit → **i² = -1**
- Conjugate → **a - ib**
- Modulus → **√(a² + b²)**
- Argument → **tan⁻¹(b/a)**
- Polar Form → **r(cosθ + i sinθ)**
- Product with Conjugate → **a² + b²**
- Negative Discriminant → Complex roots.

---

# Chapter Summary

- **Complex numbers** extend the real number system by introducing the imaginary unit **i**, where **i² = -1**.
- Every complex number is expressed as **z = a + ib**, with **a** as the real part and **b** as the imaginary part.
- Operations such as **addition, subtraction, multiplication, and division** follow specific algebraic rules, with division simplified using the **complex conjugate**.
- The **modulus** represents the distance of a complex number from the origin, while the **argument** gives its direction in the **Argand plane**.
- Complex numbers can be represented in both **algebraic** and **polar forms**, enabling efficient solutions in advanced mathematics.
- They are essential for solving quadratic equations with negative discriminants and have extensive applications in **engineering, physics, communication systems, computer science, and applied mathematics**.

# ISC Class 11 Mathematics

# Chapter 5: Quadratic Equations

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Quadratic Equations

---

# Introduction

A **Quadratic Equation** is a polynomial equation of degree **2**, generally written in the form:

```
ax² + bx + c = 0
```

where

- **a, b, c** are constants
- **a ≠ 0**

Quadratic equations are fundamental in algebra and have applications in **physics, engineering, economics, optimization, projectile motion, and computer graphics**. This chapter covers **methods of solving quadratic equations, nature of roots, relations between roots and coefficients, symmetric functions of roots, equations with complex coefficients, and common root conditions**.

---

# 1. Quadratic Equation

## Standard Form

```
ax² + bx + c = 0

(a ≠ 0)
```

---

## Examples

```
x² − 5x + 6 = 0
```

```
3x² + 2x − 1 = 0
```

---

# 2. Methods of Solving Quadratic Equations

---

## (i) Factorization

### Example

```
x² − 5x + 6 = 0

(x−2)(x−3)=0

x=2,3
```

---

## (ii) Completing the Square

### Formula

```
x²+bx

=

(x+b/2)²−(b/2)²
```

---

## (iii) Quadratic Formula

### Formula

```
x

=

(-b ± √(b²−4ac))

/

2a
```

---

# 3. Discriminant

## Definition

The expression

```
D = b² − 4ac
```

is called the **Discriminant**.

---

# Nature of Roots

| Discriminant | Nature of Roots         |
| ------------ | ----------------------- |
| D > 0        | Two distinct real roots |
| D = 0        | Equal real roots        |
| D < 0        | Complex conjugate roots |

---

## Perfect Square Condition

If

```
D > 0
```

and **D** is a perfect square,

the roots are **rational**.

Otherwise,

they are **irrational**.

---

# 4. Complex Roots

If

```
D < 0
```

then

```
x

=

(-b ± i√(-D))

/

2a
```

---

## Example

```
x²+16=0

x=±4i
```

---

# 5. Relation Between Roots and Coefficients

Let

```
α

and

β
```

be the roots of

```
ax²+bx+c=0
```

Then

### Sum of Roots

```
α+β

=

−b/a
```

---

### Product of Roots

```
αβ

=

c/a
```

---

# 6. Forming a Quadratic Equation

If roots are

```
α

and

β
```

then the equation is

```
x²

−

(α+β)x

+

αβ

=

0
```

---

### General Form

```
ax²

−

a(α+β)x

+

aαβ

=

0
```

---

# 7. Symmetric Functions of Roots

Using

```
α+β=S

αβ=P
```

---

## Sum of Squares

```
α²+β²

=

S²−2P
```

---

## Sum of Cubes

```
α³+β³

=

S³−3PS
```

---

## Reciprocal Sum

```
1/α+1/β

=

S/P
```

---

## Reciprocal Product

```
1/αβ

=

1/P
```

---

## Example

Given

```
α+β=5

αβ=6
```

Find

```
α²+β²
```

Solution

```
25−12=13
```

---

# 8. Signs of Roots

For

```
ax²+bx+c=0
```

---

## Both Roots Positive

Conditions

```
α+β>0

αβ>0
```

---

## Both Roots Negative

Conditions

```
α+β<0

αβ>0
```

---

## Roots of Opposite Signs

Condition

```
αβ<0
```

---

# 9. Common Root of Two Quadratic Equations

Suppose

```
f(x)=0

g(x)=0
```

have one common root.

---

## Method

- Let common root be **α**.
- Use relations between roots.
- Eliminate the unknown root.
- Obtain the required condition.

---

# 10. Equations with Complex Coefficients

Quadratic equations may contain imaginary coefficients.

Example

```
x²+(2+i)x+(3−i)=0
```

Solve using the quadratic formula.

---

# Difference Between Real and Complex Roots

| Real Roots         | Complex Roots          |
| ------------------ | ---------------------- |
| D ≥ 0              | D < 0                  |
| Lie on number line | Lie on Argand plane    |
| No imaginary part  | Include imaginary part |

---

# Difference Between Equal and Distinct Roots

| Equal Roots | Distinct Roots   |
| ----------- | ---------------- |
| D = 0       | D > 0            |
| Same value  | Different values |

---

# Flowchart

```
          QUADRATIC EQUATIONS
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
 Standard Form  Methods      Discriminant
                   │              │
                   ▼              ▼
          Nature of Roots   Complex Roots
                   │
                   ▼
      Roots & Coefficients
                   │
                   ▼
      Symmetric Functions
                   │
                   ▼
      Common Root Conditions
```

---

# Important Formulae

| Concept           | Formula                         |
| ----------------- | ------------------------------- |
| Quadratic Formula | **x = (-b ± √D)/2a**            |
| Discriminant      | **D = b² − 4ac**                |
| Sum of Roots      | **α + β = -b/a**                |
| Product of Roots  | **αβ = c/a**                    |
| Sum of Squares    | **α² + β² = (α+β)² − 2αβ**      |
| Sum of Cubes      | **α³ + β³ = (α+β)³ − 3αβ(α+β)** |
| Reciprocal Sum    | **1/α + 1/β = (α+β)/αβ**        |

---

# Applications

- Projectile motion.
- Area optimization.
- Economics and profit analysis.
- Structural engineering.
- Computer graphics.
- Electrical engineering.
- Robotics.
- Physics.
- Artificial Intelligence.
- Data modeling.

---

# Solved Examples

## Example 1

### Question

Solve

```
x²−7x+12=0
```

### Solution

```
(x−3)(x−4)=0

x=3,4
```

### Answer

```
3

and

4
```

---

## Example 2

### Question

Find the roots of

```
x²+4x+4=0
```

### Solution

```
D=16−16=0

x=-2
```

### Answer

Equal roots

```
−2,−2
```

---

## Example 3

### Question

Find the nature of roots of

```
x²+2x+5=0
```

### Solution

```
D=4−20

=-16<0
```

### Answer

Complex conjugate roots.

---

## Example 4

### Question

If the roots are

```
2

and

5
```

form the quadratic equation.

### Solution

```
x²−7x+10=0
```

### Answer

```
x²−7x+10=0
```

---

## Example 5

### Question

If

```
α+β=6

αβ=8
```

find

```
α²+β²
```

### Solution

```
36−16

=

20
```

### Answer

```
20
```

---

# Common Mistakes

- Forgetting that **a ≠ 0** in a quadratic equation.
- Using the wrong sign in the quadratic formula.
- Confusing the **discriminant** with the roots.
- Forgetting that **complex roots occur in conjugate pairs**.
- Making algebraic errors while forming equations from given roots.
- Incorrectly applying formulas for symmetric functions of roots.

---

# Exam Tips

- Always calculate the **discriminant first** to identify the nature of the roots.
- Memorize the relations **α + β = -b/a** and **αβ = c/a**.
- Use factorization whenever possible before applying the quadratic formula.
- Verify answers by substituting the roots into the original equation.
- Practice problems involving common roots and symmetric functions, as they are frequently asked in ISC examinations.

---

# Quick Revision

- Standard Form → **ax² + bx + c = 0**
- Discriminant → **D = b² − 4ac**
- Quadratic Formula → **(-b ± √D)/2a**
- Sum of Roots → **-b/a**
- Product of Roots → **c/a**
- Equal Roots → **D = 0**
- Distinct Real Roots → **D > 0**
- Complex Roots → **D < 0**
- Equation from Roots → **x² − (α+β)x + αβ = 0**
- Sum of Squares → **(α+β)² − 2αβ**

---

# Chapter Summary

- A **quadratic equation** is a polynomial equation of degree **2**, expressed as **ax² + bx + c = 0**, where **a ≠ 0**.
- Quadratic equations can be solved using **factorization, completing the square, or the quadratic formula**, depending on the nature of the equation.
- The **discriminant (D = b² − 4ac)** determines whether the roots are **real, equal, distinct, irrational, or complex**.
- The **sum and product of roots** are directly related to the coefficients of the equation, enabling the formation of new equations and evaluation of **symmetric functions** without explicitly finding the roots.
- Quadratic equations may also involve **complex coefficients**, and equations with a negative discriminant have **complex conjugate roots**.
- Understanding quadratic equations is fundamental for advanced topics in **algebra, calculus, coordinate geometry, optimization, engineering, and applied mathematics**.

# ISC Class 11 Mathematics

# Chapter 6: Permutations and Combinations

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Permutations and Combinations

---

# Introduction

**Permutations and Combinations** are fundamental concepts in counting techniques. They help determine the number of possible arrangements or selections of objects without actually listing them. These concepts are widely used in **probability, statistics, cryptography, computer science, scheduling, coding theory, and combinatorics**.

---

# 1. Fundamental Principle of Counting

## Definition

If one event can occur in **m** ways and another independent event can occur in **n** ways, then both events together can occur in

```
m × n
```

ways.

---

## Addition Principle

If two events cannot occur simultaneously, then the total number of ways is

```
m + n
```

---

## Example

A shirt can be chosen in **4** ways and trousers in **3** ways.

```
Total ways

=

4 × 3

=

12
```

---

# 2. Factorial Notation

## Definition

The factorial of a positive integer **n** is

```
n!

=

n(n−1)(n−2)...

2×1
```

---

## Special Cases

```
0!

=

1
```

```
1!

=

1
```

---

## Examples

```
5!

=

120
```

```
7!

=

5040
```

---

## Properties

```
n!

=

n(n−1)!
```

```
(n+1)!

=

(n+1)n!
```

---

# 3. Permutations

## Definition

A **Permutation** is an arrangement of objects where **order matters**.

---

## Formula

```
ⁿPᵣ

=

n!

/

(n−r)!
```

where

```
0 ≤ r ≤ n
```

---

## Example

Arrange 3 letters from

```
A,B,C,D
```

```
⁴P₃

=

4!

/

1!

=

24
```

---

# Special Cases

### All Objects Arranged

```
ⁿPₙ

=

n!
```

---

### One Object Selected

```
ⁿP₁

=

n
```

---

# 4. Permutations with Repetition

If repetition is allowed,

```
Number of arrangements

=

nʳ
```

---

## Example

Form 4-digit numbers using

```
0–9
```

```
10⁴

=

10000
```

---

# 5. Permutations of Identical Objects

If

```
n
```

objects contain repeated objects

```
p,q,r...
```

then

```
Number of arrangements

=

n!

/

(p!q!r!...)
```

---

## Example

Arrange the letters of

```
BOOK
```

```
4!

/

2!

=

12
```

---

# 6. Circular Permutations

## Formula

For arranging

```
n
```

distinct objects in a circle,

```
(n−1)!
```

---

## Example

Arrange

```
5
```

people around a table.

```
(5−1)!

=

24
```

---

# 7. Restricted Arrangements

---

## Objects Together

Treat the grouped objects as one unit.

---

## Objects Apart

Calculate total arrangements and subtract arrangements where they are together.

---

## Example

Arrange

```
A,B,C,D
```

such that

```
A and B are together.
```

Treat

```
AB
```

as one object.

```
3!

×

2!

=

12
```

---

# 8. Combinations

## Definition

A **Combination** is a selection of objects where **order does not matter**.

---

## Formula

```
ⁿCᵣ

=

n!

/

r!(n−r)!
```

---

## Example

Choose

```
3
```

students from

```
8
```

students.

```
⁸C₃

=

56
```

---

# 9. Relation Between Permutation and Combination

```
ⁿPᵣ

=

ⁿCᵣ × r!
```

or

```
ⁿCᵣ

=

ⁿPᵣ

/

r!
```

---

# 10. Properties of Combinations

---

## Symmetry Property

```
ⁿCᵣ

=

ⁿCₙ₋ᵣ
```

---

## Pascal's Identity

```
ⁿCᵣ

+

ⁿCᵣ₋₁

=

ⁿ⁺¹Cᵣ
```

---

## Sum of All Combinations

```
ⁿC₀

+

ⁿC₁

+

...

+

ⁿCₙ

=

2ⁿ
```

---

## Greatest Binomial Coefficient

If

```
n
```

is even,

greatest term

```
ⁿCₙ⁄₂
```

If

```
n
```

is odd,

greatest terms

```
ⁿC(n−1)/2

and

ⁿC(n+1)/2
```

---

# Difference Between Permutation and Combination

| Permutation                  | Combination                      |
| ---------------------------- | -------------------------------- |
| Order matters                | Order does not matter            |
| Arrangement                  | Selection                        |
| Formula: **ⁿPᵣ = n!/(n−r)!** | Formula: **ⁿCᵣ = n!/[r!(n−r)!]** |

---

# 11. Factorial Simplification

Example

```
8!

/

6!

=

8×7

=

56
```

---

Example

```
10!

/

8!

=

10×9

=

90
```

---

# Flowchart

```
        PERMUTATIONS & COMBINATIONS
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
 Fundamental     Factorial   Counting
 Principle
                    │
                    ▼
            Permutations
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
 Ordinary   Repetition   Circular
                    │
                    ▼
      Identical Objects
                    │
                    ▼
            Combinations
                    │
                    ▼
      Pascal's Identity & Properties
```

---

# Important Formulae

| Concept              | Formula                 |
| -------------------- | ----------------------- |
| Factorial            | **n! = n(n−1)!**        |
| Permutation          | **ⁿPᵣ = n!/(n−r)!**     |
| Combination          | **ⁿCᵣ = n!/[r!(n−r)!]** |
| Relation             | **ⁿPᵣ = ⁿCᵣ × r!**      |
| Circular Permutation | **(n−1)!**              |
| Identical Objects    | **n!/(p!q!r!...)**      |
| With Repetition      | **nʳ**                  |
| Pascal Identity      | **ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ** |
| Sum of Coefficients  | **2ⁿ**                  |

---

# Applications

- Probability.
- Statistics.
- Cryptography.
- Password generation.
- Tournament scheduling.
- Computer algorithms.
- Data science.
- Genetics.
- Artificial Intelligence.
- Network routing.

---

# Solved Examples

## Example 1

### Question

Find

```
⁶P₂
```

### Solution

```
⁶P₂

=

6!

/

4!

=

6×5

=

30
```

### Answer

```
30
```

---

## Example 2

### Question

Find

```
⁸C₂
```

### Solution

```
8!

/

2!6!

=

28
```

### Answer

```
28
```

---

## Example 3

### Question

Arrange the letters of

```
LEVEL
```

### Solution

Letters

```
L=2

E=2

V=1
```

```
5!

/

2!2!

=

30
```

### Answer

```
30
```

---

## Example 4

### Question

Arrange

```
6
```

people around a circular table.

### Solution

```
(6−1)!

=

120
```

### Answer

```
120
```

---

## Example 5

### Question

How many committees of

```
4
```

can be formed from

```
10
```

people?

### Solution

```
¹⁰C₄

=

210
```

### Answer

```
210
```

---

# Common Mistakes

- Confusing **permutations** with **combinations**.
- Forgetting that **order matters** in permutations.
- Using **nPr** instead of **nCr** in selection problems.
- Incorrect handling of repeated objects.
- Forgetting the circular permutation formula **(n−1)!**.
- Simplifying factorials incorrectly.
- Ignoring restrictions such as "together" or "apart."

---

# Exam Tips

- Read the question carefully to determine whether **order matters**.
- Use **nPr** for arrangements and **nCr** for selections.
- Simplify factorials before multiplying large numbers.
- For repeated letters, always divide by the factorial of repeated occurrences.
- In circular arrangements, fix one object first and arrange the rest.

---

# Quick Revision

- Factorial → **n!**
- **0! = 1**
- Permutation → Order matters.
- Combination → Order does not matter.
- **ⁿPᵣ = n!/(n−r)!**
- **ⁿCᵣ = n!/[r!(n−r)!]**
- Circular Arrangement → **(n−1)!**
- Repeated Objects → **n!/(p!q!...)**
- Pascal Identity → **ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ**
- Sum of Binomial Coefficients → **2ⁿ**

---

# Chapter Summary

- **Permutations** deal with the **arrangement** of objects where the **order of selection is important**, whereas **combinations** deal with the **selection** of objects where the **order is not important**.
- The **Fundamental Principle of Counting** and **factorial notation** provide the foundation for solving counting problems.
- Different formulas are used for **ordinary permutations, permutations with repetition, circular permutations, and arrangements of identical objects**.
- The relationship **ⁿPᵣ = ⁿCᵣ × r!** connects permutations and combinations.
- Important identities such as **Pascal's Identity**, the **symmetry property**, and the **sum of binomial coefficients** simplify many counting problems.
- Permutations and combinations are essential tools in **probability, statistics, cryptography, computer science, optimization, artificial intelligence, and decision-making**, making them one of the most important topics in discrete mathematics.

# ISC Class 11 Mathematics

# Chapter 7: Binomial Theorem

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Binomial Theorem

---

# Introduction

The **Binomial Theorem** provides a systematic method for expanding expressions of the form

```
(a + b)ⁿ
```

where **n** is a positive integer. It is one of the most important topics in algebra and forms the basis for **probability, calculus, sequences and series, approximation techniques, and combinatorics**. This chapter covers the **general term, binomial coefficients, middle terms, independent term, identities, and applications**.

---

# 1. Binomial Expression

## Definition

A **Binomial** is an algebraic expression consisting of **two terms**.

### Examples

```
x + y
```

```
2a − 3b
```

```
5x + 4
```

---

# 2. Binomial Theorem

## Statement

For any positive integer **n**,

```
(a+b)ⁿ

=

ⁿC₀aⁿ

+

ⁿC₁aⁿ⁻¹b

+

ⁿC₂aⁿ⁻²b²

+ ...

+

ⁿCₙbⁿ
```

---

## Sigma Form

```
(a+b)ⁿ

=

Σ

ⁿCᵣaⁿ⁻ʳbʳ

r=0→n
```

---

# 3. General Term

## Formula

The

```
(r+1)th
```

term is

```
T(r+1)

=

ⁿCᵣaⁿ⁻ʳbʳ
```

---

## Example

Find the **5th term** in

```
(x+2)⁸
```

Solution

```
T₅

=

⁸C₄

x⁴

2⁴
```

```
=70×16x⁴

=1120x⁴
```

---

# 4. Number of Terms

For

```
(a+b)ⁿ
```

Number of terms

```
=n+1
```

---

## Example

```
(x+y)¹²
```

contains

```
13 terms
```

---

# 5. Binomial Coefficients

The coefficients are

```
ⁿC₀

ⁿC₁

ⁿC₂

...

ⁿCₙ
```

---

## Properties

### First Property

```
ⁿC₀

=

ⁿCₙ

=

1
```

---

### Symmetry Property

```
ⁿCᵣ

=

ⁿCₙ₋ᵣ
```

---

### Pascal's Identity

```
ⁿCᵣ

+

ⁿCᵣ₋₁

=

ⁿ⁺¹Cᵣ
```

---

### Sum of Coefficients

```
ⁿC₀

+

ⁿC₁

+

...

+

ⁿCₙ

=

2ⁿ
```

---

# 6. Middle Term

---

## When n is Even

There is **one middle term**.

Position

```
(n/2)+1
```

---

## Formula

```
T(n/2+1)
```

---

## When n is Odd

There are **two middle terms**.

Positions

```
(n+1)/2

and

(n+3)/2
```

---

# Example

```
(x+y)⁶
```

Middle term

```
4th
```

---

# 7. Independent of x Term

A term is independent of

```
x
```

if the exponent of

```
x
```

becomes

```
0
```

---

## Method

1. Write the general term.
2. Find the exponent of

```
x
```

3. Set exponent equal to

```
0
```

4. Solve for

```
r
```

---

# Example

Find the independent term in

```
(x²+1/x)⁹
```

General term

```
T(r+1)

=

⁹Cᵣ

x¹⁸

x⁻ʳ

x⁻ʳ

=

⁹Cᵣ

x¹⁸⁻³ʳ
```

Set exponent

```
18−3r=0
```

```
r=6
```

Hence,

```
7th term
```

is independent of

```
x
```

---

# 8. Greatest Binomial Coefficient

---

## If

```
n
```

is even

Greatest coefficient

```
ⁿCₙ⁄₂
```

---

## If

```
n
```

is odd

Greatest coefficients

```
ⁿC(n−1)/2

and

ⁿC(n+1)/2
```

---

# 9. Binomial Identities

---

## Identity 1

```
ⁿC₀

+

ⁿC₁

+

...

+

ⁿCₙ

=

2ⁿ
```

---

## Identity 2

```
ⁿC₀

−

ⁿC₁

+

ⁿC₂

−...

=

0
```

for

```
n>0
```

---

## Identity 3

```
ⁿC₁

+

2ⁿC₂

+

3ⁿC₃

+...

+

nⁿCₙ

=

n2ⁿ⁻¹
```

---

# 10. Binomial Approximation

When

```
|x|<1
```

```
(1+x)ⁿ

≈

1+nx
```

for small values of

```
x
```

---

## Example

```
(1.02)⁵

≈

1+5(0.02)

=

1.10
```

---

# Difference Between Binomial Expansion and Factorization

| Binomial Expansion    | Factorization             |
| --------------------- | ------------------------- |
| Expands expression    | Converts into factors     |
| Uses Binomial Theorem | Uses algebraic identities |

---

# Flowchart

```
            BINOMIAL THEOREM
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
 Binomial      General Term   Coefficients
                    │
                    ▼
              Middle Terms
                    │
                    ▼
      Independent of x Term
                    │
                    ▼
      Binomial Identities
                    │
                    ▼
          Approximation
```

---

# Important Formulae

| Concept             | Formula                  |
| ------------------- | ------------------------ |
| Binomial Expansion  | **(a+b)ⁿ = Σ ⁿCᵣaⁿ⁻ʳbʳ** |
| General Term        | **T(r+1)=ⁿCᵣaⁿ⁻ʳbʳ**     |
| Number of Terms     | **n+1**                  |
| Symmetry            | **ⁿCᵣ=ⁿCₙ₋ᵣ**            |
| Pascal Identity     | **ⁿCᵣ+ⁿCᵣ₋₁=ⁿ⁺¹Cᵣ**      |
| Sum of Coefficients | **2ⁿ**                   |
| Approximation       | **(1+x)ⁿ≈1+nx**          |

---

# Applications

- Probability.
- Statistics.
- Calculus.
- Numerical analysis.
- Engineering.
- Physics.
- Computer algorithms.
- Artificial Intelligence.
- Financial mathematics.
- Cryptography.

---

# Solved Examples

## Example 1

### Question

Find the **4th term** of

```
(x+3)⁷
```

### Solution

```
T₄

=

⁷C₃

x⁴

3³
```

```
=35×27x⁴
```

```
=945x⁴
```

### Answer

```
945x⁴
```

---

## Example 2

### Question

How many terms are present in

```
(a+b)¹⁰
```

### Solution

```
10+1

=

11
```

### Answer

```
11 terms
```

---

## Example 3

### Question

Find the middle term of

```
(x+y)⁸
```

### Solution

Since

```
n=8
```

Middle term

```
T₅
```

### Answer

```
5th term
```

---

## Example 4

### Question

Find

```
⁸C₂
```

### Solution

```
8!

/

2!6!

=

28
```

### Answer

```
28
```

---

## Example 5

### Question

Find the sum of coefficients of

```
(x+2)⁶
```

### Solution

Substitute

```
x=1
```

```
(1+2)⁶

=

3⁶

=

729
```

### Answer

```
729
```

---

# Common Mistakes

- Using the wrong value of **r** in the general term.
- Forgetting that the **(r+1)th term** corresponds to **r**, not the term number itself.
- Confusing **middle term** with the **middle coefficient**.
- Incorrectly applying **Pascal's Identity**.
- Making errors while simplifying powers of variables.
- Forgetting to set the exponent of **x** to zero when finding the independent term.

---

# Exam Tips

- Memorize the **general term formula** thoroughly.
- Remember that **n+1** gives the total number of terms.
- Write the general term first before solving any term-related problem.
- Use **x = 1** to find the **sum of coefficients**.
- Practice questions involving **middle terms** and **independent of x** terms, as they are frequently asked in ISC examinations.

---

# Quick Revision

- Binomial → Expression with two terms.
- Binomial Theorem → Expansion of **(a+b)ⁿ**.
- General Term → **T(r+1)=ⁿCᵣaⁿ⁻ʳbʳ**.
- Number of Terms → **n+1**.
- Symmetry → **ⁿCᵣ=ⁿCₙ₋ᵣ**.
- Pascal Identity → **ⁿCᵣ+ⁿCᵣ₋₁=ⁿ⁺¹Cᵣ**.
- Sum of Coefficients → **2ⁿ**.
- Independent Term → Exponent of variable = **0**.
- Approximation → **(1+x)ⁿ≈1+nx** (for small **x**).

---

# Chapter Summary

- The **Binomial Theorem** provides a direct method for expanding powers of a binomial expression **(a+b)ⁿ** using **binomial coefficients**.
- The **general term** formula enables the calculation of any specific term in the expansion without expanding the entire expression.
- Important concepts include the **number of terms**, **middle term(s)**, **binomial identities**, **Pascal's Identity**, and the determination of the **term independent of x**.
- The theorem also provides useful **approximation formulas** for evaluating expressions when the variable has a small value.
- Binomial coefficients possess several important algebraic properties that simplify calculations and proofs.
- The Binomial Theorem is widely used in **algebra, probability, statistics, calculus, numerical methods, engineering, computer science, and financial mathematics**, making it one of the most fundamental results in mathematics.

# ISC Class 11 Mathematics

# Chapter 8: Sequences and Series

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Sequences and Series

---

# Introduction

A **Sequence** is an ordered list of numbers arranged according to a specific rule, while a **Series** is the sum of the terms of a sequence. Sequences and series are widely used in **finance, economics, computer science, engineering, statistics, population growth, and physics**. This chapter mainly focuses on **Arithmetic Progressions (AP), Geometric Progressions (GP), Harmonic Progressions (HP), Arithmetic Mean (AM), Geometric Mean (GM), Harmonic Mean (HM), and their properties**.

---

# 1. Sequence

## Definition

A **Sequence** is an ordered arrangement of numbers following a definite pattern.

### Examples

```
2, 4, 6, 8, ...
```

```
1, 3, 9, 27, ...
```

---

## Types of Sequences

- Arithmetic Sequence
- Geometric Sequence
- Harmonic Sequence
- Fibonacci Sequence

---

# 2. Series

## Definition

A **Series** is obtained by adding the terms of a sequence.

### Example

```
2 + 4 + 6 + 8 + ...
```

---

# Difference Between Sequence and Series

| Sequence                      | Series                     |
| ----------------------------- | -------------------------- |
| Ordered list of numbers       | Sum of the sequence        |
| Terms are separated by commas | Terms are connected by '+' |

---

# 3. Arithmetic Progression (AP)

## Definition

A sequence in which the difference between consecutive terms is constant.

---

## General Form

```
a, a+d, a+2d, ...
```

where

- **a** = First term
- **d** = Common difference

---

## nth Term of AP

```
aₙ

=

a+(n−1)d
```

---

## Sum of First n Terms

```
Sₙ

=

n/2

[2a+(n−1)d]
```

or

```
Sₙ

=

n(a+l)/2
```

where **l** is the last term.

---

## Example

```
a=5

d=3

Find 10th term.
```

Solution

```
a₁₀

=

5+9×3

=

32
```

---

# 4. Arithmetic Mean (AM)

## Definition

If **A** is the arithmetic mean between **a** and **b**, then

```
a, A, b
```

are in Arithmetic Progression.

---

## Formula

```
A

=

(a+b)/2
```

---

## Example

Between

```
8

and

18
```

```
AM

=

13
```

---

# 5. Geometric Progression (GP)

## Definition

A sequence in which each term is obtained by multiplying the previous term by a constant ratio.

---

## General Form

```
a, ar, ar², ar³, ...
```

where

- **a** = First term
- **r** = Common ratio

---

## nth Term

```
aₙ

=

arⁿ⁻¹
```

---

## Sum of First n Terms

For

```
r≠1
```

```
Sₙ

=

a(rⁿ−1)

/

(r−1)
```

or

```
Sₙ

=

a(1−rⁿ)

/

(1−r)
```

---

## Sum to Infinity

If

```
|r|<1
```

```
S∞

=

a

/

(1−r)
```

---

## Example

```
a=3

r=2

Find 5th term.
```

Solution

```
a₅

=

3×2⁴

=

48
```

---

# 6. Geometric Mean (GM)

## Definition

If

```
a,G,b
```

are in GP,

then

```
G²

=

ab
```

---

## Formula

```
G

=

√ab
```

---

## Example

Between

```
4

and

25
```

```
GM

=

10
```

---

# 7. Harmonic Progression (HP)

## Definition

A sequence is in Harmonic Progression if the reciprocals of its terms form an Arithmetic Progression.

---

### Example

```
1,

1/2,

1/3,

1/4,...
```

---

# 8. Harmonic Mean (HM)

## Formula

```
HM

=

2ab

/

(a+b)
```

---

## Example

Between

```
4

and

12
```

```
HM

=

96/16

=

6
```

---

# 9. Relationship Between Means

For two positive numbers,

```
AM ≥ GM ≥ HM
```

---

## Important Relation

```
AM × HM

=

GM²
```

---

# 10. Inserting Means

---

## Arithmetic Means

Between

```
a

and

b
```

Insert

```
n
```

AMs.

Common difference

```
d

=

(b−a)/(n+1)
```

---

## Geometric Means

Common ratio

```
r

=

(b/a)^(1/(n+1))
```

---

# 11. Special Series

---

## Sum of Natural Numbers

```
1+2+...

+n

=

n(n+1)/2
```

---

## Sum of Squares

```
1²+2²+...

+n²

=

n(n+1)(2n+1)/6
```

---

## Sum of Cubes

```
1³+2³+...

+n³

=

[n(n+1)/2]²
```

---

# Difference Between AP and GP

| AP                     | GP                  |
| ---------------------- | ------------------- |
| Common Difference      | Common Ratio        |
| Addition               | Multiplication      |
| nth Term: **a+(n−1)d** | nth Term: **arⁿ⁻¹** |

---

# Flowchart

```
         SEQUENCES & SERIES
                 │
      ┌──────────┼──────────┐
      ▼          ▼          ▼
 Sequence      Series    Progressions
                             │
          ┌──────────────────┼──────────────────┐
          ▼                  ▼                  ▼
         AP                 GP                 HP
          │                  │                  │
          ▼                  ▼                  ▼
         AM                 GM                 HM
          │                  │
          └──────────┬───────┘
                     ▼
               Important Relations
```

---

# Important Formulae

| Concept         | Formula                 |
| --------------- | ----------------------- |
| AP nth Term     | **aₙ = a + (n−1)d**     |
| AP Sum          | **Sₙ = n/2[2a+(n−1)d]** |
| GP nth Term     | **aₙ = arⁿ⁻¹**          |
| GP Sum          | **Sₙ = a(rⁿ−1)/(r−1)**  |
| GP Infinite Sum | **a/(1−r)**             |
| Arithmetic Mean | **(a+b)/2**             |
| Geometric Mean  | **√ab**                 |
| Harmonic Mean   | **2ab/(a+b)**           |
| Relation        | **AM × HM = GM²**       |
| Inequality      | **AM ≥ GM ≥ HM**        |

---

# Applications

- Compound interest calculations.
- Population growth models.
- Radioactive decay.
- Computer algorithms.
- Financial planning.
- Signal processing.
- Engineering analysis.
- Artificial Intelligence.
- Statistics.
- Data Science.

---

# Solved Examples

## Example 1

### Question

Find the 15th term of an AP with

```
a=7

d=4
```

### Solution

```
a₁₅

=

7+14×4

=

63
```

### Answer

```
63
```

---

## Example 2

### Question

Find the sum of the first

```
20
```

terms of the AP

```
5,8,11,...
```

### Solution

```
a=5

d=3
```

```
S₂₀

=

20/2

[10+57]

=

670
```

### Answer

```
670
```

---

## Example 3

### Question

Find the 6th term of the GP

```
2,6,18,...
```

### Solution

```
a=2

r=3
```

```
a₆

=

2×3⁵

=

486
```

### Answer

```
486
```

---

## Example 4

### Question

Find the Geometric Mean between

```
9

and

36
```

### Solution

```
GM

=

√(9×36)

=

18
```

### Answer

```
18
```

---

## Example 5

### Question

Find the Harmonic Mean between

```
8

and

24
```

### Solution

```
HM

=

2×8×24

/

32

=

12
```

### Answer

```
12
```

---

# Common Mistakes

- Confusing the **common difference** in AP with the **common ratio** in GP.
- Using the AP formula for GP problems and vice versa.
- Forgetting that the GP infinite sum exists only when **|r| < 1**.
- Using incorrect formulas for AM, GM, and HM.
- Ignoring the relation **AM ≥ GM ≥ HM** for positive numbers.
- Making errors while inserting arithmetic or geometric means.

---

# Exam Tips

- Identify whether the sequence is an **AP**, **GP**, or **HP** before choosing a formula.
- Memorize the formulas for the **nth term** and **sum** of AP and GP.
- Remember that the infinite GP sum is valid only for **|r| < 1**.
- Practice problems involving **means** and their relationships.
- Check whether the required answer is a **term** or a **sum** before solving.

---

# Quick Revision

- Sequence → Ordered list of numbers.
- Series → Sum of sequence terms.
- AP → Constant difference.
- GP → Constant ratio.
- HP → Reciprocals form an AP.
- AP nth Term → **a + (n−1)d**
- GP nth Term → **arⁿ⁻¹**
- AP Sum → **n/2[2a+(n−1)d]**
- GP Sum → **a(rⁿ−1)/(r−1)**
- GP Infinite Sum → **a/(1−r)**
- AM → **(a+b)/2**
- GM → **√ab**
- HM → **2ab/(a+b)**
- Relation → **AM × HM = GM²**
- Inequality → **AM ≥ GM ≥ HM**

---

# Chapter Summary

- A **sequence** is an ordered collection of numbers, while a **series** is the sum of the terms of a sequence.
- The three major progressions studied are **Arithmetic Progression (AP)**, **Geometric Progression (GP)**, and **Harmonic Progression (HP)**, each defined by a specific numerical pattern.
- Important formulas include the **nth term** and **sum of n terms** for AP and GP, as well as the **sum to infinity** for a GP when **|r| < 1**.
- The **Arithmetic Mean (AM)**, **Geometric Mean (GM)**, and **Harmonic Mean (HM)** are important averages connected by the relation **AM × HM = GM²** and satisfy the inequality **AM ≥ GM ≥ HM**.
- Special series such as the sums of **natural numbers, squares, and cubes** are frequently used in mathematical proofs and problem-solving.
- Sequences and series have extensive applications in **finance, economics, computer science, engineering, statistics, physics, artificial intelligence, and data analysis**, making them an essential foundation for higher mathematics.

# ISC Class 11 Mathematics

# Chapter 9: Trigonometric Functions

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Trigonometric Functions

---

# Introduction

**Trigonometry** is the branch of mathematics that studies the relationship between the angles and sides of triangles. The **trigonometric functions**—**sine, cosine, tangent, cotangent, secant, and cosecant**—are fundamental in mathematics and have extensive applications in **physics, engineering, navigation, astronomy, architecture, surveying, and computer graphics**.

---

# 1. Angle Measurement

## Degree Measure

A complete revolution is

```
360°
```

---

## Radian Measure

A complete revolution is

```
2π radians
```

---

## Conversion Formulae

```
180°

=

π radians
```

```
1°

=

π/180 radians
```

```
1 radian

=

180°/π
```

---

## Common Angle Conversions

| Degrees | Radians |
| ------- | ------- |
| 0°      | 0       |
| 30°     | π/6     |
| 45°     | π/4     |
| 60°     | π/3     |
| 90°     | π/2     |
| 180°    | π       |
| 270°    | 3π/2    |
| 360°    | 2π      |

---

# 2. Trigonometric Functions

For a right-angled triangle,

```
sinθ

=

Perpendicular/Hypotenuse
```

```
cosθ

=

Base/Hypotenuse
```

```
tanθ

=

Perpendicular/Base
```

```
cotθ

=

Base/Perpendicular
```

```
secθ

=

Hypotenuse/Base
```

```
cosecθ

=

Hypotenuse/Perpendicular
```

---

# 3. Reciprocal Identities

```
secθ

=

1/cosθ
```

```
cosecθ

=

1/sinθ
```

```
cotθ

=

1/tanθ
```

---

# 4. Quotient Identities

```
tanθ

=

sinθ/cosθ
```

```
cotθ

=

cosθ/sinθ
```

---

# 5. Fundamental Identities

## Identity 1

```
sin²θ+cos²θ

=

1
```

---

## Identity 2

```
1+tan²θ

=

sec²θ
```

---

## Identity 3

```
1+cot²θ

=

cosec²θ
```

---

# 6. Signs of Trigonometric Functions

### ASTC Rule

```
Quadrant I

All Positive
```

```
Quadrant II

Sin Positive
```

```
Quadrant III

Tan Positive
```

```
Quadrant IV

Cos Positive
```

---

# 7. Values of Trigonometric Functions

| θ   | sinθ | cosθ | tanθ      |
| --- | ---- | ---- | --------- |
| 0°  | 0    | 1    | 0         |
| 30° | 1/2  | √3/2 | 1/√3      |
| 45° | 1/√2 | 1/√2 | 1         |
| 60° | √3/2 | 1/2  | √3        |
| 90° | 1    | 0    | Undefined |

---

# 8. Allied Angles

## Formulae

```
sin(90°−θ)

=

cosθ
```

```
cos(90°−θ)

=

sinθ
```

```
tan(90°−θ)

=

cotθ
```

```
cot(90°−θ)

=

tanθ
```

```
sec(90°−θ)

=

cosecθ
```

```
cosec(90°−θ)

=

secθ
```

---

# 9. Trigonometric Functions of Negative Angles

```
sin(−θ)

=

−sinθ
```

```
cos(−θ)

=

cosθ
```

```
tan(−θ)

=

−tanθ
```

---

# 10. Periodicity

| Function | Period |
| -------- | ------ |
| sinθ     | 2π     |
| cosθ     | 2π     |
| tanθ     | π      |
| cotθ     | π      |
| secθ     | 2π     |
| cosecθ   | 2π     |

---

# 11. Graphs of Trigonometric Functions

### Sine Curve

- Starts from **0**
- Maximum value **1**
- Minimum value **−1**
- Period **2π**

---

### Cosine Curve

- Starts from **1**
- Maximum value **1**
- Minimum value **−1**
- Period **2π**

---

### Tangent Curve

- Passes through origin.
- Undefined at

```
π/2,

3π/2,...
```

- Period

```
π
```

---

# 12. Domain and Range

| Function | Domain           | Range            |
| -------- | ---------------- | ---------------- |
| sinθ     | All real numbers | [-1,1]           |
| cosθ     | All real numbers | [-1,1]           |
| tanθ     | θ ≠ (2n+1)π/2    | All real numbers |
| cotθ     | θ ≠ nπ           | All real numbers |
| secθ     | cosθ ≠ 0         | (-∞,-1] ∪ [1,∞)  |
| cosecθ   | sinθ ≠ 0         | (-∞,-1] ∪ [1,∞)  |

---

# 13. Important Trigonometric Formulae

## Sum Formula

```
sin(A+B)

=

sinA cosB

+

cosA sinB
```

---

```
cos(A+B)

=

cosA cosB

−

sinA sinB
```

---

```
tan(A+B)

=

(tanA+tanB)

/

(1−tanAtanB)
```

---

## Difference Formula

```
sin(A−B)

=

sinA cosB

−

cosA sinB
```

---

```
cos(A−B)

=

cosA cosB

+

sinA sinB
```

---

```
tan(A−B)

=

(tanA−tanB)

/

(1+tanAtanB)
```

---

## Double Angle Formulae

```
sin2A

=

2sinA cosA
```

---

```
cos2A

=

cos²A−sin²A
```

---

Alternative Forms

```
cos2A

=

2cos²A−1
```

```
cos2A

=

1−2sin²A
```

---

```
tan2A

=

2tanA

/

1−tan²A
```

---

# Flowchart

```
         TRIGONOMETRIC FUNCTIONS
                  │
      ┌───────────┼───────────┐
      ▼           ▼           ▼
 Angle Measure   Functions   Identities
                  │
                  ▼
           Standard Values
                  │
                  ▼
            Allied Angles
                  │
                  ▼
             Periodicity
                  │
                  ▼
             Graphs
                  │
                  ▼
        Sum & Double Angle Formulae
```

---

# Important Formulae

| Concept          | Formula             |
| ---------------- | ------------------- |
| sin²θ + cos²θ    | **1**               |
| 1 + tan²θ        | **sec²θ**           |
| 1 + cot²θ        | **cosec²θ**         |
| tanθ             | **sinθ/cosθ**       |
| sin2A            | **2sinA cosA**      |
| cos2A            | **cos²A−sin²A**     |
| tan2A            | **2tanA/(1−tan²A)** |
| Degree to Radian | **θ × π/180**       |

---

# Applications

- Surveying.
- Navigation.
- Architecture.
- Astronomy.
- Engineering.
- Computer graphics.
- Robotics.
- Signal processing.
- Satellite communication.
- Artificial Intelligence.

---

# Solved Examples

## Example 1

### Question

Convert

```
60°
```

into radians.

### Solution

```
60×

π/180

=

π/3
```

### Answer

```
π/3
```

---

## Example 2

### Question

Find

```
sin30°
```

### Solution

```
sin30°

=

1/2
```

### Answer

```
1/2
```

---

## Example 3

### Question

Prove

```
tanθ

=

sinθ/cosθ
```

### Solution

Using definitions,

```
tanθ

=

Perpendicular/Base
```

```
sinθ/cosθ

=

(P/H)

/

(B/H)

=

P/B
```

Hence,

```
tanθ

=

sinθ/cosθ
```

---

## Example 4

### Question

Find

```
cos(90°−30°)
```

### Solution

```
=

sin30°

=

1/2
```

### Answer

```
1/2
```

---

## Example 5

### Question

Find

```
sin²45°

+

cos²45°
```

### Solution

```
1/2+1/2

=

1
```

### Answer

```
1
```

---

# Common Mistakes

- Confusing **degrees** and **radians**.
- Forgetting the **ASTC rule** while determining signs.
- Using incorrect values for standard angles.
- Mixing up reciprocal and quotient identities.
- Applying double-angle formulas incorrectly.
- Ignoring the domain restrictions of **tanθ**, **cotθ**, **secθ**, and **cosecθ**.

---

# Exam Tips

- Memorize the **standard trigonometric values** for 0°, 30°, 45°, 60°, and 90°.
- Learn the **fundamental identities** thoroughly, as they are frequently used in proofs.
- Use the **ASTC rule** to determine the sign of trigonometric functions in different quadrants.
- Practice converting between **degrees** and **radians**.
- Draw simple sketches of the **sine**, **cosine**, and **tangent** graphs for better understanding.

---

# Quick Revision

- **180° = π radians**
- **sinθ = Perpendicular/Hypotenuse**
- **cosθ = Base/Hypotenuse**
- **tanθ = Perpendicular/Base**
- **sin²θ + cos²θ = 1**
- **1 + tan²θ = sec²θ**
- **1 + cot²θ = cosec²θ**
- **sin2A = 2sinA cosA**
- **cos2A = cos²A − sin²A**
- **tan2A = 2tanA/(1−tan²A)**
- **Period of sin and cos = 2π**
- **Period of tan = π**

---

# Chapter Summary

- **Trigonometric functions** establish relationships between the sides and angles of triangles and are fundamental to many branches of mathematics and science.
- Angles can be measured in **degrees** or **radians**, and understanding the conversion between these units is essential.
- The six trigonometric functions are connected through **reciprocal, quotient, and Pythagorean identities**, which simplify complex calculations.
- Standard values, allied angle identities, periodicity, and graph behavior help in solving a wide range of trigonometric problems.
- Important formulas such as the **sum, difference, and double-angle identities** form the foundation for advanced trigonometry and calculus.
- Trigonometric functions have extensive applications in **physics, engineering, astronomy, navigation, architecture, signal processing, robotics, computer graphics, and artificial intelligence**, making them one of the most significant topics in mathematics.

# ISC Class 11 Mathematics

# Chapter 10: Trigonometric Equations

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Trigonometric Equations

---

# Introduction

A **Trigonometric Equation** is an equation involving one or more trigonometric functions of an angle. The objective is to determine all values of the variable that satisfy the equation. Trigonometric equations arise in **physics, engineering, astronomy, signal processing, navigation, robotics, and wave mechanics**.

---

# 1. Trigonometric Equation

## Definition

A trigonometric equation is an equation containing one or more trigonometric functions of an unknown angle.

### Examples

```
sin x = 1/2
```

```
2cos x = 1
```

```
tan x = √3
```

---

# 2. General Solutions

Unlike algebraic equations, trigonometric equations usually have **infinitely many solutions** because trigonometric functions are periodic.

---

## General Solution of sin x = sin α

```
x = n(2π) + α
```

or

```
x = n(2π) + (π − α)
```

where

```
n ∈ Z
```

---

## General Solution of cos x = cos α

```
x = 2nπ ± α
```

where

```
n ∈ Z
```

---

## General Solution of tan x = tan α

```
x = nπ + α
```

where

```
n ∈ Z
```

---

# 3. Standard Trigonometric Equations

---

## Equation 1

```
sin x = 0
```

Solution

```
x = nπ
```

---

## Equation 2

```
cos x = 0
```

Solution

```
x = (2n+1)π/2
```

---

## Equation 3

```
tan x = 0
```

Solution

```
x = nπ
```

---

## Equation 4

```
sin x = 1
```

Solution

```
x = (4n+1)π/2
```

---

## Equation 5

```
cos x = 1
```

Solution

```
x = 2nπ
```

---

## Equation 6

```
tan x = 1
```

Solution

```
x = nπ + π/4
```

---

# 4. Standard Values

| Function | Value | Principal Angle |
| -------- | ----- | --------------- |
| sin x    | 0     | 0°              |
| sin x    | 1/2   | 30°             |
| sin x    | √2/2  | 45°             |
| sin x    | √3/2  | 60°             |
| sin x    | 1     | 90°             |
| cos x    | 1     | 0°              |
| cos x    | 1/2   | 60°             |
| cos x    | 0     | 90°             |
| tan x    | 1     | 45°             |
| tan x    | √3    | 60°             |

---

# 5. Solving Trigonometric Equations

## Step 1

Reduce the equation to one trigonometric function.

↓

## Step 2

Find the principal angle.

↓

## Step 3

Write the general solution.

↓

## Step 4

Find solutions in the required interval.

---

# 6. Equations Involving Identities

Example

```
2sin²x−1=0
```

Solution

```
sin²x

=

1/2
```

```
sin x

=

±1/√2
```

General solution

```
x

=

nπ±π/4
```

---

# 7. Equations Using Factorization

Example

```
2sinx cosx=0
```

Factorize

```
sinx=0

or

cosx=0
```

Hence

```
x=nπ
```

or

```
x=(2n+1)π/2
```

---

# 8. Equations Using Double Angle Formula

Example

```
sin2x=√3/2
```

General solution

```
2x=n2π+π/3
```

or

```
2x=n2π+2π/3
```

Divide by

```
2
```

to obtain the final answer.

---

# 9. Solutions in a Given Interval

When the interval is specified, first find the **general solution**, then select only those values that lie within the interval.

---

## Example

Solve

```
sinx=1/2
```

for

```
0≤x≤2π
```

Solutions

```
π/6

and

5π/6
```

---

# 10. Principal Solution

The **principal solution** is the solution lying within one complete cycle.

For example,

```
0≤x<2π
```

or

```
0°≤x<360°
```

---

# Difference Between Principal and General Solution

| Principal Solution         | General Solution             |
| -------------------------- | ---------------------------- |
| Finite number of solutions | Infinite number of solutions |
| Restricted interval        | All possible solutions       |
| Used for graphs            | Used for complete solution   |

---

# Important Trigonometric Equations

| Equation      | General Solution                   |
| ------------- | ---------------------------------- |
| sin x = sin α | **x = 2nπ + α** or **2nπ + (π−α)** |
| cos x = cos α | **x = 2nπ ± α**                    |
| tan x = tan α | **x = nπ + α**                     |
| sin x = 0     | **x = nπ**                         |
| cos x = 0     | **x = (2n+1)π/2**                  |
| tan x = 0     | **x = nπ**                         |

---

# Flowchart

```
        TRIGONOMETRIC EQUATIONS
                  │
      ┌───────────┼───────────┐
      ▼           ▼           ▼
 Standard     General      Principal
 Values      Solutions     Solutions
                  │
                  ▼
        Trigonometric Identities
                  │
                  ▼
           Factorization
                  │
                  ▼
        Double Angle Formula
                  │
                  ▼
      Solutions in an Interval
```

---

# Important Formulae

| Concept       | Formula                            |
| ------------- | ---------------------------------- |
| sin x = sin α | **x = 2nπ + α** or **2nπ + (π−α)** |
| cos x = cos α | **x = 2nπ ± α**                    |
| tan x = tan α | **x = nπ + α**                     |
| sin²x + cos²x | **1**                              |
| 1 + tan²x     | **sec²x**                          |
| 1 + cot²x     | **cosec²x**                        |
| sin2x         | **2sinx cosx**                     |
| cos2x         | **cos²x−sin²x**                    |

---

# Applications

- Wave motion.
- Alternating current circuits.
- Sound and light waves.
- Navigation.
- Robotics.
- Mechanical engineering.
- Astronomy.
- Satellite communication.
- Computer graphics.
- Artificial Intelligence.

---

# Solved Examples

## Example 1

### Question

Solve

```
sinx=1/2
```

### Solution

Principal angle

```
30°
```

General solutions

```
x=2nπ+π/6
```

or

```
x=2nπ+5π/6
```

### Answer

```
x=2nπ+π/6

or

x=2nπ+5π/6
```

---

## Example 2

### Question

Solve

```
cosx=1/2
```

### Solution

Principal angle

```
60°
```

General solution

```
x=2nπ±π/3
```

### Answer

```
2nπ±π/3
```

---

## Example 3

### Question

Solve

```
tanx=√3
```

### Solution

Principal angle

```
π/3
```

General solution

```
x=nπ+π/3
```

### Answer

```
nπ+π/3
```

---

## Example 4

### Question

Solve

```
2sin²x−1=0
```

### Solution

```
sinx=±1/√2
```

Hence

```
x=nπ±π/4
```

### Answer

```
nπ±π/4
```

---

## Example 5

### Question

Find all solutions of

```
cosx=0
```

### Solution

```
x=(2n+1)π/2
```

### Answer

```
(2n+1)π/2
```

---

# Common Mistakes

- Writing only the **principal solution** instead of the **general solution**.
- Forgetting the periodic nature of trigonometric functions.
- Using incorrect standard angle values.
- Ignoring the specified interval while selecting answers.
- Applying the wrong identity when simplifying equations.
- Forgetting to divide the angle after solving equations involving **2x** or **3x**.

---

# Exam Tips

- Always reduce the equation to a single trigonometric function before solving.
- Memorize the general solution formulas for **sin**, **cos**, and **tan**.
- Draw the unit circle to identify principal angles quickly.
- Write the general solution first, then restrict it to the required interval if asked.
- Check answers by substituting them back into the original equation.

---

# Quick Revision

- Trigonometric equations have **infinitely many solutions** due to periodicity.
- **sin x = sin α → x = 2nπ + α** or **2nπ + (π−α)**.
- **cos x = cos α → x = 2nπ ± α**.
- **tan x = tan α → x = nπ + α**.
- Principal solution lies within one complete cycle.
- General solution includes all possible solutions.
- Use identities and factorization to simplify equations.
- For equations involving **2x** or **3x**, solve first and then divide appropriately.

---

# Chapter Summary

- A **trigonometric equation** is an equation involving one or more trigonometric functions, and because these functions are **periodic**, such equations generally have **infinitely many solutions**.
- Solving trigonometric equations involves finding the **principal angle**, writing the **general solution**, and selecting solutions within a specified interval when required.
- Standard equations involving **sine, cosine, and tangent** have well-defined general solution formulas that should be memorized.
- Trigonometric identities, factorization, and double-angle formulas are powerful tools for transforming complex equations into simpler forms.
- Understanding the distinction between **principal solutions** and **general solutions** is essential for solving examination problems correctly.
- Trigonometric equations are extensively used in **wave mechanics, electrical engineering, astronomy, navigation, robotics, signal processing, and applied mathematics**, making them an important part of higher mathematics.

# ISC Class 11 Mathematics

# Chapter 11: Straight Lines

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Straight Lines

---

# Introduction

**Coordinate Geometry** establishes a relationship between **algebra** and **geometry** by representing geometric figures using coordinates. A **straight line** is the simplest geometric figure and is represented by a linear equation in two variables. This chapter deals with **slope, inclination, equations of a straight line, angle between lines, distance of a point from a line, and conditions for parallelism and perpendicularity**.

---

# 1. Coordinate System

## Cartesian Plane

The Cartesian plane consists of two mutually perpendicular axes.

```
X-axis → Horizontal

Y-axis → Vertical
```

The point where they intersect is called the

```
Origin (0,0)
```

---

# 2. Distance Between Two Points

If

```
A(x₁,y₁)

and

B(x₂,y₂)
```

then

```
AB

=

√[(x₂−x₁)²+(y₂−y₁)²]
```

---

# 3. Section Formula

A point dividing the line segment joining

```
A(x₁,y₁)

and

B(x₂,y₂)
```

internally in the ratio

```
m:n
```

has coordinates

```
((mx₂+nx₁)/(m+n),

(my₂+ny₁)/(m+n))
```

---

## Midpoint Formula

```
((x₁+x₂)/2,

(y₁+y₂)/2)
```

---

# 4. Slope of a Line

## Definition

The **slope** or **gradient** measures the inclination of a line with the positive x-axis.

---

## Formula

```
m

=

(y₂−y₁)

/

(x₂−x₁)
```

---

## Relation with Inclination

```
m

=

tanθ
```

where

```
θ
```

is the angle of inclination.

---

# 5. Angle Between Two Lines

If slopes are

```
m₁

and

m₂
```

then

```
tanθ

=

(m₂−m₁)

/

(1+m₁m₂)
```

---

# 6. Parallel and Perpendicular Lines

## Parallel Lines

Condition

```
m₁=m₂
```

---

## Perpendicular Lines

Condition

```
m₁m₂=-1
```

---

# 7. Equation of a Straight Line

---

## Slope-Intercept Form

```
y=mx+c
```

where

- **m** = slope
- **c** = y-intercept

---

## Point-Slope Form

Through

```
(x₁,y₁)
```

```
y−y₁

=

m(x−x₁)
```

---

## Two-Point Form

```
(y−y₁)/(x−x₁)

=

(y₂−y₁)/(x₂−x₁)
```

---

## Intercept Form

If the intercepts are

```
a

and

b
```

then

```
x/a+y/b=1
```

---

## Normal Form

```
xcosα

+

ysinα

=

p
```

where

- **p** = perpendicular distance from origin
- **α** = angle made by the perpendicular with the x-axis

---

## General Form

```
Ax+By+C=0
```

where

```
A

and

B

are not both zero.
```

---

# 8. Intercepts of a Line

For

```
Ax+By+C=0
```

### X-intercept

```
−C/A
```

### Y-intercept

```
−C/B
```

---

# 9. Distance of a Point from a Line

For the point

```
(x₁,y₁)
```

and line

```
Ax+By+C=0
```

Distance

```
=

|Ax₁+By₁+C|

/

√(A²+B²)
```

---

# 10. Family of Straight Lines

A family of lines passing through the intersection of

```
L₁=0

and

L₂=0
```

is

```
L₁+λL₂=0
```

where

```
λ
```

is a parameter.

---

# Difference Between Parallel and Perpendicular Lines

| Parallel Lines  | Perpendicular Lines    |
| --------------- | ---------------------- |
| Same slope      | Product of slopes = -1 |
| Never intersect | Intersect at 90°       |

---

# Difference Between Slope and Inclination

| Slope           | Inclination                 |
| --------------- | --------------------------- |
| Numerical value | Angle with x-axis           |
| m = tanθ        | Measured in degrees/radians |

---

# Flowchart

```
             STRAIGHT LINES
                  │
      ┌───────────┼───────────┐
      ▼           ▼           ▼
 Coordinates    Distance     Slope
                  │
                  ▼
            Inclination
                  │
                  ▼
        Equation of Line
                  │
      ┌───────────┼───────────┐
      ▼           ▼           ▼
 Point-Slope   Intercept   General Form
                  │
                  ▼
       Parallel & Perpendicular
                  │
                  ▼
      Distance from a Line
```

---

# Important Formulae

| Concept                     | Formula                               |
| --------------------------- | ------------------------------------- |
| Distance Between Two Points | **√[(x₂−x₁)²+(y₂−y₁)²]**              |
| Midpoint                    | **((x₁+x₂)/2,(y₁+y₂)/2)**             |
| Section Formula             | **((mx₂+nx₁)/(m+n),(my₂+ny₁)/(m+n))** |
| Slope                       | **(y₂−y₁)/(x₂−x₁)**                   |
| Slope-Inclination           | **m = tanθ**                          |
| Angle Between Lines         | **tanθ=(m₂−m₁)/(1+m₁m₂)**             |
| Point-Slope Form            | **y−y₁=m(x−x₁)**                      |
| Slope-Intercept Form        | **y=mx+c**                            |
| Intercept Form              | **x/a+y/b=1**                         |
| Distance from Point to Line | **\|Ax₁+By₁+C\|/√(A²+B²)**            |

---

# Applications

- Road and railway design.
- Architecture.
- Civil engineering.
- Navigation.
- Surveying.
- Robotics.
- Computer graphics.
- GPS mapping.
- Physics.
- Artificial Intelligence.

---

# Solved Examples

## Example 1

### Question

Find the slope of the line joining

```
(2,3)

and

(6,11)
```

### Solution

```
m

=

(11−3)/(6−2)

=

8/4

=

2
```

### Answer

```
2
```

---

## Example 2

### Question

Find the midpoint of

```
(4,6)

and

(8,10)
```

### Solution

```
((4+8)/2,

(6+10)/2)

=

(6,8)
```

### Answer

```
(6,8)
```

---

## Example 3

### Question

Find the equation of the line with slope

```
3
```

passing through

```
(2,5)
```

### Solution

```
y−5

=

3(x−2)
```

```
y

=

3x−1
```

### Answer

```
y=3x−1
```

---

## Example 4

### Question

Find the distance between

```
(1,2)

and

(4,6)
```

### Solution

```
√[(4−1)²+(6−2)²]

=

√25

=

5
```

### Answer

```
5
```

---

## Example 5

### Question

Find the distance of the point

```
(2,1)
```

from the line

```
3x+4y−10=0
```

### Solution

```
|6+4−10|

/

√25

=

0
```

### Answer

```
0
```

(The point lies on the line.)

---

# Common Mistakes

- Confusing the **slope** with the **angle of inclination**.
- Using the wrong sign while calculating the slope.
- Interchanging **x** and **y** coordinates in formulas.
- Forgetting to simplify the equation into standard form before applying the distance formula.
- Using the midpoint formula instead of the section formula.
- Ignoring the condition **m₁m₂ = -1** for perpendicular lines.

---

# Exam Tips

- Memorize all standard forms of the equation of a straight line.
- Draw a rough sketch whenever possible to understand the geometry.
- Use the slope formula carefully, maintaining the same order of subtraction in numerator and denominator.
- Simplify equations before calculating distances or intercepts.
- Practice conversions between different forms of line equations.

---

# Quick Revision

- Distance Formula → **√[(x₂−x₁)²+(y₂−y₁)²]**
- Midpoint → **((x₁+x₂)/2,(y₁+y₂)/2)**
- Slope → **(y₂−y₁)/(x₂−x₁)**
- Inclination → **m = tanθ**
- Parallel Lines → **m₁ = m₂**
- Perpendicular Lines → **m₁m₂ = -1**
- Slope-Intercept Form → **y = mx + c**
- Point-Slope Form → **y − y₁ = m(x − x₁)**
- Intercept Form → **x/a + y/b = 1**
- Distance from Point to Line → **|Ax₁ + By₁ + C|/√(A² + B²)**

---

# Chapter Summary

- A **straight line** is represented algebraically by a linear equation and geometrically on the Cartesian plane.
- The concepts of **distance**, **midpoint**, **section formula**, and **slope** are fundamental in coordinate geometry.
- Several forms of the equation of a straight line—**slope-intercept, point-slope, two-point, intercept, normal, and general forms**—are used depending on the information provided.
- The relationships between the slopes of lines help determine whether they are **parallel** or **perpendicular**, while the angle formula determines the angle between two lines.
- The **distance formula** is used to find the perpendicular distance of a point from a given line.
- Straight lines form the foundation for advanced topics in **coordinate geometry, conic sections, vectors, calculus, engineering, architecture, navigation, computer graphics, and artificial intelligence**.

# ISC Class 11 Mathematics

# Chapter 12: Conic Sections

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Conic Sections

---

# Introduction

A **Conic Section** is a curve obtained by the intersection of a **plane** with a **right circular cone**. Depending on the angle at which the plane cuts the cone, the resulting curves are **Circle, Ellipse, Parabola,** and **Hyperbola**. Conic sections have extensive applications in **astronomy, satellite communication, architecture, optics, engineering, navigation, and physics**.

---

# 1. Conic Section

## Definition

A conic section is the curve obtained when a plane intersects a double right circular cone.

---

## Types of Conic Sections

- Circle
- Ellipse
- Parabola
- Hyperbola

---

# 2. Circle

## Definition

A **Circle** is the set of all points in a plane that are at a constant distance from a fixed point.

The fixed point is called the **Centre**, and the constant distance is called the **Radius**.

---

## Standard Equation

For a circle with centre

```
(h,k)
```

and radius

```
r
```

the equation is

```
(x−h)²+(y−k)²=r²
```

---

## Special Case

If the centre is at the origin,

```
x²+y²=r²
```

---

# 3. Parabola

## Definition

A **Parabola** is the locus of a point whose distance from a fixed point (**Focus**) is equal to its distance from a fixed line (**Directrix**).

---

## Standard Equation

```
y²=4ax
```

---

## Important Elements

Vertex

```
(0,0)
```

Focus

```
(a,0)
```

Directrix

```
x=−a
```

Axis

```
x-axis
```

Latus Rectum

```
4a
```

---

# 4. Ellipse

## Definition

An **Ellipse** is the locus of a point such that the sum of its distances from two fixed points (**Foci**) is constant.

---

## Standard Equation

```
x²/a²+y²/b²=1
```

where

```
a>b
```

---

## Important Elements

Centre

```
(0,0)
```

Vertices

```
(±a,0)
```

Foci

```
(±c,0)
```

where

```
c²=a²−b²
```

---

## Eccentricity

```
e=c/a
```

For an ellipse,

```
0<e<1
```

---

# 5. Hyperbola

## Definition

A **Hyperbola** is the locus of a point such that the difference of its distances from two fixed points is constant.

---

## Standard Equation

```
x²/a²−y²/b²=1
```

---

## Important Elements

Centre

```
(0,0)
```

Vertices

```
(±a,0)
```

Foci

```
(±c,0)
```

where

```
c²=a²+b²
```

---

## Eccentricity

```
e=c/a
```

For a hyperbola,

```
e>1
```

---

# 6. Eccentricity

## Definition

The ratio of the distance of a point from the focus to its distance from the directrix.

```
e

=

Distance from Focus

/

Distance from Directrix
```

---

## Values

| Conic     | Eccentricity |
| --------- | ------------ |
| Circle    | 0            |
| Ellipse   | 0 < e < 1    |
| Parabola  | 1            |
| Hyperbola | >1           |

---

# 7. Difference Between Conic Sections

| Circle          | Ellipse                   | Parabola                   | Hyperbola                        |
| --------------- | ------------------------- | -------------------------- | -------------------------------- |
| One centre      | Two foci                  | One focus                  | Two foci                         |
| e = 0           | 0 < e < 1                 | e = 1                      | e > 1                            |
| Radius constant | Sum of distances constant | Focus = Directrix distance | Difference of distances constant |

---

# 8. Standard Equations

| Conic           | Equation             |
| --------------- | -------------------- |
| Circle          | **(x−h)²+(y−k)²=r²** |
| Circle (Origin) | **x²+y²=r²**         |
| Parabola        | **y²=4ax**           |
| Ellipse         | **x²/a²+y²/b²=1**    |
| Hyperbola       | **x²/a²−y²/b²=1**    |

---

# 9. Important Relations

### Ellipse

```
c²=a²−b²
```

---

### Hyperbola

```
c²=a²+b²
```

---

### Latus Rectum

Parabola

```
4a
```

Ellipse

```
2b²/a
```

Hyperbola

```
2b²/a
```

---

# Flowchart

```
             CONIC SECTIONS
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
      Circle    Parabola   Ellipse
                                │
                                ▼
                           Hyperbola
                                │
                                ▼
                         Eccentricity
                                │
                                ▼
                       Standard Equations
```

---

# Important Formulae

| Concept            | Formula              |
| ------------------ | -------------------- |
| Circle             | **(x−h)²+(y−k)²=r²** |
| Circle at Origin   | **x²+y²=r²**         |
| Parabola           | **y²=4ax**           |
| Ellipse            | **x²/a²+y²/b²=1**    |
| Hyperbola          | **x²/a²−y²/b²=1**    |
| Ellipse Relation   | **c²=a²−b²**         |
| Hyperbola Relation | **c²=a²+b²**         |
| Eccentricity       | **e=c/a**            |

---

# Applications

- Satellite orbits.
- Planetary motion.
- Reflecting telescopes.
- Automobile headlights.
- Radar systems.
- Suspension bridges.
- Architecture.
- Navigation.
- Aerospace engineering.
- Computer graphics.

---

# Solved Examples

## Example 1

### Question

Find the radius of the circle

```
x²+y²=49
```

### Solution

```
r²=49
```

```
r=7
```

### Answer

```
7
```

---

## Example 2

### Question

Find the centre and radius of

```
(x−3)²+(y+2)²=25
```

### Solution

Centre

```
(3,−2)
```

Radius

```
√25=5
```

### Answer

Centre

```
(3,−2)
```

Radius

```
5
```

---

## Example 3

### Question

Find the focus of

```
y²=8x
```

### Solution

```
4a=8
```

```
a=2
```

Focus

```
(2,0)
```

### Answer

```
(2,0)
```

---

## Example 4

### Question

Find the eccentricity of the ellipse

```
a=5

b=4
```

### Solution

```
c²=25−16=9
```

```
c=3
```

```
e=3/5
```

### Answer

```
3/5
```

---

## Example 5

### Question

Find

```
c
```

for the hyperbola

```
a=3

b=4
```

### Solution

```
c²=9+16=25
```

```
c=5
```

### Answer

```
5
```

---

# Common Mistakes

- Confusing the standard equations of the ellipse and hyperbola.
- Using **c² = a² − b²** for a hyperbola instead of **c² = a² + b²**.
- Forgetting that a parabola has **eccentricity = 1**.
- Mixing up the focus and the directrix.
- Incorrectly identifying the centre or radius of a circle.
- Using the wrong orientation of a conic.

---

# Exam Tips

- Memorize the standard equations of all four conic sections.
- Remember the eccentricity values to identify each conic quickly.
- Draw a rough sketch before solving geometry problems.
- Pay attention to the signs in the equations.
- Practice finding the focus, directrix, centre, and vertices from the given equation.

---

# Quick Revision

- Circle → **(x−h)²+(y−k)²=r²**
- Circle at Origin → **x²+y²=r²**
- Parabola → **y²=4ax**
- Ellipse → **x²/a²+y²/b²=1**
- Hyperbola → **x²/a²−y²/b²=1**
- Ellipse → **c²=a²−b²**
- Hyperbola → **c²=a²+b²**
- Circle → **e=0**
- Parabola → **e=1**
- Ellipse → **0<e<1**
- Hyperbola → **e>1**

---

# Chapter Summary

- **Conic sections** are curves formed by the intersection of a plane with a right circular cone.
- The four principal conics are the **circle, parabola, ellipse, and hyperbola**, each with its own defining property and standard equation.
- The **circle** consists of all points equidistant from a fixed centre, while the **parabola** is defined using a **focus** and **directrix**.
- The **ellipse** is characterized by a constant sum of distances from two foci, whereas the **hyperbola** has a constant difference of distances from its two foci.
- **Eccentricity** is an important parameter used to distinguish different conic sections.
- Conic sections play a vital role in **astronomy, engineering, optics, architecture, satellite communication, navigation, and modern technology**, making them one of the most significant topics in coordinate geometry.

# ISC Class 11 Mathematics

# Chapter 13: Introduction to Three-Dimensional Geometry

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Introduction to Three-Dimensional Geometry

---

# Introduction

**Three-Dimensional Geometry (3D Geometry)** extends coordinate geometry from two dimensions to three dimensions by introducing a third coordinate axis. It is used to locate the position of points in **space** and to measure the **distance** between them. Three-dimensional geometry has wide applications in **engineering, architecture, robotics, aviation, computer graphics, astronomy, physics, and artificial intelligence**.

---

# 1. Three-Dimensional Coordinate System

## Definition

A point in space is represented using three mutually perpendicular coordinate axes:

- **X-axis**
- **Y-axis**
- **Z-axis**

These axes intersect at the

```
Origin O(0,0,0)
```

---

## Coordinates of a Point

A point in space is written as

```
P(x,y,z)
```

where

- **x** = x-coordinate
- **y** = y-coordinate
- **z** = z-coordinate

---

# 2. Coordinate Axes

```
X-axis → Horizontal

Y-axis → Horizontal (perpendicular to X-axis)

Z-axis → Vertical
```

---

# 3. Coordinate Planes

The three coordinate planes are

| Plane    | Equation |
| -------- | -------- |
| XY-plane | z = 0    |
| YZ-plane | x = 0    |
| ZX-plane | y = 0    |

---

# 4. Octants

The three coordinate planes divide the space into

```
8 Octants
```

---

## First Octant

```
x>0

y>0

z>0
```

---

# 5. Distance Between Two Points

If

```
A(x₁,y₁,z₁)

and

B(x₂,y₂,z₂)
```

then

```
AB

=

√[(x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²]
```

---

# 6. Section Formula

If a point

```
P
```

divides the line joining

```
A(x₁,y₁,z₁)

and

B(x₂,y₂,z₂)
```

internally in the ratio

```
m:n
```

then

```
P

=

((mx₂+nx₁)/(m+n),

(my₂+ny₁)/(m+n),

(mz₂+nz₁)/(m+n))
```

---

# 7. Midpoint Formula

The midpoint of

```
A(x₁,y₁,z₁)

and

B(x₂,y₂,z₂)
```

is

```
((x₁+x₂)/2,

(y₁+y₂)/2,

(z₁+z₂)/2)
```

---

# 8. Distance from the Origin

For a point

```
P(x,y,z)
```

Distance from the origin is

```
OP

=

√(x²+y²+z²)
```

---

# 9. Centroid of a Triangle

If the vertices are

```
A(x₁,y₁,z₁)

B(x₂,y₂,z₂)

C(x₃,y₃,z₃)
```

then the centroid is

```
((x₁+x₂+x₃)/3,

(y₁+y₂+y₃)/3,

(z₁+z₂+z₃)/3)
```

---

# 10. Direction Cosines (Basic Idea)

If a line makes angles

```
α, β, γ
```

with the positive

```
X, Y, Z
```

axes respectively, then

```
l = cosα

m = cosβ

n = cosγ
```

are called the **direction cosines**.

---

## Property

```
l²+m²+n²

=

1
```

---

# 11. Direction Ratios

Any numbers proportional to the direction cosines are called **direction ratios**.

If

```
a,b,c
```

are direction ratios,

then

```
l:a

=

m:b

=

n:c
```

---

# Difference Between 2D and 3D Geometry

| Two-Dimensional Geometry     | Three-Dimensional Geometry  |
| ---------------------------- | --------------------------- |
| Uses x and y coordinates     | Uses x, y and z coordinates |
| Represents points on a plane | Represents points in space  |
| Two axes                     | Three axes                  |

---

# Flowchart

```
        THREE-DIMENSIONAL GEOMETRY
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
 Coordinate     Coordinate     Octants
   Axes           Planes
                    │
                    ▼
          Distance Formula
                    │
                    ▼
           Section Formula
                    │
                    ▼
           Midpoint Formula
                    │
                    ▼
        Direction Cosines
                    │
                    ▼
        Direction Ratios
```

---

# Important Formulae

| Concept                     | Formula                                               |
| --------------------------- | ----------------------------------------------------- |
| Point                       | **(x,y,z)**                                           |
| Distance Between Two Points | **√[(x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²]**                     |
| Midpoint                    | **((x₁+x₂)/2,(y₁+y₂)/2,(z₁+z₂)/2)**                   |
| Section Formula             | **((mx₂+nx₁)/(m+n),(my₂+ny₁)/(m+n),(mz₂+nz₁)/(m+n))** |
| Distance from Origin        | **√(x²+y²+z²)**                                       |
| Centroid                    | **((x₁+x₂+x₃)/3,(y₁+y₂+y₃)/3,(z₁+z₂+z₃)/3)**          |
| Direction Cosines           | **l²+m²+n²=1**                                        |

---

# Applications

- Computer graphics and animation.
- Robotics.
- Architecture and construction.
- Aerospace engineering.
- GPS and navigation.
- Satellite communication.
- Mechanical engineering.
- Virtual reality.
- Artificial Intelligence.
- 3D game development.

---

# Solved Examples

## Example 1

### Question

Find the distance between

```
A(1,2,3)

and

B(4,6,3)
```

### Solution

```
AB

=

√[(4−1)²+(6−2)²+(3−3)²]

=

√(9+16)

=

5
```

### Answer

```
5
```

---

## Example 2

### Question

Find the midpoint of

```
A(2,4,6)

and

B(8,10,12)
```

### Solution

```
((2+8)/2,

(4+10)/2,

(6+12)/2)

=

(5,7,9)
```

### Answer

```
(5,7,9)
```

---

## Example 3

### Question

Find the distance of

```
P(2,3,6)
```

from the origin.

### Solution

```
√(2²+3²+6²)

=

√49

=

7
```

### Answer

```
7
```

---

## Example 4

### Question

Find the point dividing the line joining

```
A(1,2,3)

and

B(7,8,9)
```

internally in the ratio

```
1:2
```

### Solution

```
((1×7+2×1)/3,

(1×8+2×2)/3,

(1×9+2×3)/3)

=

(3,4,5)
```

### Answer

```
(3,4,5)
```

---

## Example 5

### Question

Find the centroid of the triangle with vertices

```
(0,0,0),

(3,0,0),

(0,6,0)
```

### Solution

```
((0+3+0)/3,

(0+0+6)/3,

(0+0+0)/3)

=

(1,2,0)
```

### Answer

```
(1,2,0)
```

---

# Common Mistakes

- Confusing **2D coordinates** with **3D coordinates**.
- Forgetting to include the **z-coordinate** in calculations.
- Applying the 2D distance formula instead of the 3D distance formula.
- Using the wrong ratio in the section formula.
- Mixing up coordinate planes (XY, YZ, ZX).
- Ignoring the property **l² + m² + n² = 1** for direction cosines.

---

# Exam Tips

- Always write coordinates in the order **(x, y, z)**.
- Memorize the formulas for **distance**, **midpoint**, and **section**.
- Draw a rough 3D coordinate system whenever possible.
- Check calculations carefully, especially when squaring negative values.
- Practice identifying the correct coordinate plane and octant.

---

# Quick Revision

- Point in space → **(x, y, z)**
- Origin → **(0,0,0)**
- Coordinate Planes → **XY, YZ, ZX**
- Number of Octants → **8**
- Distance Formula → **√[(x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²]**
- Midpoint → **((x₁+x₂)/2,(y₁+y₂)/2,(z₁+z₂)/2)**
- Section Formula → **((mx₂+nx₁)/(m+n),...)**
- Distance from Origin → **√(x²+y²+z²)**
- Direction Cosines → **l²+m²+n²=1**

---

# Chapter Summary

- **Three-Dimensional Geometry** extends coordinate geometry into space using the **x-, y-, and z-axes**.
- Every point in space is represented by an ordered triple **(x, y, z)**, and the three coordinate planes divide space into **eight octants**.
- Important concepts include the **distance formula**, **midpoint formula**, **section formula**, and **distance from the origin**, which are direct extensions of two-dimensional geometry.
- **Direction cosines** and **direction ratios** describe the orientation of a line in space and are fundamental in advanced vector geometry.
- Three-dimensional geometry provides the mathematical foundation for **vectors, planes, lines in space, engineering design, computer graphics, robotics, aerospace, and modern scientific applications**.

# ISC Class 11 Mathematics

# Chapter 14: Limits and Derivatives

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Limits and Derivatives

---

# Introduction

**Limits and Derivatives** form the foundation of **Calculus**. A **limit** describes the behavior of a function as the input approaches a particular value, while a **derivative** measures the instantaneous rate of change of a function. These concepts are widely used in **physics, engineering, economics, optimization, artificial intelligence, robotics, and machine learning**.

---

# 1. Limit of a Function

## Definition

The **limit** of a function is the value that the function approaches as the independent variable approaches a particular point.

Notation

```
lim f(x)
x→a
```

---

## Example

```
lim (2x+3)
x→2

=

7
```

---

# 2. Left-Hand Limit (LHL)

The value approached by the function as

```
x→a⁻
```

Notation

```
lim f(x)
x→a⁻
```

---

# 3. Right-Hand Limit (RHL)

The value approached by the function as

```
x→a⁺
```

Notation

```
lim f(x)
x→a⁺
```

---

# 4. Existence of a Limit

A limit exists if

```
LHL = RHL
```

That is,

```
lim f(x)

=

L
```

only when

```
lim f(x)
x→a⁻

=

lim f(x)
x→a⁺
```

---

# 5. Fundamental Laws of Limits

If

```
lim f(x)=L

and

lim g(x)=M
```

then

### Sum Rule

```
lim[f(x)+g(x)]

=

L+M
```

---

### Difference Rule

```
lim[f(x)-g(x)]

=

L-M
```

---

### Product Rule

```
lim[f(x)g(x)]

=

LM
```

---

### Quotient Rule

```
lim[f(x)/g(x)]

=

L/M

(M≠0)
```

---

# 6. Important Standard Limits

```
lim (sinx/x)

=

1
x→0
```

---

```
lim ((1−cosx)/x)

=

0
x→0
```

---

```
lim ((1+x)¹/ˣ)

=

e
x→0
```

---

```
lim ((aˣ−1)/x)

=

lna
x→0
```

---

# 7. Continuity (Basic Idea)

A function is **continuous** at

```
x=a
```

if

```
lim f(x)

=

f(a)
x→a
```

---

# 8. Derivative

## Definition

The derivative of a function measures its **instantaneous rate of change** or the **slope of the tangent** to the curve.

Notation

```
dy/dx

or

f'(x)
```

---

# 9. First Principle of Derivative

```
f'(x)

=

lim

[h→0]

[f(x+h)-f(x)]/h
```

---

# 10. Standard Derivatives

| Function | Derivative |
| -------- | ---------- |
| c        | 0          |
| x        | 1          |
| x²       | 2x         |
| x³       | 3x²        |
| xⁿ       | nxⁿ⁻¹      |
| sinx     | cosx       |
| cosx     | -sinx      |
| tanx     | sec²x      |
| eˣ       | eˣ         |
| ln x     | 1/x        |

---

# 11. Rules of Differentiation

## Constant Rule

```
d(c)/dx

=

0
```

---

## Power Rule

```
d(xⁿ)/dx

=

nxⁿ⁻¹
```

---

## Sum Rule

```
d(u+v)/dx

=

du/dx

+

dv/dx
```

---

## Difference Rule

```
d(u−v)/dx

=

du/dx

−

dv/dx
```

---

## Product Rule

```
d(uv)/dx

=

u(dv/dx)

+

v(du/dx)
```

---

## Quotient Rule

```
d(u/v)/dx

=

[v(du/dx)-u(dv/dx)]

/

v²
```

---

# 12. Geometrical Meaning of Derivative

The derivative at a point gives the

```
Slope of the Tangent
```

to the curve at that point.

---

# Difference Between Limit and Derivative

| Limit                        | Derivative               |
| ---------------------------- | ------------------------ |
| Describes approaching value  | Describes rate of change |
| Basis of continuity          | Basis of calculus        |
| May exist without derivative | Defined using limits     |

---

# Flowchart

```
          LIMITS & DERIVATIVES
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
      Limits     LHL/RHL  Continuity
                  │
                  ▼
           Standard Limits
                  │
                  ▼
             Derivative
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
 First Principle  Rules   Applications
```

---

# Important Formulae

| Concept            | Formula                      |
| ------------------ | ---------------------------- |
| Limit              | **lim f(x)**                 |
| Existence of Limit | **LHL = RHL**                |
| First Principle    | **lim[h→0] (f(x+h)-f(x))/h** |
| d(xⁿ)/dx           | **nxⁿ⁻¹**                    |
| d(sinx)/dx         | **cosx**                     |
| d(cosx)/dx         | **-sinx**                    |
| d(tanx)/dx         | **sec²x**                    |
| Product Rule       | **u(dv/dx)+v(du/dx)**        |
| Quotient Rule      | **[v(du/dx)-u(dv/dx)]/v²**   |

---

# Applications

- Motion and velocity.
- Optimization problems.
- Engineering design.
- Economics (marginal cost and revenue).
- Artificial Intelligence.
- Machine learning optimization.
- Robotics.
- Signal processing.
- Computer graphics.
- Physics.

---

# Solved Examples

## Example 1

### Question

Find

```
lim (2x+5)
x→3
```

### Solution

```
2(3)+5

=

11
```

### Answer

```
11
```

---

## Example 2

### Question

Evaluate

```
lim (sinx/x)
x→0
```

### Solution

Using the standard limit,

```
lim (sinx/x)

=

1
```

### Answer

```
1
```

---

## Example 3

### Question

Find the derivative of

```
x⁵
```

### Solution

Using the power rule,

```
d(x⁵)/dx

=

5x⁴
```

### Answer

```
5x⁴
```

---

## Example 4

### Question

Differentiate

```
3x²+4x−7
```

### Solution

```
6x+4
```

### Answer

```
6x+4
```

---

## Example 5

### Question

Differentiate

```
sinx+cosx
```

### Solution

```
cosx−sinx
```

### Answer

```
cosx−sinx
```

---

# Common Mistakes

- Confusing **limits** with function values.
- Forgetting that a limit exists only when **LHL = RHL**.
- Applying differentiation rules incorrectly.
- Ignoring constants during differentiation.
- Using the product rule where the power rule is sufficient.
- Forgetting the negative sign in **d(cosx)/dx = -sinx**.

---

# Exam Tips

- Memorize the standard limits and derivative formulas.
- Check whether **LHL** and **RHL** are equal before concluding that a limit exists.
- Simplify algebraic expressions before evaluating limits.
- Use the appropriate differentiation rule for each function.
- Practice derivatives of polynomial, trigonometric, exponential, and logarithmic functions.

---

# Quick Revision

- **Limit** → Value approached by a function.
- **LHL = RHL** ⇒ Limit exists.
- **Derivative** → Instantaneous rate of change.
- **First Principle** → **lim[h→0] (f(x+h)-f(x))/h**
- **d(xⁿ)/dx = nxⁿ⁻¹**
- **d(sinx)/dx = cosx**
- **d(cosx)/dx = -sinx**
- **d(tanx)/dx = sec²x**
- **Product Rule** → **u(dv/dx)+v(du/dx)**
- **Quotient Rule** → **[v(du/dx)-u(dv/dx)]/v²**

---

# Chapter Summary

- **Limits** describe the behavior of functions as the independent variable approaches a particular value and form the basis for continuity and calculus.
- A limit exists only when the **left-hand limit** and **right-hand limit** are equal.
- The **derivative** measures the instantaneous rate of change of a function and represents the slope of the tangent to its graph.
- Differentiation is performed using standard rules such as the **power rule**, **sum rule**, **product rule**, and **quotient rule**.
- Standard derivatives of polynomial, trigonometric, exponential, and logarithmic functions are fundamental for solving calculus problems.
- Limits and derivatives are essential tools in **science, engineering, economics, robotics, artificial intelligence, optimization, and modern technology**, forming the foundation for advanced calculus.

# ISC Class 11 Mathematics

# Chapter 15: Statistics

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Statistics

---

# Introduction

**Statistics** is the branch of mathematics concerned with the **collection, organization, presentation, analysis, and interpretation of numerical data**. It helps in making informed decisions based on data and is widely used in **economics, business, engineering, medicine, artificial intelligence, data science, research, and social sciences**.

---

# 1. Statistics

## Definition

Statistics is the science of collecting, classifying, presenting, analyzing, and interpreting numerical data.

---

## Types of Data

### Primary Data

Data collected by the investigator for the first time.

**Examples**

- Survey data
- Questionnaire responses
- Experimental observations

---

### Secondary Data

Data collected by someone else and used by the investigator.

**Examples**

- Census reports
- Government publications
- Research journals

---

# 2. Classification of Data

Data can be classified into:

- Individual Series
- Discrete Series
- Continuous Series

---

# 3. Frequency Distribution

A **frequency distribution** shows the number of observations corresponding to different values or class intervals.

---

## Terms Used

### Class Interval

Difference between upper and lower limits.

Example

```
10–20
```

---

### Class Limits

- Lower Limit
- Upper Limit

---

### Class Width

```
Upper Limit − Lower Limit
```

---

### Mid-point (Class Mark)

```
(Lower Limit + Upper Limit)/2
```

---

# 4. Measures of Central Tendency

These measures represent the central value of a dataset.

They are

- Mean
- Median
- Mode

---

# 5. Arithmetic Mean

## Definition

The arithmetic mean is the sum of all observations divided by the total number of observations.

---

## Formula (Individual Series)

```
Mean

=

Σx/n
```

---

## Formula (Discrete Frequency Distribution)

```
Mean

=

Σfx/Σf
```

---

## Assumed Mean Method

```
Mean

=

A+(Σfd/Σf)
```

where

```
d=x−A
```

---

## Step-Deviation Method

```
Mean

=

A+h(Σfu/Σf)
```

where

```
u=(x−A)/h
```

---

# 6. Median

## Definition

The median is the middle observation when the data are arranged in ascending or descending order.

---

## Formula (Individual Series)

If

```
n
```

is odd,

```
Median=(n+1)/2 th observation
```

---

## Formula (Continuous Series)

```
Median

=

L+

[(N/2−cf)/f]×h
```

where

- L = Lower boundary of median class
- N = Total frequency
- cf = Cumulative frequency before median class
- f = Frequency of median class
- h = Class width

---

# 7. Mode

## Definition

Mode is the value that occurs with the highest frequency.

---

## Formula (Continuous Series)

```
Mode

=

L+

[(f₁−f₀)/(2f₁−f₀−f₂)]×h
```

where

- L = Lower boundary
- f₀ = Previous frequency
- f₁ = Modal class frequency
- f₂ = Next frequency

---

# 8. Empirical Relation

For a moderately symmetrical distribution,

```
Mode

=

3Median−2Mean
```

---

# 9. Measures of Dispersion

Dispersion indicates the spread of observations.

Common measures include

- Range
- Mean Deviation
- Variance
- Standard Deviation

---

# 10. Range

## Formula

```
Range

=

Largest Observation−Smallest Observation
```

---

## Coefficient of Range

```
(L−S)/(L+S)
```

where

- L = Largest value
- S = Smallest value

---

# 11. Variance

Variance is the average of the squared deviations from the mean.

---

## Formula

```
Variance

=

Σ(x−x̄)²/n
```

---

# 12. Standard Deviation

## Definition

Standard deviation is the positive square root of variance.

---

## Formula

```
σ

=

√[Σ(x−x̄)²/n]
```

---

## Shortcut Formula

```
σ

=

√[(Σfx²/Σf)−x̄²]
```

---

# 13. Coefficient of Variation (CV)

It is used to compare the consistency of two or more datasets.

---

## Formula

```
CV

=

(σ/Mean)×100
```

---

# Difference Between Mean, Median and Mode

| Mean                       | Median              | Mode                       |
| -------------------------- | ------------------- | -------------------------- |
| Arithmetic average         | Middle observation  | Most frequent observation  |
| Affected by extreme values | Less affected       | Not affected significantly |
| Uses all observations      | Depends on position | Depends on frequency       |

---

# Difference Between Dispersion Measures

| Measure                  | Description                                    |
| ------------------------ | ---------------------------------------------- |
| Range                    | Difference between largest and smallest values |
| Variance                 | Average squared deviation                      |
| Standard Deviation       | Square root of variance                        |
| Coefficient of Variation | Relative measure of dispersion                 |

---

# Flowchart

```
               STATISTICS
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
     Data      Frequency     Classification
                    │
                    ▼
      Measures of Central Tendency
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
      Mean       Median       Mode
                    │
                    ▼
      Measures of Dispersion
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
      Range     Variance   Standard Deviation
                    │
                    ▼
        Coefficient of Variation
```

---

# Important Formulae

| Concept                  | Formula                       |
| ------------------------ | ----------------------------- |
| Mean                     | **Σx/n**                      |
| Mean (Frequency)         | **Σfx/Σf**                    |
| Median (Continuous)      | **L+[(N/2−cf)/f]×h**          |
| Mode (Continuous)        | **L+[(f₁−f₀)/(2f₁−f₀−f₂)]×h** |
| Empirical Relation       | **Mode = 3Median − 2Mean**    |
| Range                    | **Largest − Smallest**        |
| Variance                 | **Σ(x−x̄)²/n**                 |
| Standard Deviation       | **√Variance**                 |
| Coefficient of Variation | **(σ/Mean)×100**              |

---

# Applications

- Data Science and Analytics.
- Artificial Intelligence.
- Machine Learning.
- Business forecasting.
- Economics.
- Medical research.
- Quality control.
- Government census.
- Market research.
- Sports analytics.

---

# Solved Examples

## Example 1

### Question

Find the mean of

```
4, 6, 8, 10, 12
```

### Solution

```
Mean

=

(4+6+8+10+12)/5

=

40/5

=

8
```

### Answer

```
8
```

---

## Example 2

### Question

Find the median of

```
2, 5, 7, 9, 12
```

### Solution

The middle observation is

```
7
```

### Answer

```
7
```

---

## Example 3

### Question

Find the mode of

```
3, 5, 5, 6, 8
```

### Solution

The value occurring most frequently is

```
5
```

### Answer

```
5
```

---

## Example 4

### Question

Find the range of

```
12, 18, 25, 30
```

### Solution

```
30−12

=

18
```

### Answer

```
18
```

---

## Example 5

### Question

If the variance of a dataset is

```
49
```

find the standard deviation.

### Solution

```
σ

=

√49

=

7
```

### Answer

```
7
```

---

# Common Mistakes

- Confusing **mean**, **median**, and **mode**.
- Ignoring frequencies while calculating the mean.
- Selecting the wrong median class in grouped data.
- Using incorrect class boundaries in grouped distributions.
- Forgetting to square deviations while computing variance.
- Confusing variance with standard deviation.

---

# Exam Tips

- Memorize all formulas for **mean, median, mode, variance, and standard deviation**.
- Arrange raw data in ascending order before finding the median.
- Identify the modal class correctly before applying the mode formula.
- Verify cumulative frequencies carefully in grouped data.
- Practice shortcut methods to save time in examinations.

---

# Quick Revision

- Statistics → Collection, analysis, and interpretation of data.
- Mean → **Σx/n**
- Mean (Frequency) → **Σfx/Σf**
- Median (Grouped) → **L+[(N/2−cf)/f]×h**
- Mode (Grouped) → **L+[(f₁−f₀)/(2f₁−f₀−f₂)]×h**
- Empirical Relation → **Mode = 3Median − 2Mean**
- Range → **Largest − Smallest**
- Variance → **Σ(x−x̄)²/n**
- Standard Deviation → **√Variance**
- Coefficient of Variation → **(σ/Mean)×100**

---

# Chapter Summary

- **Statistics** deals with the collection, organization, presentation, analysis, and interpretation of numerical data.
- Data can be classified into **individual, discrete, and continuous series**, and represented using frequency distributions.
- The **measures of central tendency**—**mean, median, and mode**—describe the central value of a dataset.
- The **measures of dispersion**—**range, variance, standard deviation, and coefficient of variation**—measure the spread and consistency of data.
- The **empirical relation** between mean, median, and mode is useful for moderately symmetrical distributions.
- Statistics is indispensable in **data science, artificial intelligence, economics, engineering, business analytics, medicine, and scientific research**, enabling informed decision-making through data analysis.
