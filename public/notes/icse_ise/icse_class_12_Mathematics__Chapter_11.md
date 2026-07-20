# Chapter 11: Three-Dimensional Geometry

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Three-Dimensional Geometry

(Topics covered from uploaded ISC Class 12 Mathematics outline: direction cosines, direction ratios, equations of lines and planes, angles, distances, and geometric relationships in 3D space) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Three-Dimensional Geometry** deals with geometry in space having three dimensions:

- Length
- Breadth
- Height

Unlike two-dimensional geometry, points in space are represented using three coordinates:

\[
(x,y,z)
\]

Applications:

- Engineering design
- Computer graphics
- Robotics
- Physics
- Navigation systems
- Architecture

---

# 1. Coordinate System in 3D

A point in three-dimensional space is represented as:

\[
P(x,y,z)
\]

where:

- x → distance along x-axis
- y → distance along y-axis
- z → distance along z-axis

---

# Distance Between Two Points

For points:

\[
P(x_1,y_1,z_1)
\]

and

\[
Q(x_2,y_2,z_2)
\]

Distance:

\[
PQ=
\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}
\]

---

# Example

Find distance between:

\[
(1,2,3)
\]

and

\[
(4,6,8)
\]

Solution:

\[
d=\sqrt{(4-1)^2+(6-2)^2+(8-3)^2}
\]

\[
=\sqrt{9+16+25}
\]

\[
=\sqrt{50}
\]

Answer:

\[
5\sqrt2
\]

---

# 2. Section Formula in 3D

If point P divides the line joining:

\[
A(x_1,y_1,z_1)
\]

and

\[
B(x_2,y_2,z_2)
\]

in ratio:

\[
m:n
\]

then:

\[
P=
\left(
\frac{mx_2+nx_1}{m+n},
\frac{my_2+ny_1}{m+n},
\frac{mz_2+nz_1}{m+n}
\right)
\]

---

# Midpoint Formula

For midpoint:

\[
m=n
\]

Therefore:

\[
P=
\left(
\frac{x_1+x_2}{2},
\frac{y_1+y_2}{2},
\frac{z_1+z_2}{2}
\right)
\]

---

# 3. Direction Ratios (DRs)

## Definition

Numbers proportional to the direction cosines of a line are called direction ratios.

Represented as:

\[
a,b,c
\]

---

# Relation Between DR and DC

If direction ratios are:

\[
a,b,c
\]

then direction cosines:

\[
l=\frac{a}{\sqrt{a^2+b^2+c^2}}
\]

\[
m=\frac{b}{\sqrt{a^2+b^2+c^2}}
\]

\[
n=\frac{c}{\sqrt{a^2+b^2+c^2}}
\]

---

# 4. Direction Cosines

If a line makes angles:

\[
\alpha,\beta,\gamma
\]

with x,y,z axes:

Then:

\[
l=\cos\alpha
\]

\[
m=\cos\beta
\]

\[
n=\cos\gamma
\]

---

# Important Relation

\[
l^2+m^2+n^2=1
\]

---

# 5. Equation of a Line in 3D

A line passing through point:

\[
(x_1,y_1,z_1)
\]

and having direction ratios:

\[
a,b,c
\]

is:

---

# Vector Form

\[
\vec r=\vec a+\lambda \vec b
\]

---

# Cartesian Form

\[
\frac{x-x_1}{a}
=

\frac{y-y_1}{b}
=

\frac{z-z_1}{c}
\]

---

# Example

Find equation of line passing through:

\[
(1,2,3)
\]

with DR:

\[
2,3,4
\]

Solution:

\[
\frac{x-1}{2}
=

\frac{y-2}{3}
=

\frac{z-3}{4}
\]

---

# 6. Angle Between Two Lines

If two lines have direction ratios:

\[
a_1,b_1,c_1
\]

and

\[
a_2,b_2,c_2
\]

then:

\[
\cos\theta=
\frac{
a_1a_2+b_1b_2+c_1c_2
}
{
\sqrt{a_1^2+b_1^2+c_1^2}
\sqrt{a_2^2+b_2^2+c_2^2}
}
\]

---

# Parallel Lines

Direction ratios are proportional:

\[
\frac{a_1}{a_2}
=

\frac{b_1}{b_2}
=

\frac{c_1}{c_2}
\]

---

# Perpendicular Lines

Angle:

\[
\theta=90^\circ
\]

Therefore:

\[
a_1a_2+b_1b_2+c_1c_2=0
\]

---

# 7. Shortest Distance Between Two Lines

For two skew lines:

\[
\vec r=\vec a_1+\lambda\vec b_1
\]

and

\[
\vec r=\vec a_2+\mu\vec b_2
\]

Shortest distance:

\[
D=
\frac{
|(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)|
}
{
|\vec b_1\times\vec b_2|
}
\]

---

# 8. Plane in 3D

## Definition

A plane is a flat surface extending infinitely in three dimensions.

---

# General Equation

\[
ax+by+cz+d=0
\]

where:

\[
a,b,c
\]

are normal vector components.

---

# 9. Plane Through a Point

Plane passing through:

\[
(x_1,y_1,z_1)
\]

with normal vector:

\[
a,b,c
\]

is:

\[
a(x-x_1)+b(y-y_1)+c(z-z_1)=0
\]

---

# 10. Angle Between Two Planes

For planes:

\[
a_1x+b_1y+c_1z+d_1=0
\]

and

\[
a_2x+b_2y+c_2z+d_2=0
\]

Angle:

\[
\cos\theta=
\frac{
a_1a_2+b_1b_2+c_1c_2
}
{
\sqrt{a_1^2+b_1^2+c_1^2}
\sqrt{a_2^2+b_2^2+c_2^2}
}
\]

---

# 11. Distance of Point from Plane

Distance of point:

\[
(x_1,y_1,z_1)
\]

from plane:

\[
ax+by+cz+d=0
\]

is:

\[
D=
\frac{
|ax_1+by_1+cz_1+d|
}
{
\sqrt{a^2+b^2+c^2}
}
\]

---

# 12. Distance Between Two Parallel Planes

For planes:

\[
ax+by+cz+d_1=0
\]

and:

\[
ax+by+cz+d_2=0
\]

Distance:

\[
D=
\frac{|d_1-d_2|}
{\sqrt{a^2+b^2+c^2}}
\]

---

# ASCII Flowchart

```
          THREE DIMENSIONAL GEOMETRY
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
 Coordinates     Lines          Planes
       │             │             │
       ▼             ▼             ▼
 Distance      Direction      Equation
 Formulae      Ratios          of Plane
                     │
                     ▼
              Angles & Distance
```

---

# Important Formulae

| Concept                 | Formula                            |
| ----------------------- | ---------------------------------- |
| Distance                | √((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)      |
| Direction Cosines       | l²+m²+n²=1                         |
| Line Equation           | (x-x₁)/a=(y-y₁)/b=(z-z₁)/c         |
| Angle Between Lines     | cosθ=(a₁a₂+b₁b₂+c₁c₂)/(√Σa₁²√Σa₂²) |
| Plane Equation          | ax+by+cz+d=0                       |
| Point-Plane Distance    |                                    | ax₁+by₁+cz₁+d | /√(a²+b²+c²) |
| Parallel Plane Distance |                                    | d₁-d₂         | /√(a²+b²+c²) |

---

# Solved Examples

## Example 1

Find distance between:

\[
(2,3,4)
\]

and:

\[
(5,7,8)
\]

Solution:

\[
d=\sqrt{3^2+4^2+4^2}
\]

\[
=\sqrt{41}
\]

---

## Example 2

Find direction cosines of:

\[
2i+3j+6k
\]

Magnitude:

\[
=\sqrt{4+9+36}
\]

\[
=7
\]

Therefore:

\[
l=\frac27
\]

\[
m=\frac37
\]

\[
n=\frac67
\]

---

## Example 3

Find equation of line through:

\[
(1,1,1)
\]

with DR:

\[
2,2,3
\]

Solution:

\[
\frac{x-1}{2}
=

\frac{y-1}{2}
=

\frac{z-1}{3}
\]

---

## Example 4

Find distance of point:

\[
(1,2,3)
\]

from plane:

\[
x+y+z=6
\]

Solution:

\[
D=
\frac{|1+2+3-6|}
{\sqrt3}
\]

\[
=0
\]

Point lies on plane.

---

## Example 5

Find angle between vectors:

\[
i+j+k
\]

and:

\[
i-j+k
\]

Dot product:

\[
1-1+1=1
\]

Magnitude:

\[
\sqrt3\times\sqrt3=3
\]

Therefore:

\[
\cos\theta=\frac13
\]

---

# Common Mistakes

- Confusing direction ratios and direction cosines.
- Forgetting normalization while finding cosines.
- Incorrect distance formula.
- Mixing line and plane equations.
- Sign errors in angle calculations.
- Forgetting normal vector in plane equations.

---

# Exam Tips

- Memorize all standard 3D formulas.
- Practice line equation problems.
- Understand relationship between DRs and DCs.
- Practice point-plane distance problems.
- Draw diagrams whenever possible.
- Carefully calculate square roots and signs.

---

# Quick Revision

- Point:

\[
(x,y,z)
\]

- Distance:

\[
\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}
\]

- Line:

\[
\frac{x-x_1}{a}
=

\frac{y-y_1}{b}
=

\frac{z-z_1}{c}
\]

- Plane:

\[
ax+by+cz+d=0
\]

- Direction cosines:

\[
l^2+m^2+n^2=1
\]

- Point-plane distance:

\[
\frac{|ax+by+cz+d|}
{\sqrt{a^2+b^2+c^2}}
\]

---

# Chapter Summary

- **Three-Dimensional Geometry** extends coordinate geometry into space using three coordinates.
- Direction ratios and direction cosines describe the orientation of lines in space.
- Line equations help represent straight paths, while plane equations describe flat surfaces.
- Concepts like **angles, shortest distances, and point-plane distances** solve complex spatial geometry problems.
- 3D geometry has major applications in **engineering, architecture, computer graphics, robotics, physics, and navigation systems**.

# ISC Class 12 Mathematics

