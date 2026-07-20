# Chapter 6: Permutations and Combinations

> **Board:** CBSE  
> **Class:** 11  
> **Subject:** Mathematics  
> **Chapter:** Permutations and Combinations

---

# Introduction

Many real-life situations involve arranging or selecting objects. For example, arranging books on a shelf, assigning seats to students, selecting a committee, or creating passwords. The branch of mathematics that deals with **counting arrangements and selections** is called **Combinatorics**.

This chapter introduces the **Fundamental Principle of Counting**, **factorials**, **permutations**, and **combinations**, along with their formulas and applications to practical problems involving arrangements and selections.

---

# 1. Fundamental Principle of Counting

The Fundamental Principle of Counting helps determine the total number of possible outcomes of an event.

There are two basic counting principles:

- Multiplication Rule
- Addition Rule

---

## (A) Multiplication Rule

If one operation can be performed in **m** ways and another independent operation in **n** ways, then both operations together can be performed in

```
m × n
```

ways.

### Example

A shirt can be chosen in **4** ways and a pair of trousers in **3** ways.

Total outfits

```
4 × 3 = 12
```

---

## (B) Addition Rule

If one event can occur in **m** ways and another mutually exclusive event in **n** ways, then the total number of ways is

```
m + n
```

### Example

A student may choose either one of **5** science books or one of **4** mathematics books.

Total choices

```
5 + 4 = 9
```

---

# 2. Factorial Notation

The factorial of a positive integer **n** is the product of all positive integers from **1** to **n**.

### Definition

```
n! = n(n−1)(n−2)...3×2×1
```

---

## Examples

```
1! = 1
```

```
2! = 2
```

```
3! = 6
```

```
4! = 24
```

```
5! = 120
```

---

## Zero Factorial

By definition,

```
0! = 1
```

---

## Important Factorial Properties

```
n! = n(n−1)!
```

```
(n+1)! = (n+1)n!
```

```
n! / (n−r)!
=
n(n−1)...(n−r+1)
```

---

# 3. Permutations

A **permutation** is an **arrangement** of objects where the **order is important**.

---

## Permutation Formula

The number of permutations of **r** objects chosen from **n** distinct objects is

```
ⁿPᵣ = n! / (n−r)!
```

where

```
n ≥ r
```

---

## Special Cases

### Arrangement of All Objects

```
ⁿPₙ = n!
```

---

### One Object

```
ⁿP₁ = n
```

---

# 4. Permutations with Repetition

If repetition of objects is allowed, then the number of arrangements of **r** objects selected from **n** distinct objects is

```
nʳ
```

### Example

Number of 3-digit passwords using digits 0–9 (repetition allowed)

```
10³ = 1000
```

---

# 5. Circular Permutations

When objects are arranged in a circle, rotations are considered identical.

### Formula

For **n** distinct objects,

```
(n−1)!
```

arrangements are possible.

### Example

Arrange 5 persons around a round table.

```
(5−1)!

= 4!

= 24
```

---

# 6. Permutations of Identical Objects

If among **n** objects,

- **p** are identical,
- **q** are identical,
- **r** are identical,

then the number of distinct arrangements is

```
n!

/

(p!q!r!...)
```

### Example

Arrange the letters of

```
LEVEL
```

Total letters = 5

Repeated letters

```
L = 2

E = 2

V = 1
```

Number of arrangements

```
5!

/

(2!2!)

=30
```

---

# 7. Combinations

A **combination** is a **selection** of objects where the **order does not matter**.

---

## Combination Formula

The number of combinations of **r** objects selected from **n** distinct objects is

```
ⁿCᵣ

=

n!

/

r!(n−r)!
```

---

## Relationship Between Permutations and Combinations

```
ⁿPᵣ

=

ⁿCᵣ × r!
```

---

# 8. Properties of Combinations

---

## Property 1

```
ⁿC₀ = 1
```

---

## Property 2

```
ⁿCₙ = 1
```

---

## Property 3

```
ⁿC₁ = n
```

---

## Property 4 (Symmetry)

```
ⁿCᵣ

=

ⁿC₍ₙ₋ᵣ₎
```

---

## Property 5 (Pascal's Identity)

```
ⁿCᵣ

+

ⁿC₍ᵣ₋₁₎

=

ⁿ⁺¹Cᵣ
```

---

# 9. Difference Between Permutations and Combinations

| Permutations             | Combinations                 |
| ------------------------ | ---------------------------- |
| Order matters            | Order does not matter        |
| Arrangement              | Selection                    |
| Formula: ⁿPᵣ = n!/(n−r)! | Formula: ⁿCᵣ = n!/[r!(n−r)!] |

---

# 10. Restricted Arrangements

Sometimes arrangements are made under given conditions.

---

## Example 1

Arrange the letters of

```
CAT
```

such that **C** is always first.

Remaining letters

```
A,T
```

can be arranged in

```
2! = 2
```

ways.

---

## Example 2

Arrange 5 students in a row if two specified students always sit together.

Treat the two students as one unit.

Now arrange

```
4 units
```

```
4!
```

Within the pair,

```
2!
```

Hence,

```
4! ×2!

=48
```

---

# 11. Practical Applications

Permutations and combinations are used in:

- Password generation
- Lottery systems
- Team selection
- Seating arrangements
- Tournament scheduling
- Cryptography
- Probability
- Computer science

---

# Solved Examples

### Example 1

Find

```
5!
```

**Solution**

```
5!

=5×4×3×2×1

=120
```

---

### Example 2

Find

```
⁷P₃
```

**Solution**

```
7!

/

4!

```

```
=7×6×5

=210
```

---

### Example 3

Find

```
⁸C₂
```

**Solution**

```
8!

/

2!6!

```

```
=8×7

/

2

=28
```

---

### Example 4

How many committees of 3 members can be formed from 8 people?

**Solution**

```
⁸C₃

=

8!

/

3!5!

```

```
=56
```

---

### Example 5

In how many ways can the letters of

```
BOOK
```

be arranged?

**Solution**

Letters

```
B,O,O,K
```

Repeated

```
O=2
```

Number of arrangements

```
4!

/

2!

=12
```

---

### Example 6

How many ways can 6 people sit around a circular table?

**Solution**

Circular permutations

```
(6−1)!

=5!

=120
```

---

# Common Mistakes

- Confusing **permutations** with **combinations**.
- Forgetting that **order matters** in permutations.
- Using **nPr** instead of **nCr** for selection problems.
- Forgetting that **0! = 1**.
- Ignoring repeated objects while arranging letters of a word.
- Using **n!** instead of **(n−1)!** for circular arrangements.
- Incorrect cancellation while simplifying factorials.
- Forgetting the restrictions given in arrangement problems.

---

# Formula Sheet

### Factorial

```
n!

=n(n−1)!
```

---

### Zero Factorial

```
0!=1
```

---

### Permutations

```
ⁿPᵣ

=

n!

/

(n−r)!
```

---

### Arrangement of All Objects

```
ⁿPₙ=n!
```

---

### Permutations with Repetition

```
nʳ
```

---

### Circular Permutations

```
(n−1)!
```

---

### Permutations of Identical Objects

```
n!

/

(p!q!r!...)
```

---

### Combinations

```
ⁿCᵣ

=

n!

/

r!(n−r)!
```

---

### Relationship

```
ⁿPᵣ

=

ⁿCᵣ×r!
```

---

### Symmetry Property

```
ⁿCᵣ

=

ⁿC₍ₙ₋ᵣ₎
```

---

### Pascal's Identity

```
ⁿCᵣ

+

ⁿC₍ᵣ₋₁₎

=

ⁿ⁺¹Cᵣ
```

---

# Chapter Summary

- The **Fundamental Principle of Counting** consists of the **multiplication rule** and the **addition rule**, which help count the number of possible outcomes.
- The **factorial** of a positive integer is the product of all positive integers up to that number, with **0! = 1**.
- A **permutation** is an arrangement of objects in which the **order matters**.
- A **combination** is a selection of objects in which the **order does not matter**.
- Special cases include **circular permutations**, **permutations with repetition**, and **arrangements of identical objects**.
- Important identities such as **ⁿPᵣ = ⁿCᵣ × r!** and **ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎** simplify many counting problems.
- Permutations and combinations form the foundation for advanced topics in **probability**, **statistics**, **computer science**, and **combinatorics**.

# CBSE Class 11 Mathematics

