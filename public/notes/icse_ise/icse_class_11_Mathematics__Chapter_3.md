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

