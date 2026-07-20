# Chapter 6: Vector Algebra

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 1  
> **Chapter:** Vector Algebra

---

# Introduction

Vector algebra deals with quantities having both magnitude and direction.

Vectors are widely used in:

- Physics
- Engineering
- Geometry
- Mechanics
- Computer graphics

---

# 1. Scalars and Vectors

---

# Scalar Quantity

A quantity having only magnitude is called a scalar.

Examples:

- Mass
- Temperature
- Time
- Distance

---

# Vector Quantity

A quantity having both magnitude and direction is called a vector.

Examples:

- Displacement
- Velocity
- Force
- Acceleration

---

# 2. Representation of Vectors

A vector is represented by:

\[
\vec{a}
\]

or:

\[
\overrightarrow{AB}
\]

where:

- A = initial point
- B = terminal point

---

# 3. Magnitude of a Vector

For:

\[
\vec a=a_1\hat i+a_2\hat j+a_3\hat k
\]

magnitude:

\[
\boxed{
|\vec a|
=

\sqrt{a_1^2+a_2^2+a_3^2}
}
\]

---

# 4. Unit Vector

## Definition

A vector having magnitude one is called a unit vector.

---

For vector:

\[
\vec a
\]

unit vector:

\[
\boxed{
\hat a=\frac{\vec a}{|\vec a|}
}
\]

---

# 5. Position Vector

The vector representing the position of a point from origin is called position vector.

For point:

\[
P(x,y,z)
\]

position vector:

\[
\boxed{
\vec r=x\hat i+y\hat j+z\hat k
}
\]

---

# 6. Addition of Vectors

If:

\[
\vec a=a_1\hat i+a_2\hat j+a_3\hat k
\]

and:

\[
\vec b=b_1\hat i+b_2\hat j+b_3\hat k
\]

then:

\[
\boxed{
\vec a+\vec b
=

(a_1+b_1)\hat i+
(a_2+b_2)\hat j+
(a_3+b_3)\hat k
}
\]

---

# Properties of Vector Addition

## Commutative Property

\[
\boxed{
\vec a+\vec b=\vec b+\vec a
}
\]

---

## Associative Property

\[
\boxed{
(\vec a+\vec b)+\vec c
=

\vec a+(\vec b+\vec c)
}
\]

---

# 7. Section Formula Using Vectors

If point P divides AB internally in ratio:

\[
m:n
\]

then:

\[
\boxed{
\vec p=
\frac{m\vec b+n\vec a}{m+n}
}
\]

---

# 8. Dot Product (Scalar Product)

## Definition

The dot product of two vectors gives a scalar quantity.

---

For vectors:

\[
\vec a,\vec b
\]

\[
\boxed{
\vec a\cdot\vec b
=

|\vec a||\vec b|\cos\theta
}
\]

where θ is angle between vectors.

---

# In Component Form

If:

\[
\vec a=a_1\hat i+a_2\hat j+a_3\hat k
\]

\[
\vec b=b_1\hat i+b_2\hat j+b_3\hat k
\]

then:

\[
\boxed{
\vec a\cdot\vec b
=

a_1b_1+a_2b_2+a_3b_3
}
\]

---

# Properties of Dot Product

---

## Commutative

\[
\boxed{
\vec a\cdot\vec b
=

\vec b\cdot\vec a
}
\]

---

## Distributive

\[
\boxed{
\vec a\cdot(\vec b+\vec c)
=

\vec a\cdot\vec b+
\vec a\cdot\vec c
}
\]

---

# 9. Angle Between Two Vectors

Using:

\[
\vec a\cdot\vec b
=

|\vec a||\vec b|\cos\theta
\]

Therefore:

\[
\boxed{
\cos\theta=
\frac{\vec a\cdot\vec b}
{|\vec a||\vec b|}
}
\]

---

# 10. Applications of Dot Product

---

## Projection of Vector

Projection of:

\[
\vec a
\]

on:

\[
\vec b
\]

is:

\[
\boxed{
\frac{\vec a\cdot\vec b}{|\vec b|}
}
\]

---

## Work Done

Physics application:

\[
\boxed{
W=\vec F\cdot\vec s
}
\]

---

# 11. Cross Product (Vector Product)

## Definition

The cross product of two vectors produces a vector perpendicular to both.

---

Formula:

\[
\boxed{
\vec a\times\vec b
=

|\vec a||\vec b|\sin\theta\hat n
}
\]

where:

\[
\hat n
\]

is unit vector perpendicular to both.

---

# Direction

Given by:

\[
\boxed{\text{Right Hand Rule}}
\]

---

# Component Form

\[
\vec a\times\vec b
=

\begin{vmatrix}
\hat i&\hat j&\hat k\\
a_1&a_2&a_3\\
b_1&b_2&b_3
\end{vmatrix}
\]

---

# Properties of Cross Product

---

## Anti-Commutative

\[
\boxed{
\vec a\times\vec b
=

-\vec b\times\vec a
}
\]

---

## Distributive

\[
\boxed{
\vec a\times(\vec b+\vec c)
=

\vec a\times\vec b+
\vec a\times\vec c
}
\]

---

# 12. Area Using Cross Product

---

# Area of Parallelogram

If two sides are:

\[
\vec a,\vec b
\]

then:

\[
\boxed{
A=|\vec a\times\vec b|
}
\]

---

# Area of Triangle

\[
\boxed{
A=
\frac12|\vec a\times\vec b|
}
\]

---

# 13. Scalar Triple Product

## Definition

The scalar triple product of three vectors is:

\[
\boxed{
\vec a\cdot(\vec b\times\vec c)
}
\]

---

# Geometrical Meaning

It gives the volume of a parallelepiped.

\[
\boxed{
V=
|\vec a\cdot(\vec b\times\vec c)|
}
\]

---

# Condition for Coplanarity

Three vectors are coplanar if:

\[
\boxed{
\vec a\cdot(\vec b\times\vec c)=0
}
\]

---

# 14. Vector Triple Product

Formula:

\[
\boxed{
\vec a\times(\vec b\times\vec c)
=

\vec b(\vec a\cdot\vec c)
-

\vec c(\vec a\cdot\vec b)
}
\]

---

# 15. Equation of a Line in Vector Form

A line passing through point with position vector:

\[
\vec a
\]

and parallel to vector:

\[
\vec b
\]

is:

\[
\boxed{
\vec r=\vec a+\lambda\vec b
}
\]

where:

\[
\lambda
\]

is a scalar parameter.

---

# 16. Cartesian Equation of Line

From:

\[
\vec r=\vec a+\lambda\vec b
\]

we get:

\[
\boxed{
\frac{x-x_1}{a}
=

\frac{y-y_1}{b}
=

\frac{z-z_1}{c}
}
\]

---

# 17. Equation of Plane

A plane passing through point:

\[
\vec a
\]

with normal vector:

\[
\vec n
\]

is:

\[
\boxed{
(\vec r-\vec a)\cdot\vec n=0
}
\]

---

# 18. Cartesian Equation of Plane

\[
\boxed{
ax+by+cz=d
}
\]

where:

\[
(a,b,c)
\]

is normal vector.

---

# Comparison Tables

## Dot Product vs Cross Product

| Dot Product      | Cross Product    |
| ---------------- | ---------------- |
| Gives scalar     | Gives vector     |
| Uses cos θ       | Uses sin θ       |
| Commutative      | Anti-commutative |
| Work calculation | Area calculation |

---

## Scalar vs Vector

| Scalar         | Vector                |
| -------------- | --------------------- |
| Only magnitude | Magnitude + direction |
| Temperature    | Force                 |
| Mass           | Velocity              |

---

# Important Formula Sheet

## Magnitude

\[
|\vec a|
=

\sqrt{a_1^2+a_2^2+a_3^2}
\]

---

## Unit Vector

\[
\hat a=\frac{\vec a}{|\vec a|}
\]

---

## Dot Product

\[
\vec a\cdot\vec b
=

|\vec a||\vec b|\cos\theta
\]

---

## Cross Product

\[
\vec a\times\vec b
=

|\vec a||\vec b|\sin\theta\hat n
\]

---

## Scalar Triple Product

\[
\vec a\cdot(\vec b\times\vec c)
\]

---

## Volume

\[
V=
|\vec a\cdot(\vec b\times\vec c)|
\]

---

## Line Equation

\[
\vec r=\vec a+\lambda\vec b
\]

---

## Plane Equation

\[
(\vec r-\vec a)\cdot\vec n=0
\]

---

# Solved Examples

## Example 1

Find magnitude of:

\[
\vec a=3\hat i+4\hat j
\]

Formula:

\[
|\vec a|
=

\sqrt{3^2+4^2}
\]

\[
=\sqrt{25}
\]

\[
\boxed{|\vec a|=5}
\]

---

## Example 2

Find dot product:

\[
\vec a=2\hat i+3\hat j
\]

\[
\vec b=4\hat i+5\hat j
\]

\[
\vec a\cdot\vec b
=

(2)(4)+(3)(5)
\]

\[
=8+15
\]

\[
\boxed{23}
\]

---

## Example 3

Find angle between perpendicular vectors.

If:

\[
\vec a\cdot\vec b=0
\]

then:

\[
\cos\theta=0
\]

Therefore:

\[
\boxed{\theta=90^\circ}
\]

---

## Example 4

Find volume if:

\[
\vec a,\vec b,\vec c
\]

are given.

Formula:

\[
\boxed{
V=
|\vec a\cdot(\vec b\times\vec c)|
}
\]

---

# Common Mistakes

- Confusing dot product and cross product.
- Forgetting direction in cross product.
- Using cosine instead of sine in cross product.
- Forgetting magnitude in vector formulas.
- Mixing scalar triple product with vector triple product.
- Forgetting that zero scalar triple product means coplanarity.
- Making sign errors in determinant expansion.

---

# Chapter Summary

- Vectors represent quantities with magnitude and direction.
- Dot product gives a scalar and is used for angle and projection.
- Cross product gives a vector and is used for area calculations.
- Triple products help find volume and coplanarity.
- Vector equations simplify lines and planes in three dimensions.

\[
\boxed{
\vec a\cdot(\vec b\times\vec c)
}
\]

represents the volume of a parallelepiped.
