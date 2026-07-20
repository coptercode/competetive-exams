# Chapter 3: Current Electricity

> **Board:** CBSE  
> **Class:** 12  
> **Subject:** Physics  
> **Chapter:** Current Electricity

> **Note:** This chapter explains electric current, drift velocity, Ohm’s law, resistance, resistivity, cells, Kirchhoff’s laws, and electrical circuits.

---

# Introduction

The flow of electric charge through a conductor is called **electric current**.

Electric current is produced due to the movement of free electrons in a conductor.

---

# 1. Electric Current

## Definition

Electric current is the rate of flow of electric charge through a cross-sectional area of a conductor.

Formula:

\[
\boxed{
I=\frac{Q}{t}
}
\]

where:

- I = current
- Q = charge
- t = time

---

## SI Unit

\[
\boxed{\text{Ampere (A)}}
\]

---

# 2. Direction of Electric Current

By convention:

- Direction of current = direction of positive charge flow.
- Electron flow is opposite to conventional current.

```
Current →

Electron flow ←
```

---

# 3. Current Density

## Definition

Current flowing per unit area of cross-section.

Formula:

\[
\boxed{
J=\frac{I}{A}
}
\]

where:

- J = current density
- A = area

---

## Relation with Drift Velocity

\[
\boxed{
J=ne v_d
}
\]

where:

- n = number density of electrons
- e = charge of electron
- vd = drift velocity

---

# 4. Drift Velocity

## Definition

The average velocity acquired by free electrons in a conductor due to an applied electric field.

Symbol:

\[
v_d
\]

---

Without electric field:

```
Random motion of electrons
```

With electric field:

```
Net drift motion
```

---

# Formula

\[
\boxed{
v_d=\frac{eE\tau}{m}
}
\]

where:

- E = electric field
- τ = relaxation time
- m = electron mass

---

# 5. Mobility

## Definition

Drift velocity per unit electric field.

Formula:

\[
\boxed{
\mu=\frac{v_d}{E}
}
\]

---

Using drift velocity:

\[
\boxed{
\mu=\frac{e\tau}{m}
}
\]

---

# 6. Ohm's Law

## Statement

At constant temperature, current flowing through a conductor is directly proportional to potential difference across it.

\[
V\propto I
\]

Therefore:

\[
\boxed{
V=IR
}
\]

---

where:

- V = voltage
- I = current
- R = resistance

---

# V-I Graph

For an ohmic conductor:

```
V

|
|      /
|    /
|  /
|____________ I
```

Straight line.

---

# Non-Ohmic Conductors

Do not obey Ohm's law.

Examples:

- Diode
- Semiconductor

---

# 7. Resistance

## Definition

Opposition offered by a conductor to the flow of current.

Formula:

\[
\boxed{
R=\frac{V}{I}
}
\]

---

## SI Unit

\[
\boxed{\Omega}
\]

(Ohm)

---

# 8. Resistance and Dimensions of Conductor

Resistance depends on:

1. Length (l)
2. Area (A)
3. Material

Formula:

\[
\boxed{
R=\rho\frac{l}{A}
}
\]

---

where:

ρ = resistivity

---

# 9. Resistivity

## Definition

Resistance of a material having unit length and unit cross-sectional area.

Formula:

\[
\boxed{
\rho=\frac{RA}{l}
}
\]

---

## SI Unit

\[
\Omega m
\]

---

# Factors Affecting Resistivity

Depends on:

- Material
- Temperature

Does not depend on:

- Length
- Area

---

# 10. Temperature Dependence of Resistance

For metals:

\[
\boxed{
R_t=R_0(1+\alpha\Delta T)
}
\]

where:

- α = temperature coefficient of resistance

---

## Metals

Resistance increases with temperature.

---

## Semiconductors

Resistance decreases with temperature.

---

# 11. Combination of Resistances

---

# A. Series Combination

Circuit:

```
R1 ---- R2 ---- R3
```

Current is same.

\[
I=I_1=I_2=I_3
\]

Equivalent resistance:

\[
\boxed{
R=R_1+R_2+R_3
}
\]

---

# B. Parallel Combination

Circuit:

```
 |--R1--|
 |--R2--|
 |--R3--|
```

Voltage is same.

\[
V=V_1=V_2=V_3
\]

Equivalent resistance:

\[
\boxed{
\frac1R=
\frac1{R_1} +
\frac1{R_2} +
\frac1{R_3}
}
\]

---

# 12. Electrical Energy and Power

## Electrical Energy

\[
\boxed{
W=VIt
}
\]

Using:

\[
V=IR
\]

\[
W=I^2Rt
\]

---

# Electric Power

Rate of consumption of electrical energy.

\[
\boxed{
P=\frac{W}{t}
}
\]

---

Formula:

\[
\boxed{
P=VI
}
\]

Also:

\[
P=I^2R
\]

\[
P=\frac{V^2}{R}
\]

---

# 13. EMF and Internal Resistance

## EMF

The maximum potential difference of a cell when no current is drawn.

Symbol:

\[
E
\]

---

# Internal Resistance

Resistance inside a cell due to electrolyte.

Symbol:

\[
r
\]

---

# Terminal Voltage

When current flows:

\[
\boxed{
V=E-Ir
}
\]

---

# Combination of Cells

---

# Cells in Series

Total EMF:

\[
E=nE
\]

Total resistance:

\[
R_{total}=R+nr
\]

---

# Cells in Parallel

Used to reduce internal resistance.

---

# 14. Kirchhoff's Laws

Used to solve complex circuits.

---

# First Law (Junction Rule)

## Statement

The total current entering a junction equals total current leaving it.

\[
\boxed{
\sum I=0
}
\]

Based on:

```
Conservation of charge
```

---

# Second Law (Loop Rule)

## Statement

The algebraic sum of potential differences around a closed loop is zero.

\[
\boxed{
\sum V=0
}
\]

Based on:

```
Conservation of energy
```

---

# Sign Convention

## Moving through resistor:

Along current:

\[
-I R
\]

Against current:

\[
+IR
\]

---

## Across Cell

From negative to positive terminal:

\[
+E
\]

From positive to negative:

\[
-E
\]

---

# 15. Wheatstone Bridge

## Principle

Used to measure unknown resistance.

Circuit:

```
    P        Q

---/\/\/---/\/\/---

     |    |

     G

     |    |

---/\/\/---/\/\/---

    R        S
```

---

# Balance Condition

No current flows through galvanometer.

\[
\boxed{
\frac PR=\frac QS
}
\]

---

# 16. Meter Bridge

Based on:

```
Wheatstone bridge principle
```

---

Balance equation:

\[
\boxed{
\frac XR=
\frac{l}{100-l}
}
\]

where:

- X = unknown resistance
- R = known resistance

---

# 17. Potentiometer

## Principle

Potential drop across a wire is proportional to length.

\[
V\propto l
\]

---

# Applications

## 1. Comparing EMFs

\[
\boxed{
\frac{E_1}{E_2}
=

\frac{l_1}{l_2}
}
\]

---

## 2. Measuring Internal Resistance

\[
\boxed{
r=R\frac{l_1-l_2}{l_2}
}
\]

---

# Comparison Tables

## Resistance vs Resistivity

| Resistance            | Resistivity               |
| --------------------- | ------------------------- |
| Property of conductor | Property of material      |
| Depends on dimensions | Independent of dimensions |
| Unit Ω                | Unit Ωm                   |

---

## Series vs Parallel Resistance

| Series        | Parallel            |
| ------------- | ------------------- |
| Same current  | Same voltage        |
| R increases   | R decreases         |
| \(R=R_1+R_2\) | \(1/R=1/R_1+1/R_2\) |

---

# Important Formula Sheet

## Current

\[
I=\frac Qt
\]

---

## Current Density

\[
J=\frac IA
\]

---

## Drift Velocity

\[
v_d=\frac{eE\tau}{m}
\]

---

## Ohm's Law

\[
V=IR
\]

---

## Resistance

\[
R=\rho\frac lA
\]

---

## Power

\[
P=VI
\]

---

## Terminal Voltage

\[
V=E-Ir
\]

---

## Wheatstone Bridge

\[
\frac PR=\frac QS
\]

---

# Solved Examples

## Example 1

**Question:** A current of 2 A flows for 5 minutes. Find charge.

Given:

\[
I=2A
\]

\[
t=300s
\]

Using:

\[
Q=It
\]

\[
Q=2\times300
\]

\[
\boxed{Q=600C}
\]

---

## Example 2

**Question:** Find resistance if V=10V and I=2A.

\[
R=\frac VI
\]

\[
=\frac{10}{2}
\]

\[
\boxed{R=5\Omega}
\]

---

## Example 3

**Question:** Why does resistance increase with temperature in metals?

### Solution

Increasing temperature increases lattice vibrations. Electrons collide more frequently with atoms, reducing mobility and increasing resistance.

---

## Example 4

**Question:** State Kirchhoff's junction rule.

### Solution

The total current entering a junction equals the total current leaving the junction.

\[
\sum I=0
\]

---

## Example 5

**Question:** Why is a potentiometer more accurate than a voltmeter?

### Solution

A potentiometer measures potential difference without drawing current from the source, so it gives a more accurate measurement.

---

# Common Mistakes

- Confusing conventional current direction with electron flow direction.
- Mixing resistance and resistivity.
- Forgetting that resistivity depends only on material and temperature.
- Using series formulas for parallel circuits.
- Ignoring internal resistance of cells.
- Applying Kirchhoff sign conventions incorrectly.
- Confusing EMF with terminal voltage.
- Forgetting that potentiometer works on the principle of potential drop proportional to length.

---

# Chapter Summary

- Electric current is the flow of charge through a conductor.
- Drift velocity explains electron movement under an electric field.
- Ohm’s law relates voltage, current, and resistance.
- Resistance depends on material, length, and area.
- Resistivity is a material property.
- Cells have internal resistance that affects terminal voltage.
- Kirchhoff’s laws help solve complex circuits.
- Wheatstone bridge measures unknown resistance.
- Potentiometer accurately compares EMF and measures internal resistance.
- Electrical power and energy describe energy consumption in circuits.

# CBSE Class 12 Physics

