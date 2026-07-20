# Chapter 7: Alternating Current

> **Board:** CBSE  
> **Class:** 12  
> **Subject:** Physics  
> **Chapter:** Alternating Current

> **Note:** This chapter explains alternating voltage and current, RMS values, reactance, impedance, LCR circuits, resonance, power in AC circuits, transformers, and AC generators.

---

# Introduction

The current whose magnitude and direction change periodically with time is called **alternating current (AC)**.

Example:

Household electricity supply.

---

# 1. Alternating Current

Instantaneous value of current:

\[
\boxed{
i=I_0\sin\omega t
}
\]

where:

- i = instantaneous current
- I₀ = peak current
- ω = angular frequency

---

# Alternating Voltage

\[
\boxed{
v=V_0\sin\omega t
}
\]

where:

- V₀ = peak voltage

---

# 2. Important Terms

---

# Peak Value

Maximum value of current or voltage.

Symbol:

\[
I_0,\ V_0
\]

---

# Time Period

Time taken for one complete cycle.

\[
\boxed{
T=\frac{1}{f}
}
\]

---

# Frequency

Number of cycles per second.

Unit:

\[
Hz
\]

---

# Angular Frequency

\[
\boxed{
\omega=2\pi f
}
\]

---

# 3. Mean Value of AC

Average value of AC over a complete cycle:

\[
\boxed{0}
\]

because positive and negative halves cancel.

---

# 4. RMS Value of AC

## Definition

The effective value of AC that produces the same heating effect as an equivalent DC current.

---

RMS current:

\[
\boxed{
I_{rms}=\frac{I_0}{\sqrt2}
}
\]

---

RMS voltage:

\[
\boxed{
V_{rms}=\frac{V_0}{\sqrt2}
}
\]

---

For household supply:

\[
V_{rms}=220V
\]

---

# 5. AC Through a Resistor

Circuit:

```
AC Source ---- R
```

Voltage:

\[
v=V_0\sin\omega t
\]

Current:

\[
i=I_0\sin\omega t
\]

---

## Phase Relationship

Voltage and current are in the same phase.

\[
\boxed{\phi=0}
\]

---

# 6. AC Through an Inductor

Inductive circuit:

```
AC Source ---- L
```

---

Inductive reactance:

\[
\boxed{
X_L=\omega L
}
\]

---

Current:

\[
\boxed{
I=\frac{V}{X_L}
}
\]

---

## Phase Relationship

Current lags voltage by:

\[
90^\circ
\]

or

\[
\frac{\pi}{2}
\]

---

# 7. AC Through a Capacitor

Capacitive circuit:

```
AC Source ---- C
```

---

Capacitive reactance:

\[
\boxed{
X_C=\frac1{\omega C}
}
\]

---

Current:

\[
\boxed{
I=\frac{V}{X_C}
}
\]

---

## Phase Relationship

Current leads voltage by:

\[
90^\circ
\]

---

# 8. Series LCR Circuit

Combination of:

- Resistance (R)
- Inductance (L)
- Capacitance (C)

---

Circuit:

```
R ---- L ---- C
```

---

# Impedance

The opposition offered by an AC circuit is called impedance.

Symbol:

\[
Z
\]

---

Formula:

\[
\boxed{
Z=\sqrt{R^2+(X_L-X_C)^2}
}
\]

---

Current:

\[
\boxed{
I=\frac VZ
}
\]

---

# 9. Phase Angle

The phase difference between voltage and current:

\[
\boxed{
\tan\phi=
\frac{X_L-X_C}{R}
}
\]

---

# Cases

## Inductive Circuit

\[
X_L>X_C
\]

Current lags.

---

## Capacitive Circuit

\[
X_C>X_L
\]

Current leads.

---

## Pure Resistive Circuit

\[
X_L=X_C
\]

Phase difference:

\[
\phi=0
\]

---

# 10. Resonance in LCR Circuit

## Definition

The condition when inductive reactance equals capacitive reactance.

\[
\boxed{
X_L=X_C
}
\]

---

Therefore:

\[
\omega L=\frac1{\omega C}
\]

---

Resonant frequency:

\[
\boxed{
\omega_0=\frac1{\sqrt{LC}}
}
\]

or

\[
\boxed{
f_0=\frac1{2\pi\sqrt{LC}}
}
\]

---

# Characteristics of Resonance

1. Impedance is minimum.

\[
Z=R
\]

2. Current is maximum.

\[
I=\frac VR
\]

3. Power factor is unity.

\[
\cos\phi=1
\]

---

# Applications

- Radio tuning
- Signal selection
- Filters

---

# 11. Power in AC Circuit

Average power:

\[
\boxed{
P=V_{rms}I_{rms}\cos\phi
}
\]

---

where:

\[
\cos\phi
\]

is the power factor.

---

# Power Factor

\[
\boxed{
\cos\phi=\frac RZ
}
\]

---

# Special Cases

## Pure Resistance

\[
\phi=0
\]

\[
P=VI
\]

---

## Pure Inductor or Capacitor

\[
\phi=90^\circ
\]

\[
P=0
\]

Called:

```
Wattless current
```

---

# 12. Transformer

## Definition

A device used to increase or decrease AC voltage.

---

Principle:

\[
\boxed{\text{Mutual Induction}}
\]

---

# Construction

Parts:

1. Primary coil
2. Secondary coil
3. Laminated iron core

---

# Transformer Equation

\[
\boxed{
\frac{V_s}{V_p}
=

\frac{N_s}{N_p}
}
\]

---

# Step-Up Transformer

Increases voltage.

Condition:

\[
N_s>N_p
\]

---

# Step-Down Transformer

Decreases voltage.

Condition:

\[
N_s<N_p
\]

---

# Current Relation

For ideal transformer:

\[
\boxed{
V_pI_p=V_sI_s
}
\]

---

# Efficiency

\[
\boxed{
\eta=
\frac{P_{out}}{P_{in}}
\times100
}
\]

---

# 13. AC Generator

## Principle

Electromagnetic induction.

---

# Working

A coil rotates in a magnetic field.

Changing magnetic flux produces alternating EMF.

---

Generated EMF:

\[
\boxed{
e=E_0\sin\omega t
}
\]

---

Maximum EMF:

\[
\boxed{
E_0=NBA\omega
}
\]

---

# 14. Phasor Representation

A phasor is a rotating vector used to represent AC quantities.

---

# Phase Relations

## Resistor

```
V and I same direction
```

---

## Inductor

```
V leads I by 90°
```

---

## Capacitor

```
I leads V by 90°
```

---

# Comparison Tables

## AC vs DC

| AC                             | DC                 |
| ------------------------------ | ------------------ |
| Direction changes periodically | Direction constant |
| Frequency exists               | Frequency zero     |
| Used in power transmission     | Used in batteries  |

---

## Inductor vs Capacitor

| Inductor               | Capacitor              |
| ---------------------- | ---------------------- |
| \(X_L=\omega L\)       | \(X_C=1/\omega C\)     |
| Current lags voltage   | Current leads voltage  |
| Stores magnetic energy | Stores electric energy |

---

# Important Formula Sheet

## AC Current

\[
i=I_0\sin\omega t
\]

---

## RMS Current

\[
I_{rms}=\frac{I_0}{\sqrt2}
\]

---

## Inductive Reactance

\[
X_L=\omega L
\]

---

## Capacitive Reactance

\[
X_C=\frac1{\omega C}
\]

---

## Impedance

\[
Z=\sqrt{R^2+(X_L-X_C)^2}
\]

---

## Resonant Frequency

\[
f_0=\frac1{2\pi\sqrt{LC}}
\]

---

## AC Power

\[
P=V_{rms}I_{rms}\cos\phi
\]

---

## Transformer Ratio

\[
\frac{V_s}{V_p}
=

\frac{N_s}{N_p}
\]

---

# Solved Examples

## Example 1

**Question:** Find RMS value of AC current having peak value 10 A.

Formula:

\[
I_{rms}=\frac{I_0}{\sqrt2}
\]

\[
=\frac{10}{1.414}
\]

\[
\boxed{I_{rms}=7.07A}
\]

---

## Example 2

**Question:** Find inductive reactance of an inductor of 0.5 H at 50 Hz.

Given:

\[
L=0.5H
\]

\[
f=50Hz
\]

\[
\omega=2\pi f
\]

\[
X_L=\omega L
\]

\[
=2\pi(50)(0.5)
\]

\[
\boxed{X_L=157\Omega}
\]

---

## Example 3

**Question:** What happens at resonance in an LCR circuit?

### Solution

At resonance:

\[
X_L=X_C
\]

Impedance becomes minimum and current becomes maximum.

---

## Example 4

**Question:** Why does a transformer work only on AC?

### Solution

Transformer requires changing magnetic flux. DC produces constant flux and cannot induce EMF in the secondary coil.

---

## Example 5

**Question:** What is wattless current?

### Solution

Current in a pure inductor or capacitor where average power consumption is zero is called wattless current.

---

# Common Mistakes

- Confusing peak value and RMS value.
- Forgetting that average AC value over one cycle is zero.
- Mixing leading and lagging phase relationships.
- Using \(X_L\) and \(X_C\) formulas incorrectly.
- Forgetting that resonance occurs when \(X_L=X_C\).
- Using transformer equations for DC.
- Forgetting power factor in AC power calculations.
- Confusing impedance with resistance.

---

# Chapter Summary

- Alternating current changes magnitude and direction periodically.
- RMS values represent the effective values of AC.
- Inductors oppose AC through inductive reactance.
- Capacitors oppose AC through capacitive reactance.
- LCR circuits have resonance when:

\[
X_L=X_C
\]

- AC power depends on power factor:

\[
P=V_{rms}I_{rms}\cos\phi
\]

- Transformers work on mutual induction and change AC voltage levels.
- AC generators convert mechanical energy into electrical energy using electromagnetic induction.

# CBSE Class 12 Physics

