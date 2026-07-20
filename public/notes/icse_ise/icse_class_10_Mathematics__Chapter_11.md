# Chapter 11: Section and Mid-Point Formulae

> **Board:** ICSE
> **Class:** 10
> **Subject:** Mathematics
> **Chapter:** Section and Mid-Point Formulae

---

# Introduction

Coordinate Geometry enables us to represent geometric figures using coordinates on the Cartesian plane. The **Section Formula** is used to find the coordinates of a point that divides a line segment in a given ratio, while the **Mid-Point Formula** determines the point exactly halfway between two endpoints. These concepts are widely used in geometry, engineering, surveying, navigation, and computer graphics.

---

# 1. Distance Between Two Points (Revision)

Before studying the Section Formula, it is useful to recall the distance formula.

## Formula

If

```
A(x₁, y₁)

and

B(x₂, y₂)
```

then

```
AB

=

√[(x₂−x₁)²+(y₂−y₁)²]
```

---

# 2. Section Formula (Internal Division)

## Definition

The **Section Formula** is used to find the coordinates of a point that divides a line segment internally in a given ratio.

Suppose

```
P(x, y)
```

divides

```
A(x₁,y₁)

and

B(x₂,y₂)
```

internally in the ratio

```
m : n
```

---

## Formula

```
          mx₂ + nx₁
x = -------------------
           m + n
```

```
          my₂ + ny₁
y = -------------------
           m + n
```

---

## Important Note

The numerator always contains the **opposite endpoint**.

---

## Example

Find the point dividing

```
A(2,3)

and

B(8,9)
```

in the ratio

```
2 : 1
```

### Solution

```
x

=

(2×8)+(1×2)

────────────

3

=

18/3

=

6
```

```
y

=

(2×9)+(1×3)

────────────

3

=

21/3

=

7
```

### Answer

```
(6,7)
```

---

# 3. External Division

## Definition

A point divides a line segment **externally** if it lies outside the line segment.

---

## Formula

```
          mx₂ − nx₁
x = -------------------
           m − n
```

```
          my₂ − ny₁
y = -------------------
           m − n
```

where

```
m ≠ n
```

---

## Example

Find the point dividing

```
A(2,4)

and

B(8,10)
```

externally in the ratio

```
2 : 1
```

### Solution

```
x

=

16−2

─────

1

=

14
```

```
y

=

20−4

─────

1

=

16
```

### Answer

```
(14,16)
```

---

# 4. Mid-Point Formula

## Definition

The midpoint of a line segment is the point that divides it into two equal parts.

---

## Formula

If

```
A(x₁,y₁)

and

B(x₂,y₂)
```

then the midpoint is

```
       x₁+x₂
x = ------------

          2
```

```
       y₁+y₂
y = ------------

          2
```

---

### Combined Formula

```
        x₁+x₂   y₁+y₂
M = ( -------- , -------- )
           2        2
```

---

## Example

Find the midpoint of

```
A(3,5)

and

B(9,11)
```

### Solution

```
x

=

3+9

────

2

=

6
```

```
y

=

5+11

────

2

=

8
```

### Answer

```
(6,8)
```

---

# 5. Centroid of a Triangle

## Definition

The **Centroid** is the point where the three medians of a triangle intersect.

It divides each median in the ratio

```
2 : 1
```

---

## Formula

If the vertices are

```
A(x₁,y₁)

B(x₂,y₂)

C(x₃,y₃)
```

then

```
         x₁+x₂+x₃
x = ----------------

             3
```

```
         y₁+y₂+y₃
y = ----------------

             3
```

---

### Example

Find the centroid of

```
A(0,0)

B(6,0)

C(3,9)
```

### Solution

```
x

=

0+6+3

─────

3

=

3
```

```
y

=

0+0+9

─────

3

=

3
```

### Answer

```
(3,3)
```

---

# 6. Finding the Ratio

Sometimes the coordinates of the dividing point are given, and the ratio must be determined.

---

## Method

1. Assume the ratio is

```
k : 1
```

2. Substitute into the section formula.

3. Solve for

```
k
```

---

## Example

Point

```
(8,5)
```

divides the line joining

```
(2,2)

and

(10,6)
```

Find the ratio.

### Solution

Using the x-coordinate,

```
8

=

10k+2

────────

k+1
```

```
8k+8

=

10k+2
```

```
2k

=

6
```

```
k

=

3
```

### Answer

```
3 : 1
```

---

# Applications

Section and Midpoint Formulae are used in

- Surveying
- Navigation
- Civil Engineering
- Computer Graphics
- Architecture
- GIS Mapping
- Robotics
- Physics

---

# Solved Examples

## Example 1

### Question

Find the midpoint of

```
(4,8)

and

(10,2)
```

### Solution

```
x

=

14/2

=

7
```

```
y

=

10/2

=

5
```

### Answer

```
(7,5)
```

---

## Example 2

### Question

Find the point dividing

```
(1,3)

and

(7,9)
```

internally in the ratio

```
1 : 2
```

### Solution

```
x

=

1×7+2×1

────────

3

=

3
```

```
y

=

1×9+2×3

────────

3

=

5
```

### Answer

```
(3,5)
```

---

## Example 3

### Question

Find the centroid of the triangle whose vertices are

```
(2,1)

(8,4)

(5,10)
```

### Solution

```
x

=

15/3

=

5
```

```
y

=

15/3

=

5
```

### Answer

```
(5,5)
```

---

## Example 4

### Question

Find the point dividing

```
(3,2)

and

(9,8)
```

externally in the ratio

```
2 : 1
```

### Solution

```
x

=

18−3

────

1

=

15
```

```
y

=

16−2

────

1

=

14
```

### Answer

```
(15,14)
```

---

## Example 5

### Question

Find the distance between

```
(2,3)

and

(8,11)
```

### Solution

```
AB

=

√[(8−2)²+(11−3)²]

=

√(36+64)

=

√100

=

10
```

### Answer

```
10 units
```

---

# Common Mistakes

- Interchanging the values of **m** and **n** in the Section Formula.
- Forgetting that the numerator contains the **opposite endpoint**.
- Using the internal division formula for external division problems.
- Applying the midpoint formula incorrectly by adding only one coordinate.
- Making arithmetic errors while averaging coordinates.
- Confusing the centroid formula with the midpoint formula.
- Forgetting that the centroid divides each median in the ratio **2 : 1**.
- Using **m = n** in the external division formula, which makes the denominator zero.

---

# Formula Sheet

| Formula                              | Description                |
| ------------------------------------ | -------------------------- |
| **AB = √[(x₂−x₁)² + (y₂−y₁)²]**      | Distance Formula           |
| **x = (mx₂ + nx₁)/(m+n)**            | Section Formula (Internal) |
| **y = (my₂ + ny₁)/(m+n)**            | Section Formula (Internal) |
| **x = (mx₂ − nx₁)/(m−n)**            | Section Formula (External) |
| **y = (my₂ − ny₁)/(m−n)**            | Section Formula (External) |
| **M = ((x₁+x₂)/2, (y₁+y₂)/2)**       | Midpoint Formula           |
| **G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)** | Centroid Formula           |

---

# Chapter Summary

- The **Section Formula** is used to determine the coordinates of a point dividing a line segment in a given ratio.
- For **internal division**, the coordinates are calculated using the weighted average of the endpoints.
- For **external division**, subtraction is used in the numerator and denominator.
- The **Midpoint Formula** gives the coordinates of the point exactly halfway between two endpoints.
- The **Centroid** of a triangle is obtained by averaging the coordinates of its three vertices and divides each median in the ratio **2 : 1**.
- The **Distance Formula** is often used along with the section and midpoint formulas in coordinate geometry.
- These formulas are widely applied in geometry, engineering, surveying, navigation, computer graphics, and map design.
- Careful substitution of coordinates and correct handling of ratios are essential for solving ICSE Class 10 examination problems accurately.

# ICSE Class 10 Mathematics

