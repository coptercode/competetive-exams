# Chapter 8: Applications of Integrals

> **Board:** CBSE
> **Class:** 12
> **Subject:** Mathematics
> **Chapter:** Applications of Integrals

> **Note:** This chapter explains the geometric applications of definite integrals, particularly in finding the area under a curve, the area between curves, and the area bounded by curves and coordinate axes.

---

# Introduction

Definite integrals have several important applications in geometry and science. One of the most significant applications is finding the **area enclosed by curves**. Integration allows the calculation of areas of regions with curved boundaries that cannot be determined using elementary geometric formulas.

This chapter focuses on:

- Area under a curve
- Area bounded by a curve and coordinate axes
- Area between two curves
- Choosing the appropriate variable of integration

---

# 1. Area Under a Curve

## Definition

The area enclosed by a curve

```

y = f(x)

```

the x-axis, and the vertical lines

```

x = a

and

x = b

```

is given by

```

Area

=

∫ₐᵇ f(x) dx

```

provided

```

f(x) ≥ 0

```

throughout the interval.

---

## Geometrical Interpretation

The definite integral represents the accumulated area of infinitely thin vertical strips.

---

# 2. Area Below the x-axis

If

```

f(x) < 0

```

on the interval

```

[a, b]

```

then

```

∫ₐᵇ f(x) dx

```

is negative.

The actual area is

```

Area

=

−∫ₐᵇ f(x) dx

```

or equivalently,

```

Area

=

∫ₐᵇ |f(x)| dx

```

---

# 3. Area Between a Curve and the x-axis

The general formula is

```

Area

=

∫ₐᵇ |f(x)| dx

```

The interval should be divided wherever the curve crosses the x-axis.

---

## Steps

1. Find the points where

```

f(x)=0

```

2. Split the interval at these points.
3. Integrate separately over each interval.
4. Add the positive areas.

---

# 4. Area Between Two Curves

Suppose

```

y=f(x)

and

y=g(x)

```

where

```

f(x) ≥ g(x)

```

on

```

[a,b]

```

Then

```

Area

=

∫ₐᵇ [f(x)-g(x)] dx

```

---

## Important Rule

Always subtract

```

Upper Curve

−

Lower Curve

```

---

# 5. Area with Respect to the y-axis

If the curves are expressed as

```

x=f(y)

and

x=g(y)

```

then

```

Area

=

∫𝚌ᵈ [Right Curve−Left Curve] dy

```

where

```

y=c

to

y=d

```

---

# 6. Choosing the Variable of Integration

Choose

```

dx

```

when

- Curves are given as

```

y=f(x)

```

- Vertical strips are convenient.

Choose

```

dy

```

when

- Curves are given as

```

x=f(y)

```

- Horizontal strips are convenient.

---

# 7. Area Between a Curve and the y-axis

If

```

x=f(y)

```

then

```

Area

=

∫𝚌ᵈ f(y) dy

```

provided

```

f(y) ≥ 0

```

---

# 8. Symmetry in Area Problems

---

## Symmetry about the y-axis

If

```

f(x)

```

is an even function,

```

Area

=

2∫₀ᵃ f(x) dx

```

---

## Symmetry about the Origin

If

```

f(x)

```

is odd,

```

∫₋ₐᵃ f(x) dx

=

0

```

However, the **area** is not zero because area is always non-negative.

---

# 9. Area of Simple Regions

---

## Area under

```

y=x

```

from

```

0

to

a

```

```

Area

=

∫₀ᵃ x dx

=

a²/2

```

---

## Area under

```

y=x²

```

from

```

0

to

a

```

```

Area

=

∫₀ᵃ x²dx

=

a³/3

```

---

# 10. Area Enclosed by a Parabola

For example,

```

y²=4ax

```

and the line

```

x=a

```

Express

```

x

```

in terms of

```

y

```

and integrate with respect to

```

y

```

over the appropriate limits.

---

# 11. Area Enclosed by a Circle

For the circle

```

x²+y²=r²

```

Upper semicircle

```

y=√(r²−x²)

```

Lower semicircle

```

y=−√(r²−x²)

```

Entire area

```

Area

=

∫₋ᵣʳ

2√(r²−x²)

dx

```

which evaluates to

```

πr²

```

---

# 12. Applications of Area

Applications include:

- Land surveying
- Architecture
- Civil engineering
- Design of bridges
- Estimation of agricultural fields
- Computer graphics
- Physics

---

# Comparison Tables

## Definite Integral vs Area

| Definite Integral | Area |
|-------------------|------|
| May be positive, negative, or zero | Always non-negative |
| Represents signed area | Represents actual enclosed region |

---

## Area with dx vs Area with dy

| dx | dy |
|----|----|
| Vertical strips | Horizontal strips |
| Integrate with respect to x | Integrate with respect to y |
| Upper − Lower | Right − Left |

---

## Area Under Curve vs Area Between Curves

| Under Curve | Between Curves |
|--------------|----------------|
| One function | Two functions |
| Area with x-axis | Difference of functions |

---

# ASCII Diagrams

## Area Under a Curve

```

y

│ *

│ * |

│ * |

│ * |

└──────────── x

Area = ∫f(x)dx

```

---

## Area Between Two Curves

```

Upper Curve

---

\\\\ Area ////

---

Lower Curve

```

---

## Vertical Strip

```

Curve

|

|▌

|▌

|▌

+------------

dx

```

---

## Horizontal Strip

```

────────► dy

█████████

```

---

# Solved Examples

### Example 1

Find the area under

```

y=x²

```

from

```

x=0

to

x=2

```

**Solution**

```

Area

=

∫₀²x²dx

```

```

=

[x³/3]₀²

```

```

=

8/3 square units

```

---

### Example 2

Find the area under

```

y=3x+1

```

from

```

x=0

to

x=4

```

**Solution**

```

Area

=

∫₀⁴(3x+1)dx

```

```

=

[(3x²/2)+x]₀⁴

```

```

=

24+4

=

28 square units

```

---

### Example 3

Find the area between

```

y=x

and

y=x²

```

**Solution**

Points of intersection

```

x=x²

```

```

x(x−1)=0

```

```

x=0,1

```

Upper curve

```

y=x

```

Area

```

=

∫₀¹(x−x²)dx

```

```

=

[x²/2−x³/3]₀¹

```

```

=

1/2−1/3

=

1/6 square unit

```

---

### Example 4

Find the area under

```

y=sinx

```

from

```

0

to

π

```

**Solution**

```

Area

=

∫₀πsinx dx

```

```

=

[-cosx]₀π

```

```

=

2 square units

```

---

### Example 5

Find the area under

```

y=x

```

from

```

0

to

5

```

**Solution**

```

Area

=

∫₀⁵x dx

```

```

=

[x²/2]₀⁵

```

```

=

25/2 square units

```

---

### Example 6

Find the area enclosed by

```

y=4

and

y=x²

```

**Solution**

Intersection points

```

x²=4

```

```

x=±2

```

Area

```

=

∫₋₂²(4−x²)dx

```

Using symmetry,

```

=

2∫₀²(4−x²)dx

```

```

=

2[4x−x³/3]₀²

```

```

=

2(8−8/3)

```

```

=

32/3 square units

```

---

# Common Mistakes

- Treating the value of a **definite integral** as the actual area even when the curve lies below the x-axis.
- Forgetting to use the absolute value or split the interval when the curve crosses the x-axis.
- Subtracting the curves in the wrong order; always use **Upper Curve − Lower Curve** (or **Right Curve − Left Curve** when integrating with respect to **y**).
- Choosing **dx** when **dy** would simplify the calculation, or vice versa.
- Forgetting to determine the points of intersection before setting the limits of integration.
- Ignoring symmetry, which can simplify calculations significantly.
- Making arithmetic errors while evaluating definite integrals at the upper and lower limits.
- Omitting square units in the final answer for area.

---

# Chapter Summary

- The **definite integral** provides a powerful method for calculating areas enclosed by curves.
- The area under a curve above the x-axis is given by **∫ₐᵇf(x)dx**, while the actual area is **∫ₐᵇ|f(x)|dx** when the curve crosses or lies below the x-axis.
- The area between two curves is calculated as **∫(Upper Curve − Lower Curve)dx** or **∫(Right Curve − Left Curve)dy**, depending on the chosen variable of integration.
- The choice between **dx** and **dy** depends on the orientation of the strips and the form of the equations.
- Symmetry about the coordinate axes often simplifies area calculations.
- Definite integrals are widely used in geometry, engineering, architecture, surveying, physics, and many other scientific applications to determine areas enclosed by irregular boundaries.








# CBSE Class 12 Mathematics

