# Chapter 14: Systems of Particles and Rotational Motion

> **Board:** ISC  
> **Class:** 11  
> **Subject:** Physics  
> **Chapter:** Systems of Particles and Rotational Motion

---

# Introduction

A **system of particles** consists of two or more particles considered together for studying their collective motion. When a body rotates about an axis, its motion is described using **rotational dynamics**.

This chapter deals with:

- Centre of mass
- Motion of centre of mass
- Torque
- Angular momentum
- Moment of inertia
- Rotational kinetic energy
- Rolling motion
- Conservation laws

These concepts are essential in **mechanical engineering, astronomy, robotics, and vehicle dynamics**.

---

# 1. System of Particles

## Definition

A system of particles is a collection of particles whose motion is studied together.

---

# Types

### Two-Particle System

Example:

- Earth and Moon system.

---

### Many-Particle System

Example:

- Human body.
- Solar system.

---

# Rigid Body

## Definition

A rigid body is a collection of particles in which the distance between any two particles remains constant.

---

# Examples

- Wheel.
- Disc.
- Fan.
- Rotating machine parts.

---

# Difference Between Particle and Rigid Body

| Particle                  | Rigid Body               |
| ------------------------- | ------------------------ |
| Size neglected            | Size considered          |
| Only translational motion | Translation and rotation |

---

# 2. Centre of Mass

## Definition

The centre of mass is the point where the entire mass of a system appears to be concentrated for studying translational motion.

---

# Position of Centre of Mass

For two particles:

```
xcm = (m₁x₁ + m₂x₂)/(m₁+m₂)
```

---

# General Formula

```
xcm = Σmixi/Σmi
```

Similarly,

```
ycm = Σmiyi/Σmi

zcm = Σmizi/Σmi
```

---

# Centre of Mass of Uniform Bodies

| Body        | Centre of Mass |
| ----------- | -------------- |
| Uniform rod | Middle point   |
| Ring        | Centre         |
| Sphere      | Centre         |
| Disc        | Centre         |

---

# Properties of Centre of Mass

- Depends on mass distribution.
- Can lie inside or outside the body.
- Moves according to external forces.

---

# 3. Motion of Centre of Mass

The centre of mass moves as if the entire mass of the system is concentrated at that point.

---

# Equation

```
F = MaCM
```

Where:

- F = External force
- M = Total mass
- aCM = Acceleration of centre of mass

---

# Conservation of Momentum

If external force is zero:

```
Total Momentum = Constant
```

---

# Applications

- Rocket propulsion.
- Explosions.
- Collisions.

---

# 4. Angular Displacement

## Definition

The angle through which a body rotates about an axis.

---

# Formula

```
θ = s/r
```

Where:

- s = Arc length
- r = Radius

---

# Unit

```
radian (rad)
```

---

# 5. Angular Velocity

## Definition

Rate of change of angular displacement.

---

# Formula

```
ω = dθ/dt
```

---

# Unit

```
rad s⁻¹
```

---

# Relation

```
v = rω
```

---

# 6. Angular Acceleration

## Definition

Rate of change of angular velocity.

---

# Formula

```
α = dω/dt
```

---

# Unit

```
rad s⁻²
```

---

# Relation

```
a = rα
```

---

# 7. Rotational Equations of Motion

Similar to linear equations:

---

## First Equation

```
ω = ω₀ + αt
```

---

## Second Equation

```
θ = ω₀t + ½αt²
```

---

## Third Equation

```
ω² = ω₀² + 2αθ
```

---

# 8. Torque

## Definition

Torque is the turning effect produced by a force.

---

# Formula

```
τ = r × F
```

Magnitude:

```
τ = rF sinθ
```

---

# SI Unit

```
N m
```

---

# Direction

Determined by right-hand thumb rule.

---

# Examples

- Opening a door.
- Rotating a steering wheel.
- Tightening screws.

---

# Difference Between Force and Torque

| Force                | Torque            |
| -------------------- | ----------------- |
| Produces translation | Produces rotation |
| F = ma               | τ = rF            |

---

# 9. Angular Momentum

## Definition

Angular momentum is the rotational equivalent of linear momentum.

---

# Formula

```
L = Iω
```

---

# General Formula

```
L = r × p
```

---

# Unit

```
kg m² s⁻¹
```

---

# Conservation of Angular Momentum

If external torque is zero:

```
L = Constant
```

---

# Examples

- Ice skater spinning.
- Planetary motion.
- Gyroscopes.

---

# 10. Moment of Inertia

## Definition

Moment of inertia is the rotational analogue of mass.

It represents resistance to change in rotational motion.

---

# Formula

```
I = Σmr²
```

---

# SI Unit

```
kg m²
```

---

# Factors Affecting Moment of Inertia

- Mass.
- Shape.
- Size.
- Axis of rotation.

---

# Standard Moments of Inertia

| Object        | Axis   | Moment of Inertia |
| ------------- | ------ | ----------------- |
| Ring          | Centre | MR²               |
| Disc          | Centre | ½MR²              |
| Sphere        | Centre | 2/5MR²            |
| Hollow sphere | Centre | 2/3MR²            |
| Rod           | Centre | 1/12ML²           |
| Rod           | End    | 1/3ML²            |

---

# 11. Radius of Gyration

## Definition

The distance from the axis where the whole mass can be assumed concentrated to produce the same moment of inertia.

---

# Formula

```
I = Mk²
```

---

# Radius

```
k = √(I/M)
```

---

# 12. Theorems of Moment of Inertia

---

# Parallel Axis Theorem

## Statement

Moment of inertia about any axis parallel to an axis through centre of mass:

```
I = Icm + Md²
```

---

# Perpendicular Axis Theorem

For plane lamina:

```
Iz = Ix + Iy
```

---

# 13. Rotational Kinetic Energy

## Definition

Energy possessed by a rotating body.

---

# Formula

```
KE = ½Iω²
```

---

# Total Energy of Rolling Body

```
KE = ½mv² + ½Iω²
```

---

# 14. Rolling Motion

## Definition

Motion involving both translation and rotation.

---

# Condition for Pure Rolling

```
v = rω
```

---

# Examples

- Rolling wheel.
- Moving cylinder.
- Ball rolling on ground.

---

# Difference Between Rolling and Sliding

| Rolling                | Sliding          |
| ---------------------- | ---------------- |
| Rotation + translation | Only translation |
| Static friction        | Kinetic friction |

---

# 15. Equilibrium of Rigid Bodies

A rigid body is in equilibrium when both force and torque are balanced.

---

# Conditions

## Translational Equilibrium

```
ΣF = 0
```

---

## Rotational Equilibrium

```
Στ = 0
```

---

# Principle of Moments

```
Clockwise Moment

=

Anticlockwise Moment
```

---

# ASCII Flowchart

```
          ROTATIONAL MOTION
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
 Centre of Mass  Torque    Moment of Inertia
      │            │            │
      ▼            ▼            ▼
 Momentum    Angular Momentum  Energy
                   │
                   ▼
             Rolling Motion
```

---

# Important Formulae

| Quantity                   | Formula   |
| -------------------------- | --------- |
| Centre of Mass             | Σmixi/Σmi |
| Angular Velocity           | ω=dθ/dt   |
| Angular Acceleration       | α=dω/dt   |
| Linear Velocity            | v=rω      |
| Torque                     | τ=rFsinθ  |
| Angular Momentum           | L=Iω      |
| Moment of Inertia          | I=Σmr²    |
| Radius of Gyration         | k=√(I/M)  |
| Rotational KE              | ½Iω²      |
| Rolling Condition          | v=rω      |
| Parallel Axis Theorem      | I=Icm+Md² |
| Perpendicular Axis Theorem | Iz=Ix+Iy  |

---

# Solved Examples

## Example 1

### Question

A force of 10 N acts at a distance of 2 m from an axis. Find torque.

### Solution

```
τ = rF

= 2 × 10

= 20 Nm
```

### Answer

**20 Nm**

---

## Example 2

### Question

A disc has moment of inertia 5 kg m² and angular velocity 4 rad/s. Find rotational kinetic energy.

### Solution

```
KE = ½Iω²

= ½ × 5 × 16

= 40 J
```

### Answer

**40 J**

---

## Example 3

### Question

A wheel of radius 0.5 m rotates with angular velocity 10 rad/s. Find linear velocity.

### Solution

```
v = rω

= 0.5 × 10

= 5 m/s
```

### Answer

**5 m/s**

---

## Example 4

### Question

Find angular momentum of a body with I = 3 kg m² and ω = 6 rad/s.

### Solution

```
L = Iω

= 3 × 6

= 18 kg m²/s
```

### Answer

**18 kg m²/s**

---

## Example 5

### Question

A rolling body has KE = 50 J and rotational KE = 20 J. Find total energy.

### Solution

```
Total KE = 50 + 20

= 70 J
```

### Answer

**70 J**

---

# Common Mistakes

- Confusing torque with force.
- Forgetting the axis while calculating moment of inertia.
- Using incorrect MOI formulas.
- Ignoring rotational energy during rolling.
- Applying conservation of angular momentum when external torque exists.
- Mixing linear and angular quantities.

---

# Exam Tips

- Memorize standard moment of inertia values.
- Practice centre of mass numerical problems.
- Learn derivations of:
  - Parallel axis theorem.
  - Perpendicular axis theorem.
  - Rotational kinetic energy.
- Solve problems on torque and rolling motion.
- Understand conservation laws.

---

# Quick Revision

- Centre of Mass = Σmixi/Σmi.
- Torque = rFsinθ.
- Angular Momentum = Iω.
- Moment of Inertia = Σmr².
- Rotational KE = ½Iω².
- Rolling condition = v=rω.
- Equilibrium:
  - ΣF = 0
  - Στ = 0.

---

# Chapter Summary

- A **system of particles** allows complex bodies to be analyzed using the concept of **centre of mass**, which represents the effective point of motion.
- Rotational motion introduces angular quantities such as **angular displacement, velocity, acceleration, torque, and angular momentum**.
- **Moment of inertia** determines the resistance of a body to rotational acceleration and depends on mass distribution and axis of rotation.
- The **conservation of angular momentum** explains many rotational phenomena including spinning athletes and planetary motion.
- **Rolling motion** combines translation and rotation, requiring the condition **v = rω** for pure rolling.
- These concepts form the foundation of **mechanical engineering, robotics, aerospace, astronomy, and advanced physics**.

# ISC Class 11 Physics

