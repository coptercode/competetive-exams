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

