# Chapter 2: Current Electricity

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Physics  
> **Chapter:** Current Electricity

(Based on the ISC Class 12 Physics syllabus covering drift velocity, Ohm's law, resistance, Kirchhoff's laws, Wheatstone bridge, metre bridge, potentiometer, and temperature dependence of resistance.) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Current Electricity** deals with the flow of electric charges through conductors.

When free electrons move through a conductor due to an applied electric field, electric current is produced.

---

# 1. Electric Current

## Definition

Electric current is the rate of flow of electric charge through a cross-sectional area of a conductor.

---

Formula:

\[
I=\frac{Q}{t}
\]

Where:

- I = Current
- Q = Charge
- t = Time

---

# Unit

\[
Ampere(A)
\]

---

# Direction of Current

By convention:

```
Positive charge flow direction
```

Actual electron flow:

```
Opposite to current direction
```

---

# 2. Types of Current

## 1. Direct Current (DC)

Current flows in one direction.

Example:

Battery current

---

## 2. Alternating Current (AC)

Current changes direction periodically.

Example:

Household electricity

---

# 3. Current Density

## Definition

Current flowing per unit cross-sectional area of conductor.

Formula:

\[
J=\frac{I}{A}
\]

---

Unit:

\[
Am^{-2}
\]

---

# 4. Drift Velocity

## Definition

The average velocity acquired by free electrons in a conductor due to an applied electric field is called drift velocity.

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

# Relation Between Current and Drift Velocity

\[
I=nAe v_d
\]

Where:

- n = Number of free electrons per unit volume
- A = Area of conductor
- e = Charge of electron
- vd = Drift velocity

---

# 5. Mobility of Electron

## Definition

Mobility is the drift velocity acquired per unit electric field.

Formula:

\[
\mu=\frac{v_d}{E}
\]

---

Unit:

\[
m^2V^{-1}s^{-1}
\]

---

# 6. Ohm's Law

## Statement

At constant temperature, the current flowing through a conductor is directly proportional to the potential difference across it.

---

Formula:

\[
V\propto I
\]

Therefore:

\[
V=IR
\]

---

Where:

- V = Potential difference
- I = Current
- R = Resistance

---

# V-I Graph

For ohmic conductor:

```
V

│
│       /
│      /
│     /
│____/________ I
```

Slope:

\[
R=\frac{V}{I}
\]

---

# 7. Resistance

## Definition

Resistance is the opposition offered by a conductor to the flow of current.

---

Formula:

\[
R=\rho\frac{l}{A}
\]

---

Where:

- ρ = Resistivity
- l = Length
- A = Area

---

# Unit

\[
Ohm(\Omega)
\]

---

# 8. Resistivity

## Definition

Resistance of a material having unit length and unit area.

---

Formula:

\[
\rho=\frac{RA}{l}
\]

---

Unit:

\[
\Omega m
\]

---

# Factors Affecting Resistance

Resistance depends on:

1. Length

\[
R\propto l
\]

2. Area

\[
R\propto\frac1A
\]

3. Material

4. Temperature

---

# 9. Combination of Resistors

---

# Series Combination

Same current flows.

```
R₁ ─ R₂ ─ R₃
```

Equivalent resistance:

\[
R=R_1+R_2+R_3
\]

---

# Parallel Combination

Same voltage across resistors.

```
 ┌─R₁─┐
 ├─R₂─┤
 └─R₃─┘
```

Equivalent resistance:

\[
\frac1R=
\frac1{R_1}
+\frac1{R_2}
+\frac1{R_3}
\]

---

# 10. Temperature Dependence of Resistance

Resistance changes with temperature.

Formula:

\[
R_t=R_0(1+\alpha\Delta T)
\]

---

Where:

- R₀ = Resistance at initial temperature
- Rt = Resistance at final temperature
- α = Temperature coefficient

---

# Metals

Resistance increases with temperature.

\[
\alpha>0
\]

---

# Semiconductors

Resistance decreases with temperature.

\[
\alpha<0
\]

---

# 11. Electrical Energy and Power

---

# Electrical Energy

\[
W=VIt
\]

Using Ohm's law:

\[
W=I^2Rt
\]

\[
W=\frac{V^2t}{R}
\]

---

# Electrical Power

## Definition

Rate of consumption of electrical energy.

Formula:

\[
P=\frac{W}{t}
\]

---

Therefore:

\[
P=VI
\]

Also:

\[
P=I^2R
\]

\[
P=\frac{V^2}{R}
\]

---

# Unit

\[
Watt(W)
\]

---

# 12. Cells and EMF

## EMF

The energy supplied by a cell per unit charge is called electromotive force.

Formula:

\[
E=\frac{W}{Q}
\]

---

# Internal Resistance

Every cell has resistance inside it called internal resistance.

---

Terminal Voltage:

\[
V=E-Ir
\]

Where:

- E = EMF
- r = Internal resistance

---

# 13. Combination of Cells

---

# Cells in Series

Equivalent EMF:

\[
E=nE
\]

Equivalent resistance:

\[
r=nr
\]

---

# Cells in Parallel

For identical cells:

\[
E_{eq}=E
\]

\[
r_{eq}=\frac rn
\]

---

# 14. Kirchhoff's Laws

Used to solve complex electrical circuits.

---

# Kirchhoff's First Law

## Junction Rule

## Statement

The algebraic sum of currents at a junction is zero.

---

Formula:

\[
\sum I=0
\]

Based on:

```
Conservation of charge
```

---

# Kirchhoff's Second Law

## Loop Rule

## Statement

The algebraic sum of potential differences around a closed loop is zero.

---

Formula:

\[
\sum V=0
\]

Based on:

```
Conservation of energy
```

---

# Sign Convention

Moving:

Positive to negative:

\[
-V
\]

Negative to positive:

\[
+V
\]

---

# 15. Wheatstone Bridge

## Definition

A network used to measure unknown resistance.

---

Circuit:

```
       R₁       R₂

        |       |

        G

        |       |

       R₃       R₄
```

---

# Balance Condition

When galvanometer shows zero current:

\[
\frac{R_1}{R_2}
=

\frac{R_3}{R_4}
\]

---

# Applications

- Measuring unknown resistance
- Sensor circuits

---

# 16. Metre Bridge

## Definition

A practical form of Wheatstone bridge using a 1 metre resistance wire.

---

Balance condition:

\[
\frac{R}{S}
=

\frac{l}{100-l}
\]

---

Where:

- R = Unknown resistance
- S = Known resistance
- l = Balancing length

---

# Uses

- Find unknown resistance
- Compare resistances

---

# 17. Potentiometer

## Definition

A device used to measure potential difference without drawing current.

---

# Principle

Potential drop across a uniform wire is directly proportional to length.

\[
V\propto l
\]

---

# Potential Gradient

\[
k=\frac Vl
\]

---

# 18. Measurement of EMF Using Potentiometer

At balance point:

\[
E=kl
\]

---

Comparison of EMF:

\[
\frac{E_1}{E_2}
=

\frac{l_1}{l_2}
\]

---

# 19. Finding Internal Resistance of Cell

Formula:

\[
r=
R
\frac{l_1-l_2}{l_2}
\]

Where:

- R = External resistance
- l₁ = Open circuit length
- l₂ = Closed circuit length

---

# Flowchart Summary

```
              CURRENT ELECTRICITY

                      │

       ┌──────────────┴──────────────┐

       ▼                             ▼

   Electric Current             Resistance

       │                             │

       ▼                             ▼

 Drift Velocity              Ohm's Law

       │                             │

       ▼                             ▼

 Kirchhoff Laws          Wheatstone Bridge

                                    │

                                    ▼

                              Potentiometer
```

---

# Important Formula Sheet

| Concept              | Formula      |
| -------------------- | ------------ |
| Current              | I=Q/t        |
| Current density      | J=I/A        |
| Drift current        | I=nAevd      |
| Ohm's law            | V=IR         |
| Resistance           | R=ρl/A       |
| Power                | P=VI         |
| Energy               | W=VIt        |
| Temperature relation | Rt=R₀(1+αΔT) |
| Kirchhoff junction   | ΣI=0         |
| Wheatstone bridge    | R₁/R₂=R₃/R₄  |
| Potentiometer        | V∝l          |

---

# Board Important Questions

## 1. State Ohm's law.

**Answer:**

At constant temperature, current through a conductor is directly proportional to the potential difference across it.

\[
V=IR
\]

---

## 2. Explain drift velocity.

**Answer:**

The average velocity acquired by free electrons in a conductor due to an applied electric field is called drift velocity.

---

## 3. State Kirchhoff's laws.

**Answer:**

1. Junction law: Sum of currents entering and leaving a junction is zero.

2. Loop law: Sum of potential changes around a closed loop is zero.

---

## 4. State principle of potentiometer.

**Answer:**

The potential drop across a uniform wire is directly proportional to its length.

---

# Common Mistakes

- Confusing electron flow and conventional current direction.
- Forgetting resistivity depends on material.
- Mixing series and parallel resistance formulas.
- Using wrong Kirchhoff sign convention.
- Confusing EMF and terminal voltage.

---

# Quick Revision

```
Charge Flow → Current

Current → Drift Velocity

Voltage → Resistance

Resistance → Ohm's Law

Circuit Analysis → Kirchhoff Laws

Measurement → Bridge + Potentiometer
```

Important equations:

\[
I=nAev_d
\]

\[
V=IR
\]

\[
R=\rho\frac lA
\]

\[
P=VI
\]

\[
\frac{R_1}{R_2}=\frac{R_3}{R_4}
\]

---

# Chapter Summary

- **Current Electricity** explains the movement of electric charges through conductors.
- Drift velocity connects microscopic electron motion with macroscopic current.
- Ohm's law relates voltage, current, and resistance.
- Kirchhoff's laws help solve complex electrical circuits.
- Wheatstone bridge and metre bridge measure unknown resistances.
- Potentiometers provide accurate measurements of EMF and internal resistance without drawing current.

# ISC Class 12 Physics

