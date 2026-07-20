# Chapter 2: Complex Numbers

> **Subject:** Mathematics  
> **Class:** 12  
> **Volume:** 1  
> **Chapter:** Complex Numbers

---

# Introduction

Complex numbers extend the concept of real numbers by introducing the imaginary unit.

They are used in:

- Algebra
- Geometry
- Engineering
- Electrical circuits
- Signal processing

---

# 1. Definition of Complex Number

A number of the form:

\[
\boxed{
z=a+ib
}
\]

is called a complex number.

where:

- \(a\) = real part
- \(b\) = imaginary part
- \(i=\sqrt{-1}\)

---

# Parts of a Complex Number

For:

\[
z=a+ib
\]

## Real Part

\[
\boxed{
Re(z)=a
}
\]

---

## Imaginary Part

\[
\boxed{
Im(z)=b
}
\]

---

# 2. Properties of Imaginary Unit

\[
\boxed{i^2=-1}
\]

Powers of i:

\[
i^1=i
\]

\[
i^2=-1
\]

\[
i^3=-i
\]

\[
i^4=1
\]

The cycle repeats every 4 powers.

---

# 3. Types of Complex Numbers

---

# A. Purely Real Number

Imaginary part is zero.

\[
z=a+0i
\]

Example:

\[
5
\]

---

# B. Purely Imaginary Number

Real part is zero.

\[
z=ib
\]

Example:

\[
3i
\]

---

# C. Zero Complex Number

Both parts are zero.

\[
z=0+0i
\]

---

# D. Equal Complex Numbers

Two complex numbers are equal if their real and imaginary parts are equal.

If:

\[
a+ib=c+id
\]

then:

\[
\boxed{a=c,\ b=d}
\]

---

# 4. Algebra of Complex Numbers

Let:

\[
z_1=a+ib
\]

\[
z_2=c+id
\]

---

# Addition

\[
z_1+z_2=(a+c)+i(b+d)
\]

---

# Subtraction

\[
z_1-z_2=(a-c)+i(b-d)
\]

---

# Multiplication

\[
(a+ib)(c+id)
\]

\[
=ac+iad+ibc+i^2bd
\]

Since:

\[
i^2=-1
\]

\[
\boxed{
=(ac-bd)+i(ad+bc)
}
\]

---

# Division of Complex Numbers

To divide:

\[
\frac{a+ib}{c+id}
\]

multiply numerator and denominator by conjugate of denominator.

---

\[
=

\frac{(a+ib)(c-id)}
{(c+id)(c-id)}
\]

---

Denominator:

\[
c^2+d^2
\]

---

Result:

\[
\boxed{
\frac{a+ib}{c+id}
=

\frac{(ac+bd)+i(bc-ad)}
{c^2+d^2}
}
\]

---

# 5. Conjugate of a Complex Number

## Definition

The conjugate of:

\[
z=a+ib
\]

is:

\[
\boxed{
\bar z=a-ib
}
\]

---

# Properties of Conjugates

---

## Property 1

\[
\boxed{
z+\bar z=2a
}
\]

---

## Property 2

\[
\boxed{
z-\bar z=2ib
}
\]

---

## Property 3

\[
\boxed{
z\bar z=a^2+b^2
}
\]

---

# 6. Modulus of Complex Number

## Definition

The distance of a complex number from origin in the complex plane is called modulus.

---

For:

\[
z=a+ib
\]

\[
\boxed{
|z|=\sqrt{a^2+b^2}
}
\]

---

# Properties of Modulus

---

\[
\boxed{
|z|\geq0
}
\]

---

\[
\boxed{
|z_1z_2|=|z_1||z_2|
}
\]

---

\[
\boxed{
\left|\frac{z_1}{z_2}\right|
=

\frac{|z_1|}{|z_2|}
}
\]

---

# 7. Geometrical Representation of Complex Numbers

Complex numbers can be represented on the Argand plane.

---

Axes:

Horizontal axis:

\[
\boxed{\text{Real axis}}
\]

Vertical axis:

\[
\boxed{\text{Imaginary axis}}
\]

---

A complex number:

\[
z=a+ib
\]

is represented by point:

\[
(a,b)
\]

---

# 8. Argument of a Complex Number

## Definition

The angle made by the line joining point z to origin with positive real axis is called argument.

Symbol:

\[
\arg(z)
\]

---

For:

\[
z=a+ib
\]

\[
\boxed{
\tan\theta=\frac ba
}
\]

---

# Principal Argument

The unique value of argument lying between:

\[
\boxed{-\pi<\theta\leq\pi}
\]

is called principal argument.

---

# 9. Polar Form of Complex Number

A complex number can be written as:

\[
\boxed{
z=r(\cos\theta+i\sin\theta)
}
\]

where:

\[
r=|z|
\]

and:

\[
\theta=\arg(z)
\]

---

# 10. Euler Form

Using Euler's theorem:

\[
\boxed{
e^{i\theta}=\cos\theta+i\sin\theta
}
\]

Therefore:

\[
\boxed{
z=re^{i\theta}
}
\]

---

# Relation Between Cartesian and Polar Form

Cartesian:

\[
z=a+ib
\]

Polar:

\[
z=r(\cos\theta+i\sin\theta)
\]

where:

\[
a=r\cos\theta
\]

\[
b=r\sin\theta
\]

---

# 11. De Moivre's Theorem

## Statement

For any integer n:

\[
\boxed{
(\cos\theta+i\sin\theta)^n
=

\cos n\theta+i\sin n\theta
}
\]

---

# Application 1: Powers of Complex Numbers

If:

\[
z=r(\cos\theta+i\sin\theta)
\]

then:

\[
\boxed{
z^n=r^n(\cos n\theta+i\sin n\theta)
}
\]

---

# Application 2: Roots of Complex Numbers

The nth roots of:

\[
z=r(\cos\theta+i\sin\theta)
\]

are:

\[
\boxed{
z_k=
r^{1/n}
\left[
\cos\frac{\theta+2k\pi}{n}
+i\sin\frac{\theta+2k\pi}{n}
\right]
}
\]

where:

\[
k=0,1,2,...,n-1
\]

---

# 12. Roots of Unity

Equation:

\[
z^n=1
\]

---

Since:

\[
1=\cos2k\pi+i\sin2k\pi
\]

roots are:

\[
\boxed{
z_k=
\cos\frac{2k\pi}{n}
+i\sin\frac{2k\pi}{n}
}
\]

where:

\[
k=0,1,...,n-1
\]

---

# Properties of Roots of Unity

1. There are n roots.
2. They lie equally spaced on a circle.
3. Sum of roots:

\[
\boxed{0}
\]

for \(n>1\).

---

# 13. Geometrical Meaning

Multiplication by a complex number causes:

- Change in magnitude
- Rotation in the Argand plane

---

If:

\[
z=re^{i\theta}
\]

then:

- r changes length
- θ changes direction

---

# Comparison Tables

## Real vs Complex Numbers

| Real Numbers               | Complex Numbers             |
| -------------------------- | --------------------------- |
| No imaginary part          | Contains imaginary part     |
| Represented on number line | Represented on Argand plane |
| Example: 5                 | Example: 5+3i               |

---

## Cartesian vs Polar Form

| Cartesian Form    | Polar Form                    |
| ----------------- | ----------------------------- |
| \(a+ib\)          | \(r(\cos\theta+i\sin\theta)\) |
| Uses coordinates  | Uses modulus and argument     |
| Easy for addition | Easy for multiplication       |

---

# Important Formula Sheet

## Complex Number

\[
z=a+ib
\]

---

## Modulus

\[
|z|=\sqrt{a^2+b^2}
\]

---

## Conjugate

\[
\bar z=a-ib
\]

---

## Polar Form

\[
z=r(\cos\theta+i\sin\theta)
\]

---

## Euler Form

\[
z=re^{i\theta}
\]

---

## De Moivre Theorem

\[
(\cos\theta+i\sin\theta)^n
=

\cos n\theta+i\sin n\theta
\]

---

## nth Roots

\[
z_k=
r^{1/n}
\left[
\cos\frac{\theta+2k\pi}{n}
+i\sin\frac{\theta+2k\pi}{n}
\right]
\]

---

# Solved Examples

## Example 1

Find modulus of:

\[
z=3+4i
\]

Formula:

\[
|z|=\sqrt{a^2+b^2}
\]

\[
=\sqrt{3^2+4^2}
\]

\[
=\sqrt{25}
\]

\[
\boxed{|z|=5}
\]

---

## Example 2

Find conjugate of:

\[
z=5-7i
\]

Change sign of imaginary part:

\[
\boxed{\bar z=5+7i}
\]

---

## Example 3

Convert:

\[
z=1+i
\]

into polar form.

Modulus:

\[
r=\sqrt{1^2+1^2}
\]

\[
r=\sqrt2
\]

Argument:

\[
\tan\theta=1
\]

\[
\theta=\frac\pi4
\]

Therefore:

\[
\boxed{
z=\sqrt2
(\cos\frac\pi4+i\sin\frac\pi4)
}
\]

---

## Example 4

Find:

\[
(1+i)^2
\]

\[
=1+2i+i^2
\]

\[
=1+2i-1
\]

\[
\boxed{=2i}
\]

---

## Example 5

Find fourth roots of unity.

Equation:

\[
z^4=1
\]

Roots:

\[
\boxed{
1,\ i,\ -1,\ -i
}
\]

---

# Common Mistakes

- Forgetting:

\[
i^2=-1
\]

- Confusing modulus with argument.
- Using wrong quadrant while finding argument.
- Forgetting conjugate changes only imaginary sign.
- Applying De Moivre theorem without converting to polar form.
- Missing all roots when solving \(z^n=1\).
- Confusing Euler form with exponential growth.

---

# Chapter Summary

- Complex numbers extend real numbers using \(i=\sqrt{-1}\).
- Every complex number has real and imaginary parts.
- Complex numbers can be represented geometrically on the Argand plane.
- Modulus gives distance from origin.
- Polar and Euler forms simplify multiplication and powers.
- De Moivre's theorem helps find powers and roots.
- Roots of unity are equally spaced points on a circle.

\[
\boxed{
z=r(\cos\theta+i\sin\theta)=re^{i\theta}
}
\]

# Tamil Nadu State Board Class 12 Mathematics Volume 1

