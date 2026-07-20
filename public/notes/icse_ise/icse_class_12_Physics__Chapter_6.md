# Chapter 6: Alternating Current (AC Circuits)

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Physics  
> **Chapter:** Alternating Current

(Based on the ISC Class 12 Physics syllabus covering alternating current, AC voltage, RMS values, reactance, impedance, LCR circuits, resonance, and transformers.) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Alternating Current (AC)** is an electric current whose magnitude and direction change periodically with time.

Example:

```
Household electricity supply
```

---

# 1. Direct Current vs Alternating Current

| DC                 | AC                             |
| ------------------ | ------------------------------ |
| Constant direction | Direction changes periodically |
| Constant magnitude | Magnitude changes with time    |
| Battery source     | Generator source               |

---

# 2. AC Voltage and Current

The instantaneous value of alternating current is:

\[
i=I_0\sin\omega t
\]

Where:

- i = Instantaneous current
- I₀ = Peak current
- ω = Angular frequency
- t = Time

---

# AC Voltage

\[
v=V_0\sin\omega t
\]

Where:

- V₀ = Maximum voltage

---

# 3. Terms Related to AC

---

# Peak Value

The maximum value reached by AC current or voltage.

Symbol:

\[
I_0,\ V_0
\]

---

# Time Period

Time taken for one complete cycle.

Symbol:

\[
T
\]

---

# Frequency

Number of cycles per second.

Formula:

\[
f=\frac1T
\]

Unit:

\[
Hz
\]

---

# Angular Frequency

\[
\omega=2\pi f
\]

---

# 4. Average Value of AC

For a complete cycle:

\[
I_{avg}=0
\]

Because positive and negative halves cancel.

---

For half cycle:

\[
I_{avg}=\frac{2I_0}{\pi}
\]

---

# 5. RMS Value of AC

## Definition

The RMS value of AC is the value of DC current that produces the same heating effect.

---

Formula:

\[
I_{rms}=\frac{I_0}{\sqrt2}
\]

---

Voltage:

\[
V_{rms}=\frac{V_0}{\sqrt2}
\]

---

For household supply:

\[
V_{rms}=220V
\]

---

# 6. AC Through Pure Resistor

Circuit:

```
AC Source ─ R
```

---

Voltage:

\[
v=V_0\sin\omega t
\]

Current:

\[
i=I_0\sin\omega t
\]

---

Phase relation:

```
Voltage and Current are in phase
```

---

Phase difference:

\[
\phi=0
\]

---

# Power Consumed

\[
P=V_{rms}I_{rms}
\]

---

# 7. AC Through Pure Inductor

Circuit:

```
AC Source ─ L
```

---

Inductive reactance:

\[
X_L=\omega L
\]

---

Current:

\[
I=\frac VX_L
\]

---

Phase relation:

```
Current lags voltage by 90°
```

---

Phase difference:

\[
\phi=90^\circ
\]

---

# Average Power

\[
P=0
\]

Reason:

Pure inductor stores and returns energy.

---

# 8. AC Through Pure Capacitor

Circuit:

```
AC Source ─ C
```

---

Capacitive reactance:

\[
X_C=\frac1{\omega C}
\]

---

Current:

\[
I=\frac V{X_C}
\]

---

Phase relation:

```
Current leads voltage by 90°
```

---

Average Power:

\[
P=0
\]

---

# 9. Reactance

## Definition

Opposition offered by inductors and capacitors to AC is called reactance.

---

# Inductive Reactance

\[
X_L=\omega L
\]

---

# Capacitive Reactance

\[
X_C=\frac1{\omega C}
\]

---

Unit:

\[
Ohm(\Omega)
\]

---

# 10. Series LCR Circuit

Circuit:

```
      R
      |
L ---- C
```

Contains:

- Resistance
- Inductance
- Capacitance

---

# Impedance

## Definition

Total opposition offered by LCR circuit to AC.

Symbol:

\[
Z
\]

---

Formula:

\[
Z=\sqrt{R^2+(X_L-X_C)^2}
\]

---

Current:

\[
I=\frac VZ
\]

---

# 11. Phase Angle in LCR Circuit

Formula:

\[
\tan\phi=
\frac{X_L-X_C}{R}
\]

---

Cases:

---

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

## Resistive Circuit

\[
X_L=X_C
\]

Voltage and current are in phase.

---

# 12. Resonance in LCR Circuit

## Definition

The condition when inductive reactance equals capacitive reactance.

---

Condition:

\[
X_L=X_C
\]

---

Therefore:

\[
\omega L=\frac1{\omega C}
\]

---

Resonant Frequency:

\[
f_0=
\frac1{2\pi\sqrt{LC}}
\]

---

# At Resonance

Impedance:

\[
Z=R
\]

Current:

\[
I=\frac VR
\]

Maximum current flows.

---

# Applications of Resonance

- Radio tuning
- TV receivers
- Communication circuits

---

# 13. Power in AC Circuit

Average power:

\[
P=V_{rms}I_{rms}\cos\phi
\]

---

Where:

\[
\cos\phi
\]

is called power factor.

---

# 14. Power Factor

## Definition

The cosine of phase angle between voltage and current.

Formula:

\[
Power\ Factor=\cos\phi
\]

---

For:

## Pure Resistance

\[
\cos\phi=1
\]

---

## Pure Inductor

\[
\cos\phi=0
\]

---

## Pure Capacitor

\[
\cos\phi=0
\]

---

# 15. Transformer in AC

Transformer works on:

```
Mutual Induction
```

---

# Transformer Equation

\[
\frac{V_s}{V_p}
=

\frac{N_s}{N_p}
\]

---

# Step-Up Transformer

\[
N_s>N_p
\]

Voltage increases.

---

# Step-Down Transformer

\[
N_s<N_p
\]

Voltage decreases.

---

# 16. AC Generator

## Principle

Based on:

```
Electromagnetic Induction
```

---

Generated emf:

\[
e=E_0\sin\omega t
\]

---

# 17. Choke Coil

## Definition

A device used to control AC current without large power loss.

---

Uses:

- Fluorescent lamps
- AC circuits

---

# 18. LC Oscillations

Energy alternates between:

```
Electric field of capacitor

        ↕

Magnetic field of inductor
```

---

Energy stored:

Capacitor:

\[
U=\frac12CV^2
\]

Inductor:

\[
U=\frac12LI^2
\]

---

# Flowchart Summary

```
              ALTERNATING CURRENT

                    │

        ┌───────────┴───────────┐

        ▼                       ▼

      AC Basics              AC Circuits

        │                       │

        ▼                       ▼

 RMS Values              LCR Circuit

        │                       │

        ▼                       ▼

 Reactance              Resonance

        │                       │

        ▼                       ▼

 Transformer            Power Factor
```

---

# Important Formula Sheet

| Concept              | Formula          |
| -------------------- | ---------------- |
| AC current           | i=I₀sinωt        |
| Angular frequency    | ω=2πf            |
| RMS current          | I₀/√2            |
| Inductive reactance  | XL=ωL            |
| Capacitive reactance | XC=1/ωC          |
| Impedance            | Z=√(R²+(XL−XC)²) |
| Resonance frequency  | f₀=1/2π√LC       |
| Power                | P=VrmsIrmscosφ   |
| Transformer ratio    | Vs/Vp=Ns/Np      |

---

# Board Important Questions

## 1. Define RMS value of AC.

**Answer:**

The RMS value of AC is the value of DC current that produces the same heating effect in a resistor.

\[
I_{rms}=\frac{I_0}{\sqrt2}
\]

---

## 2. Explain resonance in LCR circuit.

**Answer:**

Resonance occurs when inductive reactance equals capacitive reactance.

\[
X_L=X_C
\]

At resonance, current becomes maximum.

---

## 3. What is power factor?

**Answer:**

Power factor is the cosine of phase angle between voltage and current.

\[
\cos\phi
\]

---

## 4. Why does pure inductor consume zero average power?

**Answer:**

Because energy stored in the magnetic field is returned back to the source during each cycle.

---

# Common Mistakes

- Confusing RMS value with peak value.
- Forgetting phase differences.
- Mixing inductive and capacitive reactance formulas.
- Forgetting resonance condition.
- Using transformer formulas incorrectly.

---

# Quick Revision

```
AC → RMS → Reactance → Impedance → Resonance → Power
```

Important equations:

\[
I_{rms}=\frac{I_0}{\sqrt2}
\]

\[
X_L=\omega L
\]

\[
X_C=\frac1{\omega C}
\]

\[
Z=\sqrt{R^2+(X_L-X_C)^2}
\]

\[
f_0=\frac1{2\pi\sqrt{LC}}
\]

---

# Chapter Summary

- **Alternating Current** explains circuits where current changes periodically.
- RMS values represent the effective heating value of AC.
- Inductors and capacitors oppose AC through reactance.
- LCR circuits show resonance when inductive and capacitive reactances become equal.
- Power factor determines efficiency of AC circuits.
- Transformers and generators are important applications of AC principles.

# ISC Class 12 Physics

