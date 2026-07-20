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

