# Chapter 12: Linear Programming

> **Board:** ISC  
> **Class:** 12  
> **Subject:** Mathematics  
> **Chapter:** Linear Programming

(Topics covered from uploaded ISC Class 12 Mathematics outline: formulation of linear programming problems, feasible regions, graphical solutions, and optimization of objective functions) :contentReference[oaicite:0]{index=0}

---

# Introduction

**Linear Programming (LP)** is a mathematical technique used to find the best possible solution under given constraints.

The objective may be:

- Maximization of profit
- Minimization of cost
- Maximum production
- Minimum resource usage

Applications:

- Business planning
- Manufacturing
- Transportation
- Economics
- Resource allocation

---

# 1. Basic Terms of Linear Programming

---

# Linear Programming Problem (LPP)

A problem involving:

1. Linear objective function
2. Linear constraints
3. Non-negative variables

is called a Linear Programming Problem.

---

# 2. Decision Variables

## Definition

The variables whose values are to be determined for optimizing the objective are called decision variables.

---

Example:

Let:

```
x = number of chairs produced

y = number of tables produced
```

---

# 3. Objective Function

## Definition

The function that has to be maximized or minimized is called the objective function.

---

General form:

\[
Z=ax+by
\]

where:

- Z = objective value
- x,y = decision variables

---

Example:

Maximum profit:

\[
Z=50x+40y
\]

---

# 4. Constraints

## Definition

The limitations or restrictions in an LPP are called constraints.

---

Example:

If available labour is limited:

\[
2x+3y\leq100
\]

---

# Types of Constraints

## Less Than or Equal To

\[
ax+by\leq c
\]

---

## Greater Than or Equal To

\[
ax+by\geq c
\]

---

## Equality Constraint

\[
ax+by=c
\]

---

# 5. Non-Negativity Restrictions

Since quantities cannot be negative:

\[
x\geq0
\]

\[
y\geq0
\]

---

# 6. Formulation of Linear Programming Problem

Steps:

---

## Step 1

Identify decision variables.

---

## Step 2

Form objective function.

---

## Step 3

Write constraints.

---

## Step 4

Add non-negativity conditions.

---

# Example

A company produces two products A and B.

Profit:

Product A = ₹40

Product B = ₹30

Let:

\[
x=A
\]

\[
y=B
\]

Objective:

\[
Maximize Z=40x+30y
\]

---

# 7. Graphical Method

The graphical method is used for solving LPPs with two variables.

---

# Steps

### Step 1

Convert inequalities into equations.

---

### Step 2

Draw lines on graph.

---

### Step 3

Identify feasible region.

---

### Step 4

Find corner points.

---

### Step 5

Calculate objective function value.

---

### Step 6

Choose maximum or minimum value.

---

# 8. Feasible Region

## Definition

The common region satisfying all constraints is called the feasible region.

---

# Types

## Bounded Region

A closed finite region.

---

## Unbounded Region

An open infinite region.

---

# 9. Feasible Solution

Any point inside or on the boundary of feasible region satisfying all constraints is called a feasible solution.

---

# 10. Optimal Solution

The feasible solution giving maximum or minimum value of objective function is called optimal solution.

---

# 11. Corner Point Method

According to the fundamental theorem:

The optimum value of an objective function occurs at one of the corner points of the feasible region.

---

# Procedure

If corner points are:

\[
(x_1,y_1)
\]

\[
(x_2,y_2)
\]

\[
(x_3,y_3)
\]

Calculate:

\[
Z=ax+by
\]

at each point.

Choose:

- Highest value → Maximum
- Lowest value → Minimum

---

# 12. Graphical Representation

Example constraints:

\[
x+y\leq5
\]

\[
x\geq0
\]

\[
y\geq0
\]

Graph:

```
        y
        |
      5 |\
        | \
        |  \
        |   \
        |____\_____x
             5
```

The shaded area is the feasible region.

---

# 13. Maximization Problem

## Definition

Finding the maximum value of objective function.

Example:

Maximum profit:

\[
Max Z=5x+3y
\]

---

# 14. Minimization Problem

## Definition

Finding the minimum value of objective function.

Example:

Minimum cost:

\[
Min Z=4x+6y
\]

---

# 15. Special Cases in Linear Programming

---

# Multiple Optimal Solutions

When the objective function has same value at multiple points.

---

# Infeasible Solution

When no common feasible region exists.

---

# Unbounded Solution

When objective function can increase indefinitely.

---

# Redundant Constraint

A constraint that does not affect feasible region.

---

# 16. Applications of Linear Programming

---

## Production Planning

Determining optimum production quantity.

---

## Transportation

Finding minimum transportation cost.

---

## Agriculture

Optimizing crop production.

---

## Finance

Maximizing investment returns.

---

# ASCII Flowchart

```
            LINEAR PROGRAMMING
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
   Variables    Constraints Objective
        │           │           │
        └───────────┼───────────┘
                    ▼
            Feasible Region
                    │
                    ▼
             Corner Points
                    │
                    ▼
           Optimal Solution
```

---

# Important Formulae

| Concept            | Formula              |
| ------------------ | -------------------- |
| Objective Function | Z=ax+by              |
| Constraint         | ax+by≤c              |
| Non-negativity     | x≥0,y≥0              |
| Maximum            | Highest Z value      |
| Minimum            | Lowest Z value       |
| Feasible Region    | Common solution area |

---

# Solved Examples

## Example 1

Maximize:

\[
Z=3x+2y
\]

Subject to:

\[
x+y\leq4
\]

\[
x\geq0,y\geq0
\]

Corner points:

```
(0,0)

(4,0)

(0,4)
```

Calculate:

At (0,0):

\[
Z=0
\]

At (4,0):

\[
Z=12
\]

At (0,4):

\[
Z=8
\]

Maximum value:

\[
Z=12
\]

at:

\[
(4,0)
\]

---

## Example 2

Minimize:

\[
Z=2x+y
\]

Constraints:

\[
x+y\geq5
\]

\[
x,y\geq0
\]

Check corner points and select minimum Z value.

---

## Example 3

Identify objective function:

Profit:

Chair = ₹50

Table = ₹100

Let:

Chair = x

Table = y

Therefore:

\[
Z=50x+100y
\]

---

## Example 4

Write non-negativity constraints.

Answer:

\[
x\geq0
\]

\[
y\geq0
\]

---

## Example 5

A factory has:

Labour constraint:

\[
2x+y\leq100
\]

Material constraint:

\[
x+3y\leq90
\]

Objective:

\[
Max Z=40x+50y
\]

---

# Common Mistakes

- Forgetting non-negativity conditions.
- Incorrectly drawing inequality lines.
- Choosing wrong feasible region.
- Missing corner points.
- Confusing maximum and minimum problems.
- Not checking all vertices.

---

# Exam Tips

- Always define variables first.
- Convert inequalities carefully.
- Draw accurate graphs.
- Mark all corner points.
- Evaluate objective function at every corner.
- Remember optimum occurs at corner points.

---

# Quick Revision

- LPP contains:

```
Variables + Constraints + Objective Function
```

- Objective:

\[
Z=ax+by
\]

- Restrictions:

\[
ax+by\leq c
\]

- Solution method:

```
Graph → Feasible Region → Corner Points → Optimal Value
```

---

# Chapter Summary

- **Linear Programming** is a mathematical optimization technique used to find the best solution under limited resources.
- It involves defining decision variables, creating objective functions, and applying constraints.
- The graphical method solves two-variable problems by identifying feasible regions and testing corner points.
- The optimal solution is obtained by maximizing or minimizing the objective function.
- Linear programming is widely used in **business, economics, production planning, transportation, finance, and resource management**.

# ISC Class 12 Mathematics

