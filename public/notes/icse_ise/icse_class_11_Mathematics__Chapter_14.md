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

