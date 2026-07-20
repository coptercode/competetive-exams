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

